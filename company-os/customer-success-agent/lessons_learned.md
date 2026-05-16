# Customer Success Agent — Lessons Learned

## Format
Each entry: Date · Situation · What we missed · Signal we should have caught · Change made

---

```
## [YYYY-MM-DD] — [Workflow / Account type]
**Situation**: [What happened with a customer or in a CS process?]
**What we missed**: [The churn, escalation, or opportunity we didn't catch early enough]
**Signal we should have seen**: [What was visible in the data or conversations before it became a problem]
**Change made**: [Process, threshold, or playbook update]
```

---

## Example Entry 1
## [2025-01-30] — customer-support-triage
**Situation**: A mid-market account ($24K ARR) churned. Post-churn conversation revealed they'd been frustrated for 90 days but never escalated.
**What we missed**: Their support ticket volume was low (only 2 tickets), but their login frequency had dropped 60% over the same period. We didn't connect the engagement drop to churn risk because no tickets = no obvious problem.
**Signal we should have seen**: Login frequency is a leading indicator, not a lagging one. A 40%+ drop over 30 days should trigger an outreach call even with no tickets.
**Change made**: Added login frequency threshold to health score model: >40% drop over 30 days → automatically move to YELLOW regardless of ticket volume. Triggers Priya's outreach protocol within 48 hours.

---

## Example Entry 2
## [2025-03-05] — product-planning
**Situation**: We deprioritized a UX improvement in the reporting module. Three accounts in the next 60 days brought it up as a renewal concern, and two of them chose a competitor whose reporting was "cleaner."
**What we missed**: I had logged this feature request from 6 different accounts over 4 months but the escalation to product didn't include the ARR at risk from accounts at renewal who had specifically cited it.
**Signal we should have seen**: Feature requests at renewal time are weighted differently from general feedback. If an account raises a specific feature gap during a renewal conversation, that should be flagged as "blocks renewal" — not just logged as a product request.
**Change made**: Added a "blocks renewal" flag to the CS escalation memo template. Any feature request cited in a renewal conversation now includes explicit ARR-at-risk in the escalation. Product planning now has a "renewal-blocker" priority category.

---
<!-- New lessons appended below this line after each task -->
