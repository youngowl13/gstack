# Orchestrator Workflows

Detailed workflow specifications for all 14 task types. Each workflow defines the agents involved, number of rounds, expected outputs, and escalation triggers.

---

## 1. daily-briefing

**Purpose:** Morning or end-of-day status summary across all company functions.

**Agents involved:**
- Primary: operations (compiles cross-functional status)
- Secondary: strategy, product, engineering, sales, customer-success, finance
- Optional: any agent with something urgent to flag

**Number of rounds:** 1 (briefing-only, no debate needed)

**Orchestration:**
1. The Conductor issues the briefing request to all agents simultaneously
2. Each agent produces a 3-5 bullet status update for their domain
3. Operations agent synthesizes into a single briefing document
4. No debate round — this is information gathering, not decision-making
5. Result is the Daily Briefing template, not a RESULT CARD

**Typical output:**
- Cross-functional status dashboard
- Top 3 risks for today
- Items needing human attention today
- Wins from yesterday

**Escalation triggers:**
- Any agent flags a P0 or P1 incident → immediately route to incident-response workflow
- Any agent flags a legal or financial risk → route to appropriate specialized workflow
- Any agent flags a customer churn risk > X accounts → route to customer-support-triage

**Human approval:** NOT required for a standard daily briefing. Required if any escalation is triggered.

---

## 2. product-planning

**Purpose:** Prioritize features, define the roadmap, write or review PRDs, make build/buy/partner decisions.

**Agents involved:**
- Primary: product (owns the PRD and prioritization)
- Primary: strategy (ensures alignment with company direction)
- Primary: engineering (provides feasibility and effort estimates)
- Secondary: research (user research, market data), qa (testability), customer-success (customer signal)

**Number of rounds:** 3 (full deliberation)

**Orchestration:**
1. Product agent drafts initial feature framing and RICE scores
2. Strategy agent evaluates strategic fit and opportunity cost
3. Engineering agent estimates effort and flags technical risk
4. Round 1: Independent — each agent scores the proposed feature/roadmap item
5. Round 2: Debate — product defends prioritization; engineering challenges estimates; strategy challenges strategic fit
6. Round 3: Challenge — orchestrator asks "what does our worst competitor do here?" and "what does our best customer need that we're NOT building?"
7. Synthesize into a ranked feature list with RICE scores, effort estimates, and strategic rationale

**Typical output:**
- Prioritized feature list
- RICE scores per feature
- Engineering complexity ratings
- Strategic alignment score
- RESULT CARD with recommendation

**Escalation triggers:**
- Feature requires > 3 months of engineering effort → requires founder decision workflow
- Feature changes pricing or packaging → requires finance and legal review
- Feature involves customer data access → requires security review
- Engineering says "this is not technically feasible" with high confidence → stop and reroute

**Human approval:** Required if recommending a feature that is part of a major strategic pivot, requires >$10K in external resources, or has irreversible architecture implications.

---

## 3. engineering-planning

**Purpose:** Sprint planning, architecture decisions, technical debt prioritization, system design, capacity planning.

**Agents involved:**
- Primary: engineering (owns technical decisions)
- Primary: product (ensures business alignment)
- Secondary: security (security implications), qa (testability and quality), operations (infrastructure and deployment)

**Number of rounds:** 3 (full deliberation)

**Orchestration:**
1. Engineering agent presents the technical decision or sprint proposal
2. Product agent evaluates business value alignment
3. Security and QA agents flag risks and quality concerns
4. Round 2: Engineering defends technical approach; product challenges timeline; security flags threats
5. Round 3: Orchestrator challenges: "What breaks if traffic 10x's?" and "What does this look like in 2 years?"
6. Result: Sprint plan or architecture decision record

**Typical output:**
- Sprint commitment with story points
- Architecture Decision Record (ADR)
- Technical risk register
- Dependencies identified
- RESULT CARD

**Escalation triggers:**
- Engineering estimates > 2x initial product expectation → escalate to product-planning or founder-decision
- Architecture decision is irreversible (e.g., database migration, API breaking change) → human approval
- Security agent flags HIGH or CRITICAL risk → security-review workflow

**Human approval:** Required for irreversible architecture decisions, deprecating user-facing features, or infrastructure spend >$500/month.

---

## 4. security-review

**Purpose:** Evaluate security posture, review vulnerabilities, assess compliance gaps, respond to security findings.

**Agents involved:**
- Primary: security (owns the assessment)
- Primary: engineering (technical implementation details)
- Primary: legal (compliance and regulatory implications)
- Secondary: operations (infrastructure), product (user-facing implications)

**Number of rounds:** 3 (full deliberation — security requires rigor)

**Orchestration:**
1. Security agent presents findings using OWASP or STRIDE framework
2. Engineering agent assesses remediation difficulty and timeline
3. Legal agent assesses compliance and liability implications
4. Round 2: Security challenges engineering's remediation timeline; legal challenges security's severity ratings
5. Round 3: Orchestrator asks "What's the blast radius if this is exploited tomorrow?"
6. Result: Vulnerability report with severity ratings and remediation plan

**Typical output:**
- Vulnerability list with CVSS scores
- Remediation priority order
- Compliance status summary
- Incident response readiness assessment
- RESULT CARD (often CRITICAL risk level)

**Escalation triggers:**
- Any CRITICAL severity vulnerability → immediate human notification, pause all other workflows
- Compliance gap with regulatory deadline < 30 days → human approval required
- Evidence of active exploitation → route to incident-response immediately
- Legal exposure > $10K → human approval

**Human approval:** Almost always required. Security changes affecting production, any compliance remediation plan, and all findings rated HIGH or CRITICAL require human approval.

---

## 5. marketing-campaign

**Purpose:** Plan, review, and approve marketing campaigns, launch announcements, content strategy, messaging.

**Agents involved:**
- Primary: growth (campaign strategy, channel selection, messaging)
- Primary: product (feature accuracy, positioning)
- Primary: strategy (brand alignment, competitive context)
- Secondary: research (audience data, competitor messaging), sales (sales enablement needs), legal (claims approval)

**Number of rounds:** 3 (full deliberation)

**Orchestration:**
1. Growth agent presents campaign brief (audience, message, channels, budget, KPIs)
2. Product agent checks accuracy of any feature or product claims
3. Strategy agent evaluates competitive differentiation and brand consistency
4. Legal agent flags any claims that require substantiation or create liability
5. Round 2: Growth defends channel choice; sales pushes for sales-enablement materials; strategy questions differentiation
6. Round 3: Orchestrator asks "How does our main competitor respond to this campaign?" and "What happens if our claims are publicly challenged?"
7. Result: Approved campaign brief or revision requirements

**Typical output:**
- Campaign brief (approved or with required changes)
- Copy review with legal flags
- Channel allocation recommendation
- KPI targets
- RESULT CARD

**Escalation triggers:**
- Campaign makes specific claims about competitors → legal review mandatory
- Campaign involves customer testimonials → legal and customer-success review
- Budget >$500 → human approval
- Campaign targets a new segment the company has not addressed before → strategy approval

**Human approval:** Required for any external communication, any spend >$500, and any campaign that makes competitive claims.

---

## 6. sales-outreach

**Purpose:** Design outreach sequences, review pitch decks, qualify prospects, strategize on deals.

**Agents involved:**
- Primary: sales (owns the outreach and deal strategy)
- Primary: growth (messaging alignment with marketing)
- Primary: product (feature and value proposition accuracy)
- Secondary: research (prospect intelligence), customer-success (reference customers)

**Number of rounds:** 2 (lighter deliberation — speed matters in sales)

**Orchestration:**
1. Sales agent presents the prospect profile and proposed outreach approach
2. Product agent confirms the value proposition is accurate
3. Growth agent aligns on messaging consistency with campaigns
4. Research agent surfaces any relevant prospect intelligence
5. Round 2: Quick debate on prioritization and angle
6. Result: Approved outreach plan or revised approach

**Typical output:**
- Outreach sequence (subject lines, email copy, call scripts)
- Prospect qualification scorecard
- Key objections and responses
- RESULT CARD

**Escalation triggers:**
- Prospect is a Fortune 500 with complex procurement → legal review for terms
- Outreach involves discounting or special pricing → finance and strategy approval
- Prospect has had previous bad experience → customer-success input required

**Human approval:** Required for any pricing concessions, custom contracts, or deals that deviate from standard terms.

---

## 7. customer-support-triage

**Purpose:** Assess and route customer issues, evaluate SLA compliance, escalate churn risks.

**Agents involved:**
- Primary: support (owns the ticket/issue)
- Primary: customer-success (owns the customer relationship)
- Primary: product (determines if this is a known issue or feature gap)
- Secondary: engineering (technical root cause), operations (system status)

**Number of rounds:** 2 (speed critical — customer is waiting)

**Orchestration:**
1. Support agent presents the issue with customer context and severity
2. Product agent checks issue against known bugs and roadmap
3. Engineering agent provides technical diagnosis if it's a system issue
4. Customer-success agent assesses churn risk and relationship impact
5. Round 2: Agree on response, resolution timeline, and customer communication
6. Result: Triage decision with action plan

**Typical output:**
- Issue severity classification (P1/P2/P3)
- Root cause (known bug / new bug / user error / feature gap)
- Resolution timeline
- Customer communication draft
- RESULT CARD

**Escalation triggers:**
- Issue affects >10 customers simultaneously → incident-response workflow
- Customer is at risk of churning → customer-success agent takes lead, founder may be looped in
- Data loss or corruption detected → security-review + human approval immediately
- SLA breach already occurred → legal may need to assess contract terms

**Human approval:** Required if the resolution involves a billing credit >$500, contract modification, or if a major customer account is at risk.

---

## 8. financial-review

**Purpose:** Review budget performance, runway analysis, unit economics, fundraising preparation, expense approvals.

**Agents involved:**
- Primary: finance (owns the numbers)
- Primary: strategy (interprets trends in company context)
- Primary: operations (explains expense drivers)
- Secondary: sales (revenue forecast accuracy), hr (headcount cost projections)

**Number of rounds:** 3 (full deliberation — financial decisions are high stakes)

**Orchestration:**
1. Finance agent presents the financial data with actuals vs plan
2. Strategy agent interprets trends relative to company milestones
3. Operations agent explains variances
4. Round 2: Strategy challenges whether spending reflects priorities; finance challenges sales projections; operations defends variances
5. Round 3: Orchestrator asks "What happens if revenue is 30% below forecast?" and "Where would we cut first?"
6. Result: Financial assessment with action items

**Typical output:**
- Budget vs actuals dashboard
- Runway calculation
- Top 3 financial risks
- Recommended actions (with amounts that trigger human approval)
- RESULT CARD

**Escalation triggers:**
- Runway < 9 months → human approval immediately, potential fundraising workflow
- Any expense approval >$500 → human approval
- Revenue miss >20% vs plan → founder-decision workflow
- New significant cost center proposed → strategy + founder review

**Human approval:** Almost always required. Any spending decisions, budget reallocations >$500, and fundraising decisions require human approval.

---

## 9. legal-risk-review

**Purpose:** Evaluate contracts, assess regulatory compliance, review legal risks in business decisions.

**Agents involved:**
- Primary: legal (owns legal assessment)
- Primary: finance (financial exposure quantification)
- Primary: strategy (business context and risk tolerance)
- Secondary: operations (operational implications), engineering (technical compliance where relevant)

**Number of rounds:** 3 (full deliberation — legal decisions are often irreversible)

**Orchestration:**
1. Legal agent presents the legal matter (contract, regulation, risk)
2. Finance agent quantifies potential financial exposure
3. Strategy agent assesses business impact of different legal positions
4. Round 2: Legal challenges strategy's risk tolerance; finance challenges legal's exposure estimates
5. Round 3: Orchestrator asks "What's our worst-case scenario if this goes to litigation?" and "What does compliance actually cost us to achieve?"
6. Result: Legal risk assessment with recommended course of action

**Typical output:**
- Risk assessment matrix (likelihood x impact)
- Recommended legal position
- Compliance gaps and remediation steps
- Cost estimates for legal action
- RESULT CARD (often HIGH or CRITICAL risk)

**Escalation triggers:**
- Any actual legal commitment → human approval before signing
- Regulatory deadline < 60 days → escalate immediately
- Litigation risk identified → human approval, consider engaging external counsel
- IP dispute → human approval

**Human approval:** Required for any legal commitment, contract signature, regulatory filing, or settlement decision.

---

## 10. release-readiness

**Purpose:** Assess whether a product or feature is ready to ship to production.

**Agents involved:**
- Primary: engineering (technical readiness, test coverage, deployment plan)
- Primary: qa (testing completeness, known issues, acceptance criteria)
- Primary: product (feature completeness, user acceptance)
- Secondary: security (security review status), operations (deployment and monitoring readiness), customer-success (customer communication plan), support (support readiness)

**Number of rounds:** 2 (checklist-driven, lower debate needed)

**Orchestration:**
1. Engineering presents the deployment plan and technical readiness checklist
2. QA presents test results, known issues, and go/no-go recommendation
3. Product confirms feature completeness and acceptance criteria
4. Security confirms security review status
5. Operations confirms monitoring and rollback plan
6. Round 2: Each agent votes GO/NO-GO with blocking issues if NO-GO
7. Result: Release decision

**Typical output:**
- Release Readiness Checklist (completed)
- GO/NO-GO vote per agent
- Blocking issues list
- Rollback plan
- RESULT CARD

**Escalation triggers:**
- Any NO-GO vote from engineering, qa, or security → cannot ship without human override
- Known P1 bug not yet fixed → human approval to proceed anyway
- Monitoring or rollback plan missing → block release
- Customer communication not prepared → delay release

**Human approval:** Required for any production deployment. This is a non-negotiable safety rule.

---

## 11. incident-response

**Purpose:** Coordinate response to production incidents, outages, data breaches, or critical bugs affecting customers.

**Agents involved:**
- Primary: engineering (technical diagnosis and remediation)
- Primary: operations (incident coordination, monitoring, deployment)
- Secondary: customer-success (customer communication), support (support ticket surge management), security (if breach suspected)

**Number of rounds:** Continuous (incident response is iterative, not fixed-round)

**Orchestration:**
1. Incident declared — orchestrator immediately sends alert to primary agents
2. Engineering and operations assess severity (P0/P1/P2) and initial blast radius
3. Orchestrator runs a fast Round 1 (5 minutes max): What is broken? How many customers affected? What is the root cause hypothesis?
4. Engineering begins remediation; operations monitors; support notifies affected customers
5. Every 30 minutes: status update from engineering and operations
6. Post-incident: full retrospective using lessons_learned.md format

**Typical output:**
- Incident severity and scope assessment
- Root cause hypothesis
- Remediation plan and timeline
- Customer communication draft
- Post-incident report
- RESULT CARD (usually HIGH or CRITICAL)

**Escalation triggers:**
- P0 (complete outage) → human notification immediately, all hands
- Data breach suspected → security agent leads, legal notified, human approval for any customer notification
- Incident duration > 2 hours → human briefing
- Media or customer social media attention detected → growth agent, human communication approval

**Human approval:** Required for any customer-facing communication about the incident, any infrastructure changes to resolve the incident, and any disclosure decisions.

---

## 12. hiring-plan

**Purpose:** Define headcount needs, write job descriptions, evaluate candidates, extend offers.

**Agents involved:**
- Primary: hr (owns the hiring process)
- Primary: strategy (headcount aligns with company direction)
- Primary: finance (budget availability)
- Secondary: engineering/product/sales (hiring manager input), legal (employment law compliance)

**Number of rounds:** 2 (hiring is collaborative but not adversarial)

**Orchestration:**
1. HR presents the open role and requirements
2. Strategy confirms the role aligns with company priorities
3. Finance confirms budget is available
4. Hiring manager agent (engineering, product, or sales) provides role specification
5. Legal flags any compliance issues (visa requirements, non-compete, compensation law)
6. Round 2: Align on compensation range, seniority, timeline
7. Result: Approved job description and hiring plan

**Typical output:**
- Job description (approved)
- Compensation band
- Interview process design
- Timeline and sourcing plan
- RESULT CARD

**Escalation triggers:**
- Compensation outside approved band → finance and founder approval
- Offer extension → human approval (safety rule)
- Role requires equity grant → legal and finance review

**Human approval:** Required for any offer extension, compensation above approved band, and any role that changes company structure significantly.

---

## 13. competitor-research

**Purpose:** Gather and synthesize intelligence on competitors, market positioning, pricing, and differentiation.

**Agents involved:**
- Primary: research (owns the intelligence gathering)
- Primary: strategy (interprets competitive implications)
- Primary: product (evaluates feature gap analysis)
- Secondary: growth (messaging and positioning), sales (how competitors sell against us)

**Number of rounds:** 2 (research-heavy, lighter debate)

**Orchestration:**
1. Research agent compiles competitive intelligence on specified competitors
2. Strategy agent interprets strategic implications
3. Product agent identifies feature gaps and opportunities
4. Growth agent evaluates positioning implications
5. Sales agent shares what they hear from prospects about competitors
6. Round 2: Debate on which competitive moves to respond to and which to ignore
7. Result: Competitive briefing with strategic recommendations

**Typical output:**
- Competitor profile (features, pricing, messaging, customers)
- Feature gap analysis
- Positioning recommendations
- RESULT CARD

**Escalation triggers:**
- Competitor is moving into core market with significant resources → founder-decision workflow
- Competitor pricing threatens revenue model → financial-review + strategy
- Competitor is pursuing a customer or partnership we are pursuing → sales and strategy alignment

**Human approval:** Not typically required for research and analysis. Required if recommending a strategic response that involves spend >$500 or a major strategic pivot.

---

## 14. founder-decision

**Purpose:** Major strategic decisions that require the highest level of deliberation: pivots, major bets, M&A, fundraising, shutting down a product line, major partnerships.

**Agents involved:**
- Primary: strategy (long-term view), product (user impact), engineering (technical feasibility), finance (financial modeling)
- Secondary: legal (legal implications), hr (people implications), research (market data), growth (go-to-market implications), customer-success (customer impact)
- Note: This is the only workflow that can invoke ALL agents

**Number of rounds:** 3+ (full deliberation — this is the most rigorous workflow)

**Orchestration:**
1. Strategy agent frames the decision using a decision tree or strategic option analysis
2. All primary agents analyze independently (Round 1 extended — allow more depth)
3. Round 2: Full debate — all agents engage; strategy moderates the debate within the deliberation
4. Round 3: Challenge — orchestrator plays multiple devil's advocate scenarios
5. Optional Round 4: If confidence remains below 60%, run a second challenge round
6. Result: Comprehensive decision record

**Typical output:**
- Decision framing document (options, criteria, trade-offs)
- Full agent position summary
- Sensitivity analysis (what changes if key assumptions are wrong)
- Recommendation with confidence
- Decision Record for the company archive
- RESULT CARD (always requires human approval for actual decision)

**Escalation triggers:**
- Decision is IRREVERSIBLE → human approval mandatory
- Decision involves >$10K commitment → human approval mandatory
- Decision affects company structure, valuation, or cap table → human approval mandatory
- Any agent confidence < 40% after all rounds → add more rounds or request more data

**Human approval:** ALWAYS required. Every founder-decision workflow ends with a human approval gate. The agents inform; the human decides.
