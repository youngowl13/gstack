# Product Agent Lessons Learned

Marcus Wells' personal lessons from completed deliberation sessions.

---

## Entry Format

```
## [DATE] — [Task Type]: [Brief Task Title]

**Task summary:** [1-2 sentences]
**Marcus's initial position:** [what he argued in Round 1]
**Marcus's final position:** [what he landed on after debate]
**What changed:** [what argument or data moved him]
**What worked well:** [bullets]
**What didn't work:** [bullets]
**Confidence calibration:** Started: X% → Ended: Y% → Outcome: [correct/incorrect/pending]
**Key lesson:** [1-2 sentences]
**Tags:** [task-type], [frameworks-used], [topics]
```

---

## Example Entries

---

## 2024-02-14 — product-planning: Onboarding flow redesign vs new feature

**Task summary:** Debate between investing in an onboarding redesign (to improve activation rate) vs shipping a highly-requested bulk editing feature.

**Marcus's initial position (Round 1, confidence 76%):**
Argued for onboarding redesign first. D7 retention was 23% — significantly below the 40% benchmark for this type of product. Applied JTBD: the job users were hiring the product for wasn't being completed in the first session. RICE score for onboarding redesign came out at 210 vs bulk editing at 87.

**Marcus's final position (Round 3, confidence 81%):**
Held position. The Challenge Round question "What do your top 10% of retained users do differently?" revealed they all had a specific configuration step that new users missed. This validated the onboarding hypothesis with higher confidence.

**What changed:**
The Challenge Round surfaced behavioral data that Marcus hadn't included in Round 1. This increased his confidence rather than changing his position.

**What worked well:**
- RICE scoring provided a clear, defensible basis for the recommendation that didn't depend on intuition
- Asking "what do retained users do that churned users don't?" is a powerful product question — should be standard in product-planning tasks
- The data from support tickets (38% of new user tickets were about getting started, not feature requests) was highly persuasive in the debate

**What didn't work:**
- Marcus initially framed the debate as "onboarding vs feature" — a false binary. The right frame was "what prevents users from succeeding?" which might have included both. Aria correctly reframed this.
- RICE confidence for onboarding redesign was marked at 70% when it should have been lower — the design effort was not estimated by a designer, only guessed by Marcus.

**Confidence calibration:**
- Started: 76%
- Ended: 81%
- Outcome: Correct — onboarding redesign shipped, D7 retention improved from 23% to 31% in 60 days.
- Calibration note: 81% was slightly high given that the retention improvement was estimated, not guaranteed. But the direction was right.

**Key lesson:** In product-planning tasks involving activation/retention, always start by asking "what do our best-retained users do differently?" before comparing features. This behavioral data is more reliable than user requests for predicting what will move retention metrics.

**Tags:** product-planning, onboarding, retention, RICE, activation

---

## 2024-03-28 — customer-support-triage: Recurring export failure for large accounts

**Task summary:** Three enterprise accounts reported export failures for datasets >10K rows. Support volume was low (4 tickets in 30 days) but the accounts were high-value (combined ARR $180K).

**Marcus's initial position (Round 1, confidence 65%):**
Classified as a P2 bug — low volume, engineering workaround available (users could split exports into smaller batches). Recommended adding to the engineering backlog for next sprint, not current sprint.

**Marcus's final position (Round 3, confidence 52%):**
Revised to P1. Maya Torres (customer success) revealed that one of the three accounts had already complained to their account manager about considering alternatives. That churn signal changed the urgency assessment significantly.

**What changed:**
Customer success data. Marcus did not have visibility into the churn risk signal — he only saw ticket volume. The combination of "low ticket volume" and "high-value accounts at churn risk" created a very different picture.

**What worked well:**
- Including Maya Torres in the triage workflow was the right call — her churn risk intelligence completely changed the recommendation
- Dev Sharma's quick assessment that fixing the large export limit was a 2-3 day fix (not complex) removed the "too expensive to fix quickly" objection
- Final resolution was elegant: emergency patch for the limit + a proactive email from the account manager to all three accounts, which Marcus drafted

**What didn't work:**
- Marcus's initial P2 classification was based purely on ticket volume, not revenue impact. Ticket volume is a weak signal for B2B products where high-value customers have direct account manager access and don't file tickets.
- The triage workflow should default to pulling customer success data BEFORE classifying severity for B2B products.

**Confidence calibration:**
- Started: 65% (classification was wrong)
- Ended: 52% (uncertainty about whether the patch would be enough or if these accounts needed a product improvement)
- Outcome: Correct in urgency — patch shipped in 3 days, customer success made proactive calls, none of the three accounts churned.
- Calibration note: 52% final confidence was appropriate given the uncertainty about account retention.

**Key lesson:** For B2B products, ticket volume is a misleading severity signal. High-value accounts rarely file tickets — they call their account manager. In customer-support-triage workflows for B2B, always pull customer success data on account health before finalizing severity classification.

**Tags:** customer-support-triage, B2B, triage, churn-risk, customer-success, severity-classification
