# AGENTS.md

## Project context
- Single Next.js 16 app using the Pages Router, React 19, TypeScript, Tailwind CSS, and MDX content.
- Content lives in `data/post/` and `data/pages/`; generated indexes live in `src/generated/`.
- Internationalization uses `next-i18next` with `vi` as the default locale and `ja` as the secondary locale.
- Comments use giscus with stable discussion terms from `discussionId`; analytics use Vercel Analytics and GoatCounter.

## Canonical references
- `next.config.js` for Next.js runtime configuration and MDX loader wiring.
- `next-i18next.config.js` for locale behavior.
- `tailwind.config.js` and `src/styles/` for visual system and theme tokens.
- `data/siteMetadata.ts` and `data/giscusConfig.json` for site-level metadata and comments config.
- `scripts/generate-content-index.mjs` for generated content shape.
- `scripts/sync-giscus-discussions.mjs` for GitHub Discussions creation and migration.
- `.codex/config.toml` and `.codex/agents/*.toml` for Codex multi-agent behavior.
- `.agents/skills/nextjs/SKILL.md` and `.agents/skills/git-delivery/SKILL.md` for repo-specific skills.

## Build and test
- Install deps: `npm install`
- Regenerate content index: `npm run generate:content`
- Main validation: `npm run build`
- Discussion sync preview: `GITHUB_TOKEN=... npm run discussions:plan`
- Discussion sync write: `GITHUB_TOKEN=... npm run discussions:sync`

## Guardrails
- Do not hand-edit `src/generated/content.ts` or `src/generated/content-manifest.ts`; regenerate them.
- When adding or editing posts, keep required frontmatter valid. Posts must include `title`, `date`, `summary`, `lang`, and `discussionId`.
- Preserve locale-aware routing and content behavior. Default `vi` routes are unprefixed; `ja` routes are prefixed.
- Follow the existing Pages Router structure: route in `src/pages/`, layout in `src/layouts/`, UI in `src/components/`, content in `data/`.
- Prefer small, targeted changes over broad refactors unless the task explicitly asks for structural cleanup.
- Avoid new dependencies unless the current stack cannot reasonably support the change.
- Never commit secrets, GitHub tokens, or local-only credentials.

## Workflow
- Start by identifying the real entry point: page route, layout, component, content source, or script.
- For UI work, trace `src/pages/` -> `src/layouts/` -> `src/components/`.
- For content/schema work, trace `data/` -> `scripts/generate-content-index.mjs` -> `src/generated/`.
- For comment/discussion changes, check both `src/components/Comment.tsx` and `scripts/sync-giscus-discussions.mjs`.
- After behavior changes, run `npm run build`.
- If a change affects discussion metadata or post identifiers, call out whether `npm run discussions:plan` / `npm run discussions:sync` should be run.
- Use the `git-delivery` skill or `release-manager` agent for branch, commit, and push workflow.
