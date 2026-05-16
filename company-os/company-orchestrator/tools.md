# Orchestrator Tools

Tools available to The Conductor for orchestration operations.

---

## 1. Memory Read/Write (lessons_learned.md)

### READ: Load past lessons

To read lessons from a specific agent's history:

```
READ lessons_learned.md
Location: company-os/[agent-folder]/lessons_learned.md
Purpose: Load past lessons to inform current deliberation
When to use: At the start of any task in a domain where we have prior lessons
```

Procedure:
1. Before starting Round 1, check if lessons_learned.md exists in each active agent's folder.
2. If it exists, extract any lessons tagged with the current task type.
3. Include relevant lessons in the Task Briefing Packet as "Prior lessons:" section.
4. If a lesson says "this agent was wrong about X last time," factor that into confidence weighting.

### WRITE: Append a new lesson

After every completed task, append to lessons_learned.md files:

```
WRITE lessons_learned.md
Locations:
  - company-os/company-orchestrator/lessons_learned.md (orchestrator-level lesson)
  - company-os/[agent-folder]/lessons_learned.md (for each participating agent)
Format: Use the Lesson Learned Entry Template from output_templates.md
When to write: After every completed task, before closing the session
```

---

## 2. Agent Invocation

### How to call each agent

Each agent is invoked by passing them the Task Briefing Packet and round context:

```
INVOKE AGENT: [agent-name]
Task Briefing Packet: [full packet from Step 3]
Round: [1 / 2 / 3]
Prior agents' outputs (Round 2+): [full outputs from prior agents, sorted by round]
Challenge question (Round 3): [the specific hard question assigned to this agent]
```

### Agent directory

| Agent | Folder | Primary Domain |
|---|---|---|
| strategy | `company-os/strategy-agent/` | CEO / Strategic decisions |
| product | `company-os/product-agent/` | Product management |
| engineering | `company-os/engineering-agent/` | Engineering and technical |
| security | `company-os/security-agent/` | Security and compliance |
| growth | `company-os/growth-agent/` | Marketing and growth |
| sales | `company-os/sales-agent/` | Sales and revenue |
| customer-success | `company-os/customer-success-agent/` | Customer relationships |
| finance | `company-os/finance-agent/` | Finance and operations |
| legal | `company-os/legal-agent/` | Legal and risk |
| operations | `company-os/operations-agent/` | Operations and infrastructure |
| qa | `company-os/qa-agent/` | Quality assurance |
| support | `company-os/support-agent/` | Customer support |
| research | `company-os/research-agent/` | Research and intelligence |
| hr | `company-os/hr-agent/` | People and culture |

### Agent invocation sequence

**Round 1 — Parallel (independent):**
- Invoke all selected agents simultaneously with the Task Briefing Packet.
- Do NOT share any agent's output with another during Round 1.
- Wait for all agents to respond before proceeding to Round 2.

**Round 2 — Sequential (debate):**
- Share all Round 1 outputs with all agents at once.
- Agents respond in this priority order: primary agents first, then secondary.
- Each agent may see prior agents' Round 2 responses as they come in, or they may all respond simultaneously — the Conductor decides based on task complexity.

**Round 3 — Parallel (challenge/steelman):**
- Issue the challenge prompt to all agents simultaneously.
- All agents respond to the same challenge questions.

---

## 3. Task Classification Logic

The classification algorithm:

```
CLASSIFY TASK
Input: Human's task description (raw text)
Output: task_type (one of 14 values)

Step 1: Keyword scan
  - Check for exact matches in the keyword table (see SKILL.md Step 0)
  - If 2+ keywords match a single category → classify as that category

Step 2: Semantic matching
  - If no strong keyword match: identify the core question being asked
  - "Should we do X?" → often founder-decision
  - "How do we fix Y?" → often incident-response or engineering-planning
  - "What's happening with Z?" → often daily-briefing or customer-support-triage

Step 3: Urgency check
  - If the task is time-sensitive (words like "now", "ASAP", "on fire", "critical") → route to incident-response or bump priority
  - If the task mentions a deadline → include deadline in briefing packet

Step 4: Ambiguity handling
  - If classification is ambiguous → present top 2 options to human
  - Ask: "Is this primarily about [Option A] or [Option B]?"
  - Do not proceed until classification is confirmed for ambiguous cases

Step 5: Confirm classification
  - State the classification and rationale before proceeding
```

---

## 4. Confidence Scoring Algorithm

Full algorithm for computing overall task confidence:

```
COMPUTE CONFIDENCE
Input: All agent outputs across all rounds
Output: confidence_percentage (integer 10-95)

Base score:
  Start at 100%

Deductions:
  - Subtract 10% for each unresolved disagreement (from Step 7)
  - Subtract 15% for each ⚠️ ASSUMPTION that is load-bearing
    (load-bearing = if this assumption is wrong, the recommendation changes)
  - Subtract 5% for each ⚠️ UNCERTAIN fact cited by any agent
  - Subtract 20% if fewer than 2 agents agreed on the core recommendation
  - Subtract 10% if the task type requires domain expertise not present in selected agents
  - Subtract 15% if critical data was missing and could not be obtained

Additions:
  - Add 5% for each case where multiple agents independently reached the same conclusion
    without prior coordination (convergence bonus)
  - Add 5% if this exact task type was done before with a positive outcome (from lessons_learned.md)

Constraints:
  - Cap at 95% (never 100%)
  - Floor at 10% (if below 10%, escalate immediately)
  - If above 85%, double-check: is this appropriate confidence, or groupthink?
    Check: did any agent challenge the consensus? If not, reduce by 10% and flag.

Output format:
  "Confidence: X% (based on: [brief rationale])"
  Or for wide uncertainty: "Confidence: X-Y% range (see disagreements)"
```

---

## 5. Risk Level Calculation

```
COMPUTE RISK LEVEL
Input: All agent outputs, task type, human approval triggers
Output: risk_level (LOW / MEDIUM / HIGH / CRITICAL)

Check for CRITICAL (if any are true → CRITICAL):
  □ Production system could be affected without rollback plan
  □ Legal liability exposure > $100K
  □ Customer PII/data could be compromised
  □ Irreversible decision (cannot be undone)
  □ Risk of significant reputational damage
  □ Active security breach or exploitation suspected

Check for HIGH (if any are true and not already CRITICAL → HIGH):
  □ Financial commitment > $10K
  □ Affects > 20% of active customers
  □ Decision must be made in < 24 hours with incomplete information
  □ Requires cross-functional coordination of 3+ teams with conflicting priorities
  □ Could break existing contracts or SLAs

Check for MEDIUM (if any are true and not already HIGH/CRITICAL → MEDIUM):
  □ Financial commitment $500-$10K
  □ Affects < 20% of customers
  □ 1-4 week implementation timeline
  □ Reversible with moderate effort (days of work, not weeks)

If none above → LOW

When in doubt: round UP the risk level. It is always better to flag a higher risk
and be wrong than to flag a lower risk and be wrong.

Output: "[LOW / MEDIUM / HIGH / CRITICAL]"
Always explain the specific trigger that set the risk level.
```

---

## 6. Communication Graph Generator

```
GENERATE COMMUNICATION GRAPH
Input: selected_agents (list), task_type, workflow_type
Output: ASCII communication graph

Template (2-3 agents):
  [HUMAN INPUT] → [ORCHESTRATOR]
                        │
            ┌───────────┼───────────┐
            ▼           ▼           ▼
      [AGENT_A]    [AGENT_B]   [AGENT_C]
            │           │           │
            └─────►[DEBATE ARENA]◄──┘
                        │
                 [CHALLENGE ROUND]
                        │
                 [ORCHESTRATOR SYNTHESIS]
                        │
                 [HUMAN APPROVAL GATE?]
                        │
                  [RESULT CARD]

Template (4-6 agents): add additional branches at the same level.
Template (6+ agents): group agents into clusters by domain.

Variation for incident-response (no full debate, speed mode):
  [HUMAN] → [ORCHESTRATOR] → [ENGINEERING + OPERATIONS]
                                      │
                              [RAPID ASSESSMENT]
                                      │
                              [REMEDIATION PLAN]
                                      │
                              [CUSTOMER COMMS GATE] ← human approval
                                      │
                              [RESULT CARD]

Variation for daily-briefing (broadcast mode):
  [ORCHESTRATOR] → [ALL AGENTS] → [OPERATIONS SYNTHESIS]
                                         │
                                  [DAILY BRIEFING]
```

---

## 7. Human Approval Gate Checker

```
CHECK HUMAN APPROVAL GATE
Input: task context, risk_level, agent outputs, planned actions
Output: requires_approval (YES/NO), reason, specific_question

Run through all 11 triggers:
  1. Any production deployment? → YES if true
  2. Any spend > $500? → YES if true
  3. Any legal commitment? → YES if true
  4. Any public communication? → YES if true
  5. Any customer PII access? → YES if true
  6. Security incident response beyond investigation? → YES if true
  7. Hiring offer extension? → YES if true
  8. Pricing change? → YES if true
  9. Risk level HIGH or CRITICAL? → YES if true
  10. Confidence < 50%? → YES if true
  11. Irreversible action? → YES if true

If ANY trigger is YES:
  Output: "⛔ HUMAN APPROVAL REQUIRED"
  State: which specific trigger(s) fired
  State: exactly what the human needs to decide
  State: what agents will do while waiting (if anything)
  Pause all agent action until human responds.

If NO trigger is YES:
  Output: "✓ Human approval gate: CLEAR — agents may proceed"
  Note: This is logged in the RESULT CARD as "Human approval required: NO"
```

---

## 8. Workflow Router

```
ROUTE WORKFLOW
Input: task_type (classified)
Output: workflow instructions specific to that task type

Routing table:
  daily-briefing → workflows.md § 1 (1 round, broadcast mode)
  product-planning → workflows.md § 2 (3 rounds, full deliberation)
  engineering-planning → workflows.md § 3 (3 rounds, full deliberation)
  security-review → workflows.md § 4 (3 rounds, high rigor)
  marketing-campaign → workflows.md § 5 (3 rounds, legal review required)
  sales-outreach → workflows.md § 6 (2 rounds, speed mode)
  customer-support-triage → workflows.md § 7 (2 rounds, speed mode)
  financial-review → workflows.md § 8 (3 rounds, full deliberation)
  legal-risk-review → workflows.md § 9 (3 rounds, human always required)
  release-readiness → workflows.md § 10 (2 rounds, checklist-driven)
  incident-response → workflows.md § 11 (continuous, speed critical)
  hiring-plan → workflows.md § 12 (2 rounds, collaborative)
  competitor-research → workflows.md § 13 (2 rounds, research-heavy)
  founder-decision → workflows.md § 14 (3+ rounds, maximum rigor)

Speed modes:
  STANDARD: 3 rounds (all tasks except those listed below)
  SPEED: 2 rounds (sales-outreach, customer-support-triage, release-readiness, hiring-plan)
  RAPID: 1 round (daily-briefing only)
  CONTINUOUS: ongoing (incident-response only)
  EXTENDED: 3+ rounds (founder-decision only — can add rounds if confidence remains low)

For RAPID mode: Skip debate and challenge. Output a briefing, not a RESULT CARD.
For SPEED mode: Combine debate and challenge into one shorter round.
For CONTINUOUS mode: Run assessment loops at defined intervals (30 min for incidents).
```
