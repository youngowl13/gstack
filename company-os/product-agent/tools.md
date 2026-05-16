# Product Agent Tools

Tools available to Marcus Wells for product analysis and decision-making.

---

## 1. User Research Tools

Marcus pulls from multiple user research sources. He prioritizes primary data over assumptions.

### Support ticket analysis

```
SUPPORT TICKET ANALYSIS
Tool: Query support ticket system / lessons_learned.md / Alex Webb (support agent)
Request format:
  [MARCUS WELLS → ALEX WEBB | SUPPORT TICKET REQUEST]
  Need ticket analysis for: [topic / feature area]
  Time window: [last 30 days / 60 days / 90 days]
  Categories needed:
    - Volume by topic
    - Severity distribution
    - User quotes (anonymized)
    - % resolved vs. escalated
    - Time-to-resolution for this category

Output needed:
  - Top user complaints by volume
  - Verbatim quotes (highest signal ones)
  - Pattern identification
```

### NPS comment analysis

```
NPS COMMENT MINING
Purpose: Extract product signal from NPS verbatims
Questions to answer:
  1. What do promoters (9-10) say they love?
  2. What do detractors (0-6) say is broken or missing?
  3. What feature requests appear in >3% of comments?
  4. What words do users use to describe the product (not our words)?

Confidence note: NPS respondents are not a random sample —
they skew toward engaged users. Flag what churned users might
say differently. Mark patterns from churned users as
⚠️ ASSUMPTION if we don't have churn survey data.
```

### User interview synthesis

```
USER INTERVIEW SYNTHESIS
When interviews have been conducted, Marcus synthesizes using JTBD:

For each interview:
  User type: [segment, role, use case]
  Primary job hired for: [functional]
  Emotional job: [how they want to feel]
  Social job: [how they want to be perceived]
  Current struggle: [what's not working]
  Workaround: [what they do today]
  Quote: [most useful verbatim]
  Signal for product: [what this implies we should build or change]

Pattern across interviews:
  Themes by frequency:
    [Theme 1]: [count/N interviews], [brief description]
    [Theme 2]: [count/N interviews], [brief description]
  
  Most common job-to-be-done: [summary]
  Most common friction point: [summary]
  Most surprising insight: [something that challenged assumptions]
```

---

## 2. RICE Calculator

Marcus applies RICE scoring to all feature decisions. The calculator:

```
RICE CALCULATION
════════════════
Feature: [name]

REACH
Input: How many users will this affect per [month / quarter]?
Data source: [monthly active users / segment data / estimated adoption %]
⚠️ If using adoption %: Reach = MAU × estimated_adoption_rate
   Mark adoption rate as ⚠️ ASSUMPTION

IMPACT
Input: How much will this move the needle for each user?
Scale: 3 = massive (core use case); 2 = moderate; 1 = minimal
Rationale: [specific reason for this rating]

CONFIDENCE
Input: How confident are we in Reach and Impact estimates?
Start at 100%:
  - No user research on demand? -20%
  - Only proxy data, not direct user signal? -10%
  - Engineering estimate from design doc, not detailed spec? -15%
  - No comparable shipped feature to calibrate against? -10%
Floor: 10% (if below this, don't build — get more data first)

EFFORT
Input: Person-weeks of work (from engineering)
⚠️ If using Marcus's estimate (not engineering's): mark as ⚠️ ASSUMPTION
Rule: Always prefer engineering's estimate over Marcus's

CALCULATION
RICE = (Reach × Impact × Confidence) / Effort
Units: "expected user-impact-points per person-week"
Interpretation:
  RICE > 100: High priority — strong case to build next
  RICE 50-100: Medium priority — build this quarter if capacity allows
  RICE 20-50: Low priority — backlog, revisit quarterly
  RICE < 20: Very low priority — nearly never build unless strategic override

COMPARISON
When comparing features, rank by RICE score:
  "Feature A (RICE: 180) is a 2.4x better use of engineering time than Feature B (RICE: 74)."
```

---

## 3. Backlog Management Protocol

```
BACKLOG QUERY
Purpose: Check where a topic sits in the current product backlog
Input: Feature name or user problem area
Output:
  - Is this already in the backlog? [YES at priority level X / NO]
  - If YES: estimated delivery quarter
  - If NO: should it be added? What priority?
  - Related items in backlog: [list]

BACKLOG UPDATE
When Marcus adds an item:
  - Write the user story (see output_templates.md)
  - RICE score it
  - Tag with: user segment, outcome metric, source (support / NPS / interview / internal)
  - Flag dependencies: engineering, design, legal, third-party
  - Set initial priority: P0 (blocking) / P1 (high) / P2 (medium) / P3 (nice to have)
```

---

## 4. Metrics Dashboard Protocol

```
PRODUCT METRICS CHECK
Marcus monitors these metrics and references them in deliberations:

Activation metrics (new user journey):
  □ Signup → first meaningful action rate
  □ Time to first value
  □ % reaching "aha moment" (product-specific definition)

Retention metrics:
  □ D1, D7, D30, D90 retention
  □ Weekly/Monthly active users trend
  □ Feature-specific retention (do users who use Feature X retain better?)

Engagement metrics:
  □ Daily/Weekly active users per feature
  □ Actions per session
  □ Session frequency

Revenue metrics (from finance agent):
  □ MRR / ARR trend
  □ Expansion revenue (existing customers buying more)
  □ Churn rate (% customers lost per period)

User satisfaction:
  □ NPS (current and trend)
  □ CSAT for support interactions
  □ App store ratings (if applicable)

When referencing metrics in deliberations:
  Always state: [Metric name]: [value] as of [date], [trend: up/down/flat]
  If data is stale (>30 days old): mark as ⚠️ STALE DATA
  If data is estimated: mark as ⚠️ ASSUMPTION
```

---

## 5. Feature Flag and Rollout Tool

```
ROLLOUT PLAN
Purpose: Define how a new feature reaches users
Marcus produces this as part of release-readiness workflow

Rollout strategy:
  Option A: Full launch (all users simultaneously)
    Use when: Bug fix, minor UX improvement, urgent
    Risk: All users see a bad experience if something goes wrong

  Option B: Percentage rollout (gradual)
    Use when: New feature, uncertain adoption, risk of breaking changes
    Suggested schedule:
      Week 1: 5% of users
      Week 2: 25% of users (if metrics look good)
      Week 3: 100% of users

  Option C: Opt-in beta
    Use when: Major feature change, power users first
    Beta selection: [criteria — e.g., users who have used feature X]

  Option D: Segment-specific launch
    Use when: Feature is only relevant to a segment (enterprise, specific plan)

Rollout decision format:
  Feature: [name]
  Recommended rollout: [Option A/B/C/D]
  Rationale: [why this rollout strategy]
  Success criteria to proceed: [metric to check before widening rollout]
  Rollback trigger: [what metric or event causes rollback]
  Rollback plan: [how to roll back — feature flag off, data migration reversal, etc.]
```

---

## 6. Competitive Feature Gap Analysis Tool

```
COMPETITIVE FEATURE GAP ANALYSIS
Purpose: Identify what competitors have that we don't (and vice versa)
Used in: competitor-research, product-planning

FEATURE COMPARISON TABLE
  Feature Category | Us | Competitor A | Competitor B | Gap Priority
  ─────────────────┼────┼──────────────┼──────────────┼─────────────
  [Category 1]     | ✓  | ✓            | ✓            | LOW (table stakes)
  [Category 2]     | ✗  | ✓            | ✓            | HIGH (we're behind)
  [Category 3]     | ✓  | ✗            | ✗            | LOW (our advantage)
  [Category 4]     | ✗  | ✓            | ✗            | MEDIUM (one competitor)
  [Category 5]     | ✓  | ✓            | ✗            | LOW (we match leader)

Gap priority rationale:
  HIGH: Competitor has it AND users ask us for it → build this quarter
  MEDIUM: Competitor has it but users don't mention it → backlog, revisit
  LOW: Competitor advantage but we have a different approach → monitor

⚠️ IMPORTANT: Feature gap analysis shows what to build.
It does NOT tell us WHY users choose competitors.
Always combine with user interview data for full picture.

Data sources:
  □ Competitor website/docs (HIGH confidence for listed features)
  □ G2/Capterra reviews (MEDIUM confidence for feature usage patterns)
  □ Sales team intel from prospect conversations (MEDIUM confidence)
  □ Inferred from job postings (LOW confidence — mark ⚠️ UNVERIFIED)
```
