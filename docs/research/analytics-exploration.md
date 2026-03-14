---
generated_by: Claude Opus 4.6
generation_date: 2026-02-12
purpose: analytics_decision
status: recommendation_pending
tags: [analytics, privacy, goatcounter, umami]
---

# Analytics Exploration — viv.me.uk

## Context

Personal portfolio site hosted on GitHub Pages. Modest traffic expected. Privacy-conscious owner. Decision: add analytics, and if so, which solution?

## Options Compared

| Option | Monthly Cost | Self-host? | Cookie-free? | Script Size | Setup |
|--------|-------------|-----------|-------------|-------------|-------|
| Plausible | $9+ | Yes (Docker) | Yes | <1 KB | Script tag |
| Fathom | $15+ | No | Yes | ~1.6 KB | Script tag |
| Umami | Free tier / $15+ | Yes (MIT) | Yes | ~1.5 KB | Script tag |
| GoatCounter | Free (personal) | Yes | Yes | ~3.5 KB | Script tag |
| None | $0 | N/A | N/A | 0 | None |

All options are GDPR compliant without cookie banners.

## Recommendation: GoatCounter (Free Tier)

**Why GoatCounter:**
- Free forever for personal/non-commercial use
- Zero cookies, fully GDPR compliant — no banner needed
- One script tag to add, done in 2 minutes
- Clean minimalist dashboard — page views, referrers, top pages
- Self-host upgrade path available if needed later

**Useful signal for a personal site:**
- Are people actually visiting?
- Which pages/sections get attention?
- Where do referrals come from?

**What it won't tell you (and that's fine):**
- No funnels, no event tracking, no session recordings
- No individual visitor identification
- Just aggregate traffic patterns

**Setup (when approved):**
```html
<script data-goatcounter="https://viv.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

**Alternative:** Umami (self-hosted via Docker) if full data ownership is preferred. More setup but zero ongoing cost.

## Decision

Awaiting Viv's decision. Options:
1. Add GoatCounter free tier (recommended — 2 minutes to set up)
2. Add Umami self-hosted (more effort but full control)
3. Skip analytics entirely (valid — site works fine without it)
