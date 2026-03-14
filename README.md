# viv.me.uk

Personal website for Viv (Matthew Vivian). Built with Astro, Tailwind CSS v4, and GSAP.

## Development

```bash
npm install        # install dependencies
npm run dev        # start dev server on http://localhost:4321
```

## Production Build

```bash
npm run build      # output static files to dist/
npm run preview    # serve the built dist/ locally for testing
```

## Hosting

Static site deployed to GitHub Pages at [viv.me.uk](https://www.viv.me.uk) via GitHub Actions. The `CNAME` file in `public/` is copied to `dist/` during build.

Variation/test pages live under `src/pages/variations/` and are automatically excluded from production builds by the deploy workflow.

## Preview Deploys

`deploy-preview.sh` builds and ships a Docker container to a preview server. Set the `PREVIEW_HOST` environment variable (e.g. via direnv) before running:

```bash
PREVIEW_HOST=your-server ./deploy-preview.sh
```

## Project Documentation

| Document | Purpose |
|----------|---------|
| `docs/engineering-plans/2026-02-project-plan.md` | Master project plan — sessions, progress log |
| `docs/engineering-plans/implementation-plan.md` | Tech stack, architecture, design direction |
| `docs/engineering-plans/content-plan-final.md` | Narrative content, timeline entries, tone guide |
| `docs/style-guide.md` | Writing voice and tone |
| `docs/research/` | Research outputs from Phase 0 sessions |
