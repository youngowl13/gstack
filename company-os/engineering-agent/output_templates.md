# Engineering Agent — Output Templates

## 1. Engineering Assessment Card
```
ENGINEERING ASSESSMENT
═══════════════════════════════════════════════════
Feature / Task: [name]
Assessed by: Dev Sharma (Engineering Lead)
Date: [date]

FEASIBILITY: [Feasible / Feasible with caveats / Not feasible as scoped]

TIMELINE ESTIMATE
  Optimistic:    [X weeks] (if nothing goes wrong)
  Realistic:     [Y weeks] (most likely — 2x rule applied)
  Conservative:  [Z weeks] (if we hit blockers)
  Confidence:    [%]

APPROACH RECOMMENDED
  [2-3 sentences on the technical approach]

DEPENDENCIES
  - [System/team/decision that must happen first]
  - [External API or vendor dependency]

TECH DEBT IMPACT
  Creating:  [new debt this introduces]
  Requires:  [existing debt that must be resolved first]

SECURITY IMPLICATIONS
  [Any security considerations — defer detail to Sasha]

RISKS
  - [Risk 1] — likelihood: [H/M/L] · impact: [H/M/L]
  - [Risk 2] — likelihood: [H/M/L] · impact: [H/M/L]

BUILD vs BUY ASSESSMENT
  [Recommendation and brief rationale]

NEEDS FROM OTHER AGENTS
  - [What Dev needs to finalize estimate]

HUMAN APPROVAL NEEDED: [YES/NO — reason]
```

---

## 2. Sprint Planning Template
```
SPRINT PLAN — [Sprint #] — [Dates]
═══════════════════════════════════════════════════
Team capacity: [X engineer-days available]
Carry-over from last sprint: [items]

COMMITTED ITEMS (must ship)
  □ [Task] — Owner: [name] — Est: [days] — Points: [#]
  □ [Task] — Owner: [name] — Est: [days] — Points: [#]

STRETCH ITEMS (best effort)
  □ [Task] — Owner: [name] — Est: [days]

TECH DEBT ALLOCATED
  □ [Debt item] — [why now] — Est: [days]

DEPENDENCIES / BLOCKERS
  - [Blocker] — waiting on: [person/system] — ETA: [date]

RISKS THIS SPRINT
  - [Risk] — mitigation: [plan]

DEFINITION OF DONE
  □ Code reviewed and merged
  □ Tests written and passing
  □ Deployed to staging
  □ QA sign-off obtained
  □ Monitoring/alerts confirmed
```

---

## 3. Incident Technical Report
```
INCIDENT TECHNICAL REPORT
═══════════════════════════════════════════════════
Incident ID: [INC-####]
Severity: [P0 / P1 / P2 / P3]
Duration: [start time] → [end time] ([X hours Y minutes])
Systems affected: [list]
Users affected: [count / % of traffic]

TIMELINE
  [HH:MM] — [What happened]
  [HH:MM] — [Who noticed / alert fired]
  [HH:MM] — [First response]
  [HH:MM] — [Diagnosis reached]
  [HH:MM] — [Fix deployed]
  [HH:MM] — [Resolved / monitoring confirmed stable]

ROOT CAUSE (5 Whys)
  Why 1: [symptom]
  Why 2: [underlying cause]
  Why 3: [deeper cause]
  Why 4: [system/process failure]
  Why 5: [root cause]

IMMEDIATE FIX APPLIED
  [What was done to stop the bleeding]

PREVENTION MEASURES
  □ [Code fix] — Owner: [name] — Due: [date]
  □ [Process change] — Owner: [name] — Due: [date]
  □ [Monitoring improvement] — Owner: [name] — Due: [date]

HUMAN APPROVAL REQUIRED: [YES/NO]
```

---

## 4. Build vs Buy Decision Framework
```
BUILD vs BUY ANALYSIS
═══════════════════════════════════════════════════
Component: [what we're deciding about]

BUILD
  Cost to build:    [engineering weeks × rate]
  Maintenance cost: [ongoing hours/month]
  Time to ship:     [weeks]
  Strategic value:  [HIGH / MEDIUM / LOW]
  Core competency:  [YES / NO]
  Pros: [list]
  Cons: [list]

BUY / USE VENDOR
  Vendor options:   [list 2-3 options]
  Cost:             [$/month or one-time]
  Integration time: [days/weeks]
  Lock-in risk:     [HIGH / MEDIUM / LOW]
  Pros: [list]
  Cons: [list]

RECOMMENDATION: [BUILD / BUY — option name]
RATIONALE: [2-3 sentences]
HUMAN APPROVAL NEEDED: [YES/NO — if cost > $500/month]
```

---

## 5. Tech Debt Register Entry
```
TECH DEBT ITEM
═══════════════════════════════════════════════════
ID: [TD-####]
Type: [Deliberate-prudent / Deliberate-reckless / Inadvertent]
Area: [Auth / DB / API / Frontend / Infra / Tests]
Description: [What the debt is and why it exists]
Created: [date] · Created by: [context — sprint pressure, etc.]
Interest rate: [how much this slows us down per sprint]
Payoff cost: [engineering days to resolve]
Priority: [P1 ASAP / P2 Next quarter / P3 Backlog]
Blocks: [what features or improvements this blocks]
Owner: [engineer responsible for resolution]
```
