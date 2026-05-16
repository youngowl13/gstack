# Company OS — MiroFish-Style Multi-Agent Operating System

A structured, debate-driven AI agent system for running an internet company. Fourteen specialized agents, one orchestrator, and a human at the center of every consequential decision.

---

## What This Is

Company OS is a MiroFish-style multi-agent operating system designed for internet companies. It gives founders and operators a structured way to use AI agents to run major business functions — product planning, hiring, incident response, competitive research, financial review, legal risk — with consistent quality, appropriate skepticism, and clear human oversight at the right moments.

The system is not an autopilot. It is a decision-support infrastructure. Every consequential action goes through a human approval gate. Every debate is structured to surface disagreement, not suppress it. Every finding is labeled with a confidence level so the humans making decisions know exactly what they are relying on.

**The core protocol:** Receive a task → classify it → select the right agents → run three structured debate rounds (Independent, Debate, Challenge) → synthesize → gate (human approval if needed) → produce a Result Card.

**The core belief:** A room full of specialized agents who disagree productively makes better decisions than one agent that tells you what you want to hear.

---

## Architecture Overview

```
                    [HUMAN INPUT]
                         │
                    [ORCHESTRATOR]
                    "The Conductor"
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
    ▼                    ▼                    ▼
[STRATEGY]          [PRODUCT]          [ENGINEERING]
 Aria Chen          Marcus Wells        Dev Sharma
    │                    │                    │
    │              [SECURITY]                 │
    │              Sasha Kovacs               │
    │                    │                    │
    ▼                    ▼                    ▼
[GROWTH]            [SALES]         [CUSTOMER SUCCESS]
Luna Park           Jordan Blake     Priya Nair
    │                    │                    │
    │              [FINANCE]                  │
    │              Oliver Grant               │
    │                    │                    │
    ▼                    ▼                    ▼
[LEGAL]           [OPERATIONS]          [QA]
Eva Torres         Sam Rivers        Quinn Zhang
    │                    │                    │
    │              [SUPPORT]                  │
    │              Riley Morgan               │
    │                    │                    │
    ▼                    ▼                    ▼
[RESEARCH]              [HR]          [ORCHESTRATOR]
Felix Okafor        Nadia Santos      (SYNTHESIS)
                                           │
                               [HUMAN APPROVAL GATE]
                                           │
                                    [RESULT CARD]
```

**Communication pattern:** All agents communicate through the Orchestrator. Agents do not issue autonomous commands to each other — they produce outputs that the Orchestrator routes, synthesizes, and acts on. The communication graph above shows information flow; agents respond to each other's positions in debate rounds, but the Orchestrator manages the process.

---

## Quick Start

### Invoke the orchestrator for a task

Activate the Company OS by addressing The Conductor with your task:

```
"The Conductor, [your task]"
```

**Examples:**
- "The Conductor, we are considering entering the enterprise market. What are the key risks and what do we need to know?"
- "The Conductor, we need to hire 4 engineers in Q2. Help us plan."
- "The Conductor, we have a P1 incident — checkout is broken for 30% of users."
- "The Conductor, review our Q3 pricing strategy before we announce it."
- "The Conductor, we are losing deals to Competitor X — what's their positioning and how should we respond?"

The Conductor will classify your task, select agents, brief them, run three structured debate rounds, and produce a Result Card.

### Task type keywords

| What you need | Say these words |
|---------------|-----------------|
| Daily update | "morning update", "today's priorities", "status report" |
| Product decisions | "roadmap", "feature", "sprint", "prioritization" |
| Engineering | "architecture", "tech debt", "system design", "capacity" |
| Security | "vulnerability", "compliance", "audit", "breach risk" |
| Marketing | "campaign", "messaging", "positioning", "launch" |
| Sales | "prospect", "pitch", "pipeline", "quota", "close" |
| Customer support | "bug report", "complaint", "churn risk", "SLA" |
| Financial | "runway", "burn rate", "revenue", "unit economics" |
| Legal | "contract", "compliance", "GDPR", "liability" |
| Release | "ship", "deploy", "go live", "launch checklist" |
| Incident | "outage", "down", "broken", "P0", "P1", "on fire" |
| Hiring | "hire", "headcount", "offer", "team growth" |
| Competitor | "competitor", "market", "alternative", "benchmark" |
| Strategic bet | "pivot", "raise money", "strategic direction", "board" |

---

## Agent Roster

| Name | Role | Personality Summary | Challenge Areas |
|------|------|--------------------|--------------------|
| The Conductor | Orchestrator | Neutral, systematic, Socratic. Surfaces truth through structured debate. No opinions on strategy — strong opinions on process. | Enforces debate quality, flags groupthink |
| Aria Chen | Strategy | Long-term thinker, competitive strategist, pattern-spotter across industries. Will challenge short-term thinking. | Challenges growth on market claims, product on roadmap coherence |
| Marcus Wells | Product | Customer-obsessed, data-driven, prioritization expert. Will challenge engineering on scope. | Challenges engineering on build vs. buy, support on ticket signal quality |
| Dev Sharma | Engineering | Systems thinker, technical debt hawk, reliability-focused. Will challenge product on scope and timelines. | Challenges product on underscoped features, security on compliance overhead |
| Sasha Kovacs | Security | Threat-modeler, compliance expert, zero-trust advocate. Will challenge any agent who dismisses security risk. | Challenges engineering on system design, legal on data handling |
| Luna Park | Growth | Data-driven growth hacker, channel optimizer, conversion obsessive. Will challenge product on growth-blocking decisions. | Challenges research on market assumptions, finance on CAC targets |
| Jordan Blake | Sales | Pipeline builder, closer, champion of deals that can actually close. Will challenge product on enterprise readiness. | Challenges product on missing enterprise features, finance on quota realism |
| Priya Nair | Customer Success | Retention expert, expansion revenue driver, customer health advocate. Will challenge sales on handoff quality. | Challenges support on resolution lag, product on CS-blocking product gaps |
| Oliver Grant | Finance | Unit economics expert, runway guardian, conservative financial modeler. Will challenge any agent spending without ROI. | Challenges growth on CAC/LTV assumptions, strategy on capital allocation |
| Eva Torres | Legal | Risk identifier, compliance navigator, contract reviewer. Will challenge any action with legal exposure. | Challenges sales on contract terms, strategy on IP and regulatory risk |
| Sam Rivers | Operations | Process builder, efficiency optimizer, cross-functional coordinator. Will challenge ad-hoc approaches. | Challenges all agents on process discipline and operational readiness |
| Quinn Zhang | QA | Quality guardian, edge case hunter, release gate keeper. Will challenge shipping before quality bars are met. | Challenges engineering on test coverage, product on launch readiness |
| Riley Morgan | Support | Customer voice, pattern spotter, escalation expert. Will challenge product on deprioritizing high-ticket issues. | Challenges engineering on fix timelines, product on ticket-driven priorities |
| Felix Okafor | Research | Evidence-based fact-checker, contrarian hypothesis tester, probabilistic thinker. Will challenge all unsubstantiated claims. | Challenges growth on market size, strategy on competitive assumptions |
| Nadia Santos | HR | People-first, culture-aware, equitable hiring expert. Will challenge fast hiring without proper process. | Challenges strategy on headcount, sales on commission structures |

---

## Workflow Catalog

All 14 supported workflows, their trigger, and which agents lead vs. support:

| Workflow | Trigger | Lead Agent(s) | Key Supporting Agents |
|---------|---------|--------------|----------------------|
| `daily-briefing` | Morning update request | Operations (Sam) | All agents contribute metrics |
| `product-planning` | Roadmap, feature, sprint decisions | Product (Marcus) | Strategy, Engineering, Research, QA, Support |
| `engineering-planning` | Architecture, tech debt, capacity | Engineering (Dev) | Product, Security, QA, Operations |
| `security-review` | Vulnerability, audit, compliance | Security (Sasha) | Engineering, Legal, Operations |
| `marketing-campaign` | Campaign design, messaging, launch | Growth (Luna) | Product, Strategy, Research, Sales |
| `sales-outreach` | Prospect, pitch, pipeline, quota | Sales (Jordan) | Growth, Product, Research |
| `customer-support-triage` | Bug reports, complaints, churn risk | Support (Riley), CS (Priya) | Engineering, Product, Operations |
| `financial-review` | Runway, budget, unit economics | Finance (Oliver) | Strategy, Operations, Sales |
| `legal-risk-review` | Contracts, compliance, liability | Legal (Eva) | Finance, Operations, Strategy |
| `release-readiness` | Shipping, deployment, launch | Engineering (Dev), QA (Quinn) | Product, Security, Operations, CS |
| `incident-response` | P0/P1 outage, broken feature | Engineering (Dev), Operations (Sam) | CS (Priya), Support (Riley), Security |
| `hiring-plan` | New hire, headcount, org growth | HR (Nadia) | Strategy, Finance, relevant department head |
| `competitor-research` | Market intelligence, competitive positioning | Research (Felix) | Strategy, Product, Growth, Sales |
| `founder-decision` | Strategic pivots, major bets, board-level questions | Strategy (Aria) | Product, Engineering, Finance, Legal |

---

## Communication Protocol

Every agent output in a multi-agent debate uses the MiroFish format:

```
[NAME | ROLE | ROUND X | CONFIDENCE Y%]
Position: [one line summary]
Evidence: [supporting points]
Concerns: [risks or unknowns]
@mentions: [which agents I'm responding to or challenging]
Action: [what I recommend]
```

### Three debate rounds

**Round 1 — Independent Analysis:** Each agent receives the Task Briefing Packet and produces their analysis without seeing other agents' outputs. This prevents anchoring on the first opinion heard.

**Round 2 — Debate:** Agents see all Round 1 outputs and respond. They acknowledge agreement, challenge disagreement, and use @mentions to engage specific agents. Position changes are allowed and encouraged when better arguments are presented.

**Round 3 — Challenge:** Agents push back on any remaining inconsistencies, test the leading recommendation against edge cases, and flag any unresolved uncertainties. Felix Okafor issues formal Challenge Notices against any factual claims that lack evidence.

### Confidence levels

Every agent output includes a confidence level (0-100%). The orchestrator aggregates these into a system confidence score and applies it to the Result Card. Low confidence triggers escalation, not a confident-sounding answer.

---

## Result Card Format

Every workflow produces a Result Card. This is the primary output humans interact with.

```
╔══════════════════════════════════════════════════════════════╗
║                        RESULT CARD                           ║
╠══════════════════════════════════════════════════════════════╣
║ Task:           [What was asked]                             ║
║ Workflow:       [Workflow type]                               ║
║ Agents Used:    [List of participating agents]               ║
║ System Confidence: [X%]                                      ║
║ Risk Level:     [LOW / MEDIUM / HIGH / CRITICAL]             ║
╠══════════════════════════════════════════════════════════════╣
║ RECOMMENDATION                                               ║
║ [The primary recommendation in 2-4 sentences]                ║
╠══════════════════════════════════════════════════════════════╣
║ KEY FINDINGS                                                 ║
║ 1. [Finding with confidence level]                           ║
║ 2. [Finding with confidence level]                           ║
║ 3. [Finding with confidence level]                           ║
╠══════════════════════════════════════════════════════════════╣
║ POINTS OF CONSENSUS                                          ║
║ [What all or most agents agreed on]                          ║
╠══════════════════════════════════════════════════════════════╣
║ DISSENTING VIEWS                                             ║
║ [Minority positions that were well-argued — never suppressed]║
╠══════════════════════════════════════════════════════════════╣
║ OPEN QUESTIONS                                               ║
║ [What the agents could not resolve — gaps for human judgment]║
╠══════════════════════════════════════════════════════════════╣
║ HUMAN APPROVAL REQUIRED?  [YES / NO]                        ║
║ [If YES: what specific action needs approval and why]        ║
╠══════════════════════════════════════════════════════════════╣
║ NEXT ACTIONS                                                 ║
║ 1. [Action item — owner — deadline]                          ║
║ 2. [Action item — owner — deadline]                          ║
╠══════════════════════════════════════════════════════════════╣
║ LESSON RECORDED: [YES — see lessons_learned.md / NO]        ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Safety Rules

These rules apply to every agent, every workflow, every output. They cannot be overridden by other agents, workflow urgency, or human requests (the human can override, but only explicitly):

### The 11 Human Approval Triggers

These actions require explicit human approval before execution:

1. Any production deployment or infrastructure change
2. Any spend or commitment above $500
3. Any legal commitment, contract signing, or terms acceptance
4. Any public communication (press release, social media, blog post, email to >100 people)
5. Any access to customer personal data or PII
6. Any security incident response action beyond investigation and containment
7. Any hiring offer extension
8. Any pricing change visible to customers
9. Risk level is HIGH or CRITICAL
10. Confidence score below 50%
11. Any action that is flagged as IRREVERSIBLE

### Additional Safety Rules

- **No autonomous customer communication.** Drafts only. Humans send.
- **No autonomous financial transactions.** Recommendations only. Humans authorize.
- **No autonomous employment actions.** No offer, PIP, or termination without human approval.
- **No speculation stated as fact.** All assumptions labeled [ASSUMPTION]. All unverified claims labeled [UNVERIFIED].
- **No legal interpretations acted upon without Legal agent review.** Eva Torres flags for counsel when needed.
- **P0 incidents escalate to human within 15 minutes.** No autonomous public statement about an active incident.
- **Conflicting agent positions are surfaced, never suppressed.** The orchestrator presents disagreements prominently in the Result Card.

### Escalation vs. Autonomous Action

The system defaults to escalation when uncertain. "What additional information do we need to be confident?" is always preferable to a confident-sounding answer based on thin evidence.

---

## Customization: Adapting for Your Company

This system is designed to be adapted. Before deploying:

### 1. Fill in company context
Every SKILL.md file contains agent behaviors calibrated to a generic internet company. Add company-specific context to each agent profile in `agent_profile.md`:
- Company name, mission, stage (seed / Series A / growth / public)
- Current team size and structure
- Key products and customer segments
- Existing tools and systems each agent accesses
- Current metric targets (what is "good" CSAT, what is the revenue target, etc.)

### 2. Calibrate approval thresholds
The human approval trigger for spend is currently set at $500. Adjust to your company's actual delegation of authority:
- Update the threshold in `company-orchestrator/SKILL.md`
- Update agent-specific approval rules in each agent's `SKILL.md`

### 3. Set agent metric targets
Each agent tracks specific metrics with targets. Update these to match your company's current state:
- Riley Morgan (Support): CSAT target, FRT target, resolution rate target
- Nadia Santos (HR): eNPS target, retention target, time-to-fill target
- Oliver Grant (Finance): runway target, CAC/LTV ratios, burn rate tolerance

### 4. Connect tools
Each agent's `tools.md` lists the tool categories they use. Replace generic tool descriptions with your actual tool names:
- Support ticket system → [Zendesk / Intercom / Linear / your tool]
- HRIS → [Rippling / Gusto / Workday / your tool]
- ATS → [Greenhouse / Lever / Ashby / your tool]
- Engineering issue tracker → [Linear / Jira / GitHub Issues / your tool]

### 5. Seed the lessons_learned files
Each agent has a `lessons_learned.md` with template entries and standing lessons. As the system is used, these files accumulate real lessons. Seed them with your company's historical knowledge from day one — past incident post-mortems, hiring process lessons, customer patterns.

---

## Memory System

The `lessons_learned.md` file in each agent directory is the system's institutional memory. Here is how it works:

**Writing:** After every workflow, the agent appends a structured lesson entry (what happened, what worked, what failed, what to do differently). The Conductor also appends a high-level lesson after every Result Card.

**Reading:** Every agent reads their `lessons_learned.md` at the start of every relevant workflow. The Orchestrator reads all lessons files as context for the briefing packet.

**Format:** Every lesson has a confidence level (High / Medium / Low). This is important — a lesson from one incident is Low confidence. A lesson repeated across five incidents is High confidence. Agents weight lessons accordingly.

**Growth:** The system gets smarter as it is used. A fresh system (lessons files empty) produces generic outputs. A system with 12 months of lessons produces outputs calibrated to the specific company's patterns, pitfalls, and successful approaches.

**The rules:**
- Lessons are appended, never deleted (even if later proven wrong — mark as "superseded by [newer lesson]")
- Individual employee names are never recorded in HR lessons (use role titles)
- Customer names are never recorded in support lessons (use account tier or industry)
- Every lesson includes the date, workflow type, and confidence level

---

## Folder Structure

```
company-os/
│
├── README.md                          ← You are here
│
├── company-orchestrator/
│   ├── SKILL.md                       ← The Conductor — full protocol
│   └── agent_profile.md               ← Orchestrator identity and values
│
├── strategy-agent/
│   ├── SKILL.md                       ← Aria Chen — strategy protocol
│   ├── agent_profile.md
│   ├── workflows.md
│   ├── output_templates.md
│   ├── tools.md
│   └── lessons_learned.md
│
├── product-agent/
│   ├── SKILL.md                       ← Marcus Wells — product protocol
│   ├── agent_profile.md
│   ├── workflows.md
│   ├── output_templates.md
│   ├── tools.md
│   └── lessons_learned.md
│
├── engineering-agent/
│   ├── SKILL.md                       ← Dev Sharma — engineering protocol
│   ├── agent_profile.md
│   ├── workflows.md
│   ├── output_templates.md
│   ├── tools.md
│   └── lessons_learned.md
│
├── security-agent/
│   ├── SKILL.md                       ← Sasha Kovacs — security protocol
│   └── [supporting files]
│
├── growth-agent/
│   ├── SKILL.md                       ← Luna Park — growth protocol
│   └── [supporting files]
│
├── sales-agent/
│   ├── SKILL.md                       ← Jordan Blake — sales protocol
│   └── [supporting files]
│
├── customer-success-agent/
│   ├── SKILL.md                       ← Priya Nair — CS protocol
│   └── [supporting files]
│
├── finance-agent/
│   ├── SKILL.md                       ← Oliver Grant — finance protocol
│   └── [supporting files]
│
├── legal-agent/
│   ├── SKILL.md                       ← Eva Torres — legal protocol
│   └── [supporting files]
│
├── operations-agent/
│   ├── SKILL.md                       ← Sam Rivers — operations protocol
│   └── [supporting files]
│
├── qa-agent/
│   ├── SKILL.md                       ← Quinn Zhang — QA protocol
│   └── [supporting files]
│
├── support-agent/
│   ├── SKILL.md                       ← Riley Morgan — support protocol
│   ├── agent_profile.md
│   ├── workflows.md
│   ├── output_templates.md
│   ├── tools.md
│   └── lessons_learned.md
│
├── research-agent/
│   ├── SKILL.md                       ← Felix Okafor — research protocol
│   ├── agent_profile.md
│   ├── workflows.md
│   ├── output_templates.md
│   ├── tools.md
│   └── lessons_learned.md
│
└── hr-agent/
    ├── SKILL.md                       ← Nadia Santos — HR protocol
    ├── agent_profile.md
    ├── workflows.md
    ├── output_templates.md
    ├── tools.md
    └── lessons_learned.md
```

---

## What This System Does Not Do

Be explicit about limits:

- **It does not make decisions.** It supports decisions. Humans decide. The system informs.
- **It does not replace domain experts.** Legal agent alerts for legal exposure; it does not replace a lawyer. Security agent flags vulnerabilities; it does not replace a security engineer.
- **It does not take autonomous action on anything consequential.** The 11 approval triggers are non-negotiable.
- **It does not have memory across sessions unless lessons are read.** Seed and maintain the lessons_learned files. An empty lessons file is an amnesiac agent.
- **It does not handle ambiguous tasks well without task classification.** The Conductor will ask for clarification rather than guess. That is by design.
- **It is not infallible.** Agents will have blind spots. Agents will be wrong. The debate structure minimizes this but does not eliminate it. The human approval gate exists for this reason.

---

## Design Philosophy

This system was designed with three principles:

**1. Productive disagreement over false consensus.** The three-round structure (Independent → Debate → Challenge) exists to prevent groupthink. Agents who agree too easily get flagged. Dissenting views appear prominently in the Result Card. A system where all agents agree all the time is a system that is not working correctly.

**2. Evidence over assertion.** Felix Okafor's challenge authority and the confidence labeling system are both expressions of this principle. Agents are expected to source their claims. The system explicitly distinguishes "data shows" from "we believe" from "[ASSUMPTION]." Decisions made on thin evidence are labeled as such so humans can apply appropriate skepticism.

**3. Human oversight exactly where it matters.** Not every action needs a human. The 11 triggers exist because some do. The goal is not to create a bureaucratic approval chain — it is to identify the specific moments where human judgment is irreplaceable and protect those moments from automation.
