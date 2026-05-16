# Strategy Agent Lessons Learned

Aria Chen's personal lessons from completed deliberation sessions. Appended after each task.

---

## Entry Format

```
## [DATE] — [Task Type]: [Brief Task Title]

**Task summary:** [1-2 sentences]
**Aria's initial position:** [what she argued in Round 1]
**Aria's final position:** [what she landed on after debate and challenge]
**What changed (if anything):** [what argument or data moved her]
**What worked well:** [bullets]
**What didn't work:** [bullets]
**Confidence calibration:** Started: X% → Ended: Y% → Outcome: [correct/incorrect/pending]
**Key lesson for future similar tasks:** [1-2 sentences]
**Tags:** [task-type], [frameworks-used], [topics]
```

---

## Example Entries

---

## 2024-01-22 — founder-decision: Should we expand to the enterprise segment now?

**Task summary:** Founder asked whether to pursue enterprise customers (>1,000 employees) while still primarily serving SMBs. Revenue was at $600K ARR, team was 12 people.

**Aria's initial position (Round 1, confidence 79%):**
Argued against enterprise expansion. Applied 7 Powers: the company had no enterprise-grade switching costs (no deep integrations, no SOC2 yet), and the sales cycle for enterprise would starve the team's capacity. Counter-positioned as: "Our counter-position to Salesforce is being simple. Enterprise would make us complex."

**Aria's final position (Round 3, confidence 71%):**
Maintained opposition to full enterprise expansion but shifted to a qualified "land in enterprise, don't sell to enterprise" position — allow inbound enterprise inquiries that don't require custom contracts or security reviews, but don't build enterprise sales motion. This nuance came from Marcus Wells' observation that some enterprise divisions were using the self-serve product already without enterprise support.

**What changed:**
Marcus Wells' user data showing 8% of existing revenue already came from enterprise self-serve users without any enterprise sales effort. This didn't change Aria's strategic view, but it added a middle path she hadn't considered.

**What worked well:**
- 7 Powers framework correctly identified the missing enterprise moat (no switching costs built yet)
- Challenge round question "What does Salesforce do when they see you add enterprise features?" forced productive thinking about incumbent response
- The nuance between "enterprise product" and "enterprise sales motion" was a useful distinction Marcus introduced that Aria built on

**What didn't work:**
- Aria's Round 1 confidence (79%) was too high for a decision this complex. Should have been 60-65% given the number of unverified assumptions (enterprise sales cycle length, how much compliance work SOC2 actually requires)
- Aria was slow to engage Dev Sharma's concern about the engineering implications of enterprise security requirements — she treated it as a detail when it was actually load-bearing

**Confidence calibration:**
- Started: 79% (overconfident — too many unverified assumptions about enterprise sales)
- Ended: 71% (still slightly high — outcome is not yet clear)
- Outcome: Pending — company adopted the "allow inbound, don't pursue enterprise" path. Early signal: 2 enterprise contracts closed in first 90 days without sales effort. Aria's core thesis (no enterprise sales motion yet) appears correct.

**Key lesson:** When a decision depends on the company's current sales capacity and deal cycle economics, always ask Jordan Blake (sales) first before forming a strong view. Aria's Round 1 was missing sales' ground truth on how long enterprise deals actually take.

**Tags:** founder-decision, enterprise, sales, 7-powers, market-expansion

---

## 2024-03-10 — competitor-research: Benchmarking against new well-funded entrant

**Task summary:** A new competitor raised $25M Series B and announced features overlapping our core product. Team needed to know how to respond.

**Aria's initial position (Round 1, confidence 68%):**
Argued for counter-positioning: "Don't compete feature-for-feature. Their $25M creates obligations to VCs that we don't have. Find the things they can't build without betraying their investors."

Applied 7 Powers: the competitor was building on Scale Economies thesis (get big, commoditize features). Our response should be to build Switching Costs and Network Effects that they can't replicate cheaply.

**Aria's final position (Round 3, confidence 63%):**
Maintained counter-positioning stance but became more urgent about the timeline. Soren Hall's research revealed the competitor had already hired 3 engineers from companies known for deep customer integrations — which meant their switching cost strategy was further along than Aria assumed.

**What changed:**
Research agent's finding about the competitor's engineering hires was a material update. Aria's ⚠️ ASSUMPTION that the competitor was early in their moat-building was partially wrong. Reduced confidence appropriately.

**What worked well:**
- Counter-positioning framing was the right lens and the team agreed it led to better options than feature parity
- The question "What are they saying in their job postings?" from the tools.md competitive research method was highly effective — led to the discovery of their hiring patterns
- Challenge round question "What if they ship a competing product in 90 days?" forced Aria to think about timing, which she had understated

**What didn't work:**
- Aria's initial ⚠️ ASSUMPTION about competitor stage was too optimistic. When marking assumptions, she should include a note about what evidence would prove the assumption wrong — and then check for that evidence before Round 2.
- Aria's competitive analysis was missing Porter's Buyer Power analysis — customer procurement processes matter for competitive dynamics and she omitted it.

**Confidence calibration:**
- Started: 68%
- Ended: 63%
- Outcome: Correct — company pursued switching cost strategy (deep integrations, data portability for OUR customers, not theirs). 6 months later the competitor has not materially captured Aria's target accounts.

**Key lesson:** Before finalizing any competitive ⚠️ ASSUMPTION, explicitly check: "What evidence would prove this assumption wrong?" Then check for that evidence in the research. If the competitor is well-funded, assume their strategic moves are further along than their public communications suggest.

**Tags:** competitor-research, counter-positioning, 7-powers, market-entry, hiring-signals
