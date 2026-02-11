# viv.me.uk — Implementation Plan

## Overview

A visually striking personal website for Viv, a software engineer with 25+ years of experience based in South Wales. The site should feel like a modern product launch page: bold, cinematic, scroll-driven, presenting Viv not as a product, but as someone whose craft and experience speak for themselves.

The site is static and hosted on GitHub Pages at `viv.me.uk`.


## Design Philosophy

**The feel:** Think Apple keynote meets a well-crafted indie portfolio. Large typography, generous whitespace, smooth scroll-triggered animations, and considered use of colour. Not a parody of a product site, more like borrowing the confidence and pacing of one.

**Key principles:**

- **Show, don't tell.** Let the work, timeline, and interests paint the picture rather than a wall of text.
- **Cinematic pacing.** Each scroll section reveals something new with purpose and rhythm.
- **Dark mode first.** A dark base palette with selective, punchy accent colours. Light mode as a toggle option.
- **Personality over polish.** Karate, guitar, mentoring, open source: these aren't footnotes, they're part of the story.


## Site Structure

The site is a single scrolling page with the following sections, in order. A dedicated AI Engineering page is linked from the main scroll.

### 1. Hero

Full-viewport opening. Animated entrance with text fading or sliding in. Subtle scroll indicator.

> **Viv.**
> Software engineer. Building things that matter since 1998.

Background treatment TBD: subtle particle field, gradient mesh, or abstract geometric animation. Something tasteful, not a stock video.

### 2. About

Three short paragraphs. First person. Not a CV summary, a story told quickly. Content is finalised in the content plan.

### 3. Experience Timeline

The centrepiece of the site. A two-tier structure:

**Tier 1 (8 entries):** Full cinematic treatment. Scroll-triggered animations, narrative weight, generous space. Each entry gets its own moment as you scroll. Entries: The Beginning, Cardiff University, Tracesmart, CERT-UK, Threatvine, Openfire, AI-Enhanced Engineering, Remote Working.

**Tier 2 (11 entries):** Available via a "See Full Timeline" expansion. Same content format, less visual weight. Entries: Glamorgan & Qualtech, Freelance Consulting, Hargreaves Lansdown, BaseKit, Thrupoint, Crossing Domains, Stabilising Systems, Building Teams, Infrastructure as Code, Security as Design Decision, Working at Edges.

Each entry has: year(s), principle-led headline, narrative story, and a de-emphasised tech footnote.

### 4. What I Do / Expertise

Four thematic paragraphs, not a skills grid. Themes: Building systems that last, Secure by design, AI-augmented engineering, Growing engineers.

### 5. AI Engineering (Dedicated Page)

A standalone page linked from the main scroll. Structured as: Philosophy, How I Work with AI, What I've Built/Researched, Where This Is Going. Written in a separate markdown file with a "last updated" date for easy refreshing.

### 6. Beyond the Code

Three items: Wado Ryu Karate (3rd Dan, teaches, links to ogwrkarate.co.uk), Guitar & Keyboard (since 1995), Mentoring & Community (Ben's story, BCS apprentice award, wellness runs, mental health advocacy).

### 7. Contact / Footer

GitHub and LinkedIn links. Location: South Wales. No email on the public site.

> Want to talk? Find me on GitHub or LinkedIn.


## Technology Stack

### Framework: Astro

Purpose-built for content-driven static sites. Ships zero JavaScript by default, only hydrates interactive components ("islands") when needed. Excellent performance out of the box, which matters for an animation-heavy site. Supports markdown/MDX content natively. First-class GitHub Pages deployment support.

**Why not alternatives:** Next.js is overkill and ships more JS than needed. Gatsby has lost momentum. Hugo is too limiting for rich, interactive animations.

### Styling: Tailwind CSS

Utility-first approach keeps styles co-located with components and avoids CSS sprawl. Easy to maintain a consistent design system.

### Animations

- **CSS scroll-driven animations** for basic scroll-triggered reveals (native browser support is now solid).
- **GSAP (GreenSock) with ScrollTrigger** for the cinematic scroll effects on the Tier 1 timeline. Free for personal sites.
- Progressive enhancement: the site should still work beautifully with animations disabled.

### Content: Markdown / MDX

All content authored in markdown files within the repo. Astro's content collections make this clean and type-safe. Blog support is just more `.md` files in a folder if added later.

### Hosting: GitHub Pages

No change from current setup. GitHub Actions workflow for automatic build and deploy on push to `main`. Custom domain (`viv.me.uk`) continues to work via CNAME.


## Colour & Typography Direction

Not a full design spec, just enough to establish a direction.

### Palette (dark mode base)

| Role | Colour | Notes |
|---|---|---|
| Background | `#0a0a0a` | Near-black, not pure black |
| Surface | `#141414` | Cards, elevated sections |
| Surface raised | `#1c1c1c` | Higher elevation, hover cards |
| Border subtle | `#262626` | Dividers, hairline borders |
| Border emphasis | `#333333` | More visible borders when needed |
| Text (primary) | `#f5f5f5` | Off-white. AAA contrast vs background (~18:1) |
| Text (secondary) | `#a0a0a0` | Supporting text. AAA contrast vs background (~7.6:1) |
| Text (tertiary) | `#666666` | Tech footnotes, de-emphasised. AA large text only (~3.5:1) |
| Accent (brand) | `#7C3AED` | Deep violet. Decorative glows, imagery, large headings. AA large (~3.6:1) |
| Accent (functional) | `#8B5CF6` | Links, interactive text, icons. AA (~5.0:1) |
| Accent (light) | `#A78BFA` | Hover states, focus rings, badges. AAA (~7.3:1) |
| Accent (pale) | `#C4B5FD` | Tag text, subtle highlights. AAA (~10.7:1) |

Full palette rationale documented in `docs/research/typography-and-colour.md`.

### Typography

A modern sans-serif. Candidates:

- **Inter** — the safe, excellent choice. Clean, highly readable, free.
- **Space Grotesk** — slightly more personality, geometric, techy.
- **Satoshi** — trendy, warm, distinctive.

Paired with a monospace font for tech footnotes and code snippets (JetBrains Mono is a natural fit).


## Deployment Pipeline

```
Push to main
    │
    ▼
GitHub Actions triggers
    │
    ▼
npm install → astro build
    │
    ▼
Output to dist/
    │
    ▼
Deploy to GitHub Pages
    │
    ▼
Live at viv.me.uk
```


## Development Environment

The project includes a containerised dev environment so you can come back to it months later and be productive immediately, without needing to remember which Node version to install or how the build works.

### Docker Compose

A simple `docker-compose.yml` with the working directory mounted as a volume. The container runs Node.js at the pinned version and exposes the Astro dev server port. IDE-agnostic, so it works with IntelliJ, the terminal, or anything else.

```
docker compose up dev    # Start the dev server
docker compose run build # Production build
```

### README

A `README.md` with clear instructions for common tasks: starting the dev server, running a production build, previewing locally, and deploying. This is the "I forgot how" safety net.

### Project structure (updated)

```
viv.me.uk/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages (index, ai-engineering)
│   ├── content/         # Markdown content (timeline, about, ai)
│   ├── styles/          # Global styles, Tailwind config
│   └── assets/          # Images, fonts
├── public/              # Static assets (favicon, CNAME, etc.)
├── docker-compose.yml   # Dev environment
├── Dockerfile           # Node.js container definition
├── README.md            # Dev and build instructions
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions deployment
```

The Dockerfile pins the Node.js version so the build is reproducible. The `docker-compose.yml` mounts the project directory and forwards ports, so live reload works normally during development.


## Development Phases

### Phase 1 — Foundation

- Scaffold Astro project with Tailwind CSS.
- Set up Docker dev environment, README, and `.nvmrc`.
- Set up GitHub Actions deployment pipeline.
- Establish dark theme, typography, and basic layout.
- Build hero section with entrance animation.
- Verify deployment to GitHub Pages with custom domain.

### Phase 2 — Design Exploration

Before building out content sections, spend time on the visual identity. The decisions made here set the tone for everything that follows.

- **Colour and accent.** Prototype accent colour options in context against the dark palette. Test with real content, not placeholder text.
- **Typography.** Set the font candidates (Inter, Space Grotesk, Satoshi) side by side in the hero and body text. Pick what feels right at different sizes.
- **Hero background treatment.** Experiment with options: gradient mesh, subtle particle animation, geometric abstraction, or something more restrained. This is the first thing anyone sees, so it's worth getting right.
- **Scroll animation style.** Build a rough prototype of the Tier 1 timeline scroll to establish the animation language: fade direction, timing, easing, parallax depth. Decide how much is too much.
- **Tier 2 expansion mechanism.** Prototype options: accordion expand, separate scroll section, slide-in panel. Pick what feels natural for the amount of content.
- **Graphics and imagery.** Explore options for visual elements throughout the site. Possibilities include: abstract generative art or SVG patterns as section dividers, subtle iconography for the expertise and Beyond the Code sections, a headshot or illustration for the About section, and how tech footnotes are visually treated (monospace, muted, pill-shaped tags, etc.).
- **Photography.** A good headshot would elevate the About section considerably. Consider whether to use a photo, an illustrated avatar, or neither.
- **Responsive feel.** Check the design direction works on mobile early, before committing to layouts that only shine on desktop.
- **Reduced motion.** Verify the site looks good with `prefers-reduced-motion` enabled. Easier to get right from the start than to retrofit.

### Phase 3 — Core Content

- About section with narrative content.
- Experience timeline: Tier 1 entries with GSAP ScrollTrigger animations.
- Tier 2 entries behind "See Full Timeline" expansion.
- What I Do / Expertise section.
- Beyond the Code section.
- Contact / footer.

### Phase 4 — AI Engineering Page

- Dedicated page with its own layout.
- Content from separate markdown file.
- "Last updated" date display.
- Navigation between main page and AI page.

### Phase 5 — Polish & Details

- Light/dark mode toggle.
- Responsive design refinement (mobile, tablet, desktop).
- Performance audit and optimisation.
- Accessibility review (keyboard navigation, screen readers, reduced motion preferences).
- Meta tags, Open Graph, favicon.

### Phase 6 — Optional Enhancements

- Blog infrastructure (Astro content collections + MDX).
- Subtle interactive elements (cursor effects, hover states).
- Analytics (privacy-respecting, something like Plausible or Fathom, or none at all).
- RSS feed for blog content.


## Development Tooling

| Tool | Purpose |
|---|---|
| Node.js + npm | Package management and build |
| Astro CLI | Dev server, build, preview |
| Tailwind CSS | Styling |
| GSAP | Scroll animations |
| GitHub Actions | CI/CD to GitHub Pages |
| IntelliJ | IDE (Astro plugin available) |


## Open Questions & Decisions for Build

- **Content imagery.** Are there any photos from your career (conferences, awards, team events) that could add texture to the timeline? Not essential, but worth thinking about.
- **AI page depth.** How much detail for launch vs. what can be added iteratively? The "last updated" approach means this can grow over time.
- **Blog at launch?** Currently Phase 6 (optional). Worth confirming whether this is genuinely deferred or something you'd want sooner.


## What This Plan Deliberately Avoids

- **No CMS.** Content lives in markdown files in the repo. You're a developer, you don't need a CMS for occasional updates.
- **No backend.** No server, no database, no serverless functions. Pure static output.
- **No contact form.** They attract spam on static sites and require a third-party service.
- **No framework churn.** Astro is stable, well-maintained, and purpose-built for exactly this use case.
