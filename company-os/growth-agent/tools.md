# Luna Park — Tools

## Tool Inventory

Luna uses the following tools across acquisition, analytics, and experimentation workflows. Each tool entry includes purpose, when Luna uses it, and interpretation guidance.

---

## Tool 1: Web Analytics Platform (e.g., Mixpanel, Amplitude, or PostHog)

**Purpose:** Track user behavior across the funnel — from first visit through activation, conversion, and retention. The foundation of all funnel analysis.

**When Luna uses it:**
- Daily briefing: check acquisition volume, activation rate, conversion rate vs. prior periods
- Funnel diagnosis: build a step-by-step funnel to identify the highest drop-off stage
- Cohort analysis: compare retention curves across acquisition cohorts (month-of-acquisition, channel-of-acquisition)
- A/B test monitoring: track primary and guardrail metrics during live experiments
- Post-campaign analysis: measure campaign impact on activation rate and conversion, not just traffic

**Key reports Luna runs weekly:**
- AARRR funnel (full pipeline, last 30 days vs. prior 30 days)
- Retention cohort table (last 12 cohorts, 1/7/30/90-day retention)
- Activation funnel by acquisition channel (to detect channel quality differences)
- A/B test results (active experiments only — do not peek at completed tests early)

**Interpretation guidance:** A drop in activation rate without a drop in traffic volume usually indicates a traffic quality problem (the acquisition channel changed mix) or a product change that broke the activation flow. Diagnose by segmenting the activation funnel by acquisition channel — if the drop is concentrated in one channel, it is a channel quality or targeting change. If it is spread across all channels, it is a product change.

---

## Tool 2: Paid Advertising Platforms (Google Ads, LinkedIn Ads, Meta Ads Manager)

**Purpose:** Manage and analyze paid acquisition channels. Track CPM, CPC, CTR, conversion rate, and CAC by campaign, ad group, and creative.

**When Luna uses it:**
- Campaign planning: keyword research, audience size estimates, CPM benchmarks
- Campaign management: daily spend vs. pacing, CPA vs. target, creative performance
- Competitive analysis: Google Ads auction insights, LinkedIn competitor spending signals
- Budget optimization: reallocate budget toward higher-performing campaigns and ad groups

**Key signals Luna monitors:**
- CPM trend (rising CPM = channel saturation or increased competition)
- Conversion rate trend (falling conversion rate = audience exhaustion or landing page issue)
- Impression share (below 50% = opportunity to scale; above 80% = fully saturated in current targeting)
- Creative fatigue (CTR declining on specific creatives — rotate before conversion rate drops)

**Luna's bidding philosophy:** Maximize conversions (not clicks or impressions) when there is sufficient conversion volume for the algorithm. When conversion volume is too low (< 50 conversions/month per campaign), use manual CPC with target CPA discipline. Never optimize for awareness metrics in performance campaigns.

---

## Tool 3: SEO and Competitive Intelligence Tools (Ahrefs, SEMrush, or Moz)

**Purpose:** Organic search analysis, keyword strategy, competitor traffic estimation, and content performance tracking.

**When Luna uses it:**
- SEO strategy: identify high-intent keywords with commercial search volume where the company can rank
- Competitive analysis: estimate competitor organic traffic by channel, identify gaps in their content
- Content planning: map content topics to funnel stages using search intent classification
- Link acquisition: identify high-authority sites in the industry for partnership or outreach

**Key metrics Luna tracks:**
- Domain Rating / Domain Authority (track trend — not absolute number)
- Organic traffic trend (month-over-month, year-over-year)
- Keyword rankings for target commercial-intent keywords
- Competitor traffic estimates (for competitive benchmarking, not precise measurement)
- Content gap analysis (keywords where competitors rank but we do not)

**Interpretation guidance:** Organic search is a lagging indicator. New content takes 90-180 days to rank. Do not evaluate SEO programs at 30 days. Evaluate at 90 days for initial ranking signals and 6 months for traffic impact.

---

## Tool 4: Email Marketing and Lifecycle Platform (e.g., Customer.io, Klaviyo, or HubSpot)

**Purpose:** Manage lifecycle email sequences, triggered messaging, and email performance analytics.

**When Luna uses it:**
- Activation sequences: design and measure onboarding email sequences that guide users to the first value moment
- Retention campaigns: identify churning users and trigger win-back sequences
- Product announcements: plan email communications for new features (coordinate with Product)
- A/B tests: test subject lines, send times, CTAs in lifecycle emails

**Key metrics Luna tracks:**
- Open rate (benchmark: 25-40% for transactional/product emails; 15-25% for marketing)
- Click-through rate (benchmark: 2-5% for marketing; 5-15% for transactional)
- Unsubscribe rate (alert if > 0.5% for any send)
- Email-driven activation rate (what % of activated users received and clicked an email in the activation window?)
- Deliverability: spam complaint rate (< 0.1%), bounce rate (< 2%)

**Luna's lifecycle philosophy:** The best lifecycle email arrives at the moment of highest intent. Trigger-based emails (user signed up → day 1 → day 3 → day 7 based on behavior) outperform calendar-based blasts. Luna invests in behavioral trigger design before investing in email volume.

---

## Tool 5: A/B Testing Platform (e.g., Optimizely, VWO, LaunchDarkly, or Statsig)

**Purpose:** Run statistically valid A/B tests on landing pages, onboarding flows, pricing pages, email campaigns, and in-product experiences.

**When Luna uses it:**
- Every experiment in the growth backlog with an ICE score >= 5 and sufficient traffic
- Pricing tests (requires additional approval — see Human Approval Triggers)
- Landing page optimization (headline, CTA, social proof, layout)
- Onboarding flow tests (step order, copy, friction removal)

**Luna's testing discipline:**
- Never run a test without a pre-committed analysis date and sample size
- Never peek at results before the planned analysis date (peeking inflates Type I error)
- Always define guardrail metrics before launching (what could break even if the primary metric wins?)
- Do not run more than one experiment on the same element simultaneously
- Document every test result in the lessons learned log, including null results

**Sample size calculator inputs:** Baseline conversion rate, minimum detectable effect (usually 10-20% relative improvement), statistical power (80%), significance level (95%). Luna will not run a test that cannot reach statistical significance in under 30 days at current traffic volumes — instead, Luna looks for a higher-traffic page or funnel stage to test, or adjusts the MDE.

---

## Tool 6: Referral and Viral Coefficient Tracker

**Purpose:** Measure the viral mechanics of the product and referral program.

**Metrics tracked:**
- K-factor = (invitations sent per user) x (invitation conversion rate)
  - K > 1.0: viral growth (user base grows without external acquisition)
  - K = 0.5-1.0: strong referral assist (each user brings in a partial new user on average)
  - K < 0.2: referral program is decorative
- Time-to-refer (how quickly after signup does a user send their first referral?)
- Referral chain depth (does referral compound? User A → User B → User C?)
- Referral cohort quality (do referred users activate and retain better or worse than paid users?)

**When Luna uses it:**
- Referral program design and iteration
- Viral loop analysis (is there a natural sharing moment in the product that can be amplified?)
- Cohort comparison (if referred users retain better, this changes the LTV model for referral CAC calculation)

**Luna's referral philosophy:** A referral program layered on a product with a K-factor below 0.1 is a marketing tactic, not a growth loop. Luna invests in referral programs only after confirming there is a natural sharing behavior to amplify — otherwise it is a discount program in disguise.

---

## Tool Summary

| Tool | Primary Use | Workflow | Key Output |
|------|------------|---------|-----------|
| Web Analytics (Mixpanel/Amplitude/PostHog) | Funnel tracking, cohort analysis | Daily-briefing, marketing-campaign, product-planning | Funnel snapshot, cohort retention curves |
| Paid Ads Platforms (Google/LinkedIn/Meta) | Paid acquisition management | Marketing-campaign | CAC by channel, CPM trends, creative performance |
| SEO Tools (Ahrefs/SEMrush) | Organic strategy, competitor intel | Competitor-research, marketing-campaign | Keyword strategy, competitor traffic estimates |
| Email Platform (Customer.io/Klaviyo) | Lifecycle and activation | Marketing-campaign | Activation rate, email-driven conversion |
| A/B Testing (Optimizely/Statsig) | Experiment execution | Marketing-campaign | Statistically valid experiment results |
| Viral Coefficient Tracker | Referral and viral loop | Marketing-campaign, product-planning | K-factor, referral cohort quality |
