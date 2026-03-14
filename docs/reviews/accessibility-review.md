---
generated_by: Claude Opus 4.6
generation_date: 2026-02-15
model_version: claude-opus-4-6
purpose: accessibility_review
status: draft
human_reviewer: matthewvivian
tags: [accessibility, wcag, a11y, review]
---

# Accessibility Review — viv.me.uk

## Executive Summary

The site demonstrates **strong accessibility foundations** with thoughtful semantic HTML, well-implemented keyboard navigation, comprehensive `prefers-reduced-motion` support, and good ARIA usage throughout. The developer has clearly considered accessibility from the outset rather than retrofitting it.

**Estimated current compliance: WCAG 2.1 AA — substantially compliant** with a small number of issues to address.

Key strengths:
- Excellent colour contrast ratios across both themes — all text passes AA, most passes AAA
- Skip-to-content link with proper focus management
- Mobile navigation with focus trap, Escape-to-close, and focus restoration
- Comprehensive `prefers-reduced-motion` handling for both CSS and GSAP animations
- Proper use of landmark regions and ARIA labels
- External links consistently indicate they open in new tabs (`sr-only` text)
- `lang="en-GB"` correctly set on `<html>`

Areas requiring attention:
- Skip-to-content link has marginal contrast (3.44:1 — fails AA for its small text size)
- Some interactive elements could benefit from additional screen reader announcements
- The particle canvas (easter egg) has keyboard accessibility gaps
- A few heading hierarchy inconsistencies across sub-pages
- Contact section is a `<footer>` but has a heading — semantically ambiguous

---

## Colour Contrast Analysis

### Dark Mode (default)

| Element | Foreground | Background | Ratio | AA Normal | AA Large | AAA Normal | AAA Large |
|---------|-----------|------------|-------|-----------|----------|------------|-----------|
| Primary text on bg | `#f5f5f5` | `#0a0a0a` | 18.16:1 | PASS | PASS | PASS | PASS |
| Primary text on surface | `#f5f5f5` | `#141414` | 16.90:1 | PASS | PASS | PASS | PASS |
| Secondary text on bg | `#a0a0a0` | `#0a0a0a` | 7.57:1 | PASS | PASS | PASS | PASS |
| Secondary text on surface | `#a0a0a0` | `#141414` | 7.04:1 | PASS | PASS | PASS | PASS |
| Tertiary text on bg | `#a3a3a3` | `#0a0a0a` | 7.85:1 | PASS | PASS | PASS | PASS |
| Tertiary text on surface | `#a3a3a3` | `#141414` | 7.30:1 | PASS | PASS | PASS | PASS |
| Accent on bg | `#8D7FD2` | `#0a0a0a` | 5.75:1 | PASS | PASS | FAIL | PASS |
| Accent on surface | `#8D7FD2` | `#141414` | 5.35:1 | PASS | PASS | FAIL | PASS |
| Accent-light on bg | `#AEA4DF` | `#0a0a0a` | 8.65:1 | PASS | PASS | PASS | PASS |
| Accent-light on surface | `#AEA4DF` | `#141414` | 8.05:1 | PASS | PASS | PASS | PASS |
| Accent-pale on bg | `#CBC5E7` | `#0a0a0a` | 11.95:1 | PASS | PASS | PASS | PASS |
| White on hero blueprint | `#ffffff` | `#0d0a1a` | 19.53:1 | PASS | PASS | PASS | PASS |
| Strava orange on surface | `#FC4C02` | `#141414` | 5.42:1 | PASS | PASS | FAIL | PASS |

### Light Mode

| Element | Foreground | Background | Ratio | AA Normal | AA Large | AAA Normal | AAA Large |
|---------|-----------|------------|-------|-----------|----------|------------|-----------|
| Primary text on bg | `#1a1a1a` | `#fafafa` | 16.67:1 | PASS | PASS | PASS | PASS |
| Primary text on surface | `#1a1a1a` | `#ffffff` | 17.40:1 | PASS | PASS | PASS | PASS |
| Secondary text on bg | `#555555` | `#fafafa` | 7.14:1 | PASS | PASS | PASS | PASS |
| Secondary text on surface | `#555555` | `#ffffff` | 7.46:1 | PASS | PASS | PASS | PASS |
| Tertiary text on bg | `#666666` | `#fafafa` | 5.50:1 | PASS | PASS | FAIL | PASS |
| Tertiary text on surface | `#666666` | `#ffffff` | 5.74:1 | PASS | PASS | FAIL | PASS |
| Accent on bg | `#4633A3` | `#fafafa` | 8.89:1 | PASS | PASS | PASS | PASS |
| Accent on surface | `#4633A3` | `#ffffff` | 9.28:1 | PASS | PASS | PASS | PASS |
| Accent-light on bg | `#3D2E8A` | `#fafafa` | 10.28:1 | PASS | PASS | PASS | PASS |
| Accent-pale on bg | `#5742BD` | `#fafafa` | 6.89:1 | PASS | PASS | FAIL | PASS |

### Critical: Skip-to-Content Link

| Element | Foreground | Background | Ratio | AA Normal | AA Large |
|---------|-----------|------------|-------|-----------|----------|
| Skip link (white on accent) | `#ffffff` | `#8D7FD2` | 3.44:1 | **FAIL** | PASS |

**Verdict**: All standard text/background combinations pass WCAG AA. Most pass AAA. The skip-to-content link is the only AA failure for normal-sized text.

### Non-Text Contrast (WCAG 1.4.11)

| Element | Colours | Ratio | 3:1 Minimum |
|---------|---------|-------|-------------|
| Border subtle on dark bg | `#262626` on `#0a0a0a` | 1.31:1 | **FAIL** |
| Border emphasis on dark bg | `#333333` on `#0a0a0a` | 1.57:1 | **FAIL** |
| Focus ring (dark) | `#8D7FD2` on `#0a0a0a` | 5.75:1 | PASS |
| Focus ring (light) | `#4633A3` on `#fafafa` | 8.89:1 | PASS |
| Timeline dot (dark) | `#8D7FD2` on `#0a0a0a` | 5.75:1 | PASS |

**Note**: The low-contrast borders are a stylistic choice for subtle card outlines. Since these borders are decorative (the cards are visually distinguishable via their background colour against the page), this is **acceptable under 1.4.11** — the borders are not the sole means of identifying the UI component. However, the card boundary relies partly on the `bg-bg-surface` (`#141414`) vs `bg` (`#0a0a0a`) distinction, which has a ratio of only 1.07:1. This is worth monitoring.

---

## Findings by WCAG Principle

### 1. Perceivable

#### 1.1 Text Alternatives

**1.1.1 Non-text Content — Level A** | Status: PASS with notes

- **Avatar image**: Good descriptive alt text (`"Viv — portrait photo"` in `index.astro:47`, `"Viv — stylized portrait photo"` in `About.astro:13`)
- **Decorative images**: All background/decorative images correctly use `alt=""` (Expertise card images at `Expertise.astro:54,62`, BeyondTheCode card images at `BeyondTheCode.astro:78,86`, Timeline accent images at `Timeline.astro:79,86,97`)
- **Canvas element**: Correctly marked `aria-hidden="true"` (`index.astro:31`, `Hero.astro:14`)
- **SVGs**: Scroll indicator SVG is within an `aria-hidden="true"` container (`index.astro:84`)
- **Strava SVG icon**: Correctly marked `aria-hidden="true"` (`StravaStats.astro:25`)

**Recommendation**: The theme toggle SVG icons are `aria-hidden="true"` which is correct since the button has an `aria-label`. Good implementation.

#### 1.2 Time-based Media — Level A | Status: N/A

No audio or video content present.

#### 1.3 Adaptable

**1.3.1 Info and Relationships — Level A** | Status: PASS with notes

- **Landmark regions**: Proper use of `<nav>`, `<main>`, `<section>`, `<footer>`, and `<article>` elements
- **ARIA labels on landmarks**: All sections have `aria-label` attributes (e.g., `aria-label="About"`, `aria-label="Expertise"`, `aria-label="Experience"`, etc.)
- **Navigation landmark**: `aria-label="Main"` (`Navigation.astro:21`)
- **Lists**: Navigation links are in proper `<ul>`/`<li>` structures
- **Headings**: Generally well-structured (see 1.3.1 heading hierarchy below)

**Heading hierarchy analysis (index.astro)**:
- `h1`: "Viv." (hero) — correct single h1
- `h2`: "What I Do" (Expertise), "Experience" (Timeline), "Work in the Open", "Beyond the Code", "Want to talk?" (Contact)
- `h3`: Individual cards and timeline entries

This is a clean, logical heading hierarchy.

**Heading hierarchy concern (ai-engineering.astro)**:
- `h1`: "AI Engineering"
- `h2`: "Philosophy", "How I Work with AI", "What I've Built & Researched", "Where This Is Going"

Clean — no issues.

**Heading hierarchy concern (life.astro)**:
- `h1`: "Beyond the Code"
- `h2`: "Wado Ryu Karate", "Mountain Biking & Active Life", etc.
- `h3`: "Strava Lifetime Stats" (nested within Mountain Biking section via `StravaStats.astro:28`)

Clean — no issues.

**1.3.2 Meaningful Sequence — Level A** | Status: PASS

The DOM order matches the visual reading order throughout. The CSS Grid layout in the hero (`grid-cols-1 lg:grid-cols-[auto_1fr]`) reads correctly at all breakpoints.

**1.3.3 Sensory Characteristics — Level A** | Status: PASS

No instructions rely solely on shape, colour, size, or location. The timeline expansion button uses text ("See Full Timeline") rather than relying solely on the chevron icon.

#### 1.4 Distinguishable

**1.4.1 Use of Colour — Level A** | Status: PASS

Links are distinguished by colour but also by underlines (on hover via `.link-hover` effect, or persistent underlines in Contact section and prose styles). External links have the `↗` indicator.

**1.4.2 Audio Control — Level A** | Status: N/A

No audio content.

**1.4.3 Contrast (Minimum) — Level AA** | Status: PASS with one exception

See contrast analysis tables above. All text meets 4.5:1 for normal text and 3:1 for large text, **except**:

- **Skip-to-content link**: White (`#ffffff`) on accent (`#8D7FD2`) = 3.44:1. This is `text-sm font-medium` — normal-sized text, so it **fails AA 4.5:1**. However, this link is only visible when focused, and it serves a critical accessibility function.

**Finding [P1 — High]**: Fix skip-to-content link contrast.
- File: `src/layouts/BaseLayout.astro:71`
- Current: `focus:bg-accent focus:text-white`
- Recommendation: Use a darker accent or change to `focus:bg-[#3D2E8A] focus:text-white` (ratio ~10.74:1) or use the dark background with accent text.

**1.4.4 Resize Text — Level AA** | Status: PASS

The site uses relative units (`rem`, `em`) and responsive classes. Text scales appropriately with browser zoom up to 200%. The `viewport` meta tag does not include `maximum-scale` or `user-scalable=no`.

**1.4.5 Images of Text — Level AA** | Status: PASS

No images of text are used. All text is rendered as HTML text.

**1.4.10 Reflow — Level AA** | Status: PASS

The responsive design reflows correctly at 320px viewport width. Grid layouts collapse to single columns on mobile (`grid-cols-1`).

**1.4.11 Non-text Contrast — Level AA** | Status: PASS with notes

- **Focus indicators**: The accent-coloured focus ring (`outline: 2px solid var(--color-accent)`) has sufficient contrast in both modes (5.75:1 dark, 8.89:1 light — both exceed 3:1 minimum).
- **Buttons**: The timeline expand button border (`border border-accent`) at 5.75:1 on dark bg is well above the 3:1 threshold.
- **Card borders**: The subtle card borders (1.31:1) are decorative — the cards are identifiable by their background colour difference. However, as noted above, the bg-surface vs bg contrast is very low (1.07:1), so the cards are primarily distinguishable by their borders. This is a borderline case.

**Finding [P3 — Low]**: Consider slightly increasing card border contrast or background surface contrast to ensure cards are visually distinguishable in all conditions, particularly for users with reduced contrast sensitivity.

**1.4.12 Text Spacing — Level AA** | Status: PASS

No styles that would prevent user-applied text spacing adjustments. The site uses relative line-heights (`leading-relaxed`) and no fixed-height text containers.

**1.4.13 Content on Hover or Focus — Level AA** | Status: PASS

The link-hover underline effects and card-hover transforms are decorative — no content appears/disappears on hover. The mobile navigation overlay is triggered by click, not hover.

---

### 2. Operable

#### 2.1 Keyboard Accessible

**2.1.1 Keyboard — Level A** | Status: PASS with notes

All interactive elements are keyboard accessible:
- Navigation links: focusable via Tab
- Theme toggle: `<button>` element, keyboard-operable
- Timeline expand button: `<button>` element, keyboard-operable
- Mobile menu: opens/closes via click on button (keyboard-accessible)
- External links: standard `<a>` elements

**Finding [P2 — Medium]**: The particle canvas easter egg (5 rapid clicks on hero section) is mouse-only.
- File: `src/pages/index.astro:246-267`
- The easter egg is triggered by rapid clicking on the hero section. There is no keyboard equivalent (e.g., rapid Enter presses).
- Since this is a hidden easter egg (decorative, non-essential), this is not a WCAG failure, but it represents a lost opportunity for inclusive fun.
- Recommendation: Consider adding keyboard activation (e.g., pressing a specific key sequence) or document the easter egg somewhere accessible.

**2.1.2 No Keyboard Trap — Level A** | Status: PASS

The mobile navigation overlay implements a proper focus trap with:
- Tab cycling between focusable elements (`Navigation.astro:125-139`)
- Escape key to close (`Navigation.astro:119-121`)
- Focus restoration to toggle button on close (`Navigation.astro:109`)

The particle canvas is `aria-hidden` and not focusable, so no trap risk.

**2.1.4 Character Key Shortcuts — Level A** | Status: PASS

No single-character keyboard shortcuts are implemented.

#### 2.2 Enough Time

**2.2.1 Timing Adjustable — Level A** | Status: PASS

No time limits on any content or interactions.

**2.2.2 Pause, Stop, Hide — Level A** | Status: PASS with notes

- The particle canvas animation in `Hero.astro` runs continuously but is `aria-hidden="true"` and purely decorative.
- The animation checks `prefers-reduced-motion` and falls back to a static render (`Hero.astro:512-514`).
- On the index page, the easter egg canvas starts with `opacity-0` and is hidden by default, only activating on rapid clicks.
- The scroll indicator bounce animation (`animate-bounce`) runs indefinitely but is within an `aria-hidden` container.
- The hero title gradient animation (`gradient-shift`) is disabled for `prefers-reduced-motion` (`Hero.astro:219-223`).

**Finding [P3 — Low]**: The `Hero.astro` component (used standalone) always shows the particle canvas. While `aria-hidden` and checked for reduced-motion, the continuous animation could be distracting. Note: This component appears to only be used by variation/test pages (not the production index), so the risk is minimal.

#### 2.3 Seizures and Physical Reactions

**2.3.1 Three Flashes or Below Threshold — Level A** | Status: PASS

No rapidly flashing content. The particle canvas is subtle with low-opacity elements. The gradient animation on the hero title is slow (20-second cycle).

#### 2.4 Navigable

**2.4.1 Bypass Blocks — Level A** | Status: PASS

Skip-to-content link implemented (`BaseLayout.astro:69-74`). The link targets `#main-content` which is present on all pages (`id="main-content"` on `<main>` element).

**2.4.2 Page Titled — Level A** | Status: PASS

All pages have descriptive titles:
- Index: "Viv — Software Engineer"
- AI Engineering: "AI Engineering — Viv"
- Life: "Life Beyond the Code — Viv"
- Notes: "Engineering Notes — Viv"
- Individual notes: "{title} — Viv"

**2.4.3 Focus Order — Level A** | Status: PASS

Focus order follows the visual layout. Tab order moves logically through navigation, then main content, then footer.

**2.4.4 Link Purpose (In Context) — Level A** | Status: PASS

- Navigation links have clear labels: "About", "Expertise", "Experience", etc.
- External links indicate destination: "igniterealtime/Openfire", "surevine/openfire-docker-compose"
- "Back to main" and "All notes" links have clear purpose
- "More about my AI approach" link in Expertise is descriptive

**2.4.5 Multiple Ways — Level AA** | Status: PASS

The site provides:
- Navigation bar (primary way)
- In-page anchor links (scroll to sections)
- Back links between sub-pages and main
- Prev/Next navigation on notes

**2.4.6 Headings and Labels — Level AA** | Status: PASS

Headings are descriptive and unique within each page. Form labels (the theme toggle `aria-label`) are clear and dynamically updated.

**2.4.7 Focus Visible — Level AA** | Status: PASS

Global `:focus-visible` style provides a 2px solid accent-coloured outline with 2px offset (`global.css:84-87`). This is visible and consistent across all interactive elements.

#### 2.5 Input Modalities

**2.5.1 Pointer Gestures — Level A** | Status: PASS

No multi-point or path-based gestures required. All interactions are single-click/tap.

**2.5.2 Pointer Cancellation — Level A** | Status: PASS

Standard click events are used (activate on `click`, not `mousedown`).

**2.5.3 Label in Name — Level A** | Status: PASS

The theme toggle's `aria-label` ("Switch to light mode" / "Switch to dark mode") contains the visible concept (sun/moon icons with hidden text).

**Finding [P3 — Low]**: The theme toggle uses icon-only buttons without visible text. While the `aria-label` is good, users with speech input may not know what to say. The icons are conventional enough (sun/moon) that this is a minor concern.

**2.5.4 Motion Actuation — Level A** | Status: PASS

No motion-activated functionality.

---

### 3. Understandable

#### 3.1 Readable

**3.1.1 Language of Page — Level A** | Status: PASS

`lang="en-GB"` is set on the `<html>` element (`BaseLayout.astro:12`).

**3.1.2 Language of Parts — Level AA** | Status: PASS

All content is in English. No mixed-language content requiring `lang` attribute overrides.

#### 3.2 Predictable

**3.2.1 On Focus — Level A** | Status: PASS

No context changes on focus.

**3.2.2 On Input — Level A** | Status: PASS

Theme toggle changes appearance (expected) but does not navigate or change context unexpectedly.

**3.2.3 Consistent Navigation — Level AA** | Status: PASS

Navigation bar is consistent across all pages (Navigation component is imported on every page).

**3.2.4 Consistent Identification — Level AA** | Status: PASS

The theme toggle, navigation links, and "Back to main" links are consistent across pages.

#### 3.3 Input Assistance

**3.3.1 Error Identification — Level A** | Status: N/A

No form inputs exist (contact section uses outbound links to GitHub/LinkedIn rather than a contact form).

**3.3.2 Labels or Instructions — Level A** | Status: N/A

No form inputs.

---

### 4. Robust

#### 4.1 Compatible

**4.1.1 Parsing — Level A** | Status: PASS (assumed)

Astro generates valid HTML. No obvious parsing issues in the component templates.

**4.1.2 Name, Role, Value — Level A** | Status: PASS with notes

- **Theme toggle**: Proper `<button>` element with dynamic `aria-label` that updates on theme change (`ThemeToggle.astro:72-74`)
- **Mobile nav toggle**: `<button>` with `aria-label`, `aria-expanded`, and `aria-controls` (`Navigation.astro:46-51`). Label updates dynamically on open/close (`Navigation.astro:92`).
- **Mobile overlay**: `role="dialog"` with `aria-modal="true"` and `aria-label` (`Navigation.astro:62-64`)
- **Timeline expand button**: `aria-expanded` and `aria-controls` properly managed (`Timeline.astro:117-120`), button text updates (`Timeline.astro:164`)
- **Scroll progress indicator**: `aria-hidden="true"` (`index.astro:14`)

**Finding [P2 — Medium]**: The mobile navigation overlay uses `role="dialog"` with `aria-modal="true"`, but the dialog is not rendered using the native `<dialog>` element. While the custom implementation includes focus trapping and Escape handling, using the native `<dialog>` element would provide better assistive technology support and `inert` management for the background content.
- File: `src/components/Navigation.astro:60-79`
- Currently, when the overlay is open, the background content (main page) is not marked as `inert`, meaning screen readers can still access it.
- Recommendation: Add `inert` attribute to the main content when the overlay is open, or migrate to `<dialog>` element.

**Finding [P2 — Medium]**: The theme toggle does not announce the new state to screen readers after toggling.
- File: `src/components/ThemeToggle.astro:77-88`
- While the `aria-label` updates, there is no live region announcement. A screen reader user pressing the button hears the click but may not know the theme changed.
- Recommendation: Add an `aria-live="polite"` region with a short status message (e.g., "Dark mode enabled") or use `role="status"`.

---

## Additional Findings

### Contact Section Semantics

**Finding [P3 — Low]**: The Contact section uses `<footer>` as its root element (`Contact.astro:5`), which is semantically correct as a page footer. However, it contains an `<h2>` ("Want to talk?") which creates a heading within the footer landmark. This is valid HTML but may confuse some screen reader users navigating by headings, as footers are typically expected to contain supplementary information rather than major content headings.
- Recommendation: This is a design choice — acceptable as-is. If desired, could use `aria-label` on the footer and reduce the heading level or move the heading outside the `<footer>`.

### Hidden About Section

**Finding [P3 — Low]**: The standalone `About.astro` component (`src/components/About.astro:22`) has an `<h2 class="sr-only">About</h2>`. This is good practice for screen readers, but this component appears to not be used on the production index page (the about content is inlined into the hero section in `index.astro`). The standalone component uses a different avatar alt text ("Viv — stylized portrait photo") vs the index page ("Viv — portrait photo"). Consistency would be ideal.

### Timeline Tier 2 Focus Management

**Finding [P3 — Low]**: When the "See Full Timeline" button is expanded, focus moves to the first `<article>` by setting `tabindex="-1"` and calling `.focus()` (`Timeline.astro:168-172`). This is good practice. However, the focused article has no visible focus indicator since `<article>` elements don't typically show `:focus-visible`. Consider adding a subtle focus style for these elements, or use a `sr-only` class to announce "Full timeline expanded" instead.

### Scroll Behaviour

**Finding [P3 — Low]**: The `scroll-behavior: smooth` CSS property (`global.css:61`) is correctly disabled for `prefers-reduced-motion` users (`global.css:79`). Good implementation.

### Image Loading Strategy

All below-the-fold images use `loading="lazy"`, which is correct for performance. Hero avatar does not use lazy loading, which is correct (above the fold).

---

## Compliance Summary

| Level | Status | Notes |
|-------|--------|-------|
| WCAG 2.1 Level A | **Substantially compliant** | All criteria met or N/A |
| WCAG 2.1 Level AA | **Substantially compliant** | One contrast issue (skip link), dialog `inert` gap |
| WCAG 2.1 Level AAA | **Partially met** | Most contrast ratios meet AAA; dark accent (#8D7FD2) and light tertiary (#666666) meet AA but not AAA for normal text |

---

## Prioritised Recommendations

### P1 — High Impact (fix before launch)

1. **Fix skip-to-content link contrast** (WCAG 1.4.3)
   - File: `src/layouts/BaseLayout.astro:71`
   - Change `focus:bg-accent` to `focus:bg-[#3D2E8A]` (or `focus:bg-accent-light` in light mode context) for a ratio of ~10.74:1
   - Or: use dark background with light text: `focus:bg-bg focus:text-accent`

### P2 — Medium Impact (should fix)

2. **Add `inert` to background content when mobile nav is open** (WCAG 4.1.2)
   - File: `src/components/Navigation.astro`
   - When overlay opens, set `inert` attribute on `<main>` and any other background content
   - Remove `inert` when overlay closes

3. **Add live region for theme toggle state announcements** (WCAG 4.1.2)
   - File: `src/components/ThemeToggle.astro`
   - Add a visually-hidden `aria-live="polite"` element that announces "Dark mode" or "Light mode" on toggle

4. **Keyboard-accessible particle canvas easter egg** (WCAG 2.1.1)
   - File: `src/pages/index.astro:246-267`
   - Add a keyboard-accessible way to trigger the easter egg (optional, as it's non-essential content)

### P3 — Low Impact (nice to have)

5. **Increase card surface/background contrast** — consider bumping `--color-bg-surface` slightly (e.g., `#1a1a1a` instead of `#141414`) for better visual distinction
6. **Consistent avatar alt text** between `About.astro` and `index.astro`
7. **Visible focus style on expanded timeline articles** or use a live region announcement
8. **Theme toggle visible text** — consider adding a visible label alongside the icon for speech input users

---

## AAA Opportunities

The following are already near AAA or could be pushed to AAA with minor changes:

- **Dark accent text** (`#8D7FD2`, 5.75:1 on `#0a0a0a`): Would need to brighten to ~`#A599D8` for 7:1 AAA compliance on normal text
- **Light tertiary text** (`#666666`, 5.50:1 on `#fafafa`): Would need to darken to ~`#595959` for 7:1 AAA compliance
- All other text combinations already meet AAA

---

## Summary of ARIA Usage

| Component | ARIA Attributes | Assessment |
|-----------|----------------|------------|
| Skip link | `sr-only` / `focus:not-sr-only` | Correct |
| Navigation | `aria-label="Main"` | Correct |
| Mobile toggle | `aria-label`, `aria-expanded`, `aria-controls` | Correct, dynamic updates |
| Mobile overlay | `role="dialog"`, `aria-modal="true"`, `aria-label` | Correct, needs `inert` on background |
| All sections | `aria-label` on each `<section>` | Correct |
| Scroll progress | `aria-hidden="true"` | Correct |
| Canvas | `aria-hidden="true"` | Correct |
| Decorative SVGs | `aria-hidden="true"` | Correct |
| Theme toggle | Dynamic `aria-label` | Correct, could add live region |
| Timeline expand | `aria-expanded`, `aria-controls` | Correct |
| External links | `sr-only` "(opens in new tab)" | Correct |
| Strava icon | `aria-hidden="true"` | Correct |

---

## Testing Recommendations

Before launch, validate with:
1. **Automated tools**: axe-core (browser extension), Lighthouse accessibility audit
2. **Screen reader**: VoiceOver (macOS) — test full page navigation, theme toggle, mobile menu, timeline expand
3. **Keyboard only**: Navigate entire site using only Tab, Shift+Tab, Enter, Space, Escape
4. **Browser zoom**: Test at 200% and 400% zoom
5. **Reduced motion**: Enable `prefers-reduced-motion: reduce` in OS settings and verify all animations stop
6. **High contrast mode**: Test in Windows High Contrast Mode (if targeting Windows users)
