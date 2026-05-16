# Luna Park — Output Templates

---

## Template 1: Campaign Brief

```
CAMPAIGN BRIEF
==============
Campaign Name: _______________
Date: _______________
Campaign Owner: Luna Park (Growth Agent)
Status: [Draft | Approved | Live | Paused | Complete]

OBJECTIVE
---------
Primary business goal: _______________
Funnel stage targeted: [Awareness | Acquisition | Activation | Revenue | Retention | Referral]
Primary metric: _______________
Target: [current value] → [target value] by [date]

ICE SCORE
---------
Impact (1-10): ___ — [rationale]
Confidence (1-10): ___ — [rationale]
Ease (1-10): ___ — [rationale]
ICE Average: ___

HYPOTHESIS
----------
If we [specific action], then [primary metric] will [direction] by [estimated magnitude]
because [mechanism — why this should work based on data or analogous examples].

AUDIENCE
--------
Primary ICP: _______________
Audience size estimate: _______________
Targeting method: _______________
Exclusions: _______________

CHANNEL MIX
-----------
| Channel | Budget ($) | % of Total | Estimated Volume | Estimated CAC | Rationale |
|---------|-----------|-----------|-----------------|--------------|-----------|
| | | | | | |
Total budget: $_______________

CREATIVE BRIEF
--------------
Key message (one sentence): _______________
Pain point addressed: _______________
Proof point / social proof: _______________
Call to action: _______________
Value proposition: _______________
Tone: _______________
Landing page: _______________

MEASUREMENT PLAN
----------------
Primary metric: _______________
Minimum detectable effect: ___% change
Required sample size: ___ (at 80% power, 95% significance)
Secondary guardrail metrics:
  - [Metric 1] — alert if drops below ___
  - [Metric 2] — alert if drops below ___
Attribution model: [Last-click | Multi-touch linear | Data-driven]
Mid-campaign review date: _______________ (at 50% budget spend)
Final analysis date: _______________

DEPENDENCIES
------------
Engineering required: [yes / no] — if yes: _______________
Landing page changes: [yes / no] — if yes: _______________
Security/Sasha approval required: [yes / no] — if yes: _______________
Creative assets needed by: _______________

BUDGET APPROVAL
---------------
Requested by: Luna Park
Approved by: _______________
Approval date: _______________
```

---

## Template 2: Experiment Hypothesis (ICE Scored)

```
EXPERIMENT HYPOTHESIS
=====================
Experiment ID: EXP-___
Title: _______________
Date Created: _______________
Status: [Backlog | Approved | Running | Complete | Killed]

HYPOTHESIS
----------
If we [specific, measurable action — not "improve" but "change X to Y"],
then [primary metric] will [increase/decrease] by [estimated percentage or absolute amount]
for [audience segment] because [mechanism — first-principles reasoning + data evidence].

ICE SCORE
---------
Impact (1-10): ___
  Rationale: If this hypothesis is correct and we see expected effect size, how much
  does it move our primary growth metric? Consider: how many users are affected,
  what is the downstream revenue impact, does this compound?

Confidence (1-10): ___
  Rationale: How confident are we the hypothesis is correct? Evidence:
  - Prior experiments (internal): ___
  - Analogous case studies: ___
  - First-principles reasoning: ___
  - Gut instinct: ___ (note: gut instinct alone caps confidence at 5)

Ease (1-10): ___
  Rationale: How fast and cheap to run this experiment?
  - Engineering effort: ___
  - Design effort: ___
  - Budget required: $___
  - Time to launch: ___
  - 10 = can be live today for $0; 1 = requires 3 months and $100K

ICE Average: ___ (rank in backlog by this score)

TEST DESIGN
-----------
Control: _______________
Variant(s): _______________
Randomization unit: [user | session | account | cohort]
Traffic split: ___% control / ___% variant
Required sample size: ___ per variant (80% power, 95% confidence, MDE: ___%)
Minimum test duration: ___ days (to avoid day-of-week bias, minimum 14 days unless
  sample size is reached much earlier)
Planned analysis date: _______________

METRICS
-------
Primary metric: _______________
Secondary guardrail metrics:
  - [Metric]: alert threshold ___
  - [Metric]: alert threshold ___
Anti-gaming checks: _______________

RESULTS (fill in post-experiment)
----------------------------------
Outcome: [Winner | No significant difference | Lost | Stopped early — reason: ___]
Primary metric: Control ___% / Variant ___% / Lift: ___% / p-value: ___
Confidence interval: [___%, ____%]
Sample size achieved: ___ per variant
Lesson: _______________
Next experiment: _______________
```

---

## Template 3: Funnel Analysis

```
FUNNEL ANALYSIS
===============
Analysis Date: _______________
Period: [Last 30 days | Last 90 days | Cohort: ___]
Analyst: Luna Park

AARRR FUNNEL SNAPSHOT
----------------------
Stage 1 — ACQUISITION
  Total new visitors/leads: ___
  By channel:
    Paid Search: ___ (___ %)
    Paid Social: ___ (___ %)
    Organic Search: ___ (___ %)
    Referral: ___ (___ %)
    Direct: ___ (___ %)
    Other: ___ (___ %)
  Blended CAC: $___
  CAC by top channels: Paid Search $___  |  Paid Social $___  |  Organic $___

Stage 2 — ACTIVATION
  Activation rate (visitor/lead → first value moment): ___ %
  vs. last period: [+/- ___ pp]
  Median time to activate: ___ days
  Activation rate by channel:
    Paid Search: ___ %
    Paid Social: ___ %
    Organic: ___ %
  Drop-off analysis: Where in the activation flow do users abandon?
    Step 1 → Step 2: ___ % drop-off
    Step 2 → Step 3: ___ % drop-off
    Step 3 → Complete: ___ % drop-off

Stage 3 — REVENUE
  Trial to paid conversion rate: ___ %
  vs. last period: [+/- ___ pp]
  Average time trial → paid: ___ days
  Conversion rate by acquisition channel: ___
  Average contract value: $___

Stage 4 — RETENTION
  30-day retention: ___ %
  60-day retention: ___ %
  90-day retention: ___ %
  6-month net revenue retention: ___ %
  12-month net revenue retention: ___ %
  Monthly churn rate: ___ %

Stage 5 — REFERRAL
  Viral coefficient (K-factor): ___
  NPS score: ___
  Referral program: ___ referrals generated / ___ converted / ___ % conversion

UNIT ECONOMICS
--------------
LTV (12-month model): $___
LTV (24-month model): $___
Blended CAC: $___
LTV:CAC ratio: ___:1
Payback period: ___ months
Marketing efficiency ratio: ___x

BINDING CONSTRAINT ANALYSIS
----------------------------
Biggest drop-off in funnel: [Stage] at [___% drop-off]
Highest-leverage intervention: ___
Why this stage and not others: ___

TOP 3 OPPORTUNITIES (ICE RANKED)
---------------------------------
1. [Experiment or initiative] — ICE: ___
2. [Experiment or initiative] — ICE: ___
3. [Experiment or initiative] — ICE: ___

RISKS
-----
- [Risk 1]
- [Risk 2]
```

---

## Template 4: Channel Attribution Model

```
CHANNEL ATTRIBUTION MODEL
==========================
Model Type: [Last-click | First-click | Multi-touch linear | Time-decay | Data-driven]
Period: _______________
Updated: _______________

RATIONALE FOR MODEL CHOICE
---------------------------
[Why this model for this stage of the company? Last-click is simpler but understates
top-of-funnel channels; multi-touch is more accurate but requires more data; data-driven
requires sufficient conversion volume (typically 500+ conversions/month)]

CHANNEL PERFORMANCE TABLE
--------------------------
| Channel | Attributed Revenue ($) | Attributed Conversions | CAC ($) | LTV:CAC | Payback (mo) | Trend |
|---------|----------------------|----------------------|---------|---------|------------|-------|
| Paid Search | | | | | | [up/flat/down] |
| Paid Social | | | | | | |
| Organic Search | | | | | | |
| Email | | | | | | |
| Referral | | | | | | |
| Direct | | | | | | |
| Partnerships | | | | | | |
| **Total/Blended** | | | | | | |

MULTI-TOUCH PATH ANALYSIS
--------------------------
Most common conversion paths (top 5):
1. [Channel A] → [Channel B] → [Channel C] → Conversion (___ % of conversions)
2.
3.
4.
5.

Assisted conversions by channel (channels that appear in path but are not last-touch):
| Channel | Assisted Conversions | Assist Rate |
|---------|---------------------|------------|
| | | |

BUDGET ALLOCATION RECOMMENDATION
---------------------------------
Based on LTV:CAC and payback period, recommended budget allocation for next period:
| Channel | Current Budget ($) | Recommended Budget ($) | Change | Rationale |
|---------|-------------------|----------------------|--------|-----------|
| | | | | |

DATA QUALITY NOTES
------------------
- Attribution gaps (channels without tracking): ___
- Known model limitations: ___
- Confidence in data: [High | Medium | Low] — reason: ___
```

---

## Template 5: A/B Test Results Card

```
A/B TEST RESULTS CARD
=====================
Experiment ID: EXP-___
Title: _______________
Analysis Date: _______________
Test Duration: ___ days
Test Period: [start date] to [end date]

HYPOTHESIS REVIEW
-----------------
Original hypothesis: _______________
Did we test what we planned to test? [Yes | No — deviation: ___]

RESULTS
-------
Primary Metric: _______________

| Variant | N (sample size) | Metric Value | 95% CI | vs. Control |
|---------|----------------|-------------|--------|-------------|
| Control | | | [___, ___] | — |
| Variant A | | | [___, ___] | +___% |
| Variant B (if any) | | | [___, ___] | +___% |

Statistical significance: p = ___ (threshold: p < 0.05)
Result: [Statistically significant | Not significant]
Practical significance: [Is the effect size large enough to matter even if significant?]

GUARDRAIL METRICS
-----------------
| Metric | Control | Variant | Δ | Alert Triggered? |
|--------|---------|---------|---|-----------------|
| | | | | [Yes/No] |

VERDICT
-------
[ ] Ship variant — it wins on primary metric, no guardrail alerts
[ ] No change — results not significant
[ ] Investigate — significant result but guardrail alert triggered
[ ] Iterate — directionally positive but not significant; refine and re-test
[ ] Kill hypothesis — result is negative or consistently null across multiple tests

SHIPPING DECISION
-----------------
If shipping: estimated annualized impact: $___
If not shipping: reason: _______________
Who approved shipping decision: _______________

LESSONS LEARNED
---------------
What does this tell us about user behavior? _______________
What should we test next? _______________
Does this change our model of the funnel? _______________
ICE score of top follow-on experiment: ___

METADATA
--------
Engineer who built the test: _______________
Analytics tool used: _______________
Was randomization validated? [Yes | No]
Was there sample ratio mismatch? [Yes — ratio: ___ | No]
```
