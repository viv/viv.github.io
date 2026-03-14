---
generated_by: Claude Opus 4.6
generation_date: 2026-02-11
model_version: claude-opus-4-6
purpose: transition_plan
status: complete
human_reviewer: matthewvivian
tags: [deployment, github-pages, jekyll, astro, transition]
---

# Transition Plan: Jekyll → Astro on GitHub Pages

This document covers the safe transition from the legacy Jekyll/Bootstrap site to the new Astro + Tailwind + GSAP site on GitHub Pages at `viv.me.uk`.

## Current State

| Aspect | Master (old) | feature/new-site (new) |
|--------|-------------|----------------------|
| Framework | Jekyll + Bootstrap 3 | Astro 5.x + Tailwind v4 + GSAP |
| Deployment | GitHub Pages (built-in Jekyll) | GitHub Actions → GitHub Pages |
| Custom domain | `www.viv.me.uk` (CNAME at repo root) | `www.viv.me.uk` (CNAME in `public/`) |
| Pages | Home, Blog, Projects, Rides, Contact | Single-page scroll, /ai-engineering, /life, /notes |
| Commits on branch | 91 total | 7 unique commits ahead of master |

The `feature/new-site` branch was forked from the tip of master (`92cc8b9`). The first commit on the branch (`7035bad`) removes all Jekyll artefacts cleanly, so there are no merge conflicts to worry about — the branch is a clean superset of master.

---

## 1. Pre-Transition Checklist

Before merging, confirm **all** of the following:

- [ ] **Polish sessions complete** — Sessions 4.1 (light/dark toggle), 4.2 (responsive), 4.3 (accessibility), 4.4 (performance & SEO), and 5.1 (content review) are done
- [ ] **Build passes cleanly** — `npm run build` completes with no errors or warnings
- [ ] **Local verification** — Site tested at mobile (375px), tablet (768px), and desktop (1440px+) breakpoints
- [ ] **All pages accessible** — `/`, `/ai-engineering`, `/life`, `/notes` all render correctly
- [ ] **CNAME preserved** — `public/CNAME` contains `www.viv.me.uk` and is copied to `dist/` during build
- [ ] **Sitemap generated** — `@astrojs/sitemap` produces `sitemap-index.xml` referencing `https://www.viv.me.uk`
- [ ] **robots.txt correct** — Points to the correct sitemap URL
- [ ] **Favicons present** — All favicon variants exist in `public/`
- [ ] **Social sharing preview** — `public/social-sharing-preview.png` exists and Open Graph meta tags are set
- [ ] **Deploy workflow tested** — The GitHub Actions workflow at `.github/workflows/deploy.yml` has been tested (ideally via a manual `workflow_dispatch` run on the feature branch, if Pages source is temporarily pointed at it)
- [ ] **No secrets or personal data exposed** — Review all committed files for accidental inclusion of emails, API keys, etc.

---

## 2. Old Content Decisions

### What existed on the old site

| Section | URLs | Content | Verdict |
|---------|------|---------|---------|
| **Home** | `/` | One-paragraph intro mentioning Surevine | **Replaced** — new single-page scroll experience |
| **Blog** | `/blog/`, `/open-working/2014/06/28/inspiration.html` | 1 post from 2014 ("Show Your Work") | **Let expire** — 12 years old, low traffic, not worth redirecting |
| **Projects** | `/projects/`, `/computing/2014/03/23/connected-self.html` | 1 post ("Connect Everything!"), 1 draft (pibell) | **Let expire** — placeholder content only |
| **Rides** | `/rides/`, `/rides/routes.html` | KMZ ride data with Google Maps | **Let expire** — was already hidden (`03191f6 Hide rides`) |
| **Contact** | `/contact/` | Twitter handle + email | **Let expire** — new site has GitHub/LinkedIn links in footer |
| **Keybase** | `/keybase.txt` | Keybase identity verification | **Let expire** — Keybase is effectively defunct |

### URL redirect assessment

The old site had very little external linkage:
- No significant SEO authority on individual pages (personal site, 2014-era content)
- Blog had a single post from 12 years ago
- Rides section was already hidden
- Projects section had only placeholder content

**Recommendation:** No redirects needed. The old URLs were not widely linked and the content is not being carried forward. If Viv later discovers external links to old URLs, Astro supports adding redirect rules in `astro.config.mjs`:

```js
redirects: {
  '/blog': '/',
  '/contact': '/',
  '/projects': '/',
  '/rides': '/',
}
```

This can be added post-transition if needed, but is not worth doing proactively.

---

## 3. Merge Strategy

### Recommended approach: Standard merge (not squash)

The feature branch has only 7 clean, well-structured commits with conventional commit messages. Preserving them gives better `git log` history than a single squash commit. Each commit tells a distinct part of the story:

1. `7035bad` — Remove legacy Jekyll artefacts
2. `853f265` — Scaffold Astro project
3. `d2951ce` — Build all content sections
4. `e8ed7fe` — Add engineering plans and documentation
5. `8035cb5` — Add Claude Code project configuration
6. `0ea1c4f` — Reorder sections and fix voice
7. `c5fd456` — Add writing style guide

### Step-by-step merge procedure

```bash
# 1. Ensure everything is committed on the feature branch
git status

# 2. Tag the old site for easy rollback
git tag jekyll-final master

# 3. Switch to master
git checkout master

# 4. Merge the feature branch (fast-forward should be possible since
#    feature/new-site is a direct descendant of master's tip)
git merge feature/new-site

# 5. Verify the merge
git log --oneline -10

# 6. Push to origin (this triggers the deploy workflow)
git push origin master

# 7. Push the safety tag
git push origin jekyll-final
```

**Note:** Because `feature/new-site` branched from master's current tip (`92cc8b9`), this merge should fast-forward cleanly with zero conflicts. If master has received additional commits since the branch was created, a regular merge commit will be produced instead — this is fine.

### Important: GitHub Pages source setting

The current Jekyll site likely uses GitHub's built-in Jekyll builder (Pages source set to "Deploy from a branch"). The new site uses GitHub Actions.

**Before or immediately after merging**, go to the repo settings:
1. Navigate to **Settings → Pages**
2. Under **Build and deployment → Source**, change from "Deploy from a branch" to **"GitHub Actions"**
3. This tells GitHub to use the `.github/workflows/deploy.yml` workflow instead of its built-in Jekyll builder

If this is not changed, GitHub will attempt to build the Astro project with Jekyll and fail silently or produce a broken site.

---

## 4. DNS and CNAME

### Current setup

- **CNAME record:** `www.viv.me.uk` → GitHub Pages (likely `viv.github.io`)
- **CNAME file (master):** Contains `www.viv.me.uk` at repo root
- **CNAME file (new site):** Contains `www.viv.me.uk` in `public/CNAME` (Astro copies `public/` contents to `dist/` during build)

### DNS changes needed

**None.** The custom domain setup is purely between the DNS provider and GitHub Pages. Since the domain (`www.viv.me.uk`) and the repo (`viv/viv.github.io`) are not changing, the existing DNS configuration continues to work.

### How GitHub Pages handles the CNAME

When GitHub Pages deploys, it looks for a `CNAME` file in the root of the deployed artefact. Astro's build copies everything from `public/` to `dist/`, so `public/CNAME` → `dist/CNAME` → deployed root. This is confirmed by the deploy workflow uploading `dist/` as the Pages artefact.

### HTTPS

GitHub Pages provides free HTTPS via Let's Encrypt. The certificate is tied to the custom domain in the repository settings, not the build tool. Switching from Jekyll to Astro does not affect HTTPS — the certificate will continue to work.

### Verify after transition

- `https://www.viv.me.uk` loads correctly
- `https://viv.me.uk` redirects to `https://www.viv.me.uk` (if apex redirect is configured)
- No mixed-content warnings in the browser console

---

## 5. Deployment Verification

### Immediately after pushing to master

1. **Check the Actions tab** — Go to `github.com/viv/viv.github.io/actions` and confirm the "Deploy to GitHub Pages" workflow has triggered and is running
2. **Wait for green** — The build + deploy should complete in 1–3 minutes
3. **Check the deployment** — In the repo, go to **Settings → Pages** and confirm the latest deployment shows a recent timestamp

### Site verification checklist

| Check | How to verify |
|-------|--------------|
| Site loads | Visit `https://www.viv.me.uk` — should show the new Astro site |
| HTTPS works | No certificate warnings, padlock icon present |
| All pages render | Navigate to `/`, `/ai-engineering`, `/life`, `/notes` |
| Navigation works | Click all nav links, verify smooth scroll on home page |
| Animations play | Scroll through timeline, check GSAP animations fire |
| Responsive | Test on a real phone or via DevTools responsive mode |
| No console errors | Open browser DevTools, check for JS/resource errors |
| Sitemap accessible | Visit `https://www.viv.me.uk/sitemap-index.xml` |
| robots.txt accessible | Visit `https://www.viv.me.uk/robots.txt` |
| Favicons load | Check browser tab shows favicon, bookmark the site |
| Social preview | Paste `https://www.viv.me.uk` into a social media preview tool (e.g., opengraph.xyz) |

### Propagation timing

GitHub Pages deployments are typically live within 1–5 minutes. CDN cache can occasionally delay updates by up to 10 minutes. If the old site still shows after pushing:
- Hard refresh the browser (`Cmd+Shift+R`)
- Try an incognito window
- Check the Actions tab to confirm the deploy completed
- Wait 10 minutes and try again

---

## 6. Rollback Plan

### If something goes wrong after merging

The `jekyll-final` tag created before merging provides a clean rollback point.

#### Quick rollback (revert to Jekyll)

```bash
# Revert master to the Jekyll state
git checkout master
git reset --hard jekyll-final
git push --force origin master
```

**Note:** This requires force-push, which is a destructive action. It will discard all new commits on master. Confirm this is the right action before proceeding.

After force-pushing, you'll also need to revert the GitHub Pages source setting:
1. Go to **Settings → Pages**
2. Change source back to **"Deploy from a branch"** (master branch, root directory)
3. GitHub's built-in Jekyll builder will rebuild the old site

#### Less destructive rollback (revert commit)

If you prefer not to force-push:

```bash
# Create a revert commit that undoes the merge
git revert --no-commit feature/new-site~7..feature/new-site
git commit -m "revert: temporarily revert Astro site whilst investigating deploy issue"
git push origin master
```

This preserves history and can itself be reverted once the issue is fixed.

#### Timeline for rollback

- Git operations: ~1 minute
- GitHub Pages rebuild: 1–5 minutes
- Total time to restore old site: under 10 minutes

---

## 7. Post-Transition Cleanup

Once the new site is confirmed working (recommend waiting at least 48 hours):

### Immediate cleanup

- [ ] **Delete the feature branch** — `git branch -d feature/new-site && git push origin --delete feature/new-site`
- [ ] **Update README.md** — Ensure it reflects the Astro tech stack, build instructions, and development setup
- [ ] **Verify scheduled workflow** — The deploy workflow runs daily at 06:00 UTC. Check that the first scheduled run completes successfully

### Housekeeping

- [ ] **Review docs/ folder** — Engineering plans and research docs are useful for reference but won't be updated. Consider whether they should stay in the repo permanently or be archived
- [ ] **Review docs/assets/** — Contains generated imagery used during the design process. These are reference copies; the production images are in `src/assets/`. The docs copies can be removed to reduce repo size if desired
- [ ] **Check for stale GitHub settings** — Review branch protection rules, any webhook integrations, etc.

### What was already removed

The commit `7035bad` ("chore: remove legacy Jekyll site artefacts") already removed all Jekyll files from the feature branch:
- `_config.yml`, `_data/`, `_includes/`, `_layouts/`
- `blog/`, `contact/`, `projects/`, `rides/`
- `css/`, `js/`, `fonts/`, `img/`
- `keybase.txt`

No further cleanup of old Jekyll files is needed after merging.

---

## 8. Timing Recommendation

### When to do this

- **Day of week:** A weekday morning (Tuesday–Thursday preferred), so there's a full working day to monitor and react if anything goes wrong
- **Time:** Morning, ideally before 10:00 — this gives maximum time to debug if issues arise
- **Avoid:** Fridays (no one wants to debug deploys on a weekend), evenings (tired debugging is bad debugging), or times when you won't have internet access for at least 2 hours after merging

### Announcement

This is a personal site, so no formal announcement is needed. However, consider:
- **LinkedIn post** about the redesign — a good opportunity to showcase the work and drive traffic to the new site
- **Update any profiles** that link to the old site (GitHub bio, LinkedIn, etc.) — the links won't break, but if any mention specific pages like `/blog` they should be updated

### Estimated time for the whole process

The actual merge-and-verify process should take under 30 minutes. Budget an hour to be safe, including the pre-transition checklist and post-deployment verification.

---

## Summary of Key Decisions

| Decision | Recommendation | Rationale |
|----------|---------------|-----------|
| Merge strategy | Standard merge (fast-forward) | Clean 7-commit history, no conflicts expected |
| Old content | Let old URLs expire | Minimal content (1 blog post from 2014), no SEO authority |
| URL redirects | Not needed proactively | Can be added later if needed via `astro.config.mjs` |
| DNS changes | None required | Same domain, same repo, same GitHub Pages |
| Pages source | Change to "GitHub Actions" | Required for Astro builds; Jekyll builder won't work |
| Rollback | Tag + force-push or revert commit | Both options documented, under 10 minutes |
| Timing | Weekday morning, Tue–Thu | Maximum reaction time if issues arise |
