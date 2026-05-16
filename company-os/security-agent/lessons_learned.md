# Sasha Kovacs — Lessons Learned

## Purpose

This document captures security incidents, near-misses, and findings where the outcome revealed something worth remembering. Lessons learned are not blame documents. They are calibration tools. Each entry answers: what happened, what we missed, what we changed, and what to watch for next time.

Every P1+ incident generates a mandatory lessons learned entry. P2 incidents generate an entry at Sasha's discretion. Near-misses that would have been P1+ if not caught early always generate an entry — those are the most valuable lessons.

---

## Entry Format

```
LESSON LEARNED
==============
ID: LL-[YEAR]-[SEQ]
Date: [when the incident or finding occurred]
Severity: [P0 | P1 | P2 | Near-miss]
Category: [Authentication | Authorization | Dependency | Secrets | Data Exposure | Configuration | Supply Chain | Social Engineering | Other]
OWASP Category: [A0X:2021 or API-X:2023]
Written By: Sasha Kovacs
Reviewed By: [human founder name]
Status: [Draft | Reviewed | Published]

WHAT HAPPENED
-------------
[2-4 sentences. What was the incident or finding? When was it discovered? Who discovered it?]

ROOT CAUSE
----------
[The specific technical or process failure that enabled the incident. Not "human error" — what
specific condition made the error possible?]

WHAT WE MISSED
--------------
[What should have caught this earlier? Was there a control that wasn't in place? Was there a
signal that was available but not acted on? Was there a process gap?]

BLAST RADIUS (ACTUAL OR POTENTIAL)
-----------------------------------
[If exploited/realized: what was the actual or potential impact? Data exposed, users affected,
regulatory implication, financial exposure.]

WHAT WE CHANGED
---------------
[Specific, actionable changes made in response. Not vague intentions — real changes with owners
and completion dates.]
1. [Change 1] — Owner: ___ — Completed: ___
2. [Change 2] — Owner: ___ — Completed: ___

DETECTION IMPROVEMENT
---------------------
[How would we detect this faster next time? New monitoring rule, new scan, new checklist item.]

WATCHLIST
---------
[What patterns should trigger extra scrutiny in future reviews? What is the generalized
version of this lesson?]
```

---

## Example Entry 1: Unrotated Third-Party API Key

```
LESSON LEARNED
==============
ID: LL-2025-001
Date: 2025-03-14
Severity: Near-miss (would have been P1 if key had been exploited)
Category: Secrets
OWASP Category: A05:2021 — Security Misconfiguration
Written By: Sasha Kovacs
Reviewed By: [Founder]
Status: Published

WHAT HAPPENED
-------------
During a routine pre-release secret scan, TruffleHog detected a Stripe API key in a
commit from 8 months prior. The key was in a test fixture file that was committed during
early development and never removed. The key had never been rotated. It was a live
production key with full charge and refund capabilities.

The key was discovered 6 hours before a scheduled product launch. The launch was paused,
the key was rotated, access logs were reviewed, and the launch proceeded 4 hours later
with no evidence of exploitation.

ROOT CAUSE
----------
The key was committed before the team had secret scanning configured in CI. It predated
the security review process. The file it lived in (test/fixtures/payments.json) was
not in the obvious location for a secrets scan to catch, and manual review of that
directory was not part of the release checklist at the time.

WHAT WE MISSED
--------------
Secret scanning was not configured as a CI gate — it was a manual step in the release
checklist. Manual steps get skipped under launch pressure. The test fixtures directory
was not included in the scan scope because the assumption (wrong) was that test fixtures
contain only fake data.

BLAST RADIUS (ACTUAL OR POTENTIAL)
-----------------------------------
Stripe key with full charge + refund capabilities. Potential: fraudulent charges to
customer payment methods, fraudulent refunds to attacker-controlled accounts. Financial
exposure: uncapped, limited only by account charge limits. Regulatory: PCI-DSS incident
if cardholder data had been accessed via the Stripe key (not confirmed).

WHAT WE CHANGED
---------------
1. Secret scanning (Gitleaks) added as a mandatory CI gate — fails the build on any
   detected secret. Owner: Engineering. Completed: 2025-03-15.
2. Historical scan of all git history (back to first commit) for all repositories.
   Found 0 additional live secrets; found 2 additional already-rotated secrets (documented).
   Owner: Sasha + Engineering. Completed: 2025-03-17.
3. Test fixtures directory explicitly included in scan scope via .gitleaks.toml config.
   Owner: Engineering. Completed: 2025-03-15.
4. Added "Secrets scan CI gate passing" to release readiness checklist as a verified
   (not manual) gate. Owner: Sasha. Completed: 2025-03-15.
5. Secret rotation policy documented: all API keys must be rotated on a 90-day schedule,
   tracked in the secrets manager rotation config. Owner: Sasha + Engineering. Completed: 2025-03-22.

DETECTION IMPROVEMENT
---------------------
The CI gate is the detection improvement. Any future secret committed to any branch will
fail the build immediately, before it can be merged to main. The 8-month gap would be
reduced to the next build cycle (< 5 minutes in CI).

WATCHLIST
---------
- Test fixture files are as dangerous as production configuration files when they contain
  real credentials. Review any file with "test," "fixture," "seed," or "example" in its
  name during security reviews.
- "This is just for testing" is not a justification for using real production credentials.
  Test environments must use test-mode API keys, never production keys.
- Manual checklist items under launch pressure are unreliable. Any security control that
  matters must be automated.
```

---

## Example Entry 2: Authorization Bypass via Mass Assignment

```
LESSON LEARNED
==============
ID: LL-2025-002
Date: 2025-07-02
Severity: P1
Category: Authorization
OWASP Category: API3:2023 — Broken Object Property Level Authorization
Written By: Sasha Kovacs
Reviewed By: [Founder]
Status: Published

WHAT HAPPENED
-------------
A bug bounty researcher reported that the user profile update endpoint (PATCH /api/v1/users/:id)
accepted a "role" field in the request body and applied it directly to the user record. By
including {"role": "admin"} in a profile update request, any authenticated user could
self-elevate to admin. The researcher demonstrated successful admin self-elevation in the
staging environment and responsibly disclosed without exploiting production.

Sasha conducted an access log review of the production environment covering the 90 days
since the endpoint was deployed. No evidence of exploitation was found. The endpoint was
patched within 2 hours of the report. The bug bounty award was paid within 24 hours.

ROOT CAUSE
----------
The user model used an ORM (Sequelize) with a bulk update method that accepted any field
present in the request body. The endpoint had no allowlist of updatable fields — it
passed the entire request body to the ORM's update method. The "role" field was in the
user schema and therefore was updated when included in the request body.

This is a classic mass assignment vulnerability. It predates the current security review
process — the endpoint was written in the pre-process era of the codebase. The security
review process introduced 4 months ago would have caught this; it was not backfilled to
existing endpoints.

WHAT WE MISSED
--------------
The security review process was applied to new endpoints only. Existing endpoints were
not retroactively reviewed. There was no mechanism to identify which existing endpoints
were "pre-process" and therefore unreviewed.

Additionally, the STRIDE threat model for the user profile feature (done at PRD stage,
before the security review process existed) did not include an Elevation of Privilege
analysis for the update endpoint. The EoP category was analyzed for the authentication
system but not for the user data model's writable fields.

BLAST RADIUS (ACTUAL OR POTENTIAL)
-----------------------------------
Any authenticated user could become an admin. Admin access in our system grants: read
access to all user records (including PII), ability to trigger refunds, ability to
modify other users' data. If exploited at scale: full account takeover of any user,
complete PII exposure, financial fraud via unauthorized refunds. GDPR Article 33
notification would have been required if any accounts were compromised.

WHAT WE CHANGED
---------------
1. Immediate patch: allowlist of updatable fields implemented on all user-facing update
   endpoints. Only explicitly permitted fields are accepted; all others are silently
   ignored (not rejected — to avoid enumeration). Owner: Engineering. Completed: 2025-07-02.
2. Audit of all existing PATCH/PUT endpoints for mass assignment. Found 1 additional
   affected endpoint (organization settings). Patched. Owner: Engineering. Completed: 2025-07-05.
3. ORM configuration: disabled bulk assignment from request body by default. All models
   now require explicit `fields` or `allowedFields` in update calls. Owner: Engineering.
   Completed: 2025-07-08.
4. Security review backfill: all existing PATCH/PUT/POST endpoints added to the security
   review queue. Reviews to be completed before next release gate. Owner: Sasha.
   Target: 2025-07-30.
5. STRIDE template updated: Elevation of Privilege section now explicitly includes "can
   a user modify their own privilege level via a writable field?" as a required question
   for all user model update endpoints. Owner: Sasha. Completed: 2025-07-03.

DETECTION IMPROVEMENT
---------------------
Added "Mass assignment protection" as a checklist item in the Security Review Checklist
under Authorization section. Added a Semgrep rule to detect Sequelize bulk update calls
without an explicit `fields` restriction — this runs in CI and fails on violation.

WATCHLIST
---------
- Mass assignment is a solved problem with a solved solution (allowlists). But it requires
  explicit discipline — ORMs that allow it by default will allow it unless you say otherwise.
  Treat it as an opt-in-to-safety control, not opt-in-to-unsafe.
- Bug bounty programs find things the security review process misses. Fund them generously.
  A $500 bounty for a P1 finding is the best money ever spent. The alternative is paying
  for the breach.
- Security review processes applied to new code only leave a "legacy debt" of unreviewed
  endpoints. When introducing a security review process, immediately audit what predates it.
  Build the backfill into the roadmap.
```

---

## Lessons Summary Table

| ID | Date | Severity | Category | One-Line Summary |
|----|------|----------|----------|-----------------|
| LL-2025-001 | 2025-03-14 | Near-miss | Secrets | Production Stripe key committed to test fixture 8 months prior; caught by pre-launch secret scan |
| LL-2025-002 | 2025-07-02 | P1 | Authorization | Mass assignment on user update endpoint allowed any user to self-elevate to admin; found by bug bounty |

---

## Standing Instructions for New Entries

When a P1+ incident occurs or a near-miss is identified:
1. Sasha drafts the entry within 48 hours of resolution
2. The entry is reviewed by the human founder
3. "WHAT WE CHANGED" items must have owners and completion dates — no open-ended commitments
4. The Watchlist items are added to Sasha's standard review checklist immediately, before the entry is published
5. The entry is referenced in the post-incident report
6. The entry is reviewed in the next security planning cycle to verify that all changes were completed
