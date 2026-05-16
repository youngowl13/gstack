# Operations Agent — Lessons Learned

## Format
Each entry: Date · Workflow · What happened · Root cause · Process change made

---

```
## [YYYY-MM-DD] — [Workflow Type]
**Situation**: [What operation or process was being managed?]
**What broke**: [Where the process, runbook, or SLA failed]
**Root cause**: [Why — missing documentation, unclear ownership, no rehearsal?]
**Process change**: [Specific runbook or SOP update made]
**Prevention**: [How we ensure this doesn't happen again]
```

---

## Example Entry 1
## [2025-01-20] — incident-response
**Situation**: P0 incident. No one knew who the on-call engineer was. Three people thought it was someone else. Resolution delayed 22 minutes while we figured out ownership.
**What broke**: On-call rotation had not been updated after a team member left. The runbook listed their old contact info.
**Root cause**: No process to update on-call rotation when team membership changes. Onboarding/offboarding checklist didn't include on-call setup.
**Process change**: Added "update on-call rotation" as a mandatory step in both the hiring onboarding checklist and offboarding checklist. On-call schedule now reviewed at every Monday standup.
**Prevention**: Automated reminder to review on-call rotation every 2 weeks.

---

## Example Entry 2
## [2025-03-10] — release-readiness
**Situation**: Deployment to production failed because the staging environment had a different environment variable configuration. Rollback took 35 minutes.
**What broke**: Environment parity between staging and production was assumed, not verified. No env-var drift detection.
**Root cause**: Staging env was last fully synced 6 weeks prior. Configuration drift accumulated silently.
**Process change**: Added "environment parity check" to deployment runbook. Now required to diff production vs staging env vars before every release.
**Prevention**: Weekly automated env-var drift report.

---
<!-- New lessons appended below this line after each task -->
