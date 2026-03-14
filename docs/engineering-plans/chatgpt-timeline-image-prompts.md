---
generated_by: Claude Opus 4.6
generation_date: 2026-02-17
model_version: claude-opus-4-6
purpose: image_generation_prompts
status: complete
human_reviewer: matthewvivian
tags: [imagery, timeline, chatgpt, dall-e, dark-mode, light-mode]
---

# ChatGPT Image Generation Prompts — Timeline Entry Accents

Prompts for generating accent images for timeline entries that currently lack imagery. These images appear as small accent illustrations (displayed at 96x96px) alongside timeline entries on viv.me.uk.

## Visual Style Guide

Based on the existing timeline accent images, the established style has these characteristics:

**General:**
- **Source size:** 512x512 square (displayed at 96x96 on the site, so must read clearly when small)
- **Format:** PNG with transparent background
- **Colour palette:** Limited to 2-3 colours — no gradients or complex shading
- **Style:** Modern icon illustration — clean, conceptual, recognisable at a glance. Not purely abstract; each image should clearly relate to its theme
- **Complexity:** Simple enough to read at thumbnail size. Bold shapes, not fine detail

**Dark mode** (sits on dark background ~`#0a0e1a`):
- Main elements in off-white/light grey (`#e8e8e8` to `#f5f5f5`)
- Accent highlights in slate violet (`#8D7FD2`)
- Transparent background

**Light mode** (sits on light background ~`#f8f8fa`):
- Main elements in dark charcoal/grey (`#3a3a3a` to `#4a4a4a`)
- Accent highlights in deep violet (`#4633A3`)
- Transparent background
- Same composition as the dark variant, essentially a colour inversion

**Existing image styles for reference:**
- `beginning.png` — Pixel-art retro computer. Light body, violet outlines and accents
- `university_underpinnings.png` — Hierarchy tree with code symbols, gear, monitor. Flat icon style
- `tracesmart_foundations.png` — Isometric stacked blocks/pyramid with violet accent layer
- `national_cyber.png` — Shield filled with infrastructure icons (bridge, buildings, network). Bold, solid violet
- `cyber_platform.png` — Network diagram with shield/lock centre, government building, connected nodes
- `open_source.png` — Connected nodes forming an open network. Simple, clean
- `ai_human_collab_3.png` — Overlapping human/AI heads with gears and code symbols
- `remote_collab.png` — People icons connected by flowing violet lines with sparkle elements

> **Note:** The original imagery strategy document (docs/research/imagery-strategy.md) referenced `#7C3AED` as the accent colour. The project palette has since shifted to slate violet (`#8D7FD2` dark / `#4633A3` light). The prompts below use the current palette. ChatGPT interprets hex colours approximately, so some iteration may be needed.

## File Naming Convention

- Dark variant: `src/assets/timeline/{name}.png`
- Light variant: `src/assets/timeline/{name}-light.png`
- Use underscores in filenames, lowercase only
- After generating, add `image: "{name}"` to the entry's frontmatter in `src/content/timeline/`

---

## Entries Needing Both Dark and Light Images

### 1. Glamorgan & Qualtech — A Broad Start (2001-2003)

**Filename:** `glamorgan_qualtech`
**Theme:** First professional role. E-learning infrastructure. Huge autonomy. Gap between university theory and production reality.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing a first professional role in e-learning technology. Show a simplified computer monitor displaying a graduation cap or learning symbol, with a few geometric elements around it suggesting a broad, varied workload — perhaps a small gear, a network node, and a document icon arranged around the monitor. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing a first professional role in e-learning technology. Show a simplified computer monitor displaying a graduation cap or learning symbol, with a few geometric elements around it suggesting a broad, varied workload — perhaps a small gear, a network node, and a document icon arranged around the monitor. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 2. Freelance Consulting (2003-2006)

**Filename:** `freelance_consulting`
**Theme:** Solo consulting. Stock management systems, vision system data capture. Scoping, estimating, managing expectations. Every problem is yours to solve.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing freelance software consulting and independence. Show a single person silhouette or abstract figure at the centre of radiating connection lines or project elements — suggesting one person handling many responsibilities. Include subtle elements like a small code bracket and a handshake or contract symbol. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing freelance software consulting and independence. Show a single person silhouette or abstract figure at the centre of radiating connection lines or project elements — suggesting one person handling many responsibilities. Include subtle elements like a small code bracket and a handshake or contract symbol. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 3. Hargreaves Lansdown — Building Through the IPO (2006-2008)

**Filename:** `hargreaves_lansdown`
**Theme:** Financial services. Building during the company's IPO on the London Stock Exchange. FTSE 250 listing. Reliability under pressure. Discipline, testing, monitoring.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing building reliable software for a financial services company during its stock market flotation. Show a simplified upward-trending chart or graph combined with a stable, structured building/platform shape — suggesting growth built on solid foundations. Perhaps include a small shield or checkmark suggesting reliability. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing building reliable software for a financial services company during its stock market flotation. Show a simplified upward-trending chart or graph combined with a stable, structured building/platform shape — suggesting growth built on solid foundations. Perhaps include a small shield or checkmark suggesting reliability. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 4. BaseKit — Sharing What You've Learned (2011-2012)

**Filename:** `basekit_knowledge`
**Theme:** Startup. Knowledge transfer and mentoring. REST, OAuth, testing, Scrum, Continuous Delivery. Sharing practices that are transformative for teams encountering them for the first time.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing knowledge transfer and mentoring within a software team. Show an abstract scene of knowledge flowing from one figure to a group — perhaps a person shape with radiating arrows or light beams reaching 2-3 smaller figures, or an open book with connecting lines spreading outward to code symbols. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing knowledge transfer and mentoring within a software team. Show an abstract scene of knowledge flowing from one figure to a group — perhaps a person shape with radiating arrows or light beams reaching 2-3 smaller figures, or an open book with connecting lines spreading outward to code symbols. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 5. Thrupoint — Mobile and Telecommunications (2012-2013)

**Filename:** `thrupoint_mobile`
**Theme:** Mobile development (iOS, Android, BlackBerry). Corporate IP phones. Completely different domain. First principles transfer across domains.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing mobile software development and telecommunications. Show a simplified smartphone shape with signal waves or connection lines emanating from it, combined with a small telephone/SIP handset icon — suggesting mobile devices functioning as corporate phones. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing mobile software development and telecommunications. Show a simplified smartphone shape with signal waves or connection lines emanating from it, combined with a small telephone/SIP handset icon — suggesting mobile devices functioning as corporate phones. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 6. Crossing Domains — When Networks Can't Be Trusted (Various) 

**Filename:** `crossing_domains`
**Theme:** Cross-domain security. Systems communicating across security boundaries on untrusted networks. Rethinking trust at every layer. Gateways, diodes, HSMs.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing cross-domain security engineering — systems communicating across trust boundaries. Show two distinct zones or domains (perhaps represented as rounded rectangles or shield shapes, one subtle red and the other subtle blue) separated by a clear boundary, with a controlled gateway or bridge element between them. Include a small lock or verification symbol on the crossing point. The design should convey controlled, deliberate communication — not open flow. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2) and deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**

```
Create a small icon illustration (512x512 pixels) representing cross-domain security engineering — systems communicating across trust boundaries. Show two distinct zones or domains (perhaps represented as rounded rectangles or shield shapes) separated by a clear boundary, with a controlled gateway or bridge element between them. Include a small lock or verification symbol on the crossing point. The design should convey controlled, deliberate communication — not open flow. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---


### 7. Stabilising Systems Under Pressure (Various)

**Filename:** `stabilising_systems`
**Theme:** Called upon to assess and stabilise a failing XMPP chat system. Diagnosing root cause. Removing workarounds. Proper fix at the right abstraction level. Stability within 30 days.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing stabilising a failing software system through careful diagnosis. Show a visual metaphor of bringing order from chaos — perhaps a jagged, unstable waveform or heartbeat line on the left transforming into a smooth, steady signal on the right, with a wrench or diagnostic tool symbol at the transition point. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2) and deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing stabilising a failing software system through careful diagnosis. Show a visual metaphor of bringing order from chaos — perhaps a jagged, unstable waveform or heartbeat line on the left transforming into a smooth, steady signal on the right, with a wrench or diagnostic tool symbol at the transition point. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---



### 8. Building and Growing Teams (Throughout career)

**Filename:** `building_teams`
**Theme:** Leading and growing teams. Hiring processes. 360-degree feedback, 1:1s, CPD programmes. Mentoring apprentices. Work experience. Mental health support. The thread: helping people grow.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing building and growing engineering teams — investing in people. Show a group of person silhouettes arranged to suggest growth: perhaps 3-4 figures of increasing size or stature, or figures arranged with upward-growing plant/branch elements intertwined, suggesting cultivation and development. The feeling should be warm and human, not corporate. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing building and growing engineering teams — investing in people. Show a group of person silhouettes arranged to suggest growth: perhaps 3-4 figures of increasing size or stature, or figures arranged with upward-growing plant/branch elements intertwined, suggesting cultivation and development. The feeling should be warm and human, not corporate. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 9. Infrastructure as Code & Platform Engineering (Various)

**Filename:** `infrastructure_as_code`
**Theme:** Manual deployments transformed into automated infrastructure. Air-gapped Kubernetes clusters. 40+ manual steps to under 10. YugabyteDB distributed deployment. Chaos engineering. If your deployment depends on knowledge not code, it's a liability.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing infrastructure as code and platform engineering. Show a simplified server or container stack with code brackets ({}) or a document icon overlaid, connected to cloud or cluster symbols — suggesting infrastructure defined and managed through code. Perhaps include a small gear/automation symbol. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing infrastructure as code and platform engineering. Show a simplified server or container stack with code brackets ({}) or a document icon overlaid, connected to cloud or cluster symbols — suggesting infrastructure defined and managed through code. Perhaps include a small gear/automation symbol. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 10. Security as a Design Decision (Various)

**Filename:** `security_by_design`
**Theme:** Primary contact for security assessors. Tooling bridging developers and SOC analysts. R&D into browser-based end-to-end encryption. Security as communication: translating technical risk into business decisions.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing security as an integral design decision rather than an afterthought. Show a shield shape that is woven into or emerges from a blueprint/architectural diagram — not bolted on top, but part of the structure itself. Include subtle elements like a small lock integrated into the design lines. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing security as an integral design decision rather than an afterthought. Show a shield shape that is woven into or emerges from a blueprint/architectural diagram — not bolted on top, but part of the structure itself. Include subtle elements like a small lock integrated into the design lines. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

### 11. Working at the Edges of Organisations (Various)

**Filename:** `working_at_edges`
**Theme:** Work between companies. RFPs, requirements extraction, scope estimation, roadmaps. NCA advisory on threat assessments. The most valuable contribution is often not writing code — it's making sure the right thing gets built.

**Dark mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing working at the boundaries between organisations — bridging the gap between business and engineering. Show two or three overlapping organisational shapes (rounded rectangles or circles representing different companies) with a figure or connector element at their intersection point, suggesting someone who operates at the edges where organisations meet. Include a subtle document or compass symbol. Style: clean, modern icon illustration with minimal detail. Main elements in off-white (#e8e8e8) with accent highlights in muted violet (#8D7FD2). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) representing working at the boundaries between organisations — bridging the gap between business and engineering. Show two or three overlapping organisational shapes (rounded rectangles or circles representing different companies) with a figure or connector element at their intersection point, suggesting someone who operates at the edges where organisations meet. Include a subtle document or compass symbol. Style: clean, modern icon illustration with minimal detail. Main elements in dark charcoal (#3a3a3a) with accent highlights in deep violet (#4633A3). Transparent background. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---



DONE ALL ABOVE




## Entry Needing Light Variant Only

### CERT-UK & the Birth of National Cyber Security (2013-2015)

**Existing dark image:** `national_cyber.png` — A bold violet shield containing national infrastructure icons (bridge, factory, power lines, network nodes, signal tower). Solid violet (#8D7FD2 range) with white internal detail.

**Filename for light variant:** `national_cyber-light`

**Light mode prompt:**
```
Create a small icon illustration (512x512 pixels) that is a light-mode variant of a national cyber security shield icon. The design is a shield shape filled with national infrastructure icons: a bridge, a factory/building with smokestacks, power/transmission lines, network connection nodes with circuit-like paths, and a signal tower with radio waves. The existing dark-mode version uses solid violet on a transparent background with white internal lines. For this light-mode version: render the shield outline and all internal infrastructure icons in dark charcoal (#3a3a3a) with accent elements in deep violet (#4633A3). Transparent background. The shield should feel bold and authoritative. Must be recognisable at very small sizes (96x96 display). Output as PNG with transparent background.
```

---

## Adding Images to the Site

Once images are generated and saved:

1. **Save the files** to `src/assets/timeline/` using the filenames specified above
   - Dark variant: `{name}.png`
   - Light variant: `{name}-light.png`

2. **Add the `image` field** to each timeline entry's frontmatter in `src/content/timeline/`:
   ```yaml
   ---
   title: "Entry Title"
   year: "2001 – 2003"
   headline: "..."
   tier: 2
   order: 9
   image: "glamorgan_qualtech"    # <-- add this line (no extension, no path)
   techFootnote: "..."
   ---
   ```

3. **Verify** that the Timeline component picks up both dark and light variants automatically (it loads `{image}.png` and `{image}-light.png` based on the current theme).

## Iteration Tips

- **Test at actual display size.** These images render at 96x96px — zoom out or resize to check they read clearly at that scale.
- **Dark/light consistency.** Generate both variants in the same ChatGPT conversation so you can say "now create the light mode version of the same image with dark charcoal elements instead of white."
- **Style consistency.** If the first image looks good, share it with ChatGPT and say "use this exact style for the next image" to maintain visual cohesion across the set.
- **Batch by theme.** Generate related entries together (e.g. all the security-themed ones) for tighter visual consistency within clusters.
- **Simplify aggressively.** If ChatGPT generates something too detailed, say "simplify this — it needs to be readable at 96 pixels. Fewer elements, bolder shapes."
