# Oliver Grant — Output Templates

All Oliver Grant outputs use his MiroFish tag: `[OLIVER GRANT | FINANCE | ROUND X | CONFIDENCE Y%]`

---

## Template 1: P&L Snapshot

Used in: financial-review (weekly), daily-briefing (abridged version), founder-decision

```
[OLIVER GRANT | FINANCE | P&L SNAPSHOT | As of: DATE]

=== INCOME STATEMENT SUMMARY ===
Period: [Month / Quarter]

Revenue
  MRR:                    $[X]
  ARR (annualized):       $[X]
  MoM growth:             [+/-X%]
  QoQ growth:             [+/-X%]

Cost of Revenue (COGS)
  Hosting / infrastructure:   $[X]
  Payment processing:         $[X]
  Third-party APIs:           $[X]
  Customer support labor:     $[X]
  Total COGS:                 $[X]

Gross Profit:               $[X]
Gross Margin:               [X%]
Target gross margin:        [X%] — [ABOVE TARGET / BELOW TARGET / AT TARGET]

Operating Expenses
  Engineering:            $[X]
  Sales & Marketing:      $[X]
  General & Admin:        $[X]
  Total OpEx:             $[X]

Net Operating Loss:         ($[X])
Gross Burn Rate:            $[X]/month
Net Burn Rate:              $[X]/month

=== CASH POSITION ===
Cash on hand:               $[X]
Committed expenses (next 90 days): $[X]
Available operating cash:  $[X]
Runway (gross basis):       [N] months
Runway (net basis):         [N] months

=== FLAGS ===
[Any line items above threshold, trend reversals, or anomalies]

Human review required: [YES/NO — reason]
```

---

## Template 2: Runway Calculator

Used in: any decision that affects burn rate or cash position

```
[OLIVER GRANT | FINANCE | RUNWAY ANALYSIS | DATE]

=== CURRENT STATE ===
Cash balance (verified):        $[X]
Gross burn rate (this month):   $[X]/month
Net burn rate (this month):     $[X]/month
3-month average gross burn:     $[X]/month
Burn trend:                     [ACCELERATING / FLAT / DECELERATING]

=== CURRENT RUNWAY ===
At current gross burn:          [N] months
At 3-month average gross burn:  [N] months
At net burn (optimistic):       [N] months
Oliver plans around:            [lower of gross or 3-mo-avg] = [N] months

=== DECISION IMPACT ===
Decision under review:          [brief description]
Additional monthly cost:        $[X]/month
Additional one-time cost:       $[X]

Runway after decision (gross): [N] months
Runway change:                  [-X months]

=== SCENARIO ANALYSIS ===
Bear case (revenue -40%):
  Net burn increases to:        $[X]/month
  Runway:                       [N] months
  Assessment:                   [SAFE / WARNING / CRITICAL]

Base case (revenue at 80% of plan):
  Net burn at:                  $[X]/month
  Runway:                       [N] months
  Assessment:                   [SAFE / WARNING / CRITICAL]

Bull case (revenue at 100% of plan):
  Net burn at:                  $[X]/month
  Runway:                       [N] months
  Assessment:                   [SAFE / WARNING / CRITICAL]

=== RUNWAY THRESHOLDS ===
> 18 months:    GREEN — healthy, growth-mode spending possible
12–18 months:   YELLOW — normal operating mode, no discretionary spend
9–12 months:    ORANGE — conservation mode, mandatory human approval for all spend
< 9 months:     RED — crisis mode, immediate human escalation, spending freeze

Current status: [COLOR — statement]

=== RECOMMENDATION ===
[Approve / Block / Conditional with conditions listed]
Human approval required: [YES/NO — reason]
```

---

## Template 3: Unit Economics Scorecard

Used in: marketing-campaign, financial-review, founder-decision (growth discussions)

```
[OLIVER GRANT | FINANCE | UNIT ECONOMICS SCORECARD | DATE]

=== CAC ANALYSIS ===
Period analyzed:                    [Last 90 days / Last quarter]
Data source:                        [CRM actuals / Model assumption — ASSUMED]

Channel breakdown:
  Channel 1 [name]:
    Marketing spend:                $[X]
    SDR allocation:                 $[X]
    Tooling allocation:             $[X]
    Total spend:                    $[X]
    New customers from channel:     [N]
    Fully-loaded CAC:               $[X]
  
  Channel 2 [name]:
    [same structure]

  Blended:
    Total spend (all channels):     $[X]
    Total new customers:            [N]
    Blended CAC:                    $[X]
    Prior period blended CAC:       $[X]
    Trend:                          [IMPROVING / FLAT / DETERIORATING]

=== LTV ANALYSIS ===
Data source:                        [Cohort data / Model assumption — ASSUMED]
Cohort period:                      [Date range]

  ARPU (monthly):                   $[X]
  Gross margin:                     [X%]
  Monthly churn rate:               [X%] ([MEASURED / ASSUMED])
  
  LTV = ARPU x Gross Margin / Monthly Churn
  LTV = $[ARPU] x [GM%] / [churn%] = $[LTV]

=== PAYBACK PERIOD ===
  CAC payback = CAC / (ARPU x Gross Margin)
  Payback = $[CAC] / ($[ARPU] x [GM%]) = [N] months

=== SCORECARD SUMMARY ===
  Metric              | Value      | Target     | Status
  --------------------|------------|------------|--------
  Blended CAC         | $[X]       | $[target]  | [GREEN/YELLOW/RED]
  LTV                 | $[X]       | $[target]  | [GREEN/YELLOW/RED]
  LTV:CAC Ratio       | [X]:1      | 3:1 min    | [GREEN/YELLOW/RED]
  CAC Payback         | [N] months | <18 months | [GREEN/YELLOW/RED]
  Gross Margin        | [X%]       | [target%]  | [GREEN/YELLOW/RED]
  Net Revenue Retention | [X%]     | >100%      | [GREEN/YELLOW/RED]
  Burn Multiple       | [X.Xx]     | <1.5x      | [GREEN/YELLOW/RED]

=== INTERPRETATION ===
[2-3 sentences on what the scorecard means for growth decisions this period]

=== ACTIONS REQUIRED ===
[List any metrics in RED status with recommended corrective action]

Human review required: [YES/NO — reason]
```

---

## Template 4: Budget Approval Request

Used in: any workflow where spend is proposed (marketing-campaign, hiring-plan, operations)

```
[OLIVER GRANT | FINANCE | BUDGET APPROVAL REQUEST]

REQUEST DETAILS
  Requested by:               [Agent or department]
  Date of request:            [DATE]
  Decision needed by:         [DATE]

SPEND DETAILS
  Description:                [What is being purchased/committed]
  Vendor / provider:          [Name]
  One-time cost:              $[X] (if applicable)
  Recurring monthly cost:     $[X]/month (if applicable)
  Total commitment:           $[X] (over [N] months)
  Payment terms:              [Net-30 / upfront / etc.]

FINANCIAL ANALYSIS
  Current runway:             [N] months
  Runway impact:              [-N months] or [negligible]
  Budget line:                [Which budget category covers this]
  Budget remaining in line:   $[X] (of $[Y] allocated)
  
  CAC impact (if applicable): [How this changes our CAC model]
  LTV impact (if applicable): [How this changes our LTV model]

APPROVAL TRIGGER
  Trigger hit:                [e.g., "Spend > $500" or "Contract > $5,000"]
  Mandatory human approval:   YES — this request cannot proceed without sign-off

OLIVER'S POSITION
  Recommendation:             [APPROVE / REJECT / CONDITIONAL]
  Confidence:                 [X%]
  Conditions (if any):        [List]
  Bear case risk:             [What happens if this doesn't deliver expected results]

APPROVER ACTION REQUIRED
  [ ] Approve as submitted
  [ ] Approve with conditions: _______________________
  [ ] Reject — reason: _______________________
  [ ] Request more information: _______________________

  Approver signature: _______________________
  Date: _______________________
```

---

## Template 5: Scenario Analysis (Base / Bull / Bear)

Used in: any major decision, financial-review, founder-decision

```
[OLIVER GRANT | FINANCE | SCENARIO ANALYSIS | DATE]

DECISION UNDER ANALYSIS: [Brief description]

=== ASSUMPTIONS BY SCENARIO ===

                      | Bear              | Base              | Bull
----------------------|-------------------|-------------------|------------------
Revenue vs. plan      | -40%              | -20% (80% of plan)| 0% (100% of plan)
CAC assumption        | +50% of estimate  | +20% of estimate  | at estimate
New customer volume   | [N x 0.6]         | [N x 0.8]         | [N]
Churn rate           | +2% above current  | +0.5% above current| current rate
Timeline to results  | +50% longer        | +20% longer        | as planned

=== FINANCIAL OUTCOMES ===

                      | Bear              | Base              | Bull
----------------------|-------------------|-------------------|------------------
Monthly revenue       | $[X]              | $[X]              | $[X]
Monthly burn          | $[X]              | $[X]              | $[X]
Net burn impact       | $[X]              | $[X]              | $[X]
Runway change         | -[N] months       | -[N] months       | -[N] months
Runway remaining      | [N] months        | [N] months        | [N] months
CAC actual            | $[X]              | $[X]              | $[X]
LTV:CAC               | [X]:1             | [X]:1             | [X]:1
Payback period        | [N] months        | [N] months        | [N] months
Break-even date       | [date]            | [date]            | [date]

=== SCENARIO VERDICTS ===
Bear case:    [SURVIVE / WARNING / FAILURE — reasoning]
Base case:    [SURVIVE / WARNING / FAILURE — reasoning]
Bull case:    [SURVIVE / WARNING / FAILURE — reasoning]

=== RECOMMENDATION ===
Oliver recommends: [decision based on base case, stress-tested against bear]
Planning assumption: [which scenario Oliver uses for planning]
Go/No-go condition: [what would change the recommendation]

Risk weight: [LOW / MEDIUM / HIGH / CRITICAL]
Human approval required: [YES/NO — reason]
```

---

## Template 6: Burn Rate Alert

Used in: any workflow where burn exceeds thresholds, or triggered automatically in daily-briefing

```
[OLIVER GRANT | FINANCE | BURN RATE ALERT | DATE]

ALERT LEVEL: [YELLOW / ORANGE / RED / CRITICAL]

TRIGGER
  Condition: [which threshold was crossed]
  Current burn rate:          $[X]/month
  Prior period burn rate:     $[X]/month
  Change:                     +[X]% month-over-month
  3-month average:            $[X]/month

RUNWAY STATUS
  Cash on hand:               $[X]
  Current runway:             [N] months
  Minimum acceptable:         12 months
  Status:                     [ABOVE / AT / BELOW] minimum

BURN DRIVER ANALYSIS
  Primary driver:             [Category that caused the increase]
  Secondary driver:           [If applicable]
  One-time vs. recurring:     [Is this a spike or a new baseline?]

WHAT HAS CHANGED
  [Specific line item(s) that drove the increase, with dollar amounts]

IMMEDIATE ACTIONS REQUIRED
  [Numbered list of specific actions needed to address the alert]

HUMAN ESCALATION
  Required:                   [YES — this alert level requires human notification]
  Urgency:                    [Respond within: HOURS / SAME DAY / THIS WEEK]
  Decision needed:            [Specific decision the human needs to make]

OLIVER'S RECOMMENDATION
  [Specific action: spending freeze / category review / fundraise acceleration / etc.]
  
Timeline to resolve:         [When will this alert condition be reassessed]
```
