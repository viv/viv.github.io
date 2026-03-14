---
generated_by: Claude Opus 4.6
generation_date: 2026-02-15
model_version: claude-opus-4-6
purpose: design_review
status: draft
human_reviewer: matthewvivian
tags: [design, ui, ux, visual-review, accessibility, portfolio]
---

# Design Review — viv.me.uk

A comprehensive visual design and UX review of the personal portfolio website for Viv (Matthew Vivian), built with Astro 5.x, Tailwind CSS v4, and GSAP scroll-driven animations.

---

## Executive Summary

The site is a polished, cohesive dark-mode-first portfolio that successfully projects professionalism and engineering depth. The design language — slate violet accents against dark surfaces, Space Grotesk typography, blueprint-grid hero — creates a distinctive identity that feels neither generic nor overwrought. The component architecture is clean, the colour system is well-considered for both modes, and the accessibility fundamentals (focus indicators, reduced motion, skip link, ARIA) are stronger than most portfolio sites.

That said, there are meaningful opportunities to improve: the vertical spacing system is inconsistent across sections, the hero section has diverged into two competing implementations, several design patterns are repeated with slight variations (creating maintenance drift), and the light mode needs further refinement to match the quality of the dark mode experience. The animation strategy is tasteful but could be more intentional about what it draws attention to.

**Overall assessment: Strong foundation, ready for a refinement pass.**

---

## What Works Well

### 1. Colour System Design
The shift from neon violet (`#8B5CF6`) to slate violet (`#8D7FD2`) was an excellent decision. The current palette achieves:
- **WCAG AA compliance** — the muted saturation ensures accent text is readable on dark backgrounds
- **Professional tone** — the hue-250° family reads as sophisticated rather than flashy
- **Clear hierarchy** — three accent tiers (accent → light → pale) give enough range without overcomplicating
- **Semantic naming** — `--color-accent-functional` as an alias for the main accent is a smart pattern for when accent might diverge from functional colour

*Files: `src/styles/global.css:11-35`, `src/styles/global.css:40-57`*

### 2. Blueprint Hero Concept
The CSS-only blueprint grid is genuinely distinctive. It signals "engineer" without relying on stock imagery or cliched tech metaphors. The layered approach (CSS grid background → canvas → fade → content) is well-structured, and the violet colour-matching between grid lines and accents creates visual harmony.

*Files: `src/pages/index.astro:111-145`, `src/components/Hero.astro:100-134`*

### 3. Dark/Light Mode Architecture
The `data-theme` attribute approach with CSS custom properties is clean and extensible. Specific positives:
- Blocking script in `<head>` prevents theme flash (`BaseLayout.astro:52-61`)
- Light mode gets its own accent palette (deeper violets for contrast) rather than just inverting
- Theme-aware image variants (`dark-only` / `light-only` classes) with dedicated light-mode imagery
- Custom `themechange` event for component coordination (`ThemeToggle.astro:87`)

### 4. Typography Pairing
Space Grotesk + JetBrains Mono is an excellent pairing. Space Grotesk has enough geometric character to feel modern and distinctive, while JetBrains Mono reinforces the engineering identity in tech footnotes and code contexts. The font weights loaded (300-700 sans, 400-500 mono) cover the needed range without excessive downloads.

### 5. Accessibility Foundations
- Skip-to-content link (`BaseLayout.astro:69-74`)
- `lang="en-GB"` on the HTML element
- `aria-label` on every `<section>`
- Reduced motion support with `prefers-reduced-motion` (both CSS and JS)
- Focus trap in mobile navigation overlay
- `aria-expanded`, `aria-controls` on interactive elements
- Scroll indicator is `aria-hidden`

### 6. Component Consistency
Cards across Expertise, Work in the Open, and Beyond the Code share a consistent visual language: `bg-bg-surface` backgrounds, `border-border-subtle` borders, `rounded-lg`, and the `card-hover` interaction class. This creates a cohesive "card vocabulary" across the site.

### 7. Scroll Progress Indicator
The fixed gradient bar (`src/pages/index.astro:14`, `src/styles/global.css:194-204`) is subtle enough not to distract but provides useful position context for the long single-page scroll. The fade-in after 50px of scroll is a nice touch.

---

## What Needs Improvement

### 1. ~~Two Competing Hero Implementations~~ (DONE)

**Resolved:** The combined hero+about layout from `index.astro` was extracted into `Hero.astro` as the canonical implementation. The orphaned `About.astro` component was deleted. `index.astro` now imports and uses `<Hero />` — single source of truth, no duplication.

### 2. ~~Vertical Spacing Inconsistency~~ (DONE)

**Resolved:** All content sections now use `py-16 sm:py-24` for consistent breathing room. Hero uses `pt-16 sm:pt-24 pb-16 sm:pb-24` with responsive scaling. Internal heading-to-content spacing standardised (`mb-16` throughout, WorkInTheOpen description-to-cards `mb-16`, Contact heading `mb-8`).

### 3. ~~Light Mode Blueprint Grid Reads Flat~~ (DONE)

**Resolved:** Light-mode blueprint background tinted to `#f5f3fa` (barely violet) and grid line opacity increased to `0.15` major / `0.06` fine. The blueprint personality now carries through to light mode.

### 4. ~~Card Image Opacity is Very Subtle~~ (WON'T FIX)

**Decision:** Increasing opacity to `0.18`/`0.15` was tested and looked worse — the images became too prominent and competed with card text. The current `opacity-[0.12]` is intentionally subtle and works as-is.

### 5. ~~Navigation Contains Development Links~~ (DONE)

**Resolved:** Removed "Variations" from the nav. "Notes" is intentional and stays in the main nav.

### 6. ~~Contact Section is Minimal~~ (DONE)

**Resolved:** Added closing statement, blueprint grid background with corner markers and radial glow (bookending the hero), `min-h-[60vh]` for nav scroll visibility, LinkedIn as primary CTA with solid button, GitHub as secondary with outlined button. No email link (by design).

### 7. ~~Mobile Navigation Overlay Lacks Visual Depth~~ (DONE)

**Resolved:** Added CSS staggered entrance animation to mobile nav links (50ms delay per item, fade up from 12px). Respects `prefers-reduced-motion`.

---

## Component-by-Component Assessment

### Navigation (`src/components/Navigation.astro`)
**Strengths:**
- Fixed position with scroll-triggered backdrop — transparent at top, frosted on scroll — is a modern standard done correctly
- Good responsive breakpoint at `lg` (1024px)
- Focus trap and Escape key handling in mobile overlay
- Theme toggle integrated into both desktop and mobile views

**Weaknesses:**
- ~~Hamburger icon animation (rotate to X) uses inline `style.transform` rather than CSS classes~~ (DONE — refactored to CSS `burger-open` class)
- ~~Desktop nav uses `gap-4 xl:gap-8` — on `lg` screens (1024-1280px), 8 nav items at `gap-4` may feel cramped~~ (TESTED — looks fine at 1024px)
- ~~No active/current section indicator~~ (DONE — scroll-spy added with IntersectionObserver, highlights current section in accent colour)

**Suggestions:**
- ~~Add a scroll-spy to highlight the current section in the nav~~ (DONE)
- ~~Test nav layout at exactly 1024px with all link labels~~ (DONE — acceptable)

### Hero + About (`src/components/Hero.astro`) — DONE
**Strengths:**
- The combined hero+about layout creates an efficient first impression — name, face, and substance immediately visible
- Two-column layout on desktop (avatar+name left, bio right) is a good use of space
- Responsive grid (`grid-cols-1 lg:grid-cols-[auto_1fr]`) handles breakpoints well
- Easter egg particle canvas is a fun touch without cluttering the default view

**Resolved:**
- ~~About text `text-lg` on mobile~~ — changed to `text-base lg:text-lg` for better mobile readability
- Avatar border, title gradient, subtitle colour — tested and kept as-is (preferred the original)

### Expertise (`src/components/Expertise.astro`) — DONE
**Strengths:**
- Clean 2-column grid, cards with consistent sizing
- Background images provide subtle visual interest
- "AI-augmented engineering" card includes an internal link — good CTA pattern

**Resolved:**
- ~~`pr-8` awkward on mobile~~ — changed to `md:pr-8` so padding only applies when decorative image is relevant
- Card height inconsistency — content has been rewritten to match in length, no longer an issue
- Heading + first row cards now animate as a group (triggered by card grid position) to prevent orphaned heading on tall screens
- All section headings given `data-animate="fade-up"` for consistency
- Scroll trigger for all fade-up elements changed from `top 85%` to `top 90%` for earlier appearance

### Timeline (`src/components/Timeline.astro`) — DONE
**Strengths:**
- Vertical timeline with dot markers is a classic, effective pattern
- Tier 1/Tier 2 separation with expand/collapse is good information architecture
- Tech footnotes in JetBrains Mono add personality
- Expandable section properly manages `aria-expanded` and focus

**Resolved:**
- ~~Timeline line too thin~~ — increased to `w-[2px] bg-accent/20` for better visibility with violet tint
- ~~Tier 2 entries lack visual container~~ — now match tier 1: same card styling, timeline dots, indentation, and the line extends through them
- ~~GSAP tier 2 broken~~ — exposed gsap/ScrollTrigger on window; expand handler now creates fresh animations for tier 2 entries with reduced-motion check
- Timeline entry trigger changed from `top 80%` to `top 90%` for earlier card appearance

### Work in the Open (`src/components/WorkInTheOpen.astro`) — DONE
**Strengths:**
- Clean, informative cards for open source contributions
- External link pattern (→ arrow indicator via `.external-link`) is consistently applied
- GitHub profile link at the bottom is a good catch-all

**Resolved:**
- ~~No imagery~~ — added watermark images (Openfire flame, Docker whale) matching the Expertise/BeyondTheCode card pattern, with dark/light variants
- ~~Sparse layout~~ — cards now have `min-h-[220px]`, watermark overlays, and `md:pr-8` for consistency with other card sections
- Intro paragraph kept as-is (preferred the original tone)

### Beyond the Code (`src/components/BeyondTheCode.astro`)
**Strengths:**
- 6-column grid with `col-span-2` and `col-start-2` creates an attractive layout where the last row is centred
- Good variety of interests that humanise the professional profile
- Link to the expanded `/life` page is a good progressive disclosure pattern

**Weaknesses:**
- Five cards with Karate first: the grid layout (3 + 2 centred) works, but on `sm` breakpoint (640-1024px), five cards create an uneven 2-column grid (3 rows, last row has 1 card stretched)
- Card text uses `text-sm` while Expertise cards use default (14px vs 16px) — inconsistent sizing between similar card components
- Strava stats inline in the MTB card (`StravaStats variant="compact"`) may display nothing if Strava env vars aren't configured, with no fallback placeholder

**Suggestions:**
- Ensure Strava compact variant shows a placeholder or nothing graceful when stats are unavailable (current code: it renders nothing, which is acceptable but the spacing may shift)
- Match card text sizing with Expertise cards for consistency

### Contact (`src/components/Contact.astro`)
**Strengths:**
- Clean, centred layout
- Dynamic year for copyright
- External link indicators for GitHub and LinkedIn

**Weaknesses:**
- As noted above, this is very minimal for a closing section
- The heading "Want to talk?" uses `text-3xl sm:text-4xl` — smaller than other section headings (`text-4xl sm:text-5xl`), which makes it feel like a footnote rather than a call to action
- Large gap between the links and the copyright (`mt-12`) creates odd spacing

### Theme Toggle (`src/components/ThemeToggle.astro`)
**Strengths:**
- Smooth icon rotation animation between sun/moon
- Properly uses `aria-label` that updates based on current state
- Dispatches custom event for cross-component coordination
- 9x9 touch target is adequate

**Weaknesses:**
- The toggle is visually subtle — `bg-transparent` with no border. On a transparent nav background (before scroll), it may be hard to locate
- No tooltip or text label — relies entirely on the icon being understood

### Strava Stats (`src/components/StravaStats.astro`)
**Strengths:**
- Two variants (full/compact) sharing the same data fetch
- Strava brand colour (`#FC4C02`) for the icon is correct
- Graceful fallback for unavailable data (placeholder message or silent)

**Weaknesses:**
- The full variant's "Updated" timestamp shows the fetch time, which during build is the build time — this could be confusing ("Updated 15 Feb 2026" if built today, stale if not rebuilt)
- The compact variant in the Beyond the Code card is tiny (`text-xs`) and may not justify the complexity of the Strava integration

---

## Colour System Analysis

### Dark Mode (Primary)
| Token | Value | Usage | Assessment |
|-------|-------|-------|------------|
| `--color-bg` | `#0a0a0a` | Page background | Very dark, almost black. Good for contrast but noticeably darker than the hero's `#0d0a1a` — creates a visible seam between hero and body |
| `--color-bg-surface` | `#141414` | Card backgrounds | Appropriate lift from the body background |
| `--color-bg-raised` | `#1c1c1c` | Hover states, theme toggle | Good incremental step |
| `--color-text-primary` | `#f5f5f5` | Headings, body text | Clean off-white, avoids harshness of pure white |
| `--color-text-secondary` | `#a0a0a0` | Descriptions, supporting text | Adequate contrast (~7:1 on `#0a0a0a`) |
| `--color-text-tertiary` | `#a3a3a3` | Timestamps, footnotes | Very close to secondary (`#a0a0a0` vs `#a3a3a3`) — essentially identical. These should diverge more for a clear three-tier hierarchy |
| `--color-accent` | `#8D7FD2` | Links, highlights, dots | Good contrast on dark (~5.3:1), passes AA for normal text |
| `--color-accent-light` | `#AEA4DF` | Hover states, headlines | Lighter variant works for larger text |
| `--color-accent-pale` | `#CBC5E7` | Available but underused | Barely appears in the actual components |

**Issue: `--color-text-secondary` and `--color-text-tertiary` are nearly identical.** The difference between `#a0a0a0` and `#a3a3a3` is imperceptible. This defeats the purpose of a three-tier text hierarchy.

**Recommendation:** Drop tertiary to `#808080` or `#8a8a8a` for a visible distinction.

### Light Mode
| Token | Value | Assessment |
|-------|-------|------------|
| `--color-bg` | `#fafafa` | Slightly off-white, good |
| `--color-bg-surface` | `#ffffff` | Pure white cards on off-white bg — very subtle lift |
| `--color-text-primary` | `#1a1a1a` | Good near-black |
| `--color-text-secondary` | `#555555` | Adequate |
| `--color-text-tertiary` | `#666666` | Better separation than dark mode (meaningful gap from `#555555`) |
| `--color-accent` | `#4633A3` | Deep violet — passes AA on white at ~7:1 |
| `--color-accent-light` | `#3D2E8A` | **Confusingly darker than accent** — "light" should be lighter |
| `--color-accent-pale` | `#5742BD` | Also confusingly named — it's mid-range |

**Issue: Light-mode accent naming is inverted.** `--color-accent-light` (`#3D2E8A`) is actually darker than `--color-accent` (`#4633A3`). This is semantically backwards. In usage, `accent-light` is used for hover states and italic headlines — making hover text darker than default is the opposite of the typical pattern.

**Recommendation:** Rename or redefine light-mode accents so the naming hierarchy matches visual weight. Consider: accent (`#4633A3`), accent-hover (`#3D2E8A`), accent-muted (`#6B5CCF`).

### Hero Background Seam
The hero blueprint background uses `#0d0a1a` while the body background is `#0a0a0a`. The bottom fade gradient blends from transparent to `var(--color-bg)` (`#0a0a0a`), but the fade starts at 70% of the section height. Above that 70% mark, there's a visible colour difference between the slightly-blue hero and the neutral-dark body. On most displays this creates a subtle but detectable "band" where the hero ends.

**Recommendation:** Either bring the hero background closer to the body colour (e.g. `#0c0a12`) or extend the fade to start earlier (50%).

---

## Typography Analysis

### Font Loading
Fonts are loaded via Google Fonts stylesheet in `BaseLayout.astro:44-47`. This is a render-blocking external request.

**Recommendation:** Consider using `font-display: swap` (already included via Google's `&display=swap`), but also investigate self-hosting the fonts for better performance and privacy. Two font families from Google Fonts means two round-trips.

### Type Scale

| Usage | Class | Size | Assessment |
|-------|-------|------|------------|
| Hero name | `text-6xl sm:text-7xl md:text-8xl` | 60→72→96px | Appropriately dramatic for the centrepiece |
| Section headings | `text-4xl sm:text-5xl` | 36→48px | Good, but the jump is large |
| Card titles | `text-lg` | 18px | Works for card context |
| Body text | `text-lg` | 18px | Same as card titles — no differentiation |
| Body text (cards) | `text-sm` (Beyond the Code only) | 14px | Inconsistent with other cards |
| Tech footnotes | `text-sm font-mono` | 14px mono | Good use of JetBrains Mono |
| Nav links | `text-sm` | 14px | Appropriate for navigation |
| Contact heading | `text-3xl sm:text-4xl` | 30→36px | Smaller than other sections — intentional? |

**Issue: Body text at `text-lg` everywhere.** Using 18px for both long-form paragraphs (about section) and card descriptions makes the cards feel slightly text-heavy. Card text could benefit from `text-base` (16px).

**Issue: Inconsistent card text sizing.** Expertise cards use default size while Beyond the Code cards use `text-sm`. Both are visually similar card components — they should match.

### Line Height
Body text consistently uses `leading-relaxed` (1.625) which gives good readability for the dark-on-light and light-on-dark contexts. This is well chosen.

### Font Weights
Headings use `font-bold` (700) and card titles use `font-semibold` (600). This is a sensible two-level weight hierarchy. The 300 weight (loaded but unused in the reviewed files) may be unnecessary — check if it's used elsewhere.

---

## Animation Assessment

### GSAP Usage
Animations are defined in `src/pages/index.astro:525-588`:

1. **Hero entrance** — `y: 40, opacity: 0, duration: 1.2s, power3.out` with stagger
2. **Fade-up elements** — `y: 30, opacity: 0, duration: 0.8s, power2.out`, triggered at `top 85%`
3. **Timeline entries** — `y: 50, opacity: 0, duration: 1s, power3.out`, triggered at `top 80%`

**What works:**
- The stagger on hero elements creates a pleasant cascading reveal
- Easing choices (`power2.out`, `power3.out`) feel natural — no bouncing or overshooting
- Trigger points are early enough that content appears as users scroll into view, not after they've already passed it

**What could improve:**
- **All animations are essentially the same pattern** (fade up from below). There's no variety — every section entrance looks identical. The timeline entries specifically could benefit from a different pattern (e.g. fade-in from the left to match the timeline line visual direction)
- **Animation distance values are arbitrary** (40px, 30px, 50px). A standardised set (e.g. 24px for subtle, 48px for prominent) would be more systematic
- **No scroll-linked animations** — everything is a one-shot "play" animation. GSAP's ScrollTrigger supports scrubbed animations (progress tied to scroll position) which could add dynamism to the timeline

### Particle Canvas Animation
The canvas animation is well-implemented:
- 120 particles with distance-based connections — classic but effective
- Mouse interaction (repulsion + connection lines) adds interactivity
- Drag-to-paint and click-to-burst are nice additions
- Device pixel ratio handling for crisp rendering on Retina displays
- `requestAnimationFrame` properly cancelled on navigation

**Potential concern:** 120 particles with O(n²) connection checking (every pair) means ~7,200 distance checks per frame. This is fine for modern desktop hardware but may tax low-end mobile devices. Consider reducing particle count on mobile or checking `navigator.hardwareConcurrency`.

### Reduced Motion
Excellent support:
- CSS: `prefers-reduced-motion: reduce` disables all animations and transitions
- JS: checks `matchMedia` and falls back to static canvas render
- Card hover transforms disabled
- Link underline animations disabled

---

## Responsive Design Assessment

### Breakpoint Strategy
The site uses Tailwind's default breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).

**Hero/About section:**
- Mobile: single column, centred avatar + name, text below
- Desktop (`lg`+): two-column grid with avatar/name left, bio right
- The `min-h-[80vh]` ensures the hero fills most of the viewport but isn't forced to 100vh (which causes issues on mobile browsers with address bars)

**Expertise grid:** `grid-cols-1 md:grid-cols-2` — clean transition from stacked to 2-column

**Beyond the Code:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-6` — sophisticated breakpoint handling with the centred last row on desktop

**Timeline:** Uses `pl-10 sm:pl-16` for the timeline indentation, with the dot position adjusting accordingly. Works well across sizes.

### Areas for Improvement
- **No `xl` or `2xl` optimisation** — on very wide screens (1440px+), the `max-w-4xl` (896px) and `max-w-5xl` (1024px) containers leave large margins. This is acceptable for readability but the site feels narrow on ultrawide displays
- **Touch targets** — the theme toggle at `w-9 h-9` (36px) is below the recommended 44px minimum for mobile touch targets
- **Blueprint grid on mobile** — the 160px major grid and 32px fine grid sizes don't scale with viewport width. On a 375px phone, the grid shows ~2.3 major cells across, which can look odd. Consider a smaller grid unit on mobile
- **Card padding** — `p-6 sm:p-8` is generous on mobile. At 375px with `px-6` container padding and `p-6` card padding, actual content width is ~375 - 48 - 48 = 279px. This is tight for readability

---

## Enhancement Opportunities

Ranked by impact (high to low):

### 1. ~~Consolidate Hero Implementations~~ (DONE)
**Impact: High | Effort: Low**
Extracted the inline hero from `index.astro` into `Hero.astro` as the canonical component. Deleted orphaned `About.astro`.

### 2. Fix Text Colour Hierarchy
**Impact: High | Effort: Low**
Adjust `--color-text-tertiary` in dark mode to create meaningful visual separation from secondary. Current 3-point difference (`#a0a0a0` → `#a3a3a3`) is invisible.

### 3. ~~Add Section Scroll Indicator to Navigation~~ (DONE)
**Impact: High | Effort: Medium**
IntersectionObserver-based scroll-spy highlights the current section's nav link in accent colour.

### 4. ~~Increase Section Vertical Padding~~ (DONE)
**Impact: Medium | Effort: Low**
All sections now use `py-16 sm:py-24`. Hero responsive padding also added.

### 5. Fix Light-Mode Accent Naming
**Impact: Medium | Effort: Low**
Rename or redefine `--color-accent-light` and `--color-accent-pale` in light mode so the semantic naming matches visual weight.

### 6. Vary Animation Patterns
**Impact: Medium | Effort: Medium**
Introduce 2-3 different animation patterns beyond "fade up from below". Timeline entries could slide in from the left. Expertise cards could scale up slightly. The hero could use a more dramatic entrance.

### 7. ~~Remove Development Navigation Links~~ (DONE)
**Impact: Medium | Effort: Trivial**
Removed "Variations" from nav. "Notes" kept intentionally.

### 8. ~~Enhance Light-Mode Blueprint Grid~~ (DONE)
**Impact: Medium | Effort: Low**
Background tinted to `#f5f3fa`, grid line opacity increased to `0.15`/`0.06`.

### 9. ~~Strengthen the Contact/Footer Section~~ (DONE)
**Impact: Medium | Effort: Medium**
Blueprint grid, corner markers, glow, closing statement, prominent CTAs, and `min-h-[60vh]` for scroll visibility. Heading matched to other sections.

### 10. Self-Host Fonts
**Impact: Low-Medium | Effort: Low**
Download Space Grotesk and JetBrains Mono, serve them from the site's own domain. Eliminates external dependency, improves privacy, and can improve load performance.

### 11. Add Timeline Line Visual Weight
**Impact: Low | Effort: Trivial**
Increase the timeline vertical line from 1px `bg-border-subtle` to 2px `bg-accent/20` for better visibility.

### 12. ~~Add Subtle Entrance Animation to Mobile Nav~~ (DONE)
**Impact: Low | Effort: Low**
CSS staggered fade-up (50ms per item) with reduced-motion support.

---

## Summary Table

| Area | Score (1-5) | Notes |
|------|-------------|-------|
| Visual Hierarchy | 4 | Strong, but text hierarchy tiers need separation |
| Typography | 4 | Great font pairing, minor sizing inconsistencies |
| Colour System | 3.5 | Well-designed dark mode, light mode needs naming fix |
| Layout & Spacing | 3.5 | Good responsive design, spacing needs standardisation |
| Animations | 3.5 | Tasteful but samey — could use more variety |
| Hero Section | 4 | Distinctive concept, needs consolidation |
| Component Quality | 4 | Consistent card vocabulary, minor inconsistencies |
| Dark/Light Mode | 3.5 | Dark mode excellent, light mode needs refinement |
| Mobile Responsive | 4 | Well-handled breakpoints, minor touch target issue |
| Modern Patterns | 4 | Current design trends appropriately applied |

**Overall: 3.8 / 5 — A strong, professional portfolio that would benefit from a focused refinement pass.**
