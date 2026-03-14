---
generated_by: Claude Opus 4.6
generation_date: 2026-02-15
model_version: claude-opus-4-6
purpose: information_architecture_review
status: draft
human_reviewer: matthewvivian
tags: [information-architecture, ux, navigation, content-strategy, portfolio]
---

# Information Architecture Review — viv.me.uk

## Executive Summary

The site is a well-structured single-page portfolio with thoughtful secondary pages. The information architecture is strong in its core narrative flow and content model, but has several areas where navigation clarity, content discoverability, and structural consistency could be improved.

**Key strengths:** The section flow tells a coherent professional story. The two-tier timeline is an excellent pattern for balancing depth with pacing. Content collections are well-modelled. The tone is consistent and authentic.

**Key issues:** Navigation labels don't fully match section content. The "AI Engineering" page is oddly positioned (three access routes but unclear primary path). Variation/test pages are exposed in navigation and sitemap. The relationship between main page sections and secondary pages could be more discoverable. There is no dedicated "About" navigation entry despite it being the first content section.

---

## Current Site Structure

### Site Map

```
viv.me.uk/
|
+-- / (index.astro) .................... Main single-page experience
|   |-- #about ......................... Hero + About (combined section)
|   |-- #expertise ..................... What I Do (4 theme cards)
|   |-- #experience .................... Experience Timeline (8 Tier 1 + 11 Tier 2)
|   |-- #open-source ................... Work in the Open (2 repo cards)
|   |-- #beyond ....................... Beyond the Code (5 interest cards)
|   `-- #contact ....................... Footer (GitHub + LinkedIn)
|
+-- /ai-engineering .................... Dedicated AI Engineering page
+-- /life .............................. Beyond the Code (expanded)
+-- /notes/ ............................ Engineering Notes index
|   +-- /notes/{slug} .................. Individual note pages
|   `-- /notes/rss.xml ................. RSS feed
|
+-- /variations ........................ [TEST] Design variations hub
+-- /hero-test-3 ....................... [TEST] Hero layout test
+-- /hero-test-3a ...................... [TEST] Hero layout test
+-- /hero-test-3b ...................... [TEST] Hero layout test
+-- /hero-bg-variations ................ [TEST] Hero background tests
+-- /colour-variations ................. [TEST] Colour palette tests
+-- /violet-variations ................. [TEST] Violet tone tests
+-- /expertise-variations .............. [TEST] Expertise layout tests
+-- /beyond-variations ................. [TEST] Beyond the Code layout tests
|
+-- /sitemap-index.xml ................. Auto-generated sitemap
`-- /robots.txt ........................ Crawl directives
```

### Navigation Structure

**Desktop nav (left to right):**
About | Expertise | Experience | Open Source | Beyond the Code | Notes | Variations | Contact | [Theme Toggle]

**Mobile nav (overlay, top to bottom):**
Same order as desktop.

---

## Section Flow Analysis

### Current Main Page Order

| # | Section | ID | Content |
|---|---------|-----|---------|
| 1 | Hero + About | `#about` | Name, avatar, subtitle, three about paragraphs |
| 2 | What I Do | `#expertise` | Four expertise theme cards |
| 3 | Experience | `#experience` | Timeline with Tier 1/Tier 2 toggle |
| 4 | Work in the Open | `#open-source` | Two GitHub repo highlight cards |
| 5 | Beyond the Code | `#beyond` | Five personal interest cards |
| 6 | Contact/Footer | `#contact` | GitHub + LinkedIn links |

### Assessment

The current flow follows the pattern: **Who am I** > **What I do** > **Where I've done it** > **Public work** > **Personal life** > **Get in touch**. This is a logical narrative progression that works well for most visitor types.

**What works:**
- Leading with identity and expertise before the detailed timeline is smart. Visitors understand the "what" before getting the "how I got here".
- The two-tier timeline is an excellent information architecture decision. It lets casual visitors get the highlights without being overwhelmed, whilst offering depth for those who want it.
- Placing "Beyond the Code" near the end creates a natural wind-down after the professional content, making the person feel more approachable before the contact section.

**What could be better:**

1. **Expertise before Experience may not serve recruiters well.** Recruiters often scan for chronological experience first, then assess skills. The current order prioritises narrative flow over recruiter scanning. However, for a senior engineer's site, the narrative approach is arguably more appropriate than a CV-style layout. This is a defensible choice.

2. **"Work in the Open" sits awkwardly between Experience and Beyond the Code.** It's essentially part of the professional story (open source contributions) but positioned after the main career timeline. It could feel like an afterthought. Consider whether it belongs:
   - As part of the Experience section (it's professional work)
   - As part of Expertise (it demonstrates skills)
   - Where it is now (acts as a bridge between professional and personal)

3. **The combined Hero + About section uses a single `#about` anchor.** There is no separate hero; the hero and about are merged into one section. This works visually but means there's no true "landing" experience with a standalone hero. The content plan originally specified a separate Hero section ("Viv. Software engineer. Building things that matter.") distinct from the About section. The current implementation merges them, which is fine but means the dramatic hero moment is diluted by adjacent about text.

---

## Navigation Assessment

### Current Labels

| Nav Label | Target | Issues |
|-----------|--------|--------|
| About | `#about` | Accurate. Maps to the combined hero+about section. |
| Expertise | `#expertise` | Accurate. Maps to "What I Do" section heading. Slight mismatch between nav label ("Expertise") and section heading ("What I Do"). |
| Experience | `#experience` | Accurate. Clear and conventional. |
| Open Source | `#open-source` | Misleading. The section is called "Work in the Open" and explicitly states most work is private. "Open Source" implies a broader open source portfolio. |
| Beyond the Code | `#beyond` | Accurate but long for a nav label. Could be shortened to "Life" or "Personal" for scannability, especially since there's also a `/life` page. |
| Notes | `/notes` | Accurate. Clear. |
| Variations | `/variations` | **Should not be in navigation.** This is a test/development page. It should be removed from the nav before deployment. |
| Contact | `#contact` | Accurate. Clear. |

### Missing Navigation Entries

1. **AI Engineering** — accessible via three routes (nav bar was supposed to have it per progress log, Expertise card link, Contact footer) but is not currently in the main nav array in `Navigation.astro`. The progress log says "AI Engineering now reachable via 3 routes: nav bar" but the nav code shows no AI Engineering entry. This may be an inconsistency.

2. **Life** — the `/life` page is accessible via "More about life beyond the code" link in the Beyond the Code section, but has no dedicated nav entry. Given the content plan treats it as a first-class page, it should arguably be in the nav.

### Recommendations

| Current Label | Recommended Label | Rationale |
|---------------|-------------------|-----------|
| About | About | Keep as-is |
| Expertise | What I Do | Match the section heading for consistency |
| Experience | Experience | Keep as-is |
| Open Source | Open Source | Acceptable shortening of "Work in the Open", but see note below |
| Beyond the Code | Life | Shorter, more scannable, matches the `/life` page |
| Notes | Notes | Keep as-is |
| Variations | *Remove* | Test page, not production content |
| Contact | Contact | Keep as-is |
| *Add* | AI Engineering | If it's meant to be a key differentiator, give it a nav entry |

**On "Open Source" vs "Work in the Open":** The section heading "Work in the Open" is better because it's honest about scope (not all work is open source). The nav label "Open Source" overstates it. However, "Work in the Open" is long for a nav item. Consider keeping "Open Source" as a shorthand in nav but keeping "Work in the Open" as the section heading. Alternatively, the nav could read "Open Work".

---

## User Journey Analysis

### 1. Recruiters / Hiring Managers

**Goal:** Assess skills, experience level, and cultural fit. Find contact info.

**Current journey:**
1. Land on hero — see name, title, subtitle. Good first impression.
2. Read about text — understand seniority, credentials (CEng, BCS, Cardiff). Strong.
3. See Expertise — four clear themes. Effective at communicating breadth.
4. Scroll to Experience — 8 Tier 1 entries with rich narrative. Very detailed.
5. May or may not click "See Full Timeline" — the Tier 2 entries add significant depth.
6. Reach Contact — only GitHub and LinkedIn. No CV/resume download.

**Assessment:** Good overall. The narrative approach differentiates from a standard CV. However:
- **No downloadable CV/resume.** Some recruiters want a PDF to file in their ATS. This is a deliberate omission but worth noting.
- **No clear "skills" summary.** The Expertise section is narrative, not scannable. A recruiter looking for "Kubernetes" won't find it in the Expertise section — they'd need to read timeline entries or tech footnotes.
- **Tech footnotes are useful but buried.** They appear as small italic text at the bottom of each timeline entry. A recruiter scanning for technology keywords may miss them.
- **Contact is minimal.** No email is a deliberate choice, but LinkedIn is the clear path. This is fine.

### 2. Peer Engineers

**Goal:** Assess technical depth, find interesting content, see public contributions.

**Current journey:**
1. Hero/About — establishes credentials.
2. May jump to Experience via nav — this is the meat for peers.
3. Open Source section — directly relevant. Links to Openfire contributions.
4. Notes section — exactly what technical peers look for. Currently one sample note.
5. AI Engineering page — accessible via Expertise card or possibly nav.

**Assessment:** Good foundation, but:
- **Engineering Notes is thin.** Only one sample note. For a "working engineer's notebook" to serve its purpose, it needs more content. This is a content gap, not an IA gap.
- **No tag-based browsing in Notes.** Tags are displayed but not clickable/filterable. As the collection grows, tag filtering would help.
- **AI Engineering page is hard to discover for peers who'd be most interested.** The link from the Expertise card ("More about my AI approach") is good but subtle.

### 3. Potential Collaborators

**Goal:** Understand expertise areas, communication style, availability.

**Current journey:**
1. Hero/About — gets the tone. The writing style itself demonstrates communication ability.
2. Expertise — clear themes help collaborators identify overlap.
3. Experience — specific project descriptions show domain experience.
4. Contact — GitHub and LinkedIn are appropriate channels.

**Assessment:** Well-served. The narrative approach is ideal for collaborators because it demonstrates communication style as well as technical ability. No significant IA issues for this persona.

### 4. Casual / Curious Visitors

**Goal:** Quickly understand who this person is and what they do.

**Current journey:**
1. Hero — "Viv. Software engineer. Building things that matter." Immediately clear.
2. About — three paragraphs. Might feel long for casual visitors.
3. May scroll briefly, see the Expertise cards, then bounce.

**Assessment:** Good. The hero is effective. The risk is that the combined hero+about section is quite text-heavy for a casual visitor who just wants the headline. A separate hero with a clear visual pause before the about text might help, but this is a minor point.

---

## Content Model Review

### Timeline Collection

```typescript
schema: z.object({
  title: z.string(),
  year: z.string(),
  headline: z.string(),
  tier: z.number(),
  order: z.number(),
  techFootnote: z.string(),
  image: z.string().optional(),
})
```

**Assessment:** Well-designed for the use case.

- `tier` (1 or 2) cleanly separates the display treatment.
- `order` allows explicit control over display sequence.
- `headline` is a nice touch — the principle-led quotes give each entry personality.
- `techFootnote` as a string (not an array) is a minor limitation. If tech lists grow, a comma-separated string becomes harder to parse programmatically (e.g. for building a tech skills index). However, for the current use case (display only), it works fine.
- `image` as a string key that maps to a glob-imported image is an effective pattern for Astro.

**Potential improvement:** Consider adding an optional `tags` or `themes` field (e.g. `["security", "leadership", "infrastructure"]`) to enable cross-referencing entries by theme. This could power a future "filter by theme" feature or help with SEO.

### Notes Collection

```typescript
schema: z.object({
  title: z.string(),
  date: z.date(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
})
```

**Assessment:** Clean and appropriate. Tags are well-modelled. `description` as optional allows for brief previews on the index page without requiring a full excerpt system.

**Potential improvement:** Consider adding a `draft` boolean field to allow work-in-progress notes without publishing them.

---

## Timeline Organisation Assessment

### Tier 1 Entries (Display Order)

| # | Title | Year | Theme |
|---|-------|------|-------|
| 1 | The Beginning | 1980s-1990s | Origin story |
| 2 | Cardiff University | 1998-2001 | Education |
| 3 | Tracesmart | 2008-2011 | Engineering practices |
| 4 | CERT-UK & National Cyber Security | 2013-2015 | High-stakes government work |
| 5 | Threatvine | 2015-2019+ | Product ownership |
| 6 | Openfire | Ongoing | Open source |
| 7 | AI-Enhanced Engineering | 2024-present | Current chapter |
| 8 | Remote Working | 2013-present | Culture/way of working |

### Assessment

**Chronological gap:** There's a jump from 2001 (Cardiff) to 2008 (Tracesmart). Seven years of career are only visible in Tier 2. This is a deliberate editorial choice — the early career roles (Glamorgan, Freelance, Hargreaves Lansdown) are considered less impactful. This works for the narrative but might puzzle recruiters who notice the gap.

**Non-chronological entries:** Entries 6 (Openfire, ongoing) and 8 (Remote Working, 2013-present) break strict chronology. This is fine — they're thematic entries that span multiple time periods. The timeline handles this gracefully.

**Entry 8 placement:** "Remote Working" as the final Tier 1 entry feels anticlimactic after "AI-Enhanced Engineering". The AI entry is the most forward-looking and exciting; following it with a softer entry about remote work reduces momentum. Consider whether Remote Working might work better as a Tier 2 entry, or whether the order could be adjusted so AI Engineering is the closing Tier 1 entry.

### Tier 2 Entries (Display Order)

11 entries covering: early career roles, freelancing, HL, BaseKit, Thrupoint, cross-domain work, stabilisation, team building, IaC, security, edge-of-org work. These are ordered chronologically/thematically and provide excellent depth for visitors who want the full picture.

**Assessment:** Tier 2 is well-curated. The entries are less narratively dramatic but add important professional context. The "See Full Timeline" toggle is an excellent UX pattern.

---

## Secondary Pages Assessment

### /ai-engineering

**Purpose:** Dedicated deep-dive into Viv's AI engineering approach.

**Assessment:**
- Content is well-structured (Philosophy, How I Work, What I've Built, Where It's Going).
- "Last updated: February 2026" is excellent for a page that will evolve.
- **Discoverability is a concern.** The page has three intended access routes:
  1. Nav bar — but it's not actually in the `navLinks` array in `Navigation.astro`
  2. Expertise card — "More about my AI approach" link
  3. Contact footer — no visible link to AI Engineering in the current Contact component
  Only route 2 is currently working. This means the page is effectively only reachable via one subtle link.
- The page has no internal navigation (e.g. anchor links to its own sections). For a page with four distinct sections, section anchors could help.
- There's no link from the AI timeline entry (#7) to this page, which seems like a natural connection point.

### /life

**Purpose:** Expanded "Beyond the Code" content with Strava stats.

**Assessment:**
- Good expansion of the main page's summary cards.
- Strava integration is a nice dynamic element.
- Content is personal and well-written.
- **Navigation:** Accessible via "More about life beyond the code" link on main page, but not in the main nav. The progress log mentions a "Life" nav link was added, but the actual nav code has no such entry — it goes straight from "Beyond the Code" to "Notes".
- **Title mismatch:** The main page section is "Beyond the Code" but the page heading is also "Beyond the Code". The nav label (if it existed) would ideally differentiate. "Life" is a natural short label.

### /notes and /notes/{slug}

**Purpose:** Engineering notebook.

**Assessment:**
- Clean index with date, title, optional description, and tags.
- Individual note pages have prev/next navigation — good.
- RSS feed is present — good for technical audiences.
- **Content volume:** Currently just one sample note. The IA is ready for growth but the section feels underpopulated.
- **Tag navigation:** Tags are displayed but not linked to a filtered view. This is fine with one note but should be addressed as the collection grows.
- **Back navigation:** "Back to main" link on notes index goes to `/`, not to the main page's notes section (there is none). This is correct since Notes is a separate section, not part of the main page scroll.

### /variations (and related test pages)

**Purpose:** Design experimentation pages created during development.

**Assessment:**
- **These should not be in the production site.** The Variations page is linked in the main navigation. All 8 test pages would be included in the sitemap (unless explicitly excluded).
- The MEMORY.md notes: "Variation/test pages: always clean up before deployment." These haven't been cleaned up yet.
- **Recommendation:** Remove from navigation immediately. Either delete the pages or add them to sitemap exclusion before deployment.

---

## SEO / Findability Review

### Heading Hierarchy

**Main page (index.astro):**
- `<h1>` "Viv." — in the hero area
- `<h2>` "About" — sr-only (in About.astro, not currently used since About is merged into index)
- `<h2>` "What I Do" — Expertise section
- `<h3>` per expertise card title
- `<h2>` "Experience" — Timeline section
- `<h3>` per timeline entry title
- `<h2>` "Work in the Open"
- `<h3>` per repo card
- `<h2>` "Beyond the Code"
- `<h3>` per interest card
- `<h2>` "Want to talk?" — Contact footer

**Assessment:** Good heading hierarchy. One `h1`, multiple `h2`s for sections, `h3`s for subsections. This is correct.

**Note:** The `About.astro` component has a `<h2 class="sr-only">About</h2>` for accessibility, but this component isn't used on the main page — the about content is inlined directly in `index.astro`. The About component appears to be orphaned.

### Meta Tags

- Title: "Viv -- Software Engineer" (main page)
- Description: "Software engineer. Building things that matter."
- Open Graph tags present with image
- Twitter Card tags present
- Canonical URL set
- `lang="en-GB"` set correctly

**Assessment:** Good baseline. Consider:
- The meta description is very short. A description of 150-160 characters performs better in search results. Something like: "Viv is a Chartered Software Engineer with 25+ years' experience in government, cyber security, and identity verification. Based in South Wales."
- Individual pages (AI Engineering, Life, Notes) have their own descriptions -- good.

### URL Structure

| URL | Assessment |
|-----|-----------|
| `/` | Good |
| `/ai-engineering` | Good, descriptive |
| `/life` | Good, short |
| `/notes` | Good |
| `/notes/{slug}` | Good. Slugs are descriptive (e.g. `gsap-scrolltrigger-astro-gotchas`) |
| `/variations` | Should not exist in production |
| `/hero-test-*` | Should not exist in production |
| `/*-variations` | Should not exist in production |

### Sitemap

The `@astrojs/sitemap` integration is configured and will auto-generate a sitemap. **Issue:** All pages including test/variation pages will be included in the sitemap. The sitemap config in `astro.config.mjs` has no filter to exclude test pages.

**Recommendation:** Add a filter to the sitemap integration:

```js
integrations: [sitemap({
  filter: (page) => !page.includes('variation') && !page.includes('hero-test')
})]
```

Or better yet, remove the test pages entirely.

### Robots.txt

Present and correct. References the sitemap URL.

---

## What Works Well

1. **Narrative-first approach.** The site tells a story rather than listing facts. This is rare for an engineer's portfolio and makes the site memorable.

2. **Two-tier timeline.** Excellent information architecture. Casual visitors see 8 highlights; deep readers get 19 entries. The toggle is well-implemented with accessibility support.

3. **Consistent design language.** Cards, spacing, typography, and animation are consistent across sections. The site feels cohesive.

4. **Content collection model.** Timeline and Notes collections are well-designed with appropriate schemas. The glob loader pattern works well for Astro.

5. **Tone consistency.** The writing voice is consistent across all sections — warm, direct, unpretentious. This is as much an IA consideration as a content one, because consistent tone helps visitors build a mental model of the person.

6. **Progressive disclosure.** The Tier 1/Tier 2 split, the "More about life beyond the code" link, and the AI Engineering deep-dive page all follow a progressive disclosure pattern. This respects the visitor's time whilst offering depth.

7. **Accessibility foundations.** Skip links, ARIA labels, focus management, sr-only headings, and semantic HTML demonstrate care for all visitors.

8. **RSS feed on Notes.** A thoughtful addition for the technical audience who would subscribe.

---

## What Could Be Better

1. **Navigation inconsistencies.** The nav doesn't include AI Engineering or Life, despite both being documented as having nav entries. Variations is in the nav but shouldn't be.

2. **Orphaned component.** `About.astro` exists as a standalone component but isn't used anywhere. The about content is inlined in `index.astro`. This creates maintenance confusion.

3. **Hero+About merge dilutes both.** The original content plan had a separate Hero ("Viv. Software engineer. Building things that matter.") and About section. Merging them reduces the dramatic hero moment and makes the about section feel like it starts too early.

4. **AI Engineering discoverability.** Only one of the three intended access routes is working (the Expertise card link). The AI Engineering page is arguably Viv's strongest differentiator for 2024-2026, and it's nearly hidden.

5. **No structured data (schema.org).** No JSON-LD or microdata for Person, Organization, or Article schemas. This would improve search engine understanding of the content.

6. **Meta description too brief.** The default "Software engineer. Building things that matter." is a subtitle, not a search-optimised description.

7. **Test pages in production.** 8 test/variation pages are in the page tree, the sitemap, and one is linked in the main nav.

8. **No 404 page.** No custom 404.astro page exists. Visitors who hit a dead link would see the GitHub Pages default 404.

9. **"Open Source" nav label vs "Work in the Open" section heading.** Inconsistency between navigation and content creates a minor mental model mismatch.

10. **Notes has no tag filtering.** Tags are displayed but serve no navigation function. As content grows, this becomes a gap.

---

## Recommendations (Prioritised by Impact)

### High Priority (pre-deployment)

| # | Recommendation | Impact | Effort |
|---|---------------|--------|--------|
| 1 | **Remove variation/test pages from navigation and sitemap** (or delete entirely). These are development artefacts that harm SEO and confuse visitors. | SEO, Professionalism | Low |
| 2 | **Fix navigation array** — add AI Engineering and Life entries, remove Variations. Verify the nav matches the intended structure from the progress log. | Discoverability | Low |
| 3 | **Create a custom 404 page** with navigation back to the main page. On a portfolio site, a good 404 is a personality opportunity. | User experience | Low |
| 4 | **Expand the meta description** on the main page to 150+ characters for better search result appearance. | SEO | Low |

### Medium Priority (near-term improvement)

| # | Recommendation | Impact | Effort |
|---|---------------|--------|--------|
| 5 | **Add JSON-LD structured data** for Person schema on the main page, and potentially Article schema on Notes pages. Helps search engines and social platforms understand the content. | SEO | Medium |
| 6 | **Link AI timeline entry to /ai-engineering page.** Add a "Read more about my AI approach" link within the AI-Enhanced Engineering timeline entry (#7). This is the most natural discovery point for visitors reading chronologically. | Discoverability | Low |
| 7 | **Align nav labels with section headings** — either change "Expertise" to "What I Do" in the nav, or change "What I Do" to "Expertise" in the section. Consistency helps visitors orient. | Clarity | Low |
| 8 | **Consider moving Remote Working from Tier 1 to Tier 2.** It's the weakest Tier 1 entry narratively, and moving it would let AI Engineering be the climactic final entry. | Narrative flow | Low |
| 9 | **Clean up the orphaned About.astro component** — either use it properly or remove it to avoid confusion. | Code hygiene | Low |

### Lower Priority (future enhancement)

| # | Recommendation | Impact | Effort |
|---|---------------|--------|--------|
| 10 | **Add tag filtering to Notes** as the collection grows. Clickable tags that filter the index page. | Navigation | Medium |
| 11 | **Add a `draft` field to the Notes schema** to support work-in-progress content without publishing. | Content workflow | Low |
| 12 | **Consider adding a "Skills/Technologies" structured section** — not as a primary section, but perhaps as a filterable view of technologies extracted from tech footnotes. This serves recruiters who search by technology keyword. | Recruiter experience | Medium |
| 13 | **Add anchor navigation to /ai-engineering** — the four sections (Philosophy, How I Work, What I've Built, Where This Is Going) could have anchor links for direct linking. | Deep linking | Low |
| 14 | **Consider a "Last seen working on" dynamic element** — the Notes section, combined with a GitHub activity indicator, could show that the site represents an active engineer, not a static portfolio. | Freshness signal | Medium |

---

## Suggested Sitemap (If Structural Changes Applied)

```
viv.me.uk/
|
+-- / .............................. Main page (single-page scroll)
|   |-- #about ..................... Hero + About
|   |-- #expertise ................. What I Do / Expertise
|   |-- #experience ................ Experience Timeline
|   |-- #open-source ............... Work in the Open
|   |-- #beyond .................... Beyond the Code (summary)
|   `-- #contact ................... Contact footer
|
+-- /ai-engineering ................ AI Engineering (deep dive)
+-- /life .......................... Life Beyond the Code (expanded)
+-- /notes/ ........................ Engineering Notes
|   +-- /notes/{slug} .............. Individual notes
|   `-- /notes/rss.xml ............. RSS feed
|
+-- /404 ........................... Custom not-found page
+-- /sitemap-index.xml ............. Sitemap
`-- /robots.txt .................... Crawl directives
```

**Navigation bar (recommended):**
About | What I Do | Experience | Open Source | AI Engineering | Life | Notes | Contact

This adds AI Engineering and Life to the nav, removes Variations, and renames "Expertise" to "What I Do" for consistency with the section heading. "Beyond the Code" becomes "Life" for brevity and consistency with the `/life` URL.

---

## Content Gap Analysis

### Present and well-served:
- Professional narrative and career history
- Technical expertise themes
- Open source contributions
- Personal interests
- Contact information
- AI engineering positioning

### Potentially missing:

| Gap | Severity | Notes |
|-----|----------|-------|
| **Downloadable CV/resume** | Low | Deliberate omission. LinkedIn serves this purpose. Worth considering a one-page PDF for recruiters, but not essential. |
| **Testimonials/endorsements** | Low | The AI research quote ("a magnificent piece of work") is included inline. More third-party validation could strengthen credibility, but risks feeling self-promotional. |
| **Speaking/conferences** | Low | If Viv has spoken at conferences or events, this could strengthen the peer engineer persona. Not essential if not applicable. |
| **Certifications detail** | Low | CEng and BCS membership are mentioned but not detailed. A small credentials section could help with recruiter scanning. |
| **Blog/long-form writing** | Addressed | Engineering Notes fills this role, though it's currently thin on content. |
| **RSS for main site** | Low | Only Notes has an RSS feed. A site-wide RSS that includes new timeline entries or page updates would serve subscribers. |
| **Search** | Low | With 19 timeline entries, 5+ notes, and multiple pages, on-site search could become useful. Not critical yet. |

---

## Summary

The site's information architecture is fundamentally sound. The narrative-first, progressive-disclosure approach is well-suited to a senior engineer's portfolio. The main issues are execution details (broken nav entries, test pages in production, minor label mismatches) rather than structural problems. The recommendations above are primarily about tightening what's already there rather than rethinking the architecture.

The most impactful changes are the quick wins: fixing the navigation, removing test pages, and improving AI Engineering discoverability. These require minimal effort but would meaningfully improve the visitor experience.
