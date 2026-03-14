---
generated_by: Claude Opus 4.6
generation_date: 2026-03-04
model_version: claude-opus-4-6
purpose: writing_style_review
status: draft
human_reviewer: matthewvivian
tags: [notes, writing-style, review, publishing-readiness]
---

# Field Notes Writing Style Review

Reviewed against `docs/style-guide.md`. Each note assessed for: flow, em dash and colon overuse, triteness, abruptness, tone match ("senior engineer over tea"), perspective consistency, and publishing worthiness.

## Ranked Summary (best to worst)

| Rank | Note | Score | Key Issues | Publish Ready? |
|------|------|-------|------------|----------------|
| 1 | GSAP ScrollTrigger Gotchas | 8/10 | Minor perspective shift only | Yes |
| 2 | Observability Beyond Three Pillars | 7/10 | Some long sentences, 1 staccato moment | Nearly |
| 3 | OWASP Beyond the Top 10 | 7/10 | Label-colon in toolkit section, speaker bio | Nearly |
| 4 | Human Review Bottleneck | 7/10 | Perspective shifts, bold-label paragraphs, 1 cliché | With edits |
| 5 | Git Worktrees Explained | 7/10 | "You" perspective throughout, reads as docs not a note | With edits |
| 6 | ToC-Aware Prompting | 6.5/10 | "You" perspective, 2 antithetical, 1 cliché, but strong content | With edits |
| 7 | Autonomous AI Development | 6/10 | Overlaps ai-engineering, label-colon patterns | With edits |
| 8 | Diversity in Tech (GOTO) | 6/10 | 3 antithetical, long sentences, rhetorical questions | With edits |
| 9 | Connection is Everything (GOTO) | 5/10 | 6 antithetical, label-colon, staccato anaphora, keynote tone | Needs work |
| 10 | Organisational Readiness | 5/10 | 7 em dashes, "you" perspective, confrontational, staccato | Needs work |
| 11 | AI Engineering | 5/10 | 3 em dashes, "I" repetition, comma splices, very long, keynote tone | Needs work |
| 12 | Voice-Driven Development | 5/10 | **12 em dashes**, "This changes everything", "I" repetition, perspective shifts | Needs work |
| 13 | What Makes Humans Valuable | 5/10 | 6 antithetical, keynote structure, bold single-word headers | Needs work |
| 14 | Principles for Leading AI Development | 4/10 | Listicle, preachy "you" voice, heavy label-colon, antithetical | Needs rewrite |

---

## Detailed Reviews

### 1. GSAP ScrollTrigger Gotchas (`gsap-scrolltrigger-astro-gotchas.mdx`) — 8/10

**What works:** Concise, practical, personal. Opens naturally ("A few things caught me out"). Code examples are well-placed. Reads exactly like an engineer sharing a gotcha with a colleague. Perfect tone match.

**Issues found:**
- Line 20: "This doesn't work. Negative z-index pushes the element behind the `<body>` background, making it invisible. The canvas renders fine. You just can't see it." — The last two sentences are slightly staccato but it works here because it's a genuine "gotcha" punchline. Borderline.
- Line 44: "Something to watch for if the site grows." — Fragment, but acceptable as a closing aside.

**Verdict:** Publish-ready with minimal polish. This is the tone benchmark for other notes.

---

### Voice-Driven Development (`voice-driven-development.mdx`) — 5/10

**What works:** Personal, specific, good anecdotes. The Superwhisper details are concrete and useful. Good topic choice.

**Issues found:**

**Em dashes: 12** (worst in the entire collection — style guide says zero)
- Line 10: "Not the mechanical typing **—** most engineers can type fast enough **—** but the cognitive overhead" (2, parenthetical pair)
- Line 12: "Not just for AI prompts **—** for emails, documentation, notes" (1)
- Line 16: "You rubber-duck **—** talking through an approach" (1)
- Line 18: "the natural speech patterns **—** the false starts, the corrections, the thinking-out-loud **—** and outputs" (2, parenthetical pair)
- Line 20: "the way I'd talk to a colleague **—** naturally, with all the messiness that implies **—** and what comes out" (2, parenthetical pair)
- Line 24: '"the constraint here is that..." **—** context that makes' (1)
- Line 26: "Voice dictation doesn't just save time **—** it removes" (1)
- Line 34: "But it's still indirect **—** I'm encoding thoughts" (1)
- Line 36: "a history of narrowing the gap between thought and action **—** from punch cards" (1)

**Salesy language:**
- Line 18: "This changes everything." — Standalone dramatic sentence. Reads like ad copy. The single worst salesy moment across all 14 notes.

**Antithetical phrasing:**
- Line 24: "The surprising thing isn't the speed gain... It's that the prompts are genuinely better."
- Line 26: "Voice dictation doesn't just save time — it removes a barrier"

**"I" repetition:**
- Line 18: "When I name specific files... When I rattle off a list... When I change my mind" — three consecutive "When I" constructions.
- Line 24: "When I type, I unconsciously economise. I leave out context... I skip the reasoning..." — three consecutive "I" starts.

**Perspective shifts:**
- Line 16: switches from "I" to "you": "When you speak naturally, you correct yourself"
- Line 30: "you need to be able to talk to your computer"
- Line 34: "getting what's in your head into the machine"

**Label-colon patterns:**
- Line 34: "The fundamental problem it solves is bandwidth: getting what's in your head..."
- Line 36: "The obvious question is: what comes next?"

**Verdict:** Good content badly in need of a style pass. The 12 em dashes and "This changes everything" are the headline issues, but there are also perspective shifts, "I" repetition, and antithetical phrasing to fix. Needs significant rework.

---

### 3. Observability Beyond Three Pillars (`observability-beyond-three-pillars.mdx`) — 7/10

**What works:** Good conference writeup structure. Hardie's ideas are well-presented. "Wide events" section is genuinely interesting. The "write it, instrument it, run it, debug it" summary lands well.

**Issues found:**
- Line 10: "Hardie is a veteran of the industry, having written his first program in 1969, with a career spanning government, financial services, and startups." — Long and CV-like. Trim.
- Line 12: "neatly packaged as 'three pillars'" — The word "neatly" feels slightly editorial/snarky. Remove it.
- Line 16: "The distinction that landed hardest was between monitoring and observability." — Good.
- Line 19: "In a world where the most damaging incidents are often the ones nobody anticipated, this is a fundamentally more useful capability." — Long but flows.
- Line 24: "Jeremy Morrell's 'A Practitioner's Guide to Wide Events' makes a persuasive case" — Could link or cite properly.
- Line 36: "We pour effort into instrumenting production systems, but often fly blind during development" — Good natural phrasing.
- Line 44: "Not as an afterthought, not as a nice-to-have, but as a fundamental part" — Borderline staccato/drama. Three-beat rhythm.

**Verdict:** Nearly publish-ready. Minor tightening needed.

---

### 4. OWASP Beyond the Top 10 (`owasp-beyond-top-ten.mdx`) — 7/10

**What works:** Well-structured conference reflection. Good progression from awareness to maturity. Practical toolkit section is genuinely useful. Personal perspective woven in well.

**Issues found:**
- Line 10: "Stepanyan is an OWASP Global Board member, London Chapter Leader, and an independent application security consultant with over twenty years in the industry, much of it in financial services." — Same CV-style bio as Observability note. Trim to essentials.
- Line 12: "That distinction, between security as a surface treatment and security as a design decision, underpins everything OWASP does beyond its most famous list." — Slightly long. Split or trim.
- Lines 26-33: The toolkit section uses bold-label-then-explanation pattern throughout: "**Threat Dragon** is...", "**The Cheat Sheet Series** is...", "**CycloneDX** deserves...", "**DefectDojo** aggregates...". This is the label-colon variant without the colon. It's functional here for a reference list, but consider restructuring as flowing paragraphs.
- Line 40: "These resources are valuable precisely because the AI security landscape is evolving so rapidly." — Slightly generic. More specific would be better.
- Line 54: "Security as a design decision, embedded in how you think about architecture, dependencies, and risk, rather than something you bolt on after the fact." — Perspective shift to "you" in a mostly third-person narrative.

**Verdict:** Nearly publish-ready. Trim the speaker bio, watch the label-explanation pattern.

---

### 5. Git Worktrees Explained (`git-worktrees-explained.mdx`) — 6.5/10

**What works:** Clear technical explainer. The ASCII diagrams are excellent. Comparison table is useful. Well-structured.

**Issues found:**
- **Perspective:** Entire note uses "you" perspective. The style guide says first person throughout. This reads as documentation, not a personal note. No "I" voice at all.
- **Tone:** Reads like a tutorial/reference doc. Doesn't sound like "engineer over tea." More like a blog tutorial.
- **Content worthiness:** Useful content, but is this personal enough for a personal website? It could be on any developer blog. Needs a personal angle — why did Viv learn this, what problem did it solve for him, what was the "aha" moment?

**Verdict:** Publishable with edits. Needs a personal intro and perspective shift from "you" to "I" where appropriate.

---

### Human Review Bottleneck (`human-review-bottleneck-ai.mdx`) — 7/10

**What works:** Good thinking piece. The ToC angle is genuinely interesting. The table mapping quality profiles to ToC steps is excellent. External research adds credibility.

**Issues found:**
- **Perspective shifts:** Switches between "we" (lines 10-15), "I" (lines 26, 42), "you" (line 40). Pick one and stick with it.
- Line 10: "We like to review every change before it's committed, which means we can't spin up multiple agents working in parallel, each producing code independently, because we want to verify the work before it enters the codebase." — Very long, three nested clauses.
- Line 30: "deceptively simple: every system has exactly one constraint" — Label-colon pattern.
- Line 52: "The quality profile approach is sound because it's risk-stratified exploitation." — Jargon-heavy. This doesn't sound like tea conversation.
- Line 56: "As Sabo summarised:" — Colon introduces a quote block. Fine structurally but contributes to colon density.
- Lines 77-84: Series of bold-label paragraphs: "**The review bottleneck is predictable...**", "**The quality profile idea has merit.**", "**Batching might help.**", "**Automated gates reduce constraint load.**", "**The constraint might be appropriate.**" — Five consecutive label-colon style paragraphs.
- Line 98: "The human review bottleneck in AI-assisted development isn't a bug to be fixed." — Antithetical setup for "It's a predictable consequence..."

**Verdict:** Good content, publishable with structural edits. Consolidate perspective, reduce label-colon paragraphs.

---

### 7. Autonomous AI Development (`autonomous-ai-development.mdx`) — 6.5/10

**What works:** Clear structure. The spec vs plan distinction is well-articulated. Good practical focus.

**Issues found:**
- **Overlap:** Significant overlap with `ai-engineering.mdx`. The "Cadence and Traceability" section (lines 34-37) is nearly identical to lines 34-36 in ai-engineering. The "Same Tools, Different Workers" section covers the same ground as "The Practices Don't Change" in ai-engineering.
- Line 10: "Crucially, we're outsourcing authorship, not ownership." — "Crucially" is slightly dramatic as an opener. And this exact phrase appears in ai-engineering too.
- Line 16: "They become essential infrastructure, because agents take things literally and can't intuit what you meant." — Also appears in ai-engineering.
- Line 22-29: Numbered list uses label-colon pattern: "**Create the specification.** Work with...", "**Enrich the specification.** Use..."
- Line 24: "a specification (the stable definition of what we're building) and a plan (a living document that agents update and use to coordinate work)" — Parenthetical explanations feel pitch-deck-like.

**Verdict:** Worth keeping as a focused companion to ai-engineering, but needs deduplication. The unique value is the four-step workflow section.

---

### Organisational Readiness (`organisational-readiness-dark-factory.mdx`) — 5/10

**What works:** Good practical angle on a topic most people hand-wave. The three-step progression is logical. The "do the boring work first" message is valuable and contrarian.

**Issues found:**

**Em dashes: 7** (second highest in the collection — style guide says zero)
- Line 10: "autonomous AI development **—** the 'Dark Factory' model" (1)
- Line 18: "what your system actually does **—** not what you think it does" (1)
- Line 20: "Creating the holdout sets **—** the test data and acceptance criteria **—** that a future" (2, parenthetical pair)
- Line 26: "The testing strategies are different **—** you need broader coverage" (1)
- Line 26: "The review processes are different **—** parallel AI reviews" (1)
- Line 26: "The deployment gates are different **—** automated verification" (1)
- Line 40: "doesn't eliminate the need for experienced engineers **—** it concentrates it" (1)

**Antithetical phrasing:**
- Description: "isn't about buying tools. It's about understanding your own systems" — antithetical in the frontmatter itself.
- Line 14: "less about adopting the latest AI tooling and more about doing the unglamorous engineering work" — "less X, more Y" variant.
- Line 40: "doesn't eliminate the need for experienced engineers — it concentrates it" — "not X; it's Y".

**Perspective:** Cycles through I/you/they across sections. Line 10 uses "I", lines 18-32 shift to "you", lines 38-40 shift to "they".

**Staccato drama:**
- Line 14: "That's the gap." — Standalone punchy fragment.
- Line 22: "This is the work that nobody finds exciting. It doesn't ship features. It doesn't impress stakeholders in a demo." — Three short punchy sentences.
- Lines 38-42: "The ones with the deepest domain understanding. The ones with the discipline..." — Repetitive anaphora.
- Line 34: "Anyone telling you this can be done quickly is selling you something." — Confrontational.

**Cliché:**
- Line 22: "building on sand" — overused metaphor. Also appears in toc-aware-prompting.

**Verdict:** Strong ideas undermined by heavy em dash use, antithetical patterns, staccato drama, and perspective cycling. Worth investing in a rewrite because the content is excellent.

---

### 9. Diversity in Tech — GOTO (`diversity-in-tech-goto.mdx`) — 6/10

**What works:** Important topic, genuine personal observation. The Lego minifig metaphor is effective. Bryson's research is well-cited. Sam Aaron angle is interesting.

**Issues found:**
- Line 14: "But walking around the break-out area, it struck me that in a room representing over 40 countries and the forefront of technology, there was an overwhelming visual similarity." — Long sentence, could be split.
- Line 18: Enormous run-on sentence (starts "This isn't unique to GOTO..." and runs 6+ clauses). Needs breaking up.
- Line 22-23: "Looking around at the conference it was clear that the 'who's in the room' problem is happening right now. We're building AI systems, global platforms, and future infrastructure with a remarkably narrow slice of human perspective. The homogeneity isn't just about fairness; it's about capability." — The last sentence is antithetical phrasing. And "remarkably narrow slice" borders on salesy.
- Line 39: "But most of the industry still has just one door, and it's shaped exactly like the people already inside." — Clever but edges toward staccato drama/soundbite.
- Line 45: "But this comfort comes at a cost." — Slightly trite.
- Line 47: "When we're all variations of the same Lego figure, we're going to build variations of the same solutions." — Repetitive construction.
- Lines 51-55: Final paragraph is a series of rhetorical questions. Feels more like a keynote close than a personal note. "The sea of sameness at GOTO wasn't anybody's fault, but it is everybody's problem." — Soundbite.

**Perspective:** Switches between "I" and "we" and "you" throughout.

**Verdict:** Important content worth publishing, but the writing tries too hard to be profound. Tone it down, shorten sentences, reduce rhetorical flourishes.

---

### 10. Connection is Everything — GOTO (`connection-is-everything-goto.mdx`) — 5.5/10

**What works:** Thorough conference synthesis. Good personal reflection woven in. The forest/desert metaphor is well-explained. Personal anecdote about close client engagement is the strongest section.

**Issues found:**
- **Length:** At 95 lines, this is the longest note. Could lose 20-30% without losing substance.
- Line 13: "Not in the superficial, tick-box sense of 'user research' or 'stakeholder management,' but genuine, trust-based relationships" — Antithetical phrasing.
- Line 21: "the shift from asking 'where am I in the world?' (old-school map reading) to 'the world comes to me' (Google Maps, where you are the blue dot at the centre and the world revolves around you)" — Very long parenthetical.
- Lines 33-35: The forest/desert descriptions use label-colon extensively: "Dependencies are an invitation for collaboration.", "Status reporting is honest conversation.", "Accountability in the forest is an invitation to trust." — Then desert equivalents follow the same pattern.
- Line 42: "Beck put it bluntly." — Slightly dramatic lead-in.
- Line 43: "These things seem scary and impractical because we're operating from a desert mindset. We've internalised scarcity so deeply that abundance looks like recklessness." — Keynote rhetoric.
- Lines 77-85: Five consecutive bold-label paragraphs: "**Create the conditions...**", "**Make user connection integral...**", "**Conversations over documentation.**", "**Trust is the foundation.**", "**Connection enables creativity.**" — Label-colon pattern, staccato.
- Lines 89-95: "The challenge is that it requires courage. Courage to have honest conversations. Courage to trust. Courage to invite customers..." — Repetitive "Courage to..." pattern. Staccato drama. "Connection is everything" repeated twice in the final paragraph.

**Verdict:** Good content buried in keynote-style rhetoric. The personal anecdote (lines 45-47) is the best part. Trim aggressively, convert label-colon sections to flowing prose, remove the rhetorical repetition at the end.

---

### 11. AI Engineering (`ai-engineering.mdx`) — 5.5/10

**What works:** Comprehensive overview of Viv's approach. Good breadth of coverage. Some strong individual sections.

**Issues found:**
- **Length:** At 79 lines of prose, it's very long. Tries to cover too much ground. Reads more like an essay than a note.
- **"I" repetition:** Lines 10-14: "I recognise...", "I am clear...", "I find it exciting..." — Three consecutive sentences starting with "I".
- Line 12: "I am clear that we're outsourcing authorship, not ownership." — Comma splice following this ("AI agents write the code, but I remain accountable for quality, security, and fitness for purpose, and the workflow has to reflect this, I define what gets built"). Four clauses strung together with commas.
- Line 18: "I'm mindful of this, so I keep my workflow adaptable and deliberately not tied to any specific model or tool, I work at the principles level." — Comma splice.
- Line 46: "Dan Shapiro calls the fully autonomous end of this spectrum the 'Dark Factory' — where AI agents handle implementation end-to-end" — Em dash.
- Line 48: "I've spent over twenty-five years building that understanding — across domains, stacks, and organisations." — Slightly self-aggrandising. Could be toned down.
- Line 48: "The conversations that used to happen in hallways and standups? I've had thousands of them. That instinct for when something feels off, for what the spec didn't say? It doesn't come from a model. It comes from years of getting it wrong, learning why, and building the judgement to get it right." — Staccato drama. Rhetorical questions. This reads like a keynote close.
- Line 58: "The real craft was never typing syntax." — Antithetical setup.
- Line 62: "My bias for action runs through how I deliver." — Slightly corporate.
- Line 68-70: "I led a comprehensive research programme..." through "Senior stakeholders called it 'a magnificent piece of work'" — This reads like a CV testimonial section. Out of place.
- Line 78: "we can be genuinely excited about the possibilities, we should be honest about the limitations, we shouldn't expect those limitations to remain, and we should stay true to the principles" — Comma-spliced list of four items. Reads like a keynote's final slide.
- **Overlap:** Much content is repeated in autonomous-ai-development and human-review-bottleneck.

**Verdict:** Needs significant rework. This tries to be everything — manifesto, methodology, portfolio piece, keynote. Pick one angle and go deep. Consider splitting into focused notes (some already exist).

---

### ToC-Aware Prompting (`toc-aware-prompting.mdx`) — 6.5/10

**What works:** The prompt templates are genuinely useful and practical. Good companion to the human-review-bottleneck note. The structure is logical and well-paced. Strong content grounded in a real framework (ToC). No em dashes.

**Issues found:**

**Antithetical phrasing:**
- Line 14: "the right response isn't to try harder or work longer hours. It's to be deliberate about how you manage flow" — classic "not X; it's Y".
- Line 44: "This isn't about arbitrary size limits; it's about conceptual coherence." — same pattern.

**Cliché:**
- Line 22 (in the companion note context): "building on sand" — overused metaphor, also appears in organisational-readiness.

**Perspective:** Entirely second-person ("you"). Consistent within itself (no jarring shifts), but doesn't match the "I" voice the style guide prescribes. The prompt templates legitimately use "you" (they're instructions to an agent), but the explanatory prose could be in first person.

**Label-colon pattern:**
- Lines 20-27: Four consecutive bold-label paragraphs: "**The agent should understand...**", "**Reviewability is a feature.**", "**Not all work needs equal scrutiny.**", "**The agent should help manage flow...**"
- Lines 70-86: Three quality profile sections follow the same label-then-prompt-block pattern.

**Tone:** Hits "senior engineer" reasonably well for a guide format. No salesy language, no drama. The detached voice is the main weakness — a personal framing layer ("here's what I've found works") would strengthen it significantly.

**Content worthiness:** Strong. Practical, specific, and grounded. Whether it's a "note" or a "guide/resource" is a genre question worth deciding consciously.

**Verdict:** Solid content with minor style fixes. Add personal voice in the framing sections, fix the two antithetical patterns, and decide whether "you" perspective is acceptable for guide-format notes.

---

### 13. What Makes Humans Valuable (`human-value-ai-age.mdx`) — 5/10

**What works:** Jevons' paradox angle is genuinely interesting and well-explained. The economic framing is distinctive.

**Issues found:**
- Line 10: "I've been sitting with this question for a while" — Good personal touch.
- Lines 12-13: "If we define our value as 'I write code,' then yes, AI looks threatening. But if our value was always in deciding *what* to build, *why* to build it, and *whether* it's working as intended, then faster execution is a multiplier, not a replacement." — Classic antithetical phrasing. "Not X, but Y."
- Lines 22-24: "## Three Pillars of Human Value" followed by "**Judgement.**", "**Trust.**", "**Imagination.**" — This is keynote structure. Bold single-word headers followed by explanatory paragraphs. Staccato drama. The section title itself ("Three Pillars") is conference-speak.
- Line 26: "AI runs on the data and rules we feed it, but it doesn't feel the consequences. We do." — Antithetical. Also the "We do." is staccato drama.
- Line 28: "Human oversight isn't a bottleneck to be eliminated; it's a feature that provides accountability." — Antithetical. Also borrows from software jargon ("it's a feature, not a bug").
- Line 34: "The opportunity here is real, but it comes with a condition." — Pitch-deck transition.
- Line 36: "If we spend our time trying to out-code the machines, we'll lose. If we invest in judgement..." — Antithetical. Also slightly dramatic/confrontational.
- Line 38: "The job isn't going away. But it is changing. And the sooner we're honest about where our real value lies, the better positioned we'll be to make the most of it." — Keynote close. Three short sentences building to a punchline.

**Verdict:** The Jevons' paradox section is worth keeping. The "Three Pillars" section needs complete rewrite — drop the keynote structure, write it conversationally. The opening and closing need the drama drained out.

---

### 14. Principles for Leading AI Development (`principles-leading-ai-development.mdx`) — 4/10

**What works:** The nine principles contain good ideas. The "skill atrophy" section is well-observed. The Addy Osmani reference is specific and credible.

**Issues found:**
- **Perspective:** The entire note uses "you" and "your" voice. This is fundamentally at odds with the style guide's "first person throughout" rule.
- Line 8: "You remain accountable. AI is a powerful collaborator, but you're not delegating leadership, you're delegating execution. Your value was never your typing speed, it was your judgement. Protect it." — Four sentences, all "you"-directed. Reads as a lecture. Also: antithetical ("not X, you're Y"), comma splices, and the imperative "Protect it." is staccato drama.
- Line 10: "These principles aren't about limiting AI's contribution, they're about ensuring..." — Antithetical.
- Lines 12-20: All nine principles use bold-label-colon-explanation: "**Own the architecture:** You define...", "**Make the hard decisions:** Trade-offs...", etc. This is exactly the pattern the style guide calls out as "pitch deck style."
- Line 14: "You hold the full picture, including history, constraints, politics, and roadmap." — Long subordinate clause list.
- Line 16: "Don't let institutional knowledge live only in chat logs." — Imperative/preachy.
- Line 17: "you're the one they will call, not the model" — Antithetical.
- Line 24: "AI operates without accountability, long-term memory, or genuine understanding" — "operates without" x3 is a label-list.
- Line 26: "The job was never about typing syntax. That was just the interface." — Staccato. Also appears in ai-engineering.
- Line 36: "Read before you accept. Debug manually before asking for help. See it with your own eyes. Occasionally build things the slow way." — Four consecutive imperatives. Staccato, preachy, lecture-like.

**Verdict:** This is the weakest note for the style guide. It reads as a listicle or keynote manifesto, not a personal note. The "you" voice is preachy. The antithetical phrasing is constant. The label-colon pattern dominates. Needs a fundamental rewrite: shift to first person, convert the principles list into flowing prose about how Viv actually works, remove the lecturing tone.

---

## Cross-Cutting Observations

### Content Overlap
Three notes share significant overlapping content:
- **ai-engineering** — the "mothership" note trying to cover everything
- **autonomous-ai-development** — largely a subset of ai-engineering
- **principles-leading-ai-development** — covers the same "ownership not authorship" theme

Consider whether all three are needed, or whether ai-engineering should be the definitive note with the others either merged or deleted.

### The "You" Problem
Five notes (principles-leading, git-worktrees, toc-aware-prompting, organisational-readiness, and parts of others) use "you" perspective extensively. The site's voice is first person. These all need perspective shifts.

### Conference Notes vs Think Pieces
The conference writeups (GOTO notes, observability, OWASP) generally score higher because they have a natural structure (here's what I heard, here's what I think about it) that produces more natural writing. The think pieces tend to slip into keynote/manifesto mode.

### Em Dash Concentration
Em dashes are concentrated in specific notes rather than spread evenly:
- **voice-driven-development: 12** (worst offender by far)
- **organisational-readiness: 7**
- **ai-engineering: 3**
- All other notes: 0

This suggests a pattern that crept in during certain writing sessions rather than a consistent habit.

### Recurring Patterns to Fix
1. **Antithetical phrasing** ("it's not X; it's Y") — appears in 10 of 14 notes. The most habitual pattern. human-value-ai-age (6 instances) and connection-is-everything (6 instances) are worst.
2. **Em dashes** — 22 total across 3 notes. voice-driven-development alone accounts for 12.
3. **Label-colon paragraphs** (bold header, then explanation) — appears in 7 of 14 notes
4. **Staccato drama** (punchy short sentences for emphasis) — appears in 6 of 14 notes
5. **Perspective shifts** (I/you/we cycling) — appears in 9 of 14 notes
6. **"I" repetition** (consecutive sentences starting with "I") — appears in 3 of 14 notes
7. **Comma splices** — appears in 3 of 14 notes (particularly ai-engineering)
