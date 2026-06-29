# viv.me.uk — Writing Style Guide

## Voice

Write as Viv speaks. Down-to-earth, direct, and conversational. The reader should feel like they're having a chat, not reading a brochure.

- **First person** throughout — "I've spent", "I believe", "I work"
- **Plain language** — say it simply, the way you'd explain it to a colleague
- **Longer, flowing sentences** — your natural voice is clause-rich, with subordinate clauses and parenthetical asides (in round brackets, never em dashes, as you prefer), much as you speak. Let a sentence run when it carries a single idea, rather than chopping it into the short, uniform, punchy beats an LLM defaults to. Vary the length, and keep short sentences for earned emphasis.
- **Confident but not boastful** — let the work speak for itself
- **Honest** — hobbies are hobbies. Don't dress them up as something grander than they are.
- **UK English** — organisation, colour, behaviour

## Do

- Be specific and concrete — real examples over abstract claims
- Use full sentences that flow well. No CV-style bullet fragments or staccato lists without connective tissue.
- Use natural sentence rhythms — read it aloud, does it sound like something you'd actually say?
- Show personality — dry humour is fine, warmth is good
- Be honest about limitations and trade-offs — calibrated confidence, not hype
- Keep things tight. Say what needs to be said and stop. Cut filler words.

## Don't

- **No em dashes** — use commas, full stops, parentheses, or restructure the sentence instead. For parenthetical asides (the kind of clause you'd naturally speak in a lower voice), prefer parentheses over em dashes. (The em dashes used as label separators in this guide are document formatting, not prose; the ban applies to em dashes inside sentences.)
- **No staccato drama** — avoid punchy one-word sentence fragments like "Not theoretical. Practical." or "Simple. Effective. Done." That's copywriting, not conversation.
- **No label-colon-explanation pattern** — avoid the "The approach is practical: the same engineering discipline I'd apply to any team" construction. It reads like a pitch deck or a keynote slide. Just say what you mean in a normal sentence.
- **Prefer connective words over colons** — you rarely reach for a colon. Where one would introduce or splice a clause, join the clauses with a natural connective ("because", "so", "and", "which", "where") or start a new sentence instead. Reserve colons for a genuine list, and prefer flowing prose even then when it reads as well.
- **No antithetical phrasing** — avoid the “it’s not that; it’s this” formula
- **No superlative emphasis phrasing** — avoid "what mattered most", "the most important thing", "the key thing is", "what really matters". State the point plainly instead (e.g. "an important part of the brief was…").
- **No rhetorical doubling for effect** — don't repeat a structure or phrase for dramatic emphasis, e.g. "it's the one people skip, and it's the one that compounds" or "this is for the builders, this is for the dreamers". Make the point once, in plain prose.
- **No hype signposting or manufactured drama** — don't announce that something is interesting, clever, or important, and don't build suspense or gravitas around a statement. Avoid "where it gets interesting", "here's where the magic happens", "the clever bit is…", "I know what it really is", "the clincher", "make no mistake". Just write the point plainly.
- **No gratuitous "honest"** — drop "the honest answer", "the honest truth", "honestly", "to be honest". Being straight with the reader is the default; saying so adds nothing and reads as an AI tell. This bans the word, not the trait — keep being honest as the Voice section asks, just don't announce it.
- **No empty intensifiers** — cut "genuinely", "truly", "really", "actually", "simply", "just" when they only pad. State the thing plainly.
- **No overstating for effect** — keep claims literally true rather than inflating them for the narrative (e.g. don't call something its "whole purpose" when it was only one requirement). Calibrate to what actually happened.
- **No salesy language** — avoid superlatives, hype words, or anything that sounds like a LinkedIn post
- **No confrontational comparisons** — don't put others down to build yourself up (e.g. "why experienced engineers get more from it than novices")
- **No buzzwords** — avoid "leverage", "synergy", "cutting-edge", "world-class"
- **No clichés or folksy idiom filler** — avoid "I'm blessed", "passionate about", "journey", and vague idioms like "earns its keep", "does the work", "does the heavy lifting", "the secret sauce". Say what the thing actually does.
- **No jargon for its own sake** — technical terms are fine when they're the right word, not when they're showing off.
- **No "hallucinates"** when describing AI behaviour — prefer "non-deterministic behaviour" or "unpredictable output". The anthropomorphism is misleading.
- **No unnecessary hedging** — don't write "try to", "aim to", "seek to" when you can just state it directly.
- **No perspective shifts** — don't switch between "I" and "you" mid-paragraph. Keep a consistent point of view.
- **No "I" repetition** — avoid starting consecutive sentences with "I". Restructure to vary the rhythm.

## Tone calibration

Think: senior engineer explaining their work to another senior engineer over a cup of tea. Not a keynote speech. Not a sales pitch. Not a CV.

The goal is for the reader to think "this person knows what they're talking about" — not because the writing told them so, but because the clarity and specificity made it obvious.

## Content lengths

The site has two tiers of copy:

- **Homepage cards** (in `src/components/*.astro`): Short, punchy, a few sentences max. Full sentences that earn a click-through.
- **Field notes** (`src/content/notes/*.mdx`): Fuller text with room for personal detail and stories.

When writing for a section, consider both lengths.

## Examples

**Too dramatic:**
> Not theoretical. Practical. AI is a core part of my daily engineering workflow.

**Better:**
> AI is a core part of how I work day to day.

**Too salesy:**
> I'm a passionate, results-driven engineer with a proven track record of delivering world-class solutions.

**Better:**
> I've been writing software since 1998. The tools change constantly, but the principles of good engineering don't.

**Too confrontational:**
> I know why experienced engineers get more from AI than novices.

**Better:**
> I understand where AI adds genuine value and where its non-deterministic nature demands careful judgement.

**Label-colon-explanation (pitch deck style):**
> The approach is practical: the same engineering discipline I'd apply to any team member.

**Better:**
> I manage it with the same engineering discipline I'd apply to any team member.

**Overselling a hobby:**
> This isn't a hobby — it's a parallel discipline of teaching, leadership, and personal development pursued for decades.

**Better:**
> I'm drawn to the discipline it demands, the satisfaction of teaching, and the rich history of practical application.

**Em dashes for parenthetical asides (Claude-ism):**
> This evaluates whether that feature can be improved — through upstream contribution — to provide meaningful value.

**Better (use parentheses):**
> This evaluates whether that feature can be improved (through upstream contribution) to provide meaningful value.

**Superlative emphasis (self-important):**
> What mattered most in the brief was telling it where to look.

**Better:**
> An important part of the brief was telling it where to look.

**Rhetorical doubling (dramatic):**
> The fourth lever is the one people skip, and it's the one that compounds.

**Better:**
> The fourth lever is one a lot of people don't implement, or only do from time to time. It's also the one that compounds.

**Hype signposting (announcing the interest):**
> Building it is where the interesting part starts.

**Better (just write the interesting part, or let a heading carry the reader in):**
> [delete the sentence; the next section speaks for itself]

**Gratuitous "honest":**
> If I get a poor result, the honest diagnosis is almost always that I set the task up badly.

**Better:**
> If I get a poor result, the cause is almost always that I set the task up badly.

**Colon splicing a clause:**
> A useful tell: if I would otherwise be generating fresh shell or Python at runtime, that logic should have been a script.

**Better (join with words):**
> A useful tell is that if I would otherwise be generating fresh shell or Python at runtime, that logic should have been a script.

**Manufactured drama:**
> It is useful and it stops accidents, but I know what it really is, a script the agent is asked to route through.

**Better:**
> It is useful and it stops accidents, but it is a script the agent is asked to route through.

**Folksy idiom filler:**
> Two fields do the work.

**Better:**
> I only need two of those fields.

**CV-style fragments:**
> 5k wellness runs. Mental health advocacy in the workplace.

**Better:**
> I also champion wellbeing in the workplace, from organising 5k wellness runs to advocating for mental health as part of everyday engineering culture.
