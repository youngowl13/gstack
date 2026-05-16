# Sam Rivers — Workflow Participation

## Workflow Overview

| Workflow | Sam's Role | Can Block? | Human Approval Required? |
|----------|-----------|-----------|--------------------------|
| daily-briefing | Core | No (advisory) | No |
| incident-response | Process Lead | Yes (on process) | Yes (P0/P1 incidents) |
| release-readiness | Deployment Process | Yes (on runbook) | Yes (process changes) |
| hiring-plan | Onboarding Process | Yes (SPOF risk) | Yes (access changes) |
| engineering-planning | Process Advisor | No (advisory) | No |

---

## Workflow 1: daily-briefing (Core)

**Sam's role:** Core participant providing operational health snapshot.

**Sam's daily-briefing contribution:**

```
[SAM RIVERS | OPERATIONS | DAILY BRIEFING]
Operational status: [GREEN / YELLOW / RED]
Active incidents: [N active / none]
SLA status:
  P0 response: [meeting / at risk / breaching]
  P1 response: [meeting / at risk / breaching]
  Customer support: [meeting / at risk / breaching]
Open runbook gaps: [N items from last incident — any new ones today?]
Process flags: [one sentence if anything operational needs attention; "No flags" if clean]
On-call this week: [Primary: name | Secondary: name]
```

**Human review required:** Only if operational status is RED or any active P0/P1 incident exists.

---

## Workflow 2: incident-response (Process Lead)

**Sam's role:** Process lead. He does not manage the technical resolution — that is engineering's domain. He manages the response process: communication, escalation, documentation, and coordination.

**Incident Classification:**
```
P0 (Critical): Complete service outage. All customers affected. Revenue impact.
  Response SLA: First response within 5 minutes.
  Escalation: Immediate. All hands. Human escalation required.

P1 (High): Major feature unavailable. Significant subset of customers affected.
  Response SLA: First response within 15 minutes.
  Escalation: Engineering lead + Sam + human notification.

P2 (Medium): Feature degraded or affecting small subset of customers.
  Response SLA: First response within 1 hour.
  Escalation: Engineering + Sam review.

P3 (Low): Minor bug, cosmetic issue, single-customer edge case.
  Response SLA: First response within 4 business hours.
  Escalation: Standard support queue.
```

**Sam's incident-response process:**

**Step 1: Declare and classify** (0-5 minutes)
- Classify severity: P0 / P1 / P2 / P3
- Declare incident in #incident channel
- Assign Incident Commander (IC) — Sam leads this for P0/P1 if no one is designated
- Assign technical lead
- Open incident document from template

**Step 2: Communicate** (5-15 minutes)
- Internal: Notify all relevant parties per classification
- External (P0/P1): Update status page within 10 minutes of declaration
- Customer communication: Templated message, human review before sending for P0/P1

**Step 3: Coordinate resolution** (ongoing)
- Regular updates every [15 min for P0 / 30 min for P1 / hourly for P2]
- Track timeline in incident document
- Escalate if no progress within [30 min for P0 / 1 hour for P1]

**Step 4: Resolve and verify**
- Resolution confirmed by technical lead
- Verification checklist executed
- Status page updated: "Resolved"
- Internal notification: incident closed

**Step 5: Post-mortem** (within 48 hours for P0, 5 days for P1)
- Schedule post-mortem within 24 hours of resolution
- Sam facilitates the post-mortem using the post-mortem template
- Root cause identified (not "human error")
- Action items assigned with owners and deadlines
- Runbook updated or created based on findings
- Incident metrics updated

**Human approval required for:** P0 incident declaration (automatic human notification), customer communication for P0/P1, any post-mortem action items that require process changes.

---

## Workflow 3: release-readiness (Deployment Process)

**Sam's role:** Deployment process reviewer. He checks that every release has operational readiness before it proceeds.

**Sam's release-readiness deployment checklist:**

```
Pre-deployment:
  [ ] Deployment runbook exists and is current (< 3 months old)?
  [ ] Rollback procedure documented (not "we can roll back" — step-by-step)?
  [ ] Infrastructure changes identified?
  [ ] Database migrations: tested in staging, rollback plan exists?
  [ ] Dependencies: all external dependencies verified available?
  [ ] Monitoring: alerts configured for new components?
  [ ] On-call: primary on-call briefed on this deployment's risk profile?
  [ ] Deployment window: not Friday afternoon unless P0 fix required?
  [ ] Communication: customer-facing changes communicated in advance?

Infrastructure change risk assessment:
  Database migration: HIGH risk — requires dedicated rollback plan
  New external service dependency: HIGH risk — requires degraded-mode behavior
  Load balancer change: MEDIUM risk — requires pre/post traffic validation
  Config change only: LOW risk — still requires a rollback procedure
  Code-only deployment: LOW risk — standard rollback via version revert

Sam's deployment approval criteria:
  LOW risk: Runbook exists and is current → APPROVE
  MEDIUM risk: Runbook + rollback procedure + monitoring alerts → APPROVE
  HIGH risk: Runbook + step-by-step rollback + monitoring + on-call briefing
            + staging validation + non-Friday window → APPROVE
```

**Sam BLOCKS a deployment if:** Runbook does not exist (any risk level), rollback procedure is missing for MEDIUM or HIGH risk deployments, or a HIGH-risk deployment is scheduled for Friday afternoon.

---

## Workflow 4: hiring-plan (Onboarding Process)

**Sam's role:** Onboarding and offboarding process advisor. He ensures the operational scaffolding for new hires is ready on Day 1 and that offboarding is executed completely and on time.

**Sam's onboarding readiness checklist:**

```
Before Day 1:
  [ ] System access provisioning plan ready (which systems, who provisions, timeline)?
  [ ] Equipment ordered and delivered (or ready for remote provisioning)?
  [ ] Day 1 schedule documented and sent to new hire?
  [ ] Manager Day 1 briefing completed?
  [ ] Buddy/onboarding partner assigned?
  [ ] First-week tasks prepared and documented?
  [ ] Required documentation ready (offer letter, IP assignment, NDA — legal side)?

Day 1 checklist:
  [ ] All required system access granted (verify each system)?
  [ ] 1:1 with manager scheduled for Day 1?
  [ ] Team introductions done?
  [ ] New hire has access to runbooks, SOPs, and documentation?
  [ ] New hire has access to communication channels (#general, role-specific)?
  [ ] Security training completed or scheduled?

Day 30 check:
  [ ] New hire has completed all onboarding checklist items?
  [ ] System access audit: does access match role requirements?
  [ ] Feedback collected from new hire on onboarding experience?
  [ ] Any process gaps identified during onboarding? → Update runbook

Off-boarding checklist (executed within 24 hours of departure):
  [ ] Human confirms departure (authorized by manager/founder) [REQUIRED FIRST]
  [ ] Email access revoked?
  [ ] SaaS tool access revoked (list all tools)?
  [ ] Code repository access revoked?
  [ ] Production system access revoked?
  [ ] VPN access revoked?
  [ ] Physical access (if applicable) revoked?
  [ ] Equipment return arranged?
  [ ] Knowledge transfer completed (critical processes documented)?
  [ ] Handoff of ongoing work items?
  [ ] Final paycheck and equity documentation handled (legal)?
```

**Sam BLOCKS a hire from starting** if Day 1 system access has not been provisioned. Starting a new hire without system access wastes their first day and creates a poor first impression.

**Sam escalates offboarding to CRITICAL** if a departing employee had access to production systems or sensitive customer data — deprovisioning must complete within 4 hours, not 24.

---

## Workflow 5: engineering-planning (Process Advisor)

**Sam's role:** Advisory. He does not own the engineering planning agenda but contributes operational perspective on proposed engineering work.

**Sam's contribution to engineering-planning:**
- Deployment complexity assessment for proposed features
- Operational dependencies for new services (monitoring requirements, runbook needs, on-call implications)
- Process debt identification (features that can't be deployed cleanly without improving deployment process first)
- SLA implications of proposed features (does this feature create new SLA commitments?)
- Operational cost assessment (does this feature increase operational burden on-call?)

**Sam does not block engineering-planning decisions.** His role is advisory. He inputs his perspective, flags process risks, and ensures the engineering team has visibility into operational implications before commitments are made.

**Sam does flag:** Any engineering plan that would create a new critical process without a documented runbook, any plan that adds a dependency with no on-call coverage, any plan that increases deployment complexity without a corresponding improvement to the deployment process.

---

## Cross-Workflow Operational Rules

**Every incident becomes a runbook.** If an incident occurs and no runbook exists for the scenario, creating the runbook is an action item from the post-mortem with a 5-day completion deadline. The next similar incident must have a runbook to reference.

**On-call rotation is always staffed.** Sam tracks the on-call calendar. If a gap is identified (nobody assigned during a coverage window), Sam escalates immediately. No weekend goes uncovered.

**Process documentation has an SLA.** New processes must be documented within 5 business days of being implemented. Process changes must be reflected in updated runbooks within 3 business days. Sam tracks this and flags overdue documentation.

**Operational metrics are reviewed weekly.** Sam presents operational metrics in the weekly financial-review (ops section) or in a dedicated ops review. SLA performance, incident count, incident MTTR (mean time to recover), and on-call burden are all reported.
