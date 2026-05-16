# Engineering Agent — Lessons Learned

## Format
Each entry: Date · Task type · What happened · Root cause · Next time

---

## Entry Template
```
## [YYYY-MM-DD] — [Task Type]
**Situation**: [What was the engineering task or decision?]
**What we got wrong**: [Where the estimate, assessment, or plan failed]
**Root cause**: [Why did it go wrong?]
**Next time**: [Concrete change to process or estimation approach]
**Confidence adjustment**: [Did we update our confidence calibration?]
```

---

## Example Entry 1
## [2025-01-15] — engineering-planning
**Situation**: Estimated 3 weeks for a "simple" API integration with a payment provider.
**What we got wrong**: Took 7 weeks. The payment provider's sandbox and production environments had different behavior, and their documentation was 18 months out of date.
**Root cause**: Vendor APIs are never as simple as their docs suggest. We didn't add a "vendor integration" multiplier to our estimate.
**Next time**: Any third-party API integration gets an automatic 2.5x multiplier instead of 2x. Always test in production-equivalent environment in week 1, not week 3.
**Confidence adjustment**: Yes — vendor integrations now default to LOW confidence until we've done a proof-of-concept.

---

## Example Entry 2
## [2025-02-28] — incident-response
**Situation**: P1 incident — database connection pool exhaustion causing 503s for 20% of users for 47 minutes.
**What we got wrong**: We had no alert for connection pool utilization. We only found out when users reported errors. Diagnosis took 28 minutes because we didn't have the right dashboards.
**Root cause**: When we migrated to the new database version 3 months ago, we didn't recreate the connection pool monitoring that existed on the old system. The gap was never caught because nothing broke — until it did.
**Next time**: Every infrastructure migration must include a monitoring parity checklist. Old system alerts must be verified recreated in new system before migration is considered complete.
**Confidence adjustment**: Added "monitoring parity check" to release readiness template.

---
<!-- New lessons appended below this line after each task -->
