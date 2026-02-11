---
generated_by: Claude Opus 4.6
generation_date: 2026-02-08
model_version: claude-opus-4-6
purpose: research
status: complete
human_reviewer: matthewvivian
tags: [inspiration, portfolio, design-research, dark-mode, scroll-animation, GSAP, timeline]
---

# Website Inspiration Research

Research conducted 2026-02-08 for the viv.me.uk redesign. Five categories were researched in parallel: minimal/elegant developer portfolios, animation-heavy scroll-driven sites, dark-mode-first portfolios, non-tech creative portfolios, and timeline/experience presentations.

The target aesthetic: cinematic, dark-mode-first, scroll-driven single-page experience with GSAP ScrollTrigger animations, personality-forward storytelling. "Apple keynote meets well-crafted indie portfolio."

---

## Top Picks

These 7 sites best align with the viv.me.uk vision. Each offers something specific to borrow.

### 1. Dennis Snellenberg — dennissnellenberg.com

**Why it's a top pick:** The closest overall reference for the viv.me.uk vision. Dark-mode-first (true black background), cinematic GSAP + Lenis smooth scroll, oversized confident typography, generous whitespace creating cinematic pacing. Awwwards Site of the Day and Developer Award winner. This is the gold standard for the GSAP + Lenis animation stack that viv.me.uk plans to use.

**Borrow:** GSAP + Lenis smooth scroll implementation patterns. Magnetic cursor effects on interactive elements. Oversized typography with generous whitespace for cinematic pacing. Parallax on visual elements.

**Adapt:** Use near-black (#0a0a0a) rather than true black (#000) to reduce eye strain. Choose a more distinctive accent colour than warm brown. Ensure progressive enhancement so the site works without JavaScript.

---

### 2. Linear.app — linear.app

**Why it's a top pick:** The defining reference for dark-mode scroll-driven storytelling. Popularised the aesthetic now called "the Linear look": dark backgrounds, bold typography, complex gradients, glassmorphism, scroll-triggered reveals. Uses LCH colour space for perceptually uniform gradients. Performance-obsessed despite heavy animation. The implementation plan already references this energy ("Apple keynote meets indie portfolio").

**Borrow:** Dark-mode-first colour system using LCH colour space. Scroll-triggered text and feature reveals with restrained animation. Typography hierarchy (large hero text transitioning to readable body copy). Pinned sections with content animating within the viewport.

**Adapt:** Linear is a product marketing site — adapt the narrative structure for personal storytelling. Avoid copying the aesthetic so directly that viv.me.uk looks like a Linear clone. The "Linear look" is now widely imitated.

---

### 3. Brittany Chiang — brittanychiang.com / v4.brittanychiang.com

**Why it's a top pick:** The most influential developer portfolio of the last several years. Proves that restraint, dark palette, and personality are more memorable than spectacle. Single accent colour discipline (mint/teal), sticky sidebar navigation, numbered sections, tech tags as pills. The benchmark for "dark developer portfolio done well."

**Borrow:** Single accent colour used only on interactive elements and numbered markers. Sticky sidebar with scroll-spy section navigation. Layered dark tones for surface elevation without borders. Tech footnotes as muted pill-shaped tags.

**Adapt:** viv.me.uk needs more cinematic scroll animation than Brittany's subtle approach. The mint accent is now too widely copied — choose a more distinctive colour. The content structure is more CV-like than the narrative storytelling viv.me.uk aims for.

---

### 4. Codrops Cinematic 3D Scroll Tutorial — tympanus.net/codrops

**Why it's a top pick:** Not a portfolio, but the definitive technical reference for GSAP cinematic scroll. Demonstrates custom easing curves ("cinematicSilk", "cinematicSmooth", "cinematicFlow"), ScrollSmoother, two-layer architecture (fixed background + scrolling content), and the concept of scroll "scenes." The most actionable technical resource for the build phase.

**Borrow:** Custom easing functions for cinematic pacing (the single most impactful technique). Two-layer architecture: background visual layer + foreground content layer. Scroll segments treated as "scenes" with intentional pacing. ScrollSmoother integration patterns.

**Adapt:** Skip the WebGL/3D aspects — achieve cinematic feel through typography, spacing, and easing instead. CustomEase is a paid GSAP plugin — the concepts can be approximated with built-in easing functions.

**Related tutorials:** [Scroll-driven text animations with GSAP](https://tympanus.net/codrops/2025/11/04/creating-3d-scroll-driven-text-animations-with-css-and-gsap/), [Scroll-revealed gallery with Astro](https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/)

---

### 5. Paco Coursey — paco.me

**Why it's a top pick:** Extreme minimalism that proves near-black + off-white + perfect typography can carry an entire site. Design engineer at Linear (the product behind the dark-mode aesthetic trend). The "Now" section is a masterclass in personality-forward content. Open source on GitHub. Aspirational for content tone and typographic hierarchy.

**Borrow:** The "Now" section concept — sharing current thinking, not just credentials. Extreme whitespace discipline creating breathing room. View Transitions API for smooth navigation. The philosophy that restraint is confidence.

**Adapt:** viv.me.uk needs more visual presence and scroll-driven storytelling than paco.me provides. The planned accent colour and GSAP animations will add what paco.me deliberately omits. Borrow the content strategy, not the visual strategy.

---

### 6. Apple Product Pages — apple.com

**Why it's a top pick:** The gold standard for scroll-driven cinematic presentation, explicitly referenced in the implementation plan. Full-viewport sections as "slides." Large typography introducing each feature. Scroll-pinned sections where content animates internally before unpinning. Progressive content reveal within pinned sections.

**Borrow:** Scroll-pinned sections (GSAP ScrollTrigger `pin: true`). Headline appears first, then narrative reveals progressively on continued scroll. Full-viewport entry composition with generous whitespace. GPU-composited CSS transforms for performance.

**Adapt:** No 3D product renders or canvas frame sequences. Achieve cinematic feel through typography, spacing, and easing. Apple has a large engineering team — the level of polish is aspirational, not a direct target.

---

### 7. Stas Bondar — stabondar.com

**Why it's a top pick:** GSAP Site of the Week and Month, multiple Awwwards Site of the Day. The cinematic, animation-heavy end of the spectrum. Near-black background with coral/red accent. GSAP + ScrollTrigger used for genuine storytelling. Minimal persistent UI (just MENU and LET'S TALK). Physics-based micro-interactions giving a tactile, premium feel.

**Borrow:** Dark background with single warm accent colour. GSAP + ScrollTrigger architecture for scroll-driven reveals. Minimal persistent UI keeping chrome out of the way. Content that animates in as you scroll, creating paced narrative.

**Adapt:** Dial the animation intensity back to about 60%. Balance visual spectacle with strong textual content. Skip the Three.js/physics complexity — focus on scroll-linked transforms and opacity transitions. Think of this as the ceiling for what is technically possible.

---

## Category 1: Minimal & Elegant Developer Portfolios

### Brittany Chiang — brittanychiang.com

**URL:** https://brittanychiang.com (v5) / https://v4.brittanychiang.com (v4)

**What makes it notable:** The most admired developer portfolio of the last several years. Dark navy/teal colour scheme, fixed sidebar with name/title/navigation, scroll-spy highlighting active section, cursor-following gradient effect. Spawned hundreds of forks and derivatives.

**Colour palette:** Background #0a192f (dark navy), text primary #ccd6f6/#e6f1ff, text secondary #8892b0, accent #64ffda (mint), surface #112240 (light navy).

**Elements worth borrowing:** Sticky sidebar with scroll-spy. Single accent colour discipline. Layered dark tones for surface elevation. Tech tags as pills. Cursor-following ambient gradient.

**Concerns:** The design is so widely copied it now feels familiar. More CV-style than cinematic. Light on personality — career-focused but not storytelling-driven.

**Relevance:** HIGH for structure and palette discipline, MEDIUM for animation approach.

---

### Paco Coursey — paco.me

**URL:** https://paco.me

**What makes it notable:** Extreme minimalism from a Linear design engineer. Dark #111 background, off-white text, no images, no decorations, no animations. Personality comes entirely through writing. The "Now" section shares current thinking. Open source on GitHub.

**Elements worth borrowing:** "Now" section for personality-forward content. Extreme whitespace discipline. Writing tone: confident without boasting, personal without oversharing. View Transitions API usage.

**Concerns:** Almost too minimal — no visual hook for unfamiliar visitors. Zero animation means zero dynamism. Far too constrained for 25+ years of stories.

**Relevance:** HIGH for tone and content, LOW for visual execution.

---

### Lee Robinson — leerob.com

**URL:** https://leerob.com

**What makes it notable:** Aggressively minimal. Pure dark background, single column of text, no navigation, no images. Dynamic "last listened to" from Spotify. Loads in milliseconds.

**Elements worth borrowing:** Dynamic data touch that makes the page feel alive. Warm, direct writing ("My life's work is to make technology easy to understand"). Portfolio as gateway rather than gallery.

**Concerns:** Only works with existing name recognition. Zero visual expression of craft. Zero storytelling.

**Relevance:** LOW for visual approach, MEDIUM for content philosophy.

---

### Rauno Freiberg — rauno.me

**URL:** https://rauno.me

**What makes it notable:** Interaction designer at Vercel. Site reimagined as an "operating system" with dock, interface sounds, desktop metaphor. Manifesto-style hero text. Card-as-module layout. Dark mode described as "killer" with atmospheric abstract imagery.

**Elements worth borrowing:** Manifesto/philosophy block as opening statement — lead with values, not credentials. Year-based archive navigation. Atmospheric imagery adding warmth to dark palette. View Transitions API.

**Concerns:** Light background default. Spatial layout doesn't translate well to mobile. OS metaphor is personality-specific.

**Relevance:** MEDIUM — manifesto-first approach is directly applicable, visual direction less so.

---

### Emil Kowalski — emilkowal.ski

**URL:** https://emilkowal.ski

**What makes it notable:** Linear web team, creator of Sonner and Vaul. Warm off-white/cream, extremely clean typographic hierarchy. Bold title + one-line description pattern. Deliberately chooses not to show off animation despite being a foremost animation practitioner.

**Elements worth borrowing:** "Today" section heading. Bold title + one-line description for list entries. Clear semantic sections without visual chrome. The philosophy that taste is knowing when not to animate.

**Concerns:** Light mode only. Very text-heavy and potentially too understated for a first impression.

**Relevance:** MEDIUM — structural clarity is worth borrowing, visual austerity is not.

---

### Stas Bondar — stabondar.com

**URL:** https://stabondar.com

**What makes it notable:** GSAP Site of the Week/Month, multiple Awwwards SOTD. Dramatic dark canvas with physics-based GSAP animations and Three.js elements. Near-black background with coral/red accent. Floating imagery, custom cursor, smooth scroll physics.

**Elements worth borrowing:** Dark background + single warm accent (coral/red). GSAP + ScrollTrigger for storytelling. Minimal persistent UI. Physics-based micro-interactions.

**Concerns:** Heavy animation = long load times and mobile performance issues. Scatter-layout can be disorienting. This level of complexity requires significant development effort.

**Relevance:** HIGH for technical approach, MEDIUM for execution (dial back intensity).

---

### Cyd Stumpel — cydstumpel.nl

**URL:** https://cydstumpel.nl

**What makes it notable:** Awwwards SOTD 2025. Uses native CSS Scroll-Driven Animations and View Transitions API with GSAP as fallback. Forward-looking progressive enhancement approach. Graceful degradation for unsupported browsers.

**Elements worth borrowing:** CSS Scroll-Driven Animations as progressive enhancement with GSAP fallback. View Transitions API for page navigation. Hybrid CSS + GSAP approach. Accessibility-first (respects prefers-reduced-motion).

**Concerns:** CSS Scroll-Driven Animations have limited browser support. Playful coral/cream palette is at odds with dark-mode-first vision.

**Relevance:** MEDIUM-HIGH for technical strategy, LOW for visual direction.

---

## Category 2: Animation-Heavy & Scroll-Driven Sites

### Cyd Stumpel — Portfolio 2025

**URL:** https://cydstumpel.nl

**What makes it notable:** Awwwards SOTD with Developer Award. Uses native CSS scroll-driven animations with GSAP ScrollTrigger as fallback. Progressive enhancement strategy: CSS-first, JS-fallback. Accessibility-first approach with reduced-motion respect.

**Elements worth borrowing:** Progressive enhancement (CSS scroll-driven animations with GSAP fallback). View Transitions for smooth navigation. The architecture validates using GSAP as primary library with an eye toward CSS scroll-driven animations as they mature.

**Relevance:** HIGH for architecture and progressive enhancement philosophy.

---

### Glenn Catteeuw — glenncatteeuw.com

**URL:** https://glenncatteeuw.com

**What makes it notable:** Awwwards SOTD January 2026 with Developer Award. Belgian freelance interactive designer. Dark, cinematic visual language with strong typography. Won Awwwards Mobile Site of the Week — proving the animations translate to small screens. Single-person portfolio achieving agency-level animation quality.

**Elements worth borrowing:** Dark aesthetic with strong typography. Mobile-validated scroll animations (critical for viv.me.uk). Proof that a solo practitioner can achieve high-quality scroll animation.

**Relevance:** HIGH — dark aesthetic, mobile-validated, solo practitioner benchmark.

---

### Design by Dylan (Dylan Brouwer) — designbydylan.nl

**URL:** https://designbydylan.nl

**What makes it notable:** Awwwards SOTD February 2026 with both PRO and DEV awards. Dutch digital designer. Experience-driven design where every interaction serves the narrative. Webflow + GSAP. Codrops featured interview about motion-driven development.

**Elements worth borrowing:** Motion as storytelling, not decoration. Experience-driven philosophy where transitions and scroll animations are integral to content comprehension. GSAP usage patterns for pacing.

**Relevance:** MEDIUM-HIGH — design philosophy is transferable, Webflow implementation less so.

---

### Linear.app — linear.app

**URL:** https://linear.app

**What makes it notable:** The defining reference for dark-mode scroll-driven storytelling. LCH colour space for theme generation. Performance-obsessed despite heavy animation. Scroll-triggered reveals, glassmorphism, pinned sections with animated content.

**Elements worth borrowing:** LCH colour space for gradients. Scroll-triggered reveals with restraint. Typography hierarchy at scale. Pinned/sticky sections with animated content.

**Relevance:** HIGH for technique, MEDIUM for direct application (product site, not personal portfolio).

---

### Lusion — lusion.co

**URL:** https://lusion.co

**What makes it notable:** Bristol-based creative studio using real-time WebGL (Three.js). Open-sourced their WebGL Scroll Sync technique on GitHub. Generative animations responding to scroll position. Dark, immersive atmosphere.

**Elements worth borrowing:** The open-source WebGL Scroll Sync technique for synchronisation patterns (even without WebGL). Generative animation responding to scroll. Dark immersive atmosphere.

**Concerns:** WebGL/Three.js is significantly more complex than needed. Computationally expensive on mobile. Too ambitious for a solo personal portfolio.

**Relevance:** LOW-MEDIUM for implementation, HIGH for inspiration. Study the scroll sync patterns.

---

### Brittany Chiang — v4.brittanychiang.com

**URL:** https://v4.brittanychiang.com

(See Category 1 entry above. Included here for the dark colour scheme, floating sidebar elements, numbered navigation, and subtle hover effects.)

**Relevance:** HIGH for design principles, MEDIUM for animation approach (more subtle than cinematic).

---

### Codrops Cinematic 3D Scroll Tutorial

**URL:** https://tympanus.net/codrops/2025/11/19/how-to-build-cinematic-3d-scroll-experiences-with-gsap/

**What makes it notable:** Definitive GSAP tutorial for cinematic scroll. Custom easing curves ("cinematicSilk", "cinematicSmooth", "cinematicFlow"). ScrollSmoother with two-layer architecture. Concept of scroll "scenes."

**Elements worth borrowing:** Custom easing for cinematic pacing. Two-layer architecture (fixed background + scrolling content). Scroll segments as "scenes." Overlay text synchronised with scroll position.

**Relevance:** VERY HIGH for technique — the most actionable technical reference for the build.

---

## Category 3: Dark-Mode-First Portfolio Sites

### Brittany Chiang — v4.brittanychiang.com

**URL:** https://v4.brittanychiang.com

(See Category 1 for full entry.)

**Palette:** Background #0a192f, accent #64ffda, surface #112240. Three text hierarchy levels through slate-to-white range.

**Key dark-mode lesson:** Layered tones create depth without borders. Cards are simply lighter shades of the background.

---

### Dennis Snellenberg — dennissnellenberg.com

**URL:** https://dennissnellenberg.com

**What makes it notable:** Awwwards SOTD, Developer Award. Masterclass in dark minimalist design with GSAP + Lenis smooth scroll. Oversized typography, generous whitespace, cinematic pacing. So widely admired and copied that Snellenberg publicly redesigned to differentiate.

**Palette:** Background #000000 (true black), text #ffffff, accent #987654 (warm brown/tan).

**Key dark-mode lesson:** GSAP + Lenis is the gold standard animation stack for cinematic dark portfolios.

**Concerns:** True black can cause OLED smearing. Heavy JS dependence means degraded experience without it.

---

### Dylan Brouwer — dylanbrouwer.design

**URL:** https://www.dylanbrouwer.design

**What makes it notable:** 4x Awwwards SOTD, 12x Honourable Mention. Multiple theme "moods" (Dark, Spring, Light). Dark mode default. 3D spline globe. Webflow build.

**Palette:** Dark mode background #161616 (very close to viv.me.uk target), text #F1F1F1 (off-white). Strict two-colour base with accent varying by mood.

**Key dark-mode lesson:** The #161616 / #F1F1F1 palette validates the viv.me.uk target range. Start with near-black + off-white, add accent on top.

---

### Tarun Baskar — tarunbaskar.com

**URL:** https://www.tarunbaskar.com

**What makes it notable:** Bold single accent colour against pure black background. Google Certified UI/UX Designer. Clean modern sans-serif.

**Palette:** Black background, white/off-white text, vibrant coral/red-orange accent.

**Key dark-mode lesson:** One vibrant accent against black creates immediate visual identity. Warm accent prevents dark palette from feeling cold.

**Concerns:** Coral reads younger/trendier — may not suit a 25-year engineering career narrative.

---

### Robb Owen — robbowen.digital

**URL:** https://robbowen.digital

**What makes it notable:** Independent creative developer from Abergavenny, South Wales. Building for the web since 2001. Creator of SynthWave '84 VS Code theme (2M+ downloads). Emphasises accessibility, performance, and usability alongside creativity. JAMstack approach mirrors viv.me.uk's Astro strategy.

**Key dark-mode lesson:** A Welsh developer with similar career length proves accessibility and dark-mode aesthetics are not mutually exclusive. The SynthWave work demonstrates mastery of accent colours on dark backgrounds.

**Relevance:** MODERATE-HIGH — closest personal parallel (Welsh developer, similar career length, dark-first, values accessibility).

---

### Paco Coursey — paco.me

**URL:** https://paco.me

(See Category 1 for full entry.)

**Palette:** Near-black (Linear tradition), off-white, near-zero accent. Pure typographic hierarchy.

**Key dark-mode lesson:** A near-black portfolio can work with almost no accent colour — pure typography can carry it.

---

### Rauno Freiberg — rauno.me

**URL:** https://rauno.me

(See Category 1 for full entry.)

**Key dark-mode lesson:** Atmospheric abstract imagery behind content layers adds warmth and depth to dark mode without borders or heavy accents.

---

### darkroom.engineering — Lenis creators

**URL:** https://darkroom.engineering

**What makes it notable:** The studio behind Lenis (smooth scroll library). "Designers who code and devs who care about kerning." Dark-first by philosophy and name. Reference implementation for Lenis + GSAP stack.

**Key dark-mode lesson:** This is the most important reference for how to implement Lenis smooth scrolling in a dark-first context. Their performance philosophy aligns with Astro's static-site approach.

---

## Category 4: Non-Tech Creative Portfolios

### Obys Agency — obys.agency

**URL:** https://obys.agency

**What makes it notable:** Awwwards Studio of the Year 2023, CSSDA Studio of the Year 3x. Typography-driven design laboratory. Hero splits canvas with oversized PP Neue letterforms that animate to scroll. Shock-orange accent line. Performance discipline: variable fonts load subset-first, GSAP tweens pause in background tabs (LCP ~1.3s desktop).

**Elements worth borrowing:** Typography as the primary design element. Single-accent-colour discipline (dark base + one punch). Performance-first approach to heavy animation. Case study tiles that bloom from grid to full-bleed on hover.

**Concerns:** The sheer density of motion could overwhelm on a personal site. WebGL video transitions are heavy. The aesthetic is very "design world."

**Relevance:** HIGH for performance-first animation philosophy and typography-driven design.

---

### Tobias van Schneider — vanschneider.com

**URL:** https://vanschneider.com

**What makes it notable:** Multidisciplinary designer (ex-Spotify, now HOVS studio). Dark one-pager with white page border, bold Maison Neue body font, black-and-white imagery with strategic red accents. Portfolio doubles as editorial publication (DESK Magazine).

**Elements worth borrowing:** Dark palette with selective colour accents. Editorial confidence — writing with personality and opinions. Attention to tiny details (custom cursor, considered favicon). Portfolio-as-publication model.

**Concerns:** Blog-heavy structure only works with regular writing. One-page can feel restrictive for depth.

**Relevance:** MEDIUM-HIGH — dark palette, editorial tone, and "tiny details that show quality" philosophy are all directly applicable.

---

### Elliott Mangham — elliott.mangham.dev

**URL:** https://elliott.mangham.dev

**What makes it notable:** Awwwards SOTD December 2025. UK-based creative developer. Radical two-colour constraint (#121212 and white). Unique preloader-to-content transition. Built with GSAP and Vite — nearly identical tech choices to viv.me.uk (Astro + GSAP). Accessibility alongside visual polish.

**Elements worth borrowing:** Two-colour constraint forcing typography and spacing to do expressive work. Preloader-to-content transition setting expectations for craft. One-page structure with smooth scroll. GSAP + Vite tech stack (closest to Astro + GSAP).

**Concerns:** Two-colour can feel stark for narrative-heavy content. As a creative developer, a tech demo portfolio is expected of him — different bar for a software engineer.

**Relevance:** HIGH — closest tech stack analogue. Proves constraint breeds character.

---

### Rafal Bojar — rafalbojar.com

**URL:** https://rafalbojar.com

**What makes it notable:** Awwwards SOTD, FWA recognition. Polish photographer/videographer. Merges storytelling with full-screen photography through parallax, cinematic scroll transitions, and scroll-triggered reveals. Three-colour palette: black, #D14836 (burnt red), white.

**Elements worth borrowing:** Cinematic pacing through scroll — each scroll position reveals content with deliberate rhythm. Full-viewport sections giving each piece its own moment. Three-colour discipline (dark + white + one warm accent).

**Concerns:** Image-heavy by necessity. Cinematic approach can feel slow without justifying content.

**Relevance:** MEDIUM-HIGH — scroll pacing directly transferable to Tier 1 timeline. Three-colour palette is a practical model.

---

### Paolo Vendramini — paolovendramini.com

**URL:** https://www.paolovendramini.com

**What makes it notable:** Awwwards SOTD December 2025. Italian brand designer. Philosophy: "reduction, clarity, narrative coherence." Clean, typographically driven. Focus on letting work breathe.

**Elements worth borrowing:** "Reduction, clarity, narrative coherence" as design mantra. Living identity — site feels like an extension of the person. Typography and spacing doing the heavy lifting.

**Relevance:** MEDIUM — useful counterweight to over-animation temptation. Every element should support the same story.

---

### Jessica Walsh / &Walsh — andwalsh.com

**URL:** https://andwalsh.com

**What makes it notable:** One of the most recognisable creative directors. Vibrant colour, bold typography, immersive visuals. Unapologetic personality — clear point of view within seconds. Personal projects woven into professional portfolio.

**Elements worth borrowing:** The confidence of personality. Personal interests presented with conviction, not as afterthoughts. Typography used expressively. Personality *is* the brand.

**Concerns:** Visual density and saturation too high for a developer portfolio. Agency showcase model doesn't map.

**Relevance:** LOW for visual style, HIGH for personality philosophy. The "beyond the code" section should borrow this conviction.

---

### Artiom Yakushev — art-yakushev.com

**URL:** https://www.art-yakushev.com

**What makes it notable:** Awwwards SOTD January 2026, CSSDA Website of the Day. Single-colour palette (black #000000) with parallax effects, transitions, and filters. Built with GSAP + Webflow. Includes a dedicated "workflow" page.

**Elements worth borrowing:** Single-colour taken to its extreme — proof an award-winning site can be just black and white. The workflow page (explains *how* you work, not just *what*) maps to the AI Engineering page. GSAP parallax patterns.

**Relevance:** MEDIUM — GSAP patterns transferable. Workflow page concept applicable to AI Engineering page.

---

### MadeByAnalogue — madebyanalogue.co.uk

**URL:** https://madebyanalogue.co.uk

**What makes it notable:** Leeds-based brand and motion studio. Tagline: "Seriously Playful." Clients include Coca-Cola, Netflix, Mattel, Paramount. Blends professional credibility with genuine personality. Motion as brand expression.

**Elements worth borrowing:** "Seriously Playful" duality — professional credibility with genuine personality. Motion reinforcing identity, not decorating it. Studio ethos woven throughout, not confined to "about" page.

**Relevance:** MEDIUM — the "Seriously Playful" philosophy is the closest articulation of viv.me.uk's desired tone: confident and professional, but with genuine personality.

---

## Category 5: Timeline & Experience Presentations

### Yann-Edern Gillet — Track Record (yannglt.com/track-record)

**URL:** https://yannglt.com/track-record

**What makes it notable:** Software designer at Linear. "Track record" page archiving career milestones grouped by year, running present to past. Scroll-triggered reveals. Year grouping creates natural visual chapters. Argues a track record serves the creator first (combating imposter syndrome) and audience second.

**Elements worth borrowing:** Year-grouped entries with sticky year headers. Compact entry format (date + title + one-line description). Consistent rhythm across 50+ entries. Reverse chronological order.

**Concerns:** Closer to a changelog than a cinematic timeline. No expand/collapse for managing density.

**Relevance:** HIGH for Tier 2 structure. The year-grouping and sticky headers pattern works well for the expanded timeline.

---

### Codrops Scrollable & Draggable Timeline

**URL:** https://tympanus.net/codrops/2022/01/03/building-a-scrollable-and-draggable-timeline-with-gsap/

**What makes it notable:** GSAP ScrollTrigger + Draggable tutorial by Michelle Barker. Horizontal timeline with position marker. Dual interaction model (scroll or drag). Content animating into view as entries become active.

**Elements worth borrowing:** Scroll-linked position marker ("you are here" indicator). GSAP ScrollTrigger + Draggable integration patterns. Content revealing with staggered animation as entries become active.

**Concerns:** Horizontal timelines are complex on mobile. Draggable may not add value for narrative-heavy sequential content.

**Relevance:** MEDIUM — position marker concept useful as progress indicator. Vertical scroll preferred for narrative entries.

---

### CANALS Amsterdam — canals-amsterdam.com

**URL:** https://canals-amsterdam.com (may no longer be live)

**What makes it notable:** Awwwards Site of the Month December 2019. Four-part editorial journey through Amsterdam canal history. Magazine-spread pacing: each "page" is a full viewport self-contained composition. Black, white, and red accents. Oversized fonts. WebGL parallax.

**Elements worth borrowing:** Magazine-spread pacing — each entry as a self-contained full-viewport composition. Typography as primary design element. Parallax driven by scroll position. Limited colour palette across long scroll experience. Narrative arc through chronological progression.

**Concerns:** Horizontal scroll direction. No longer live. WebGL adds complexity.

**Relevance:** HIGH for pacing philosophy. Each Tier 1 entry could occupy a full viewport with generous typography and parallax elements. Keep vertical scroll, borrow compositional approach.

---

### Robby Leonardi — Interactive Resume (rleonardi.com/interactive-resume)

**URL:** http://www.rleonardi.com/interactive-resume/

**What makes it notable:** Legendary interactive resume as side-scrolling platform game. Career as four "levels." Won FWA, Awwwards, CSSDA. Iconic in the web design community.

**Elements worth borrowing:** Scroll as narrative progression, not just content reveal. Visual metaphor for career journey. Seamless transitions between phases with no visible section breaks.

**Concerns:** Game metaphor is personality-specific and would feel forced for a senior engineer. Very low content density.

**Relevance:** LOW for execution, HIGH for the principle: scroll should feel like journeying through a career.

---

### Eduard Bodak — eduardbodak.de

**URL:** https://eduardbodak.de

**What makes it notable:** GSAP + CustomEase + Locomotive Scroll v5. Codrops article details animation techniques. Custom eases that start later than default give scroll animations a natural, non-mechanical feel. Paused GSAP timelines controlled by scroll progress.

**Elements worth borrowing:** Custom GSAP eases for scroll animations. Paused timeline controlled by scroll progress (exact pattern needed for viv.me.uk). Layer management for GPU performance.

**Concerns:** Webflow-based, so code not directly portable. Locomotive Scroll adds dependency.

**Relevance:** HIGH for technical implementation. The Codrops article is essential reading for the build phase.

---

### Buzzvel 5 Years — five.buzzvel.com

**URL:** https://five.buzzvel.com

**What makes it notable:** Anniversary site celebrating company's 5-year journey. Scroll-driven storytelling through chronological chapters. Each year is a chapter with its own visual treatment. Emphasis on purpose and people over metrics.

**Elements worth borrowing:** Year-as-chapter structure. Scroll-driven chapter transitions. Principle-led storytelling (purpose over metrics). Consistent visual language with per-chapter variations.

**Concerns:** Celebratory tone may feel out of place on personal portfolio. Lower content density per year.

**Relevance:** MEDIUM-HIGH — year-as-chapter model fits Tier 1 entries perfectly.

---

### Apple Product Pages — apple.com

**URL:** https://www.apple.com/macbook-pro/

**What makes it notable:** The gold standard for scroll-driven cinematic presentation. Full-viewport sections as "slides." Large typography. Scroll-pinned sections with internal animation. Progressive content reveal. Canvas-based hardware-accelerated transitions.

**Elements worth borrowing:** Full-viewport sections as slides. Headline-first progressive reveal. Scroll-pinned sections (pin while content animates, then unpin). GPU-composited transforms.

**Concerns:** Large engineering team required. Canvas image sequences too heavy for personal site.

**Relevance:** VERY HIGH — the primary aesthetic reference, already cited in implementation plan. The specific pattern: scroll-pinned sections where headline appears first, narrative reveals progressively, then section unpins for the next entry.

---

## Cross-Cutting Themes

### Design Principles

| Principle | Evidence | Application to viv.me.uk |
|-----------|----------|--------------------------|
| Colour constraint breeds character | Obys, Elliott Mangham, Artiom Yakushev | Dark base + off-white + one accent. Start monochrome, add accent sparingly |
| Typography *is* the design | Obys, Paco, CANALS | Without a visual portfolio, typography does the heavy lifting. Invest in typeface selection |
| Scroll pacing creates narrative | Apple, Rafal Bojar, CANALS, Buzzvel | Treat scroll position as storytelling, not just navigation. Each section earns its space |
| Personality is a thread, not a section | Walsh, MadeByAnalogue, Tobias van Schneider | Weave personality throughout (micro-interactions, tone, details), not just in "about" |
| Performance discipline enables ambition | Obys (~1.3s LCP), Elliott Mangham | Rich GSAP animation and fast load times are not mutually exclusive |
| Restraint is confidence | Paco, Paolo Vendramini | Better to do less with conviction than everything with mediocrity |

### Technical Patterns

| Pattern | Recommended for viv.me.uk | Source |
|---------|--------------------------|--------|
| GSAP ScrollTrigger with pin | Tier 1 timeline entries | Apple, Codrops tutorial |
| Custom easing curves | All scroll animations | Codrops tutorial, Eduard Bodak |
| Lenis smooth scroll | Global scroll behaviour | Dennis Snellenberg, darkroom.engineering |
| CSS scroll-driven animations | Progressive enhancement | Cyd Stumpel |
| View Transitions API | AI Engineering page navigation | Paco Coursey, Rauno Freiberg |
| Two-layer architecture | Hero and timeline background | Codrops tutorial |
| prefers-reduced-motion respect | All animations | Cyd Stumpel, Elliott Mangham |

### Accent Colour Candidates

Based on what works on near-black backgrounds across the researched sites:

| Colour | Used by | Character | Fit for viv.me.uk |
|--------|---------|-----------|-------------------|
| Mint/cyan #64ffda | Brittany Chiang | Tech-forward, clean | Too widely copied |
| Warm amber/gold | Dennis Snellenberg | Sophisticated, premium | Strong candidate |
| Electric blue | Linear-adjacent | Tech, modern | Risk of "Linear clone" |
| Coral/orange-red | Stas Bondar, Tarun Baskar | Energetic, warm | May read too young |
| Burnt red #D14836 | Rafal Bojar | Confident, editorial | Strong candidate |
| Muted teal | Various | Sophisticated, less common | Strong candidate |
| Shock orange | Obys | Bold, punchy | Could work sparingly |

### Timeline Implementation Model

**Tier 1 (8 cinematic entries):**
- Apple-style scroll-pinned sections
- Each entry occupies full viewport
- Progressive reveal: year → headline → narrative → tech footnote
- GSAP ScrollTrigger `pin: true`
- Custom easing for cinematic feel
- Thin vertical timeline spine with illuminated entry nodes

**Tier 2 (11 expanded entries):**
- Yann Gillet track-record style
- Year-grouped with sticky year headers
- Compact format: headline + year, expandable to full narrative
- Lighter staggered scroll-reveal (no pinning)
- "See Full Timeline" trigger to reveal

---

## Anti-Patterns to Avoid

1. **Horizontal scroll for narrative content** — fights user expectation and complicates mobile
2. **Game/illustration metaphors** — personality-specific, would feel forced for a senior engineer
3. **Equal visual weight for all entries** — the two-tier structure exists to avoid this
4. **Animation for animation's sake** — every animation should serve the narrative
5. **Canvas image sequences** — too heavy; achieve cinematic feel through typography and easing
6. **True black (#000000)** — use near-black (#0a0a0a) to reduce eye strain and OLED smearing
7. **Copying the "Linear look" wholesale** — it's now so widely imitated it feels derivative
8. **Locomotive Scroll as additional dependency** — GSAP ScrollTrigger alone can handle scroll-linked animation; consider Lenis for smooth scroll only if needed

---

## Sources & Further Reading

### Award Sites & Curations
- [Awwwards](https://www.awwwards.com) — Portfolio nominees, SOTD winners, dark mode collection
- [CSS Design Awards](https://www.cssdesignawards.com)
- [One Page Love](https://onepagelove.com)
- [SiteInspire](https://www.siteinspire.com)
- [Muzli - Top 100 Creative Portfolios 2025](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)
- [Wall of Portfolios - Dark Theme](https://www.wallofportfolios.in/dark-theme)
- [dark.design](https://www.dark.design/)
- [darkmodedesign.com](https://www.darkmodedesign.com/)

### Technical References
- [Codrops - Cinematic 3D Scroll with GSAP](https://tympanus.net/codrops/2025/11/19/how-to-build-cinematic-3d-scroll-experiences-with-gsap/)
- [Codrops - Scroll-driven text animations](https://tympanus.net/codrops/2025/11/04/creating-3d-scroll-driven-text-animations-with-css-and-gsap/)
- [Codrops - Scroll-revealed gallery with Astro](https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/)
- [Codrops - Eduard Bodak animations walkthrough](https://tympanus.net/codrops/2025/07/29/built-to-move-a-closer-look-at-the-animations-behind-eduard-bodaks-portfolio/)
- [Codrops - Scrollable/Draggable Timeline with GSAP](https://tympanus.net/codrops/2022/01/03/building-a-scrollable-and-draggable-timeline-with-gsap/)
- [GSAP ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Lenis smooth scroll](https://lenis.darkroom.engineering/)
- [Lusion WebGL Scroll Sync (GitHub)](https://github.com/lusionltd/WebGL-Scroll-Sync)
- [CSS-Tricks - Apple-style scroll animations](https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/)
- [Smashing Magazine - CSS Scroll-Driven Animations](https://www.smashingmagazine.com/2024/12/introduction-css-scroll-driven-animations/)
- [Frontend Horse - The Linear Look](https://frontend.horse/articles/the-linear-look/)

### Dark Mode Design
- [Apple Dark Mode HIG](https://developer.apple.com/design/human-interface-guidelines/dark-mode)
- [Best Color Palettes for Developer Portfolios](https://www.webportfolios.dev/blog/best-color-palettes-for-developer-portfolio)
- [Dark Mode Color Palettes](https://colorhero.io/blog/dark-mode-color-palettes-2025)
- [Vev - Dark Mode Website Color Palette Ideas](https://www.vev.design/blog/dark-mode-website-color-palette/)
