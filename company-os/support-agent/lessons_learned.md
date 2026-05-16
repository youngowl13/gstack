# Riley Morgan — Lessons Learned

This file is a living record of lessons from support incidents, workflow runs, and multi-agent debates. Riley reads this file before every incident response and product planning session. Every lesson has an author, date, workflow context, and a confidence level.

The goal of this file is not to record history for its own sake. The goal is to make the next response better than the last one.

---

## How to Read This File

Entries are in reverse chronological order (newest first). Each entry has:
- **Date and workflow type**
- **What happened** (brief context)
- **What worked** (practices to repeat)
- **What failed** (practices to avoid or improve)
- **Recommendation** (specific, actionable)
- **Confidence** (High / Medium / Low — based on how certain we are the lesson generalizes)

---

## Lessons

### [YYYY-MM-DD] — Template Entry (Replace with First Real Lesson)

**What happened:** [Describe the incident, ticket pattern, or debate that generated this lesson]

**What worked:**
- [Practice 1 that was effective]
- [Practice 2 that was effective]

**What failed:**
- [Practice 1 that broke down — be specific about why]
- [Practice 2 that broke down]

**Recommendation:** [One or two sentences on what to do differently. Make it actionable enough that Riley can apply it immediately in the next similar situation.]

**Confidence:** [High / Medium / Low]

---

## Standing Lessons (Core Operating Principles)

These lessons have been validated across multiple incidents and should be treated as default operating assumptions unless a specific case contradicts them.

### L001 — Ticket spikes are product signals, not noise

**Context:** Recurring pattern across multiple support queues.

**Lesson:** When ticket volume on a specific feature doubles within a 7-day window, the root cause is almost always a product change (deployment, UX shift, policy change) or an external factor (market event, competitor action). Treating spikes as random noise delays diagnosis by an average of 3-5 days. Start root cause analysis immediately on any 2x spike.

**Confidence:** High

---

### L002 — First response time matters more than resolution time for CSAT

**Context:** Observed CSAT correlation across P1 and P2 ticket cohorts.

**Lesson:** Customers rate support experiences primarily on how quickly they felt heard, not how quickly the issue was resolved. A 1-hour first response with a 48-hour resolution scores higher on CSAT than a 6-hour first response with a 24-hour resolution. Prioritize acknowledgment speed above all other metrics.

**Confidence:** High

---

### L003 — Pattern detection at 3 tickets, not 10

**Context:** Post-mortems from multiple incidents that became large.

**Lesson:** Incidents that were caught early (3-ticket threshold) were resolved before enterprise accounts were affected in 80%+ of cases. Incidents that crossed the 10-ticket threshold before escalation consistently included at least one enterprise account. The cost of a false positive pattern detection is low (one unnecessary escalation memo). The cost of a missed pattern is high (enterprise churn, CSAT crater). Keep the threshold at 3.

**Confidence:** High

---

### L004 — Workarounds must be communicated proactively, not reactively

**Context:** P1 and P2 incidents where workarounds existed but were not shared with customers at first contact.

**Lesson:** When a workaround is available, customers who receive it in the first response call average 0.8 points higher CSAT than those who receive it only after asking. Send the workaround in the acknowledgment, not in a follow-up. If the workaround is complex, keep it to 3 steps maximum in the customer communication.

**Confidence:** High

---

### L005 — Escalation to engineering requires a reproducible case, not just a ticket

**Context:** Engineering escalations that were deprioritized due to vague bug reports.

**Lesson:** Engineering agents respond faster and more thoroughly when an escalation includes: the exact steps to reproduce the issue, the customer environment/configuration, and the expected vs. actual behavior. Vague escalations ("search is broken for some users") sit in queues. Reproducible cases get investigated. Riley should always attempt to assemble a minimal reproducible case before escalating to engineering.

**Confidence:** High

---

### L006 — CSAT scores lag the actual customer experience by 3-5 days

**Context:** Observed lag between incident resolution and CSAT survey returns.

**Lesson:** CSAT scores from a given incident typically arrive 3-5 days after resolution (based on survey send timing and customer response rates). This means CSAT will appear artificially low for several days after an issue is fixed, and will appear artificially high for several days into a new, undetected incident. Riley should not use CSAT as a leading indicator. Ticket volume and escalation rate are better leading indicators. CSAT is a lagging confirmation.

**Confidence:** Medium (depends on survey timing configuration)

---

### L007 — Enterprise accounts require a different communication cadence

**Context:** Enterprise account feedback from QBRs and CS handoff notes.

**Lesson:** Enterprise accounts expect to be contacted proactively by a named human during any P0 or P1 incident, not just via automated status emails. Riley should always flag enterprise accounts to CS during any P0/P1 so that a human can make a personal call or send a personal email. Automated-only communication for enterprise accounts during incidents consistently appears in churn reasons.

**Confidence:** High

---

### L008 — Internal debates are more credible when Riley brings ticket IDs, not just counts

**Context:** Product planning debates where product or engineering challenged Riley's data.

**Lesson:** Saying "47 customers reported this" is challenged with "are those really 47 distinct issues?" Saying "Ticket IDs TICKET-8841, TICKET-8902, TICKET-8951... (47 total, pattern ID PAT-2024-03-14-002)" is not challenged. Riley should always be prepared to provide ticket IDs in any debate where data is contested, not just aggregate counts.

**Confidence:** High

---

## Lessons to Validate

These are tentative lessons that need more data before being treated as standing principles.

### TL001 — P3 tickets that recur 3+ times from the same customer are actually P2s

**Context:** One incident where a customer who filed 4 P3 tickets churned without escalating. The 4th ticket was never connected to the first three.

**Tentative lesson:** A customer who contacts support 3+ times about the same underlying issue (even if each individual ticket qualifies as P3) is exhibiting a churn risk signal equivalent to P2 treatment. Flag for CS handoff.

**Confidence:** Low (single incident, needs validation)

---

*Note: This file is appended by Riley after each workflow. The Conductor and human operators may also append lessons to this file. All entries are timestamped and attributed.*
