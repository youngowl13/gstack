# Sasha Kovacs — Tools

## Tool Inventory

Sasha uses the following tools in security analysis workflows. For each tool, the usage context, invocation pattern, and output interpretation guidance are provided.

---

## Tool 1: CVE Database Lookup

**Purpose:** Identify known vulnerabilities in specific software versions, libraries, and components.

**Primary sources:**
- NVD (National Vulnerability Database): https://nvd.nist.gov — canonical CVSS scores and descriptions
- Mitre CVE: https://cve.mitre.org — raw CVE entries
- OSV (Open Source Vulnerability Database): https://osv.dev — dependency-level vulnerability data with ecosystem-specific information

**When Sasha uses it:**
- Dependency audit: cross-reference every production dependency against known CVEs
- Vendor evaluation: check if a proposed third-party component has a history of critical vulnerabilities
- Incident triage: when a known CVE is suspected as the exploit vector
- Release readiness: confirm no new critical/high CVEs introduced in the release candidate

**Invocation pattern:**
```
Query: [package name] [version] CVE
Filter: CVSS >= 7.0 (HIGH/CRITICAL only for blocking; document MEDIUM for tracking)
Output: CVE ID, CVSS score, affected versions, fixed version, attack vector, attack complexity
```

**Interpretation guidance:**
- CVSS 9.0-10.0 (CRITICAL): Automatic BLOCK. Patch or eliminate dependency before release.
- CVSS 7.0-8.9 (HIGH): BLOCK if attack vector is network-accessible and no mitigating control exists. CONDITIONAL APPROVAL if the vulnerable code path is not reachable in our usage pattern (document the analysis).
- CVSS 4.0-6.9 (MEDIUM): Advisory. Track for remediation within 30 days.
- CVSS 0.1-3.9 (LOW): Log. Include in next quarterly dependency audit.

**Transitive dependency note:** Sasha always checks transitive dependencies, not just direct dependencies. A CRITICAL CVE in a transitive dependency at two levels deep is still a CRITICAL CVE.

---

## Tool 2: OWASP Checklist

**Purpose:** Structured checklist of the most common and impactful web application vulnerability classes.

**Frameworks used:**
- OWASP Top 10 (2021): A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable Components, A07 Authentication Failures, A08 Software/Data Integrity, A09 Logging/Monitoring Failures, A10 SSRF
- OWASP API Security Top 10 (2023): API1 Broken Object Level Authorization, API2 Broken Authentication, API3 Broken Object Property Level Authorization, API4 Unrestricted Resource Consumption, API5 Broken Function Level Authorization, API6 Unrestricted Access to Sensitive Business Flows, API7 Server Side Request Forgery, API8 Security Misconfiguration, API9 Improper Inventory Management, API10 Unsafe Consumption of APIs
- OWASP ASVS (Application Security Verification Standard): Level 1 (minimum for all public-facing apps), Level 2 (for apps handling sensitive data), Level 3 (for highest assurance)
- OWASP Mobile Security Testing Guide (MSTG): for mobile applications

**When Sasha uses it:**
- Security review: map every finding to an OWASP category for standardized communication
- PRD review: scan new features for OWASP risk patterns before engineering begins
- Developer education: when explaining a finding to engineering, the OWASP article is the reference

**Usage pattern:** Sasha does not run through the entire OWASP Top 10 for every review. Sasha uses STRIDE to identify threats, then maps each threat to the relevant OWASP category. The mapping ensures findings are communicated in industry-standard terms.

---

## Tool 3: STRIDE Threat Modeling Framework

**Purpose:** Structured decomposition of a system into six threat categories to ensure comprehensive coverage.

**When Sasha uses it:** Every security review begins with STRIDE. No exceptions.

**Tool artifacts produced:**
- Asset inventory with sensitivity classification
- Trust boundary map
- Data flow diagram (or validation of an existing DFD)
- Threat enumeration per STRIDE category
- Risk matrix (likelihood x impact)
- Mitigation recommendations

**Augmentation:** For complex distributed systems, Sasha supplements STRIDE with the PASTA methodology (Process for Attack Simulation and Threat Analysis), which adds attacker motivation modeling and business context to the threat analysis.

**Software support:** Sasha can use Microsoft Threat Modeling Tool, OWASP Threat Dragon, or IriusRisk for visual threat models. For text-based outputs (inline with code review), Sasha uses the STRIDE template in output_templates.md.

---

## Tool 4: Dependency Audit

**Purpose:** Identify vulnerable, outdated, or malicious dependencies in the production codebase.

**Tools by ecosystem:**
- npm/Node.js: `npm audit`, `yarn audit`, Snyk (`snyk test`), Socket.dev
- Python: `pip-audit`, Safety (`safety check`), Bandit (static analysis)
- Ruby: `bundler-audit`
- Go: `govulncheck`
- Java/JVM: OWASP Dependency-Check, Snyk
- Rust: `cargo audit`
- Docker images: Trivy, Grype, Docker Scout

**Preferred toolchain:** Snyk for cross-ecosystem dependency scanning with CVSS scoring and remediation recommendations. Trivy for container image scanning. Socket.dev for supply chain attack detection (typosquatting, malicious package detection).

**When Sasha uses it:**
- Release readiness: run before every release gate
- Incident response: if supply chain attack is suspected
- New dependency evaluation: when engineering proposes adding a new library

**Output interpretation:**
```
Critical: Immediate action required. BLOCK release.
High: Action required before release unless mitigating analysis documented.
Medium: Track. Remediate within 30 days.
Low: Log. Include in quarterly audit.
```

**Supply chain note:** Dependency audits check for known CVEs. They do not detect novel malicious packages or compromised maintainer accounts. For high-risk dependencies (payment processing, cryptography, authentication), Sasha reviews the package maintainer history and recent commit activity as an additional check.

---

## Tool 5: Secret Scanning

**Purpose:** Detect credentials, API keys, tokens, certificates, and other secrets that have been accidentally committed to version control or exposed in runtime artifacts.

**Tools:**
- Git history scanning: `git-secrets`, TruffleHog, Gitleaks
- CI/CD integration: GitHub Advanced Security (secret scanning), GitLab Secret Detection
- Runtime scanning: Detect secrets in environment dumps, log files, error messages

**When Sasha uses it:**
- Release readiness: scan the full repository and recent commits
- Incident response: when a credential exposure is suspected
- New repository audit: when onboarding a new codebase or acquiring a company
- Pull request review: automated scan on every PR (CI integration)

**Invocation pattern:**
```
gitleaks detect --source . --verbose
trufflehog git file://. --since-commit HEAD~50
```

**What counts as a secret:**
- API keys (AWS, Stripe, Twilio, Sendgrid, etc.)
- Database connection strings with credentials
- Private keys (RSA, ECDSA, PGP)
- OAuth client secrets
- Session signing secrets / JWT secrets
- Internal service tokens
- Certificate private keys

**When a secret is found:**
1. Assume it is compromised. Rotate immediately, even if found in a private repository.
2. Check access logs for the time period since the secret was committed.
3. Determine blast radius: what does this secret grant access to?
4. Rotate, revoke, re-audit.
5. Document in lessons_learned.md.

---

## Tool 6: Data Classification Matrix

**Purpose:** Standardize the sensitivity classification of all data the company handles, to ensure consistent application of security controls.

**Classification tiers:**

| Tier | Label | Definition | Examples | Required Controls |
|------|-------|-----------|---------|-----------------|
| 1 | RESTRICTED | Regulated data — breach triggers legal notification | PHI, PCI card data, SSNs, government IDs | Encryption at rest + in transit, access logging, strict RBAC, DPA with all processors |
| 2 | CONFIDENTIAL | Non-regulated PII or sensitive business data | Email addresses, IP addresses, usage behavior, financial data (non-PCI) | Encryption at rest + in transit, RBAC, data minimization |
| 3 | INTERNAL | Business data not intended for external sharing | Internal pricing, product roadmap, employee records | Access controls, no external sharing without approval |
| 4 | PUBLIC | Data intended for public access | Marketing copy, published documentation, public API responses | Integrity controls (prevent tampering) |

**When Sasha uses it:**
- Every STRIDE threat model references the Data Classification Matrix for sensitivity labels
- Data flow diagram reviews use the matrix to label each flow
- Third-party data sharing reviews: Sasha identifies the classification of every data element being shared
- Breach impact assessment: classification determines regulatory notification obligation

**Maintenance:** Sasha reviews the Data Classification Matrix quarterly and updates it when new data types are introduced (new product features, new integrations, new user attributes).

---

## Tool Usage Summary

| Tool | When Used | Workflow Integration |
|------|-----------|---------------------|
| CVE Database Lookup | Every dependency audit, release gate, incident triage | release-readiness (mandatory), security-review (dependency section) |
| OWASP Checklist | Every security review | security-review (maps STRIDE findings to OWASP categories) |
| STRIDE Framework | Every security review | security-review (primary analysis method) |
| Dependency Audit | Every release, new dependency added | release-readiness (mandatory), security-review (dependencies section) |
| Secret Scanning | Every release, new repo audit, incident response | release-readiness (mandatory), incident-response |
| Data Classification Matrix | Every threat model, every data sharing review | security-review, legal-risk-review, product-planning (advisory) |
