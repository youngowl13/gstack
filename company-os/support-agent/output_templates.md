# Riley Morgan — Output Templates

This document contains all standard output templates Riley Morgan uses. Fill in bracketed fields with actual data.

---

## Template 1: Ticket Triage Classification

```
TICKET TRIAGE CLASSIFICATION
═══════════════════════════════════════════════════════════
Ticket ID:         [TICKET-XXXXX]
Date/Time:         [YYYY-MM-DD HH:MM UTC]
Triage Agent:      Riley Morgan (Support)
Classification:    [P0 / P1 / P2 / P3]
═══════════════════════════════════════════════════════════

CUSTOMER SUMMARY
Customer Name:     [Customer name or anonymous ID]
Account Tier:      [Enterprise / Growth / Starter / Free]
ARR:               [$ value if known, or "unknown"]
Ticket Age:        [X minutes / hours since submission]

ISSUE DESCRIPTION
Symptom:           [What the customer reported in plain language]
Affected Feature:  [Feature or component name]
Scope:             [Affects this customer only / multiple customers / all users]
Reproducible:      [Yes / No / Unknown]
Workaround:        [Available: [description] / None known]

CLASSIFICATION RATIONALE
[2-3 sentences explaining why this classification was chosen. Cite the classification criteria.]

ROUTING
Assigned to:       [Engineering / Product / Customer Success / Legal / Riley (self)]
Reason:            [Why this routing decision]
SLA Response Due:  [Timestamp based on SLA tier]

CUSTOMER COMMUNICATION
Status:            [Draft ready / Sent / Pending human approval / Holding]
Draft:             [Paste draft text or "See customer comms template below"]

ESCALATION
Required:          [Yes / No]
Escalation target: [Agent name or human]
Escalation reason: [Why escalation is needed]
═══════════════════════════════════════════════════════════
```

---

## Template 2: Support Escalation Memo

```
SUPPORT ESCALATION MEMO
═══════════════════════════════════════════════════════════
From:     Riley Morgan, Support Agent
To:       [Agent name(s) or Human]
Date:     [YYYY-MM-DD]
Priority: [P0 / P1 / P2]
Subject:  [One-line escalation summary]
═══════════════════════════════════════════════════════════

SITUATION
[2-3 sentences: what is happening, how long it has been happening, scope of impact]

CUSTOMER IMPACT
- Tickets filed (7-day): [N]
- CSAT on affected tickets: [X.X / 5.0]
- Enterprise accounts affected: [N accounts, $X ARR]
- Revenue at risk (estimated): [$X or "unknown"]
- Customer churn language in tickets: [Yes / No — if yes, quote count]

ESCALATION TRIGGER
[Specific rule that triggered this escalation — e.g., "3+ tickets, same root cause" or "P1 with no engineering response in 2 hours"]

WHAT I NEED FROM YOU
[Specific ask: a fix timeline, a root cause estimate, a policy exception, a customer callback, etc.]

DEADLINE
[When Riley needs a response to maintain SLA commitments or prevent further escalation]

SUPPORTING EVIDENCE
- Ticket IDs: [TICKET-XXX, TICKET-YYY, TICKET-ZZZ]
- Pattern ID (if applicable): [PAT-YYYY-MM-DD-NNN]
- Prior escalations on this issue: [None / Previous escalation date and outcome]

ACTION IF NO RESPONSE
[What Riley will do if no response is received by the deadline — e.g., escalate to human, re-raise in next planning session]
═══════════════════════════════════════════════════════════
```

---

## Template 3: Pattern Detection Report

```
PATTERN DETECTION REPORT
═══════════════════════════════════════════════════════════
Pattern ID:       PAT-[YYYY-MM-DD]-[NNN]
Date Filed:       [YYYY-MM-DD]
Filed by:         Riley Morgan, Support Agent
Status:           OPEN
═══════════════════════════════════════════════════════════

PATTERN SUMMARY
[One sentence: what is the repeating issue and what appears to cause it]

EVIDENCE BASE
Ticket count (7-day window): [N]
Tickets included in pattern: [TICKET-001, TICKET-002, TICKET-003, ...]
Feature/component affected:  [Name]
Customer segments affected:  [Enterprise / Growth / All / Specific segment]
First ticket in pattern:     [Date]
Most recent ticket:          [Date]

VOLUME TREND
[Is ticket volume growing, stable, or declining? Include daily counts if available]
  Day 1: [N tickets]
  Day 2: [N tickets]
  Day 3: [N tickets]
  Day 4: [N tickets]
  Day 5: [N tickets]
  Day 6: [N tickets]
  Day 7: [N tickets]

CUSTOMER IMPACT
Combined CSAT on pattern tickets: [X.X / 5.0 vs. baseline X.X]
Enterprise accounts in pattern:   [N accounts]
ARR exposed:                       [$X or "unknown"]
Churn language in tickets:         [Y tickets contain churn language]

ROOT CAUSE HYPOTHESIS
[Riley's hypothesis about what is causing the pattern. Label confidence: High / Medium / Low]
Hypothesis: [...]
Confidence: [High / Medium / Low]
Based on: [What evidence supports this hypothesis]

RECOMMENDED PRIORITY
[P0 / P1 / P2 — and why, based on ticket volume, customer impact, and escalation criteria]

ACTION REQUESTED
From Engineering: [Specific ask — root cause confirmation, fix timeline, workaround]
From Product:     [Specific ask — roadmap consideration, prioritization decision]
Response due:     [Timestamp]

PATTERN LIFECYCLE
- Filed: [Date]
- Engineering acknowledged: [Date or "Pending"]
- Root cause confirmed: [Date or "Pending"]
- Fix shipped: [Date or "Pending"]
- Volume returned to baseline: [Date or "Pending"]
- Pattern closed: [Date or "Open"]
═══════════════════════════════════════════════════════════
```

---

## Template 4: Customer Communication — P0 Initial Acknowledgment

```
Subject: Service Alert — We Are Aware and Actively Working on This

Dear [Customer Name],

We are writing to let you know that we have identified an issue affecting [brief, non-technical description of what is impacted]. We know this is affecting your ability to [what the customer cannot do], and we are treating this as our highest priority.

Our engineering team has been working on this since [time we detected the issue]. We will send you an update by [specific time — 1 hour from now].

What you can do right now: [Workaround if one exists — or "There is no workaround at this time. We recommend [alternative action if any]."]

We will not leave you without updates. You can expect to hear from us every [60 minutes] until this is resolved.

We are sorry for the disruption.

[Your name or team name]
Support Team

[Note: Send only after human approval. Do not include root cause speculation.]
```

---

## Template 5: Customer Communication — P1 Acknowledgment

```
Subject: We've Received Your Report — Here's What's Happening

Hi [Customer Name],

Thank you for reaching out. We can confirm we are aware of an issue with [feature name] and are actively investigating.

Current status: [One sentence on what we know so far — avoid technical jargon]
Expected update: By [specific time]
Workaround: [If available: "In the meantime, you can [workaround description]." If not: "We don't have a workaround yet, but we'll prioritize finding one."]

Ticket ID: [TICKET-XXXXX] — please reference this if you need to follow up.

We'll keep you posted as we learn more.

[Your name or team name]
Support Team
```

---

## Template 6: Customer Communication — P2 Acknowledgment

```
Subject: Thanks for Reporting — We're On It

Hi [Customer Name],

We received your report about [brief issue description] and we've logged it for investigation.

This issue is on our radar. Here's what we know: [Brief status — is it a known issue? Is there a fix in progress?]

In the meantime: [Workaround if available, or "We'll keep you updated as we investigate."]

Ticket ID: [TICKET-XXXXX]

We'll be in touch with an update within [48 hours / 1 week — based on P2 SLA].

Thanks for taking the time to let us know.

[Your name or team name]
Support Team
```

---

## Template 7: Customer Communication — P3 Acknowledgment

```
Subject: Got It — Thanks for the Feedback

Hi [Customer Name],

Thanks for flagging this. We've logged your report about [brief issue description].

[If it's a cosmetic issue:] This is something we're aware of, and it's on our product backlog. I can't give you a specific timeline, but your report helps us prioritize.

[If it's a feature request:] This is useful feedback. I've shared it with our product team. We can't commit to a timeline, but we track these requests and they inform our roadmap.

Ticket ID: [TICKET-XXXXX]

[Your name or team name]
Support Team
```

---

## Template 8: Weekly Support Metrics Report

```
WEEKLY SUPPORT METRICS REPORT
Week of: [YYYY-MM-DD to YYYY-MM-DD]
Generated by: Riley Morgan, Support Agent
═══════════════════════════════════════════════════════════

HEADLINE METRICS
  Tickets Opened:        [N] (vs. [N] prior week, [+/-X%])
  Tickets Closed:        [N] (vs. [N] prior week)
  CSAT (week avg):       [X.X / 5.0] (target: 4.2 | prior week: X.X)
  First Response Time:   [X.X hours avg] (target: 4 hrs)
  Resolution Rate:       [X%] (target: 85%)
  Repeat Contact Rate:   [X%] (target: <15%)

PRIORITY BREAKDOWN
  P0 incidents this week: [N]
  P1 incidents this week: [N]
  P2 tickets:             [N]
  P3 tickets:             [N]

TOP CATEGORIES BY VOLUME
  1. [Category]: [N tickets] ([X% of total])
  2. [Category]: [N tickets] ([X% of total])
  3. [Category]: [N tickets] ([X% of total])
  4. [Category]: [N tickets] ([X% of total])
  5. [Category]: [N tickets] ([X% of total])

PATTERN DETECTION
  New patterns filed: [N]
  Active open patterns: [N]
  Patterns resolved this week: [N]
  [List any new patterns with IDs]

ESCALATIONS
  Escalated to Engineering: [N]
  Escalated to Product: [N]
  Escalated to CS: [N]
  Escalated to Legal: [N]
  Escalated to Human: [N]

ENTERPRISE ACCOUNT FLAGS
  [List any enterprise accounts that had notable support interactions this week]

NOTABLE ANOMALIES
  [Any CSAT dips, volume spikes, new patterns, unusual escalation rates — with brief analysis]

NEXT WEEK WATCH LIST
  [What Riley is monitoring heading into next week — patterns to track, tickets to close, metrics to watch]
═══════════════════════════════════════════════════════════
```

---

## Template 9: Handoff to Customer Success

```
SUPPORT → CUSTOMER SUCCESS HANDOFF
═══════════════════════════════════════════════════════════
Handoff Date:    [YYYY-MM-DD]
From:            Riley Morgan, Support
To:              [CS Agent name], Customer Success
Priority:        [High / Medium / Low]
═══════════════════════════════════════════════════════════

CUSTOMER SUMMARY
Customer:        [Name]
Account Tier:    [Enterprise / Growth / Starter]
ARR:             [$X]
Relationship:    [How long they've been a customer]

SUPPORT HISTORY
Total tickets (90 days): [N]
Recent tickets: [List 3-5 most recent with ticket IDs and one-line summaries]
CSAT on recent tickets: [X.X / 5.0]
Unresolved issues: [Any open tickets or outstanding items]

REASON FOR HANDOFF
[Why CS needs to be involved. Options: churn risk, positive expansion opportunity, ongoing relationship issue, high-touch account needing proactive outreach, post-incident follow-up]

CHURN RISK SIGNALS
[Yes / No. If yes: what language has the customer used? What is the timeline risk?]

RECOMMENDED ACTION
[Specific ask from CS: schedule a call, send an apology, offer a concession, etc.]

NOTES
[Any context that will help CS have a better conversation with this customer]
═══════════════════════════════════════════════════════════
```
