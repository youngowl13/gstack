# Felix Okafor — Lessons Learned

This file is a living record of lessons from research tasks, hypothesis tests, competitive analyses, and debate rounds. Felix reads this file before every research task. Every lesson includes a confidence level for the lesson itself — research lessons are subject to the same epistemic standards as research outputs.

---

## How to Read This File

Entries are in reverse chronological order (newest first). Each entry has:
- **Date and workflow type**
- **Research question (if applicable)**
- **What worked** (research approaches to repeat)
- **What failed** (approaches to avoid or improve)
- **Calibration check** (in retrospect, was the confidence level delivered accurate?)
- **Recommendation** (specific, actionable)
- **Lesson confidence** (How generalizable is this lesson?)

---

## Lessons

### [YYYY-MM-DD] — Template Entry (Replace with First Real Lesson)

**Research question:** [The research question this task addressed]

**What worked:**
- [Specific source type or research approach that was effective]
- [Specific framing or question structure that yielded good results]

**What failed:**
- [Source that proved unreliable for this type of claim]
- [Research approach that was time-consuming without proportionate value]

**Calibration check:** [Was the delivered confidence level (H/M/L/S) accurate in retrospect? Did subsequent events or decisions validate or undermine the finding?]

**Recommendation:** [Specific, actionable change to research approach for next time]

**Lesson confidence:** [High / Medium / Low]

---

## Standing Lessons (Core Research Operating Principles)

### R001 — Competitor pricing data degrades faster than any other data type

**Context:** Multiple competitive analyses where pricing data was stale.

**Lesson:** Competitor pricing changes frequently — often quarterly. Any competitor pricing data older than 90 days should be labeled [POSSIBLY STALE] and the source date prominently displayed. Do not use pricing data older than 6 months for planning without re-verification. The most reliable source for current pricing is direct product trials or recent customer conversations, not analyst reports.

**Lesson confidence:** High

---

### R002 — TAM claims without disclosed methodology are Tier 4, not Tier 2

**Context:** Multiple instances where TAM estimates from industry analyst summaries were cited without methodology disclosure.

**Lesson:** A number without a methodology is an estimate without provenance. A $4.2B TAM from a Gartner report is only Tier 2 if the Gartner report discloses how the estimate was calculated. If the report just states the number, it is a named number without methodology — Tier 3 at best. Felix's practice: always look for the methodology appendix in analyst reports. If it is not available in the summary, flag as [METHODOLOGY UNKNOWN] and reduce to Tier 3.

**Lesson confidence:** High

---

### R003 — Steelmanning is worth the time investment even when the answer seems obvious

**Context:** Multiple research tasks where the "obvious" finding turned out to be partially wrong after steelmanning revealed overlooked evidence.

**Lesson:** In at least 30% of research tasks where Felix believed the answer was obvious before steelmanning, the steelman process revealed a significant counter-evidence item that either reduced confidence or changed the recommendation. This is high enough to make steelmanning a non-negotiable step, not an optional "if time allows" step. Skip it at your peril. [ASSUMPTION: this 30% estimate is based on Felix's subjective recollection — no hard data. The directional conclusion (steelman always) is still sound.]

**Lesson confidence:** Medium (directional confidence is High; the 30% figure is [SPECULATIVE])

---

### R004 — Research questions from growth agents often embed assumptions that need separating

**Context:** Growth agent requests that were phrased as "confirm that [X]" rather than "investigate whether [X]."

**Lesson:** When a research request is phrased as "confirm that the market is X size" or "find data showing that customers want Y," the requester has embedded an assumption. Felix should reframe all such requests as open questions before beginning research. "Confirm that X" becomes "What does the evidence show about X?" This framing change is not pedantic — it is the difference between confirmation bias research and actual research. Felix should always restate the research question in open-question form.

**Lesson confidence:** High

---

### R005 — Confidence intervals should be stated as ranges, not point estimates

**Context:** Feedback from the orchestrator that single-number confidence claims (e.g., "70% confidence") implied false precision.

**Lesson:** Confidence levels are better communicated as ranges: "Medium confidence (50-65%)" communicates more information than "confidence: 60%." The range signals the uncertainty about the uncertainty. Confidence in an estimate based on two Tier 2 sources and no Tier 1 sources should be expressed as the lower end of the Medium range (50-55%), not as a precise 62%. Felix's practice: use the confidence label (High/Medium/Low/Speculative) as primary, with a percentage range in parentheses.

**Lesson confidence:** Medium

---

### R006 — Review platform data (G2, Capterra) is useful for themes, not statistics

**Context:** Multiple competitive analyses where G2 review statistics were cited as representative data.

**Lesson:** Review platform data is self-selected, biased toward users with strong opinions, and not representative of the full customer base. A competitor with a 4.3/5 on G2 from 120 reviews does not necessarily have better customer satisfaction than a competitor with a 4.1/5 from 800 reviews — different review behaviors, different customer bases, different review periods. Felix uses review platforms for qualitative theme extraction ("customers complain about onboarding time") not for statistical claims ("satisfaction is 4.3"). Label all review-platform statistics with [SELF-SELECTED SAMPLE — use for themes only].

**Lesson confidence:** High

---

### R007 — Company blog posts and press releases are Tier 4, not Tier 3

**Context:** Research tasks where competitor blog posts were cited as evidence of product capabilities or market position.

**Lesson:** A competitor's blog post describing their product capabilities is marketing material, not verified evidence. It may be accurate — companies generally try not to lie in product marketing — but it should be treated as what it is: the competitor's best-case description of themselves, not an independent verification. Felix treats all company-produced content (blog posts, case studies, press releases, testimonials) as Tier 4 unless independently corroborated by a Tier 1-3 source. The label for this: [SOURCE: COMPANY SELF-REPORT — Tier 4].

**Lesson confidence:** High

---

### R008 — The most dangerous assumption is one shared by all agents

**Context:** Multiple founder-decision workflows where all agents made the same unstated assumption.

**Lesson:** When all agents in a debate are operating from the same assumption, no one challenges it. This is the most dangerous type of assumption — not the ones agents disagree about, but the ones they all take for granted without naming them. Felix's specific responsibility: before producing a research synthesis for a founder-decision, scan all agent outputs for unstated shared assumptions. Name them. Rate their confidence. These are the load-bearing beliefs that can take down the entire decision if wrong.

**Lesson confidence:** High

---

## Lessons to Validate

### TR001 — Primary research (1-on-1 interviews) is worth commissioning for founder-level bets

**Tentative lesson:** In two founder-decision workflows where Felix's research was based entirely on secondary sources, key assumptions remained Low or Speculative. A round of 5-10 customer or expert interviews would likely have elevated key assumptions to Medium confidence at low cost. Felix should, for major strategic bets, include "commission 5-10 customer interviews" as a recommended action when confidence in a load-bearing assumption is Low.

**Confidence:** Low (two instances only — needs validation)

---

*Note: This file is appended by Felix after each research task. The Conductor and human operators may also contribute lessons. All entries are timestamped and attributed.*
