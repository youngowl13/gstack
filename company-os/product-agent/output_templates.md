# Product Agent Output Templates

Templates Marcus Wells uses in analysis and debate.

---

## 1. Product Requirements Document (PRD) Template

```
PRODUCT REQUIREMENTS DOCUMENT
══════════════════════════════
Feature: [Feature name]
Author: Marcus Wells | Product
Date: [date]
Status: [DRAFT / IN REVIEW / APPROVED / SHIPPED]
Target release: [Q/version]

PROBLEM STATEMENT
─────────────────
User problem: [The specific problem users face, in user language]
User segment: [Who this affects — ICP, segment, persona]
Current workaround: [How users solve this today, if at all]
Evidence this is a real problem:
  • Support tickets: [count and sample quotes]
  • NPS feedback: [specific themes]
  • User interviews: [how many, key quotes]
  • Usage data: [relevant metric showing the gap]

JOB-TO-BE-DONE
───────────────
Functional job: [What the user is trying to accomplish]
Emotional job: [How the user wants to feel]
Social job: [How the user wants to be perceived]
Core progress blocked: [What is preventing the user from making this progress today]

USER STORY
──────────
As a [specific user type],
I want to [accomplish specific goal],
So that [meaningful outcome].

ACCEPTANCE CRITERIA
───────────────────
[ ] [Measurable criterion 1 — how we know it's done]
[ ] [Measurable criterion 2]
[ ] [Measurable criterion 3]
[ ] [Edge case criterion]
[ ] User can [accomplish the core job] in [X steps / X seconds]

SCOPE
─────
IN SCOPE (v1):
• [Specific functionality included]
• [Specific functionality included]

OUT OF SCOPE (v1 — consider for v2):
• [Deferred functionality and rationale]
• [Deferred functionality and rationale]

DESIGN REQUIREMENTS
───────────────────
[Key UX principles or requirements — e.g., "Single-click action", "Works on mobile"]
[Link to design mockups if available]

SUCCESS METRICS
───────────────
Primary metric: [The one metric that proves this worked — e.g., D30 retention, activation rate]
  Baseline: [current value]
  Target: [target after ship]
  Measurement window: [how long after ship to evaluate]
Secondary metrics:
  • [Metric 2]: [baseline → target]
  • [Metric 3]: [baseline → target]
Counter-metric (what we're NOT sacrificing): [e.g., "Support ticket volume should not increase"]

RICE SCORE
──────────
Reach: [users per period] — Source: [data or ⚠️ ASSUMPTION]
Impact: [1-3] — Rationale: [why]
Confidence: [%] — Uncertainty: [what drives the uncertainty]
Effort: [person-weeks] — Source: [engineering estimate or ⚠️ ASSUMPTION]
RICE = [calculated]

DEPENDENCIES
────────────
Engineering: [any upstream technical dependencies]
Design: [design resources needed]
Legal/Compliance: [any legal review needed]
Third-party: [any external dependencies]

OPEN QUESTIONS
──────────────
1. [Unresolved question — who will answer it and by when]
2. [Unresolved question]

RISKS
─────
⚡ [Risk]: [likelihood] × [impact] — Mitigation: [specific action]

LAUNCH PLAN
───────────
Beta users: [how many, which segment, how to select]
Rollout: [% rollout plan, or full launch]
Communication: [in-product, email, release notes, blog]
Support preparation: [what support team needs to know]
```

---

## 2. RICE Scoring Sheet Template

```
RICE PRIORITIZATION
═══════════════════
Date: [date]
Context: [Sprint / Quarter / Backlog grooming]
Prepared by: Marcus Wells | Product

FEATURE CANDIDATES
──────────────────

Feature: [Name]
  Reach: [N users/period] — Source: [data or ⚠️ ASSUMPTION]
  Impact: [1 / 2 / 3] — Rationale: [why this impact level]
    (1 = minimal, 2 = moderate, 3 = massive)
  Confidence: [10-100%] — Key uncertainty: [what's unknown]
  Effort: [person-weeks] — Source: [engineering or ⚠️ ASSUMPTION]
  RICE = (Reach × Impact × Confidence%) / Effort = [score]
  Notes: [strategic flags, dependencies, constraints]

[Repeat for each feature]

RANKED RESULTS
──────────────
Rank | Feature           | RICE Score | Notes
─────┼───────────────────┼────────────┼─────────────────
  1  | [Feature name]    | [score]    | [flag if any]
  2  | [Feature name]    | [score]    |
  3  | [Feature name]    | [score]    |
  4  | [Feature name]    | [score]    |
  5  | [Feature name]    | [score]    |

RECOMMENDED BUILD ORDER: [1 → 2 → 3 with rationale]

NOTES FOR AGENTS:
• RICE ranks features by expected impact per unit of effort
• High confidence + low effort features punch above their reach
• Low confidence scores should be validated before committing to build
• ⚠️ All estimates marked as ASSUMPTION should be validated with engineering
```

---

## 3. User Story Template

```
USER STORY
══════════
Feature: [name]
Author: Marcus Wells | Product

THE STORY
─────────
As a [specific user type — not "user", be precise],
I want to [accomplish specific, concrete goal],
So that [meaningful outcome — why this matters to the user].

CONTEXT
───────
This user is: [1-2 sentences describing the user type and situation]
They currently do this by: [current workaround or manual process]
This story matters because: [specific user data or research]

ACCEPTANCE CRITERIA
───────────────────
Given [starting state/context],
When [user takes action],
Then [specific observable outcome].

[ ] Criterion 1: [Specific and testable]
[ ] Criterion 2: [Specific and testable]
[ ] Criterion 3: [Specific and testable]
[ ] Edge case: [What happens when X is empty / invalid / at limit]
[ ] Error state: [What the user sees when something goes wrong]

DEFINITION OF DONE
──────────────────
[ ] All acceptance criteria passing
[ ] Unit tests written and passing
[ ] QA sign-off
[ ] Copy reviewed by product
[ ] Feature flag configured (if gradual rollout)
[ ] Analytics event firing correctly
[ ] Documentation updated

OUT OF SCOPE FOR THIS STORY
────────────────────────────
• [Thing not included — will be addressed in [Story N] or [future sprint]]
```

---

## 4. Feature Decision Record Template

```
FEATURE DECISION RECORD
═══════════════════════
Feature: [name]
Date: [date]
Decision: [BUILD / DEFER / KILL / BUY / PARTNER]
Made by: [Marcus Wells | Product] + [Orchestrator if elevated]

DECISION SUMMARY
────────────────
[2-3 sentences — what was decided and the most important reason why]

OPTIONS CONSIDERED
──────────────────
Option A: Build v1 (scoped) — RICE: [score]
Option B: Build full version — RICE: [score]
Option C: Defer to next quarter
Option D: Buy/integrate third-party
Option E: Kill

CHOSEN OPTION: [A/B/C/D/E]
PRIMARY REASON: [Most important factor in the decision]

AGENTS INVOLVED IN DECISION
────────────────────────────
[List agents and brief note on their position]

KEY INPUTS
──────────
User data: [what signal informed this]
Engineering estimate: [person-weeks]
Strategic input: [Aria's position]
Risk flags: [security, legal, quality flags]

⚠️ ASSUMPTIONS RELIED ON:
• [Assumption 1 — what to validate]
• [Assumption 2]

IF THIS TURNS OUT TO BE WRONG
──────────────────────────────
[What would we observe that would signal this decision was wrong?]
[What is the reversal plan?]

REVIEW DATE: [When to check if this was the right call]
```
