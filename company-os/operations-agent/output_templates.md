# Operations Agent — Output Templates

## 1. Runbook Template
```
RUNBOOK: [Process Name]
═══════════════════════════════════════════════════
Version: [X.Y] · Last updated: [date] · Owner: [Sam Rivers / Ops]
Trigger: [When to use this runbook]
Estimated duration: [X minutes]

PRE-REQUISITES
  □ [Access/permission needed]
  □ [Tool or system needed]
  □ [People to notify before starting]

STEPS
  Step 1: [Action]
    Command/action: [exact command or UI path]
    Expected result: [what success looks like]
    If it fails: [troubleshooting note or escalation path]

  Step 2: [Action]
    ...

VERIFICATION
  □ [How to confirm the process completed successfully]
  □ [Metric or log to check]

ROLLBACK PROCEDURE
  [Step-by-step rollback if something goes wrong]

ESCALATION
  If stuck after [X minutes] → contact [person] via [channel]
  If impact is P0/P1 → trigger incident-response workflow immediately

NOTES / GOTCHAS
  [Known edge cases or non-obvious behaviors]
```

---

## 2. SOP (Standard Operating Procedure) Template
```
SOP: [Process Name]
═══════════════════════════════════════════════════
Purpose: [Why this SOP exists]
Scope: [Who does this / what systems it covers]
Frequency: [How often this runs]
Owner: Operations · Last reviewed: [date]

PROCEDURE
  1. [Step]
  2. [Step]
  3. [Step]

SUCCESS CRITERIA
  [How to know the SOP was followed correctly]

EXCEPTIONS
  [When it's acceptable to deviate and who approves]

RELATED RUNBOOKS: [links or file names]
```

---

## 3. SLA Tracker
```
SLA DASHBOARD — [Period: Week of / Month of]
═══════════════════════════════════════════════════
Service: [Name]

UPTIME
  Target:  [99.9%]
  Actual:  [X%]
  Status:  [✓ MET / ✗ BREACHED / ⚠ AT RISK]

RESPONSE TIME (p95)
  Target:  [<500ms]
  Actual:  [Xms]
  Status:  [✓ / ✗ / ⚠]

INCIDENT COUNT
  P0: [#] · P1: [#] · P2: [#] · P3: [#]
  Mean time to detect (MTTD): [X min]
  Mean time to resolve (MTTR): [X min]

SLA BREACHES THIS PERIOD
  [Date] — [Incident] — [Duration] — [Root cause] — [Customer impact]

TREND: [Improving / Stable / Degrading]
ACTION NEEDED: [YES/NO — what]
```

---

## 4. Post-Mortem Template
```
POST-MORTEM — [Incident ID]
═══════════════════════════════════════════════════
Severity: [P0/P1/P2/P3]
Duration: [X hours Y minutes]
Impact: [# users / % traffic / revenue estimate]
Status: [Resolved]

SUMMARY
[2-3 sentence plain English summary of what happened]

TIMELINE (all times UTC)
  [HH:MM] — [Event]
  [HH:MM] — [Event]
  [HH:MM] — [Resolution]

ROOT CAUSE
[Single root cause statement]

CONTRIBUTING FACTORS
  - [Factor 1]
  - [Factor 2]

ACTION ITEMS
  □ [Action] — Owner: [name] — Due: [date] — Status: [Open]
  □ [Action] — Owner: [name] — Due: [date] — Status: [Open]

WHAT WENT WELL
  - [Thing that helped contain or resolve faster]

LESSONS LEARNED
  [1-2 sentences that go into lessons_learned.md]
```

---

## 5. Onboarding Checklist
```
ONBOARDING CHECKLIST — [New Hire Name] — [Role]
Start date: [date] · Manager: [name] · Buddy: [name]

DAY 1
  □ Laptop set up and accounts created
  □ Introduced to team
  □ Key systems access granted: [list]
  □ Communication channels joined (Slack, email, etc.)
  □ First 1:1 with manager scheduled

WEEK 1
  □ Product demo completed
  □ Codebase / system overview walkthrough
  □ First small task assigned
  □ Reviewed company handbook and security policies
  □ Emergency contact and on-call rotation updated

MONTH 1
  □ 30-day check-in with manager completed
  □ OKRs for first quarter set
  □ Access review — confirm only necessary permissions granted
  □ Added to relevant recurring meetings

HUMAN APPROVAL REQUIRED: YES — manager must sign off on access grants
```
