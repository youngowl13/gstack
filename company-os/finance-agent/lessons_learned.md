# Oliver Grant — Lessons Learned

## Purpose

This file is Oliver's institutional memory. Every time a financial decision is made, a model is validated against actuals, or a projection proves wrong, Oliver logs what happened and what changed in his models. This file is read at the start of every financial-review workflow and referenced whenever a similar decision arises.

**Format for new entries:**
```
## [Date] — [Brief title]
Decision: [what was decided]
Oliver's prediction: [what the model said]
Actual outcome: [what happened]
Model error: [where the model was wrong and why]
Lesson: [what Oliver changed in his modeling approach]
Tags: [#cac #ltv #hiring #runway #pricing #campaign #contract #other]
```

---

## Lesson Log

### [Template Entry] — CAC Model Excluded SDR Allocation

**Decision:** Marketing campaign approved with $800 CAC assumption.
**Oliver's prediction:** LTV:CAC of 6.0:1, payback of 4 months.
**Actual outcome:** After 90 days, fully-loaded CAC was $1,420. LTV:CAC 3.4:1. Payback 7 months.
**Model error:** CAC estimate used marketing-spend-only. SDR time allocation ($420/customer) and CRM tooling ($200/customer) were not included. Marketing team provided the original number without being prompted for the full cost.
**Lesson:** Oliver now always requests CAC breakdown in four categories: (1) ad/media spend, (2) sales team allocation, (3) tooling share, (4) content/creative. If any category is missing, the CAC is flagged as MARKETING-ONLY and the confidence score drops below 70%.
**Tags:** #cac #marketing-campaign

---

### [Template Entry] — Churn Rate Assumption Was 12 Months Old

**Decision:** LTV model used 2.5% monthly churn to project LTV of $4,800.
**Oliver's prediction:** LTV:CAC of 4.8:1 across all segments.
**Actual outcome:** Newer customer cohorts were churning at 4.1% monthly (SMB segment). Actual LTV for SMB was $2,800. LTV:CAC for SMB campaigns dropped to 2.8:1 — below threshold.
**Model error:** Oliver used the only churn rate available — a 12-month-old aggregate figure. It did not reflect segment-level differences or the trend of increasing SMB churn.
**Lesson:** Oliver now requests churn data segmented by customer type (SMB/mid-market/enterprise) and by cohort age. He applies a 20% haircut to churn rates older than 6 months, labeled [AGING DATA — applying haircut]. He also now flags when the LTV model uses aggregate vs. segment-specific churn.
**Tags:** #ltv #churn #unit-economics

---

### [Template Entry] — Fundraising Timeline Was Too Optimistic

**Decision:** Company planned to begin fundraising in Month 8 with 10 months runway remaining, targeting a close in 3 months.
**Oliver's prediction:** Runway would last through closing with 1 month buffer.
**Actual outcome:** Fundraising process took 6.5 months. The company entered the last 30 days of runway before receiving wire.
**Model error:** Oliver used a 3-month fundraising timeline based on founder optimism. Industry data shows median time from first investor meeting to wire is 4-7 months for seed/Series A. The model should have used 6 months as the base case.
**Lesson:** Oliver now models fundraising timelines using: Bear = 9 months, Base = 6 months, Bull = 4 months. He recommends beginning fundraising when runway is at 15 months minimum (not 10). He flags any fundraising plan that does not account for a 6-month close cycle as OPTIMISTIC TIMELINE.
**Tags:** #fundraising #runway #timeline

---

### [Template Entry] — Gross Margin Excluded Support Costs

**Decision:** Gross margin reported at 78%. New pricing tier set based on this margin.
**Oliver's prediction:** New pricing maintained healthy margins and supported the LTV model.
**Actual outcome:** When support labor was properly allocated as COGS, gross margin was 64%. This changed LTV calculations and made some customer segments unprofitable.
**Model error:** Finance team had categorized customer support as an operating expense, not COGS. For a SaaS business where support is a core delivery component, a portion of support cost belongs in COGS.
**Lesson:** Oliver now includes in his COGS check: (1) Does the gross margin calculation include support labor? (2) Does it include all infrastructure and hosting? (3) Does it include payment processing fees? He applies a "true gross margin" calculation alongside the reported gross margin when the two differ by more than 5 percentage points.
**Tags:** #gross-margin #pricing #unit-economics

---

### [Template Entry] — Headcount Fully-Loaded Cost Underestimated

**Decision:** Approved hiring plan projected $90,000 annual cost per engineer.
**Oliver's prediction:** Burn increase of $7,500/month per hire.
**Actual outcome:** Actual fully-loaded cost per engineer: $134,000/year ($11,167/month), including benefits, recruiting fees (20% of salary), MacBook Pro + peripherals ($4,500), onboarding tools and licenses ($3,600/year), and a longer-than-expected ramp period.
**Model error:** The hiring plan provided salary only. Multipliers for benefits, recruiting fees, and equipment were not applied. Oliver accepted the original estimate without building his own fully-loaded model.
**Lesson:** Oliver now builds his own fully-loaded headcount cost model regardless of what the hiring plan provides. Formula: Base salary + 25% (benefits) + 20% (external recruiting fee) + $3,000 (equipment) + $3,600 (tooling) + 3-month ramp adjustment. He never uses a salary-only number for burn impact calculations.
**Tags:** #hiring #burn-rate #headcount

---

### [Template Entry] — Burn Multiple Ignored During High-Growth Period

**Decision:** Growth plan approved without flagging burn multiple of 3.2x.
**Oliver's prediction:** Growth would improve burn multiple as revenue scaled.
**Actual outcome:** Revenue growth slowed before burn multiple improved. Company entered a "growth-at-all-costs" hole and needed an emergency cost reduction round.
**Model error:** Oliver noted the high burn multiple but treated it as acceptable given growth rate. The lesson: burn multiple above 2.5x is never truly acceptable for a company without a clear path to multiple improvement in the next two quarters. High growth rate does not automatically fix burn multiple.
**Lesson:** Oliver now treats burn multiple > 2.5x as an active flag in every debate round — not a historical footnote. He asks: "What specifically improves burn multiple in the next two quarters, and by how much?" If there is no clear answer, he escalates to human attention regardless of growth rate.
**Tags:** #burn-multiple #growth #efficiency

---

### [Template Entry] — Contract Auto-Renewal Created Unbudgeted Commitment

**Decision:** Software contract signed with auto-renewal clause. Auto-renewal not flagged for review.
**Oliver's prediction:** N/A — contract was not reviewed in advance.
**Actual outcome:** Contract auto-renewed for $24,000 annually without human awareness or approval. Vendor relationship was not being used actively.
**Model error:** Oliver's review process did not include a contract renewal tracking step. Auto-renewal clauses were not flagged as a standing human-approval trigger.
**Lesson:** Oliver now maintains a contract renewal calendar. Any contract with auto-renewal provisions is logged with the renewal date and amount. 60 days before renewal, Oliver flags it for human decision: renew, renegotiate, or cancel. This is added to the mandatory human approval trigger list.
**Tags:** #contracts #auto-renewal #cash-management

---

## Model Calibration Tracking

Oliver tracks the accuracy of his base-case projections over rolling 90-day periods:

| Decision Type | Prediction | Actual | Error % | Lesson Applied |
|---------------|-----------|--------|---------|----------------|
| CAC projection | | | | |
| Runway calculation | | | | |
| Headcount cost | | | | |
| Campaign ROI | | | | |
| LTV estimate | | | | |

**Calibration target:** Base-case predictions should be within 15% of actuals on average. If any category consistently misses by more than 20%, Oliver adjusts his modeling assumptions for that category and logs the change.

**Over-conservatism tracking:** Oliver also tracks when his bear case was more conservative than necessary. A bear case that never materializes suggests the models are over-conservative, which can lead to under-investment. He aims for bear-case predictions to materialize roughly 20-30% of the time — not 0% (too conservative) and not 80% (not conservative enough).

---

## Open Questions (Data Requests Not Yet Resolved)

This section tracks data requests Oliver has made that have not yet been answered. Until resolved, affected models carry reduced confidence scores.

| Date | Data Requested | Requested From | Confidence Impact | Status |
|------|---------------|---------------|------------------|--------|
| [date] | [data] | [agent/team] | [-X% confidence] | PENDING |

Oliver reviews this list at the start of every financial-review workflow and follows up on any items older than 7 days.
