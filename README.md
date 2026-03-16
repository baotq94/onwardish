onwardish blog

## Giscus discussions

Posts use a stable `discussionId` frontmatter field so comment threads do not depend on the URL path.

Preview the sync plan:

```bash
GITHUB_TOKEN=YOUR_TOKEN npm run discussions:plan
```

Create or migrate discussions in GitHub:

```bash
GITHUB_TOKEN=YOUR_TOKEN npm run discussions:sync
```

Optional filters:

```bash
GITHUB_TOKEN=YOUR_TOKEN node scripts/sync-giscus-discussions.mjs --write --lang=vi --slug=books-in-2025
```

Required token access:

- write access to Discussions for `backluejapanit/onwardish-comments`
