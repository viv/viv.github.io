---
generated_by: Claude Opus 4.6
generation_date: 2026-02-08
model_version: claude-opus-4-6
purpose: research
status: complete
human_reviewer: matthewvivian
tags: [imagery, visual-assets, AI-generation, prompts, SVG, generative-art, dark-mode]
---

# Imagery & Visual Asset Strategy

Research conducted 2026-02-08 for the viv.me.uk redesign. Covers every visual element the site needs, which AI generation tool to use for each, copy-pasteable prompts, and programmatic alternatives for patterns and backgrounds.

Target aesthetic: dark-mode-first (#0a0a0a background, #f5f5f5 text), cinematic, modern, bold. Accent: deep violet `#7C3AED`, used sparingly. Full palette in `docs/research/typography-and-colour.md`.

---

## Tool Landscape (Early 2026)

### Recommended Primary: ChatGPT / GPT-4o (gpt-image-1)

GPT-4o replaced DALL-E 3 in ChatGPT in March 2025. DALL-E 3 is scheduled for deprecation May 2026. GPT-4o is the tool to use going forward.

**Strengths:** Transparency/alpha channel support (PNG output), hex colour adherence in prompts, excellent text rendering, conversational iteration ("make the background darker", "add more geometric shapes"), inpainting/outpainting. Output up to 1792px. Free tier available.

**Best for:** Abstract hero imagery, geometric accent graphics, dark-background atmospheric textures, icons and illustrations, anything needing transparency.

### Recommended Secondary: Midjourney V7

V7 became the default model June 2025. Requires a subscription ($10-120/month). Access via midjourney.com or Discord.

**Strengths:** Best-in-class artistic atmosphere and cinematic lighting. Style reference (`--sref`) for visual consistency across a series. Omni reference (`--oref`) for consistent objects. Output up to 2048x2048. Stylize parameter for fine control over artistic interpretation.

**Best for:** Atmospheric hero backgrounds, moody cinematic textures, stylised section dividers. Needs post-processing for transparency (no native alpha channel; use the web editor's erase/export workflow).

### Situational: Google Gemini 3 Pro Image

Up to 4096x4096 resolution — the highest of any tool. Good for generating high-resolution source material that will be cropped or processed further.

**Limitations:** No transparency support whatsoever. JPEG compression artefacts in dark gradients.

### Situational: Microsoft Designer

Quick concept exploration and built-in background removal. Powered by DALL-E and Microsoft's MAI-Image-1 model. Hex colour picker in the editor. 15 free daily generations.

**Limitations:** Less artistic control than GPT-4o or Midjourney. Not the primary tool for the dark abstract aesthetic.

### Tool Comparison Matrix

| Feature | GPT-4o (ChatGPT) | Midjourney V7 | Microsoft Designer | Google Gemini |
|---------|:-:|:-:|:-:|:-:|
| Artistic atmosphere | Good | **Excellent** | Fair | Good |
| Photorealism | Excellent | Excellent | Good | Good |
| Text in images | **Excellent** | Good | Fair | Fair |
| Hex colour control | Yes (prompt) | Partial (hint) | Yes (editor) | Limited |
| Max resolution | ~1792px | 2048px | ~1024px | **4096px** |
| Transparency (alpha) | **Yes** | No | Yes (editor) | No |
| Style references | No | **Yes (--sref)** | No | Limited |
| Seamless patterns | Inconsistent | Inconsistent | Poor | Poor |
| Cost | Free / $20/mo | $10-120/mo | Free / Copilot Pro | Free / AI Pro |

**Key rule:** Do not rely on any AI tool for seamless tiling patterns. Use programmatic approaches instead (see Section 6).

---

## Section 1: Asset Inventory

Every visual element the site needs, organised by section, with recommended tool and approach.

### 1.1 Hero Section

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Hero background** | Full-viewport atmospheric background. Subtle, not distracting. | Programmatic (CSS gradients or WebGL mesh gradient) | Code — see Section 6 |
| **Hero background (alternative)** | Pre-rendered atmospheric texture to layer behind text | AI-generated at high res, exported as optimised WebP | Midjourney V7 or GPT-4o |
| **Grain overlay** | Subtle film-grain texture at 3-5% opacity | SVG `feTurbulence` filter or tiny tiling PNG | Code — SVG filter |
| **Scroll indicator** | Animated down-arrow or chevron | SVG icon, animated with CSS or GSAP | Code — SVG + CSS |

### 1.2 About Section

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Headshot/avatar** | Personal visual for the About section | See Section 5 for full options analysis | Decision needed |
| **Section accent** | Optional subtle decorative element (geometric shape, gradient wash) | CSS radial gradient or SVG | Code |

### 1.3 Experience Timeline — Tier 1

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Timeline spine** | Thin vertical line connecting entries | SVG line or CSS pseudo-element | Code |
| **Entry nodes** | Illuminated dots/markers on the timeline spine | SVG circles with CSS glow (box-shadow or filter) | Code |
| **Era colour temperatures** | Subtle background colour shifts per era (faint violet → more saturated violet) | CSS radial gradients at 5-15% opacity using #7C3AED, transitioned via GSAP | Code |
| **Section dividers** | Visual transitions between entries | CSS gradient fades or SVG shapes | Code |
| **Entry accent graphics** (optional) | Small abstract visuals per entry — e.g. circuit-like pattern for tech entries, shield for security | AI-generated, transparent PNG, small file size | GPT-4o |

### 1.4 Experience Timeline — Tier 2

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Year group headers** | Styled year labels (sticky on scroll) | Typography only — no image assets needed | Code |
| **Compact entry format** | Lighter visual treatment than Tier 1 | CSS only | Code |

### 1.5 What I Do / Expertise

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Theme icons** (optional) | Four subtle icons: systems/architecture, security/shield, AI/neural, people/mentoring | AI-generated or hand-picked icon set | GPT-4o or SVG icon library |
| **Section background** | Subtle gradient wash | CSS radial gradient | Code |

### 1.6 AI Engineering Page

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Page header visual** | Abstract AI/neural-network-inspired graphic | AI-generated, transparent PNG | GPT-4o |
| **Section dividers** | Subtle visual breaks between Philosophy, How I Work, What I've Built, Where This Is Going | SVG or CSS | Code |
| **Diagram** (optional) | Visual representation of the AI workflow or theory of constraints concept | AI-generated or hand-drawn SVG | GPT-4o or code |

### 1.7 Beyond the Code

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Karate icon/illustration** | Abstract martial arts visual — not clip art | AI-generated, minimal, dark-mode-friendly | GPT-4o or Midjourney |
| **Guitar icon/illustration** | Abstract guitar/music visual | AI-generated, minimal, dark-mode-friendly | GPT-4o or Midjourney |
| **Mentoring icon/illustration** | Abstract people/growth visual | AI-generated, minimal, dark-mode-friendly | GPT-4o or Midjourney |

### 1.8 Contact / Footer

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Social icons** | GitHub and LinkedIn | SVG icons (Lucide, Heroicons, or Simple Icons) | Code — icon library |
| **Footer accent** | Optional subtle decorative element | CSS gradient or SVG | Code |

### 1.9 Global / Meta

| Asset | Description | Approach | Tool |
|-------|-------------|----------|------|
| **Favicon** | Small icon for browser tabs — "V" monogram or abstract mark | AI-generated at small size, exported as .ico/.svg | GPT-4o |
| **Open Graph image** | Social sharing preview (1200x630) | AI-generated or composite of site screenshot | GPT-4o or Midjourney |
| **Loading state** (optional) | Preloader animation or skeleton | CSS animation or SVG | Code |
| **404 page visual** (optional) | Simple visual for the error page | AI-generated or typography-only | GPT-4o or none |

---

## Section 2: Copy-Pasteable Prompts — ChatGPT / GPT-4o

All prompts below are designed for the ChatGPT interface. Paste directly into a new conversation.

### 2.1 Hero Background Texture

**Prompt A — Abstract geometric network: [DONE]**
```
Create a wide abstract background image (1792x1024) for a personal website hero section. Dark background using colour #0a0a0a. Include subtle geometric shapes — interconnected nodes and thin lines forming a loose network pattern — using very low opacity (10-15%) in deep violet (#7C3AED) against the dark background. The overall feel should be: modern, cinematic, technical but not cold. No text. The image should work as a background behind large white text. Output as PNG with transparency where possible.
```

**Prompt B — Gradient mesh atmosphere: [DONE]**
```
Create a wide atmospheric background image (1792x1024) for a dark-mode website. Background colour #0a0a0a with subtle, soft gradient orbs in deep violet (#7C3AED) at very low opacity (8-12%), positioned off-centre to create depth and visual interest without competing with text overlay. Think: the subtle glow behind content on linear.app or stripe.com. Cinematic, minimal, premium. No text, no objects, just atmosphere. Output as PNG.
```

**Prompt C — Particle field: [DONE]**
```
Create a wide abstract background (1792x1024) with a deep black (#0a0a0a) base. Scatter tiny luminous dots across the image at varying sizes (1-3px) and opacities (5-30%), like distant stars or data points. Include 2-3 very subtle connecting lines between nearby dots, suggesting a network. Colours: off-white (#f5f5f5) dots with occasional hints of deep violet (#7C3AED). The effect should be barely-there — atmospheric, not busy. No text. PNG format.
```

### 2.2 About Section — Headshot Alternatives

**Prompt — Illustrated avatar (if choosing this route): [DONE]**
```
Create a minimalist illustrated portrait of a man in his 40s with short brown hair and a warm, confident expression. Style: clean vector illustration with limited colour palette — near-black background (#0a0a0a), the face and features rendered in muted, warm tones. Not cartoonish — more like a sophisticated editorial illustration. Should feel modern, approachable, and professional. Square format (1024x1024). Output as PNG with transparent background.
```

**Prompt — Abstract personal monogram: [DONE]**
```
Create a minimalist abstract monogram of the letter "V" for a personal website. Dark background (#0a0a0a), the letter rendered in off-white (#f5f5f5) with a subtle deep violet (#7C3AED) glow or accent. Style: geometric, modern, confident. Not a traditional serif monogram — something that feels like it belongs on a tech company's about page. Square format (1024x1024). Output as PNG with transparent background.
```

### 2.3 Timeline Entry Accent Graphics

**Prompt — The Beginning (BBC Micro / ZX Spectrum era): [DONE]**
```
Create a small abstract icon (512x512) representing early computing — inspired by pixel art and 8-bit aesthetics but rendered in a modern, minimal style. A few geometric shapes suggesting a retro computer or pixelated cursor. Colour: off-white (#f5f5f5) on a transparent background with subtle deep violet (#7C3AED) highlights. Clean, not nostalgic-kitsch. Output as PNG with transparent background.
```

**Prompt — CERT-UK / National Cyber Security: [DONE]**
```
Create a small abstract icon (512x512) representing cyber security and national infrastructure. A geometric shield shape with network/circuit-like internal patterns. Colour: off-white (#f5f5f5) on transparent background with subtle deep violet (#7C3AED) accents. Modern, minimal, authoritative. Not a literal padlock or shield emoji. Output as PNG with transparent background.
```

**Prompt — Openfire / Open Source: [DONE]**
```
Create a small abstract icon (512x512) representing open-source software collaboration. Interconnected nodes forming an open, decentralised pattern. Colour: off-white (#f5f5f5) on transparent background with subtle deep violet (#7C3AED) accents. Modern, minimal. Should feel like contribution, not corporate. Output as PNG with transparent background.
```

**Prompt — AI-Enhanced Engineering: [DONE]**
```
Create a small abstract icon (512x512) representing AI and human collaboration in software engineering. Abstract shapes suggesting both a neural network and human thought — perhaps overlapping geometric forms. Colour: off-white (#f5f5f5) on transparent background with subtle deep violet (#7C3AED) accents. Modern, minimal, forward-looking but grounded. Output as PNG with transparent background.
```

### 2.4 Expertise Section Icons

**Prompt — Building Systems That Last: [DONE]**
```
Create a minimal icon (256x256) representing durable software architecture. Abstract layered geometric shapes suggesting stability and structure — like a cross-section of well-organised building blocks. Off-white (#f5f5f5) on transparent background. Clean lines, no fills, modern. Output as PNG with transparent background.
```

**Prompt — Secure by Design: [DONE]**
```
Create a minimal icon (256x256) representing security as a design principle (not an afterthought). Abstract concentric shapes suggesting layers of protection integrated into a structure, not bolted on. Off-white (#f5f5f5) on transparent background. Modern, geometric. Output as PNG with transparent background.
```

**Prompt — AI-Augmented Engineering: [DONE]**
```
Create a minimal icon (256x256) representing AI-augmented software engineering. Abstract shapes suggesting amplification — a small input becoming a larger, more refined output. Not a robot or brain. Off-white (#f5f5f5) on transparent background. Modern, geometric. Output as PNG with transparent background.
```

**Prompt — Growing Engineers [DONE]:**
```
Create a minimal icon (256x256) representing mentoring and growing people. Abstract shapes suggesting growth, branching, or cultivation — organic but geometric. Off-white (#f5f5f5) on transparent background. Warm, not corporate. Output as PNG with transparent background.
```

### 2.5 Beyond the Code Icons

**Prompt — Karate: [DONE]**
```
Create a minimal abstract illustration (512x512) representing martial arts / karate. Not a literal figure or silhouette — something more abstract: perhaps the arc of a technique, the geometry of a kata, or intersecting lines suggesting discipline and movement. Off-white (#f5f5f5) on transparent background with optional deep violet (#7C3AED) accent. Modern, elegant. Output as PNG with transparent background.
```

**Prompt — Guitar & Music: [DONE]**
```
Create a minimal abstract illustration (512x512) representing guitar and music. Not a literal guitar shape — something more abstract: perhaps sound waves, harmonic patterns, or the geometry of a fretboard abstracted into lines. Off-white (#f5f5f5) on transparent background with optional deep violet (#7C3AED) accent. Modern, elegant. Output as PNG with transparent background.
```

**Prompt — Mentoring & Community: [DONE]**
```
Create a minimal abstract illustration (512x512) representing mentoring, community, and human connection. Abstract shapes suggesting support, growth, and collaboration — overlapping circles, branching paths, or connected forms. Off-white (#f5f5f5) on transparent background with optional deep violet (#7C3AED) accent. Warm, human, not corporate. Output as PNG with transparent background.
```

### 2.6 AI Engineering Page Header [DONE]

**Prompt:**
```
Create a wide atmospheric graphic (1792x1024) for the header of a dedicated AI Engineering page on a personal website. Dark background (#0a0a0a). Abstract visualisation suggesting the intersection of traditional software engineering principles and AI — perhaps overlapping geometric structures (representing established engineering) merging with more fluid, organic network patterns (representing AI). Very subtle, low opacity (10-20%), serving as a background behind white text. Colours: off-white traces with hints of deep violet (#7C3AED). Cinematic, thoughtful, not hype. Output as PNG.
```

### 2.7 Favicon [DONE]

**Prompt:**
```
Create a simple, bold favicon design (512x512) featuring the letter "V". Style: geometric, modern sans-serif. The V should be off-white (#f5f5f5) on a dark background (#0a0a0a), or off-white on transparent background. Consider a subtle design touch — a cut, a violet (#7C3AED) gradient, or single accent line — that makes it distinctive at 16x16px and 32x32px sizes. Must be legible at very small sizes. Output as PNG with transparent background.
```

### 2.8 Open Graph / Social Sharing Image [DONE]

**Prompt:**
```
Create a social sharing preview image (1200x630) for a personal website. Dark background (#0a0a0a). Large bold text in the centre reading "Viv." in off-white (#f5f5f5), with smaller text below: "Software engineer. Building things that matter." Subtle atmospheric background treatment — a very faint violet (#7C3AED) gradient mesh or geometric pattern at low opacity. The text should be the clear focus. Modern, cinematic, premium. Output as PNG.
```

---

## Section 3: Copy-Pasteable Prompts — Midjourney V7

Use these in the Midjourney web app or Discord with `/imagine`. Midjourney excels at atmospheric, cinematic quality — use it when artistic mood matters more than precise colour control.

### 3.1 Hero Background — Cinematic Atmosphere

**Prompt A — Dark gradient mesh:**
```
/imagine abstract dark atmospheric background, deep black base colour, subtle luminous gradient orbs in deep violet and dark purple, very low opacity, soft diffused light, no objects, no text, cinematic depth, premium website aesthetic #7C3AED --ar 16:9 --s 200 --chaos 5 --no blue, teal, amber, orange
```

**Prompt B — Geometric network on dark:**
```
/imagine dark abstract background, near-black base, delicate interconnected geometric lines and nodes forming a sparse network, glowing softly in deep violet, very subtle, atmospheric, minimalist, premium tech aesthetic, no text #7C3AED --ar 16:9 --s 150 --chaos 10 --no blue, teal, amber, orange
```

**Prompt C — Abstract light trails:**
```
/imagine abstract dark background, flowing light trails in muted violet and deep purple against deep black, long exposure photography aesthetic, cinematic, minimal, no objects no text, premium dark-mode website background #7C3AED --ar 16:9 --s 250 --chaos 15 --no blue, teal, amber, orange
```

### 3.2 Beyond the Code — Atmospheric Illustrations

**Prompt — Karate atmosphere:**
```
/imagine abstract minimalist representation of martial arts discipline, geometric arcs suggesting a karate technique, off-white lines on pure black background, single deep violet accent #7C3AED, elegant, modern, not literal, editorial illustration style --ar 1:1 --s 300
```

**Prompt — Guitar atmosphere:**
```
/imagine abstract minimalist representation of music and guitar, harmonic wave patterns and resonance visualised as geometric forms, off-white lines on pure black background, single deep violet accent #7C3AED, elegant, modern, editorial illustration style --ar 1:1 --s 300
```

### 3.3 Maintaining Visual Consistency

To keep Midjourney outputs visually consistent across your asset series:

1. Generate one image you like, then use its URL as `--sref` for all subsequent prompts:
   ```
   /imagine [your prompt] --sref [URL of the image you liked] --sw 100
   ```
2. Use `--sw` (style weight, 0-1000) to control how strongly the reference influences results. Start at 100 and adjust.
3. Keep `--stylize` consistent across prompts in a series.
4. If you need a specific object to recur, use `--oref` with `--ow` for omni reference.

---

## Section 4: Prompt Iteration Guidance

When the first attempt isn't right, use these strategies to refine.

### 4.1 ChatGPT / GPT-4o Iteration

GPT-4o's conversational nature makes iteration straightforward. After receiving a result:

**Colour adjustments:**
- "Make the background pure black (#0a0a0a), it's too dark grey"
- "The accent colour is too saturated — make it more muted, around 15% opacity"
- "Shift the purple tones darker — more #7C3AED, less lavender"

**Composition adjustments:**
- "Move the main visual element to the left third of the image"
- "Make the pattern sparser — too many elements, it's competing with text"
- "The overall effect is too busy — reduce by 50%"

**Style adjustments:**
- "This looks too corporate — make it feel more personal and warm"
- "Too illustrative — make it more abstract and geometric"
- "The lines are too thick — make them hairline-thin"

**Technical adjustments:**
- "Output as PNG with transparent background"
- "Make it wider — 1792x1024 landscape"
- "The edges need to fade to fully transparent so it blends with my dark background"

### 4.2 Midjourney V7 Iteration

**Using parameters:**
- Too artistic/interpreted? Lower `--stylize` (try `--s 50` for literal)
- Too uniform? Increase `--chaos` (try `--chaos 30`)
- Wrong mood? Add `--sref` with a reference image that has the right feel
- Need variations? Click the V1-V4 buttons below any generation

**Prompt refinement patterns:**
- Add "NOT [thing]" to exclude unwanted elements: `--no people, faces, text`
- Be more specific about what you want: replace "abstract" with "geometric network of thin interconnected lines"
- Add atmosphere words: "atmospheric", "cinematic", "diffused", "subtle"
- Specify what should dominate: "the background should be 90% dark with visual elements occupying only 10% of the space"

**Using the web editor:**
- Smart Select + Erase unwanted elements
- Paint to add elements to specific areas
- Export as PNG after using Erase (creates transparency)
- Use Layers for compositing multiple generations

### 4.3 General Principles for Dark-Mode Asset Iteration

1. **Test against your actual background.** Open the image in a browser with `background-color: #0a0a0a` and check it blends naturally.
2. **Check at multiple sizes.** An asset that looks good at 100% might reveal compression artefacts when scaled up.
3. **Test with text overlay.** Place your actual heading text (white, large, bold) over the image. If the image competes with the text, it's too busy.
4. **Check dark edges.** AI tools sometimes create visible edges where the dark of the image meets the dark of your background. Request "edges fading to fully transparent" or "seamless edge blend to #0a0a0a."
5. **Batch generate.** Generate 5-10 variations and pick the best, rather than iterating one image endlessly. This is especially efficient in Midjourney with the V1-V4 variation buttons.

---

## Section 5: The Headshot / Avatar Question

The About section is three paragraphs of first-person narrative. A visual element alongside it could add warmth and personality, but the wrong choice could undermine the tone. Here are the options, ranked by recommendation.

### Option A: Professional Photo (Recommended)

**Pros:** Authentic, personal, builds trust. Nothing communicates "real person" like a real face. The implementation plan notes "A good headshot would elevate the About section considerably."

**Cons:** Requires a good photo that matches the site's aesthetic. A brightly-lit corporate headshot would feel wrong against #0a0a0a.

**How to make it work:**
- Commission or take a high-quality headshot with natural lighting
- Edit to match the dark palette: desaturate slightly, reduce brightness, add subtle vignette
- Consider a duotone treatment (like Spotify Wrapped portraits) using deep violet (#7C3AED)
- Display as a circular or rounded-rectangle crop with a subtle border or glow

**AI assistance for photo editing (paste into ChatGPT with your photo):**
```
Take this headshot photo and edit it to match a dark-mode website aesthetic. Apply a subtle desaturation, reduce overall brightness, add a gentle vignette darkening the edges. The photo should look natural but feel at home against a #0a0a0a background. Keep the face well-lit and warm. Output as PNG.
```

### Option B: AI-Generated Illustrated Portrait

**Pros:** Distinctive, matches the site aesthetic perfectly, no photography needed. Bridges the gap between "no image" and "corporate headshot."

**Cons:** Can feel impersonal or uncanny. People may wonder why you didn't use a real photo.

**Use if:** You don't have a suitable photo and don't want to arrange one.

See Section 2.2 for the GPT-4o prompt. For Midjourney:
```
/imagine minimalist illustrated portrait, man in his 40s, short brown hair, warm confident expression, editorial illustration style, limited colour palette, near-black background, muted warm tones, sophisticated not cartoonish, modern --ar 1:1 --s 400
```

### Option C: Abstract Monogram or Mark

**Pros:** Distinctive, works perfectly with the dark aesthetic, avoids the "photo or not" question entirely. A bold "V" monogram could become a site-wide brand element (favicon, OG image, watermark).

**Cons:** Less personal than a photo. The About section is intimate first-person writing — an abstract mark may feel disconnected.

**Use if:** You want the visual identity to be abstract rather than personal, or as a complement to the photo (favicon + OG image use the monogram, About section uses the photo).

See Section 2.2 for the GPT-4o prompt.

### Option D: No Visual

**Pros:** The writing stands on its own. Paco Coursey's paco.me proves text-only About sections work beautifully with the right typography.

**Cons:** Misses an opportunity to add warmth and personality. The About section may feel sparse alongside the cinematic Tier 1 timeline entries.

**Use if:** The typography and layout are strong enough that adding an image would be a distraction.

### Recommendation

**Use a real photo (Option A)** for the About section, treated to match the dark palette. Use the **abstract monogram (Option C)** for the favicon and OG image. This gives you authenticity where it matters most (the About section) and a clean brand mark everywhere else.

---

## Section 6: Programmatic Visuals — SVG Patterns, Generative Art, and Backgrounds

For repeating patterns, section backgrounds, and animated effects, programmatic approaches are superior to AI-generated raster images: smaller file sizes, perfect scalability, runtime customisation, and seamless tiling.

### 6.1 Hero Background Options

**Option A — CSS Layered Gradients (Simplest, Most Performant)**

```css
.hero-bg {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.10) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(124, 58, 237, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(139, 92, 246, 0.04) 0%, transparent 40%),
    #0a0a0a;
}
```

Zero JavaScript, zero additional requests. Animate with GSAP by tweening `background-position` or `background-size`. Inspired by Apple's layered gradient approach.

**Option B — WebGL Mesh Gradient (Premium, Stripe-Inspired)**

Stripe's animated mesh gradient uses a ~10kb WebGL implementation with 3-layer Simplex noise, optimised for 60 FPS on mobile. Open-source recreations to study and adapt:

- [Whatamesh by Bramus Van Damme](https://codepen.io/bramus/pen/XWaMqJw)
- [gradient-stripe on GitHub](https://github.com/exzenter/gradient-stripe)
- [Stripe Mesh Gradient WebGL gist](https://gist.github.com/jordienr/64bcf75f8b08641f205bd6a1a0d4ce1d)
- [Alex Harri: A Flowing WebGL Gradient, Deconstructed](https://alexharri.com/blog/webgl-gradients)

Pass your colour palette as shader uniforms. The beauty comes from layering multiple noise functions at different frequencies and blending between slowly-evolving colour values.

**Option C — Canvas Particle Field**

A sparse field of tiny luminous dots with occasional connecting lines. Animated with `requestAnimationFrame`. Consider `OffscreenCanvas` for worker-thread rendering if performance is a concern.

**Recommendation:** Start with Option A during development (instant, no dependencies). Explore Option B during the design exploration phase (Session 0.4 or Phase 2) if the CSS approach feels too flat.

### 6.2 Film Grain Overlay

A subtle grain texture adds warmth to flat dark backgrounds. Implement with an SVG filter applied to a full-viewport overlay:

```svg
<svg class="grain-overlay" width="100%" height="100%">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
  <rect width="100%" height="100%" filter="url(#grain)" opacity="0.04" />
</svg>
```

Apply at 3-5% opacity. No JavaScript, no image request, scales to any viewport. Test on mobile for performance — SVG filters can be heavy; reduce `numOctaves` if needed.

### 6.3 Timeline Visual Elements

**Timeline spine:** A thin vertical SVG `<line>` or CSS pseudo-element with a gradient that fades at top and bottom.

**Entry nodes:** SVG `<circle>` elements with a CSS glow:
```css
.timeline-node {
  fill: var(--accent-colour);
  filter: drop-shadow(0 0 6px var(--accent-colour));
}
.timeline-node--active {
  filter: drop-shadow(0 0 12px var(--accent-colour));
}
```

**Era colour temperatures:** CSS custom properties transitioned by GSAP as the user scrolls through different career periods:
```css
:root {
  --era-colour: rgba(124, 58, 237, 0.05); /* faint violet for early career */
}
/* Later entries increase opacity — higher saturation reads warmer */
```

### 6.4 Section Dividers

Rather than hard borders between sections, use gradient fades:

```css
.section-divider {
  height: 200px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255, 255, 255, 0.02) 50%,
    transparent 100%
  );
}
```

Or an SVG wave/curve for more visual interest — generate with [fffuel's SVG wave generator](https://www.fffuel.co/sssvg/) or [SVG Backgrounds](https://www.svgbackgrounds.com/).

### 6.5 Repeating Patterns (If Needed)

For any areas needing subtle repeating textures:

**SVG pattern generators for prototyping:**
- [Hero Patterns](https://heropatterns.com/) — free repeatable SVG backgrounds
- [Pattern Monster](https://pattern.monster) — SVG pattern generator
- [fffuel](https://www.fffuel.co/) — SVG generators for patterns, gradients, grain textures

**Programmatic libraries (if generator output needs customisation):**
- **SVG.js** (svgjs.dev) — lightweight library for creating/manipulating SVG. Good for generating patterns at build time via Node.js or at runtime in the browser.
- **Paper.js** (paperjs.org) — full-featured vector graphics scripting. Supports gradients, clipping, complex path operations. Can export entire projects as SVG.
- **Pure SVG `<pattern>` element** — no library required. Use `patternUnits` and `patternContentUnits` for seamless tiling. Smallest file size, best performance.

**Best practices:**
- Very low opacity (5-15%) against #0a0a0a
- CSS custom properties for runtime theme customisation
- Test tiling at multiple viewport sizes
- Keep patterns subtle — texture, not decoration

### 6.6 How Linear, Apple, and Stripe Do It

| Site | Technique | Complexity |
|------|-----------|------------|
| **Stripe** | WebGL with custom fragment shaders, 3-layer Simplex noise, ~10kb implementation | High |
| **Apple** | Layered CSS radial/conic gradients + pre-rendered video/image backgrounds + SVG grain + CSS blend modes | Medium |
| **Linear** | CSS gradient backgrounds animated with `background-position` + canvas line/grid animations + `backdrop-filter: blur()` for glassmorphism | Medium |

For viv.me.uk, the Apple approach (layered CSS gradients + SVG grain overlay) offers the best balance of visual quality, performance, and implementation simplicity. Upgrade to the Stripe approach (WebGL mesh gradient) during polish if the CSS version feels too static.

### 6.7 Performance Priority Order

1. **CSS gradients** — zero JS, instant rendering, smallest footprint
2. **SVG patterns and filters** — minimal overhead, scales perfectly
3. **Canvas / WebGL** — GPU-accelerated but requires JavaScript
4. **AI-generated raster images** — largest file size; optimise with WebP/AVIF, use sparingly

---

## Section 7: Asset Production Workflow

### 7.1 Recommended Order of Operations

1. **Build the site structure first** (Phases 1-2) with CSS gradient placeholders for all visual elements
2. **Generate AI assets during Phase 2** (Design Exploration), once you can see them in context against real content
3. **Replace placeholders iteratively** — test each asset against the live site at multiple breakpoints
4. **Optimise assets last** (Phase 4) — convert to WebP/AVIF, lazy-load below-fold images, audit with Lighthouse

### 7.2 File Organisation

```
src/assets/
├── images/
│   ├── hero/           # Hero background variants
│   ├── timeline/       # Timeline entry accent graphics
│   ├── icons/          # Expertise and Beyond the Code icons
│   ├── ai-engineering/ # AI Engineering page graphics
│   └── meta/           # Favicon, OG image
├── svg/
│   ├── patterns/       # Reusable SVG patterns
│   ├── icons/          # Social icons, UI icons
│   └── filters/        # Grain overlay, effects
└── fonts/              # Web fonts
```

### 7.3 Image Optimisation Checklist

- [ ] Convert all raster images to WebP (with PNG fallback for transparency where needed)
- [ ] Serve appropriate sizes via `<picture>` + `srcset` for responsive images
- [ ] Lazy-load all images below the fold (`loading="lazy"`)
- [ ] Set explicit `width` and `height` attributes to prevent layout shift
- [ ] Compress SVGs with SVGO
- [ ] Audit total image weight — target under 500KB for initial page load

---

## Section 8: Prompt Variations — When the Direction Isn't Certain

For assets where the aesthetic isn't decided, generate multiple variations to compare in context.

### Hero Background — Three Directions

| Direction | GPT-4o Prompt | Midjourney Prompt |
|-----------|---------------|-------------------|
| **Geometric** | "Abstract geometric network on #0a0a0a, thin interconnected lines and nodes, very low opacity (10%), off-white traces, sparse, modern. Wide 1792x1024. PNG." | `/imagine sparse geometric network, thin luminous lines connecting nodes, deep black background, very subtle, minimalist tech aesthetic --ar 16:9 --s 100 --no text` |
| **Atmospheric** | "Soft gradient orbs on #0a0a0a background, deep violet (#7C3AED) at 8-12% opacity, positioned off-centre, creating depth. No objects, no text. Wide 1792x1024. PNG." | `/imagine dark atmospheric gradient, luminous soft orbs in deep violet and dark purple, extremely subtle against black, cinematic depth, no objects #7C3AED --ar 16:9 --s 200 --no blue, teal, amber` |
| **Minimal** | "Pure dark background #0a0a0a with a single very subtle radial gradient in deep violet (#7C3AED) centred slightly off to the right, maximum 5% opacity at the brightest point. Nothing else. Wide 1792x1024. PNG." | `/imagine pure minimal dark background, single deep violet gradient orb barely visible against black, extreme subtlety, premium, nothing else #7C3AED --ar 16:9 --s 50 --no blue, teal, amber` |

### Beyond the Code Icons — Two Styles

| Style | Description | GPT-4o Prompt Modifier |
|-------|-------------|----------------------|
| **Geometric line art** | Clean, precise, architectural | Add: "Style: geometric line art, uniform stroke weight, no fills, precise angles" |
| **Organic abstract** | Warmer, more fluid, human | Add: "Style: organic abstract forms, flowing curves, hand-drawn feel but clean execution" |

Generate both styles for one item (e.g. the karate icon), compare them in context against the dark background and alongside the narrative text, then apply the chosen style to all three Beyond the Code items for consistency.

---


--- 
## Additional Images

---
Experience Timeline Entry Accents

Cardiff University — "Learning to think in systems"

Create a small abstract icon (512x512) representing formal computer science education and systems thinking. Geometric shapes suggesting structured, interconnected systems — perhaps a tree-like structure or layered graph nodes arranged with deliberate hierarchy, evoking algorithms and data structures
rendered as visual form. Colour: off-white (#f5f5f5) on transparent background with subtle deep violet (#7C3AED) highlights. Clean, academic in feel but modern, not institutional. Output as PNG with transparent background.

Tracesmart — "Great software starts with great practices"

Create a small abstract icon (512x512) representing building strong engineering foundations and culture from the ground up. Geometric shapes suggesting layers being assembled — structured ascending forms like building blocks or stacked planes gaining complexity and order as they rise. Evokes
transformation: from disorganised to disciplined, from fragile to solid. Colour: off-white (#f5f5f5) on transparent background with subtle deep violet (#7C3AED) highlights. Modern, minimal, constructive. Output as PNG with transparent background.

Threatvine — "Technical authority for national infrastructure"

Create a small abstract icon (512x512) representing technical authority over a national-scale cyber security platform. A structured network of interconnected nodes suggesting both scale and governance — authoritative, deliberate, not chaotic. The pattern should feel like infrastructure: purposeful
connections, hierarchical but distributed. More commanding and structured than a simple network diagram. Colour: off-white (#f5f5f5) on transparent background with subtle deep violet (#7C3AED) accents. Modern, minimal, authoritative. Output as PNG with transparent background.

Remote Working — "Before it was normal"

Create a small abstract icon (512x512) representing remote collaboration and distributed teams built on trust. Abstract nodes or points connected by lines spanning deliberate distance — the connections should feel intentional and warm rather than cold or technical. Suggests human connection
maintained across space: communication lines reaching outward, bridging gaps. Colour: off-white (#f5f5f5) on transparent background with subtle deep violet (#7C3AED) accents. Modern, minimal, human. Output as PNG with transparent background.

  ---
Beyond the Code

Mountain Biking & Active Life

Create a minimal abstract illustration (512x512) representing mountain biking and outdoor adventure. Not a literal bicycle — something more abstract: perhaps dynamic flowing lines suggesting a trail cutting through terrain, or angular geometric forms evoking speed, elevation, and the contours of
hillside paths. Suggests movement, energy, and the outdoors. Off-white (#f5f5f5) on transparent background with optional deep violet (#7C3AED) accent. Modern, elegant. Output as PNG with transparent background.

Smart Home & IoT

Create a minimal abstract illustration (512x512) representing smart home technology and IoT tinkering. Not a literal house — something more abstract: perhaps interconnected geometric nodes forming a mesh or constellation pattern suggesting devices communicating via protocols, with a subtle sense of
domestic scale rather than industrial. Evokes the intersection of engineering curiosity and home life. Off-white (#f5f5f5) on transparent background with optional deep violet (#7C3AED) accent. Modern, elegant. Output as PNG with transparent background.

Cooking

Create a minimal abstract illustration (512x512) representing cooking as a creative craft. Not literal kitchen implements — something more abstract: perhaps flowing geometric forms suggesting transformation, composition, or layered elements coming together. Evokes the artistry of preparation and the
satisfaction of creating something from raw ingredients. Off-white (#f5f5f5) on transparent background with optional deep violet (#7C3AED) accent. Modern, elegant, warm. Output as PNG with transparent background.

  ---
All prompts follow the established pattern: 512x512, off-white (#f5f5f5) on transparent, subtle violet (#7C3AED) accents, abstract/geometric rather than literal, PNG output. They should sit comfortably alongside the existing beginning, national_cyber, open_source, ai_human_collab, karate, and
guitar-music images.

---

## Sources & Tools

### AI Image Generation
- [OpenAI: Introducing 4o Image Generation](https://openai.com/index/introducing-4o-image-generation/)
- [ChatGPT Image Generation Capabilities](https://www.datastudios.org/post/chatgpt-image-generation-capabilities-styles-dimensions-editing-and-api-access-with-gpt-4o)
- [Midjourney Version Documentation](https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version)
- [Midjourney Parameter List](https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List)
- [Midjourney V7 vs V6 Features](https://www.imaginepro.ai/blog/2025/7/midjourney-v7-vs-v6-features)
- [Getting Specific Colours in Midjourney V7](https://www.cometapi.com/how-to-get-specific-colors-in-midjourney-v7/)
- [Microsoft Designer Review](https://www.allaboutai.com/ai-reviews/microsoft-designer/)
- [Google: Gemini 2.5 Flash Image](https://developers.googleblog.com/introducing-gemini-2-5-flash-image/)

### SVG Patterns & Generators
- [Hero Patterns](https://heropatterns.com/)
- [Pattern Monster](https://pattern.monster)
- [fffuel SVG Generators](https://www.fffuel.co/)
- [SVG Backgrounds](https://www.svgbackgrounds.com/)

### Background Techniques
- [Alex Harri: A Flowing WebGL Gradient, Deconstructed](https://alexharri.com/blog/webgl-gradients)
- [Stripe Mesh Gradient WebGL Gist](https://gist.github.com/jordienr/64bcf75f8b08641f205bd6a1a0d4ce1d)
- [How to Create the Stripe Gradient Effect](https://kevinhufnagl.com/how-to-stripe-website-gradient-effect/)
- [gradient-stripe on GitHub](https://github.com/exzenter/gradient-stripe)
- [Frontend Horse: The Linear Look](https://frontend.horse/articles/the-linear-look/)

### Generative Art
- [Generative Art with JavaScript and SVG (Book)](https://davidmatthew.ie/generative-art-javascript-svg/)
- [A Generative SVG Starter Kit (DEV)](https://dev.to/georgedoescode/a-generative-svg-starter-kit-5cm1)
- [CSS Paint API Patterns (CSS-Tricks)](https://css-tricks.com/creating-generative-patterns-with-the-css-paint-api/)
