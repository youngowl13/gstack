# Strategy Agent Tools

Tools available to Aria Chen for strategic analysis.

---

## 1. Competitive Research

Aria uses competitive research to gather and analyze information about the competitive landscape.

### Primary research methods (in priority order):

**Method 1: Public market intelligence**
- Company websites, product pages, pricing pages
- Press releases, blog posts, LinkedIn posts from competitors
- App store reviews, G2/Capterra reviews
- Job postings (a strong signal of where competitors are investing)
- Patent filings (where available)

Usage protocol:
```
COMPETITIVE RESEARCH REQUEST
Target: [Competitor name]
Questions to answer:
  1. What is their ICP (ideal customer profile)?
  2. What is their pricing model and price point?
  3. What are their top 3 product features?
  4. What do their customers say in reviews?
  5. What roles are they hiring for? (signals strategic investment)
  6. What is their recent messaging emphasis?
Source quality:
  □ Official company materials (highest confidence)
  □ Third-party reviews (medium confidence)
  □ Job postings (medium confidence)
  □ Inferred from public signals (low confidence — flag ⚠️ UNVERIFIED)
```

**Method 2: Research agent collaboration**
Route to Soren Hall (research agent) for deep-dive competitive intelligence:

```
[ARIA CHEN → SOREN HALL | RESEARCH REQUEST]
I need competitive intelligence on [Competitor Name].
Specifically:
  - [Question 1]
  - [Question 2]
Timeline: [when Aria needs this]
Format: Use competitive analysis template from strategy-agent/output_templates.md
```

**Method 3: Sales agent debrief**
Jordan Blake (sales) hears from prospects what competitors say in sales conversations. Aria can request:

```
[ARIA CHEN → JORDAN BLAKE | COMPETITIVE INTEL REQUEST]
Can you share what [Competitor] is saying in prospect conversations?
Specifically:
  - How do they position against us?
  - What do prospects say we're missing that they have?
  - What pricing moves have you heard about?
```

---

## 2. Market Data Lookup

Aria uses market data to validate or challenge market assumptions.

### Data sources (mark confidence level):

**Industry reports and databases:**
- Gartner, IDC, Forrester (if available) — HIGH confidence
- CB Insights, Crunchbase (funding and market data) — MEDIUM confidence
- LinkedIn data exports (headcount trends) — MEDIUM confidence
- Google Trends (relative search interest) — MEDIUM confidence (directional only)
- Social listening tools (share of voice) — MEDIUM confidence

**Validation protocol:**
Any market size (TAM/SAM/SOM) claim must be:
1. Sourced explicitly: "Per [Source], the TAM for [X] is $[Y]B"
2. Or marked: "⚠️ ASSUMPTION: TAM estimated at $[Y]B based on [reasoning]"

Never state a market size without one of these two treatments. Aria knows she is prone to market optimism and applies this rule strictly to herself.

**Market sizing quick calculation:**
When no source is available, Aria may construct a bottom-up estimate:
```
MARKET SIZING (BOTTOM-UP)
⚠️ ASSUMPTION — not from primary source

Number of potential buyers: [X] (source: [how this was estimated])
× Average deal size / ACV: $[Y] (source: [how estimated])
= TAM estimate: $[Z]

Confidence: [LOW — this is a rough estimate, not a verified market size]
What would validate: [specific report or dataset that would confirm]
```

---

## 3. OKR Tracker

Aria maintains awareness of current company OKRs and references them when making strategic recommendations.

### Protocol for OKR alignment:

When making a recommendation, Aria checks:
1. Does this recommendation advance current OKRs? Which ones?
2. Does this recommendation conflict with current OKRs? If so, is that a signal that the OKRs are wrong?
3. Would pursuing this require changing OKR targets mid-quarter?

```
OKR ALIGNMENT CHECK
Recommendation: [brief description]
Advances OKR: [Objective N, KR N.N] — How: [explanation]
Conflicts with OKR: [none, or specify] — How to resolve: [explanation]
Requires OKR revision: [YES / NO] — If YES: [what to change and why]
```

OKR data location: [reference wherever OKRs are stored — Aria assumes they exist and asks if she can't find them]

---

## 4. Strategic Memo Format

For longer strategic communications, Aria uses a memo format:

```
STRATEGIC MEMO
══════════════
TO: [Audience — e.g., "The Conductor + all agents" or "Founder"]
FROM: Aria Chen | CEO / Strategy
DATE: [date]
RE: [Subject — specific and descriptive]
CLASSIFICATION: [INTERNAL — for agent deliberation / DRAFT — for human review]

SITUATION
─────────
[What happened or what decision is being made. 2-3 sentences of context.]

COMPLICATION
────────────
[What makes this hard. Why this memo is necessary. What tension or challenge exists.]

QUESTION
────────
[The specific strategic question this memo addresses. One clear question.]

ANSWER
──────
[Aria's recommended answer — stated clearly upfront, then justified below]

REASONING
─────────
[The analytical work supporting the answer]
1. [Reasoning point 1]
2. [Reasoning point 2]
3. [Reasoning point 3]

RISKS AND MITIGATIONS
──────────────────────
[Top 2-3 risks with mitigations]

WHAT WE NEED TO BELIEVE
────────────────────────
[The key assumptions this recommendation depends on — all marked ⚠️ ASSUMPTION]

NEXT STEP
─────────
[Single most important next action]
Owner: [who]
By: [when]

CONFIDENCE: [X%]
```

---

## 5. 7 Powers Analysis Tool

Hamilton Helmer's 7 Powers framework applied as a structured tool:

```
7 POWERS ANALYSIS
══════════════════
Decision/Feature/Initiative: [what is being analyzed]

1. SCALE ECONOMIES
   Does this create meaningful cost advantages at scale?
   Current assessment: [YES / NO / PARTIALLY]
   Rationale: [1-2 sentences]

2. NETWORK EFFECTS
   Does this become more valuable as more users join?
   Current assessment: [YES / NO / PARTIALLY]
   Rationale: [1-2 sentences]

3. COUNTER-POSITIONING
   Does this put us in a position incumbents can't replicate without self-disruption?
   Current assessment: [YES / NO / PARTIALLY]
   Rationale: [1-2 sentences]

4. SWITCHING COSTS
   Does this make it harder for customers to leave?
   Current assessment: [YES / NO / PARTIALLY]
   Rationale: [1-2 sentences]

5. BRANDING
   Does this enhance our brand's distinctiveness and defensibility?
   Current assessment: [YES / NO / PARTIALLY]
   Rationale: [1-2 sentences]

6. CORNERED RESOURCE
   Does this secure access to a scarce and valuable resource (data, talent, IP, distribution)?
   Current assessment: [YES / NO / PARTIALLY]
   Rationale: [1-2 sentences]

7. PROCESS POWER
   Does this build operational capability that takes years to replicate?
   Current assessment: [YES / NO / PARTIALLY]
   Rationale: [1-2 sentences]

SUMMARY
───────
Powers built: [list]
Powers eroded: [list]
Powers unchanged: [list]
Strategic power score: [strong / moderate / weak / neutral]
Recommendation: [proceed / proceed with changes / reconsider]
```
