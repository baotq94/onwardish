---
name: nextjs
description: Use when changing the Next.js app, including routes in src/pages, layouts, components, Tailwind styles, MDX-backed content flow, locale behavior, or site-level client integrations. Do not use for git-only workflow tasks that do not change app behavior.
---

Use this when changing the Next.js application.

- Start from the real entry point: `src/pages/` route, `src/layouts/` wrapper, `src/components/` UI, or `data/` content source.
- Preserve the Pages Router structure already used by the project. Do not introduce App Router conventions unless explicitly requested.
- When content shape changes, update `scripts/generate-content-index.mjs`, regenerate `src/generated/`, and keep `src/lib/content-types.ts` aligned.
- Keep locale behavior consistent with `next-i18next.config.js`: `vi` is the default locale and `ja` is prefixed.
- Follow the current visual system in `tailwind.config.js`, `src/styles/`, and the existing theme tokens before introducing new patterns.
- For post/comment changes, keep `discussionId` and giscus stable-term behavior intact.
- Validate with `npm run build`. If the change affects GitHub Discussions metadata, mention `npm run discussions:plan` / `npm run discussions:sync`.
