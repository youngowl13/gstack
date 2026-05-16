/* Company OS — Frontend Application */

const WORKFLOWS = {
  'daily-briefing':          { label: 'Daily Briefing',           icon: '📰' },
  'product-planning':        { label: 'Product Planning',         icon: '📋' },
  'engineering-planning':    { label: 'Engineering Planning',     icon: '⚙️' },
  'security-review':         { label: 'Security Review',          icon: '🔒' },
  'marketing-campaign':      { label: 'Marketing Campaign',       icon: '📈' },
  'sales-outreach':          { label: 'Sales Outreach',           icon: '💼' },
  'customer-support-triage': { label: 'Support Triage',           icon: '💬' },
  'financial-review':        { label: 'Financial Review',         icon: '💰' },
  'legal-risk-review':       { label: 'Legal Risk Review',        icon: '⚖️' },
  'release-readiness':       { label: 'Release Readiness',        icon: '🚀' },
  'incident-response':       { label: 'Incident Response',        icon: '🚨' },
  'hiring-plan':             { label: 'Hiring Plan',              icon: '👥' },
  'competitor-research':     { label: 'Competitor Research',      icon: '🔬' },
  'founder-decision':        { label: 'Founder Decision',         icon: '🎯' }
};

const AGENT_EMOJIS = {
  'strategy': '🎯', 'product': '📋', 'engineering': '⚙️',
  'security': '🔒', 'growth': '📈', 'sales': '💼',
  'customer-success': '🤝', 'finance': '💰', 'legal': '⚖️',
  'operations': '🔧', 'qa': '✅', 'support': '💬',
  'research': '🔬', 'hr': '👥'
};

const state = {
  claudeConnected:   false,
  gptConnected:      false,
  platformAvailable: false,
  platformProvider:  null,
  platformLabel:     null,
  masterPrompt: null,
  companyName: '',
  running: false
};

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initCanvas();
  await checkAdminThenLoad();
  setupTaskClassifier();
  renderWorkflowSidebar();
  renderAgentSidebar();
});

// ─── Admin Auth Flow ─────────────────────────────────────────
async function checkAdminThenLoad() {
  try {
    const res  = await fetch('/api/admin/status');
    const data = await res.json();
    if (data.authenticated) {
      await checkAuthStatus();
    } else {
      showScreen('admin-screen');
    }
  } catch (_) {
    showScreen('admin-screen');
  }
}

async function adminLogin() {
  const userEl = document.getElementById('admin-username');
  const passEl = document.getElementById('admin-password');
  const errEl  = document.getElementById('admin-error');
  const btn    = document.getElementById('admin-btn');
  const lbl    = document.getElementById('admin-btn-label');

  const username = userEl?.value?.trim();
  const password = passEl?.value;
  errEl.textContent = '';
  if (!username || !password) { errEl.textContent = 'Enter username and password.'; return; }

  btn.disabled = true;
  if (lbl) lbl.textContent = 'Signing in…';

  try {
    const res  = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    passEl.value = '';
    await checkAuthStatus();
  } catch (err) {
    errEl.textContent = err.message;
  } finally {
    btn.disabled = false;
    if (lbl) lbl.textContent = 'Sign In';
  }
}

async function adminLogout() {
  await fetch('/api/admin/logout', { method: 'POST' });
  sessionStorage.removeItem('masterPrompt');
  state.masterPrompt  = null;
  state.claudeConnected = false;
  state.gptConnected    = false;
  showScreen('admin-screen');
}

// ─── Canvas Mesh Animation ────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const PARTICLE_COUNT = 70;
  const MAX_DIST = 130;
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.5 + 0.5
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < 0 || a.x > W) a.vx *= -1;
      if (a.y < 0 || a.y > H) a.vy *= -1;

      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139,92,246,0.55)';
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  draw();
}

// ─── Screen Transitions ──────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active', 'slide-in');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('slide-in')));
  }
}

// ─── Example Toggle (Master Prompt) ─────────────────────────
function toggleExample(el) {
  const body    = document.getElementById('mp-example-body');
  const chevron = el.querySelector('.chevron');
  const isOpen  = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (chevron) chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
}

// ─── Auth ────────────────────────────────────────────────────
async function checkAuthStatus() {
  try {
    const res  = await fetch('/api/auth/status');
    const data = await res.json();
    state.claudeConnected   = data.claudeConnected;
    state.gptConnected      = data.gptConnected;
    state.platformAvailable = data.platformAvailable;
    state.platformProvider  = data.platformProvider;
    state.platformLabel     = data.platformLabel;

    updatePlatformTile();
    updateConnectionUI();

    const hasAccess = state.claudeConnected || state.gptConnected || state.platformAvailable;
    if (hasAccess) {
      const saved = sessionStorage.getItem('masterPrompt');
      if (saved) {
        state.masterPrompt = JSON.parse(saved);
        state.companyName  = state.masterPrompt.companyName || '';
        showDashboard();
        return;
      }
    }
  } catch (_) {}
  showScreen('login-screen');
}

function updatePlatformTile() {
  const tile    = document.getElementById('platform-tile');
  const label   = document.getElementById('platform-model-label');
  const platOr  = document.getElementById('platform-or-divider');
  const stdOr   = document.getElementById('standard-or-divider');

  if (!tile) return;
  if (state.platformAvailable) {
    tile.style.display   = 'block';
    if (platOr) platOr.style.display = 'flex';
    if (stdOr)  stdOr.style.display  = 'none';
    if (label)  label.textContent    = state.platformLabel || 'Platform AI';
  } else {
    tile.style.display   = 'none';
    if (platOr) platOr.style.display = 'none';
    if (stdOr)  stdOr.style.display  = 'flex';
  }
}

// ─── Connect AI Modal ─────────────────────────────────────────
function openConnectModal() {
  syncModalState();
  const overlay = document.getElementById('connect-modal-overlay');
  if (overlay) overlay.style.display = 'flex';
}

function closeConnectModal() {
  const overlay = document.getElementById('connect-modal-overlay');
  if (overlay) overlay.style.display = 'none';
}

function syncModalState() {
  for (const provider of ['claude', 'gpt']) {
    const connected = state[`${provider}Connected`];
    const body      = document.getElementById(`m-${provider}-body`);
    const connEl    = document.getElementById(`m-${provider}-connected`);
    const pip       = document.getElementById(`m-${provider}-pip`);
    const lbl       = document.getElementById(`m-${provider}-lbl`);
    if (body)   body.style.display   = connected ? 'none' : '';
    if (connEl) connEl.style.display = connected ? 'flex' : 'none';
    if (pip)    pip.classList.toggle('connected', connected);
    if (lbl)    lbl.textContent      = connected ? 'Connected' : 'Not connected';
  }
}

async function connectProvider(provider, fromModal = false) {
  const inputId = fromModal ? `m-${provider}-key`      : `${provider}-key-input`;
  const errorId = fromModal ? `m-${provider}-error`    : `${provider}-error`;
  const btnId   = fromModal ? `m-${provider}-btn`      : `${provider}-connect-btn`;

  const keyInput = document.getElementById(inputId);
  const errorEl  = document.getElementById(errorId);
  const btn      = document.getElementById(btnId);
  const key      = keyInput.value.trim();

  errorEl.textContent = '';
  if (!key) { errorEl.textContent = 'Please enter your API key.'; return; }

  btn.disabled    = true;
  btn.textContent = 'Connecting…';

  try {
    const res  = await fetch(`/api/auth/${provider}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: key })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    state[`${provider}Connected`] = true;
    updateConnectionUI();
    if (fromModal) syncModalState();
    keyInput.value = '';
  } catch (err) {
    errorEl.textContent = err.message;
  } finally {
    btn.disabled    = false;
    btn.textContent = provider === 'claude' ? 'Sign in with Claude' : 'Sign in with GPT';
  }
}

async function disconnect(provider) {
  await fetch('/api/auth/disconnect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ provider })
  });
  state[`${provider}Connected`] = false;
  updateConnectionUI();
}

function updateConnectionUI() {
  for (const provider of ['claude', 'gpt']) {
    const connected = state[`${provider}Connected`];
    const body      = document.getElementById(`${provider}-body`);
    const connEl    = document.getElementById(`${provider}-connected`);
    const pip       = document.getElementById(`${provider}-pip`);
    const lbl       = document.getElementById(`${provider}-lbl`);

    if (body)   body.style.display   = connected ? 'none' : '';
    if (connEl) connEl.style.display = connected ? 'flex' : 'none';
    if (pip)    pip.classList.toggle('connected', connected);
    if (lbl)    lbl.textContent = connected ? 'Connected' : 'Not connected';
  }
  showEnterBlock();
}

function showEnterBlock() {
  const cta    = document.getElementById('panel-cta');
  const canGo  = state.claudeConnected || state.gptConnected || state.platformAvailable;
  if (cta) cta.style.display = canGo ? 'block' : 'none';
}

function enterDashboard() {
  showScreen('master-prompt-screen');
}

// ─── Master Prompt ───────────────────────────────────────────
function saveMasterPrompt() {
  const mp = {
    companyName:         document.getElementById('mp-company-name')?.value?.trim()       || '',
    businessDescription: document.getElementById('mp-business-desc')?.value?.trim()      || '',
    targetCustomers:     document.getElementById('mp-target-customers')?.value?.trim()   || '',
    currentPriorities:   document.getElementById('mp-priorities')?.value?.trim()         || '',
    keyMetrics:          document.getElementById('mp-metrics')?.value?.trim()            || '',
    constraints:         document.getElementById('mp-constraints')?.value?.trim()        || ''
  };
  state.masterPrompt = mp;
  state.companyName  = mp.companyName;
  sessionStorage.setItem('masterPrompt', JSON.stringify(mp));
  showDashboard();
}

function skipMasterPrompt() {
  state.masterPrompt = {
    companyName: 'Your Company', businessDescription: 'An internet company',
    targetCustomers: 'General users', currentPriorities: '', keyMetrics: '', constraints: ''
  };
  state.companyName = 'Your Company';
  sessionStorage.setItem('masterPrompt', JSON.stringify(state.masterPrompt));
  showDashboard();
}

function editMasterPrompt() {
  showScreen('master-prompt-screen');
}

// ─── Dashboard ───────────────────────────────────────────────
function showDashboard() {
  showScreen('dashboard-screen');
  updateNavbar();
  renderMasterPromptBanner();
  renderWorkflowSidebar();
  renderAgentSidebar();

  // Show toggle if multiple providers available
  const providerCount = [state.claudeConnected, state.gptConnected].filter(Boolean).length;
  const toggle = document.getElementById('provider-toggle');
  if (toggle) toggle.style.display = providerCount > 1 ? 'flex' : 'none';

  const sel = document.getElementById('provider-select');
  if (sel) sel.value = state.claudeConnected ? 'claude' : 'gpt';
}

function showLogin() {
  showScreen('login-screen');
}

function updateNavbar() {
  const el = document.getElementById('nav-company-name');
  if (el) el.textContent = state.companyName || '';

  const cb = document.getElementById('nav-claude-badge');
  const gb = document.getElementById('nav-gpt-badge');
  if (cb) cb.style.display = state.claudeConnected ? 'flex' : 'none';
  if (gb) gb.style.display = state.gptConnected    ? 'flex' : 'none';

  // Show or create platform badge
  let pb = document.getElementById('nav-platform-badge');
  if (!pb && state.platformAvailable && !state.claudeConnected && !state.gptConnected) {
    pb = document.createElement('div');
    pb.id = 'nav-platform-badge';
    pb.className = 'model-pill';
    pb.innerHTML = `<span class="model-dot" style="background:#7c3aed;box-shadow:0 0 6px #7c3aed"></span>${state.platformLabel || 'Platform AI'}`;
    const right = document.querySelector('.topbar-right');
    if (right) right.insertBefore(pb, right.firstChild);
  }
}

function renderMasterPromptBanner() {
  const banner = document.getElementById('ctx-banner');
  const text   = document.getElementById('ctx-text');
  if (!banner) return;

  if (!state.masterPrompt) { banner.style.display = 'none'; return; }

  const mp      = state.masterPrompt;
  const summary = [mp.companyName, mp.businessDescription, mp.targetCustomers]
    .filter(Boolean).join(' · ') || 'No company context set';
  if (text) text.textContent = summary;
  banner.style.display = 'flex';
}

function renderWorkflowSidebar() {
  const container = document.getElementById('workflow-list');
  if (!container) return;
  container.innerHTML = '';
  for (const [id, w] of Object.entries(WORKFLOWS)) {
    const btn = document.createElement('button');
    btn.className = 'wf-item';
    btn.innerHTML = `<span class="wf-emoji">${w.icon}</span><span>${w.label}</span>`;
    btn.onclick   = (e) => selectWorkflow(id, w.label, btn);
    container.appendChild(btn);
  }
}

function renderAgentSidebar() {
  const container = document.getElementById('agents-mini-list');
  if (!container) return;
  fetch('/api/agents').then(r => r.json()).then(agents => {
    container.innerHTML = agents.map(a => `
      <div class="agent-row" id="agent-mini-${a.id}">
        <span class="agent-row-emoji">${AGENT_EMOJIS[a.id] || '🤖'}</span>
        <div>
          <div class="agent-row-name">${escHtml(a.name)}</div>
          <div class="agent-row-role">${escHtml(a.role)}</div>
        </div>
      </div>
    `).join('');
  }).catch(() => {});
}

function selectWorkflow(id, label, btnEl) {
  document.querySelectorAll('.wf-item').forEach(el => el.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const textarea = document.getElementById('task-input');
  const prompts  = {
    'daily-briefing':          `Give me the daily company briefing — key metrics, top priorities, and anything I need to know for today.`,
    'product-planning':        `Let's plan our product roadmap for the next quarter. What features should we prioritize and why?`,
    'engineering-planning':    `Review our engineering plan for the next sprint. What are the risks, dependencies, and technical blockers?`,
    'security-review':         `Conduct a security review of our current system. What are the top vulnerabilities we should address?`,
    'marketing-campaign':      `Plan a marketing campaign for our upcoming feature launch. What channels, messaging, and budget do we need?`,
    'sales-outreach':          `Draft a sales outreach strategy for our ideal customer profile. What's the best approach?`,
    'customer-support-triage': `Triage our current customer support backlog. What issues need immediate attention and what patterns do we see?`,
    'financial-review':        `Review our financial position. What's our runway, burn rate, and what financial decisions need to be made?`,
    'legal-risk-review':       `Review our legal and compliance posture. What risks do we have and what actions are needed?`,
    'release-readiness':       `Assess whether we are ready to release our next version. What's blocking us and what's the go/no-go decision?`,
    'incident-response':       `We have an active incident. Coordinate the response — who does what, what's the communication plan?`,
    'hiring-plan':             `Build a hiring plan for the next 6 months. What roles do we need, in what order, and what's the budget?`,
    'competitor-research':     `Research our top competitors. What are they doing that we should be worried about or learning from?`,
    'founder-decision':        `I need help making a strategic decision as a founder. Let me get input from all relevant agents.`
  };
  if (textarea && prompts[id]) { textarea.value = prompts[id]; detectTaskType(); }
}

// ─── Task Classifier ─────────────────────────────────────────
function setupTaskClassifier() {
  const textarea = document.getElementById('task-input');
  if (!textarea) return;
  textarea.addEventListener('input', detectTaskType);
  textarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) runTask();
  });
}

function detectTaskType() {
  const input = document.getElementById('task-input')?.value?.toLowerCase() || '';
  const label = document.getElementById('input-meta');
  if (!label) return;

  const map = [
    ['security-review',         ['security', 'vulnerability', 'breach', 'pentest', 'audit']],
    ['incident-response',       ['incident', 'outage', 'down', 'alert', 'p0', 'emergency']],
    ['release-readiness',       ['release', 'ship', 'deploy', 'launch', 'go-live']],
    ['hiring-plan',             ['hire', 'hiring', 'headcount', 'recruit', 'job']],
    ['legal-risk-review',       ['legal', 'compliance', 'gdpr', 'ccpa', 'contract', 'liability']],
    ['financial-review',        ['finance', 'budget', 'runway', 'burn', 'revenue', 'cost']],
    ['competitor-research',     ['competitor', 'competition', 'market research', 'benchmark']],
    ['marketing-campaign',      ['marketing', 'campaign', 'ads', 'growth', 'acquisition']],
    ['sales-outreach',          ['sales', 'outreach', 'prospect', 'pipeline', 'deal']],
    ['customer-support-triage', ['support', 'ticket', 'customer complaint', 'bug report']],
    ['product-planning',        ['product', 'feature', 'roadmap', 'prd', 'backlog']],
    ['engineering-planning',    ['engineer', 'technical', 'architecture', 'sprint', 'infra']],
    ['daily-briefing',          ['brief', 'daily', 'update', 'standup', 'summary']],
  ];

  let detected = 'founder-decision';
  for (const [type, keywords] of map) {
    if (keywords.some(k => input.includes(k))) { detected = type; break; }
  }

  const w = WORKFLOWS[detected];
  if (w && input.length > 5) {
    label.textContent = `${w.icon} ${w.label} detected`;
  } else {
    label.textContent = 'auto-detect workflow';
  }
}

// ─── Run Task ────────────────────────────────────────────────
async function runTask() {
  const task = document.getElementById('task-input')?.value?.trim();
  if (!task) { alert('Please describe your task first.'); return; }
  if (state.running) return;

  state.running = true;

  const runBtn   = document.getElementById('run-btn');
  const runLabel = document.getElementById('run-btn-label');
  if (runBtn)   runBtn.disabled    = true;
  if (runLabel) runLabel.textContent = 'Agents thinking…';

  // Reset UI
  clearStreamArea();
  hideResult();

  const progressWrap = document.getElementById('progress-bar-wrap');
  if (progressWrap) progressWrap.style.display = 'flex';
  setProgress(0);

  const provider = document.getElementById('provider-select')?.value
    || (state.claudeConnected ? 'claude' : 'gpt');

  try {
    const res = await fetch('/api/run-task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task,
        preferredProvider: provider,
        masterPrompt: state.masterPrompt || {}
      })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Request failed');
    }

    const reader  = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer    = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try { handleStreamEvent(JSON.parse(line.slice(6))); } catch (_) {}
        }
      }
    }
  } catch (err) {
    showError(err.message);
  } finally {
    state.running = false;
    if (runBtn)   runBtn.disabled    = false;
    if (runLabel) runLabel.textContent = 'Run Analysis';
    removeTypingIndicator();
  }
}

function clearStreamArea() {
  const stream    = document.getElementById('agent-stream');
  const messages  = document.getElementById('messages-container');
  const graphArea = document.getElementById('comm-graph-area');
  if (stream)    stream.style.display    = 'none';
  if (graphArea) graphArea.style.display = 'none';
  if (messages)  messages.innerHTML      = '';
  commGraph = null;
  const stats = document.getElementById('comm-graph-stats');
  if (stats) stats.innerHTML = '';

  // Reset phase labels
  ['prog-p1','prog-p2','prog-p3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active', 'done');
  });
}

let currentRound = 0;
let commGraph    = null;

function handleStreamEvent(ev) {
  switch (ev.type) {
    case 'start':
      currentRound = 0;
      initCommGraph(ev.agents, ev.taskType);
      break;

    case 'phase':
      renderPhaseHeader(ev.phase);
      break;

    case 'agent_message': {
      currentRound = ev.round;
      renderAgentMessage(ev.agent, ev.message, ev.round);
      // Highlight sidebar
      document.querySelectorAll('.agent-row').forEach(el => el.classList.remove('active-agent'));
      const miniEl = document.getElementById(`agent-mini-${ev.agent.id}`);
      if (miniEl) { miniEl.classList.add('active-agent'); miniEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
      // Graph: pulse active node + add edges
      if (commGraph) {
        commGraph.setActive(ev.agent.name);
        const conns = parseConnections(ev.agent.name, ev.message);
        for (const c of conns) commGraph.addEdge(c.from, c.to, c.kind);
        updateGraphStats();
      }
      break;
    }

    case 'result_card':
      setProgress(3);
      renderResultCard(ev.content, ev.needsHumanApproval);
      break;

    case 'error':
      showError(ev.message);
      break;

    case 'done':
      document.querySelectorAll('.agent-row').forEach(el => el.classList.remove('active-agent'));
      removeTypingIndicator();
      break;
  }
}

// ─── Parse Connections from MiroFish message ──────────────
function parseConnections(agentName, message) {
  const conns = [];
  const nameRx = /([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/;

  const challenge = message.match(new RegExp(`@Challenge:\\s*@${nameRx.source}`, 'i'));
  if (challenge) conns.push({ from: agentName, to: challenge[1], kind: 'challenge' });

  const agree = message.match(new RegExp(`@Agree:\\s*@${nameRx.source}`, 'i'));
  if (agree) conns.push({ from: agentName, to: agree[1], kind: 'agree' });

  const react = message.match(/Reacting to:.*?—\s*@([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/i);
  if (react) conns.push({ from: agentName, to: react[1], kind: 'react' });

  const reply = message.match(/To:\s*@([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/i);
  if (reply) conns.push({ from: agentName, to: reply[1], kind: 'reply' });

  return conns;
}

function updateGraphStats() {
  const statsEl = document.getElementById('comm-graph-stats');
  if (!statsEl || !commGraph) return;
  const edges = commGraph.edges;
  const challenges = edges.filter(e => e.kind === 'challenge').length;
  const agrees     = edges.filter(e => e.kind === 'agree').length;
  const reacts     = edges.filter(e => e.kind === 'react' || e.kind === 'reply').length;
  statsEl.innerHTML = [
    challenges ? `<span class="graph-stat"><span style="color:#f43f5e">●</span> <strong>${challenges}</strong> challenges</span>` : '',
    agrees     ? `<span class="graph-stat"><span style="color:#22c55e">●</span> <strong>${agrees}</strong> agreements</span>`   : '',
    reacts     ? `<span class="graph-stat"><span style="color:#8b5cf6">●</span> <strong>${reacts}</strong> reactions</span>`    : '',
  ].filter(Boolean).join('');
}

// ─── Progress ────────────────────────────────────────────────
function setProgress(phase) {
  const fill = document.getElementById('progress-bar-fill');
  const pct  = phase === 0 ? 5 : phase === 1 ? 33 : phase === 2 ? 66 : 100;
  if (fill) fill.style.width = `${pct}%`;

  const ids = ['prog-p1','prog-p2','prog-p3'];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('done',   i + 1 < phase);
    el.classList.toggle('active', i + 1 === phase);
  });
}

// ─── CommGraph (live canvas visualization) ────────────────────
class CommGraph {
  constructor(canvas) {
    this.canvas  = canvas;
    this.ctx     = canvas.getContext('2d');
    this.nodes   = [];  // { name, emoji, x, y, active }
    this.edges   = [];  // { from, to, kind, opacity, label }
    this.raf     = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const parent = this.canvas.parentElement;
    this.canvas.width  = parent ? parent.clientWidth : 600;
    this.canvas.height = 320;
    this.layout();
    this.draw();
  }

  init(agents) {
    this.nodes = agents.map(a => ({
      name:   a.name,
      emoji:  a.emoji || AGENT_EMOJIS[a.id] || '🤖',
      x: 0, y: 0,
      active: false,
      pulse:  0
    }));
    this.edges = [];
    this.layout();
    this.draw();
  }

  layout() {
    const W = this.canvas.width, H = this.canvas.height;
    const n = this.nodes.length;
    if (!n) return;
    const cx = W / 2, cy = H / 2;
    const R  = Math.min(W * 0.38, H * 0.38, 130);
    this.nodes.forEach((nd, i) => {
      const theta = (2 * Math.PI * i / n) - Math.PI / 2;
      nd.x = cx + R * Math.cos(theta);
      nd.y = cy + R * Math.sin(theta);
    });
  }

  setActive(agentName) {
    this.nodes.forEach(n => { n.active = (n.name === agentName); if (n.active) n.pulse = 0; });
    this._animate();
  }

  addEdge(fromName, toName, kind) {
    const from = this.nodes.find(n => n.name === fromName);
    const to   = this.nodes.find(n => n.name === toName || n.name.startsWith(toName.split(' ')[0]));
    if (!from || !to || from === to) return;
    // Remove exact duplicate
    this.edges = this.edges.filter(e => !(e.from === from && e.to === to && e.kind === kind));
    this.edges.push({ from, to, kind, opacity: 0 });
    this._animate();
  }

  _animate() {
    if (this.raf) return;
    const step = () => {
      let more = false;
      for (const e of this.edges) {
        if (e.opacity < 1) { e.opacity = Math.min(1, e.opacity + 0.05); more = true; }
      }
      for (const n of this.nodes) {
        if (n.active) { n.pulse = (n.pulse + 0.06) % (Math.PI * 2); more = true; }
      }
      this.draw();
      this.raf = more ? requestAnimationFrame(step) : null;
    };
    this.raf = requestAnimationFrame(step);
  }

  draw() {
    const { ctx, canvas, nodes, edges } = this;
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Dark background
    ctx.fillStyle = 'rgba(10,10,18,0.0)';
    ctx.fillRect(0, 0, W, H);

    // Draw edges
    for (const e of edges) this._drawEdge(e);

    // Draw nodes on top
    for (const nd of nodes) this._drawNode(nd);
  }

  _edgeColor(kind, alpha) {
    const colors = {
      challenge: `rgba(244,63,94,${alpha})`,
      agree:     `rgba(34,197,94,${alpha})`,
      react:     `rgba(139,92,246,${alpha})`,
      reply:     `rgba(251,146,60,${alpha})`
    };
    return colors[kind] || `rgba(148,163,184,${alpha})`;
  }

  _drawEdge(e) {
    const { ctx } = this;
    const { from, to, kind, opacity } = e;
    const NODE_R = 22;

    const dx = to.x - from.x, dy = to.y - from.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist, uy = dy / dist;

    // Start + end at node edges
    const sx = from.x + ux * NODE_R;
    const sy = from.y + uy * NODE_R;
    const ex = to.x   - ux * NODE_R;
    const ey = to.y   - uy * NODE_R;

    // Control point: offset perpendicular for curve
    const perp = 0.3 * dist;
    const cx1  = (sx + ex) / 2 - uy * perp;
    const cy1  = (sy + ey) / 2 + ux * perp;

    const color  = this._edgeColor(kind, opacity * 0.9);
    const colorD = this._edgeColor(kind, opacity * 0.5);

    // Glow pass
    ctx.save();
    ctx.shadowColor = this._edgeColor(kind, 0.6);
    ctx.shadowBlur  = 6;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.quadraticCurveTo(cx1, cy1, ex, ey);
    ctx.strokeStyle = colorD;
    ctx.lineWidth   = 3;
    ctx.stroke();
    ctx.restore();

    // Line
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.quadraticCurveTo(cx1, cy1, ex, ey);
    ctx.strokeStyle = color;
    ctx.lineWidth   = 1.5;
    ctx.stroke();

    // Arrowhead at end
    // Direction at t=1 of quadratic: 2*(end - ctrl)
    const adx = ex - cx1, ady = ey - cy1;
    const angle = Math.atan2(ady, adx);
    const AS = 7;
    ctx.save();
    ctx.translate(ex, ey);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-AS, -AS * 0.45);
    ctx.lineTo(-AS,  AS * 0.45);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  _drawNode(nd) {
    const { ctx } = this;
    const r = 22;
    const pulse = nd.active ? 4 + 3 * Math.sin(nd.pulse) : 0;

    // Outer glow for active
    if (nd.active) {
      ctx.save();
      ctx.shadowColor = 'rgba(139,92,246,0.7)';
      ctx.shadowBlur  = 18;
      ctx.beginPath();
      ctx.arc(nd.x, nd.y, r + pulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139,92,246,0.5)';
      ctx.lineWidth   = 2;
      ctx.stroke();
      ctx.restore();
    }

    // Node background
    ctx.beginPath();
    ctx.arc(nd.x, nd.y, r, 0, Math.PI * 2);
    const grad = ctx.createRadialGradient(nd.x, nd.y - 4, 2, nd.x, nd.y, r);
    grad.addColorStop(0, 'rgba(30,30,46,0.98)');
    grad.addColorStop(1, 'rgba(17,17,28,0.98)');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = nd.active ? 'rgba(139,92,246,0.9)' : 'rgba(99,102,241,0.3)';
    ctx.lineWidth   = nd.active ? 2 : 1;
    ctx.stroke();

    // Emoji
    ctx.font = '15px serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(nd.emoji, nd.x, nd.y);

    // Name label
    const firstName = nd.name.split(' ')[0];
    ctx.font         = '9px Inter, sans-serif';
    ctx.fillStyle    = nd.active ? 'rgba(199,182,255,0.95)' : 'rgba(148,163,184,0.8)';
    ctx.textBaseline = 'top';
    ctx.fillText(firstName, nd.x, nd.y + r + 4);
  }
}

function initCommGraph(agents, taskType) {
  const graphArea = document.getElementById('comm-graph-area');
  const canvas    = document.getElementById('comm-graph-canvas');
  if (!graphArea || !canvas) return;

  commGraph = new CommGraph(canvas);
  commGraph.init(agents);

  graphArea.style.display = 'block';
  graphArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── Phase Header ────────────────────────────────────────────
function renderPhaseHeader(phase) {
  const stream     = document.getElementById('agent-stream');
  const phaseLabel = document.getElementById('stream-phase-label');
  const messages   = document.getElementById('messages-container');
  if (!stream || !messages) return;

  stream.style.display = 'block';
  if (phaseLabel) phaseLabel.textContent = phase;

  // Map phase to progress step
  if (/round 1|independent/i.test(phase))         setProgress(1);
  else if (/round 2.*debate|cross.debate/i.test(phase)) setProgress(2);
  else if (/challenge repl/i.test(phase))          setProgress(2);
  else if (/synthesis|orchestrator/i.test(phase))  setProgress(3);

  const divider = document.createElement('div');
  divider.className   = 'round-divider';
  divider.textContent = phase;
  messages.appendChild(divider);
  removeTypingIndicator();
  showTypingIndicator('Agents processing…');
}

// ─── Typing Indicator ────────────────────────────────────────
function showTypingIndicator(label) {
  const messages = document.getElementById('messages-container');
  if (!messages) return;
  removeTypingIndicator();

  const bubble = document.createElement('div');
  bubble.className = 'bubble typing-bubble';
  bubble.innerHTML = `
    <div class="bubble-avatar">⋯</div>
    <div class="bubble-content">
      <div class="bubble-meta">
        <span class="bubble-name">${escHtml(label)}</span>
      </div>
      <div class="bubble-text">
        <span class="typing-dots"><span></span><span></span><span></span></span>
      </div>
    </div>
  `;
  messages.appendChild(bubble);
  bubble.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function removeTypingIndicator() {
  document.querySelectorAll('.typing-bubble').forEach(el => el.remove());
}

// ─── Agent Message Bubble ────────────────────────────────────
function renderAgentMessage(agent, message, round) {
  const messages = document.getElementById('messages-container');
  if (!messages) return;

  removeTypingIndicator();

  const emoji     = AGENT_EMOJIS[agent.id] || '🤖';
  const confMatch = message.match(/CONFIDENCE\s+([\d]+%)/i);
  const confidence = confMatch ? confMatch[1] : '';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = `
    <div class="bubble-avatar">${emoji}</div>
    <div class="bubble-content">
      <div class="bubble-meta">
        <span class="bubble-name">${escHtml(agent.name)}</span>
        <span class="bubble-role">${escHtml(agent.role)}</span>
        <span class="bubble-round">Round ${round}</span>
        ${confidence ? `<span class="bubble-conf">${confidence}</span>` : ''}
      </div>
      <div class="bubble-text">${formatMessage(message)}</div>
    </div>
  `;
  messages.appendChild(bubble);
  bubble.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Show typing for next agent after a brief pause
  setTimeout(() => showTypingIndicator('Next agent…'), 400);
}

// ─── Result Card ─────────────────────────────────────────────
function renderResultCard(content, needsApproval) {
  const area   = document.getElementById('result-card-area');
  const badge  = document.getElementById('result-approval-badge');
  const cardEl = document.getElementById('result-card-content');
  const appBtn = document.getElementById('approve-btn');
  const rejBtn = document.getElementById('reject-btn');
  if (!area) return;

  removeTypingIndicator();

  if (cardEl) cardEl.innerHTML = parseResultCard(content);

  if (badge) {
    badge.className  = `approval-tag ${needsApproval ? 'needs-approval' : 'no-approval'}`;
    badge.textContent = needsApproval ? '⚠ Human Approval Required' : '✓ Auto-Executable';
  }

  if (appBtn) appBtn.style.display = needsApproval ? 'inline-flex' : 'none';
  if (rejBtn) rejBtn.style.display = needsApproval ? 'inline-flex' : 'none';

  area.style.display = 'block';
  setTimeout(() => area.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function parseResultCard(content) {
  const lines    = content.split('\n');
  let html       = '';
  let inActions  = false;
  let actionsBuf = '';

  // Close any open actions block
  const closeActions = () => {
    if (!inActions) return;
    html += `<div class="rc-actions-list">${actionsBuf}</div></div>`;
    inActions = false; actionsBuf = '';
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line || /^[═─=\-\[]{3,}/.test(line)) { continue; }
    if (/^(RESULT CARD|📋 RESULT CARD|\[RESULT CARD\])$/i.test(line)) continue;

    // Field patterns:
    // 1. **Bold Label**: value
    // 2. Mixed-case "Label name:" value (server output format)
    // 3. ALL-CAPS LABEL: value
    const boldMatch  = line.match(/^\*\*(.+?)\*\*\s*[:：]\s*(.*)$/);
    const mixedMatch = !boldMatch && line.match(/^([A-Za-z][A-Za-z &\/\-]{2,50}):\s*(.*)$/);
    const fieldMatch = boldMatch || mixedMatch;

    if (fieldMatch) {
      closeActions();
      const label = (fieldMatch[1]).trim();
      const value = (fieldMatch[2]).trim();
      const lUp   = label.toUpperCase();

      if (lUp.includes('RISK')) {
        // Extract the risk word (LOW/MEDIUM/HIGH/CRITICAL)
        const riskWord = value.match(/\b(LOW|MEDIUM|HIGH|CRITICAL)\b/i)?.[1]?.toUpperCase() || 'MEDIUM';
        html += `<div class="rc-field"><span class="rc-label">${escHtml(label)}</span><span class="rc-risk-pill rc-risk-${riskWord}">${escHtml(value || riskWord)}</span></div>`;
      } else if (lUp.includes('CONFIDENCE')) {
        const pct = value.match(/\d+%?/)?.[0] || value;
        html += `<div class="rc-field"><span class="rc-label">${escHtml(label)}</span><span class="rc-conf">${escHtml(pct)}</span></div>`;
      } else if (lUp.includes('NEXT ACTION') || lUp === 'NEXT ACTIONS' || lUp === 'ACTIONS') {
        inActions = true;
        html += `<div class="rc-field"><span class="rc-label">${escHtml(label)}</span>`;
        if (value) actionsBuf += `<div class="rc-action-item">→ ${escHtml(value)}</div>`;
      } else if (lUp.includes('RECOMMENDATION')) {
        html += `<div class="rc-field"><span class="rc-label">${escHtml(label)}</span><span class="rc-value rc-rec">${escHtml(value)}</span></div>`;
      } else {
        html += `<div class="rc-field"><span class="rc-label">${escHtml(label)}</span><span class="rc-value">${escHtml(value)}</span></div>`;
      }
    } else if (inActions && /^[-•*]|^\d+\./.test(line)) {
      actionsBuf += `<div class="rc-action-item">→ ${escHtml(line.replace(/^[-•*\d.]+\s*/, ''))}</div>`;
    } else if (inActions && line) {
      // continuation of an action item (long text wrapping)
      actionsBuf += `<div class="rc-action-item">→ ${escHtml(line)}</div>`;
    } else if (!inActions && line) {
      html += `<div class="rc-field"><span class="rc-value">${escHtml(line)}</span></div>`;
    }
  }
  closeActions();

  return html || `<div class="rc-field"><span class="rc-value" style="white-space:pre-wrap">${escHtml(content)}</span></div>`;
}

function hideResult() {
  const area = document.getElementById('result-card-area');
  if (area) area.style.display = 'none';
  const progressWrap = document.getElementById('progress-bar-wrap');
  if (progressWrap) progressWrap.style.display = 'none';
}

function showError(msg) {
  const stream   = document.getElementById('agent-stream');
  const messages = document.getElementById('messages-container');
  if (stream) stream.style.display = 'block';
  if (messages) {
    removeTypingIndicator();
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.borderLeft = '2px solid #ef4444';
    bubble.innerHTML = `
      <div class="bubble-avatar">⚠</div>
      <div class="bubble-content">
        <div class="bubble-meta"><span class="bubble-name" style="color:#ef4444">Error</span></div>
        <div class="bubble-text" style="color:#ef4444">${escHtml(msg)}</div>
      </div>
    `;
    messages.appendChild(bubble);
    bubble.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ─── Actions ─────────────────────────────────────────────────
function approveAction() {
  const appBtn = document.getElementById('approve-btn');
  const rejBtn = document.getElementById('reject-btn');
  if (appBtn) { appBtn.textContent = '✓ Approved'; appBtn.disabled = true; }
  if (rejBtn) rejBtn.style.display = 'none';
}

function rejectAction() {
  const rejBtn = document.getElementById('reject-btn');
  const appBtn = document.getElementById('approve-btn');
  if (rejBtn) { rejBtn.textContent = '✗ Rejected'; rejBtn.disabled = true; }
  if (appBtn) appBtn.style.display = 'none';
}

function newTask() {
  const textarea  = document.getElementById('task-input');
  const inputMeta = document.getElementById('input-meta');
  if (textarea) { textarea.value = ''; textarea.focus(); }
  if (inputMeta) inputMeta.textContent = 'auto-detect workflow';
  clearStreamArea();
  hideResult();
  document.querySelectorAll('.wf-item').forEach(el => el.classList.remove('active'));
}

// ─── Helpers ─────────────────────────────────────────────────
function formatMessage(text) {
  // MiroFish header: [NAME | ROLE | ROUND X | CONFIDENCE XX%]
  // Labels: Position:, Evidence:, Concerns:, Action:, @Challenge:, @Agree:
  return escHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+\|[^\]]+\|[^\]]+[^\]]*)\]/g, '<span class="msg-tag">[$1]</span>')
    .replace(/^(Position|Evidence|Concerns|Action|Situation):/gm, '<strong>$1:</strong>')
    .replace(/@Challenge:/g, '<span class="msg-at challenge-tag">@Challenge:</span>')
    .replace(/@Agree:/g,     '<span class="msg-at agree-tag">@Agree:</span>')
    .replace(/@([\w][\w ]+)/g, '<span class="msg-at">@$1</span>')
    .replace(/\n/g, '<br>');
}

function escHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
