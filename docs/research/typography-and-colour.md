---
generated_by: Claude Opus 4.6
generation_date: 2026-02-08
model_version: claude-opus-4-6
purpose: design_decisions
status: draft
human_reviewer: matthewvivian
tags: [colour, palette, typography, WCAG, accessibility, dark-mode, design-system]
---

# Typography & Colour Decisions

Colour palette confirmed 2026-02-08. Typography decisions pending (Session 0.3).

---

## Colour Palette

### Design Principles

- **Dark mode first.** #0a0a0a is the default. Light mode comes later as a toggle.
- **One accent family.** All accent shades derive from `#7C3AED` (deep violet). No competing accent colours.
- **WCAG compliance.** Every text-on-background combination meets at minimum AA, with AAA where possible.
- **Opacity for atmosphere.** Background washes, section highlights, and imagery accents use the brand violet at low opacity (8-25%) rather than introducing new hues.

### Backgrounds

| Role | Hex | Usage |
|------|-----|-------|
| Base | `#0a0a0a` | Page background. Near-black, not pure black (avoids OLED smearing) |
| Surface | `#141414` | Cards, elevated sections, timeline entry backgrounds |
| Surface raised | `#1c1c1c` | Higher elevation — modals, hover cards, expanded Tier 2 |
| Border subtle | `#262626` | Hairline dividers, card borders |
| Border emphasis | `#333333` | More visible borders when needed |

### Text

| Role | Hex | Contrast vs #0a0a0a | WCAG | Usage |
|------|-----|---------------------|------|-------|
| Primary | `#f5f5f5` | ~18:1 | AAA | Headings, body copy, hero text |
| Secondary | `#a0a0a0` | ~7.6:1 | AAA | Dates, labels, supporting text, timeline years |
| Tertiary | `#666666` | ~3.5:1 | AA large | Tech footnotes (styled ≥18px), de-emphasised metadata |

### Accent — Violet Family

All derived from `#7C3AED`. Use the appropriate tier based on the element's purpose and size.

| Role | Hex | Contrast vs #0a0a0a | WCAG | Usage |
|------|-----|---------------------|------|-------|
| Brand | `#7C3AED` | ~3.6:1 | AA large | Decorative glows, timeline nodes, imagery accent, large headings (≥18px bold or ≥24px) |
| Functional | `#8B5CF6` | ~5.0:1 | AA | Links, interactive text, small icons, focus indicators |
| Light | `#A78BFA` | ~7.3:1 | AAA | Hover text states, focus rings, badges, secondary links |
| Pale | `#C4B5FD` | ~10.7:1 | AAA | Tag text on dark surfaces, subtle highlights, breadcrumbs |

### Accent at Opacity (for Backgrounds and Imagery)

| Opacity | CSS Value | Usage |
|---------|-----------|-------|
| 8% | `rgba(124, 58, 237, 0.08)` | Subtle section background wash, era colour temperature |
| 15% | `rgba(124, 58, 237, 0.15)` | Hover backgrounds, card highlights, timeline active state |
| 25% | `rgba(124, 58, 237, 0.25)` | Stronger emphasis areas, timeline node glow |

### Tailwind CSS Configuration (Draft)

To be finalised during Session 1.3 (Design System Foundation), but the values are locked:

```js
// tailwind.config.mjs — colours
export default {
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          surface: '#141414',
          raised: '#1c1c1c',
        },
        border: {
          subtle: '#262626',
          emphasis: '#333333',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a0a0a0',
          tertiary: '#666666',
        },
        accent: {
          DEFAULT: '#7C3AED',     // brand — decorative, large text
          functional: '#8B5CF6',  // links, interactive text
          light: '#A78BFA',       // hover states, focus rings
          pale: '#C4B5FD',        // tags, subtle highlights
        },
      },
    },
  },
}
```

### CSS Custom Properties (Draft)

```css
:root {
  /* Backgrounds */
  --color-bg: #0a0a0a;
  --color-surface: #141414;
  --color-surface-raised: #1c1c1c;
  --color-border-subtle: #262626;
  --color-border-emphasis: #333333;

  /* Text */
  --color-text-primary: #f5f5f5;
  --color-text-secondary: #a0a0a0;
  --color-text-tertiary: #666666;

  /* Accent */
  --color-accent: #7C3AED;
  --color-accent-functional: #8B5CF6;
  --color-accent-light: #A78BFA;
  --color-accent-pale: #C4B5FD;

  /* Accent at opacity */
  --color-accent-wash: rgba(124, 58, 237, 0.08);
  --color-accent-hover: rgba(124, 58, 237, 0.15);
  --color-accent-emphasis: rgba(124, 58, 237, 0.25);
}
```

---

## Colour Palette Rationale

### Why #7C3AED?

- **Distinctive.** Mint/teal (#64ffda) is overused in developer portfolios (Brittany Chiang clones). Electric blue risks "Linear clone" territory. Coral reads too young for a 25-year career. Violet stands apart.
- **Right connotations.** Craft, sophistication, depth. Bridges the tech world (AI/ML brands lean violet) and the personal/creative story without feeling corporate.
- **Beautiful against near-black.** Violet glows naturally at low opacity against #0a0a0a. It works for both subtle background washes (8%) and prominent UI elements (timeline nodes, links).
- **Warm enough.** Violet contains red, so it avoids the cold/clinical feel of pure blue or teal. The warmth comes from the colour itself, not from adding a competing warm accent.
- **Good tinting range.** The four-tier accent system (brand → functional → light → pale) all derive naturally from the same hue, creating a cohesive family rather than an arbitrary set.

### Why Four Accent Tiers?

The brand violet (#7C3AED) is beautiful but only hits 3.6:1 contrast against #0a0a0a — not enough for body text links (WCAG AA requires 4.5:1). Rather than compromise the brand colour or the accessibility standard, the palette provides:

- **Brand (#7C3AED)** — for decorative elements where contrast isn't a readability concern (glows, background accents, large headings ≥24px or ≥18px bold)
- **Functional (#8B5CF6)** — for interactive text (links, buttons) at AA compliance
- **Light (#A78BFA)** — for elements needing high contrast at AAA
- **Pale (#C4B5FD)** — for text on surfaces where maximum readability matters

### Why #a0a0a0 for Secondary Text (Not #888888)?

The original implementation plan specified #888888 (~5.6:1, AA). Bumping to #a0a0a0 (~7.6:1) achieves AAA with no perceptible loss of the "muted" quality. Since secondary text includes timeline dates, section labels, and supporting metadata that users need to read, AAA is worth the marginal increase in lightness.

### Era Colour Temperatures

The implementation plan and inspiration research discussed shifting background colour temperatures across the timeline (cool for early career, warm for recent). With a single violet accent, this works through **opacity variation** rather than hue variation:

- Early career entries: accent at 5-6% opacity (barely perceptible, cooler feel)
- Mid-career entries: accent at 8-10% opacity (subtle presence)
- Recent entries: accent at 12-15% opacity (more saturated, warmer feel)

The violet's natural red component means higher opacity inherently reads warmer. No additional hues needed.

---

## Typography

**Status:** Decisions pending. Session 0.3 will evaluate the candidates below.

### Candidates (from Implementation Plan)

| Font | Character | Notes |
|------|-----------|-------|
| **Inter** | Clean, highly readable, safe | The baseline choice. Free. Excellent at all sizes. |
| **Space Grotesk** | Geometric, techy, more personality | Pairs well with the technical content. Free. |
| **Satoshi** | Warm, distinctive, trendy | May add personality the violet accent needs. Free via Fontshare. |

### Monospace Pairing

**JetBrains Mono** for tech footnotes, code snippets, and the monospace elements in the timeline. Free, excellent dark-mode readability, programming ligatures.

### What Session 0.3 Will Decide

- Final typeface selection (test against real content at hero, body, and footnote sizes)
- Type scale (font sizes, line heights, letter spacing for dark-mode readability)
- Font weights needed (to minimise font file loading)
- Font loading strategy (preload, font-display: swap)

---

## Describing the Palette to AI Image Tools

When writing prompts for AI image generation, use these descriptions:

### For ChatGPT / GPT-4o (understands hex codes)

Include hex codes directly:
- Background: `#0a0a0a`
- Foreground elements: `#f5f5f5`
- Accent highlights: `#7C3AED` (deep violet)

### For Midjourney (hex codes are hints, not exact)

Use descriptive language reinforced with hex codes:
- "deep black background #0a0a0a"
- "off-white elements #f5f5f5"
- "deep violet accent #7C3AED, rich purple, not neon, not pastel"
- Add `--no blue, teal, amber, orange` to prevent unwanted accent colours

### For Both Tools

Key phrasing: "deep violet", "rich purple", "dark purple accent". Avoid: "neon", "bright", "lavender", "pastel", "electric purple".

---

## Sources

- [WCAG 2.1 Contrast Requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Accent colour shortlist: `docs/research/website-inspiration.md` (Cross-Cutting Themes → Accent Colour Candidates)
- Palette research in context of dark-mode portfolios: `docs/research/website-inspiration.md` (Category 3)
