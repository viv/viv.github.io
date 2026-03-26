# viv.me.uk — Writing Style Guide

## Voice

Write as Viv speaks. Down-to-earth, direct, and conversational. The reader should feel like they're having a chat, not reading a brochure.

- **First person** throughout — "I've spent", "I believe", "I work"
- **Plain language** — say it simply, the way you'd explain it to a colleague
- **Confident but not boastful** — let the work speak for itself
- **Honest** — hobbies are hobbies. Don't dress them up as something grander than they are.
- **UK English** — organisation, colour, behaviour, programme

## Do

- Be specific and concrete — real examples over abstract claims
- Use full sentences that flow well. No CV-style bullet fragments or staccato lists without connective tissue.
- Use natural sentence rhythms — read it aloud, does it sound like something you'd actually say?
- Show personality — dry humour is fine, warmth is good
- Be honest about limitations and trade-offs — calibrated confidence, not hype
- Keep things tight. Say what needs to be said and stop. Cut filler words.
- Vary sentence length for rhythm, but lean short.

## Don't

- **No em dashes** — use commas, full stops, parentheses, or restructure the sentence instead. For parenthetical asides (the kind of clause you'd naturally speak in a lower voice), prefer parentheses over em dashes.
- **No staccato drama** — avoid punchy one-word sentence fragments like "Not theoretical. Practical." or "Simple. Effective. Done." That's copywriting, not conversation.
- **No label-colon-explanation pattern** — avoid the "The approach is practical: the same engineering discipline I'd apply to any team" construction. It reads like a pitch deck or a keynote slide. Just say what you mean in a normal sentence.
- **No antithetical phrasing** — avoid the “it’s not that; it’s this” formula
- **No salesy language** — avoid superlatives, hype words, or anything that sounds like a LinkedIn post
- **No confrontational comparisons** — don't put others down to build yourself up (e.g. "why experienced engineers get more from it than novices")
- **No buzzwords** — avoid "leverage", "synergy", "cutting-edge", "world-class", "passionate about"
- **No clichés** — avoid "I'm blessed", "passionate about", "journey", "leverage"
- **No jargon for its own sake** — technical terms are fine when they're the right word, not when they're showing off. Prefer "invest in people" over "invest in 1:1s and CPD programmes".
- **No "hallucinates"** when describing AI behaviour — prefer "non-deterministic behaviour" or "unpredictable output". The anthropomorphism is misleading.
- **No unnecessary hedging** — don't write "try to", "aim to", "seek to" when you can just state it directly
- **No perspective shifts** — don't switch between "I" and "you" mid-paragraph. Keep a consistent point of view.
- **No "I" repetition** — avoid starting consecutive sentences with "I". Restructure to vary the rhythm.

## Tone calibration

Think: senior engineer explaining their work to another senior engineer over a cup of tea. Not a keynote speech. Not a sales pitch. Not a CV.

The goal is for the reader to think "this person knows what they're talking about" — not because the writing told them so, but because the clarity and specificity made it obvious.

## Content lengths

The site has two tiers of copy:

- **Homepage cards** (in `src/components/*.astro`): Short, punchy, a few sentences max. Full sentences that earn a click-through.
- **Field notes** (`src/content/notes/ai-engineering-q1-2026.mdx`): Fuller text with room for personal detail and stories.

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

**CV-style fragments:**
> 5k wellness runs. Mental health advocacy in the workplace.

**Better:**
> I also champion wellbeing in the workplace, from organising 5k wellness runs to advocating for mental health as part of everyday engineering culture.
