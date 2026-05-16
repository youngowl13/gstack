# Orchestrator Lessons Learned

This file tracks lessons from completed orchestration sessions. Append a new entry after every task using the template at the bottom.

---

## Entry Format

```
## [DATE] — [Task Type]: [Brief Task Title]

**Task summary:** [1-2 sentences]
**What worked well:** [bullets]
**What didn't work:** [bullets]
**What we'd do differently:** [bullets]
**Confidence calibration:** Started: X% → Ended: Y% → Actual outcome: [correct/incorrect/pending]
**Human approval triggered:** [YES — trigger / NO]
**Key lesson:** [1-2 sentences]
**Tags:** [task-type], [agent-names], [topics]
```

---

## Example Entries

---

## 2024-01-15 — product-planning: Should we build real-time collaboration?

**Task summary:** Team debated whether to add real-time collaboration (like Google Docs multiplayer) to the core product before hitting 1,000 paying customers. Strategy wanted to ship it; engineering estimated 8 weeks of work.

**What worked well:**
- Engineering agent's conservative estimate (2x multiplier applied) correctly predicted the actual complexity — the feature took 10 weeks, not 8.
- Product agent's RICE scoring surfaced that three smaller features collectively had higher ROI than collaboration, which redirected the decision well.
- Challenge round question "What do your 10 best customers actually use today?" revealed most power users were solo, which undermined the case for collaboration.

**What didn't work:**
- Strategy agent's confidence started too high (82%) given that no user research had been done on collaboration demand. Should have been flagged as ⚠️ ASSUMPTION from the start.
- Debate round was unproductive in the middle — product and strategy repeated their positions without engaging engineering's concerns. Orchestrator should have intervened sooner.

**What we'd do differently:**
- For product decisions, always request user research data upfront. If it's not available, flag it as a load-bearing assumption and reduce confidence by at least 15%.
- Intervene in debate round if agents repeat their Round 1 position without engaging counterarguments. Issue: "⚠️ [Agent] is not engaging the counterarguments. Please respond to [specific point]."

**Confidence calibration:**
- Started at: 71% (strategy high, engineering low — averaged down)
- Ended at: 58% (two unresolved disagreements applied)
- Actual outcome: Correct — team deferred collaboration, shipped the smaller features first, saw 23% engagement lift.
- Calibration note: 58% was appropriately uncertain. The decision was right but the reasoning was partially flawed (strategy overstated demand; product's RICE scores were the real signal).

**Human approval triggered:** NO — decision was strategic recommendation, no spend or production deployment.

**Key lesson:** When strategy agent confidence is high on a market assumption, always check: what user data supports this? If none, flag it as ⚠️ ASSUMPTION and reduce weight accordingly. Intuition from strategy is valuable but not sufficient for product decisions.

**Tags:** product-planning, strategy, engineering, product, feature-prioritization, RICE

---

## 2024-02-03 — incident-response: Database connection pool exhaustion during peak traffic

**Task summary:** Production database hit connection pool limits during a usage spike, causing 503 errors for ~15% of users for 47 minutes. Engineering and operations coordinated response.

**What worked well:**
- Rapid Round 1 (under 5 minutes) correctly identified root cause: connection pool too small for new traffic patterns after a campaign drove 3x normal load.
- Operations agent had the monitoring runbook readily available and could immediately pull metrics that confirmed the hypothesis.
- Rollback plan was available (revert to previous connection pool settings) and was executed in under 10 minutes.
- Customer communication draft was prepared quickly and correctly flagged for human approval before sending.

**What didn't work:**
- Security agent was not initially included but should have been — connection pool exhaustion can be caused by a connection-flooding attack (was not in this case, but we got lucky not to rule it out faster).
- Post-incident: no one updated the monitoring alert thresholds, so we could hit the same issue again at 4x load.

**What we'd do differently:**
- For all incident-response workflows involving database issues: always include security agent in Round 1 to rule out attack vector. The 5-minute cost is worth eliminating that risk.
- Add to incident-response workflow: "After resolution, operations agent must update monitoring thresholds based on the load level that caused the incident."

**Confidence calibration:**
- Root cause confidence: started 65% (hypothesis), ended 95% (confirmed by metrics).
- Resolution confidence: 85% (knew the fix, unsure if it would hold under continued load).
- Actual outcome: Correct — fix held. No recurrence for 6 months until traffic grew 5x again.
- Calibration note: 85% resolution confidence was appropriate given the continued load uncertainty.

**Human approval triggered:** YES — customer-facing incident notification required human approval. Trigger: public communication rule. Approved by founder in 8 minutes.

**Key lesson:** In database-related incidents, always include security agent in Round 1 to rule out attack vectors. The cost is low; the failure mode if it IS an attack and you don't notice is very high.

**Tags:** incident-response, engineering, operations, security, database, production

---

## 2024-02-28 — founder-decision: Should we raise a Series A now or wait 6 months?

**Task summary:** With 14 months of runway and MoM growth at 12%, team debated whether to raise a Series A now vs. hitting $1M ARR milestone first. The deliberation involved strategy, finance, product, and legal.

**What worked well:**
- Finance agent's runway modeling was the most useful single input — showed that waiting 6 months reduced dilution by ~4-7% if growth continued but would require raising in a potentially worse macro environment.
- Strategy agent correctly pushed back on the "wait for more traction" consensus by noting that current market conditions favored raising and that growth momentum, not ARR milestone, was what VCs were tracking.
- Legal agent flagged that existing SAFE notes would convert at a Series A, which had implications for the cap table that hadn't been factored into the analysis — this was a valuable catch.

**What didn't work:**
- All agents converged on "raise now" in Round 1 with suspicious unanimity. The Conductor should have injected a devil's advocate prompt earlier. Groupthink was present; the Challenge Round caught it but only partially.
- Finance agent's confidence (88%) was too high given the number of macro assumptions involved. Should have been flagged: market conditions are ⚠️ ASSUMPTION-heavy.

**What we'd do differently:**
- For founder-decision workflows, inject the devil's advocate prompt between Round 1 and Round 2 automatically, before debate begins. Don't wait to see if groupthink develops — assume it might.
- Finance confidence in macro-dependent models should be capped at 70% unless the macro scenario is supported by specific data, not general market sentiment.

**Confidence calibration:**
- Started: 74% (suspicious — too high for macro-dependent decision)
- Ended: 61% (after unresolved disagreements on timing applied)
- Actual outcome: Too early to tell — fundraise is in process.
- Calibration note: 61% was more honest. This decision had genuine uncertainty; the original 74% was overconfident.

**Human approval triggered:** YES — fundraising decision. Trigger: Major strategic decision, irreversible cap table implications. Approved by founder as expected; the RESULT CARD was used as the briefing document for the board conversation.

**Key lesson:** For founder-decisions involving macro assumptions (market conditions, investor appetite), explicitly cap agent confidence at 70% and label all macro claims as ⚠️ ASSUMPTION unless backed by specific data from term sheets or investor conversations.

**Tags:** founder-decision, strategy, finance, legal, fundraising, Series-A, groupthink-detected
