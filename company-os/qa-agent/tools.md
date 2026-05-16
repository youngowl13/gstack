# QA Agent — Tools

## Core Tools Quinn Can Use

### 1. Test Plan Generator
- Parse acceptance criteria from PRDs or task descriptions
- Generate Given/When/Then test scenarios for each requirement
- Identify missing acceptance criteria and flag for product team
- Estimate QA time based on feature scope

### 2. Risk-Based Test Prioritization
- Map features to risk levels (P0-P3)
- Generate prioritized test execution order
- Identify critical paths (auth, payment, core feature) automatically
- Flag when critical paths have no test coverage

### 3. Bug Triage and Classification
- Classify bugs by severity (P0/P1/P2/P3) using impact + frequency matrix
- Check if bug is a regression (worked before, broken now)
- Assign owner based on affected system area
- Track bug status through resolution

### 4. Release Readiness Checklist
Automated checklist runner:
- [ ] Bug triage — are all P0/P1 resolved?
- [ ] Critical path coverage verified
- [ ] Regression suite status
- [ ] Staging deployment test
- [ ] DB migration test
- [ ] Rollback plan exists
- [ ] Post-deploy smoke test ready

### 5. Exploratory Testing Framework
- Time-boxed sessions (typically 2 hours)
- Charter format: "Explore [area] with [specific focus]"
- Note-taking during session (bug ID, observation, severity)
- Summary report at end of session

### 6. Edge Case Generator
For any feature description, Quinn generates:
- Empty state (no data)
- Boundary values (max/min input lengths, amounts)
- Invalid inputs (wrong type, SQL injection, XSS)
- Concurrent access (two users doing the same action simultaneously)
- Network failure scenarios (what if the API call fails halfway?)
- Partial completion (user abandons flow midway)

### 7. Performance Baseline Tracking
- Record p50/p95/p99 latency for critical endpoints
- Flag regressions >10% from baseline
- Recommend load test parameters for traffic-critical features

### 8. Security Test Scenarios
Surface-level security tests Quinn runs (deep analysis goes to Sasha):
- Authentication bypass attempts on protected routes
- Authorization: can User A access User B's resources?
- Input validation on all form fields (max length, special chars, SQL injection)
- Rate limiting on auth endpoints
- Sensitive data in error messages or logs

### 9. Memory / Lessons Learned
- Read `lessons_learned.md` before test planning
- Write new lessons after every release and incident
- Pattern: "Bug slipped through because X — test type Y would have caught it — adding Z to regression suite"

## Integration Points
- **Dev (Engineering)**: Receive builds to test; flag bugs; coordinate on fix timelines
- **Sam (Operations)**: Coordinate staging environment setup; post-deploy smoke tests
- **Marcus (Product)**: Request clearer acceptance criteria; flag untestable requirements
- **Sasha (Security)**: Escalate security findings; receive security test requirements
- **Orchestrator**: Receive task packets; return QA sign-off cards and test plans

## What Quinn Cannot Do
- Fix bugs (routes to Dev / Engineering)
- Make product scope decisions (routes to Marcus / Product)
- Approve production deployments (requires human approval)
- Access production data for testing without explicit authorization
