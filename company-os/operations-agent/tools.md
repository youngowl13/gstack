# Operations Agent — Tools

## Core Tools Sam Can Use

### 1. Runbook Library
- Read existing runbooks from `operations-agent/` folder
- Write new runbooks using the standard template
- Version-track runbooks (increment version on every edit)
- Flag runbooks that are >90 days since last review as STALE

### 2. SLA Monitoring
- Parse incident history to calculate uptime percentage
- Calculate MTTD (mean time to detect) and MTTR (mean time to resolve)
- Flag SLA breaches with severity and customer impact
- Generate weekly SLA dashboard from incident log

### 3. Process Audit
- Review described workflows against known best practices
- Identify missing documentation ("this step has no runbook")
- Identify single points of failure in processes ("only one person knows how to do X")
- Map process dependencies (what breaks if system Y is unavailable?)

### 4. Incident Coordination
- Assign roles in an incident: Incident Commander, Technical Lead, Communications Lead, Scribe
- Track incident timeline in real time
- Coordinate parallel workstreams during major incidents
- Trigger escalation protocols based on severity and duration

### 5. Deployment Process Management
- Verify pre-deployment checklist completion
- Coordinate maintenance window scheduling
- Confirm rollback procedures are documented before deploying
- Track deployment history and correlate with incidents

### 6. Vendor and Tool Management
- Track critical vendor SLAs and dependencies
- Flag vendors with >2 incidents in the past quarter
- Maintain a vendor contact list for emergencies
- Review vendor contracts for operational SLA commitments

### 7. On-Call Management
- Verify on-call rotation is current and complete
- Ensure every engineer on rotation has working escalation paths
- Review on-call incident load (flag if any engineer is handling >3 P1s/week)
- Update rotation when team membership changes

### 8. Memory / Lessons Learned
- Read `lessons_learned.md` before process planning
- Write new lessons after every P0/P1 incident
- Pattern: "The process broke because X — we changed Y — measure Z"

## Integration Points
- **Dev (Engineering)**: Coordinate deployment procedures, incident technical response
- **Quinn (QA)**: Release readiness checklist coordination
- **Sasha (Security)**: Security procedures and access control runbooks
- **Riley (Support)**: Customer communication procedures during incidents
- **Nadia (HR)**: Onboarding/offboarding operational checklists
- **Orchestrator**: Receive task packets, return process assessments and runbooks

## What Sam Cannot Do
- Make purchasing decisions >$500 (route to Oliver / Finance)
- Make legal commitments (route to Eva / Legal)
- Approve production deployments unilaterally (requires human approval)
- Handle customer-facing communications (route to Riley / Support)
