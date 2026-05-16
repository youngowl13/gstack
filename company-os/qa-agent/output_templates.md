# QA Agent — Output Templates

## 1. QA Sign-Off Card
```
QA SIGN-OFF — [Feature / Release Name] — v[X.Y.Z]
════════════════════════════════════════════════════
Assessed by: Quinn Zhang (QA)
Date: [date]
Decision: [✓ APPROVED / ✗ BLOCKED / ⚠ CONDITIONAL APPROVAL]

────── CHECKLIST ──────
BLOCKERS (must all be ✓ to ship)
  [✓/✗] No open P0 or P1 bugs
  [✓/✗] Critical paths tested (auth, core feature, payment)
  [✓/✗] Regression suite passed
  [✓/✗] Staging deployment verified
  [✓/✗] Rollback plan documented
  [✓/✗] DB migration tested in staging

ADVISORY (flag but not blocking)
  [✓/✗] New code coverage ≥60%
  [✓/✗] Exploratory session completed
  [✓/✗] Performance baseline within 10%

────── OPEN BUGS ──────
  [P0] [bug description] — STATUS: [Open/In Progress] → BLOCKS RELEASE
  [P1] [bug description] — STATUS: [Open/In Progress] → BLOCKS RELEASE
  [P2] [bug description] — acceptable post-ship · tracking: [ticket #]
  [P3] [bug description] — backlog

────── CONDITIONS (if CONDITIONAL) ──────
  Release approved IF:
  1. [condition]
  2. [condition]

HUMAN APPROVAL REQUIRED: [YES — reason / NO]
```

---

## 2. Bug Report Template
```
BUG REPORT — [BUG-####]
════════════════════════════════════════════════════
Severity: [P0 / P1 / P2 / P3]
Title: [Short descriptive title]
Reporter: Quinn Zhang (QA)
Date found: [date]
Affects: [environment — staging / production / both]

SUMMARY
[1-2 sentence description of what's broken]

STEPS TO REPRODUCE
  1. [Step]
  2. [Step]
  3. [Step]
  Expected: [what should happen]
  Actual:   [what actually happens]

IMPACT
  Users affected: [count / % / user segment]
  Business impact: [revenue at risk / churn risk / compliance risk]
  Workaround exists: [YES — describe / NO]

EVIDENCE
  Screenshot/log: [link or description]

SUGGESTED FIX
  [If Quinn has a hypothesis about the cause]

ASSIGNED TO: [engineer name]
TARGET FIX DATE: [date]
```

---

## 3. Test Plan Template
```
TEST PLAN — [Feature Name]
════════════════════════════════════════════════════
Feature owner: [PM name]
Engineering owner: [engineer name]
QA owner: Quinn Zhang
Sprint: [#]

SCOPE
  In scope:  [what will be tested]
  Out of scope: [what won't be tested and why]

ACCEPTANCE CRITERIA (Given/When/Then)
  Scenario 1: [name]
    Given: [initial state]
    When:  [user action]
    Then:  [expected outcome]

  Scenario 2: [name]
    ...

EDGE CASES TO TEST
  - [Edge case 1]
  - [Edge case 2]
  - [Edge case 3]

TEST TYPES
  □ Unit tests (dev responsibility) — coverage target: [%]
  □ Integration tests
  □ E2E / regression
  □ Exploratory session — [X hours]
  □ Performance test — baseline: [metric]
  □ Security test — [what to verify]
  □ Accessibility check

QA TIME ESTIMATE: [X days]
DEPENDENCIES: [what must be ready before QA starts]
```

---

## 4. Regression Report
```
REGRESSION REPORT — [Release / Sprint / Date]
════════════════════════════════════════════════════
Suite run by: Quinn Zhang
Environment: [Staging / Pre-prod]
Duration: [X minutes]

RESULTS
  Total tests:  [#]
  Passed:       [#] ([%])
  Failed:       [#] ([%])
  Skipped:      [#] (reason: [])
  New tests added: [#]

FAILURES
  [Test name] — [what failed] — Severity: [P0/P1/P2/P3]
  [Test name] — [what failed] — Severity: [P0/P1/P2/P3]

VERDICT: [PASS — safe to proceed / FAIL — [#] blockers found]
COVERAGE DELTA: [+/- X% vs last run]
```
