---
generated_by: Claude Opus 4.6
generation_date: 2026-02-15
model_version: claude-opus-4-6
purpose: security_review
status: draft
human_reviewer: matthewvivian
tags: [security, review, strava, github-actions, web-security, astro]
---

# Security Review — viv.me.uk

## Executive Summary

The viv.me.uk website is a statically generated Astro site deployed to GitHub Pages. The overall security posture is **good for a personal static site**, with no critical vulnerabilities identified. The architecture is inherently secure: static output, build-time data fetching, no server-side runtime, and a minimal dependency footprint.

Key areas reviewed:
- Strava API integration (OAuth token flow)
- GitHub Actions deployment workflow
- Environment variable handling
- Client-side code and XSS vectors
- Dependency supply chain
- HTTP security headers
- General web security

The most actionable findings relate to hardening the deployment pipeline (pinning GitHub Actions to SHA digests), adding `.env` to `.gitignore`, and configuring security headers via GitHub Pages or a `_headers` file.

---

## Findings

### Critical

_No critical findings._

### High

_No high findings._

---

### Medium

#### M1. `.env` file not in `.gitignore`

**Affected file:** `.gitignore` (lines 1-4)

**Description:** The `.gitignore` file does not include `.env`. While no `.env` file currently exists in the repository (only `.env.example`), this is a common pattern that leads to accidental secret commits. If a developer creates a `.env` file locally with real Strava credentials and runs `git add .`, it would be staged and potentially committed.

**Current `.gitignore`:**
```
node_modules/
dist/
.astro/
.DS_Store
```

**Risk:** Accidental exposure of Strava client secrets, refresh tokens, and athlete ID in the Git history. Once pushed, secrets in Git history are extremely difficult to fully remove.

**Recommendation:** Add `.env` (and `.env.*` variants, excluding `.env.example`) to `.gitignore`:
```
.env
.env.local
.env.*.local
```

---

#### M2. GitHub Actions — third-party actions not pinned to SHA digests

**Affected file:** `.github/workflows/deploy.yml` (lines 32, 35, 52, 65)

**Description:** All GitHub Actions are referenced by major version tag (`@v4`, `@v3`) rather than pinned to specific commit SHA digests. This means a compromised or malicious update to any of these actions could execute arbitrary code in your build environment, with access to repository secrets.

**Current usage:**
```yaml
uses: actions/checkout@v4
uses: actions/setup-node@v4
uses: actions/upload-pages-artifact@v3
uses: actions/deploy-pages@v4
```

**Risk:** Supply chain attack via compromised GitHub Action. While these are official GitHub-maintained actions (lower risk), SHA pinning is a defence-in-depth best practice, especially when secrets are injected into the build environment.

**Recommendation:** Pin actions to full SHA digests and add a comment with the version for readability:
```yaml
uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1
```

Consider using Dependabot or Renovate to automate updates to pinned SHAs.

---

#### M3. No Content Security Policy (CSP) or security headers

**Affected files:** `src/layouts/BaseLayout.astro`, deployment configuration

**Description:** The site does not set any HTTP security headers. For a GitHub Pages site, headers are limited, but several can still be configured:
- No `Content-Security-Policy` meta tag
- No `X-Content-Type-Options` header
- No `Referrer-Policy`
- No `Permissions-Policy`

**Risk:** Without CSP, any XSS vulnerability (even in third-party scripts loaded via Google Fonts) could execute arbitrary JavaScript. Without `Referrer-Policy`, full URLs including any query parameters are sent as referrer headers to external origins (Google Fonts, Strava logo SVG inline, external links).

**Recommendation:** Add a CSP meta tag to `BaseLayout.astro`:
```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'" />
<meta name="referrer" content="strict-origin-when-cross-origin" />
```

Note: `'unsafe-inline'` is required because Astro uses inline scripts (the theme-blocking script and component scripts). The `is:inline` directive means these scripts are not hashed. This is an acceptable trade-off for a static personal site.

---

### Low

#### L1. GitHub Actions workflow has `id-token: write` permission

**Affected file:** `.github/workflows/deploy.yml` (line 25)

**Description:** The workflow has `id-token: write` permission at the top level. This is required by the `actions/deploy-pages` action for OIDC-based authentication with GitHub Pages. The permission is scoped correctly and is not overly broad.

**Risk:** Low. This is the standard pattern for GitHub Pages deployment. However, if additional jobs were added to this workflow in future, they would inherit this permission unnecessarily.

**Recommendation:** Consider moving the `id-token: write` permission to the `deploy` job specifically, rather than the top-level `permissions` block. This follows the principle of least privilege:
```yaml
jobs:
  build:
    permissions:
      contents: read
    # ...
  deploy:
    permissions:
      pages: write
      id-token: write
    # ...
```

---

#### L2. Scheduled workflow runs on default branch only

**Affected file:** `.github/workflows/deploy.yml` (line 15)

**Description:** The daily `cron: '0 6 * * *'` schedule trigger rebuilds the site to keep Strava data fresh. This runs against the `master` branch. If the Strava credentials are not yet configured (they aren't currently), this runs an unnecessary daily build that does nothing useful, consuming GitHub Actions minutes.

**Risk:** Minimal. Wasted CI minutes on a free tier.

**Recommendation:** No action needed now. Once Strava credentials are configured, the scheduled build becomes valuable. Consider adding a conditional check or disabling the schedule until credentials are in place.

---

#### L3. Variation/test pages would be deployed to production

**Affected file:** Multiple — `src/pages/variations.astro`, `src/pages/violet-variations.astro`, `src/pages/hero-test-3.astro`, `src/pages/hero-test-3a.astro`, `src/pages/hero-test-3b.astro`, `src/pages/hero-bg-variations.astro`, `src/pages/beyond-variations.astro`, `src/pages/expertise-variations.astro`, `src/pages/colour-variations.astro`

**Description:** There are 9 variation/test pages in `src/pages/` that would be deployed as publicly accessible URLs. These pages exist for design iteration and are not intended for public consumption.

**Risk:** Information disclosure — these pages reveal internal design process, colour explorations, and potentially earlier content drafts. While not sensitive, they present an unprofessional appearance and increase the attack surface.

**Recommendation:** Remove or exclude these before deploying to production. Options:
1. Move them to a `src/pages/_drafts/` directory (Astro ignores files prefixed with `_`)
2. Delete them before the production deploy
3. Add a build-time exclusion

---

#### L4. `innerHTML` usage in violet-variations.astro

**Affected file:** `src/pages/violet-variations.astro` (line 268)

**Description:** The `violet-variations.astro` page uses `container.innerHTML = ...` to render palette comparison cards. The data source is hardcoded palette definitions within the same script, not user input.

**Risk:** Very low. The `innerHTML` content is generated entirely from static, developer-defined data within the same script block. There is no user-controlled input flowing into this assignment. However, `innerHTML` is flagged here as a matter of hygiene.

**Recommendation:** No immediate action required — this page should be removed before production deployment (see L3). If retained, the pattern is safe as-is since the data is entirely static.

---

### Informational

#### I1. Strava integration security is well-designed

**Affected files:** `src/lib/strava.ts`, `src/components/StravaStats.astro`, `.github/workflows/deploy.yml`

**Description:** The Strava integration follows security best practices for a static site:

1. **Build-time only:** All API calls happen during `astro build`, not at runtime. No tokens or secrets are ever sent to the browser.
2. **Server-side env vars:** Environment variables use `STRAVA_*` prefix (not `PUBLIC_STRAVA_*`), meaning Astro's Vite configuration ensures they are only available in server-side/build-time code and are stripped from client bundles.
3. **Refresh token flow:** The code correctly uses the OAuth refresh token grant to obtain short-lived access tokens. The refresh token is stored as a GitHub Actions secret.
4. **Graceful degradation:** When credentials are missing, the code returns `null` and the component renders a placeholder or nothing, ensuring builds succeed without Strava access.
5. **No token logging:** Error handling logs status codes but not token values.
6. **Secrets in CI only:** Secrets are injected only during the build step via `env:` block in the workflow.

**Assessment:** This is a textbook implementation of build-time API integration for a static site. No changes recommended.

---

#### I2. Strava refresh token has indefinite lifetime

**Affected file:** `src/lib/strava.ts` (lines 31-48)

**Description:** The Strava OAuth refresh token grant returns a new access token and potentially a new refresh token. The current code uses the returned `access_token` but does not persist any updated `refresh_token` that Strava may return.

This is actually fine for the current use case: Strava's refresh tokens are long-lived, and for a build-time-only integration, the original refresh token stored in GitHub Secrets will continue to work. If Strava ever rotates the refresh token (which their API docs suggest they may do), the stored token would stop working.

**Risk:** Service disruption (Strava stats stop updating), not a security issue.

**Recommendation:** Monitor for Strava API changes regarding refresh token rotation. If rotation becomes mandatory, the build would need a mechanism to persist the new refresh token (e.g., writing it back to a GitHub Secret via API, or using a simple external store).

---

#### I3. No Subresource Integrity (SRI) on Google Fonts

**Affected file:** `src/layouts/BaseLayout.astro` (lines 42-47)

**Description:** Google Fonts are loaded via `<link>` tag without Subresource Integrity (SRI) hashes. This is standard practice — Google Fonts responses vary by user agent and browser, making SRI impractical.

**Risk:** Very low. A compromised Google Fonts CDN could serve malicious CSS (not JavaScript). The `preconnect` hints are correctly used.

**Recommendation:** No action needed. This is an accepted trade-off when using Google Fonts. If maximum security is desired, self-host the font files.

---

#### I4. External links use `rel="noopener noreferrer"` correctly

**Affected files:** `src/components/Contact.astro`, `src/components/WorkInTheOpen.astro`, `src/components/BeyondTheCode.astro`, `src/pages/life.astro`

**Description:** All external links (`target="_blank"`) consistently use `rel="noopener noreferrer"`, preventing reverse tabnapping and referrer leakage. Screen reader text `(opens in new tab)` is also provided.

**Assessment:** Excellent. No changes needed.

---

#### I5. Static output mode with no server-side runtime

**Affected file:** `astro.config.mjs` (line 6)

**Description:** The site uses `output: 'static'`, meaning the entire site is pre-rendered to static HTML/CSS/JS at build time. There is no server-side runtime, no SSR, no API routes, and no dynamic request handling.

**Assessment:** This is the most secure deployment model. The attack surface is limited to:
- Static file hosting security (GitHub Pages handles this)
- Client-side JavaScript
- Build-time dependencies

---

#### I6. Dependency audit clean

**Affected file:** `package.json`

**Description:** `npm audit` reports zero known vulnerabilities across all 425 dependencies (294 production, 129 optional). The dependency count is relatively small for an Astro project. All dependencies are well-maintained, popular packages:
- `astro@^5.3.0`
- `tailwindcss@^4.0.6`
- `gsap@^3.12.7`
- `@astrojs/sitemap@^3.7.0`
- `@astrojs/rss@^4.0.15`
- `@tailwindcss/vite@^4.0.6`

**Assessment:** Clean bill of health. Consider adding `npm audit` as a CI step to catch future vulnerabilities.

---

#### I7. `robots.txt` and sitemap are correctly configured

**Affected files:** `public/robots.txt`, `astro.config.mjs`

**Description:** `robots.txt` allows all crawlers and references the sitemap. The `@astrojs/sitemap` integration generates a sitemap at build time.

**Assessment:** Correct configuration. No security concerns.

---

#### I8. Content collection schemas provide input validation

**Affected file:** `src/content.config.ts`

**Description:** Astro content collections use Zod schemas to validate frontmatter data at build time. The `timeline` and `notes` collections both have type-safe schemas that would reject malformed content.

**Assessment:** Good practice. This prevents injection of unexpected content types into the rendered HTML.

---

#### I9. Theme toggle uses `localStorage` — no sensitive data

**Affected file:** `src/components/ThemeToggle.astro`, `src/layouts/BaseLayout.astro`

**Description:** The theme preference is stored in `localStorage` under the key `theme`. The only values written are `'dark'` or `'light'`. No sensitive data is stored client-side.

**Assessment:** No security concern.

---

## Strava Integration — Detailed Analysis

### Architecture

```
Build time (CI):
  GitHub Secret (STRAVA_REFRESH_TOKEN)
    → strava.ts: getAccessToken()
      → POST https://www.strava.com/oauth/token
      → Returns short-lived access_token
    → strava.ts: fetchStravaStats()
      → GET https://www.strava.com/api/v3/athletes/{id}/stats
      → Returns ride/run totals
    → StravaStats.astro: renders static HTML with numbers

Runtime (browser):
  → Static HTML only — no tokens, no API calls, no secrets
```

### Security Properties

| Property | Status | Notes |
|----------|--------|-------|
| Tokens in client bundle | No | Server-only env vars (no `PUBLIC_` prefix) |
| Secrets in Git | No | `.env.example` has empty values; real secrets in GitHub Actions |
| Token logging | No | Only HTTP status codes logged on failure |
| Graceful degradation | Yes | Returns `null` when credentials missing |
| API scope | Minimal | Read-only access to athlete stats |
| Token refresh | Build-time only | New access token per build; refresh token in GitHub Secrets |

### Risk: Strava API abuse via leaked refresh token

If the refresh token were compromised (e.g., via GitHub Actions log exposure or secret misconfiguration), an attacker could:
- Read the athlete's activity data (rides, runs, stats)
- They could NOT modify data, post activities, or access other athletes

The blast radius is limited to read-only access to one athlete's public-ish stats. Mitigation: Strava allows revoking app access at any time via settings.

---

## GitHub Actions Workflow — Detailed Analysis

### Workflow: `.github/workflows/deploy.yml`

#### Triggers

| Trigger | Risk | Notes |
|---------|------|-------|
| `push: branches: [master]` | Low | Only production branch |
| `workflow_dispatch` | Low | Manual trigger, requires repo write access |
| `schedule: cron '0 6 * * *'` | Low | Daily rebuild for fresh data |

#### Permissions

```yaml
permissions:
  contents: read    # Checkout code
  pages: write      # Deploy to Pages
  id-token: write   # OIDC for Pages deployment
```

**Assessment:** Permissions follow least-privilege. No `contents: write` (can't push back to repo), no `pull-requests` permissions, no `issues` permissions. The `id-token: write` is required for the Pages deployment OIDC flow.

#### Secrets Exposure

Secrets are only injected during the `Build site` step:
```yaml
env:
  STRAVA_CLIENT_ID: ${{ secrets.STRAVA_CLIENT_ID }}
  STRAVA_CLIENT_SECRET: ${{ secrets.STRAVA_CLIENT_SECRET }}
  STRAVA_REFRESH_TOKEN: ${{ secrets.STRAVA_REFRESH_TOKEN }}
  STRAVA_ATHLETE_ID: ${{ secrets.STRAVA_ATHLETE_ID }}
```

**Assessment:** Correct. Secrets are scoped to the build step, not available to checkout or deploy steps. GitHub Actions automatically masks secret values in logs.

#### Concurrency

```yaml
concurrency:
  group: pages
  cancel-in-progress: false
```

**Assessment:** Good. Prevents concurrent deployments. `cancel-in-progress: false` ensures a running deployment isn't interrupted, which is the safer choice.

#### Supply Chain

All actions are from the `actions` organisation (GitHub first-party):
- `actions/checkout@v4`
- `actions/setup-node@v4`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

**Assessment:** No third-party actions. This significantly reduces supply chain risk. The remaining recommendation is to pin these to SHA digests (see M2).

---

## Overall Security Posture

| Category | Rating | Notes |
|----------|--------|-------|
| Architecture | Excellent | Static output, build-time only, no runtime |
| Secrets management | Good | GitHub Secrets, server-only env vars, `.env.example` only |
| Dependency security | Excellent | Zero known vulnerabilities, minimal dependency count |
| GitHub Actions | Good | First-party actions only, scoped permissions, scoped secrets |
| Client-side security | Good | No user input, no forms, no dynamic content injection |
| HTTP headers | Needs improvement | No CSP, no security headers |
| `.gitignore` hygiene | Needs improvement | `.env` not excluded |
| Production readiness | Needs cleanup | Test/variation pages should not be deployed |

---

## Prioritised Action Items

### Before production deployment

1. **Add `.env` to `.gitignore`** (M1) — 1 minute fix, prevents accidental credential exposure
2. **Remove variation/test pages** (L3) — or move to `_drafts/` directory
3. **Add CSP meta tag and security headers** (M3) — moderate effort, significant security uplift

### Recommended improvements

4. **Pin GitHub Actions to SHA digests** (M2) — 10 minutes, supply chain defence-in-depth
5. **Scope `id-token: write` to deploy job** (L1) — minor refactor, principle of least privilege
6. **Add `npm audit` to CI** (I6) — continuous vulnerability monitoring

### Monitor

7. **Strava refresh token rotation** (I2) — watch for API changes
8. **Dependency updates** — consider Dependabot for automated PRs
