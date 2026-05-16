'use strict';
require('dotenv').config();

const express   = require('express');
const session   = require('express-session');
const cors      = require('cors');
const path      = require('path');
const crypto    = require('crypto');
const Anthropic = require('@anthropic-ai/sdk');
const OpenAI    = require('openai');

// ─── Admin credentials (from .env) ───────────────────────────
const ADMIN_USERNAME      = process.env.ADMIN_USERNAME      || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';  // salt:hash

function verifyPassword(plain, storedHash) {
  if (!storedHash) return false;
  const [salt, hash] = storedHash.split(':');
  const attempt = crypto.pbkdf2Sync(plain, salt, 310000, 32, 'sha256').toString('hex');
  return crypto.timingSafeEqual(Buffer.from(attempt, 'hex'), Buffer.from(hash, 'hex'));
}

function requireAdmin(req, res, next) {
  if (req.session?.adminAuth) return next();
  res.status(401).json({ error: 'Admin login required', code: 'ADMIN_REQUIRED' });
}

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── Model IDs ────────────────────────────────────────────────
const CLAUDE_MODEL = 'claude-sonnet-4-6';
const GPT_MODEL    = 'gpt-4o';

// ─── Platform keys (from .env — server-side fallback) ─────────
// If set, the app works without users connecting their own keys.
// Users who DO connect their own keys always take priority.
const PLATFORM_CLAUDE_KEY   = process.env.ANTHROPIC_API_KEY  || null;
const PLATFORM_GPT_KEY      = process.env.OPENAI_API_KEY     || null;
const PLATFORM_OPENCODE_KEY = process.env.OPENCODE_API_KEY   || null;
const OPENCODE_BASE_URL     = process.env.OPENCODE_BASE_URL  || null;
const OPENCODE_MODEL        = process.env.OPENCODE_MODEL     || GPT_MODEL;

// Which platform provider is active (for status endpoint)
function activePlatformProvider() {
  if (PLATFORM_CLAUDE_KEY)   return 'claude';
  if (PLATFORM_GPT_KEY)      return 'gpt';
  if (PLATFORM_OPENCODE_KEY) return 'opencode';
  return null;
}

const PLATFORM_PROVIDER = activePlatformProvider();
const PLATFORM_LABEL = {
  claude:   `Claude ${CLAUDE_MODEL}`,
  gpt:      `GPT ${GPT_MODEL}`,
  opencode: OPENCODE_MODEL ? `OpenCode · ${OPENCODE_MODEL}` : 'OpenCode AI',
}[PLATFORM_PROVIDER] || null;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || `company-os-${Math.random()}`,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

// ─── Auth (admin-protected) ───────────────────────────────────
app.post('/api/auth/claude', requireAdmin, async (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey?.startsWith('sk-ant-'))
    return res.status(400).json({ error: 'Invalid key — must start with sk-ant-' });

  try {
    const client = new Anthropic({ apiKey });
    await client.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 5,
      messages: [{ role: 'user', content: 'hi' }]
    });
    req.session.claudeKey = apiKey;
    req.session.claudeConnected = true;
    res.json({ success: true, provider: 'claude', model: CLAUDE_MODEL });
  } catch (err) {
    res.status(401).json({ error: 'Key validation failed: ' + err.message });
  }
});

app.post('/api/auth/gpt', requireAdmin, async (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey?.startsWith('sk-'))
    return res.status(400).json({ error: 'Invalid key — must start with sk-' });

  try {
    const client = new OpenAI({ apiKey });
    await client.chat.completions.create({
      model: GPT_MODEL,
      max_tokens: 5,
      messages: [{ role: 'user', content: 'hi' }]
    });
    req.session.gptKey = apiKey;
    req.session.gptConnected = true;
    res.json({ success: true, provider: 'gpt', model: GPT_MODEL });
  } catch (err) {
    res.status(401).json({ error: 'Key validation failed: ' + err.message });
  }
});

app.post('/api/auth/disconnect', requireAdmin, (req, res) => {
  const { provider } = req.body;
  if (provider === 'claude') { req.session.claudeKey = null; req.session.claudeConnected = false; }
  if (provider === 'gpt')    { req.session.gptKey = null;    req.session.gptConnected = false; }
  res.json({ success: true });
});

app.get('/api/auth/status', (req, res) => res.json({
  claudeConnected:   !!req.session.claudeConnected,
  gptConnected:      !!req.session.gptConnected,
  platformAvailable: !!PLATFORM_PROVIDER,
  platformProvider:  PLATFORM_PROVIDER,
  platformLabel:     PLATFORM_LABEL,
  adminAuth:         !!req.session.adminAuth
}));

// ─── Admin Auth ───────────────────────────────────────────────
app.get('/api/admin/status', (req, res) =>
  res.json({ authenticated: !!req.session.adminAuth, username: ADMIN_USERNAME })
);

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && verifyPassword(password, ADMIN_PASSWORD_HASH)) {
    req.session.adminAuth = true;
    return res.json({ success: true });
  }
  res.status(401).json({ error: 'Invalid username or password' });
});

app.post('/api/admin/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

// ─── Agent Roster ─────────────────────────────────────────────
const AGENTS = [
  { id: 'strategy',         name: 'Aria Chen',     role: 'CEO / Strategy',     emoji: '🎯',
    personality: 'Bold, visionary, first-principles thinker, questions consensus, cites Hamilton Helmer 7 Powers and Porter 5 Forces, 3-5 year horizon, challenges short-termism' },
  { id: 'product',          name: 'Marcus Wells',   role: 'Product Manager',    emoji: '📋',
    personality: 'User-obsessed, uses RICE scoring and Jobs-to-be-Done, balances customer desire vs engineering reality, always asks "what problem are we solving?"' },
  { id: 'engineering',      name: 'Dev Sharma',     role: 'Engineering Lead',   emoji: '⚙️',
    personality: 'Pragmatic, favors boring technology, estimates conservatively (2x), hates over-engineering, loves simple systems, always flags security and reliability' },
  { id: 'security',         name: 'Sasha Kovacs',   role: 'Security',           emoji: '🔒',
    personality: 'Zero-trust mindset, OWASP Top 10 aware, STRIDE threat modeling, asks "what is the blast radius?", blocks first then enables with justification' },
  { id: 'growth',           name: 'Luna Park',      role: 'Growth Marketing',   emoji: '📈',
    personality: 'Experiment-driven, CAC/LTV obsessed, uses ICE scoring, calls out vanity metrics, always anchors to unit economics and funnel conversion' },
  { id: 'sales',            name: 'Jordan Blake',   role: 'Sales',              emoji: '💼',
    personality: 'MEDDIC qualification framework, uses customer stories and social proof, finds the angle, competitive intelligence obsessed, pushes for urgency' },
  { id: 'customer-success', name: 'Priya Nair',     role: 'Customer Success',   emoji: '🤝',
    personality: 'Churn-obsessed, NPS/CSAT/health-score tracker, advocates for customers internally, connects individual complaints to systemic issues' },
  { id: 'finance',          name: 'Oliver Grant',   role: 'Finance',            emoji: '💰',
    personality: 'Conservative, runway-obsessed, unit economics hawk (CAC/LTV/burn multiple), scenario planning (base/bull/bear), questions optimistic projections' },
  { id: 'legal',            name: 'Eva Torres',     role: 'Legal / Compliance', emoji: '⚖️',
    personality: 'Risk-aware, jurisdiction-conscious (US/EU/UK), GDPR/SOC2/HIPAA/CCPA, never says yes — only yes-if, loves paper trails, reads contracts carefully' },
  { id: 'operations',       name: 'Sam Rivers',     role: 'Operations',         emoji: '🔧',
    personality: 'Process-oriented, SLA-driven, loves runbooks and playbooks, eliminates single points of failure, documents everything' },
  { id: 'qa',               name: 'Quinn Zhang',    role: 'QA',                 emoji: '✅',
    personality: 'Edge-case hunter, regression-paranoid, risk-based testing, tests happy path last, will block releases for untested critical paths' },
  { id: 'support',          name: 'Riley Morgan',   role: 'Support',            emoji: '💬',
    personality: 'Customer-first, pattern-spotter (3+ tickets same root cause = escalate), P0-P3 triage expert, bridges customers to internal teams' },
  { id: 'research',         name: 'Felix Okafor',   role: 'Research',           emoji: '🔬',
    personality: 'Evidence-based, steelmans all opposing views, distinguishes data from belief, marks assumptions explicitly, challenges unsubstantiated claims' },
  { id: 'hr',               name: 'Nadia Santos',   role: 'HR',                 emoji: '👥',
    personality: 'People-first, culture-aware, equitable, eNPS/retention tracker, connects team health to business outcomes, champions DEI' }
];

const TASK_AGENT_MAP = {
  'product-planning':        ['strategy', 'product', 'engineering', 'finance', 'research'],
  'engineering-planning':    ['engineering', 'product', 'security', 'qa', 'operations'],
  'security-review':         ['security', 'engineering', 'legal', 'operations', 'qa'],
  'marketing-campaign':      ['growth', 'sales', 'finance', 'legal', 'research'],
  'sales-outreach':          ['sales', 'growth', 'customer-success', 'legal'],
  'customer-support-triage': ['support', 'customer-success', 'engineering', 'product'],
  'financial-review':        ['finance', 'strategy', 'operations', 'legal'],
  'legal-risk-review':       ['legal', 'security', 'finance', 'operations'],
  'release-readiness':       ['engineering', 'qa', 'security', 'operations', 'product'],
  'incident-response':       ['engineering', 'security', 'operations', 'support', 'customer-success'],
  'hiring-plan':             ['hr', 'strategy', 'finance', 'engineering'],
  'competitor-research':     ['research', 'strategy', 'growth', 'sales', 'product'],
  'founder-decision':        ['strategy', 'finance', 'legal', 'product', 'engineering'],
  'daily-briefing':          ['strategy', 'finance', 'growth', 'support', 'engineering']
};

function classifyTask(input) {
  const t = input.toLowerCase();
  if (/security|vulnerability|breach|pentest/.test(t))     return 'security-review';
  if (/incident|outage|\bdown\b|p0\s|emergency/.test(t))   return 'incident-response';
  if (/release|ship|deploy|launch|go.live/.test(t))         return 'release-readiness';
  if (/hire|hiring|headcount|recruit/.test(t))              return 'hiring-plan';
  if (/legal|compliance|gdpr|ccpa|contract/.test(t))        return 'legal-risk-review';
  if (/finance|budget|runway|burn|revenue/.test(t))         return 'financial-review';
  if (/competitor|competition|market research/.test(t))     return 'competitor-research';
  if (/marketing|campaign|ads|acquisition/.test(t))         return 'marketing-campaign';
  if (/sales|outreach|prospect|pipeline/.test(t))           return 'sales-outreach';
  if (/support|ticket|customer complaint/.test(t))          return 'customer-support-triage';
  if (/product|feature|roadmap|prd|backlog/.test(t))        return 'product-planning';
  if (/engineer|technical|architecture|sprint/.test(t))     return 'engineering-planning';
  if (/brief|daily|standup|summary/.test(t))                return 'daily-briefing';
  return 'founder-decision';
}

function buildMasterCtx(masterPrompt) {
  if (!masterPrompt) return '';
  const mp = masterPrompt;
  const parts = [];
  if (mp.companyName)         parts.push(`Company: ${mp.companyName}`);
  if (mp.businessDescription) parts.push(`Business: ${mp.businessDescription}`);
  if (mp.targetCustomers)     parts.push(`Customers: ${mp.targetCustomers}`);
  if (mp.currentPriorities)   parts.push(`Current priorities: ${mp.currentPriorities}`);
  if (mp.keyMetrics)          parts.push(`Key metrics: ${mp.keyMetrics}`);
  if (mp.constraints)         parts.push(`Constraints: ${mp.constraints}`);
  return parts.join('\n');
}

// ─── LLM Call — User key → Platform key → OpenCode ───────────
// Priority chain:
//  1. User's own Claude key (if connected)
//  2. Platform Claude key (ANTHROPIC_API_KEY in .env)
//  3. User's own GPT key (if connected)
//  4. Platform GPT key (OPENAI_API_KEY in .env)
//  5. OpenCode API key (OPENCODE_API_KEY in .env, OpenAI-compatible)
async function callLLM(session, prompt, maxTokens = 400) {
  const userClaudeKey = session?.claudeConnected ? session?.claudeKey : null;
  const userGptKey    = session?.gptConnected    ? session?.gptKey    : null;

  // ── Priority 1: User's own Claude key ───────────────────────
  if (userClaudeKey) {
    const client = new Anthropic({ apiKey: userClaudeKey });
    const msg    = await client.messages.create({
      model: CLAUDE_MODEL, max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }]
    });
    return msg.content[0].text;
  }

  // ── Priority 2: Platform Anthropic key ──────────────────────
  if (PLATFORM_CLAUDE_KEY) {
    const client = new Anthropic({ apiKey: PLATFORM_CLAUDE_KEY });
    const msg    = await client.messages.create({
      model: CLAUDE_MODEL, max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }]
    });
    return msg.content[0].text;
  }

  // ── Priority 3: User's own GPT key ──────────────────────────
  if (userGptKey) {
    const client = new OpenAI({ apiKey: userGptKey });
    const msg    = await client.chat.completions.create({
      model: GPT_MODEL, max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }]
    });
    return msg.choices[0].message.content;
  }

  // ── Priority 4: Platform GPT key ────────────────────────────
  if (PLATFORM_GPT_KEY) {
    const client = new OpenAI({ apiKey: PLATFORM_GPT_KEY });
    const msg    = await client.chat.completions.create({
      model: GPT_MODEL, max_tokens: maxTokens,
      messages: [{ role: 'user', content: prompt }]
    });
    return msg.choices[0].message.content;
  }

  // ── Priority 5: OpenCode (OpenAI-compatible gateway) ────────
  if (PLATFORM_OPENCODE_KEY) {
    const opts = {
      apiKey:  PLATFORM_OPENCODE_KEY,
      baseURL: OPENCODE_BASE_URL || 'https://openrouter.ai/api/v1',
      defaultHeaders: {
        'HTTP-Referer': 'https://company-os.ai',  // required by OpenRouter
        'X-Title':      'Company OS',
      }
    };
    const client = new OpenAI(opts);
    const msg    = await client.chat.completions.create({
      model:       OPENCODE_MODEL,
      max_tokens:  maxTokens,
      messages:    [{ role: 'user', content: prompt }]
    });
    return msg.choices[0].message.content;
  }

  throw new Error('No AI provider available. Connect Claude or GPT, or add OPENCODE_API_KEY to .env');
}

function resolveProvider(session, preferredProvider) {
  // Check user keys
  if (preferredProvider === 'claude' && session?.claudeConnected) return 'claude';
  if (preferredProvider === 'gpt'    && session?.gptConnected)    return 'gpt';
  if (session?.claudeConnected) return 'claude';
  if (session?.gptConnected)    return 'gpt';
  // Fall through to platform keys
  return PLATFORM_PROVIDER || null;
}

// ─── Run Task — SSE Stream ────────────────────────────────────
app.post('/api/run-task', requireAdmin, async (req, res) => {
  const { task, preferredProvider, masterPrompt } = req.body;

  const hasUserKey     = req.session.claudeConnected || req.session.gptConnected;
  const hasPlatformKey = !!PLATFORM_PROVIDER;
  if (!hasUserKey && !hasPlatformKey)
    return res.status(401).json({ error: 'No AI provider available. Connect Claude or GPT, or set ANTHROPIC_API_KEY / OPENAI_API_KEY in .env' });
  if (!task?.trim())
    return res.status(400).json({ error: 'Task cannot be empty.' });

  const activeProvider = resolveProvider(req.session, preferredProvider);
  const taskType       = classifyTask(task);
  const agentIds       = TASK_AGENT_MAP[taskType] || TASK_AGENT_MAP['founder-decision'];
  const selectedAgents = AGENTS.filter(a => agentIds.includes(a.id));
  const masterCtx      = buildMasterCtx(masterPrompt);

  // SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const send = (data) => {
    if (!res.writableEnded) res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const SESSION = req.session; // capture before async

  try {
    send({ type: 'start', taskType, agents: selectedAgents, provider: activeProvider });

    // Helper: format the live message board for context injection
    function buildBoard(messages) {
      return messages.map(m =>
        `[${m.agent.name.toUpperCase()} | ${m.agent.role.toUpperCase()}]\n${m.content}`
      ).join('\n\n━━━\n\n');
    }

    // Helper: extract @mentions of the form @FirstName Lastname or @FirstName
    function extractMentions(text, pattern) {
      const rx = new RegExp(`${pattern}:\\s*@([A-Z][a-z]+(?:\\s[A-Z][a-z]+)?)`, 'gi');
      const names = [];
      for (const m of text.matchAll(rx)) names.push(m[1].trim());
      return names;
    }

    // ── ROUND 1: Sealed independent positions ──────────────
    // Agents write without seeing each other — baseline positions.
    send({ type: 'phase', phase: 'Round 1 — Sealed Positions' });

    const FRAMEWORKS = {
      strategy:          '7 Powers, Porter 5 Forces, first-principles, 3–5yr horizon',
      product:           'RICE scoring, Jobs-to-be-Done, opportunity sizing',
      engineering:       'systems reliability, tech debt, build vs buy, 2x estimates',
      security:          'STRIDE threat model, OWASP Top 10, blast radius analysis',
      finance:           'runway, burn multiple, CAC/LTV, payback period',
      sales:             'MEDDIC, competitive intel, urgency & champion creation',
      'customer-success':'health score, NPS/CSAT, churn leading indicators',
      growth:            'ICE scoring, funnel conversion, unit economics',
      legal:             'jurisdiction risk, GDPR/SOC2/HIPAA, contract exposure',
      operations:        'SLA/SLO, single points of failure, runbook coverage',
      qa:                'risk-based testing, edge cases, regression risk',
      support:           'P0-P3 triage, ticket pattern detection, escalation',
      research:          'evidence quality, steelmanning, data vs belief markers',
      hr:                'eNPS, retention risk, culture fit, DEI metrics'
    };

    const board = []; // shared message board — accumulates across all rounds

    for (const agent of selectedAgents) {
      const p = `You are ${agent.name}, the ${agent.role}.
Personality: ${agent.personality}
Frameworks: ${FRAMEWORKS[agent.id] || 'your domain expertise'}

${masterCtx ? `COMPANY CONTEXT\n${masterCtx}\n` : ''}
TASK: ${task}

This is Round 1. You have NOT seen any other agent's response yet. Write your honest position.

Use this EXACT MiroFish format — no preamble:

[${agent.name.toUpperCase()} | ${agent.role.toUpperCase()} | ROUND 1 | CONFIDENCE XX%]
Position: [one crisp sentence — your core take from your role]
Evidence:
• [concrete data point or framework-grounded reasoning]
• [second point]
Concerns:
• [your biggest risk or unknown]
Action: [the one specific thing you'd do right now]

140 words max. Be direct. Own your view.`;

      const msg = await callLLM(SESSION, p, 380);
      board.push({ agent, round: 1, content: msg });
      send({ type: 'agent_message', round: 1, agent, message: msg });
    }

    // ── ROUND 2: Live MiroFish debate (accumulating board) ──
    // Each agent reads the FULL live board before speaking,
    // then broadcasts their message back to the board.
    // Later speakers react to earlier R2 speakers, not just R1.
    send({ type: 'phase', phase: 'Round 2 — Live Debate' });

    const debaters = selectedAgents.slice(0, Math.min(4, selectedAgents.length));

    for (const agent of debaters) {
      const liveBoard = buildBoard(board);

      const p = `You are ${agent.name}, the ${agent.role}.
Personality: ${agent.personality}

${masterCtx ? `COMPANY CONTEXT\n${masterCtx}\n` : ''}
TASK: ${task}

━━━ LIVE DEBATE BOARD (everything said so far — read it all) ━━━
${liveBoard}
━━━ END BOARD ━━━

You are now broadcasting live to this room. Every other agent will read your message.

Rules:
1. React to something SPECIFIC that was said — quote a short phrase using "..."
2. Directly challenge one person whose logic you reject
3. Directly agree with one person whose reasoning is sound
4. State whether your Round 1 position has changed and why

Use this EXACT MiroFish format:

[${agent.name.toUpperCase()} | ${agent.role.toUpperCase()} | ROUND 2 | CONFIDENCE XX%]
Reacting to: "[exact short quote from above]" — @[Name who said it]: [your specific response to that statement]
@Challenge: @[exact full name] — [one sharp sentence why their logic fails from your perspective]
@Agree: @[exact full name] — [one sentence why their reasoning holds up]
Position update: [unchanged — because X] OR [revised — I now think Y because I heard Z]
Action: [your updated recommendation — be specific]

130 words max. This is live. Be sharp.`;

      const msg = await callLLM(SESSION, p, 340);
      board.push({ agent, round: 2, content: msg });
      send({ type: 'agent_message', round: 2, agent, message: msg });
    }

    // ── ROUND 2b: @Challenge right-of-reply ────────────────
    // Anyone named in a @Challenge who didn't speak in R2 yet
    // gets one direct reply — they read exactly what was said
    // about them and respond point-by-point.
    const challengedInR2 = new Set(
      board.filter(m => m.round === 2)
           .flatMap(m => extractMentions(m.content, '@Challenge'))
    );
    const r2DebaterIds = new Set(debaters.map(d => d.id));

    const repliers = selectedAgents.filter(a =>
      challengedInR2.has(a.name) && !r2DebaterIds.has(a.id)
    );

    if (repliers.length > 0) {
      send({ type: 'phase', phase: 'Round 2b — Challenge Replies' });

      for (const agent of repliers) {
        // Show them only the R2 messages that challenged them by name
        const challengingMsgs = board
          .filter(m => m.round === 2 && m.content.includes(`@${agent.name}`))
          .map(m => `@${m.agent.name} said:\n${m.content}`)
          .join('\n\n━━━\n\n');

        const p = `You are ${agent.name}, the ${agent.role}.
Personality: ${agent.personality}

${masterCtx ? `COMPANY CONTEXT\n${masterCtx}\n` : ''}
TASK: ${task}

You were directly @Challenged. Here is exactly what was said about you:
${challengingMsgs}

This is your right-of-reply. You speak directly to the person who challenged you.

[${agent.name.toUpperCase()} | ${agent.role.toUpperCase()} | REPLY TO CHALLENGE | CONFIDENCE XX%]
To: @[name of challenger]
You said: "[quote the specific claim you're responding to]"
My reply: [2-3 sentences — defend, concede, or reframe — be specific]
Action stands: [yes / revised to: X]

90 words max. Be direct.`;

        const msg = await callLLM(SESSION, p, 220);
        board.push({ agent, round: 3, content: msg });
        send({ type: 'agent_message', round: 3, agent, message: msg });
      }
    }

    // ── ROUND 3: Conductor reads full board and synthesizes ─
    send({ type: 'phase', phase: 'Orchestrator Synthesis' });

    const fullBoard = buildBoard(board);

    const synthPrompt = `You are The Conductor, the orchestrator of a 14-agent company operating system.
You have just observed a full live MiroFish debate. Read every message.

${masterCtx ? `COMPANY CONTEXT\n${masterCtx}\n` : ''}
TASK: ${task}
AGENTS INVOLVED: ${selectedAgents.map(a => `${a.name} (${a.role})`).join(', ')}

━━━ FULL DEBATE TRANSCRIPT ━━━
${fullBoard}
━━━ END TRANSCRIPT ━━━

Synthesize this into one clear, actionable decision. Note:
- Where did real consensus emerge through debate (not just independent agreement)?
- Which challenge was most substantive — and was it answered?
- Who changed their position during the debate? That's the strongest signal.
- What's the unresolved tension, if any?

SAFETY CONSTRAINTS — hard rules, never bypass:
• No production deploy without human approval
• No spend >$500 without human approval
• No legal commitment without human approval
• No public communication without human approval
• Mark all assumptions — never hallucinate facts

Produce a RESULT CARD in this EXACT format:

[RESULT CARD]
Situation: [1-2 sentences]
Agents involved: [comma-separated names]
Agent opinions: [3-4 sentences — consensus formed? key clash? who pivoted?]
Disagreements: [the unresolved conflict after debate, or "None significant"]
Recommendation: [clear, specific, no hedging — 2-3 sentences]
Risk level: [LOW / MEDIUM / HIGH / CRITICAL]
Confidence: [XX%]
Human approval required: [YES — [reason] / NO]
Next actions:
- [action] → Owner: [name] · Due: [timeframe]
- [action] → Owner: [name] · Due: [timeframe]
- [action] → Owner: [name] · Due: [timeframe]
Owner: [primary responsible party]
Deadline: [timeframe]
Data needed: [what would change this, or "None"]`;

    const resultCard = await callLLM(SESSION, synthPrompt, 800);
    const needsApproval = /human approval required:\s*yes/i.test(resultCard);
    send({ type: 'result_card', content: resultCard, needsHumanApproval: needsApproval });
    send({ type: 'done' });

  } catch (err) {
    send({ type: 'error', message: err.message });
  } finally {
    res.end();
  }
});

// ─── Static data routes ───────────────────────────────────────
app.get('/api/agents',    (_req, res) => res.json(AGENTS));
app.get('/api/workflows', (_req, res) => res.json(Object.keys(TASK_AGENT_MAP)));

// ─── Serve SPA ────────────────────────────────────────────────
app.get('*', (_req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.listen(PORT, () => {
  console.log(`\n⚡ Company OS running at http://localhost:${PORT}`);
  console.log(`   Models: Claude → ${CLAUDE_MODEL}  |  GPT → ${GPT_MODEL}`);
  console.log(`   Agents: 14 specialists · 3 debate rounds · real-time streaming\n`);
});
