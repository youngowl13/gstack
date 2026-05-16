# Felix Okafor — Output Templates

All Felix outputs follow structured formats with explicit confidence levels, source citations, and assumption labeling. No template omits these elements.

---

## Template 1: Research Brief

```
RESEARCH BRIEF
═══════════════════════════════════════════════════════════
Brief ID:         RB-[YYYY-MM-DD]-[NNN]
Research Agent:   Felix Okafor
Date:             [YYYY-MM-DD]
Requested by:     [Agent or human who requested the research]
Decision context: [What decision this research informs]
Time spent:       [Hours]
═══════════════════════════════════════════════════════════

RESEARCH QUESTION
[Precise, specific, decision-relevant question this brief answers]

EXECUTIVE SUMMARY
[3-5 sentences: leading finding, confidence level, key caveat]
Overall confidence: [High / Medium / Low / Speculative] ([X%])

EVIDENCE GATHERED

Source 1: [Name, type, date]
  - Quality tier: [1 / 2 / 3 / 4]
  - Key finding: [What this source says]
  - Relevance: [Why this source applies to the question]
  - Limitations: [What this source cannot tell us]

Source 2: [Name, type, date]
  [Same format]

Source 3: [Name, type, date]
  [Same format]

[Continue for all sources]

EVIDENCE QUALITY MATRIX
| Claim | Source | Tier | Confidence |
|-------|--------|------|-----------|
| [Claim 1] | [Source] | [1-4] | [H/M/L/S] |
| [Claim 2] | [Source] | [1-4] | [H/M/L/S] |
| [Claim 3] | [Source] | [1-4] | [H/M/L/S] |

ASSUMPTIONS
[ASSUMPTION 1]: [State the assumption explicitly]
  - Impact if wrong: [What changes if this assumption is false]
  - Confidence it is correct: [H/M/L/S]

[ASSUMPTION 2]: [State the assumption explicitly]
  [Same format]

STEELMAN OPPOSING VIEW
[What is the strongest argument against the leading finding? Present it as its proponent would. Do not soften it.]

Counter-evidence: [What evidence supports the opposing view]
Strongest version of the opposing argument: [1-2 sentences]
Felix's assessment: [Why the leading finding still holds, or why the opposition has merit]

LEADING FINDING
[State the finding clearly. One or two sentences. Confidence level labeled.]
Confidence: [High / Medium / Low / Speculative] ([X%])

KEY ASSUMPTIONS THIS FINDING DEPENDS ON:
1. [Assumption] — [Confidence it is correct]
2. [Assumption] — [Confidence it is correct]

WHAT WOULD CHANGE THIS FINDING
[Specific evidence, source, or data that would shift the finding up or down in confidence]

IMPLICATIONS FOR THE DECISION
[What the finding means for the specific decision it was commissioned to inform]
[What the finding does NOT mean — scope boundaries]
[Additional research recommended before deciding, if any]

CONFIDENCE ESCALATION FLAG
[If confidence is Low or Speculative on a load-bearing assumption: "Human approval recommended before proceeding. The decision is currently resting on [assumption] which is [Low/Speculative] confidence."]
[If confidence is Medium or High: "Evidence quality is sufficient to proceed with the noted caveats."]
═══════════════════════════════════════════════════════════
```

---

## Template 2: Competitive Intelligence Report

```
COMPETITIVE INTELLIGENCE REPORT
═══════════════════════════════════════════════════════════
Report ID:      CIR-[YYYY-MM-DD]-[NNN]
Analyst:        Felix Okafor, Research Agent
Date:           [YYYY-MM-DD]
Scope:          [Competitor name(s) and dimensions covered]
Data recency:   [Newest source date / Oldest source date]
═══════════════════════════════════════════════════════════

EXECUTIVE SUMMARY
[3-4 sentences: who is the competitor, what is their current position, what is the most important thing we learned, what is the confidence level on key findings]

COMPETITOR PROFILE
Name:           [Company name]
Founded:        [Year]
Funding:        [Total raised, most recent round, investors] [CONFIDENCE: H/M/L]
Revenue:        [Estimate and source, or "unknown"] [CONFIDENCE: H/M/L]
Customers:      [Count or estimate and source] [CONFIDENCE: H/M/L]
Team size:      [Count or estimate] [CONFIDENCE: H/M/L]
Headquarters:   [Location]
Primary market: [Segment they serve]

PRODUCT ANALYSIS
Core product:    [What they actually sell]
Key features:    [Top 3-5 features — verified from product pages/demos]
Differentiators: [What they claim makes them different]
Weaknesses:      [Known product gaps — source them where possible]
Recent changes:  [Product updates in past 6 months]
Data quality:    [How much of this is verified vs. inferred]

PRICING
Model:       [Freemium / Subscription / Usage-based / Enterprise / etc.]
Pricing:     [Specific prices if public, or "pricing not disclosed"]
Source:      [Where pricing data came from]
Recency:     [Date of pricing data]
Confidence:  [H/M/L — pricing changes frequently; note if stale]

GO-TO-MARKET
Primary channels:     [How they sell — direct, self-serve, channel]
Target customers:     [Who they go after — segment, size, industry]
Key partnerships:     [Known integrations or partnerships]
Marketing approach:   [Content, paid, events, community, etc.]
Sales motion:         [Product-led, sales-led, or hybrid]

MARKET POSITION
Strengths:       [Their genuine strengths — steelman them]
Weaknesses:      [Verified gaps, not wishful thinking]
Positioning:     [How they position vs. the market]
Customer sentiment: [Any public review data — source with recency]

STEELMAN: Their Strongest Case
[Argue the competitor's case as their own best advocate would. What do they do well? Why would a customer choose them over us? Be honest.]

COMPETITIVE THREAT ASSESSMENT
Threat level:    [High / Medium / Low]
Threat type:     [Direct / Indirect / Adjacent / Emerging]
Key risk:        [The one thing about this competitor we should most worry about]
Timeframe:       [Is the threat immediate or 12-24 months out?]

SOURCE LOG
| Source | Type | Date | Tier | Key Info Drawn |
|--------|------|------|------|---------------|
| [Name] | [Type] | [Date] | [1-4] | [What we used it for] |

OVERALL CONFIDENCE
[High / Medium / Low / Speculative] — [Brief explanation of what limits confidence]

RECOMMENDED ACTIONS
1. [Action or monitoring recommendation]
2. [Action or monitoring recommendation]
3. [Action or monitoring recommendation]

NEXT RESEARCH TRIGGER
[What event or signal should cause us to update this report?]
[Recommended review cadence: quarterly / semi-annual / on event]
═══════════════════════════════════════════════════════════
```

---

## Template 3: Market Analysis

```
MARKET ANALYSIS
═══════════════════════════════════════════════════════════
Analysis ID:   MA-[YYYY-MM-DD]-[NNN]
Analyst:       Felix Okafor, Research Agent
Date:          [YYYY-MM-DD]
Market:        [Specific market or segment being analyzed]
Decision use:  [What this analysis informs]
═══════════════════════════════════════════════════════════

MARKET DEFINITION
[Precise definition of the market being analyzed. What is in scope and what is out.]

MARKET SIZE
TAM (Total Addressable Market): [$X] [CONFIDENCE: H/M/L]
  Source: [Name, date]
  Methodology: [How this was calculated — bottom-up / top-down / analyst estimate]
  [ASSUMPTION: list any assumptions in the TAM calculation]

SAM (Serviceable Addressable Market): [$X] [CONFIDENCE: H/M/L]
  Source: [Name, date]
  Methodology: [How this was scoped from TAM]

SOM (Serviceable Obtainable Market): [$X] [CONFIDENCE: H/M/L]
  Source: [Name, date or "internal estimate"]
  Methodology: [How this was calculated]
  [ASSUMPTION: list assumptions in SOM calculation]

MARKET GROWTH
CAGR: [X%] [CONFIDENCE: H/M/L]
  Source: [Name, date]
  Growth drivers: [What is driving growth]
  Risk factors: [What could suppress growth]

CUSTOMER SEGMENTS
| Segment | Size | Growth | Key Needs | Acquisition Complexity |
|---------|------|--------|-----------|----------------------|
| [Seg 1] | [N] | [X%] | [Needs] | [Low/Med/High] |
| [Seg 2] | [N] | [X%] | [Needs] | [Low/Med/High] |

MARKET DYNAMICS
Competitive landscape: [How crowded? Concentrated or fragmented?]
Buyer behavior:        [How do customers evaluate and buy?]
Distribution:          [Dominant channels]
Barriers to entry:     [What makes this market hard to enter?]
Regulatory factors:    [Any compliance requirements affecting market access?]

KEY TRENDS
1. [Trend 1] — [Evidence and confidence level]
2. [Trend 2] — [Evidence and confidence level]
3. [Trend 3] — [Evidence and confidence level]

CONFIDENCE SUMMARY
Most confident finding: [Statement] — [High confidence, based on [source]]
Least confident finding: [Statement] — [Low/Speculative, based on [limited sources]]
Biggest unknown: [What we don't know that matters most]

IMPLICATIONS
[What this market analysis means for the decision it was commissioned for]
═══════════════════════════════════════════════════════════
```

---

## Template 4: Hypothesis Testing Framework

```
HYPOTHESIS TESTING FRAMEWORK
═══════════════════════════════════════════════════════════
Hypothesis ID:   HT-[YYYY-MM-DD]-[NNN]
Analyst:         Felix Okafor, Research Agent
Date:            [YYYY-MM-DD]
Hypothesis:      [State the hypothesis clearly — a specific, testable claim]
Requester:       [Who proposed this hypothesis and in which workflow]
═══════════════════════════════════════════════════════════

HYPOTHESIS STATEMENT
"[The hypothesis, stated precisely enough to be falsifiable]"

HYPOTHESIS TYPE
[ ] Market hypothesis (claim about the market)
[ ] Customer hypothesis (claim about customer behavior)
[ ] Product hypothesis (claim about product performance or preference)
[ ] Competitive hypothesis (claim about competitor position)
[ ] Financial hypothesis (claim about unit economics or growth)

PRIOR CONFIDENCE (before research)
[Speculative / Low / Medium / High] — [What was the initial basis for this hypothesis?]

EVIDENCE FOR THE HYPOTHESIS
| Evidence | Source | Tier | Weight |
|----------|--------|------|--------|
| [Evidence 1] | [Source, date] | [1-4] | [Strong/Moderate/Weak] |
| [Evidence 2] | [Source, date] | [1-4] | [Strong/Moderate/Weak] |

EVIDENCE AGAINST THE HYPOTHESIS
| Counter-evidence | Source | Tier | Weight |
|-----------------|--------|------|--------|
| [Counter 1] | [Source, date] | [1-4] | [Strong/Moderate/Weak] |
| [Counter 2] | [Source, date] | [1-4] | [Strong/Moderate/Weak] |

STEELMAN OPPOSING VIEW
[The strongest case that this hypothesis is wrong, argued by its best proponent]

UPDATED CONFIDENCE (after research)
[Speculative / Low / Medium / High] ([X%])
Change from prior: [Increased / Decreased / Unchanged — and why]

VERDICT
[ ] Supported — evidence is sufficient to treat hypothesis as working assumption
[ ] Partially supported — hypothesis is true in some conditions [specify]
[ ] Unsupported — insufficient or contradicting evidence; treat as assumption
[ ] Refuted — evidence actively contradicts hypothesis

HOW TO TEST DEFINITIVELY
[If confidence is still Low or Speculative: what experiment, study, or data would move this to High confidence?]
[Estimated cost and time of definitive test]

RECOMMENDATION
[Proceed treating hypothesis as true / Proceed with explicit assumption label / Do not proceed until hypothesis is validated]
═══════════════════════════════════════════════════════════
```

---

## Template 5: Evidence Quality Matrix

```
EVIDENCE QUALITY MATRIX
═══════════════════════════════════════════════════════════
Context:      [Which decision or workflow this matrix supports]
Analyst:      Felix Okafor, Research Agent
Date:         [YYYY-MM-DD]
═══════════════════════════════════════════════════════════

| Claim | Source | Source Tier | Supports Claim? | Confidence |
|-------|--------|-------------|----------------|-----------|
| [Claim 1] | [Source name, date] | [1-4] | [Directly / Partially / Not supported] | [H/M/L/S] |
| [Claim 2] | [Source name, date] | [1-4] | [Directly / Partially / Not supported] | [H/M/L/S] |
| [Claim 3] | [Source name, date] | [1-4] | [Directly / Partially / Not supported] | [H/M/L/S] |
| [Claim 4] | [Source name, date] | [1-4] | [Directly / Partially / Not supported] | [H/M/L/S] |
| [Claim 5] | [Source name, date] | [1-4] | [Directly / Partially / Not supported] | [H/M/L/S] |

EVIDENCE TIER LEGEND
Tier 1: Peer-reviewed / official statistics — highest weight
Tier 2: Industry analyst reports, first-party company research
Tier 3: Reputable journalism, public company filings, expert interviews
Tier 4: Anecdotes, social media, competitor self-reporting

CONFIDENCE LEGEND
H = High (75-95%) | M = Medium (50-74%) | L = Low (25-49%) | S = Speculative (<25%)

SUMMARY ASSESSMENT
Strongest evidence in this set: [Claim and source]
Weakest evidence in this set: [Claim and source — flag if it's load-bearing]
Assumption that most needs validation: [Claim and why it matters]
Overall evidence quality for this decision: [Strong / Adequate / Thin / Insufficient]
Recommendation: [Proceed / Proceed with named caveats / Do not proceed without better evidence]
═══════════════════════════════════════════════════════════
```

---

## Template 6: Research Synthesis Memo

```
RESEARCH SYNTHESIS MEMO
═══════════════════════════════════════════════════════════
To:      [Orchestrator / Specific agent / Human]
From:    Felix Okafor, Research Agent
Date:    [YYYY-MM-DD]
Re:      [Topic]
═══════════════════════════════════════════════════════════

BOTTOM LINE UP FRONT
[2-3 sentences: what does the research show, what confidence level, what does it mean for the decision]

WHAT THE EVIDENCE SHOWS
[Structured summary of findings, each with confidence label]
1. [Finding 1] — [CONFIDENCE: H/M/L/S]
2. [Finding 2] — [CONFIDENCE: H/M/L/S]
3. [Finding 3] — [CONFIDENCE: H/M/L/S]

WHAT THE EVIDENCE DOES NOT SHOW
[Important: what are researchers, agents, or humans tempted to conclude from this evidence that is NOT actually supported?]

KEY ASSUMPTIONS IN THIS SYNTHESIS
[ASSUMPTION 1]: [Description] — [Confidence it holds]
[ASSUMPTION 2]: [Description] — [Confidence it holds]

THE STRONGEST COUNTER-ARGUMENT
[Steelman opposing view — 2-4 sentences]

IMPLICATIONS FOR THE DECISION
[Specific, direct: given this evidence, what should the decision-makers know?]

WHAT ADDITIONAL RESEARCH WOULD HELP
[If decision can wait: what specific research would materially improve confidence?]
[Estimated time and cost to obtain it]
[If decision cannot wait: what assumption should be explicitly named and monitored?]

CONFIDENCE ESCALATION
[State whether human approval is recommended before proceeding, and why or why not]
═══════════════════════════════════════════════════════════
```
