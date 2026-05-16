# Eva Torres — Lessons Learned

## Purpose

This file is Eva's institutional legal memory. Every time a legal review identifies an issue, a contract creates unexpected obligations, a compliance gap is discovered, or outside counsel corrects Eva's analysis, the lesson is logged here. Eva reads this file at the start of every legal-risk-review workflow and references it when a similar situation arises.

**Format for new entries:**
```
## [Date] — [Brief title]
Situation: [what happened]
Eva's initial assessment: [what Eva flagged or missed]
Actual legal outcome: [what the law or a court said]
Lesson: [what changed in Eva's review process]
Tags: [#gdpr #ccpa #contract #employment #ip #opensourcelicense #hipaa #other]
```

---

## Lesson Log

### [Template Entry] — Uncapped Liability in Customer Contract

**Situation:** A customer contract was submitted for signature with an unlimited indemnification clause. Commercial pressure to close the deal was high. The sales team argued that the customer would never enforce it.

**Eva's initial assessment:** Eva flagged it as HIGH risk and blocked signature.

**Actual legal outcome:** The liability cap redline was accepted by the customer's legal team within 24 hours. The deal closed. Eva's block cost one day, not the deal.

**Lesson:** Commercial urgency almost never prevents a counterparty from accepting reasonable liability limitations. Legal teams understand these terms. "The customer won't enforce it" is not a legal defense. Enforce the block; accept the one-day delay.

**Tags:** #contract #liability

---

### [Template Entry] — Auto-Renewal Contract Not Tracked

**Situation:** A SaaS vendor contract auto-renewed for $18,000 annually without anyone noticing the renewal date had passed. The cancellation window was 60 days before renewal. When discovered, the company was committed to a full year of fees for a tool they had stopped using.

**Eva's initial assessment:** N/A — this contract was signed before Eva's review was part of the process.

**Actual legal outcome:** The company was contractually obligated to pay the full annual fee. No recovery.

**Lesson:** Eva now maintains a contract renewal calendar. Every contract with auto-renewal provisions is logged with: (1) renewal date, (2) cancellation notice deadline (renewal date minus notice period), (3) annual value, (4) current usage status. 60 days before the cancellation deadline, Eva flags it as RENEWAL DECISION REQUIRED in the daily-briefing workflow. Human decision required: renew, renegotiate, or cancel.

**Tags:** #contract #auto-renewal

---

### [Template Entry] — Open Source AGPL Library in Production

**Situation:** Engineering added an AGPL-licensed library to the backend codebase without a license review. The library was discovered during a SOC 2 audit preparation. The AGPL license requires that any software incorporating AGPL code and distributed over a network must make its source code available under AGPL — which would have required open-sourcing the entire product.

**Eva's initial assessment:** Eva had not been part of the library adoption decision (no review process existed at the time).

**Actual legal outcome:** Engineering replaced the library with a compatible MIT-licensed alternative before any distribution occurred. No legal exposure materialized, but the close call triggered a new process.

**Lesson:** Eva now reviews open-source library licenses as part of the release-readiness workflow for any new library added to production code. She maintains a license classification list: permissive (MIT, Apache 2.0 — use freely), weak copyleft (LGPL — use with care), strong copyleft (GPL — assess use carefully), network copyleft (AGPL — almost always incompatible with commercial SaaS). Engineering must get license clearance before any library is added to production.

**Tags:** #opensourcelicense #ip #engineering

---

### [Template Entry] — Contractor Misclassification Risk in California

**Situation:** A "contractor" was engaged full-time, exclusively for the company, using company equipment, with company email, for 14 months. California's ABC test was not applied at engagement start.

**Eva's initial assessment:** The engagement began before Eva's involvement. When she reviewed it, she classified it as HIGH misclassification risk under California's ABC test (Dynamex/AB5 framework). All three prongs of the ABC test were failing: the person was not free from control, not doing work outside the company's usual course of business, and not independently established in the same trade.

**Actual legal outcome:** The engagement was restructured as employment with back-pay for benefits, statutory vacation accrual, and payroll tax adjustments. Significant cost, no litigation.

**Lesson:** Eva now applies the ABC test at the start of every contractor engagement, not retroactively. She flags any contractor engagement that: (1) exceeds 6 months, (2) is exclusive to the company, (3) uses company equipment, or (4) involves the company's core product work. Any engagement with more than one of these indicators is flagged as HIGH misclassification risk and escalated to outside employment counsel before the engagement begins.

**Tags:** #employment #misclassification #california

---

### [Template Entry] — Privacy Policy Did Not Cover New Analytics Tool

**Situation:** Engineering added a third-party analytics tool (full-session recording with heatmaps) that captured user keystrokes and mouse movements. The privacy policy described analytics as "aggregate, anonymous usage data." Full-session recording is not aggregate or anonymous. A GDPR-compliant user noticed the discrepancy between the privacy policy disclosure and the actual data collected and filed a complaint.

**Eva's initial assessment:** Eva had not reviewed the analytics tool adoption because it was added as a "quick integration" without a legal review trigger.

**Actual legal outcome:** The company removed the full-session recording feature while privacy policy updates and DPA review were completed. No regulatory fine, but the incident triggered an audit of all third-party tools and their data collection practices.

**Lesson:** Eva now reviews any new analytics, tracking, or monitoring tool before it is added to production, regardless of how "quick" the integration is. The release-readiness checklist now includes: "Does this release add any new analytics, tracking, logging, or user behavior monitoring tool? If yes, privacy review required." The review specifically checks: does the current privacy policy accurately describe what this tool collects? Does the tool have a compliant DPA?

**Tags:** #gdpr #privacy #analytics

---

### [Template Entry] — IP Ownership Not Assigned from Contractor

**Situation:** A contractor built a key feature over 3 months. The contractor agreement included a confidentiality clause and a statement of work but no IP assignment clause. When the contractor relationship ended, the contractor raised a question about IP ownership of the code they wrote.

**Eva's initial assessment:** Eva had reviewed this contractor agreement and flagged the missing IP assignment. The flag was waived due to urgency at the time.

**Actual legal outcome:** The contractor's attorney argued ownership claim. The dispute was resolved through a negotiated IP assignment agreement signed by the contractor for nominal consideration. No litigation, but legal fees and delay.

**Lesson:** Eva now treats IP assignment as a blocking condition for any contractor agreement. There are no exceptions. The language Eva requires: "All works of authorship, inventions, discoveries, improvements, processes, designs, and other work product created by Contractor in connection with this Agreement are works made for hire to the maximum extent permitted by law. To the extent any such work product is not deemed a work made for hire, Contractor hereby assigns all right, title, and interest, including all intellectual property rights, to Company." This language must be present before any contractor begins work.

**Tags:** #ip #contract #contractor #employment

---

### [Template Entry] — Data Breach Notification Window Missed

**Situation:** A potential data breach was discovered internally. The security team treated it as an internal technical matter and spent 5 days investigating before informing Eva. GDPR Article 33 requires notification to the supervisory authority within 72 hours of becoming aware of a breach.

**Eva's initial assessment:** By the time Eva was notified, the 72-hour notification window had passed.

**Actual legal outcome:** The company self-reported the late notification to the supervisory authority. The breach was assessed as low severity (no sensitive data, limited scope). A formal warning was issued. No fine due to voluntary disclosure and low impact.

**Lesson:** Eva now requires that any potential security incident involving personal data be flagged to her simultaneously with the security team's investigation — not after the investigation concludes. The 72-hour GDPR clock starts when the company "becomes aware," not when the investigation is complete. The incident response playbook now includes as step 1: "If personal data may be involved, notify Eva Torres immediately." Eva triages the notification obligation in parallel with the technical investigation.

**Tags:** #gdpr #breach-notification #security #incident-response

---

## Compliance Issue Tracker

Eva maintains a list of open compliance issues identified through reviews, audits, and lessons learned:

| Date Identified | Issue | Severity | Owner | Deadline | Status |
|----------------|-------|---------|-------|---------|--------|
| [date] | [issue description] | [LOW/MED/HIGH/CRIT] | [owner] | [date] | [OPEN/IN PROGRESS/CLOSED] |

Eva reviews this tracker in every legal-risk-review workflow and updates it as issues are resolved.

---

## Outside Counsel Engagements Log

When Eva recommends outside counsel, the engagement is logged here with outcomes:

| Date | Matter | Counsel Type | Firm (if known) | Outcome | Eva's analysis accuracy |
|------|--------|-------------|----------------|---------|------------------------|
| [date] | [matter] | [employment/IP/privacy/contract/securities] | [firm] | [outcome] | [CONFIRMED / PARTIALLY CONFIRMED / CORRECTED — note what changed] |

Eva uses this log to calibrate her confidence levels. If outside counsel consistently confirms her analysis, her confidence in similar matters increases. If counsel corrects her analysis, she updates her knowledge base and notes the correction in the relevant lesson entry.
