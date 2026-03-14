---
generated_by: Claude Opus 4.6
generation_date: 2026-02-08
model_version: claude-opus-4-6
purpose: project_plan
status: near-complete
human_reviewer: matthewvivian
tags: [personal-site, project-management, sessions, astro, redesign]
---

# viv.me.uk — Project Plan

## Purpose

This document is the master project plan for the complete overhaul of viv.me.uk. It breaks the work into discrete sessions, each designed to be completable in a single Claude Code conversation. Every session has a clear goal, entry/exit criteria, and a starter prompt you can paste to begin.

This plan builds on two existing documents:
- **[Implementation Plan](./implementation-plan.md)** — technology stack, architecture, deployment pipeline, development phases
- **[Content Plan](./content-plan-final.md)** — all narrative content, tone guide, timeline entries, section structure

This document does **not** duplicate those plans. It organises the work into a sequence of sessions and adds the research, discovery, and de-risking phases that sit before (and alongside) the build.

---

## How to Use This Plan

1. Work through phases roughly in order, but sessions within a phase can sometimes be done in any order (noted where relevant)
2. Each session has a **Starter Prompt** — paste it into a new Claude Code conversation to begin
3. Sessions are designed to be independent: you can stop after any session and pick up later
4. Progress tracking is in markdown for now. A later session explores whether GitHub Issues would be a better fit
5. Every starter prompt includes a **Session Completion Checklist** — the agent should follow it when the session's work is done

---

## Phase 0: Research & Discovery

The goal of this phase is to make informed decisions before writing code. These sessions produce reference material and decisions that feed into the build phases.

### Session 0.1: Website Inspiration Research

**Goal:** Research outstanding personal/portfolio websites (primarily software engineering, but not limited to) and present findings for review. Identify the best ideas to borrow.

**What this produces:**
- A curated list of 15-25 websites with screenshots, links, and commentary
- Categorised observations: layout, typography, colour, animation, content structure, personality
- A shortlist of 5-8 sites that best match the vision in the implementation plan
- Specific elements worth borrowing (e.g. "the timeline scroll on site X", "the typography pairing on site Y")

**Approach:** This session uses a multi-agent team. Several agents research in parallel across different categories (minimal/elegant, animation-heavy, developer portfolios, non-tech creative portfolios, dark-mode-first sites) and compile findings.

**Starter Prompt:**
```
I'm redesigning my personal website (viv.me.uk). I need you to research outstanding personal and portfolio websites for inspiration.

Read these files first for context on what I'm building:
- docs/engineering-plans/implementation-plan.md (technology and design direction)
- docs/engineering-plans/content-plan-final.md (content structure and tone)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 0.1)

Then spin up a team of agents to research websites in parallel across these categories:
1. Minimal/elegant developer portfolios
2. Animation-heavy or scroll-driven personal sites
3. Dark-mode-first portfolio sites
4. Non-tech creative portfolios with strong visual identity
5. Sites with excellent timeline/experience presentations

For each site found, note: URL, what makes it notable, specific elements worth borrowing, and any concerns. Take screenshots where possible.

Compile everything into a single research document at:
docs/research/website-inspiration.md

Include a "Top Picks" section with 5-8 sites that best align with my implementation plan's vision (cinematic, dark, scroll-driven, personality-forward).

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the research document at docs/research/website-inspiration.md exists and is thorough
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 0.1 to "Complete" with today's date and a brief note on what was accomplished
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 0.2: Imagery & Visual Asset Strategy

**Goal:** Develop a strategy for visual assets across the site, and produce ready-to-use prompts for AI image generation tools.

**What this produces:**
- An asset inventory: what visual elements the site needs (hero background, section dividers, icons, avatar/headshot treatment, decorative elements)
- Ready-to-use prompts for multiple AI tools (Microsoft Designer, ChatGPT/DALL-E, Midjourney, Gemini)
- Style direction for each asset type (abstract geometric, gradient mesh, generative art, etc.)
- Guidance on which tool suits which asset type
- A plan for how to test and iterate on generated imagery

**Starter Prompt:**
```
I'm redesigning my personal website (viv.me.uk) and need to plan the visual assets.

Read these files first for context:
- docs/engineering-plans/implementation-plan.md (see design philosophy, colour palette, Phase 2 graphics/imagery notes)
- docs/engineering-plans/content-plan-final.md (site sections that need visual treatment)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 0.2)

I need you to:

1. Create an asset inventory — list every visual element the site will need, section by section
2. For each asset, recommend which AI generation tool is best suited (Microsoft Designer, ChatGPT/DALL-E, Midjourney, Gemini) and why
3. Write ready-to-use prompts for each tool, tailored to produce assets matching the dark-mode-first, modern, bold aesthetic described in the implementation plan
4. Include guidance on prompt iteration — how to refine results if the first attempt isn't right
5. Address the headshot/avatar question — options for the About section (photo, AI-generated illustration, abstract representation, none)
6. Consider SVG patterns and generative art that could be created programmatically rather than via AI image tools

Save the output to: docs/research/imagery-strategy.md

The prompts should be copy-pasteable into each tool. Include multiple variations where the aesthetic direction isn't certain.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the strategy document at docs/research/imagery-strategy.md exists and contains copy-pasteable prompts for each tool
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 0.2 to "Complete" with today's date and a brief note on what was accomplished
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 0.3: Typography & Colour Deep Dive

**Goal:** Make definitive decisions on typography and colour palette by exploring options in context.

**What this produces:**
- Side-by-side comparisons of the candidate typefaces (Inter, Space Grotesk, Satoshi) at various sizes and weights
- Accent colour options prototyped against the dark palette with real content
- A final decision document recording choices and rationale
- CSS custom properties / Tailwind config values ready to use

**Starter Prompt:**
```
I'm making typography and colour decisions for my personal website redesign (viv.me.uk).

Read these files first:
- docs/engineering-plans/implementation-plan.md (see Colour & Typography Direction section)
- docs/engineering-plans/content-plan-final.md (real content to test against)
- docs/research/website-inspiration.md (if it exists — typography and colour observations from researched sites)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 0.3)

I need you to:

1. Research current best practices for dark-mode typography (font sizes, line heights, letter spacing, contrast ratios)
2. Compare the three candidate typefaces (Inter, Space Grotesk, Satoshi) — pull up specimens, discuss their characteristics, and recommend which works best for this site's personality
3. Explore accent colour options — the implementation plan says "one strong accent, used sparingly". Research what works well against near-black backgrounds. Consider: electric blue, warm amber, muted teal, vibrant coral. Present options with rationale.
4. Research the monospace pairing (JetBrains Mono or alternatives) for tech footnotes
5. Document the final recommendations with specific values (font families, weights, sizes, colours as hex codes)
6. Produce a Tailwind CSS configuration snippet and CSS custom properties ready to drop into the project

Save decisions to: docs/research/typography-and-colour.md

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the decisions document at docs/research/typography-and-colour.md exists with specific values (hex codes, font names, sizes) and a ready-to-use Tailwind config snippet
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 0.3 to "Complete" with today's date and a brief note on what was decided
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 0.4: Technology De-risking — Astro + GSAP Prototype

**Goal:** Build a minimal throwaway prototype to validate that Astro + Tailwind + GSAP ScrollTrigger work well together for this use case, and to smoke-test the Docker dev environment approach.

**What this produces:**
- A working prototype in a temporary directory with: Astro + Tailwind, a GSAP ScrollTrigger animation, dark theme, basic responsive layout
- A Docker Compose setup verified to work
- GitHub Actions workflow validated (or at least drafted)
- A list of any gotchas, limitations, or surprises discovered
- Confidence (or a decision to pivot) on the technology choices

**Starter Prompt:**
```
I'm de-risking the technology choices for my personal website redesign before committing to the full build.

Read this first:
- docs/engineering-plans/implementation-plan.md (technology stack, Docker setup, deployment pipeline)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 0.4)

Create a minimal prototype in a temporary directory (e.g. /tmp/viv-prototype/) that validates:

1. Astro project scaffolding with Tailwind CSS integration
2. A dark-themed page with the proposed colour palette (#0a0a0a background, #f5f5f5 text)
3. A GSAP ScrollTrigger animation — a simple scroll-triggered fade-in of content blocks
4. CSS scroll-driven animations for basic reveals (native, no library)
5. prefers-reduced-motion support disabling animations gracefully
6. Docker Compose dev environment with hot reload working
7. A production build that outputs static files suitable for GitHub Pages
8. A draft GitHub Actions workflow for deploying to GitHub Pages

Document any surprises, version conflicts, or gotchas in: docs/research/tech-derisking-notes.md

This is a throwaway prototype — the goal is learning, not production code. If something doesn't work as expected, document it and suggest alternatives. If any finding would change the approach in the implementation plan, flag it clearly.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the notes document at docs/research/tech-derisking-notes.md exists with clear findings on what worked, what didn't, and any recommended changes to the implementation plan
2. Commit the notes file (not the prototype — it's throwaway) with a conventional commit message
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 0.4 to "Complete" with today's date and a brief note on findings
4. If any findings affect the implementation plan or other sessions, add a note to the relevant session entry in this project plan
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 0.5: Competitive Analysis — What Makes a Great "About Me" Experience

**Goal:** Look beyond portfolios to study how the best product sites, agency sites, and personal brands handle storytelling, timelines, and "about" content.

**What this produces:**
- Analysis of 8-10 sites with exceptional storytelling (not just developer portfolios)
- Specific patterns for timeline/experience presentation
- How the best sites handle the "show don't tell" principle
- Mobile experience observations — how cinematic scroll experiences degrade on small screens
- Recommendations for the implementation plan based on findings

**Starter Prompt:**
```
I'm studying how the best websites handle personal storytelling and experience timelines.

Read these files first:
- docs/engineering-plans/implementation-plan.md (design philosophy and timeline structure)
- docs/engineering-plans/content-plan-final.md (the specific content that needs presenting)
- docs/research/website-inspiration.md (if it exists — builds on earlier research)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 0.5)

This isn't limited to developer portfolios. Research sites that excel at storytelling through scroll — product launches, agency sites, personal brands, interactive narratives, award-winning web experiences.

For each site, analyse:
- How they pace content revelation through scroll
- Timeline/experience presentation techniques
- How they handle the transition from "impressive on desktop" to "still works on mobile"
- Typography and whitespace choices that support storytelling
- Where they use animation purposefully vs. gratuitously

Compile findings into: docs/research/storytelling-analysis.md

Include a "Lessons for viv.me.uk" section mapping findings to specific sections of my content plan.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the analysis document at docs/research/storytelling-analysis.md exists with the "Lessons for viv.me.uk" section
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 0.5 to "Complete" with today's date and a brief note on what was accomplished
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

---

## Phase 1: Foundation

These sessions set up the development environment and project scaffolding. They should be done in order.

### Session 1.1: Project Scaffolding & Dev Environment

**Goal:** Set up the Astro project, Docker dev environment, and basic tooling. Verify everything works end-to-end from `docker compose up` to seeing a page in the browser.

**Entry point:** Clean branch, research phase complete (or at least Session 0.4 done)

**What this produces:**
- Astro project initialised with Tailwind CSS
- Docker Compose dev environment with hot reload
- .nvmrc / Node version pinning
- Basic project structure matching the implementation plan
- README with development instructions
- Site loads in browser via Docker dev server

**Starter Prompt:**
```
I'm setting up the development environment for my personal website redesign.

Read these files for context:
- docs/engineering-plans/implementation-plan.md (see Development Environment, Project Structure, Technology Stack)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 1.1)
- docs/research/tech-derisking-notes.md (if it exists — lessons from the prototype)

Before making any changes:
- Tag the current state of the repo in git (e.g. `git tag jekyll-final`) so we can roll back if needed

Set up the project:

1. Initialise an Astro project in the repo root (replacing the current Jekyll site — but don't delete the old files yet, we may need to reference them)
2. Add Tailwind CSS integration
3. Create the Docker Compose dev environment (Dockerfile + docker-compose.yml)
4. Pin the Node.js version
5. Set up the basic project structure from the implementation plan
6. Create a minimal index page that loads with the dark theme palette
7. Update README.md with development instructions
8. Verify: docker compose up starts the dev server and the page loads

Don't build any real content yet — just the skeleton.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the dev server starts and the minimal page loads in a browser
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 1.1 to "Complete" with today's date and a brief note on what was set up
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 1.2: Deployment Pipeline

**Goal:** Set up GitHub Actions to automatically build and deploy to GitHub Pages on push to main.

**Entry point:** Session 1.1 complete, project scaffolding in place

**What this produces:**
- GitHub Actions workflow file (.github/workflows/deploy.yml)
- Successful deployment to GitHub Pages
- CNAME preserved for viv.me.uk
- Verified that the site loads at viv.me.uk after deployment

**Starter Prompt:**
```
I need to set up the deployment pipeline for my Astro site to GitHub Pages.

Read these files:
- docs/engineering-plans/implementation-plan.md (see Deployment Pipeline section)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 1.2)
- The current CNAME file (it should contain viv.me.uk)

Set up:
1. GitHub Actions workflow that builds the Astro site and deploys to GitHub Pages
2. Ensure the CNAME file is preserved in the build output (public/ directory)
3. Configure Astro for the correct site URL (viv.me.uk)
4. Test by pushing to main and verifying the deployment succeeds

Note: The current site is Jekyll-based. We need to handle the transition carefully — the new site should replace the old one on GitHub Pages. Make sure we don't break the live site during the transition. If there's a risk, flag it and we'll discuss rather than proceeding.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the GitHub Actions workflow runs successfully and the site deploys (or verify the workflow file is correct if we're not ready to deploy yet)
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 1.2 to "Complete" with today's date and a brief note on what was set up
4. If you discovered anything that affects other sessions in the project plan (especially Session 7.2 Transition Plan), add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 1.3: Design System Foundation

**Goal:** Establish the design tokens, global styles, and base components that everything else will build on.

**Entry point:** Sessions 1.1 complete, typography/colour decisions from Phase 0 available

**What this produces:**
- Tailwind configuration with custom colours, typography, spacing
- Global CSS with dark/light mode variables
- Base layout component(s)
- Navigation component (minimal — just the structure)
- Footer component (minimal)
- Verified responsive behaviour at mobile/tablet/desktop breakpoints

**Starter Prompt:**
```
I'm building the design system foundation for my personal website.

Read these files:
- docs/engineering-plans/implementation-plan.md (colour, typography, layout direction)
- docs/research/typography-and-colour.md (if it exists — final decisions from Session 0.3)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 1.3)

Build the design foundation:
1. Configure Tailwind with the chosen colour palette, typography, and spacing scale
2. Set up CSS custom properties for dark mode (dark mode is the default; light mode comes later)
3. Create a base layout component (Astro layout) with proper HTML structure, meta tags, font loading
4. Create a minimal navigation component (just the shell — links will be added as sections are built)
5. Create a minimal footer component matching the contact/footer spec in the content plan
6. Verify responsive behaviour at 375px (mobile), 768px (tablet), and 1440px (desktop)

This is the foundation everything else builds on, so take care with it.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the site builds cleanly and the design tokens render correctly at all three breakpoints (375px, 768px, 1440px)
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 1.3 to "Complete" with today's date and a brief note on what was established
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

---

## Phase 2: Core Build — Vertical Slices

Each session builds one complete section of the site. These can be done in order (recommended, as later sections build on patterns established in earlier ones) or selected based on priority.

### Session 2.1: Hero Section

**Goal:** Build the hero section — the first thing anyone sees. Full-viewport, animated entrance, scroll indicator.

**What this produces:**
- Hero section with animated text entrance
- Background treatment (gradient, particles, or abstract — informed by research)
- Scroll indicator
- Reduced-motion alternative
- Works well on mobile

**Starter Prompt:**
```
I'm building the hero section for my personal website.

Read these files:
- docs/engineering-plans/implementation-plan.md (see Hero section, animation approach)
- docs/engineering-plans/content-plan-final.md (see Hero section for the text)
- docs/research/website-inspiration.md (if it exists — inspiration for hero treatments)
- docs/research/imagery-strategy.md (if it exists — hero background approach)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 2.1)

Build the hero section:
1. Full-viewport hero with the text: "Viv." / "Software engineer. Building things that matter."
2. Animated entrance — text fading or sliding in using GSAP or CSS animations
3. Background treatment — implement the chosen approach (or a tasteful gradient as placeholder if imagery isn't ready yet)
4. Subtle scroll indicator at the bottom
5. prefers-reduced-motion: show content immediately without animation
6. Test on mobile — the hero must look great at every viewport size

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the hero section renders correctly, animation plays, and it looks good at mobile/tablet/desktop sizes
2. Verify prefers-reduced-motion works (content shows without animation)
3. Commit your changes with a conventional commit message (explain the "why" not the "what")
4. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 2.1 to "Complete" with today's date and a brief note on what was built
5. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
6. List all files created or modified during this session
7. Suggest which session to tackle next
```

### Session 2.2: About Section

**Goal:** Build the About section with the three-paragraph narrative.

**What this produces:**
- About section with scroll-triggered reveal
- Typography and spacing that match the design system
- Responsive layout

**Starter Prompt:**
```
I'm building the About section for my personal website.

Read these files:
- docs/engineering-plans/content-plan-final.md (see About section — the three paragraphs are written)
- docs/engineering-plans/implementation-plan.md (animation approach)
- docs/research/imagery-strategy.md (if it exists — check for headshot/avatar decision)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 2.2)

Build the About section:
1. Three paragraphs of narrative text from the content plan
2. Scroll-triggered reveal animation (subtle — this is text-heavy, don't overwhelm it)
3. Typography should shine here — this is where the font choice proves itself
4. Consider whether a headshot/avatar sits alongside the text (check the imagery strategy if it exists)
5. Responsive: single column on mobile, consider layout options on desktop

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the About section renders correctly with the full content from the content plan, and the scroll animation works
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 2.2 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 2.3: Experience Timeline — Tier 1

**Goal:** Build the centrepiece of the site: the Tier 1 experience timeline with cinematic scroll-triggered animations.

**What this produces:**
- 8 Tier 1 timeline entries with full scroll-triggered animation treatment
- Each entry: year, headline, narrative, tech footnote
- GSAP ScrollTrigger driving the animation
- Content loaded from markdown/MDX content collections
- Reduced-motion alternative
- Excellent mobile experience

**Note:** This is likely the most complex session. It may need to be split into sub-sessions depending on how it goes. Don't force it into one sitting if it's not working.

**Starter Prompt:**
```
I'm building the experience timeline — the centrepiece of my personal website.

Read these files:
- docs/engineering-plans/implementation-plan.md (see Experience Timeline, animation approach, GSAP ScrollTrigger)
- docs/engineering-plans/content-plan-final.md (see Tier 1 entries — all 8 are fully written)
- docs/research/storytelling-analysis.md (if it exists — timeline presentation techniques)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 2.3)

Build the Tier 1 timeline:
1. Set up an Astro content collection for timeline entries (markdown files)
2. Create the 8 Tier 1 entries as content files
3. Build the timeline component with GSAP ScrollTrigger animations
4. Each entry gets: year/period, principle-led headline, narrative story, de-emphasised tech footnote
5. Each entry should have its own "moment" as you scroll — generous space, purposeful animation
6. prefers-reduced-motion: show all entries statically without animation
7. Test on mobile — the timeline must work beautifully on small screens

This is the most important section of the site. Take care with the pacing and animation. If it needs to be split into multiple commits or even multiple sessions, that's fine — commit what works and note what's left.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete (or if splitting into sub-sessions, at each stopping point):
1. Verify the timeline renders with all 8 entries, animations trigger on scroll, and it works on mobile
2. Verify prefers-reduced-motion shows entries statically
3. Commit your changes with a conventional commit message (explain the "why" not the "what")
4. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 2.3 to "Complete" (or "Partial — [what's done]") with today's date and notes
5. If this session needs to be split, add a Session 2.3b entry to the Progress Log with notes on what remains
6. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
7. List all files created or modified during this session
8. Suggest which session to tackle next
```

### Session 2.4: Experience Timeline — Tier 2

**Goal:** Build the Tier 2 timeline entries behind the "See Full Timeline" expansion.

**What this produces:**
- 11 Tier 2 entries with lighter visual treatment
- Expansion mechanism (accordion, slide-in, or separate section — informed by research)
- "See Full Timeline" trigger
- Content from markdown content collections

**Starter Prompt:**
```
I'm building the Tier 2 timeline (the expanded "See Full Timeline" section).

Read these files:
- docs/engineering-plans/implementation-plan.md (see Tier 2 description)
- docs/engineering-plans/content-plan-final.md (see Tier 2 entries — all 11 are written)
- docs/research/storytelling-analysis.md (if it exists — expansion mechanism ideas)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 2.4)

Build the Tier 2 timeline:
1. Add the 11 Tier 2 entries as content files in the timeline collection
2. Build the "See Full Timeline" expansion mechanism
3. Tier 2 entries use the same format but with less visual weight — no cinematic animations, simpler reveal
4. The expansion should feel natural and not jarring after the Tier 1 experience
5. Test: the expansion works smoothly, content is readable, mobile experience is good

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify all 11 Tier 2 entries appear when "See Full Timeline" is triggered, the expansion is smooth, and it works on mobile
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 2.4 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 2.5: Expertise & Beyond the Code

**Goal:** Build the "What I Do" expertise section and the "Beyond the Code" section.

**What this produces:**
- Four expertise theme paragraphs
- Three "Beyond the Code" items (Karate, Guitar, Mentoring)
- Appropriate visual treatment for both sections

**Starter Prompt:**
```
I'm building the Expertise and Beyond the Code sections.

Read these files:
- docs/engineering-plans/content-plan-final.md (see "What I Do / Expertise" and "Beyond the Code" sections)
- docs/engineering-plans/implementation-plan.md (section descriptions)
- docs/research/imagery-strategy.md (if it exists — visual elements for these sections)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 2.5)

Build both sections:
1. "What I Do" — four thematic paragraphs, NOT a skills grid. These are narrative, not bullet points.
2. "Beyond the Code" — three items: Karate (link to ogwrkarate.co.uk), Guitar & Keyboard, Mentoring & Community
3. Both sections need scroll-triggered reveals but lighter than the timeline
4. Consider visual elements: subtle icons or imagery for the Beyond the Code items
5. Responsive layout for both sections

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify both sections render correctly with full content from the content plan, scroll reveals work, and layout is responsive
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 2.5 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 2.6: Contact Footer & Navigation

**Goal:** Complete the footer/contact section and wire up the navigation.

**What this produces:**
- Contact/footer with GitHub and LinkedIn links
- Full navigation with smooth scroll to all sections
- Active section highlighting in nav (optional, if appropriate)

**Starter Prompt:**
```
I'm completing the contact footer and wiring up navigation.

Read these files:
- docs/engineering-plans/content-plan-final.md (see Contact / Footer section)
- docs/engineering-plans/implementation-plan.md (site structure overview)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 2.6)

Build:
1. Contact/footer section — GitHub link, LinkedIn link, location (South Wales), "Want to talk?" line
2. Wire up the navigation menu with links to all sections on the page
3. Smooth scroll behaviour when clicking nav links
4. Consider a scroll-to-top mechanism
5. The footer should feel like a natural, unhurried ending to the scroll experience

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the footer renders correctly, all nav links smooth-scroll to the right sections, and everything works on mobile
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 2.6 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

---

## Phase 3: AI Engineering Page

### Session 3.1: AI Engineering Dedicated Page

**Goal:** Build the standalone AI Engineering page linked from the main scroll.

**What this produces:**
- Dedicated page at /ai-engineering (or similar)
- Content from a separate markdown file
- "Last updated" date display
- Navigation between main page and AI page
- Consistent design with the main site

**Starter Prompt:**
```
I'm building the dedicated AI Engineering page.

Read these files:
- docs/engineering-plans/content-plan-final.md (see "AI Engineering — Dedicated Section")
- docs/engineering-plans/implementation-plan.md (see Phase 4 description)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 3.1)

Build:
1. A standalone page (e.g. /ai-engineering) with its own layout
2. Content structured as: Philosophy, How I Work with AI, What I've Built/Researched, Where This Is Going
3. Content authored in a separate markdown file for easy updates
4. "Last updated: [date]" display
5. Navigation back to the main page
6. Consistent design with the main site's dark theme and typography

The content plan has an outline but not full prose for this page. Build the structure and populate with the outline content — the prose can be refined in a later session (Session 5.1).

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the AI Engineering page loads, navigation works between it and the main page, and "Last updated" displays correctly
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 3.1 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan (especially Session 5.1 for content refinement), add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

---

## Phase 4: Polish & Refinement

### Session 4.1: Light/Dark Mode Toggle

**Goal:** Add a light mode theme and a toggle to switch between dark and light.

**What this produces:**
- Light mode colour palette
- Toggle component (persists preference)
- All sections tested in both modes
- System preference detection (prefers-color-scheme)

**Starter Prompt:**
```
I'm adding light/dark mode toggle to my personal website.

Read these files:
- docs/engineering-plans/implementation-plan.md (dark mode first, light mode as toggle)
- docs/research/typography-and-colour.md (if it exists — colour decisions)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 4.1)

Build:
1. Design the light mode palette (complement to the dark palette, maintaining the same feel)
2. Implement the toggle component — respect system preference, persist user choice
3. All CSS needs to work in both modes (check every section of the site)
4. The toggle should be accessible and unobtrusive
5. Test thoroughly in both modes — scroll through the entire site in each

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the toggle works, persists preference across page loads, respects system preference, and every section looks correct in both modes
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 4.1 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 4.2: Responsive Refinement & Mobile Polish

**Goal:** Thorough responsive testing and refinement across all breakpoints.

**What this produces:**
- Every section verified at mobile (375px), tablet (768px), and desktop (1440px+)
- Touch interactions working properly on mobile
- Scroll animations performing well on mobile devices
- No horizontal overflow, no tiny text, no unreachable elements

**Starter Prompt:**
```
I'm doing a thorough responsive design pass across the entire site.

Read these files:
- docs/engineering-plans/implementation-plan.md (responsive design expectations)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 4.2)

Read the site's source files to understand what's been built so far, then go through every section and verify/fix responsive behaviour:
1. Test at 375px, 768px, 1024px, and 1440px viewport widths
2. Check that scroll animations perform well and don't cause jank on mobile
3. Verify text is readable at every size — no tiny footnotes on mobile
4. Check that the timeline works well on small screens
5. Verify the navigation works on mobile (hamburger menu or equivalent)
6. Check for horizontal overflow
7. Test the "See Full Timeline" expansion on mobile

Fix any issues found.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the site looks and works well at all four breakpoints (375px, 768px, 1024px, 1440px)
2. Commit your fixes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 4.2 to "Complete" with today's date and a brief note on what was fixed
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 4.3: Accessibility Review

**Goal:** Ensure the site meets WCAG 2.1 AA standards and works well with assistive technologies.

**What this produces:**
- Keyboard navigation working throughout
- Screen reader testing with semantic HTML
- Colour contrast verified (both modes)
- prefers-reduced-motion fully respected
- ARIA labels where needed
- Focus management for the timeline expansion

**Starter Prompt:**
```
I'm doing an accessibility review of my personal website.

Read these files:
- docs/engineering-plans/implementation-plan.md (accessibility expectations — reduced motion, keyboard nav)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 4.3)

Read the site's source files to understand what's been built, then review and fix accessibility:
1. Keyboard navigation — can you reach everything with Tab/Enter/Escape?
2. Semantic HTML — are headings in order? Are landmarks used correctly?
3. Screen reader experience — does the content make sense when read linearly?
4. Colour contrast — verify against WCAG 2.1 AA in both dark and light modes
5. prefers-reduced-motion — verify all animations are disabled gracefully
6. Focus management — especially for the "See Full Timeline" expansion
7. ARIA labels for interactive elements, especially the dark/light toggle
8. Alt text for any images or decorative elements
9. Run an automated audit (Lighthouse accessibility, axe-core) and fix any issues

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the site passes Lighthouse accessibility audit and the issues above are resolved
2. Commit your fixes with a conventional commit message documenting the accessibility improvements and any trade-offs
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 4.3 to "Complete" with today's date and a brief note on what was reviewed and fixed
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 4.4: Performance & SEO

**Goal:** Optimise performance and add essential SEO/meta tags.

**What this produces:**
- Lighthouse performance score > 95
- Proper meta tags, Open Graph, favicon
- Font loading optimised (preload, font-display)
- Images optimised (if any)
- GSAP bundle size checked — only import what's needed
- Sitemap generated (Astro can do this)

**Starter Prompt:**
```
I'm optimising performance and adding SEO essentials to my personal website.

Read these files:
- docs/engineering-plans/implementation-plan.md (technology stack, what's expected)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 4.4)

Read the site's source files to understand what's been built, then optimise:
1. Run Lighthouse and address any performance issues
2. Optimise font loading — preload critical fonts, use font-display: swap
3. Check GSAP bundle size — only import the modules actually used
4. Optimise any images (format, compression, lazy loading)
5. Add meta tags: title, description, author, canonical URL
6. Add Open Graph tags for social sharing (title, description, image)
7. Add a favicon (create or find a suitable one)
8. Add a sitemap (Astro has built-in support)
9. Verify the production build output is clean and minimal

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify Lighthouse performance score is above 95 and all meta/OG tags are present
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 4.4 to "Complete" with today's date and a brief note on what was optimised
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

---

## Phase 5: Content Refinement

### Session 5.1: Content Review & Copy Editing

**Goal:** Review all content on the live site for tone, accuracy, and consistency with the content plan.

**What this produces:**
- All text reviewed against the tone guide
- Any placeholder content replaced with final copy
- AI Engineering page prose written (if it was left as outline)
- Consistent voice throughout

**Starter Prompt:**
```
I'm doing a content review pass across my personal website.

Read these files:
- docs/engineering-plans/content-plan-final.md (the authoritative content source and tone guide)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 5.1)

Then read every content file in the Astro project (markdown files, component text).

Review for:
1. Consistency with the tone guide (first person, plain language, personality, no buzzwords)
2. Any placeholder text that needs replacing
3. The AI Engineering page — does it have full prose or just an outline? If outline only, help draft the full content.
4. Grammar, spelling (UK English), punctuation
5. Does the content flow well when reading the site top to bottom?
6. Are tech footnotes consistently formatted?

Present suggested changes for my review. Don't commit content changes without my approval — show me what you'd change and why.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Present a summary of all suggested changes, grouped by section
2. After I approve changes, commit with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 5.1 to "Complete" with today's date and a brief note on what was reviewed
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 5.2: Experience Section Rework

**Goal:** Rework the Experience/Timeline section: reverse the order (most recent first), replace vague date labels with real dates, and decide how to handle entries that span multiple periods or don't fit a neat timeline.

**Entry point:** Session 5.1 complete (content reviewed)

**What this produces:**
- Timeline entries sorted most-recent-first (both tier 1 and tier 2)
- All `year` fields updated with specific dates or date ranges (no "Various", "Throughout career", or "Ongoing")
- Entries that span the whole career (e.g. "Building and Growing Teams", "Security as a Design Decision") either anchored to a meaningful start date, restructured as cross-cutting themes rather than timeline entries, or merged into other entries
- Updated `order` fields in frontmatter to reflect the new sort order
- Sort logic in `Timeline.astro` updated if needed

**Known challenges:**
- 6 entries currently have vague dates: "Various" (14, 15, 17, 18, 19), "Throughout career" (16), "Ongoing" (6)
- These are thematic/cross-cutting entries rather than time-bound roles. They need a decision: anchor them to when they started, move them out of the timeline into the Expertise section, or find another approach
- The tier 1/tier 2 split may need revisiting once the order flips

**Current entry dates for reference:**
| # | Title | Year | Tier |
|---|-------|------|------|
| 01 | The Beginning | 1980s – 1990s | 1 |
| 02 | Cardiff University | 1998 – 2001 | 1 |
| 03 | Tracesmart | 2008 – 2011 | 1 |
| 04 | CERT-UK | 2013 – 2015 | 1 |
| 05 | Threatvine | ~2015 – 2019+ | 1 |
| 06 | Openfire | Ongoing | 1 |
| 07 | AI-Enhanced Engineering | 2024 – present | 1 |
| 08 | Remote Working | 2013 – present | 1 |
| 09 | Glamorgan & Qualtech | 2001 – 2003 | 2 |
| 10 | Freelance Consulting | 2003 – 2006 | 2 |
| 11 | Hargreaves Lansdown | 2006 – 2008 | 2 |
| 12 | BaseKit | 2011 – 2012 | 2 |
| 13 | Thrupoint | 2012 – 2013 | 2 |
| 14 | Crossing Domains | Various | 2 |
| 15 | Stabilising Systems | Various | 2 |
| 16 | Building and Growing Teams | Throughout career | 2 |
| 17 | Infrastructure as Code | Various | 2 |
| 18 | Security as a Design Decision | Various | 2 |
| 19 | Working at the Edges | Various | 2 |

**Starter Prompt:**
```
I'm reworking the Experience/Timeline section of my personal website.

Read these files:
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 5.2)
- docs/style-guide.md (writing voice and tone)
- src/components/Timeline.astro (the timeline component)
- src/content/timeline/*.md (all 19 timeline entries — check frontmatter and content)
- src/content.config.ts (content collection schema)

The changes I want:
1. **Reverse the order** — most recent first, oldest last. Both tier 1 and tier 2.
2. **Replace all vague dates** — no "Various", "Throughout career", or "Ongoing". Every entry needs a real date or date range.
3. **Handle cross-cutting entries** — entries 14-19 are thematic rather than time-bound. For each one, decide: can we anchor it to a meaningful start date? Should it be restructured? Should content be merged into other entries or moved to the Expertise section?

Present your proposed changes for each entry before making them. I want to review the date assignments and any structural changes before they're applied.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify all timeline entries have specific dates and display in reverse chronological order
2. Verify the tier 1/tier 2 split still makes sense in the new order
3. Commit your changes with a conventional commit message (explain the "why" not the "what")
4. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 5.2 to "Complete" with today's date and a brief note on what was changed
5. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
6. List all files created or modified during this session
7. Suggest which session to tackle next
```

---

## Phase 6: Optional Enhancements

These sessions are independent and can be done in any order, or not at all.

### Session 6.1: Engineering Notes Section

**Goal:** Build an "Engineering Notes" section — a lightweight place to capture learnings, configurations, observations, and technical notes. Not a blog. Think technical notebook, not thought leadership.

**What this produces:**
- Astro content collection for notes (markdown)
- Notes index page with listings (date, title, optional tags)
- Individual note layout — clean, readable, code-friendly
- Navigation link to the notes section
- RSS feed generation
- A sample note to verify everything works

**Design direction:** This should feel like a working engineer's notebook. No hero images, no social sharing buttons, no comments. Just clean text, code blocks, and the occasional diagram. The value is in the content, not the presentation.

**Content examples:**
- "How I configure Claude Code for a new project"
- "GSAP ScrollTrigger gotchas with Astro"
- "Non-obvious Docker Compose patterns"
- "Things I learned about Tailwind v4 migration"

**Starter Prompt:**
```
I'm adding an Engineering Notes section to my personal website — a lightweight technical notebook for capturing learnings, configurations, and observations.

Read these files:
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 6.1)
- docs/style-guide.md (writing voice and tone)
- src/content.config.ts (existing content collection setup)

Read the site's source files to understand the current Astro setup, then build:
1. Astro content collection for engineering notes (markdown files)
2. Notes index page — simple list with date and title, most recent first. Optional tag filtering.
3. Individual note layout — clean, readable, with good code block styling
4. Navigation link to the notes section from the main nav
5. RSS feed generation
6. A sample note to verify everything works

This is NOT a blog. No hero images on notes, no "read more" teasers, no social sharing. Just a clean, functional technical notebook. Think of it as a public version of personal engineering notes.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the notes index lists entries, individual notes render correctly, the RSS feed is valid, and navigation works
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 6.1 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 6.2: Analytics Exploration

**Goal:** Decide whether to add analytics, and if so, implement a privacy-respecting solution.

**Starter Prompt:**
```
I'm exploring whether to add analytics to my personal website.

Read: docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 6.2)

Research:
1. Privacy-respecting analytics options (Plausible, Fathom, Umami, GoatCounter, none)
2. Cost comparison and hosting options (self-hosted vs. SaaS)
3. What's the minimum useful data for a personal site? (Do I even need analytics?)
4. GDPR/cookie implications for each option
5. How does each option integrate with Astro?

Present options with pros/cons. I'll decide whether to proceed. If we decide to implement something, do it in this session.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify research is thorough and options are clearly presented with pros/cons
2. If we implemented analytics, verify it's working; if not, document the decision and rationale
3. Commit any changes (research document or implementation) with a conventional commit message
4. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 6.2 to "Complete" with today's date and a brief note on the decision made
5. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
6. List all files created or modified during this session
7. Suggest which session to tackle next
```

### Session 6.3: Interactive Enhancements

**Goal:** Add subtle interactive polish (cursor effects, hover states, micro-interactions).

**Starter Prompt:**
```
I'm adding interactive polish to my personal website.

Read these files:
- docs/engineering-plans/implementation-plan.md (see Phase 6 — Interactive elements)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 6.3)

Read the site's source files to understand what's been built, then explore and implement subtle interactive enhancements:
1. Hover states for links and interactive elements
2. Smooth, purposeful micro-interactions
3. Any cursor effects that enhance without distracting
4. Subtle parallax on decorative elements (if any)

The key principle: less is more. Every interaction should feel purposeful. If something feels gimmicky, remove it.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify all enhancements feel purposeful and don't cause jank or distraction; check on mobile too
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 6.3 to "Complete" with today's date and a brief note on what was added
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 6.4: AI Engineering Page Prominence

**Goal:** Make the AI Engineering page more discoverable and better integrated into the main page experience. Currently it's only linked from the contact footer, which isn't prominent enough for what is a key part of Viv's story.

**What this produces:**
- A more prominent route to the AI Engineering page from the main scroll
- Could be: a dedicated callout section, a link from the AI expertise card, a nav link, or something else entirely
- The approach should feel natural within the page flow, not bolted on

**Open questions:**
- Where in the main page flow does an AI Engineering callout fit best?
- Should it be a full section, a card within an existing section, or a nav item?
- Does the AI Engineering page itself need a visual refresh to match? (Header image removed — it looked wrong. May need a different treatment or none at all.)

**Starter Prompt:**
```
The AI Engineering page (/ai-engineering) needs to be more prominent and better integrated into the main page experience. Currently it's only linked from the contact footer.

Read these files:
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 6.4)
- docs/style-guide.md (writing voice and tone)
- src/pages/index.astro (main page layout)
- src/pages/ai-engineering.astro (the AI Engineering page)
- src/components/Expertise.astro (the AI-augmented engineering card)
- src/components/Contact.astro (current location of the link)

Explore options for making the AI Engineering page more discoverable:
1. Review the main page flow and identify natural integration points
2. Consider: link from the AI expertise card, dedicated callout section, nav link, or other approaches
3. Present 2-3 options with trade-offs for my review before implementing
4. The approach should feel natural, not salesy — see the style guide

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the chosen approach is implemented and the AI Engineering page is meaningfully more discoverable
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 6.4 to "Complete" with today's date and a brief note on what was built
4. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

### Session 6.5: "Beyond the Code" Expansion & /life Page

**Goal:** Restructure the "Beyond the Code" section with curated cards for new personal interests, move Mentoring content to the Expertise section, and build a dedicated `/life` page with richer content.

**Entry point:** Core build complete (Phase 2 done)

**What this produces:**
- Main page: 5 curated cards (Karate, MTB & Active Life, Guitar, Smart Home, Cooking) replacing the current 3
- Mentoring & Community content integrated into the Expertise section's "Growing engineers" theme
- Dedicated /life page at `/life` with detailed content for each interest
- Navigation between main page and /life page
- Generated imagery for new cards (MTB, smart home, cooking)

**Starter Prompt:**
```
I'm expanding the "Beyond the Code" section to include more personal interests and building a dedicated /life page.

Read these files:
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 6.5)
- docs/engineering-plans/content-plan-final.md (see expanded "Beyond the Code" section with new interests)
- docs/research/imagery-strategy.md (for generating new card images)
- src/components/BeyondTheCode.astro (current 3-card implementation)
- src/components/Expertise.astro (where Mentoring content will move)
- src/pages/ai-engineering.astro (pattern for standalone pages)

Build:
1. Add new content cards to "Beyond the Code": Mountain Biking & Active Life, Smart Home & IoT, Cooking
2. Restructure the section layout to handle 5 cards well (consider 2+3 grid, or 3+2, or a different layout)
3. Move Mentoring & Community content into the Expertise section alongside "Growing engineers"
4. Build a dedicated /life page at `/life` with richer content for each interest
5. Add a "See more" or similar link from the main page section to /life
6. Wire up navigation (add /life to the nav menu)
7. Generate imagery for the new cards using prompts from the imagery strategy document
8. Note: do NOT link out to Strava or Garmin profiles — Viv prefers not to link to these services

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the main page shows 5 curated cards, Mentoring content is in the Expertise section, and the /life page loads with content for all interests
2. Verify navigation between the main page and /life page works
3. Commit your changes with a conventional commit message (explain the "why" not the "what")
4. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 6.5 to "Complete" with today's date and a brief note on what was built
5. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
6. List all files created or modified during this session
7. Suggest which session to tackle next
```

### Session 6.6: Strava Activity Integration

**Status:** Removed (2026-02-17). Originally implemented then dropped — the ongoing credential management overhead and API dependency weren't worth it for a personal site. All Strava code, environment variables, and the daily cron rebuild schedule have been removed. Historical review documents in `docs/reviews/` still reference Strava as they are point-in-time snapshots.
7. List all files created or modified during this session
8. Suggest which session to tackle next
```

### Session 6.7: "Work in the Open" — GitHub Contributions Section

**Goal:** Add a section to the main page highlighting Viv's public GitHub contributions, focused on the Openfire and docker-compose repositories.

**Entry point:** Core build complete (Phase 2 done)

**What this produces:**
- A new section on the main page between Expertise and Beyond the Code
- 2 repo highlight cards: Openfire (igniterealtime/Openfire) and openfire-docker-compose (surevine/openfire-docker-compose)
- Brief descriptions of key contributions (crypto security, networking overhaul, ADRs, Docker tooling)
- Links to GitHub profile (github.com/viv) and specific repos
- Optional: build-time GitHub API fetching for live stars/forks counts
- Tone: honest and understated — "here's some work that happens to be public"

**Design direction:**
- No contribution graph (activity is sporadic — the graph would misrepresent the quality of the work)
- No commit counts or PR tallies — let the substance speak
- Compact layout: 2 cards or a simple list, not a showcase wall
- Consistent with the site's dark theme and card patterns

**Starter Prompt:**
```
I'm adding a "Work in the Open" section to highlight my public GitHub contributions.

Read these files:
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 6.7)
- docs/engineering-plans/content-plan-final.md (see "Work in the Open" section for content and tone guidance)
- src/components/Expertise.astro (preceding section — match visual weight)
- src/components/BeyondTheCode.astro (following section — visual context)
- src/pages/index.astro (main page layout)

Key context:
- My GitHub username is "viv" (github.com/viv)
- Most of my work is private. The public exceptions are:
  - igniterealtime/Openfire — XMPP server. I've contributed networking overhaul (MINA→Netty), crypto security hardening (IVs, PBKDF2, GCM, OCSP), Architecture Decision Records, performance work
  - surevine/openfire-docker-compose — Docker Compose setup for Openfire dev/test environments
- I don't want to overplay this. The tone should be honest — "here's some of my work that's public" not "I'm a prolific open source contributor"

Build:
1. A new section between Expertise and Beyond the Code
2. Section title: "Work in the Open" (or suggest something better if you have an idea)
3. Brief intro line setting the tone (most of my work is behind closed doors, but some isn't)
4. 2 repo highlight cards with:
   - Repo name and link
   - Brief description of the contributions (from the content plan)
   - Optionally: stars/forks fetched from GitHub API at build time
5. Link to full GitHub profile
6. Scroll-triggered reveal animation consistent with other sections
7. Update the nav menu to include this section

If fetching from GitHub API: use the GraphQL API with a PAT stored as GITHUB_TOKEN env var (no PUBLIC_ prefix). Fetch in Astro frontmatter at build time. Include graceful fallback if the API is unavailable.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the section renders correctly between Expertise and Beyond the Code, with repo cards and links
2. Verify the tone feels honest and understated, not self-aggrandising
3. If using GitHub API: verify build-time fetching works and fallback handles missing token gracefully
4. Commit your changes with a conventional commit message (explain the "why" not the "what")
5. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 6.7 to "Complete" with today's date and a brief note on what was built
6. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
7. List all files created or modified during this session
8. Suggest which session to tackle next
```

### Session 6.8: Photo Gallery (Deferred)

**Goal:** Add a curated photo gallery to the /life page.

**Status:** Documented for future implementation. Not scheduled yet.

**Approach (when implemented):**
- Viv manually exports favourite photos from Apple Photos
- Photos go into `src/assets/gallery/` — Astro optimises them at build time
- Grid or masonry gallery component with lightbox for full-size viewing
- Photos can have captions/metadata via a content collection or frontmatter
- Could also explore Cloudinary or similar CDN if manual curation feels like too much friction

**Starter Prompt:** To be written when this session is scheduled.

### Session 6.9: GitHub API Build-Time Integration (Optional)

**Goal:** Consolidate build-time API fetching into a shared pattern if multiple integrations use it.

**Status:** Skipped. 6.6 (Strava) was removed and 6.7 uses static content, so there is no build-time API fetching to consolidate.

---

## Phase 7: Process & Workflow

### Session 7.1: GitHub Issues Exploration

**Goal:** Explore whether GitHub Issues (and/or GitHub Projects) would be a better way to track remaining work, future enhancements, and content updates.

**What this produces:**
- An assessment of whether GitHub Issues adds value over markdown tracking for this project
- If yes: a set of issues created from outstanding work
- If yes: a project board structure
- Labels/milestones that make sense for a personal site project

**Starter Prompt:**
```
I'm exploring whether to use GitHub Issues to track work on my personal website project.

Read: docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 7.1, and review the Progress Log to see what's done and what's outstanding)

I currently track everything in markdown files. Help me evaluate:
1. What would GitHub Issues add that markdown doesn't provide?
2. Is it overkill for a personal site project, or does the structure help?
3. If we do use Issues: what labels, milestones, and project board structure make sense?
4. Could we automate issue creation from the session plan? (e.g. one issue per session)
5. How would this integrate with the existing engineering-plans markdown files?

Present your recommendation. I'll decide whether to proceed. If we decide to go ahead, help set up the Issues and project board in this session.

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the recommendation is clear with pros/cons
2. If we created Issues/project board, verify they're set up correctly
3. Commit any changes (documentation of decision, or scripts/config) with a conventional commit message
4. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 7.1 to "Complete" with today's date and a brief note on the decision made
5. If you discovered anything that affects other sessions in the project plan, add a note to the relevant session entry
6. List all files created or modified during this session
7. Suggest which session to tackle next
```

### Session 7.2: Transition Plan — Jekyll to Astro

**Goal:** Plan the safe transition from the current Jekyll site to the new Astro site on GitHub Pages.

**What this produces:**
- A step-by-step transition plan
- DNS/CNAME considerations
- Rollback plan if something goes wrong
- Decision on what to do with old content (blog posts, rides, projects)

**Starter Prompt:**
```
I need to plan the transition from my current Jekyll site to the new Astro site.

Read these files:
- The current site structure (index.html, _config.yml, _layouts/, _includes/, blog/, projects/, rides/)
- docs/engineering-plans/implementation-plan.md (the new site's architecture)
- docs/engineering-plans/2026-02-project-plan.md (this project plan — see Session 7.2)

Plan:
1. What happens to the old blog posts? (Migrate, archive, or drop?)
2. What happens to the rides/projects sections? (These aren't in the new design)
3. URL redirects — are there any URLs we need to preserve? (SEO, external links)
4. CNAME and DNS — any changes needed?
5. The actual cutover: what's the safest sequence of git operations?
6. Rollback plan if the new site has issues after deployment
7. Should we keep the old site accessible somewhere (e.g. old.viv.me.uk or a git tag)?

Document the plan in: docs/engineering-plans/transition-plan.md

--- SESSION COMPLETION CHECKLIST ---
When this session is complete:
1. Verify the transition plan at docs/engineering-plans/transition-plan.md is thorough and includes a rollback strategy
2. Commit your changes with a conventional commit message (explain the "why" not the "what")
3. Update the Progress Log in docs/engineering-plans/2026-02-project-plan.md — set Session 7.2 to "Complete" with today's date and a brief note on what was planned
4. If you discovered anything that affects other sessions in the project plan (especially Session 1.2), add a note to the relevant session entry
5. List all files created or modified during this session
6. Suggest which session to tackle next
```

---

## Cross-Cutting Concerns

These aren't sessions — they're reminders of things to consider throughout the build.

### Content Imagery
The implementation plan notes an open question about career photos (conferences, awards, team events). Consider gathering these during the research phase. They'd add texture to the timeline.

### Headshot / Avatar
A decision is needed: professional photo, AI-generated illustration, abstract representation, or none. Session 0.2 (Imagery Strategy) should address this.

### Old Content Migration
The current site has blog posts, projects, and rides. A decision is needed: migrate, archive, or drop. Session 7.2 (Transition Plan) covers this.

### Domain & DNS
The CNAME is already set up for viv.me.uk. This should "just work" with Astro + GitHub Pages, but verify during Session 1.2.

### Browser Testing
Not a dedicated session, but cross-browser testing (Chrome, Firefox, Safari at minimum) should happen during Phase 4 polish sessions.

### Backup
Before any destructive changes to the repo (especially the Jekyll→Astro transition), ensure the current site is tagged in git for easy rollback.

---

## Progress Log

Track session completion here. Updated by the agent at the end of each session.

| Session | Status | Date | Notes |
|---------|--------|------|-------|
| 0.1 Website Inspiration Research | Complete | 2026-02-08 | Researched 30+ sites across 5 categories (minimal, animation-heavy, dark-mode, creative, timeline). Compiled top picks and cross-cutting patterns into docs/research/website-inspiration.md. Key findings: GSAP + Lenis stack validated, near-black palette confirmed, Apple-style scroll-pinned sections recommended for Tier 1 timeline, accent colour shortlist narrowed. |
| 0.2 Imagery & Visual Asset Strategy | Complete | 2026-02-08 | Full asset inventory across all site sections, copy-pasteable prompts for GPT-4o and Midjourney V7, tool comparison matrix, headshot/avatar analysis (recommends real photo + abstract monogram for favicon), programmatic SVG/CSS/WebGL approaches for backgrounds and patterns, prompt iteration guidance. Output: docs/research/imagery-strategy.md |
| 0.3 Typography & Colour Deep Dive | Skipped | 2026-02-10 | Colour palette was already finalised in docs/research/typography-and-colour.md. Violet accent family confirmed. Space Grotesk selected as primary font during initial build. |
| 0.4 Technology De-risking | Skipped | 2026-02-10 | De-risked by building the real site directly. Astro + Tailwind v4 (@tailwindcss/vite) + GSAP confirmed working. |
| 0.5 Storytelling Analysis | Skipped | 2026-02-12 | Site design and build already complete — research would have informed decisions that are already made. |
| 1.1 Project Scaffolding & Dev Environment | Complete | 2026-02-10 | Astro project scaffolded, Tailwind v4 configured via @tailwindcss/vite, design tokens in global.css @theme block, BaseLayout with font loading, CNAME moved to public/. Old Jekyll files removed. Docker setup deferred. |
| 1.2 Deployment Pipeline | Complete | 2026-02-11 | GitHub Actions workflow at .github/workflows/deploy.yml. Triggers: push to master, workflow_dispatch, daily cron at 06:00 UTC. Uses Node 22, npm ci, actions/deploy-pages@v4. Repo needs Pages source set to "GitHub Actions" manually. |
| 1.3 Design System Foundation | Complete | 2026-02-10 | Colour palette, typography (Space Grotesk + JetBrains Mono), spacing established in global.css and component styles. Navigation and footer components built. |
| 2.1 Hero Section | Complete | 2026-02-10 | Full-viewport hero with animated canvas particle network (120 violet particles, connection lines, radial glow), GSAP entrance animation, scroll indicator. Interactive: click spawns particle burst, click-and-drag paints particle trail. Animated gradient text (white/violet shimmer, 20s cycle) with layered drop-shadow glow. prefers-reduced-motion supported. |
| 2.2 About Section | Complete | 2026-02-10 | Three paragraphs with illustrated avatar, scroll-triggered fade-up animation. |
| 2.3 Timeline Tier 1 | Complete | 2026-02-10 | 8 Tier 1 entries from content collection with GSAP ScrollTrigger, timeline line/dots, accent images, tech footnotes. |
| 2.4 Timeline Tier 2 | Complete | 2026-02-10 | 11 Tier 2 entries behind "See Full Timeline" toggle with lighter visual treatment. |
| 2.5 Expertise & Beyond the Code | Complete | 2026-02-10 | Expertise 2x2 grid with icons, Beyond the Code 3-column grid with karate icon + SVG placeholders. |
| 2.6 Contact Footer & Navigation | Complete | 2026-02-10 | Sticky nav with mobile hamburger menu (right-aligned, no logo link), footer with GitHub/LinkedIn links, AI Engineering link, copyright. Smooth scroll anchors. |
| 3.1 AI Engineering Page | Complete | 2026-02-10 | Standalone page at /ai-engineering with Philosophy, How I Work with AI, What I've Built, Where This Is Going. Last updated date. Back navigation. |
| 4.1 Light/Dark Mode Toggle | Complete | 2026-02-11 | ThemeToggle.astro with sun/moon icon, persists to localStorage, respects prefers-color-scheme. Light mode overrides in global.css. Blocking script in BaseLayout head prevents flash. Hero canvas and particle glow tuned for both themes. |
| 4.2 Responsive Refinement | Complete | 2026-02-11 | Nav breakpoint moved from md→lg (tablets now use hamburger menu). Beyond the Code 2-card row centering fixed with max-w approach. Timeline mobile indentation tightened (saves 8px). All components verified at 375/768/1024/1440px. |
| 4.3 Accessibility Review | Complete | 2026-02-11 | WCAG 2.1 AA colour contrast fixes (dark mode accents lightened for AA compliance, tertiary text adjusted). Global focus-visible outlines. Nav overlay: role=dialog, aria-modal, focus trap, Escape to close. Theme toggle: dynamic aria-label. About: sr-only heading for hierarchy. lang="en-GB". Lighthouse: 96/100/100 across pages. |
| 4.4 Performance & SEO | Complete | 2026-02-11 | Timeline images switched from raw img to Astro Image (99.8% size reduction per image). Lazy loading on all below-fold images. Favicon: sized variants (16/32/180px) replacing 1.3MB raw PNG. Web manifest added. Redundant font preload removed. og:site_name and og:locale added. Sitemap confirmed working. JS bundle: 115KB/45.5KB gzipped. |
| 5.1 Content Review & Copy Editing | Complete | 2026-02-11 | Cardiff University degree classification added to tech footnote. Tone verified against style guide throughout. UK English consistent. No staccato drama, no buzzwords, no "hallucinates". All 19 timeline entries, all component text, AI Engineering page (full prose), and /life page reviewed. Minor notes flagged for Viv's review (About wording, second-person voice in some entries, Growing engineers sentence fragments). |
| 6.1 Engineering Notes Section | Complete | 2026-02-11 | Notes content collection added to content.config.ts. Index page at /notes with date-sorted list, tag display, RSS link. Individual note pages with prev/next navigation. RSS feed at /notes/rss.xml via @astrojs/rss. Code block styling (JetBrains Mono, dark/light modes). Sample note: GSAP ScrollTrigger gotchas. "Notes" added to nav between Life and Contact. |
| 6.2 Analytics Exploration | Complete | 2026-02-12 | Compared Plausible, Fathom, Umami, GoatCounter, and "none". All options are cookie-free and GDPR compliant. Recommendation: GoatCounter free tier (zero cost, one script tag, clean dashboard). Research document at docs/research/analytics-exploration.md. Implementation deferred pending Viv's decision. |
| 6.3 Interactive Enhancements | Complete | 2026-02-11 | Subtle interaction polish throughout. Link hover: gradient underline sliding in from left (accent colour). Card hover: translateY -2px lift with violet shadow on Expertise, Work in the Open, Beyond the Code cards. Timeline card hover: understated border brightening. Scroll progress indicator: 2px accent gradient bar at viewport top. External link indicator: small ↗ arrow via CSS ::after. All interactions disabled under prefers-reduced-motion. Nav scroll effect skipped (existing backdrop-blur is sufficient). |
| 6.4 AI Engineering Page Prominence | Complete | 2026-02-11 | AI Engineering now reachable via 3 routes: nav bar (between Beyond the Code and Life), Expertise card callout ("More about my AI approach →" link on AI-augmented engineering card), and existing Contact footer link. Subtle styling consistent with site tone. |
| 6.5 "Beyond the Code" Expansion & /life Page | Complete | 2026-02-11 | 5 curated cards in 3+2 grid (Karate, MTB, Guitar, Smart Home, Cooking). Mentoring content moved to Expertise "Growing engineers". Dedicated /life page with richer content per interest. Nav updated with Life link. |
| 6.6 Strava Activity Integration | Removed | 2026-02-17 | Originally implemented (2026-02-12) then removed. Credential management overhead and API dependency weren't justified for a personal site. All Strava code (src/lib/strava.ts, StravaStats.astro, .env.example), workflow env vars, and daily cron schedule removed. |
| 6.7 "Work in the Open" — GitHub Contributions | Complete | 2026-02-11 | WorkInTheOpen.astro section between Expertise and Beyond the Code. 2 repo cards (Openfire, docker-compose) with honest intro. GitHub profile link. Added "Open Source" to nav. No API fetching yet — static content. |
| 6.8 Photo Gallery | Not started | | Deferred — curated photo gallery on /life page. Documented for future scheduling |
| 6.9 GitHub API Build-Time Integration | Skipped | 2026-02-12 | 6.7 implemented with static content; no build-time API fetching needed. |
| 7.1 GitHub Issues Exploration | Skipped | 2026-02-12 | Project is nearly complete — only analytics decision remains as an actionable item. GitHub Issues would add process overhead with little benefit at this stage. |
| 7.2 Transition Plan | Complete | 2026-02-11 | Comprehensive transition plan at docs/engineering-plans/transition-plan.md. Covers: merge strategy (fast-forward, 7 clean commits), old content assessment (let it expire — 1 post from 2014, defunct Twitter, nothing worth redirecting), GitHub Pages source change (critical step), DNS (no changes needed, same CNAME), rollback via jekyll-final tag (two strategies documented), deployment verification checklist, timing recommendation (weekday morning Tue–Thu). |

---

## Document History

| Date | Change |
|------|--------|
| 2026-02-08 | Initial project plan created |
| 2026-02-08 | Session 0.1 completed — website inspiration research |
| 2026-02-08 | Session 0.2 completed — imagery and visual asset strategy |
| 2026-02-10 | Initial site build — sessions 1.1, 1.3, 2.1–2.6, 3.1 completed in one pass. Jekyll site replaced with Astro + Tailwind v4 + GSAP. All content sections built with generated imagery. |
| 2026-02-10 | Hero polish — replaced static gradient with animated canvas particle network, added click/drag interactions, animated gradient text with glow. Nav: removed logo link, right-aligned menu. Subtitle updated to "Building things that matter." |
| 2026-02-11 | Plan expanded to include personal interests beyond professional content. Added sessions 6.5 (Beyond the Code expansion + /life page), 6.6 (Strava integration — later removed), 6.7 (photo gallery, deferred). Content plan updated with MTB, smart home, cooking. Mentoring moved to Expertise. |
| 2026-02-11 | Added session 6.7 "Work in the Open" for GitHub contributions section. Photo gallery renumbered to 6.8. Content plan updated with Openfire and docker-compose contribution details. |
| 2026-02-11 | Parallel build session: completed 1.2 (deployment pipeline), 4.1 (light/dark mode), 6.5 (Beyond the Code expansion + /life page), 6.7 (Work in the Open). Also fixed: cross-page nav links, timeline entry title display, hero particle glow in light mode, Tracesmart tone (title/headline softened). |
| 2026-02-11 | Polish & refinement parallel session: completed 4.2 (responsive refinement), 4.3 (accessibility review), 4.4 (performance & SEO), 5.1 (content review). WCAG AA colour contrast fixes across both themes. Nav breakpoint adjusted for tablets. Image optimisation via Astro Image pipeline. Favicon variants, web manifest, focus management, keyboard trapping, ARIA improvements throughout. Content verified against tone guide and content plan. |
| 2026-02-11 | Remaining sessions parallel team: completed 6.1 (engineering notes section with content collection, RSS, code block styling), 6.3 (interactive enhancements — hover effects, scroll progress, external link indicators), 6.4 (AI Engineering page prominence — nav link + Expertise card callout), 7.2 (transition plan with merge strategy, rollback procedures, deployment checklist). Also fixed browser default button backgrounds on all buttons (Tailwind v4 preflight issue). Created 5 hero alternative test pages for review. |
| 2026-02-12 | Completion assessment and final push. Agent team: built Strava integration (6.6 — later removed), removed 7 test/variation pages, researched analytics (6.2 in progress). Colour scheme shifted from violet to sky/cyan (Blueprint theme). Blueprint CSS grid background added to hero section layered behind particle canvas. All hardcoded violet references updated site-wide. Sessions 0.5 (Storytelling), 6.9 (API consolidation), 7.1 (GitHub Issues) marked as skipped. Build: 5 pages, 1.15s, clean. |
| 2026-02-17 | Strava integration removed entirely. Deleted src/lib/strava.ts, StravaStats.astro, .env.example. Removed Strava env vars and daily cron schedule from deploy.yml. Updated content plan and progress log. Credential management overhead and API dependency weren't justified for a personal site. |
