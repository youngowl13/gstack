# Eva Torres — Output Templates

All Eva Torres outputs use her MiroFish tag: `[EVA TORRES | LEGAL | ROUND X | CONFIDENCE Y%]`

---

## Template 1: Risk Assessment Memo

Used in: legal-risk-review (primary output), any workflow where a legal risk is identified

```
[EVA TORRES | LEGAL | RISK ASSESSMENT MEMO]
Date: [DATE]
Matter: [Brief description of what is being reviewed]
Requested by: [Agent or person who triggered the review]

=== RISK SUMMARY ===
Overall risk level: [LOW / MEDIUM / HIGH / CRITICAL]
Primary jurisdiction: [US-[state] / EU / UK / multi-jurisdiction]
Applicable frameworks: [GDPR / CCPA / SOC2 / HIPAA / Employment / Contract / IP / Other]
Outside counsel required: [YES — [type of counsel] / NO]
Human approval required: [YES / NO]
Proceed as-is: [YES / NO / CONDITIONAL]

=== MATTER DESCRIPTION ===
What is being reviewed:
  [Specific document, feature, decision, or situation]

Parties involved:
  [Company, customer, vendor, employee, etc.]

Jurisdiction and governing law:
  [Which law(s) apply and why]

=== LEGAL ANALYSIS ===
Obligations created:
  1. [Obligation 1 — what the company must do or refrain from doing]
  2. [Obligation 2]
  ...

Exposure if breached:
  Financial: [dollar exposure or "unlimited" if uncapped]
  Regulatory: [specific regulatory penalty range]
  Reputational: [LOW / MEDIUM / HIGH]

Identified issues:
  Issue 1: [Specific legal issue]
    Severity: [LOW / MEDIUM / HIGH / CRITICAL]
    Legal basis: [Regulation, statute, or case law]
    Recommended fix: [Specific remediation]
  
  Issue 2: [Same structure]

=== CONDITIONS FOR APPROVAL ===
This matter may proceed when the following conditions are met:
  [ ] Condition 1: [Specific action required]
  [ ] Condition 2: [Specific action required]
  [ ] Condition 3: [If none, state "No conditions — low risk, proceed with documentation"]

=== DOCUMENTATION REQUIRED ===
Before proceeding, the following documents must exist:
  [ ] [Document 1 — what it is and who signs it]
  [ ] [Document 2]

=== EVA'S RECOMMENDATION ===
[APPROVE / APPROVE WITH CONDITIONS / HOLD PENDING REMEDIATION / ESCALATE TO COUNSEL / BLOCK]

Reasoning: [2-3 sentences explaining the recommendation]

If this is overridden: [What Eva recommends the override documentation contain]

Confidence: [X%]
Basis for confidence level: [Why this confidence — well-established law vs. gray area]
```

---

## Template 2: Contract Redline Checklist

Used in: sales-outreach, any contract review

```
[EVA TORRES | LEGAL | CONTRACT REDLINE CHECKLIST]
Date: [DATE]
Contract: [Name/description of contract]
Counterparty: [Name]
Contract value: $[X] ([one-time / monthly / annual])
Governing law: [Jurisdiction]

=== BASIC TERMS REVIEW ===
  [ ] PASS — Parties identified with correct legal entity names
  [ ] PASS — Signatories have documented authority to bind entity
  [ ] PASS — Governing law clause present and acceptable
  [ ] PASS — Dispute resolution mechanism defined
  [ ] FLAG — [Any issues found]

=== COMMERCIAL TERMS REVIEW ===
  [ ] PASS — Fees match sales proposal
  [ ] PASS — Payment terms: [net-30 / upfront / other]
  [ ] PASS/FLAG — Auto-renewal: [not present / present with [N]-day cancellation notice]
  [ ] PASS/FLAG — Price escalation: [not present / present — capped at [X]%]

=== SERVICE COMMITMENT REVIEW ===
  Uptime SLA:
    Stated commitment: [X]%
    Infrastructure guarantee: [Y]%
    Assessment: [PASS — within guarantee / REDLINE REQUIRED — exceeds guarantee]
    Required change: [If redline required]
  
  Support commitment:
    Stated: [What the contract says]
    Achievable: [YES / NO — reasoning]
    Required change: [If any]

=== LIABILITY REVIEW ===
  Liability cap:
    Present: [YES / NO]
    Amount: [$X / "unlimited"]
    Assessment: [PASS — adequate cap / REDLINE REQUIRED — no cap or inadequate]
    Minimum acceptable: 12 months of fees paid
    Required change: [Specific cap amount and language]
  
  Consequential damages:
    Excluded: [YES / NO]
    Assessment: [PASS / REDLINE REQUIRED]
    Required language: "Neither party shall be liable for consequential,
      incidental, indirect, or punitive damages..."
  
  Indemnification:
    Scope: [What is covered]
    Assessment: [PASS — bounded / REDLINE — overbroad]
    Required change: [If any]
  
  Force majeure:
    Present: [YES / NO]
    Assessment: [PASS / ADD REQUIRED]

=== DATA AND IP REVIEW ===
  Customer data ownership:
    Assessment: [PASS — customer owns data / REDLINE — unclear or company owns]
  
  IP ownership of work product:
    Assessment: [PASS — company retains IP / REDLINE — customer claims IP]
  
  Data Processing Agreement:
    Required: [YES — customer is in EU or processes EU data / NO]
    Present: [YES / NO — must be attached if required]
  
  Subprocessor provisions:
    Assessment: [PASS / REDLINE — overly restrictive change process]

=== TERMINATION REVIEW ===
  Termination for cause: [PASS / FLAG]
  Termination for convenience: [PASS — both parties / FLAG — only customer has right]
  Data return/deletion at termination: [PASS / FLAG — must be defined]
  Post-termination obligations: [PASS / FLAG]

=== REDLINE SUMMARY ===
  BLOCK items (must be changed before signature):
    1. [Item — specific proposed language]
    2. [Item — specific proposed language]
  
  RECOMMENDED items (strongly preferred but not blocking):
    1. [Item]
    2. [Item]
  
  ACCEPTABLE items (Eva's notes but not blocking):
    1. [Item]

=== OVERALL ASSESSMENT ===
  Signature status: [APPROVED / APPROVED AFTER REDLINES / BLOCK — [specific reason]]
  Human approval required: YES — all contracts require human signature authorization
  Outside counsel recommended: [YES — [specific question for counsel] / NO]

Eva's signature line: ______________________________ Date: __________
```

---

## Template 3: Data Processing Agreement Review

Used in: any workflow where a vendor handles personal data

```
[EVA TORRES | LEGAL | DPA REVIEW]
Date: [DATE]
Vendor: [Name]
Data processed: [Types of personal data vendor will access]
Processing purpose: [Why the vendor needs this data]
Data subjects: [Whose data — customers, employees, users]

=== GDPR ARTICLE 28 COMPLIANCE CHECK ===
(Required for all processing of EU personal data)

Core requirements:
  [ ] Vendor processes data only on company's documented instructions
  [ ] Vendor does not use data for its own purposes
  [ ] Confidentiality obligations on persons authorized to process
  [ ] Appropriate technical and organisational security measures
  [ ] Vendor assists with data subject rights requests
  [ ] Vendor deletes or returns all data at end of service
  [ ] Vendor provides cooperation for audits and inspections
  [ ] Vendor notifies of security incidents promptly

Sub-processors:
  [ ] Sub-processor list provided
  [ ] Company has right to object to sub-processors
  [ ] Sub-processors bound by same obligations

=== CROSS-BORDER TRANSFER CHECK ===
Vendor location: [Country]
Data subjects location: [Country/region]
Transfer required: [YES / NO]

If transfer from EU to non-adequate country:
  Transfer mechanism: [Standard Contractual Clauses / Binding Corporate Rules / Adequacy decision / Other]
  SCCs version: [2021 SCCs (current) / legacy (must update) / not present (BLOCK)]
  Assessment: [COMPLIANT / NON-COMPLIANT — remediation required]

=== SECURITY REQUIREMENTS ===
  Encryption at rest: [CONFIRMED / NOT CONFIRMED]
  Encryption in transit: [CONFIRMED / NOT CONFIRMED]
  Access controls: [DOCUMENTED / NOT DOCUMENTED]
  Incident notification timeline: [X hours — GDPR minimum: 72 hours to company]

=== RETENTION AND DELETION ===
  Retention period: [X days/months after end of service]
  Deletion mechanism: [Described / NOT DESCRIBED — must be defined]
  Deletion confirmation: [PROVIDED / NOT PROVIDED — request required]

=== ASSESSMENT ===
  DPA status: [COMPLIANT / NON-COMPLIANT — issues listed below]
  Issues requiring remediation:
    1. [Issue and required fix]
    2. [Issue and required fix]
  
  Approval status: [APPROVED / BLOCK pending remediation]
  Human approval required: YES — DPA approval is a mandatory trigger
```

---

## Template 4: Privacy Policy Change Log

Used in: any modification to privacy policy or terms of service

```
[EVA TORRES | LEGAL | PRIVACY POLICY CHANGE LOG]
Date of change: [DATE]
Version: [X.X → X.Y]
Reviewed by: Eva Torres
Human approval: [NAME — DATE]

=== CHANGES MADE ===
  Section modified: [Section name and number]
  Previous language: [Quote exact previous text]
  New language: [Quote exact new text]
  Reason for change: [Why this was changed — new data type, regulatory requirement, etc.]
  Regulatory driver: [GDPR / CCPA / legal review / product change / other]

=== NOTIFICATION REQUIREMENT ===
  Material change: [YES / NO]
  Definition of material: Changes to data types collected, changes to how data is shared,
    changes to retention, changes to user rights, changes to security practices.
  
  If material change:
    User notification required: YES
    Method: [In-app notification / email / both]
    Notice period: [X days before change takes effect]
    Opt-out mechanism: [Required for material changes — describe]
    
  GDPR notification: [Required if change affects legal basis or data subject rights]
  CCPA notification: [Required if change affects rights or data sales]

=== VERSION CONTROL ===
  Previous version archived: [YES — location]
  Effective date: [DATE]
  
  Change history:
    Version [X.Y] — [DATE] — [Summary of changes in this version]
    Version [X.X] — [DATE] — [Summary of changes in prior version]
```

---

## Template 5: Regulatory Compliance Checklist

Used in: legal-risk-review, release-readiness, annual compliance review

```
[EVA TORRES | LEGAL | REGULATORY COMPLIANCE CHECKLIST]
Date: [DATE]
Frameworks in scope: [GDPR / CCPA / SOC 2 / HIPAA / PCI-DSS — check all applicable]

=== GDPR CHECKLIST ===
Lawful basis:
  [ ] Legal basis documented for each data processing activity
  [ ] Consent obtained where required (freely given, specific, informed, unambiguous)
  [ ] Legitimate interest assessment completed where applicable

Privacy notices:
  [ ] Privacy policy accurate and current
  [ ] Notice at collection provided at point of data collection
  [ ] Cookie notice / banner compliant (explicit consent for non-essential cookies)

Data subject rights:
  [ ] Right to access — process defined and tested
  [ ] Right to erasure — process defined and tested
  [ ] Right to portability — process defined and tested
  [ ] Right to restriction — process defined
  [ ] Rights response timeline: 30 days (with 60-day extension option)

Data Protection:
  [ ] Data Protection Officer appointed (if required — large scale processing or special categories)
  [ ] Record of Processing Activities (ROPA) maintained
  [ ] Data Protection Impact Assessment (DPIA) for high-risk processing

Security:
  [ ] Appropriate technical measures implemented (encryption, access controls)
  [ ] Organizational measures in place (policies, training, access reviews)
  [ ] Incident response plan includes 72-hour notification procedure

Processors:
  [ ] DPA signed with all data processors
  [ ] Sub-processor list current
  [ ] Cross-border transfer mechanisms in place

=== CCPA/CPRA CHECKLIST ===
  [ ] Privacy policy includes CCPA-required disclosures
  [ ] "Do Not Sell or Share My Personal Information" link present (if selling/sharing data)
  [ ] Right to know — process defined and tested
  [ ] Right to delete — process defined and tested
  [ ] Right to opt-out — mechanism implemented
  [ ] Sensitive personal information handling rules implemented
  [ ] Service provider agreements compliant

=== SOC 2 READINESS CHECKLIST ===
Security (required for all):
  [ ] Security policies documented and current
  [ ] Access control policy: least privilege, regular review
  [ ] Change management process documented
  [ ] Incident response plan documented and tested
  [ ] Vulnerability management process in place
  [ ] Employee security training documented

Availability (if in scope):
  [ ] Uptime monitoring in place
  [ ] Disaster recovery plan documented and tested
  [ ] SLA commitments documented

Confidentiality (if in scope):
  [ ] Data classification policy in place
  [ ] Encryption standards documented
  [ ] Customer data handling procedures documented

=== OVERALL STATUS ===
  GDPR compliance: [COMPLIANT / GAPS IDENTIFIED — see issues below]
  CCPA compliance: [COMPLIANT / GAPS IDENTIFIED / NOT APPLICABLE]
  SOC 2 readiness: [READY / GAPS IDENTIFIED / NOT APPLICABLE]
  HIPAA compliance: [COMPLIANT / GAPS IDENTIFIED / NOT APPLICABLE]

  Open issues:
    1. [Issue — severity — owner — deadline]
    2. [Issue — severity — owner — deadline]

  Human review required: [YES — if any CRITICAL gaps / NO]
```

---

## Template 6: Terms of Service Change Notice

Used in: any modification to terms of service

```
[EVA TORRES | LEGAL | TOS CHANGE NOTICE]
Date: [DATE]
Change type: [Material / Non-material]
Version: [X.X → X.Y]
Effective date: [DATE — minimum 30 days from notice for material changes]
Human approval: [NAME — DATE]

=== SUMMARY OF CHANGES ===
  Plain-language summary: [What changed and why, in terms a user can understand]
  
  Technical changes:
    Added: [New clauses or provisions]
    Modified: [Changed clauses with before/after]
    Removed: [Deleted provisions]
    Reorganized: [Structural changes without substantive modification]

=== LEGAL ASSESSMENT ===
  Material change: [YES / NO]
  Reason: [Why it is or is not material — affects user rights, obligations, or data handling]
  
  If material:
    User notification: [Required — method and timeline]
    Opt-out period: [X days — users who disagree may terminate without penalty]
    Continued use as acceptance: [After opt-out period, continued use constitutes acceptance]

=== AFFECTED USER POPULATIONS ===
  All users: [YES / NO]
  Specific plan/tier: [If only some users are affected]
  Geographic scope: [All / US only / EU only / other]

=== REGULATORY IMPLICATIONS ===
  GDPR: [No change / Requires re-consent for [specific processing] / Supervisory authority notification]
  CCPA: [No change / Updated disclosures required]
  Other: [Any other regulatory implications]

=== COMMUNICATION PLAN ===
  In-app notification: [YES / NO — timing]
  Email notification: [YES / NO — timing and audience]
  Blog post / public notice: [YES / NO]
  Regulatory notice: [YES / NO — which authority]
```
