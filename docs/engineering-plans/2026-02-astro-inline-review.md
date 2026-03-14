---
generated_by: Claude Opus 4.6
generation_date: 2026-02-20
model_version: claude-opus-4-6
purpose: implementation_plan
status: complete
human_reviewer: matthewvivian
tags: [astro, integration, developer-tools, copy-review, annotation, agent-team]
---

# review-loop — Engineering Plan

## Purpose

A shareable Astro integration that injects a dev-only annotation overlay on every page. Users select text, add notes, and export structured markdown for an AI agent (or editor) to action. Built as a standalone package consumed by viv.me.uk and publishable to npm.

## Why Not `astro-annotate`?

We investigated `astro-annotate` (published the same day). It's a fundamentally different tool:
- **Element-level** annotation (click on a whole `<div>` or `<p>`) vs our **text-selection** annotation (highlight specific words/phrases)
- No review panel, no export, no page-level notes, no multi-page overview, no tests

We adopt their good patterns (Shadow DOM isolation, Vite dev middleware, storage interface, View Transitions support) but build our own codebase around the text-selection interaction model.

## Decisions

| Decision | Choice |
|----------|--------|
| Package name | `review-loop` |
| Delivery | Standalone Astro integration (auto-injects via `astro.config.mjs`) |
| Note types | Free text only |
| UI style | Own neutral dark theme, Shadow DOM isolated |
| Storage | JSON file on disk (source of truth) + localStorage (client cache) |
| Export | Markdown generated on-demand from JSON (never persisted) |
| Component unit tests | Vitest — inside the component repo, visible to component agents |
| Acceptance tests | Playwright — isolated repo, invisible to component agents |

## Repository Layout

Three separate git repositories, each independently cloneable:

```
~/Documents/code/cpd/
├── review-loop/           # Repo 1: The shareable package (+ unit tests)
├── review-loop-tests/     # Repo 2: Isolated acceptance tests (Playwright)
└── viv.github.io/                 # Repo 3: Viv's site (consumes the package)
```

## Test Strategy — Two Layers, Strictly Isolated

### Layer 1: Unit Tests (inside component repo)

**Location:** `review-loop/tests/`
**Framework:** Vitest + happy-dom (for client-side DOM tests)
**Purpose:** Guide agent intentions. Each unit test documents what a module should do and why. They act as a specification that agents can read to understand the component's design.

Unit tests cover individual modules in isolation:

| Module | What the tests document |
|--------|------------------------|
| `server/storage.ts` | File read/write, empty store creation, corruption recovery, write queue serialisation |
| `server/middleware.ts` | REST API routing, CRUD for annotations and page notes, export generation, error responses |
| `types.ts` | `createEmptyStore()` shape |
| `client/cache.ts` | localStorage read/write, corruption recovery, missing key handling |
| `client/selection.ts` | XPath generation, range serialisation, context extraction, fallback matching |
| `client/highlights.ts` | Mark injection into text nodes, multi-node wrapping, removal, data attributes |
| `client/export.ts` | Markdown format, page grouping, empty state handling |
| `client/api.ts` | Fetch wrappers, error handling (can mock fetch) |
| `client/ui/fab.ts` | Badge count updates, hidden state, toggle class |
| `client/shortcuts.ts` | Key binding registration, modifier detection, input field suppression |

**Key rules for unit tests:**
- They test individual functions/modules, never the full integration
- They have ZERO knowledge of the acceptance test suite
- They DO NOT reference Playwright, browser automation, or scenario names
- They exist to help agents understand what each module should do
- An agent given the component repo sees these tests as a specification

### Layer 2: Acceptance Tests (separate repo)

**Location:** `review-loop-tests/` (separate git repository)
**Framework:** Playwright
**Purpose:** Black-box end-to-end validation. Tests the integration as a user would — through browser automation against a fixture Astro site.

**Key rules for acceptance tests:**
- They have ZERO knowledge of the component's internal implementation
- They connect to the component only via `file:` dependency in the fixture's `package.json`
- They validate behaviour through the browser, not by reading source code
- They can be written before the component features exist (they'll fail, then pass as features land)
- An agent working on the component repo has NO access to this repository

### Isolation Boundary

```
┌──────────────────────────────┐     ┌────────────────────────────────┐
│  review-loop/        │     │  review-loop-tests/    │
│                              │     │                                │
│  src/          ← source      │     │  fixture/    ← minimal Astro   │
│  tests/        ← unit tests  │     │  tests/      ← Playwright     │
│                              │     │  helpers/    ← test utilities  │
│  Agents see: source + units  │────▶│  Agents see: scenarios only    │
│  Agents DON'T see: scenarios │     │  Agents DON'T see: source      │
│                              │     │                                │
│  No imports from tests repo  │     │  file: dep on package only     │
│  No references to scenarios  │     │  No imports from src/          │
└──────────────────────────────┘     └────────────────────────────────┘
```

## Architecture

### How It Works

1. User adds integration to `astro.config.mjs`
2. During `astro dev`, the integration:
   - Injects client JS on every page via `injectScript('page', ...)`
   - Registers Vite dev server middleware for a REST API at `/__inline-review/api/`
   - REST API reads/writes `inline-review.json` in project root
3. Client creates Shadow DOM host, renders FAB, handles text selection
4. Annotations flow: **client → REST API → JSON file on disk**, with localStorage as a read cache
5. During `astro build`, nothing happens — zero bytes ship

### Package Structure

```
review-loop/
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── vitest.config.ts
├── src/
│   ├── index.ts                  # Integration factory (Astro hooks)
│   ├── types.ts                  # Shared TypeScript interfaces
│   ├── server/
│   │   ├── middleware.ts         # Vite dev server middleware (REST API)
│   │   └── storage.ts           # JSON file read/write
│   └── client/
│       ├── index.ts              # Client entry: bootstrap, idempotency guard
│       ├── types.ts              # Client-specific types
│       ├── api.ts                # REST API client (fetch wrappers)
│       ├── cache.ts              # localStorage read cache
│       ├── selection.ts          # Range serialisation (XPath + offsets + context)
│       ├── annotator.ts          # Core logic: create, edit, delete, restore
│       ├── highlights.ts         # <mark> injection/removal, multi-node wrapping
│       ├── export.ts             # Markdown generation from annotation data
│       ├── shortcuts.ts          # Keyboard shortcut registration
│       ├── styles.ts             # All CSS as template literal strings
│       └── ui/
│           ├── host.ts           # Shadow DOM host creation
│           ├── fab.ts            # Floating action button
│           ├── panel.ts          # Review panel (sidebar)
│           └── popup.ts          # Selection annotation popup
├── tests/
│   ├── server/
│   │   ├── storage.test.ts
│   │   └── middleware.test.ts
│   └── client/
│       ├── cache.test.ts
│       ├── selection.test.ts
│       ├── highlights.test.ts
│       ├── export.test.ts
│       ├── api.test.ts
│       ├── shortcuts.test.ts
│       └── ui/
│           └── fab.test.ts
```

### Storage Design

**Source of truth:** `inline-review.json` in project root, managed via REST API through Vite dev middleware.

**Client cache:** localStorage (`review-loop` key) for fast reads.

**JSON schema:** See `src/types.ts` for `ReviewStore`, `Annotation`, `PageNote`, `SerializedRange` interfaces.

**REST API routes** (Vite dev middleware at `/__inline-review/api/`):

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/annotations` | List all (optional `?page=/path` filter) |
| POST | `/annotations` | Create |
| PATCH | `/annotations/:id` | Update |
| DELETE | `/annotations/:id` | Delete |
| GET | `/page-notes` | List all (optional `?page=/path` filter) |
| POST | `/page-notes` | Create |
| PATCH | `/page-notes/:id` | Update |
| DELETE | `/page-notes/:id` | Delete |
| GET | `/export` | Returns Markdown export |

### UI Design

- **FAB:** Bottom-right, 48px circle, amber (`#D97706`), badge shows page count, z-index 10000
- **Panel:** Right side, 380px wide, two tabs (This Page / All Pages), dark neutral theme
- **Popup:** Appears near selection, textarea + save/cancel, z-index 10001
- **Highlights:** `<mark>` in light DOM with inline styles and `data-air-id` attribute

### Shadow DOM Strategy

Single host `<div id="review-loop-host">` on `document.body` with open shadow root. All UI inside shadow root. Highlights (`<mark>`) in light DOM with inline styles.

### Text Range Serialisation (three-tier fallback)

1. **XPath + offset** — primary, precise
2. **Text + context matching** — fallback if DOM changed
3. **Orphaned** — visible in panel with warning, no highlight

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + Shift + .` | Toggle panel |
| `Escape` | Close panel / dismiss popup |
| `Cmd/Ctrl + Shift + E` | Export to clipboard |
| `Cmd/Ctrl + Shift + N` | Add page note |

### Markdown Export Format

Generated on-demand from the JSON data. Never persisted.

```markdown
# Inline Review — Copy Annotations
Exported: 2026-02-20 14:30

---

## / — Home

### Page Notes
- General note about this page

### Text Annotations
1. **"selected text here"**
   > User's note about this text

---

## /notes — Notes
### Text Annotations
1. **"another passage"**
   > Another note
```

---

## Agent Team Structure

This project is designed for parallel execution by an agent team. Two workstreams run concurrently with a strict isolation boundary between them.

### Team Roles

| Role | Repo Access | Responsibility |
|------|-------------|---------------|
| **Lead** | All three repos | Coordination, task assignment, integration verification |
| **Component Agent(s)** | `review-loop/` only | Feature implementation + unit tests |
| **Acceptance Test Agent** | `review-loop-tests/` only | All Playwright scenarios + fixture site |

### Parallel Workstreams

```
                        ┌─ Workstream A: Component ─────────────────────┐
                        │                                                │
Session 1 (done) ──────▶│  A2: Selection + Popup + Highlights + Units    │
                        │  A3: Panel + Multi-Page + Page Notes + Units   │
                        │  A4: Export + Shortcuts + Polish + Units       │
                        │  A5: Documentation + Publish Prep              │
                        │                                                │
                        └───────────────┬───────────────────────────────┘
                                        │
                                        ▼  (converge: all acceptance tests pass)
                                        │
                        ┌─ Workstream B: Acceptance Tests ──────────────┐
                        │                                                │
                        │  B1: Scaffold + Fixture + Helpers              │
                        │  B2: All 110 Playwright scenarios              │
                        │      (will fail initially — that's expected)   │
                        │  B3: Verify all scenarios pass                 │
                        │                                                │
                        └────────────────────────────────────────────────┘
```

**Workstream B can start immediately** — it only needs the package structure (which exists from Session 1) and the fixture site. All scenarios are written against the planned API surface and UI, not the implementation. They will fail until the corresponding features land in Workstream A.

### Convergence Criteria

The project is complete when:
1. All unit tests pass (`npm test` in `review-loop/`)
2. All 110 acceptance test scenarios pass (`npx playwright test` in `review-loop-tests/`)
3. `astro build` on viv.github.io produces zero integration traces
4. `astro dev` on viv.github.io shows fully working annotation overlay

---

## Implementation Sessions

### Session 1: Package Scaffold + Integration + Vite Middleware + FAB — COMPLETE

**Status:** Done
**Delivered:**
- Package at `~/Documents/code/cpd/review-loop/` with git on `main`
- Astro integration with `injectScript` + Vite dev middleware
- REST API at `/__inline-review/api/` — all CRUD + export endpoints working
- JSON file storage with write queue
- Shadow DOM host + FAB (amber pencil, toggles to X)
- Client API wrapper + localStorage cache
- Wired into viv.github.io as dev dependency

**Verified:**
- FAB renders on dev pages ✓
- REST API returns correct responses ✓
- `astro build` produces zero traces ✓

---

### Workstream A: Component Development (in `review-loop/`)

Each session builds features AND their unit tests together. Unit tests are written first where practical (TDD), serving as a specification for the feature.

#### Session A2: Text Selection + Popup + Highlights + Unit Tests — COMPLETE

**Creates:** `selection.ts`, `annotator.ts`, `highlights.ts`, `ui/popup.ts` + unit tests for each

**Unit tests to write first:**
- `tests/client/selection.test.ts` — XPath generation from DOM nodes, range serialisation with offsets, context extraction (~30 chars), fallback text matching when XPath fails
- `tests/client/highlights.test.ts` — mark injection around text nodes, multi-node selection wrapping, data-air-id attribute, inline style application, mark removal by ID, layout preservation (no extra whitespace)

**Then implement:**
- Selection detection (mouseup handler outside Shadow DOM)
- Range → XPath + offset serialisation
- Context capture (text before/after selection)
- Popup UI near selection with textarea + save/cancel
- Highlight injection: wrap selected text in `<mark>` elements
- API integration: save → REST API → JSON file → localStorage cache
- Restore highlights on page load from stored annotations
- Edit mode: click highlight → popup pre-filled → update/delete

**Exit criteria:**
- All unit tests pass
- Create annotation → reload → highlights restore
- `inline-review.json` contains annotation data
- Edit/delete annotations works
- Cross-element selections handled (multiple marks with same ID)

#### Session A3: Panel + Multi-Page + Page Notes + Unit Tests — COMPLETE

**Creates:** `ui/panel.ts` + modifications to `annotator.ts`, `styles.ts`

**Unit tests to write first:**
- `tests/server/storage.test.ts` — read/write, empty file, corruption recovery, concurrent writes
- `tests/server/middleware.test.ts` — all REST routes, page filtering, error responses, export format

**Then implement:**
- Review panel: slide-in sidebar, 380px, dark theme
- Two tabs: "This Page" / "All Pages"
- Page notes CRUD (add/edit/delete, separate from text annotations)
- Annotation list in panel with selected text preview + note
- Click annotation in panel → scroll to highlight + pulse animation
- All Pages tab: group annotations by page URL with page titles
- Badge count scoped to current page
- Empty states for both tabs

**Exit criteria:**
- All unit tests pass (including server-side)
- Panel shows correct data for current page
- Page notes CRUD works (created, edited, deleted, persisted)
- Click annotation → scrolls to highlight
- All Pages tab groups by URL correctly

#### Session A4: Export + Keyboard Shortcuts + Polish + Unit Tests — COMPLETE

**Creates:** `export.ts`, `shortcuts.ts` + unit tests

**Unit tests to write first:**
- `tests/client/export.test.ts` — markdown format validation, page grouping, page notes section, bold selected text, blockquoted notes, empty export, date format
- `tests/client/shortcuts.test.ts` — key combination detection, modifier key handling, suppress when focus in input/textarea, Escape precedence (capture phase)
- `tests/client/api.test.ts` — fetch mock, error handling, response parsing
- `tests/client/cache.test.ts` — read/write, corruption, missing key
- `tests/client/ui/fab.test.ts` — badge count, hidden when zero, toggle class

**Then implement:**
- Markdown export from annotation data (on-demand, never persisted)
- Copy to clipboard with toast notification
- Keyboard shortcuts (Cmd/Ctrl+Shift+. / Escape / Cmd/Ctrl+Shift+E / Cmd/Ctrl+Shift+N)
- Escape: capture phase, only stops propagation when actually handling
- Toast notification: appears bottom-right above FAB, auto-dismisses
- Clear All in panel with confirmation dialog
- Edge cases: rapid creation, overlapping selections, special characters, empty notes

**Exit criteria:**
- All unit tests pass
- All keyboard shortcuts work
- Export generates correct markdown covering all pages
- Toast appears and auto-dismisses
- Escape doesn't interfere with site's own handlers
- Clear All requires confirmation

#### Session A5: Documentation + Publish Prep + Dev Toolbar Companion

**Creates:** README.md, LICENSE (MIT), CHANGELOG.md, .npmignore, `src/client/toolbar.ts`

**Dev Toolbar companion app (late-stage polish):**
- Register a lightweight Astro Dev Toolbar app via `addDevToolbarApp()` in the integration
- Toolbar icon shows annotation count notification (using `app.toggleNotification()`)
- Click toggles the main overlay panel on/off (calls existing client API)
- Optional mini window with "Export" and "Clear All" quick actions
- ~50-80 lines — thin wrapper that calls our existing functions, no duplicated logic
- Rationale: The full annotation workflow (text selection, highlights, panel) must remain in our standalone overlay because the toolbar's component library is element-level, not text-level. The toolbar app is purely a discoverability/access-point layer.

**Exit criteria:**
- `npm pack` produces valid tarball
- README is comprehensive (install, configure, usage, API)
- Fresh Astro project can use it with 2 lines of config
- `dist/` contains all expected files
- `npm test` passes
- Dev Toolbar icon appears with annotation count, toggles overlay on click

---

### Workstream B: Acceptance Test Suite (in `review-loop-tests/`)

This workstream can start immediately and run in parallel with Workstream A. All scenarios are written against the planned behaviour — they will fail until the corresponding features exist.

#### Session B1: Scaffold Test Repo + Fixture Site + Helpers — COMPLETE

**Creates:** The entire `review-loop-tests/` repository structure

```
review-loop-tests/
├── package.json              # Playwright + Astro deps
├── playwright.config.ts
├── fixture/                  # Minimal Astro site with known content
│   ├── astro.config.mjs      # imports review-loop via file: dep
│   ├── package.json
│   └── src/pages/
│       ├── index.astro       # Known paragraphs for reliable text selection
│       ├── second.astro      # Second page for multi-page tests
│       └── empty.astro       # Minimal content for edge cases
├── tests/                    # All 12 spec files
└── helpers/
    ├── selectors.ts          # Shadow DOM query helpers
    ├── actions.ts            # Common actions (select text, open panel)
    └── assertions.ts         # Custom assertions
```

**Fixture site requirements:**
- Known, stable text content (specific paragraphs with unique, predictable strings)
- Multiple pages with distinct content
- Uses `review-loop` via `"file:../../review-loop"` dependency
- Minimal styling — just enough to have scrollable content

**Helpers provide reusable utilities:**
- `selectors.ts`: Functions to query inside Shadow DOM (pierce through host)
- `actions.ts`: `selectText(page, text)`, `openPanel(page)`, `createAnnotation(page, text, note)`, etc.
- `assertions.ts`: `expectHighlightExists(page, text)`, `expectBadgeCount(page, n)`, etc.

**Exit criteria:**
- `npm install` succeeds in both fixture/ and root
- Fixture site starts with `astro dev`
- Playwright can navigate to the fixture site
- Helper functions are importable from spec files

#### Session B2: All Playwright Scenarios (110 total) — COMPLETE

Write ALL scenarios upfront. They will fail — that's expected and desired. They define the acceptance criteria.

**Spec files and scenario counts:**

| Spec | Scenarios | Covers |
|------|-----------|--------|
| `01-integration.spec.ts` | 4 | Shadow DOM host exists, script injected, no console errors, no content modification |
| `02-fab.spec.ts` | 9 | Correct position, badge count, toggle state, icon change, fixed position on scroll, accessibility (aria-label, title), z-index above site content |
| `03-selection.spec.ts` | 11 | Popup appears on text selection, correct positioning (above/below), save creates annotation, cancel dismisses, empty note still saves, whitespace-only selection ignored, selection inside Shadow DOM ignored, popup dismissed on scroll, long text truncated in popup preview |
| `04-highlights.spec.ts` | 11 | Mark elements created, data-air-id attribute set, correct inline styles (background, border-radius, cursor), cross-element selection creates multiple marks with same ID, click mark opens edit popup, edit updates note, delete removes mark and annotation, marks don't break page layout, marks preserve surrounding whitespace |
| `05-persistence.spec.ts` | 10 | Annotation persists in localStorage cache, annotation persists in JSON file on disk, reload restores highlights, reload restores badge count, JSON file corruption → graceful empty state, localStorage corruption → falls back to API, multiple annotations persist, delete persists after reload, edit persists after reload, annotations survive dev server restart |
| `06-panel.spec.ts` | 15 | Panel slides in from right, correct width (380px, full on mobile), This Page tab shows current page annotations only, All Pages tab shows all annotations grouped by URL, annotation count in tab label, click annotation scrolls to highlight, highlight pulses on scroll-to, page notes section above annotations in This Page tab, empty state when no annotations, empty state when no page notes, panel closes on FAB click, panel closes on Escape, responsive full-width below 480px, Clear All button with confirmation, Clear All removes all data |
| `07-page-notes.spec.ts` | 9 | Add page note via panel, edit existing page note, delete page note, page note persists after reload, page note scoped to current page URL, page note appears in export, multiple page notes per page, empty note not saved, page note shows in All Pages view |
| `08-multi-page.spec.ts` | 8 | Annotations scoped to page URL, badge shows count for current page only, navigating between pages updates badge, All Pages tab shows annotations from all visited pages, annotations on page A don't appear as highlights on page B, page notes scoped correctly across pages, export includes all pages, Astro view transitions preserve annotation state |
| `09-export.spec.ts` | 13 | Export generates valid markdown, includes page URL as heading, includes page title, page notes as bullet list under "Page Notes" heading, annotations numbered under "Text Annotations" heading, selected text in bold quotes, note as blockquote, multiple pages separated by `---`, empty export message when no data, export copies to clipboard, toast notification appears on export, export via keyboard shortcut, export includes annotations from all pages |
| `10-keyboard-shortcuts.spec.ts` | 8 | Cmd/Ctrl+Shift+. toggles panel, Escape closes panel, Escape dismisses popup (popup takes precedence over panel), Cmd/Ctrl+Shift+E exports, Cmd/Ctrl+Shift+N opens page note input, shortcuts don't fire when typing in input/textarea, shortcuts don't fire when typing in popup textarea, Escape doesn't interfere with site's own Escape handlers |
| `11-edge-cases.spec.ts` | 8 | Single word selection, very long passage selection (500+ chars), overlapping selection with existing highlight, rapid annotation creation (3 in quick succession), special characters in selected text (quotes, angle brackets, Unicode), special characters in notes, idempotent initialisation (no duplicate hosts on re-inject), annotation on dynamically loaded content |
| `12-production-safety.spec.ts` | 4 | No scripts in production build HTML, no Shadow DOM host element in production, no `__inline-review` references in bundled JS, no `inline-review.json` file operations attempted |

**Exit criteria:**
- All 110 scenarios written and syntactically valid
- `npx playwright test` runs (tests fail — that's correct)
- No scenario imports from or references the component source code
- Scenarios only interact through the browser (Playwright page object)

#### Session B3: Verify All Scenarios Pass

**Prerequisite:** Workstream A is complete (all features implemented + unit tests pass)

**Actions:**
- Rebuild the component package (`npm run build` in `review-loop/`)
- Reinstall fixture dependencies (`npm install` in `review-loop-tests/fixture/`)
- Run full Playwright suite
- Fix any scenario issues (wrong selectors, timing, etc.)
- All 110 scenarios green

**Exit criteria:**
- `npx playwright test` — 110/110 pass
- No test modifications that weaken the original acceptance criteria

---

## Progress Log

| Date | Session | Status | Notes |
|------|---------|--------|-------|
| 2026-02-20 | Session 1 | Complete | Package scaffolded, FAB + REST API working, wired into viv.github.io |
| 2026-02-20 | Session A2–A4 + B1–B2 | Complete | All features implemented (selection, highlights, popup, panel, page notes, export, shortcuts, toast). 83 unit tests passing. 110 acceptance test scenarios written in separate repo (expected to fail until convergence session). |

## Verification Checklist

- [x] All unit tests pass (`npm test` in `review-loop/`) — 83/83 passing
- [ ] All 110 acceptance test scenarios pass (`npx playwright test` in `review-loop-tests/`)
- [ ] `astro build` on viv.github.io produces zero integration traces
- [ ] `astro dev` on viv.github.io shows fully working annotation overlay
- [ ] `npm pack` produces valid tarball
- [ ] Fresh Astro project install works with 2 lines of config

## Changes to Viv's Website

**`package.json`** — dev dependency (already added):
```json
"devDependencies": {
  "review-loop": "file:../review-loop"
}
```

**`astro.config.mjs`** — integration (already added):
```javascript
import inlineReview from 'review-loop';
export default defineConfig({
  integrations: [mdx(), sitemap(), inlineReview()],
});
```

**`.gitignore`** — exclude annotation data (already added):
```
inline-review.json
```
