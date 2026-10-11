# AGENTS.md

Next.js 16 Pages Router app with React 19, TypeScript, Tailwind CSS, and MDX. Locales use `next-i18next`; comments use giscus; analytics use Vercel Analytics and GoatCounter.

## Structure

- UI: `src/pages/` → `src/layouts/` → `src/components/`.
- Content: `data/post/` and `data/pages/` → `scripts/generate-content-index.mjs` → `src/generated/`.
- Config: `next.config.js`, `next-i18next.config.js`, `tailwind.config.js`, `src/styles/`, and `data/siteMetadata.ts`.
- Comments: `data/giscusConfig.json`, `src/components/Comment.tsx`, and `scripts/sync-giscus-discussions.mjs`.

## Commands

- Install: `npm install`.
- Regenerate content: `npm run generate:content`.
- Validate behavior changes: `npm run build`.
- Preview/write discussion sync: `npm run discussions:plan` / `npm run discussions:sync` (requires `GITHUB_TOKEN`).

## Rules

- Trace the affected route, component, content source, or script before editing. Keep changes targeted and avoid unnecessary dependencies.
- Preserve Pages Router and locale behavior: default `vi` routes are unprefixed; `ja` routes are prefixed.
- Regenerate `src/generated/`; never hand-edit its files.
- Posts require `title`, `date`, `summary`, `lang`, and `discussionId`. Keep discussion IDs stable and flag any required discussion sync.
- Never commit secrets or local credentials.
- Use `.agents/skills/nextjs/SKILL.md` for app changes and `.agents/skills/git-delivery/SKILL.md` for branch, commit, and push work. Agent configuration lives in `.codex/`.
