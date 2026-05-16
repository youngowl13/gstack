# Customer Success Agent — Output Templates

## 1. Customer Health Score Dashboard
```
CUSTOMER HEALTH DASHBOARD — [Date]
════════════════════════════════════════════════════
Assessed by: Priya Nair (Customer Success)

HEADLINE
  Total accounts:  [#]
  🟢 Healthy:      [#] ([%]) — NPS promoters, engaged, growing
  🟡 At risk:      [#] ([%]) — declining engagement or recent tickets
  🔴 Critical:     [#] ([%]) — active churn signal

ARR DISTRIBUTION
  ARR in healthy accounts: $[X]
  ARR at risk:             $[X] — ([%] of total ARR)
  ARR in critical:         $[X] — ([%] of total ARR)

🔴 CRITICAL ACCOUNTS (action required this week)
  [Account name] — $[ARR] — Signal: [what triggered RED status]
    Last contact: [date] · Next action: [Priya's plan]
  [Account name] — $[ARR] — Signal: [what triggered RED status]
    Last contact: [date] · Next action: [Priya's plan]

🟡 AT-RISK ACCOUNTS (monitor closely)
  [Account name] — $[ARR] — Signal: [what triggered YELLOW]
  [Account name] — $[ARR] — Signal: [what triggered YELLOW]

EXPANSION PIPELINE
  Accounts showing expansion signals: [#] — potential ARR: $[X]

HUMAN APPROVAL REQUIRED: [YES — if any critical account contract action needed / NO]
```

---

## 2. Churn Risk Assessment
```
CHURN RISK ASSESSMENT — [Account Name]
════════════════════════════════════════════════════
Account: [name] · ARR: $[X] · Tier: [Enterprise/Mid/SMB]
Health status: 🔴 CRITICAL / 🟡 AT RISK
Assessment by: Priya Nair

CHURN SIGNAL
  [Description of what triggered this assessment]

RISK FACTORS
  □ Declining login frequency (last login: [X days ago])
  □ Unresolved support tickets: [#] open tickets, oldest [X days]
  □ Feature adoption: only using [X] of [Y] core features
  □ Contract renewal in [X] days
  □ Executive sponsor change
  □ Competitor evaluation mentioned
  □ Budget pressure signals

ACCOUNT HISTORY
  Customer since: [date]
  Renewal history: [on-time / late / issues]
  Support ticket volume trend: [increasing / stable / decreasing]
  Previous churn conversation: [date if applicable]

PRIYA'S ASSESSMENT
  Churn probability: [%]
  Estimated time to decision: [days/weeks]
  Key issue: [root cause in one sentence]

RECOMMENDED INTERVENTION
  □ Priya calls within [X hours/days]
  □ Escalate to [sales/leadership] for executive outreach
  □ Offer: [training / feature demo / custom support]
  □ Product team notified: [yes/no — what feature issue]
  □ Engineering escalation: [yes/no — what bug]

HUMAN APPROVAL REQUIRED: [YES — if pricing exception or contract change / NO]
```

---

## 3. QBR Template (Quarterly Business Review)
```
QUARTERLY BUSINESS REVIEW — [Account Name] — Q[X] [Year]
════════════════════════════════════════════════════
Attendees: [Customer contacts] · [Priya + any internal guests]
Date: [date]

AGENDA
  1. Q[X] recap — value delivered
  2. Key metrics and ROI
  3. Product updates relevant to this account
  4. Roadmap preview — items they care about
  5. Goals and success criteria for Q[X+1]
  6. Open issues and action items

Q[X] VALUE DELIVERED
  [Key outcomes the customer achieved using the product]
  [Metrics: time saved, revenue impact, cost reduction]

USAGE SUMMARY
  [Key features used] · [Adoption rate] · [Active users: X of Y seats]

OPEN ITEMS FROM LAST QBR
  □ [Item] — Status: [resolved / in progress / delayed]

Q[X+1] SUCCESS CRITERIA
  [What does success look like for this customer next quarter?]

ACTION ITEMS
  [Action] — Owner: [person] — Due: [date]

RENEWAL STATUS: [On track / At risk — why]
EXPANSION OPPORTUNITY: [YES — describe / NO]
NPS SCORE THIS QUARTER: [score] ([promoter/passive/detractor])
```

---

## 4. NPS Response Playbook
```
NPS RESPONSE — Score: [0-10]

PROMOTER (9-10)
  Response within: 24 hours
  Action: Thank, ask for case study or reference, flag to sales as expansion/referral opportunity
  Template: "Thank you for the [score]! We're thrilled [product] is working well for you.
             Would you be open to sharing your experience with others? [referral link / case study ask]"

PASSIVE (7-8)
  Response within: 48 hours
  Action: Ask what would make it a 10. Log specific feedback for product team.
  Template: "Thanks for the [score]! We'd love to understand what would make [product] a 10 for you.
             What's the one thing we could improve? [open-ended response link]"

DETRACTOR (0-6)
  Response within: 4 hours (Priya personally handles)
  Action: Call — don't email. Understand root cause. Create internal action item. Flag to product if systemic.
  Template: [Call first] "I saw your recent feedback and I want to make sure we understand what's
             going wrong for you. Can I schedule 15 minutes this week?"
  Internal: Log root cause, create ticket, flag to relevant team, follow up in 7 days.

HUMAN APPROVAL REQUIRED: YES — for any response committing to product changes or pricing adjustments
```

---

## 5. CS Escalation Memo (to Product/Engineering)
```
CS ESCALATION MEMO
════════════════════════════════════════════════════
From: Priya Nair (Customer Success)
To: [Product/Engineering/Support]
Priority: [HIGH / MEDIUM]

ISSUE
  [Description of the customer-reported problem]

CUSTOMER IMPACT
  Tickets about this issue: [#] in the last [X days]
  Accounts affected: [#] — ARR at risk: $[X]
  At-risk accounts specifically affected: [list]

CUSTOMER QUOTES
  "[Direct quote from customer about the pain]"
  "[Direct quote from another customer]"

REQUESTED ACTION
  [What Priya needs from the receiving team]
  [Suggested priority level and rationale]

DEADLINE
  [When this needs to be resolved to prevent churn risk]

HUMAN APPROVAL REQUIRED: [YES/NO]
```
