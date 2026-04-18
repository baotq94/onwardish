# Ship Plan P0

Must-have work before calling this repo ready to ship on the current stack.

## Tracking Convention
- Mark `[x]` for milestones that are done.
- When a milestone is completed with code changes and relevant tests passing, add one `Latest (YYYY-MM-DD): ...` line directly under its `DoD:` line.

## Snapshot
- [ ] P0-10: Fix the lint pipeline for Next.js 16.
- [ ] P0-20: Keep installs reproducible with the tracked lockfile and `npm ci`.
- [ ] P0-30: Add a minimum CI gate for pull requests.
- [ ] P0-40: Make the production build the required validation.
- [x] P0-50: Document the team dependency rule.
- [x] P0-60: Document the current routing decision.

## Details

### P0-10. Fix the lint pipeline for Next.js 16
- [ ] Fix the lint pipeline for Next.js 16.
- DoD: `npm run lint` succeeds on a clean checkout using a supported Next.js 16 and ESLint setup.
- Scope: Replace `next lint` in `package.json` with direct ESLint CLI usage.
- Scope: Migrate from legacy `.eslintrc.json` to a working ESLint 9 config, or align the toolchain another safe way.
- Scope: Verify the lint command works from a clean install.

### P0-20. Reproducible installs
- [ ] Keep installs reproducible with the tracked lockfile and `npm ci`.
- DoD: CI and production installs use the committed `package-lock.json` deterministically instead of fresh semver resolution.
- Scope: Keep `package-lock.json` tracked in git.
- Scope: Use `npm ci` in CI/CD instead of `npm install`.
- Scope: Treat dependency updates as intentional changes that include lockfile review.

### P0-30. Minimum CI gate
- [ ] Add a minimum CI gate for pull requests.
- DoD: Every pull request runs the baseline install and validation commands before merge.
- Scope: Run `npm ci`.
- Scope: Run `npm run lint`.
- Scope: Run `npm run build`.

### P0-40. Production build as required validation
- [ ] Make the production build the required validation.
- DoD: The production build passes from a clean environment and remains the required release check.
- Scope: Keep `npm run generate:content` in the build path.
- Scope: Verify `npm run build` passes from a clean environment.

### P0-50. Team dependency rule
- [x] Document the team dependency rule.
- DoD: Contributors have one clear source of truth for semver ranges, lockfiles, and install commands in local and CI workflows.
- Scope: `package.json` defines allowed ranges.
- Scope: `package-lock.json` defines the exact installed dependency tree.
- Scope: CI/CD installs from the lockfile, not fresh semver resolution.
- Latest (2026-04-18): Updated `AGENTS.md` and added `docs/runbooks/local-validation.md` to document `package.json` versus `package-lock.json`, intentional lockfile review, and `npm ci` for reproducible install paths; no runtime validation was required for this docs-only change.

### P0-60. Routing decision
- [x] Document the current routing decision.
- DoD: The team has an explicit record that shipping on Pages Router is acceptable and App Router migration is not required for this release.
- Scope: Note that the app runs on a modern runtime but still uses Pages Router.
- Scope: Record that App Router migration is not a P0 requirement.
- Latest (2026-04-18): Updated `AGENTS.md` to state that the repo intentionally ships on the Pages Router and should not receive App Router migration work unless explicitly requested; no runtime validation was required for this docs-only change.
