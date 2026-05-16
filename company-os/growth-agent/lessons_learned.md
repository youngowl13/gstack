# Luna Park — Lessons Learned

## Purpose

This document captures growth experiments, campaign failures, channel misevaluations, and strategic missteps worth remembering. The bias is toward lessons that challenged Luna's priors — experiments where the data said the opposite of what the model predicted. Those are the most valuable lessons. Wins that confirmed the model are less interesting; they calibrate confidence but do not expand the model.

Every killed experiment and every post-campaign analysis with a significant negative finding generates a candidate lesson. Luna writes entries for lessons that would change how a future experiment is designed, not for every A/B test that lost.

---

## Entry Format

```
LESSON LEARNED
==============
ID: GLL-[YEAR]-[SEQ]
Date: _______________
Category: [Channel | Funnel | Messaging | Audience | Pricing | Referral | Attribution | Other]
ICE Score of Failed Experiment (if applicable): ___
Written By: Luna Park

WHAT WE TRIED
-------------
[What was the experiment or campaign? What was the hypothesis?]

WHAT HAPPENED
-------------
[What did the data show? Primary metric result, secondary metric results, sample size, confidence.]

WHY WE WERE WRONG
-----------------
[What did we assume that was false? What was the actual mechanism vs. the predicted mechanism?]

COST OF BEING WRONG
-------------------
[Budget spent, time spent, opportunity cost — what did we NOT do while running this?]

WHAT WE CHANGED
---------------
[How does this change the experiment backlog, the channel allocation, or the model?]

GENERALIZED LESSON
------------------
[State the lesson as a principle that applies beyond this specific experiment.]
```

---

## Example Entry 1: Paid Social Scaling Failure

```
LESSON LEARNED
==============
ID: GLL-2025-001
Date: 2025-04-18
Category: Channel
ICE Score of Failed Experiment: Impact [8] / Confidence [6] / Ease [7] / Average [7.0]
Written By: Luna Park

WHAT WE TRIED
-------------
We had a paid social campaign (LinkedIn, targeting VP-level buyers in our ICP) running
at $15K/month with a CAC of $94 and an LTV:CAC of 3.6:1. The hypothesis was: if we
scale this campaign to $45K/month (3x spend), we will generate 3x the leads at
approximately the same CAC, reaching 180 new trials per month instead of 60.

The confidence score of 6 reflected that we had seen paid social scale linearly at
other companies at this spend level. The ICE score supported scaling immediately.

WHAT HAPPENED
-------------
We scaled to $45K/month over 6 weeks. By week 4:
- CPM had increased 58% (from $22 to $35)
- Landing page conversion rate had dropped from 4.1% to 2.8% (audience exhaustion;
  same people seeing the same creative more frequently)
- Effective CAC had risen to $178 — from $94 to $178, nearly 2x
- New trial volume had increased only 40% (not 3x as predicted)
- LTV:CAC ratio had dropped from 3.6:1 to 1.9:1 — below our 3:1 threshold

We cut spend back to $20K/month in week 6. CAC recovered partially to $108 over the
following 4 weeks but did not return to $94.

WHAT WE WERE WRONG ABOUT
-------------------------
We assumed the LinkedIn audience for our ICP was large enough to absorb 3x spend without
frequency saturation. It was not. Our precise targeting (VP title + company size + industry)
produced an audience of approximately 180K people. At $45K/month spend and our typical
frequency, we were reaching most of the addressable audience within 3 weeks. Frequency
saturation caused CPM to rise (LinkedIn's auction responds to frequency by charging more
to maintain reach) and creative to degrade.

The error was in the confidence score. I scored confidence at 6 based on analogous
examples from other companies. Those examples scaled into larger audiences (500K+). I
did not estimate our specific addressable audience size before scoring confidence.

COST OF BEING WRONG
-------------------
Extra spend vs. holding at $15K: approximately $60K over 6 weeks. Estimated additional
trials generated vs. staying at $15K: approximately 80 additional trials. Effective
"cost of learning": $60K / 80 incremental trials = $750 per incremental trial.
This is obviously not a business we would run. The learning that audience size matters
for paid social scaling was worth something — $750 per trial is not a price we can pay
at scale.

WHAT WE CHANGED
---------------
1. Added "Estimated addressable audience size" as a required field in the campaign brief
   before approving any paid social scale test. If audience < 300K, max monthly spend
   capped at $15K without creative refresh + audience expansion plan.
2. ICE confidence score for paid social scaling experiments now includes an explicit
   audience size check as a sub-criterion. Confidence cannot exceed 5 without a confirmed
   audience size estimate.
3. Creative refresh cadence formalized: rotate creatives every 3 weeks at > $10K/month
   spend regardless of current performance. Do not wait for CTR to drop.
4. Lookalike audience expansion added to the playbook for scaling beyond the core ICP
   audience — this is how you access additional volume without pure frequency saturation.

GENERALIZED LESSON
------------------
Paid social scales with audience size, not just budget. Before scaling any paid social
campaign, estimate the addressable audience size in the targeting configuration. Small,
precise audiences saturate fast. The scaling hypothesis (more budget = more at same
efficiency) is only valid when the audience is at least 10x larger than your current
weekly reach. If it is not, the scaling path requires audience expansion, not budget
expansion.
```

---

## Example Entry 2: Activation Email Sequence Backfire

```
LESSON LEARNED
==============
ID: GLL-2025-002
Date: 2025-08-05
Category: Funnel
ICE Score: Impact [7] / Confidence [7] / Ease [9] / Average [7.7]
Written By: Luna Park

WHAT WE TRIED
-------------
Our 30-day activation rate (user → completes onboarding and uses core feature) was 21%.
We hypothesized that adding an aggressive 7-email onboarding sequence (Day 0, 1, 2, 4,
7, 14, 21) would move this to 28% by guiding users through the activation steps explicitly.
The emails included step-by-step instructions, video walkthroughs, and social proof.
ICE was high because the lift was theoretically large, implementation was fast (1 week),
and analogous B2B SaaS sequences routinely report 20-30% activation lift.

WHAT HAPPENED
-------------
After 60 days:
- 30-day activation rate in the variant: 19% (vs. 21% control) — statistically
  significant decrease (p = 0.04)
- Unsubscribe rate: 2.8% (vs. 0.4% in control) — alarming
- 30-day retention among activated users in variant: 68% (vs. 74% control)
- Users who received the full 7-email sequence and did NOT activate: churned at 94%
  vs. 81% for the control group

The experiment was stopped at 60 days (planned analysis at 45 days; extended due to
sample size uncertainty). The variant lost across all metrics.

WHAT WE WERE WRONG ABOUT
-------------------------
Our assumption: users who are not activating need more information and more nudges.
The actual problem: users who are not activating in the first 7 days have usually already
decided the product is not for them (low intent or poor ICP fit from acquisition). Sending
them 7 more emails does not change this — it irritates them and produces high unsubscribes.
Worse, the aggressive sequence was perceived as spammy by marginal users who were on the
fence, and accelerated their churn rather than preventing it.

The analogy research I used (B2B SaaS activation sequences) was from companies with much
longer sales cycles and higher-touch onboarding. Their users expect and value a 7-email
sequence. Our product has a self-serve, low-touch model. The expectations do not transfer.

Additionally, I conflated "30-day activation rate improvement" with "email sequence as
the lever." The actual lever for activation improvement in a self-serve product is
usually the product itself (reducing friction in the activation flow) not an email wrapper
around a difficult activation experience.

COST OF BEING WRONG
-------------------
60 days of the experiment running. Approximately 2,400 users sent the aggressive sequence.
Estimated unsubscribe cost: 2.4% incremental unsubscribes = ~57 users who will never
receive product communications again. 60 days of not running the correct intervention
(product-side friction reduction in the activation flow).

WHAT WE CHANGED
---------------
1. Killed the 7-email sequence. Reverted to 2-email sequence (Day 0 welcome + Day 3
   help offer).
2. Redirected activation focus to product: worked with Product Agent to map the
   activation funnel step by step and identify the highest-friction step. Found that
   the "connect your first integration" step had a 47% drop-off due to a confusing UI.
   That is being fixed in the next sprint.
3. Email sequence design principle added: match email frequency to product's expected
   engagement model. High-touch, sales-assisted products can absorb daily emails in
   week 1. Self-serve, low-touch products should not exceed 3 emails in the first 2
   weeks unless the user takes an action that requests more.
4. ICE scoring for lifecycle email experiments now requires a "product vs. email" diagnosis
   step: before investing in email sequence optimization, confirm that the activation
   bottleneck is knowledge/guidance (email can help) vs. product friction (email cannot
   fix this; fix the product).

GENERALIZED LESSON
------------------
Email sequences are a treatment for the symptom of low activation, not the cause. If
activation is low because the product is hard to use, emails make it worse by increasing
the frequency at which users are reminded that they are not getting value. Fix the
product first. Add the email sequence to guide users who are willing to activate but
get lost. Never add email volume as a substitute for product quality.
```

---

## Lessons Summary Table

| ID | Date | Category | One-Line Summary |
|----|------|----------|-----------------|
| GLL-2025-001 | 2025-04-18 | Channel | Paid social 3x scale failed due to audience saturation; audience size check now required before scaling |
| GLL-2025-002 | 2025-08-05 | Funnel | Aggressive activation email sequence reduced activation rate; email cannot substitute for product friction reduction |

---

## Standing Instructions for New Entries

When a killed experiment or significant campaign failure occurs:
1. Luna writes the entry within 1 week of the decision to kill or the post-campaign analysis
2. "WHAT WE CHANGED" must include changes to the experiment backlog or scoring methodology — not just "we learned something"
3. The GENERALIZED LESSON must be stated as a principle applicable to future experiments beyond this specific case
4. Luna reviews the lessons summary table at the start of each ICE scoring session to avoid repeating known failure patterns
