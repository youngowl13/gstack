# Sasha Kovacs — Output Templates

---

## Template 1: STRIDE Threat Model

```
STRIDE THREAT MODEL
===================
System/Feature Under Review: _______________
Review Date: _______________
Reviewer: Sasha Kovacs (Security Agent)
Review Round: _______________

SCOPE
-----
In scope: _______________
Out of scope: _______________
Ambiguous (requires clarification): _______________

ASSET INVENTORY
---------------
| Asset | Sensitivity Class | Owner |
|-------|-----------------|-------|
| [e.g., user_email field] | [PII/PHI/PCI/Public] | [Engineering/Product] |

TRUST BOUNDARY MAP
------------------
[Describe or diagram the trust boundaries — which components trust each other,
which do not, and where authentication/authorization is enforced]

Boundary 1: _______________
Boundary 2: _______________
Boundary N: _______________

DATA FLOW ANALYSIS
------------------
| Flow # | Source | Destination | Data Sensitivity | Encrypted in Transit? | Authenticated? |
|--------|--------|-------------|-----------------|----------------------|----------------|
| 1 | | | | | |

STRIDE THREAT ENUMERATION
--------------------------

SPOOFING
Threat: _______________
Attack vector: _______________
Current control: _______________
Gap: _______________
Mitigation: _______________
CVSS estimate: ___/10
Risk level: [CRITICAL | HIGH | MEDIUM | LOW | INFO]

TAMPERING
Threat: _______________
Attack vector: _______________
Current control: _______________
Gap: _______________
Mitigation: _______________
CVSS estimate: ___/10
Risk level: [CRITICAL | HIGH | MEDIUM | LOW | INFO]

REPUDIATION
Threat: _______________
Attack vector: _______________
Current control: _______________
Gap: _______________
Mitigation: _______________
CVSS estimate: ___/10
Risk level: [CRITICAL | HIGH | MEDIUM | LOW | INFO]

INFORMATION DISCLOSURE
Threat: _______________
Attack vector: _______________
Current control: _______________
Gap: _______________
Mitigation: _______________
CVSS estimate: ___/10
Risk level: [CRITICAL | HIGH | MEDIUM | LOW | INFO]

DENIAL OF SERVICE
Threat: _______________
Attack vector: _______________
Current control: _______________
Gap: _______________
Mitigation: _______________
CVSS estimate: ___/10
Risk level: [CRITICAL | HIGH | MEDIUM | LOW | INFO]

ELEVATION OF PRIVILEGE
Threat: _______________
Attack vector: _______________
Current control: _______________
Gap: _______________
Mitigation: _______________
CVSS estimate: ___/10
Risk level: [CRITICAL | HIGH | MEDIUM | LOW | INFO]

RISK SUMMARY
------------
| Finding ID | STRIDE Category | CVSS | Risk Level | Status |
|-----------|----------------|------|-----------|--------|
| SEC-001 | | | | [OPEN | MITIGATED | ACCEPTED] |

OVERALL RECOMMENDATION
----------------------
[ ] CLEAR — No blocking findings. Advisory findings documented.
[ ] CONDITIONAL APPROVAL — Conditions: _______________
[ ] BLOCK — Reason: _______________

Sign-off: Sasha Kovacs | Date: _______________ | Next review: _______________
```

---

## Template 2: Vulnerability Report Card

```
VULNERABILITY REPORT CARD
==========================
Finding ID: SEC-___
Title: _______________
Date Identified: _______________
Identified By: _______________

CLASSIFICATION
--------------
OWASP Category: [A01-A10:2021]
STRIDE Category: [S|T|R|I|D|E]
CVSS Base Score: ___/10
CVSS Vector: AV:_/AC:_/PR:_/UI:_/S:_/C:_/I:_/A:_
Severity: [CRITICAL | HIGH | MEDIUM | LOW | INFO]
CVE Reference (if applicable): _______________

DESCRIPTION
-----------
What is the vulnerability?
_______________

Where exactly does it exist? (file, endpoint, component)
_______________

ATTACK SCENARIO
---------------
Attacker profile: _______________
Attack steps:
1. _______________
2. _______________
3. _______________
Result of successful attack: _______________

BLAST RADIUS
------------
Data exposed: _______________
Users affected (estimate): _______________
Regulatory implication: [ ] GDPR [ ] HIPAA [ ] PCI-DSS [ ] SOC2 [ ] None
Financial exposure: _______________
Reputational impact: _______________

REPRODUCTION STEPS
------------------
Prerequisites: _______________
Steps:
1. _______________
2. _______________
Evidence (screenshot/log): _______________

REMEDIATION
-----------
Recommended fix: _______________
Effort estimate: _______________
Compensating control (if full fix is delayed): _______________
Compensating control expiry date: _______________

STATUS TRACKING
---------------
Reported: _______________
Assigned to: _______________
Target resolution: _______________
Resolved: _______________
Verified by Sasha: _______________
```

---

## Template 3: Security Review Checklist

```
SECURITY REVIEW CHECKLIST
==========================
Feature/Release: _______________
Date: _______________

AUTHENTICATION & SESSION MANAGEMENT
[ ] Passwords hashed with bcrypt/argon2/scrypt (never MD5/SHA1 unsalted)
[ ] MFA available for privileged accounts
[ ] Session tokens are cryptographically random (128+ bits)
[ ] Session tokens expire (idle timeout + absolute timeout defined)
[ ] Session invalidated on logout
[ ] PKCE used for all OAuth2 flows (SPA/mobile)
[ ] No session tokens in URLs

AUTHORIZATION
[ ] Principle of least privilege applied to all roles
[ ] Authorization checked server-side (not client-side only)
[ ] Insecure direct object references protected (user can only access own resources)
[ ] Admin functions protected by role check, not just UI hiding
[ ] API endpoints enforce authorization on every request

INPUT VALIDATION & OUTPUT ENCODING
[ ] All user input validated server-side
[ ] SQL queries use parameterized statements (no string concatenation)
[ ] HTML output encoded to prevent XSS
[ ] File upload: type validation, size limits, stored outside webroot
[ ] XML/JSON parsing: entity expansion limits set (XXE prevention)

DATA PROTECTION
[ ] PII identified and classified
[ ] Data at rest encrypted (AES-256 or equivalent)
[ ] Data in transit encrypted (TLS 1.2+ enforced, TLS 1.0/1.1 disabled)
[ ] Encryption keys managed via KMS (not hardcoded)
[ ] Data minimization applied (only collect what is needed)
[ ] Retention policy defined and enforced

SECRETS MANAGEMENT
[ ] No secrets in source code
[ ] No secrets in environment variable files checked into version control
[ ] Secrets managed via secrets manager (Vault, AWS Secrets Manager, etc.)
[ ] Secret rotation policy defined

DEPENDENCY SECURITY
[ ] Dependency audit run against current lockfile
[ ] No known CRITICAL or HIGH CVEs in production dependencies
[ ] Outdated dependencies flagged for update schedule

LOGGING & MONITORING
[ ] Authentication events logged (success and failure)
[ ] Authorization failures logged
[ ] Sensitive data excluded from logs (no PII, no credentials)
[ ] Log tampering prevented (append-only, centralized)
[ ] Alerting configured for anomalous patterns

REGULATORY COMPLIANCE
[ ] GDPR lawful basis documented for all data collection
[ ] Privacy policy updated for any new data collection
[ ] Data subject rights implemented (access, deletion, portability)
[ ] DPA signed with all third-party processors
[ ] Breach notification process documented

OVERALL: [ ] CLEAR [ ] CONDITIONAL [ ] BLOCK
```

---

## Template 4: Incident Severity Matrix

```
INCIDENT SEVERITY MATRIX
========================

P0 — CRITICAL
-------------
Definition: Active breach confirmed or highly likely. Data exfiltration in progress
  or confirmed. Core authentication or authorization bypassed. Service fully
  compromised. Ransomware or destructive malware active.
Examples:
  - Confirmed database exfiltration
  - Admin credentials compromised and used by unauthorized party
  - Ransomware encrypting production data
  - Customer PII exposed publicly (e.g., open S3 bucket discovered)
Response:
  - Immediate escalation to human founder (< 5 minutes)
  - All hands: Sasha (lead), Engineering, Legal, CEO
  - Containment actions begin in parallel with escalation
  - GDPR 72-hour clock starts from first awareness
  - External communication: legal + CEO decide timing; Sasha advises on required disclosures
SLA: Containment within 1 hour. Status update every 30 minutes.

P1 — HIGH
---------
Definition: Credible evidence of compromise. Scope unclear. Confirmed exposure of
  PII or PHI at limited scale. Authentication or authorization bypassed for specific
  users. Active exploitation of a known vulnerability.
Examples:
  - Bug bounty report of working auth bypass (not yet confirmed exploited)
  - Logs showing unauthorized access to user records (limited scope)
  - Credential stuffing attack with confirmed successful logins
  - Production secret found in public GitHub repository
Response:
  - Escalate to human founder within 30 minutes
  - Sasha leads; Engineering engaged; Legal notified
  - Assess GDPR notification obligation within 4 hours
SLA: Containment within 4 hours. Root cause within 24 hours.

P2 — MEDIUM
-----------
Definition: Vulnerability confirmed, no evidence of active exploitation. Limited
  blast radius. Compliance gap identified. Third-party processor security incident
  (indirect exposure risk).
Examples:
  - Penetration test finding (CVSS 6.0-8.9) with no evidence of exploitation
  - Dependency with known HIGH CVE, no evidence of exploitation path in our usage
  - Misconfigured access control in non-production environment
  - Third-party vendor breach (assess if our data was in scope)
Response:
  - Human notified; not required to respond immediately
  - Sasha leads assessment; Engineering develops remediation plan
  - 72-hour window to determine if GDPR notification required
SLA: Assessment within 4 hours. Remediation plan within 48 hours. Resolution within 7 days.

P3 — LOW
--------
Definition: Security anomaly, near-miss, or low-severity finding. No confirmed
  vulnerability or exposure. Process gap identified.
Examples:
  - Failed intrusion attempt with no success
  - Low-CVSS dependency vulnerability with no clear exploit path
  - Security policy violation (e.g., developer accidentally committed a non-production
    secret that was immediately rotated)
  - Missing security header on non-sensitive endpoint
Response:
  - Log and track. Sasha reviews in next security review cycle.
  - No immediate escalation unless pattern suggests coordinated attack.
SLA: Review within 7 days. Resolution within 30 days.
```

---

## Template 5: Data Flow Diagram Review

```
DATA FLOW DIAGRAM REVIEW
========================
System: _______________
Review Date: _______________
DFD Version: _______________

DATA FLOWS INVENTORY
--------------------
| Flow ID | Source Component | Destination Component | Data Elements | Sensitivity | Encrypted? | Authenticated? | Notes |
|---------|-----------------|----------------------|---------------|-------------|-----------|----------------|-------|
| DF-001  |                 |                      |               |             |           |                |       |

EXTERNAL ENTITIES
-----------------
(Systems or actors outside the trust boundary)
| Entity ID | Description | Data Received | Data Sent | Trust Level |
|-----------|-------------|---------------|-----------|-------------|
| EE-001    |             |               |           | [Low|Med|High|Trusted] |

DATA STORES
-----------
| Store ID | Description | Data Elements | Classification | Encrypted at Rest | Access Controls | Retention |
|----------|-------------|---------------|----------------|-------------------|-----------------|-----------|
| DS-001   |             |               | [PII|PHI|PCI|Internal|Public] | | | |

TRUST BOUNDARY CROSSINGS
------------------------
For each point where data crosses a trust boundary:
| Crossing ID | From | To | Boundary Type | Authentication Method | Authorization Check | Audit Log |
|-------------|------|----|--------------|----------------------|---------------------|-----------|
| TB-001      |      |    | [Internal/External/Partner] | | | |

FINDINGS FROM DFD REVIEW
------------------------
| Finding | Flow/Store Affected | Risk | Recommendation |
|---------|--------------------|----|----------------|
| | | [CRITICAL|HIGH|MED|LOW] | |

THIRD-PARTY DATA PROCESSORS
---------------------------
| Processor | Data Shared | Purpose | DPA Signed? | Subprocessors Disclosed? |
|-----------|------------|---------|------------|--------------------------|
| | | | [Yes|No|Pending] | [Yes|No|N/A] |

REVIEW OUTCOME
--------------
[ ] DFD is accurate and complete
[ ] DFD requires updates (list): _______________
[ ] Security findings require remediation before approval
[ ] DFD approved for current release

Sign-off: Sasha Kovacs | Date: _______________
```
