---
generated_by: Claude Opus 4.6
generation_date: 2026-03-04
model_version: claude-opus-4-6
purpose: suggested_changes
status: draft
human_reviewer: matthewvivian
tags: [notes, writing-style, editing, suggested-changes]
---

# Field Notes — Suggested Changes

Each change is tagged with the style rule it addresses. Changes are ordered by note ranking (best first — least work needed). For each note, changes are ordered by priority (most impactful first).

Reference: `docs/style-guide.md` and `docs/reviews/2026-03-04-field-notes-writing-style-review.md`

---

## 1. GSAP ScrollTrigger Gotchas (`gsap-scrolltrigger-astro-gotchas.mdx`)

**No changes required.** Publish as-is. This note is the tone benchmark.

---

## 2. Observability Beyond Three Pillars (`observability-beyond-three-pillars.mdx`)

### Change 2.1 — Trim speaker bio (line 10)
**Rule:** No CV-style fragments
**Current:**
> Hardie is a veteran of the industry, having written his first program in 1969, with a career spanning government, financial services, and startups.

**Suggested:**
> Hardie has been in the industry since the 1960s, working across government, financial services, and startups.

### Change 2.2 — Remove editorialising word (line 12)
**Rule:** Keep it conversational
**Current:**
> neatly packaged as "three pillars"

**Suggested:**
> packaged as "three pillars"

### Change 2.3 — Reduce staccato in closing (line 44)
**Rule:** No staccato drama
**Current:**
> Not as an afterthought, not as a nice-to-have, but as a fundamental part of what it means to write production software.

**Suggested:**
> It's a fundamental part of what it means to write production software, not something to bolt on afterwards.

---

## 3. OWASP Beyond the Top 10 (`owasp-beyond-top-ten.mdx`)

### Change 3.1 — Trim speaker bio (line 10)
**Rule:** No CV-style fragments
**Current:**
> Stepanyan is an OWASP Global Board member, London Chapter Leader, and an independent application security consultant with over twenty years in the industry, much of it in financial services.

**Suggested:**
> Stepanyan is an OWASP Global Board member and independent application security consultant with over twenty years in the industry.

### Change 3.2 — Fix perspective shift (line 54)
**Rule:** No perspective shifts
**Current:**
> Security as a design decision, embedded in how you think about architecture, dependencies, and risk, rather than something you bolt on after the fact.

**Suggested:**
> Security as a design decision, embedded in how we think about architecture, dependencies, and risk, rather than something bolted on after the fact.

---

## 4. Human Review Bottleneck (`human-review-bottleneck-ai.mdx`)

### Change 4.1 — Consolidate perspective to "I" (throughout)
**Rule:** No perspective shifts
Replace "we" with "I" where it refers to Viv's personal experience. Keep "we" only where it genuinely means "developers collectively." Key lines to fix: 10, 11, 14, 15.
**Example — line 10:**
**Current:**
> We like to review every change before it's committed, which means we can't spin up multiple agents working in parallel

**Suggested:**
> I like to review every change before it's committed, which means I can't spin up multiple agents working in parallel

### Change 4.2 — Break long sentence (line 10)
**Rule:** Flow; vary sentence length
**Current:**
> Working with AI coding agents like Claude Code, the more capable these tools become, the more we become the bottleneck. We like to review every change before it's committed, which means we can't spin up multiple agents working in parallel, each producing code independently, because we want to verify the work before it enters the codebase.

**Suggested:**
> Working with AI coding agents like Claude Code, the more capable these tools become, the more I become the bottleneck. I like to review every change before it's committed. That means I can't spin up multiple agents working in parallel, each producing code independently, because I want to verify the work before it enters the codebase.

### Change 4.3 — Fix cliché (line 30)
**Rule:** No clichés
**Current:**
> The central insight is deceptively simple: every system has exactly one constraint

**Suggested:**
> The central insight is straightforward. Every system has exactly one constraint

### Change 4.4 — Convert bold-label paragraphs to flowing prose (lines 77-84)
**Rule:** No label-colon-explanation pattern
**Current:** Five consecutive bold-label paragraphs starting with "**The review bottleneck is predictable...**", "**The quality profile idea has merit.**", etc.
**Suggested:** Combine these into 2-3 flowing paragraphs. For example:
> The review bottleneck is predictable and normal. It's what ToC would expect when you accelerate code production. The interesting question is what to do about it.
>
> Different work genuinely has different risk profiles. Applying uniform process to non-uniform risk wastes constraint capacity. Spending review time on throwaway prototypes takes capacity away from reviewing production changes. The "full feature, then review" approach is one way to exploit the constraint more efficiently, because reviewing a coherent set of related changes together builds context once rather than repeatedly.
>
> Automated gates help too. Tests, linting, type checking, and other automated verification catch certain classes of problems without consuming human review capacity. Only work that actually needs human attention reaches the human. And sometimes the constraint is appropriate. In high-stakes contexts, careful human review might be exactly what the system needs, even if it's slow.

### Change 4.5 — Remove antithetical phrasing (line 98)
**Rule:** No antithetical phrasing
**Current:**
> The human review bottleneck in AI-assisted development isn't a bug to be fixed. It's a predictable consequence of accelerating one part of a system while leaving other parts unchanged.

**Suggested:**
> The human review bottleneck in AI-assisted development is a predictable consequence of accelerating one part of a system while leaving other parts unchanged.

---

## 5. Git Worktrees Explained (`git-worktrees-explained.mdx`)

### Change 5.1 — Add personal framing intro (before line 8)
**Rule:** First person throughout; show personality
**Current:** Jumps straight into "What is a worktree?" with no personal context.
**Suggested:** Add a brief personal intro before the first heading, something like:
> I first encountered Git worktrees when working with Claude Code's team features. Multiple AI agents needed to work on different branches simultaneously without clobbering each other's files. Worktrees was suggested by CLaude as the solution, and once I understood them, I started using them for my own parallel work too.

### Change 5.2 — Shift key explanations to first person where natural
**Rule:** First person throughout
**Note:** The technical explainer sections with diagrams can stay impersonal (they're reference material). But the "How Claude Code uses worktrees" section (line 86+) and the "Why worktrees instead of clones?" section should use "I" where it makes sense. For example:
**Current (line 88):**
> Multiple agents can't safely work in the same directory on different branches simultaneously (they'd clobber each other's files).

**Suggested:**
> I learned this the hard way: multiple agents can't safely work in the same directory on different branches simultaneously, because they'd clobber each other's files.

---

## 6. ToC-Aware Prompting (`toc-aware-prompting.mdx`)

### Change 6.1 — Add personal voice throughout
**Rule:** First person throughout; show personality
Add personal framing: why Viv developed these patterns, what worked, what didn't.
**Example — reframe the opening (line 8):**
**Current:**
> This is a companion to [The Human Review Bottleneck]... This note covers practical approaches for working with AI coding agents when human review is the bottleneck.

**Suggested:**
> This is a companion to [The Human Review Bottleneck]... After exploring the theory, I wanted to document the practical approaches I've been using with Claude Code when my own review capacity is the bottleneck.

### Change 6.2 — Fix antithetical phrasing (line 14)
**Rule:** No antithetical phrasing
**Current:**
> Theory of Constraints suggests that the right response isn't to try harder or work longer hours. It's to be deliberate about how you manage flow through the constraint.

**Suggested:**
> Theory of Constraints suggests being deliberate about how you manage flow through the constraint, rather than working harder or longer.

### Change 6.3 — Fix antithetical phrasing (line 44)
**Rule:** No antithetical phrasing
**Current:**
> This isn't about arbitrary size limits; it's about conceptual coherence.

**Suggested:**
> The goal is conceptual coherence, not arbitrary size limits.

### Change 6.4 — Shift explanatory "you" to "I" where appropriate (throughout)
**Rule:** First person throughout
The prompt templates legitimately use "you" (they're instructions to an agent). But the explanatory prose around them should be in first person. Scan for "you" in non-template paragraphs and convert.

---

## 7. Autonomous AI Development (`autonomous-ai-development.mdx`)

### Change 7.1 — Remove "Crucially" (line 10)
**Rule:** No staccato drama; keep it conversational
**Current:**
> Crucially, we're outsourcing authorship, not ownership.

**Suggested:**
> We're outsourcing authorship, not ownership.

### Change 7.2 — Deduplicate "Cadence and Traceability" section (lines 33-37)
**Rule:** Content overlap
This section is nearly identical to lines 34-36 of `ai-engineering.mdx`. Either:
- Remove it from this note and link to ai-engineering, or
- Keep it here and remove the duplicate from ai-engineering.
**Suggested:** Add a brief link instead:
> The cadence shifts too. I've written about this in [AI Engineering](/notes/ai-engineering-q1-2026#the-practices-dont-change), including how asynchronous patterns become the primary mode and traceability becomes essential.

### Change 7.3 — Convert numbered workflow to flowing prose (lines 26-29)
**Rule:** No label-colon-explanation pattern
**Current:** Four bold-numbered steps with label-colon format.
**Suggested:** Write as connected paragraphs describing the workflow naturally, e.g.:
> The workflow starts with creating a comprehensive specification collaboratively with AI agents, covering all requirements and system details. Then I use agents to enrich it with implementation details I'd normally determine as a developer: identifying suitable libraries, evaluating technical approaches, filling in the practical gaps. From there, I create a companion plan that breaks the work into discrete tasks with clear definition-of-done criteria. An orchestrating agent delegates tasks to sub-agents, each responsible for a bounded piece of work, updating the plan as they complete tasks, flag blockers, or identify new work.

---

## 8. Diversity in Tech — GOTO (`diversity-in-tech-goto.mdx`)

### Change 8.1 — Break enormous sentence (line 18)
**Rule:** Flow; vary sentence length
**Current:**
> This isn't unique to GOTO, they put on an impressive event. But when we gather in large numbers, patterns become visible that are easy to miss in our day-to-day work. And this particular pattern is clear to see. It raises fundamental questions about who gets to build the future and whose perspectives are shaping the technology that everyone will use. More importantly, as Joanna Bryson would later articulate in her keynote, it highlights what we're losing. Diversity isn't just about representation, it's about capability. Different backgrounds bring different solutions. Varied experiences reveal different problems. By operating with such a narrow band of perspectives, we're not just excluding people; we're excluding ideas, innovations, and answers.

**Suggested:** This is actually multiple sentences but crammed into one paragraph. Break it into two paragraphs and trim:
> This isn't unique to GOTO; they put on an impressive event. But when we gather in large numbers, patterns become visible that are easy to miss day-to-day.
>
> Joanna Bryson would later articulate this in her keynote. Different backgrounds bring different solutions. Varied experiences reveal different problems. By operating with such a narrow band of perspectives, we're not just excluding people. We're excluding ideas, innovations, and answers.

### Change 8.2 — Remove antithetical phrasing (line 33)
**Rule:** No antithetical phrasing
**Current:**
> The homogeneity isn't just about fairness; it's about capability.

**Suggested:**
> The homogeneity affects capability directly.

### Change 8.3 — Tone down the rhetorical close (lines 51-55)
**Rule:** No staccato drama; no salesy language
**Current:** Series of rhetorical questions ending with "The sea of sameness at GOTO wasn't anybody's fault, but it is everybody's problem."
**Suggested:** Simplify to a direct statement:
> The conference made these patterns visible. Until our industry includes a broader spectrum of human perspective, we're building the future with a limited palette of ideas. That costs all of us.

---

## 9. Connection is Everything — GOTO (`connection-is-everything-goto.mdx`)

### Change 9.1 — Remove antithetical phrasing in intro (line 13)
**Rule:** No antithetical phrasing
**Current:**
> Not in the superficial, tick-box sense of "user research" or "stakeholder management," but genuine, trust-based relationships

**Suggested:**
> Genuine, trust-based relationships that fundamentally change how we build software.

### Change 9.2 — Convert label-colon practice list to flowing prose (lines 77-85)
**Rule:** No label-colon-explanation pattern
**Current:** Five bold-label paragraphs ("**Create the conditions...**", "**Make user connection integral...**", etc.)
**Suggested:** Rewrite as 2-3 connected paragraphs discussing what Viv took away, in first person, without the bold labels. Focus on the personal application rather than prescriptive advice.

### Change 9.3 — Remove repetitive "courage" pattern (lines 91-92)
**Rule:** No staccato drama
**Current:**
> The challenge is that it requires courage. Courage to have honest conversations. Courage to trust. Courage to invite customers into the team rather than keeping them at arm's-length. Courage to say "I don't know" and mean it as an invitation to learn together.

**Suggested:**
> The challenge is that it requires courage: honest conversations, real trust, and inviting customers into the team rather than keeping them at arm's length.

### Change 9.4 — Remove repetitive ending (line 95)
**Rule:** No staccato drama; keep it tight
**Current:**
> But as the thread through GOTO suggested, connection is everything, and everything else flows from that. Connection is everything. Not connection to our tools, our frameworks, our methodologies. Connection to the people whose problems we're trying to solve.

**Suggested:** Cut entirely. The previous paragraph already makes the point. If keeping a closing, one sentence:
> The thread through GOTO was clear: connection to the people whose problems we're solving matters more than connection to our tools.

### Change 9.5 — Trim overall length
**Rule:** Keep things tight
Target cutting 20-30% of the note. Key areas to trim:
- The forest/desert descriptions (lines 33-35) can be summarised rather than listing every aspect
- The Hughes section (lines 17-27) has too much detail about specific examples
- The Harmel-Law section (lines 61-65) quotes at length; summarise instead

---

## 10. Organisational Readiness (`organisational-readiness-dark-factory.mdx`)

### Change 10.1 — Remove all 7 em dashes
**Rule:** No em dashes
This note has 7 em dashes (second highest in the collection). Each needs replacing:
- Line 10: "autonomous AI development **—** the 'Dark Factory' model" → use a comma
- Line 18: "what your system actually does **—** not what you think it does" → split into two sentences
- Line 20: "Creating the holdout sets **—** the test data and acceptance criteria **—** that a future" → use parentheses or commas
- Line 26 (3 instances): "The testing strategies are different **—** you need..." → split into separate sentences or use commas
- Line 40: "doesn't eliminate the need for experienced engineers **—** it concentrates it" → split or use a comma

### Change 9.2 — Shift perspective to first person (throughout)
**Rule:** First person throughout
Replace "you" with "I" where it refers to personal experience, and "we" where it's a collective observation. Key lines: 18, 32, 34, 42.

### Change 9.3 — Tone down heading (line 9)
**Rule:** No staccato drama
**Current:** `## The Gap Nobody Talks About`
**Suggested:** `## The Practical Gap`

### Change 9.4 — Remove confrontational line (line 34)
**Rule:** No confrontational comparisons
**Current:**
> Anyone telling you this can be done quickly is selling you something.

**Suggested:** Remove entirely, or soften:
> This takes longer than most people expect.

### Change 9.5 — Fix staccato pattern (line 22)
**Rule:** No staccato drama
**Current:**
> This is the work that nobody finds exciting. It doesn't ship features. It doesn't impress stakeholders in a demo.

**Suggested:**
> This is the work that nobody finds exciting because it doesn't ship features or impress stakeholders in a demo.

### Change 10.6 — Fix staccato pattern (lines 38-42)
**Rule:** No staccato drama; no trite closing
**Current:**
> They're the ones who can write the best and most honest specs about their own code. The ones with the deepest domain understanding. The ones with the discipline to invest in the boring, unglamorous work...

**Suggested:**
> They're the ones with the deepest domain understanding, the discipline to invest in unglamorous documentation, and the honesty to write accurate specs about their own code.

### Change 10.7 — Fix cliché (line 22)
**Rule:** No clichés
**Current:**
> any move towards autonomous development is building on sand

**Suggested:**
> any move towards autonomous development has no foundation to verify against

### Change 10.8 — Fix antithetical in description
**Rule:** No antithetical phrasing
**Current (frontmatter):**
> The path to autonomous AI development isn't about buying tools. It's about understanding your own systems deeply enough to hand them over.

**Suggested:**
> The path to autonomous AI development depends on understanding your own systems deeply enough to hand them over.

---

## 11. AI Engineering (`ai-engineering.mdx`)

### Change 11.1 — Remove all 3 em dashes
**Rule:** No em dashes
- Line 44: "The bottleneck is no longer how fast you can build **—** it's how well you can define what to build." → Split: "The bottleneck isn't build speed any more. It's how well you define what to build."
- Line 46: "the 'Dark Factory' **—** where AI systems handle implementation end-to-end" → Use comma: "the 'Dark Factory', where AI systems handle implementation end-to-end"
- Line 48: "I've spent over twenty-five years building that understanding **—** across domains, stacks, and organisations." → Remove em dash: "...that understanding across domains, stacks, and organisations."

### Change 11.2 — Fix "I" repetition (lines 10-14)
**Rule:** No "I" repetition
**Current:**
> I recognise that working effectively with AI agents requires the same skills... I am clear that we're outsourcing authorship... I find it exciting that XP practices are as relevant as ever...

**Suggested:** Restructure to vary sentence openings:
> After 25 years of building software, AI is the most significant shift in how the craft is practised. Working effectively with AI agents requires the same skills I've been applying with human teams for years... The exciting thing is that XP practices are as relevant as ever...

### Change 11.3 — Fix comma splices (lines 12, 18)
**Rule:** Flow; use full sentences
**Current (line 12):**
> AI agents write the code, but I remain accountable for quality, security, and fitness for purpose, and the workflow has to reflect this, I define what gets built, set the standards it must meet, and verify that it does.

**Suggested:**
> AI agents write the code, but I remain accountable for quality, security, and fitness for purpose. The workflow reflects this. I define what gets built, set the standards it must meet, and verify that it does.

**Current (line 18):**
> I'm mindful of this, so I keep my workflow adaptable and deliberately not tied to any specific model or tool, I work at the principles level.

**Suggested:**
> I'm mindful of this, so I keep my workflow adaptable and deliberately not tied to any specific model or tool. I work at the principles level.

### Change 11.4 — Remove CV testimonial section (lines 66-70)
**Rule:** No salesy language; confident but not boastful
**Current:**
> I led a comprehensive research programme for a UK government department... Senior stakeholders called it "a magnificent piece of work" and "exactly what I wanted to get out of it."

**Suggested:** Either remove entirely (the work speaks for itself) or reframe without the quotes:
> Recent work includes a research programme for a UK government department, evaluating AI-powered security testing tools for air-gapped environments. The work involved analysing 60+ solutions and authoring a detailed technical report with a structured evaluation framework.

### Change 11.5 — Remove staccato keynote passage (line 48)
**Rule:** No staccato drama
**Current:**
> The conversations that used to happen in hallways and standups? I've had thousands of them. That instinct for when something feels off, for what the spec didn't say? It doesn't come from a model. It comes from years of getting it wrong, learning why, and building the judgement to get it right.

**Suggested:**
> That instinct for when something feels off, for what the spec didn't say, comes from years of getting it wrong and learning why. I've had thousands of those hallway and standup conversations, and they've built the kind of judgement that models can't replicate.

### Change 11.6 — Remove antithetical phrasing (line 58)
**Rule:** No antithetical phrasing
**Current:**
> The real craft was never typing syntax. It was systems thinking...

**Suggested:**
> The craft is systems thinking: understanding how components interact, anticipating failure modes, and knowing how to define what good looks like.

### Change 11.7 — Fix cliché in description (line 6)
**Rule:** No clichés
**Current:**
> "honing my craft"

**Suggested:**
> "informed by 25 years of building software"

### Change 11.8 — Consider splitting or trimming significantly
This note tries to cover philosophy, workflow, practices, spec importance, craft maintenance, bias for action, portfolio, and future direction. Consider whether some sections belong in their own focused notes (several already exist as separate notes). A tighter version focusing on "how I work with AI" would be stronger.

---

## 12. Voice-Driven Development (`voice-driven-development.mdx`)

### Change 12.1 — Remove all 12 em dashes
**Rule:** No em dashes
This is the worst offender in the entire collection. All 12 em dashes must be replaced with commas, parentheses, full stops, or restructured sentences:

**Line 10 (2 em dashes, parenthetical pair):**
**Current:**
> Not the mechanical typing — most engineers can type fast enough — but the cognitive overhead

**Suggested:**
> Not the mechanical typing (most engineers can type fast enough) but the cognitive overhead

**Line 12 (1 em dash):**
**Current:**
> Not just for AI prompts — for emails, documentation, notes, general writing.

**Suggested:**
> Not just for AI prompts, but for emails, documentation, notes, and general writing.

**Line 16 (1 em dash):**
**Current:**
> You rubber-duck — talking through an approach

**Suggested:**
> You rubber-duck, talking through an approach

**Line 18 (2 em dashes, parenthetical pair):**
**Current:**
> the natural speech patterns — the false starts, the corrections, the thinking-out-loud — and outputs a clean version

**Suggested:**
> the natural speech patterns (the false starts, the corrections, the thinking-out-loud) and outputs a clean version

**Line 20 (2 em dashes, parenthetical pair):**
**Current:**
> the way I'd talk to a colleague — naturally, with all the messiness that implies — and what comes out the other end

**Suggested:**
> the way I'd talk to a colleague, naturally, with all the messiness that implies. What comes out the other end is a well-structured prompt, email, or document.

**Line 24 (1 em dash):**
**Current:**
> "the constraint here is that..." — context that makes the agent's output significantly more useful.

**Suggested:**
> "the constraint here is that...". That kind of context makes the agent's output significantly more useful.

**Line 26 (1 em dash):**
**Current:**
> Voice dictation doesn't just save time — it removes a barrier

**Suggested:**
> Voice dictation removes a barrier between what I'm thinking and what the agent receives.

**Line 34 (1 em dash):**
**Current:**
> But it's still indirect — I'm encoding thoughts into speech

**Suggested:**
> But it's still indirect. I'm encoding thoughts into speech

**Line 36 (1 em dash):**
**Current:**
> a history of narrowing the gap between thought and action — from punch cards to command lines

**Suggested:**
> a history of narrowing the gap between thought and action, from punch cards to command lines

### Change 12.2 — Remove salesy sentence (line 18)
**Rule:** No salesy language
**Current:**
> This changes everything.

**Suggested:** Remove entirely. The next sentence ("It cleans up the natural speech patterns...") makes the point without the drama.

### Change 12.3 — Fix "I" repetition (line 18)
**Rule:** No "I" repetition
**Current:**
> When I name specific files, classes, or tools, it applies the correct formatting... When I rattle off a list of things conversationally, it structures them... When I change my mind partway through a sentence, it takes the final version

**Suggested:** Vary the structure:
> It handles specific file names with correct formatting: `camelCase`, `SCREAMING_SNAKE_CASE`, `kebab-case`. Conversational lists get structured properly. Mid-sentence corrections get resolved to the final version.

### Change 12.4 — Fix "I" repetition (line 24)
**Rule:** No "I" repetition
**Current:**
> When I type, I unconsciously economise. I leave out context that feels obvious to me but isn't obvious to the agent. I skip the reasoning behind a decision because explaining it feels like too much effort.

**Suggested:**
> Typing encourages economy. Context that feels obvious gets left out. Reasoning behind decisions gets skipped because explaining feels like too much effort.

### Change 12.5 — Fix perspective shifts (lines 16, 30, 34)
**Rule:** No perspective shifts
**Current (line 16):**
> When you speak naturally, you correct yourself mid-sentence.

**Suggested:**
> When I speak naturally, I correct myself mid-sentence.

### Change 12.6 — Fix antithetical phrasing (line 24)
**Rule:** No antithetical phrasing
**Current:**
> The surprising thing isn't the speed gain, though that's real. It's that the prompts are genuinely better.

**Suggested:**
> The speed gain is real, but the bigger surprise is that the prompts are genuinely better.

### Change 12.7 — Fix label-colon patterns (lines 34, 36)
**Rule:** No label-colon-explanation pattern
**Current (line 34):**
> The fundamental problem it solves is bandwidth: getting what's in your head into the machine

**Suggested:**
> The fundamental problem is bandwidth. Getting what's in my head into the machine with as little loss and friction as possible.

---

## 13. What Makes Humans Valuable (`human-value-ai-age.mdx`)

### Change 13.1 — Rewrite "Three Pillars" section (lines 22-31)
**Rule:** No staccato drama; no label-colon pattern
**Current:** Three bold single-word headers ("**Judgement.**", "**Trust.**", "**Imagination.**") with explanatory paragraphs. This is keynote structure.
**Suggested:** Rewrite as flowing first-person prose. For example:
> The human contribution comes down to three things AI fundamentally can't provide.
>
> First, judgement. AI optimises for metrics, but it can't tell whether a metric is the right one. It can't weigh second-order effects on users, trust, or reputation. Knowing *why* something should be built matters more than producing more of it.
>
> Second, trust. Systems need human oversight. Someone has to check the incentives, pull the plug when things go wrong, and maintain legitimacy. An unsupervised AI system might be technically correct and still erode the trust that makes it useful.
>
> Third, imagination. AI remixes the past in novel ways, and that's genuinely useful. But it doesn't dream up new futures or imagine fundamentally different approaches to broken processes. We still decide which goals are worth pursuing.

### Change 13.2 — Remove antithetical phrasing (lines 12-13)
**Rule:** No antithetical phrasing
**Current:**
> If we define our value as "I write code," then yes, AI looks threatening. But if our value was always in deciding *what* to build...

**Suggested:**
> Our value was always in deciding *what* to build, *why* to build it, and *whether* it's working as intended. Faster execution is a multiplier for that, not a replacement.

### Change 13.3 — Tone down the closing (line 38)
**Rule:** No staccato drama; no keynote rhetoric
**Current:**
> The job isn't going away. But it is changing. And the sooner we're honest about where our real value lies, the better positioned we'll be to make the most of it.

**Suggested:**
> The job is changing, and understanding where our real value lies makes the difference between riding this wave and being swept along by it.

---

## 14. Principles for Leading AI Development (`principles-leading-ai-development.mdx`)

This note needs the most fundamental rework. The issues are structural, not just surface-level.

### Change 14.1 — Shift entire note to first person
**Rule:** First person throughout
Rewrite from Viv's perspective. Instead of "You remain accountable" use "I remain accountable." Instead of prescriptive "you should" language, describe how Viv actually works.

### Change 14.2 — Convert nine-point list to flowing prose
**Rule:** No label-colon-explanation pattern; no staccato drama
The numbered list with bold labels is the heart of the problem. Rewrite as 2-3 paragraphs describing how these principles show up in practice. Use specific examples from Viv's experience rather than abstract prescriptions.

### Change 14.3 — Remove all antithetical phrasing
**Rule:** No antithetical phrasing
Lines 8, 10, 17, 26 all contain "not X; it's Y" patterns. Rewrite each to state the positive directly.

### Change 14.4 — Remove preachy imperatives (line 36)
**Rule:** No staccato drama; conversational tone
**Current:**
> Read before you accept. Debug manually before asking for help. See it with your own eyes. Occasionally build things the slow way.

**Suggested:** Describe what Viv does rather than lecturing:
> I make a point of reading code before accepting it, debugging manually before asking for help, and occasionally building things the slow way. Tracking what I repeatedly ask AI for has been useful too, because those are knowledge gaps worth closing.

### Change 14.5 — Consider merging with ai-engineering
The "ownership not authorship" theme, skill atrophy concern, and craft maintenance ideas all appear in ai-engineering already. This note's unique value is the nine principles and the Addy Osmani reference. Consider folding the valuable parts into ai-engineering and retiring this note.

---

## Session Starter Prompt

Use the following prompt to start a new Claude Code session that implements these changes:

```
I'm polishing the field notes on my personal website for publishing. Please read:

1. The style guide: docs/style-guide.md
2. The review: docs/reviews/2026-03-04-field-notes-writing-style-review.md
3. The suggested changes: docs/reviews/2026-03-04-field-notes-suggested-changes.md

Work through each note in order (starting from the highest-ranked notes, which need the least work). For each note:

1. Read the current file
2. Show me the proposed changes with before/after comparisons
3. Wait for my approval before making any edits
4. Apply the approved changes
5. Show me the final result and move to the next note

Important:
- Do NOT make changes without showing me first
- Preserve my voice — adjust the AI-suggested rewrites if they don't sound like me
- If you think a suggested change is wrong or unnecessary, say so
- Flag any new issues you spot that aren't in the review
- Skip notes I tell you to skip

Let's start with note 1: gsap-scrolltrigger-astro-gotchas.mdx (which needs no changes — just confirm it's good and move on to note 2).
```
