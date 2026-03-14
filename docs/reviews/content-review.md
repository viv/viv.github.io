---
generated_by: Claude Opus 4.6
generation_date: 2026-02-15
model_version: claude-opus-4-6
purpose: content_review
status: draft
human_reviewer: matthewvivian
tags: [content, tone, voice, editorial, review]
---

# Content Review — viv.me.uk

My content review prompt
```
I'm reviewing and improving the text across my personal website (Astro site in this repo). I need your help refining copy, sometimes on specific lines, sometimes across whole sections.

  How we work

  I use inline HTML comment markers to flag text for changes:
  <!-- COPY: instruction here -->
  When I say "process my COPY markers", scan for all <!-- COPY: ... --> comments across the site, make the requested adjustments, and remove the markers.

  I'll also paste text directly and ask you to improve it. When I do, give me 2-3 variations to choose from so I can iterate. Don't apply changes to files until I say so.

  Writing style

  Read docs/style-guide.md before making any suggestions. It defines my voice, tone, likes, and dislikes in full. Here's a summary of the key points:

  Voice and tone:
  - First person, conversational, down to earth. It should read like me talking, not a marketing copywriter.
  - Honest and grounded. These are real experiences, not a pitch deck. Don't oversell anything.
  - Hobbies are hobbies. Don't dress them up as something grander than they are.
  - Confidence without arrogance. State what I know and what I've done without hedging unnecessarily, but never boast.
  - Light personality and humour where it fits naturally, but don't force it.

  Sentence structure:
  - Full sentences that flow well. No CV-style bullet fragments or staccato lists without connective tissue.
  - Keep things tight. Say what needs to be said and stop. Cut filler words.
  - Don't hedge with "try to", "aim to", "seek to". Just say it.
  - Vary sentence length for rhythm, but lean short.

  Likes:
  - Concrete over abstract. Specific details and examples over vague claims.
  - Plain language over jargon. "Invest in people" beats "invest in 1:1s and CPD programmes".
  - Proper punctuation. I use commas and full stops.
  - UK English throughout (organisation, colour, behaviour, defence).

  Dislikes:
  - Em dashes. Use commas, full stops, or restructure the sentence instead.
  - The label-colon-explanation pattern ("The approach is practical: the same engineering discipline..."). It reads like a pitch deck. Just say what you mean in a normal sentence.
  - Cliches ("I'm blessed", "passionate about", "leverage", "journey").
  - Corporate language or anything that sounds like a LinkedIn post.
  - Perspective shifts mid-paragraph (don't switch between "I" and "you" awkwardly).
  - Unnecessary repetition of "I" at the start of consecutive sentences.
  - Staccato drama ("Not theoretical. Practical." or "Simple. Effective. Done.").
  - The word "hallucinates" for AI behaviour. Use "non-deterministic behaviour" or "unpredictable output".

  Context

  There are two lengths of copy on the site:
  - Homepage cards (in src/components/*.astro): Short, punchy, a few sentences max. These need to earn a click-through.
  - Sub-pages (src/pages/life.astro, src/pages/ai-engineering.astro): Fuller text with room for personal detail and stories.

  When I ask you to write copy for a section, provide both lengths unless I say otherwise.

  The full style guide is at docs/style-guide.md. The content plan is at docs/engineering-plans/content-plan-final.md.

  Process

  1. Read the relevant file(s) before suggesting changes.
  2. Read docs/style-guide.md if you haven't already.
  3. Present 2-3 options with a brief note on why each works.
  4. Say which you'd lean towards and why.
  5. Wait for me to pick or iterate before applying anything.

  If you need more personal context to write something well, ask me. The more detail I give you, the better the output.
```

## Executive Summary

**Overall Authenticity: 3.5/5**

The site reads better than most "senior engineer personal sites" — there's genuine substance here, real projects, real stakes, real specifics. The content strategy doc sets an excellent tone guide ("write like you talk", "if it sounds like a keynote speaker, rewrite it"), but the actual implementation doesn't always live up to that standard.

The strongest material is where Viv talks about specific things that happened: the BBC Micro, the A-Level project for his mum, the GT Zaskar, riding with his son, calling the new starter every morning. These are the moments where a real person comes through. The weakest material is where the writing shifts into "senior engineer summarising their career achievements" mode — which unfortunately happens in several of the most visible sections.

**The core problem:** Much of the copy feels like it was written to impress rather than to connect. It's polished, competent, well-structured — and that's exactly what makes it feel AI-generated. Real people don't naturally write in perfectly balanced three-paragraph arcs with a pithy concluding sentence that ties the theme together.

**Key themes across the review:**
1. Sentence structure is too uniform — many paragraphs follow the same rhythm
2. Several sections use aphorism-heavy closing lines that feel manufactured
3. The "you" / "I" voice is inconsistent (a known issue, partially fixed)
4. Some genuine AI-isms and corporate phrases remain
5. The timeline entries are strongest when they're most specific, weakest when they generalise

---

## Section-by-Section Analysis

### Hero (index.astro)

**Authenticity: 4/5**

> "Viv."
> "Software engineer. Building things that matter."

This is clean and confident. "Building things that matter" borders on a motivational poster, but it's saved by its brevity. No complaints.

**Flagged:** Nothing specific. This works.

---

### About / Hero Text (index.astro combined hero+about)

**Authenticity: 3/5**

The three-paragraph structure is solid but has issues:

**Paragraph 1:**
> "I've been writing software since the late 90s. In that time I've learned that tools change constantly but the principles of good engineering don't."

This is fine, slightly aphoristic but acceptable as an opener. The rhythm is natural enough.

**Paragraph 2:**
> "I'm a Chartered Engineer and a member of the BCS, and I studied Computer Science at Cardiff University. I live in South Wales and I've worked remotely for most of my career, long before it was fashionable. Most of my career has been spent building systems where the stakes are high — national cyber security infrastructure, government services, child safeguarding platforms, identity verification at scale. When the cost of getting it wrong is real, how you build matters as much as what you build."

Issues:
- **"long before it was fashionable"** — the content plan notes Viv already flagged this. It reads as a humble-brag. Suggest removing or replacing with something more matter-of-fact: "since 2013" or "for over a decade".
- **"the stakes are high"** — Viv also flagged this in the HTML comments. It's a cliche, especially combined with the list that follows. The list itself (cyber security, government, child safeguarding, identity verification) is powerful enough to stand alone — the reader can figure out the stakes are high.
- **"how you build matters as much as what you build"** — this is the sort of perfectly balanced concluding aphorism that AI loves to produce. A real person might say something rougher: "so discipline isn't optional" or "so you have to get the process right, not just the result."
- The paragraph is doing too much: credentials, location, remote work, project domains, and a philosophical statement. It reads like a LinkedIn summary trying to hit every keyword.

**Paragraph 3:**
> "These days I'm deeply focused on how AI is reshaping the craft of software engineering. Not replacing what experienced engineers do, but amplifying it in ways I find genuinely exciting. After more than 25 years, this is the most significant shift I've seen."

- **"deeply focused"** — AI-ism. People don't describe themselves as "deeply focused" in conversation. "Spending a lot of time thinking about" or just "I'm focused on" (without "deeply") would be more natural.
- **"amplifying it in ways I find genuinely exciting"** — the word "genuinely" is doing heavy lifting here. It's the kind of qualifier AI uses when it wants to sound sincere. The sentence would be stronger without it, or rewritten entirely.
- **"this is the most significant shift I've seen"** — appears almost verbatim in the content plan, the About component, AND the AI Engineering page. Three repetitions of essentially the same phrase across the site. Once is fine. Three times becomes a mantra.

**HTML comments note** that Viv wants this paragraph extended with agile/fail-fast/natural-language-programming content. That's a good instinct — it would add specificity.

**Suggested rewrite for paragraph 3:**
> "Right now I'm focused on how AI is changing the day-to-day practice of software engineering. Not replacing what experienced engineers do — more like pair programming with a collaborator that never sleeps. After more than 25 years, nothing else has changed how I work this much."

---

### Expertise Cards (Expertise.astro)

**Authenticity: 2.5/5** — This is the weakest section on the site.

#### "Building systems that last"
> "I've spent 25+ years building software across government, finance, cyber security, and identity verification. I favour pragmatic architecture, clear boundaries, and ruthless simplicity where it matters — with the discipline to maintain backward compatibility when the easy option would be to break everything."

- **"ruthless simplicity"** — this is a buzzphrase. It's the kind of thing someone puts on conference slides, not what they'd say over a coffee. Try: "keeping things as simple as I can get away with."
- **"the easy option would be to break everything"** — slightly melodramatic. The backward compatibility point is good; the framing is overselling it.
- **"25+ years building software across government, finance, cyber security, and identity verification"** — competent summary but reads like a CV intro.

#### "Secure by design"
> "I've spent years working with government, CISOs, and governance boards. Security isn't something I bolt on. It's how I think about trust boundaries, identity, data flow, and the human decisions around all of it."

- **"Security isn't something I bolt on"** — this is a well-known security aphorism, not a personal voice. It's the kind of thing 500 security consultants say.
- **"the human decisions around all of it"** — vague. What human decisions? This is the kind of hand-wavy ending that AI generates when it doesn't have specifics.

#### "AI-augmented engineering"
> "AI is a core part of how I work day to day, managed with the same XP and engineering discipline I'd apply to any team. I've also led formal government-commissioned research evaluating AI security tools. I understand where AI adds genuine value, where its non-deterministic nature demands careful judgement, and how to get the best from it consistently."

- **"I understand where AI adds genuine value"** — this is a claim, not evidence. The timeline entry for AI engineering does a much better job of showing rather than telling.
- **"how to get the best from it consistently"** — vague consultancy language.
- The phrase "non-deterministic nature demands careful judgement" is good — specific and shows real understanding.

#### "Growing engineers"
> "I mentor apprentices, host work experience students, and run 1:1s, 360-degree feedback, and CPD programmes. Mentored an apprentice who won BCS Software Developer & Tester Apprentice of the Year. 5k wellness runs. Mental health advocacy in the workplace. The best investment I can make as a senior engineer is in the people around me."

- The middle of this card shifts to a staccato list ("5k wellness runs. Mental health advocacy in the workplace.") which feels like bullet points that didn't get expanded into prose. It's the right content but needs either full sentences or an actual bulleted format.
- **"The best investment I can make as a senior engineer is in the people around me"** — keynote speaker territory. This is exactly the kind of sentence the tone guide says to rewrite. A human might say: "I get more satisfaction from seeing someone I've mentored succeed than from any technical achievement."

---

### Timeline — Tier 1 Entries

#### 01 - The Beginning
**Authenticity: 4.5/5** — Best entry on the site.

> "My mother was a coordinator for domiciliary care workers at the local council. Their system for organising rotas and balancing care needs was entirely paper-based. I spent time observing, understanding the problem, understanding how they worked."

This is excellent. Specific, personal, genuine. The repeated "understanding" feels natural rather than styled.

> "That's when I realised programming isn't really about computers."

Good. Clean. The only slight concern is the generalisation that follows — "Everything since has been a variation on that theme" — which is a touch grand but forgivable as a closing sentiment for an origin story.

**Flagged:** Nothing. Leave this one alone.

#### 02 - Cardiff University
**Authenticity: 3.5/5**

> "The formal foundations — algorithms, data structures, systems design — that still underpin everything I build decades later. Those foundations are still with me and serve me well."

- There's redundancy here. "still underpin everything I build decades later" and "Those foundations are still with me and serve me well" say the same thing twice. Cut one.

> "This is also where I learned to learn, a skill that turned out to matter far more than anything in the curriculum."

- **"learned to learn"** — well-worn phrase. Not wrong, but it's the kind of thing every university graduate says. Consider making it more specific: what did learning to learn actually look like for Viv?

**Flagged:** Minor redundancy, one cliche.

#### 03 - Tracesmart
**Authenticity: 3/5**

> "Pioneered solutions for database replication challenges. Implemented high-performance, secure web services with structured data access, caching, and distributed task processing. Built robust hiring processes and championed technical excellence at every opportunity."

- **"Pioneered solutions"** — classic AI/corporate language. Nobody says this in conversation.
- **"championed technical excellence at every opportunity"** — pure LinkedIn. This is the single most AI-sounding sentence on the entire site.
- **"structured data access, caching, and distributed task processing"** — this reads like a bullet-point CV that got forced into a paragraph.

The opening and closing of this entry are good — the "shared server with no source control" and "earning the trust to change how an entire team worked" are genuine and human. But the middle paragraph (paragraph 2) reads like it was lifted from a job description.

**Suggested rewrite of paragraph 2:**
> "The day-to-day was building the applications the business needed — web services, data processing, reporting. The more lasting contribution was showing that investing in practices like pair programming, CI/CD, and proper testing wasn't overhead. It was how you stopped spending every Friday fighting fires."

#### 04 - CERT-UK
**Authenticity: 3.5/5**

Solid factual content. The specifics (Traffic Light Protocol, transition to NCSC) are good. It reads a bit like a project summary rather than a personal recollection — there's no sense of what it felt like, what was hard, or what Viv personally learned. But for a professional site, this is acceptable.

**Flagged:** Could benefit from one sentence of personal reflection. What was it like being involved in the birth of national cyber security infrastructure?

#### 05 - Threatvine
**Authenticity: 3/5**

> "Owned the technical roadmap, led engineering projects, handled complex technical queries multiple times per week, and managed the productisation journey including major version upgrades."

- **"managed the productisation journey"** — corporate speak. What does this actually mean? It means taking something that was a bespoke deployment and making it a product other organisations could use. Say that instead.

> "Built relationships that opened new markets"

- Sales language, not engineering language.

> "Engaged with at least three national governments exploring their own CiSP-like information sharing capabilities."

- **"Engaged with"** — AI filler phrase. "Worked with" or "spoke to" or "advised" would be more direct.

The "Highly commended at the UK IT Industry Awards" line is good — specific, verifiable, and doesn't oversell it.

#### 06 - Openfire
**Authenticity: 4/5**

> "Long-term contributor to Openfire, the reference XMPP server used by military and defence organisations worldwide, working closely with the project's lead maintainer."

Good. The removal of Guus's name from the content plan version was probably right — the website audience doesn't know who Guus is.

> "Introduced Architecture Decision Records to give maintainers of a 20-year codebase a way to understand why things are the way they are."

This is great. Natural, clear, and it makes the value of ADRs obvious without explaining what they are to death.

**Flagged:** Nothing major. Solid entry.

#### 07 - AI-Enhanced Engineering
**Authenticity: 3/5**

> "Led a comprehensive research programme for a UK government department evaluating AI-powered security testing tools for air-gapped environments."

- **"Led a comprehensive research programme"** — AI-ism. Just say "I ran a research project" or "I was asked to evaluate".

> "Analysed 60+ solutions, developed a structured evaluation framework, and authored a 50+ page technical report."

- This is fine but sounds like a proposal abstract. The numbers are impressive; the framing is corporate.

> "The real insight: 25 years of learning how to manage teams..."

- **"The real insight"** — a bit grandiose. This is the fourth time some variant of this AI-team-management parallel appears across the site (content plan, About, Expertise card, and here). It's a good insight but it's being overplayed. State it once properly and reference it elsewhere.

> "These are the very early days. Keeping a close eye on which principles will endure."

- This exact phrasing also appears on the AI Engineering page. Identical closing lines across pages feel like a template.

#### 08 - Remote Working
**Authenticity: 4/5**

> "The person who calls the new starter every morning. The person who makes video calls natural, not awkward."

This is excellent. Specific, human, and paints a clear picture of what Viv actually does rather than claiming abstract virtues.

> "Remote work only succeeds when people genuinely look out for each other."

A bit sweeping but saved by the specific examples that precede it.

**Flagged:** Strong entry. Minor polish at most.

---

### Timeline — Tier 2 Entries

#### 09 - Glamorgan & Qualtech
**Authenticity: 3.5/5** — Brief and honest. "The gap between university theory and production reality was the first real lesson" is good.

#### 10 - Freelance Consulting
**Authenticity: 4/5** — "Freelancing teaches you things employment never does" is natural. The colon-list that follows reads genuinely.

#### 11 - Hargreaves Lansdown
**Authenticity: 4/5** — The IPO detail is specific and impressive without being boastful. "keeping things simple enough to understand at 2am" is a great, human detail.

#### 12 - BaseKit
**Authenticity: 3.5/5** — "The things you take for granted after years of practice can be transformative when shared with a team encountering them for the first time" is a touch grand but works in context.

#### 13 - Thrupoint
**Authenticity: 3/5** — Very brief. "Deep technical skills transfer across domains when you focus on first principles" is the kind of tidy aphorism that AI produces. A real person might say "turns out Java is Java whether you're building a chat server or a phone app."

#### 14 - Crossing Domains
**Authenticity: 3.5/5** — Good technical specificity. "You can't just encrypt the pipe and call it secure" is natural and punchy.

#### 15 - Stabilising Systems
**Authenticity: 4/5** — "The skill isn't heroics. It's the discipline to diagnose before you fix." This works. Short, direct, and it sounds like something someone would actually say.

#### 16 - Building Teams
**Authenticity: 3/5** — "The thread that runs through the whole career: helping people grow." — This exact phrase (or very close variants) appears in the content plan AND the Expertise section. It's becoming a catchphrase. Also, "investing in people pays the highest returns" as the headline is pure LinkedIn inspirational poster.

#### 17 - Infrastructure as Code
**Authenticity: 3.5/5** — Dense with good specifics (PostgreSQL to YugabyteDB, chaos engineering). The closing aphorism "If your deployment depends on someone's knowledge rather than your code, you've built a liability, not an asset" is the best of the closing-line aphorisms — it's specific enough to feel earned.

#### 18 - Security as Design Decision
**Authenticity: 3/5** — "Security work is fundamentally about communication: translating technical risk into business decisions" — true but reads like a conference abstract.

#### 19 - Working at the Edges
**Authenticity: 3.5/5** — "The most valuable engineering contribution is often not writing code. It's making sure the right thing gets built." — Keynote speaker energy. But the NCA detail and the specific work described (RFPs, threat assessments for decentralised messaging) adds enough substance to carry it.

---

### Work in the Open (WorkInTheOpen.astro)

**Authenticity: 4/5**

> "Most of my work is behind closed doors, but not all of it. Here are two projects where my contributions are public."

This is the right tone — understated, honest, not overselling. The content plan nailed this: "Not 'look at my open source stats' but 'here's some of my work that happens to be public.'"

The Openfire description is clear and specific. No issues.

---

### Beyond the Code Cards (BeyondTheCode.astro)

**Authenticity: 3.5/5**

**Karate card:**
> "3rd Dan black belt and instructor in Wado Ryu. I'm drawn to the discipline it demands, the satisfaction of teaching, and the rich history of practical application."

- **"I'm drawn to the discipline it demands, the satisfaction of teaching, and the rich history of practical application"** — this is three-item-list AI construction. A human might say: "I've been practising since the 2000s and teaching for many years. The depth of it keeps me coming back."

**Mountain Biking card:**
> "Mountain biking is my primary outdoor passion"

- **"primary outdoor passion"** — nobody talks like this. "Mountain biking is what gets me outside" or "Mountain biking is my main thing outdoors" would be more natural.

**Guitar & Keyboard:**
> "A hobby, but 30 years of one."

This is perfect. Concise, wry, human.

**Smart Home:**
> "The intersection of engineering curiosity and domestic life."

- **"The intersection of..."** — AI-ism. This is a favourite construction of language models. Try: "Where engineering curiosity meets domestic life" or even better, drop the framing entirely and just describe it.

**Cooking:**
> "Another creative outlet. No restaurant ambitions, just genuine enjoyment of the craft."

Fine. Brief and honest.

---

### /life Page

**Authenticity: 4/5** — This is the second-strongest page after the home page.

**Karate section:**
> "Kata is especially intriguing, a physical record, syllabus, and a training aid all in one, encoding the principles of an entire fighting system so they can be passed between generations."

This is genuinely interesting content that shows real knowledge. It feels like Viv talking about something he cares about.

> "There are parallels between karate and engineering."

- The parallels paragraph is the weakest part — it makes the connection explicit in a way that feels forced. The reader can draw the parallel themselves. Consider cutting it.

**Mountain Biking section:**
> "My first real bike was a GT Zaskar that I bought in 1994 and only recently parted with."
> "These days I ride a YT Capra and spend many weekends out on the trails in South Wales with my son."

Excellent. These are the most human sentences on the entire site. Specific, personal, unguarded.

> "taking way too many photos, much to my wife's frustration"

Great. This is what genuine voice sounds like.

**Smart Home:**
> "don't build something you can't debug at midnight"

Good. Natural, funny, specific.

---

### AI Engineering Page

**Authenticity: 2.5/5** — The weakest page.

This page reads like a thought leadership article. Every paragraph is perfectly structured, every section has a tidy conclusion, and the whole thing could be a Medium post titled "What 25 Years of Engineering Taught Me About AI."

Specific issues:

> "the calibrated view is: be genuinely excited about the possibilities, be honest about the limitations"

- **"the calibrated view"** — nobody describes their own opinions as "calibrated" in casual writing. This is a classic AI phrase.

> "The same discipline that makes a senior engineer effective leading a team of humans is what makes them effective orchestrating a team of AI agents."

- **"orchestrating"** — corporate/AI buzzword.

> "The specific tools will change. The principles of how I use them won't."

- This appears essentially verbatim in the AI timeline entry, the AI expertise card, and here. Three occurrences of the same sentiment with near-identical phrasing.

The biggest problem with this page is that it's 100% philosophy and 0% specifics. What does Viv's actual workflow look like? What does he use Claude Code for? What's a specific thing AI helped him build faster? What's a specific time AI got it wrong? The content plan says to include "Your actual workflow, patterns, what works, what doesn't" — but the implementation only has the philosophy.

---

### Engineering Notes

**Authenticity: 4.5/5**

> "A few things caught me out whilst building scroll-driven animations for this site with GSAP ScrollTrigger and Astro. Noting them here so I don't have to rediscover them next time."

This reads like a real engineer's notebook. "Whilst" is natural UK English. The technical content is specific and useful. The tone is casual and practical.

This is the gold standard for what the rest of the site should aspire to.

---

### Contact / Footer

**Authenticity: 4.5/5**

> "Want to talk? Find me on GitHub or LinkedIn."

Clean, direct, no-nonsense. Perfect.

---

### Notes Section

**Authenticity: 4/5**

> "A working engineer's notebook. Learnings, configurations, observations, and the occasional war story."

- **"Learnings"** — this is technically correct but some people consider it corporate jargon. "Lessons" or "things I've picked up" would be more natural. However, this is a minor point and may be a deliberate choice.

---

## Cross-Cutting Issues

### 1. Repeated Sentiments

The following ideas appear 3+ times across the site with near-identical phrasing:

| Sentiment | Occurrences |
|-----------|------------|
| "The tools will change, the principles won't" | About, AI timeline entry, AI Engineering page, Expertise card |
| "AI agents need the same management as human teams (XP, TDD, scoping...)" | Content plan, About (planned), Expertise card, AI timeline, AI Engineering page |
| "Helping people grow / investing in people" | Expertise card, Building Teams entry, content plan |
| "Most significant shift in 25 years" | About, AI timeline entry, AI Engineering page |
| "These are the very early days" | AI timeline entry, AI Engineering page (identical) |

**Recommendation:** State each insight once — fully, in its primary location. Everywhere else, reference it differently or skip it. Repetition makes the site feel like it was generated from a template with find-and-replace.

### 2. The Aphorism Problem

Too many sections end with a neat, quotable closing line:

- "Everything since has been a variation on that theme."
- "The hardest part wasn't implementing any single practice. It was earning the trust..."
- "The most valuable engineering contribution is often not writing code."
- "If your deployment depends on someone's knowledge rather than your code, you've built a liability, not an asset."
- "Security work is fundamentally about communication."
- "Helping people grow."

Individually, several of these are good. Collectively, they create a pattern where every entry feels like it's trying to deliver a TED Talk moment. Real people don't consistently land pithy conclusions. Some entries should just... end. Let the reader form their own takeaway.

### 3. The "You" vs "I" Voice

The content plan was written in second person ("your view", "you learned"), and some of that leaked into early implementations. The timeline entries have been mostly converted to first person, but the content plan's influence is still visible in the structure — every entry follows the same arc: what happened → what you did → what principle it taught you. Varying the structure would help authenticity.

### 4. Sentence Structure Uniformity

Many paragraphs follow this rhythm:
1. Short declarative statement.
2. Expansion with a colon or em dash.
3. List of three things.
4. Concluding insight.

This is the default structure that AI generates for "professional but accessible" prose. Breaking this pattern — starting with a question, using a longer flowing sentence, or ending abruptly — would make the writing feel more varied and human.

---

## AI-ism Hitlist

Specific phrases to rewrite, in priority order:

| Phrase | Location | Problem | Suggested Alternative |
|--------|----------|---------|----------------------|
| "championed technical excellence at every opportunity" | Tracesmart (03) | Pure LinkedIn | "pushed for better practices wherever I could" |
| "Pioneered solutions for database replication challenges" | Tracesmart (03) | Corporate/AI | "figured out how to make database replication work reliably" |
| "deeply focused" | About | AI-ism | "focused" or "spending a lot of time on" |
| "managed the productisation journey" | Threatvine (05) | Corporate jargon | "turned it from a bespoke deployment into a product" |
| "Built relationships that opened new markets" | Threatvine (05) | Sales language | describe what actually happened |
| "Engaged with" | Threatvine (05) | AI filler | "worked with" or "advised" |
| "Led a comprehensive research programme" | AI entry (07) | AI/corporate | "ran a research project" or "I was asked to evaluate" |
| "the calibrated view" | AI Engineering page | AI-ism | "my view" or "how I see it" |
| "orchestrating" | AI Engineering page | buzzword | "working with" or "directing" |
| "primary outdoor passion" | Beyond the Code | unnatural | "what gets me outside most" |
| "The intersection of" | Smart Home card | AI-ism | drop the framing or rephrase |
| "ruthless simplicity" | Expertise (systems) | buzzphrase | "keeping things as simple as possible" |
| "long before it was fashionable" | About | humble-brag | "since 2013" or remove |
| "genuinely exciting" | About | AI sincerity marker | remove "genuinely" or rephrase |

---

## UK English Compliance

**Status: Good.** Consistent use of:
- "organisation" (not organization) ✓
- "colour" (in code references) ✓
- "practised", "practising" ✓
- "defence" (not defense) ✓
- "behaviour" (in code, not in copy — no occurrences to check)
- "whilst" (in notes) ✓
- "programme" (not program, for research programme) ✓

**One possible issue:** "digitised" in The Beginning entry — correct UK English. No issues found.

No Americanisms detected in the copy.

---

## Content Strategy Effectiveness

**What's working well:**
- Principles-first framing (content plan principle 1) — the timeline entries do lead with lessons and context rather than technology
- AI as craft evolution (principle 2) — well-executed, possibly over-executed (see repetition notes)
- Site is about Viv, not an employer (principle 3) — strong. Employer names appear only as context
- Tech footnotes work well — they add credibility without cluttering the narrative
- Tier 1 / Tier 2 split is good — the most important entries get prominence
- Work in the Open section perfectly matches its brief — understated and honest
- Engineering Notes has the strongest voice — use it as a model

**What needs work:**
- "Write like you talk" (principle 4) — inconsistently applied. Some sections (The Beginning, Remote Working, /life page) nail this. Others (Expertise, AI Engineering page, Tracesmart paragraph 2) don't
- The Expertise section is the weakest link — it's the section most visitors will scan first after the About, and it currently reads like a consulting firm's capabilities brochure
- The AI Engineering page needs specific examples, not just philosophy
- Headline quotes for timeline entries — some are great ("Every expert was once a beginner", "Sometimes the most valuable thing you can do is make it stop breaking") but others are LinkedIn-poster material ("Investing in people pays the highest returns", "New domains demand new thinking")

---

## Prioritised Recommendations

### Priority 1 — Biggest impact

1. **Rewrite the Expertise section.** All four cards need the language toned down and made more conversational. Use the /life page's mountain biking section as a tone model. Less "I favour pragmatic architecture, clear boundaries, and ruthless simplicity" and more "I've spent most of my career building things that have to keep working for years..."

2. **De-duplicate the repeated sentiments.** Pick one location for each key insight ("tools change, principles don't" etc.) and vary the phrasing elsewhere. The AI Engineering page and the AI timeline entry should complement each other, not repeat each other.

3. **Fix the Tracesmart middle paragraph.** It's the single most AI-sounding block of text on the site. Replace "pioneered solutions" and "championed technical excellence at every opportunity" with human language.

### Priority 2 — Important refinements

4. **Add specifics to the AI Engineering page.** What does a day with Claude Code look like? What's an example of something AI helped build? What's a time it hallucinated and how was it caught? The page promises practical content but delivers only philosophy.

5. **Resolve the About section HTML comment TODOs.** Viv left editorial notes flagging issues with "stakes are high", "long before it was fashionable", and wanting to extend the AI paragraph. These should be addressed.

6. **Vary the closing-line pattern.** Not every timeline entry needs a pithy concluding lesson. Let some entries just end with the facts. The reader is capable of drawing their own conclusions.

### Priority 3 — Polish

7. **Fix the "Growing engineers" card staccato.** "5k wellness runs. Mental health advocacy in the workplace." either needs expanding or reformatting as a proper list.

8. **Remove "genuinely" and "deeply" qualifiers.** These are AI sincerity markers that weaken rather than strengthen the prose.

9. **Check the /life page karate section.** The "parallels between karate and engineering" paragraph is the weakest part of an otherwise strong page. Consider cutting it — the reader can draw the connection.

10. **Consider varying timeline entry structure.** Not every entry needs the same three-part arc. Some could start with a question, a specific moment, or a surprising detail. The Beginning does this well — use it as a model.

---

## Summary Table

| Section | Authenticity | Key Issue |
|---------|-------------|-----------|
| Hero | 4/5 | — |
| About | 3/5 | AI qualifiers, repeated sentiments, too many ideas per paragraph |
| Expertise | 2.5/5 | Corporate/consulting language throughout |
| Timeline: The Beginning | 4.5/5 | Gold standard |
| Timeline: Cardiff University | 3.5/5 | Minor redundancy |
| Timeline: Tracesmart | 3/5 | "Pioneered solutions", "championed technical excellence" |
| Timeline: CERT-UK | 3.5/5 | Could use one personal detail |
| Timeline: Threatvine | 3/5 | Corporate language ("productisation journey") |
| Timeline: Openfire | 4/5 | Strong |
| Timeline: AI Engineering | 3/5 | Over-repeated insight, "comprehensive research programme" |
| Timeline: Remote Working | 4/5 | Strong |
| Tier 2 entries (avg) | 3.5/5 | Some aphorism overload |
| Work in the Open | 4/5 | Right tone |
| Beyond the Code cards | 3.5/5 | "Primary outdoor passion", "intersection of" |
| /life page | 4/5 | Karate-engineering parallel forced; rest is great |
| AI Engineering page | 2.5/5 | All philosophy, no specifics; repeated phrasing |
| Engineering Notes | 4.5/5 | Strongest voice — use as model |
| Contact | 4.5/5 | Perfect |
