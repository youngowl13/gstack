# QA Agent — Lessons Learned

## Format
Each entry: Date · Workflow · Bug that slipped / process gap · What test would have caught it · Change made

---

```
## [YYYY-MM-DD] — [Workflow Type]
**Situation**: [What was being tested or released?]
**What slipped / what failed**: [The bug or quality failure]
**Root cause**: [Why didn't we catch it earlier?]
**Test that would have caught it**: [Specific test type or case]
**Change made**: [What was added to process, checklist, or regression suite]
```

---

## Example Entry 1
## [2025-02-14] — release-readiness
**Situation**: Released new user onboarding flow. Post-deploy, 12% of new signups failed email verification on mobile.
**What slipped**: Mobile email client link-clicking behavior was not tested. The verification link worked on desktop browsers but not in Gmail on iOS due to link wrapping.
**Root cause**: "Test email flow" in the checklist was interpreted as "send a test email and verify receipt." No one tested the full click-through on mobile.
**Test that would have caught it**: Explicit test case: "Verify email link works in Gmail app on iOS and Android" — cross-platform email verification test.
**Change made**: Added explicit mobile email client test cases to release checklist. Created a 5-device smoke test matrix for all auth flows.

---

## Example Entry 2
## [2025-03-22] — engineering-planning
**Situation**: Sprint shipped a refactor of the data export feature. Regression suite passed. Three days after release, a customer reported their export was silently dropping records over 10,000 rows.
**What slipped**: Edge case: large dataset truncation at exactly the pagination boundary. Tests only used datasets of ≤100 rows.
**Root cause**: No boundary value testing for paginated operations. "Export works" was tested, but not "export works at scale."
**Test that would have caught it**: Boundary value test: export with exactly 9,999 rows, 10,000 rows, 10,001 rows, and 50,000 rows. Now standard for any paginated operation.
**Change made**: Added "boundary value tests for pagination" to the test plan template. Any feature touching pagination now requires explicit large-dataset test cases.

---
<!-- New lessons appended below this line after each task -->
