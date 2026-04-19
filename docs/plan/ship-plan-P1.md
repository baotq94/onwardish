# Ship Plan P1

Should-have work after the P0 shipping floor is in place.

## Tracking Convention
- Mark `[x]` for milestones that are done.
- When a milestone is completed with code changes and relevant tests passing, add one `Latest (YYYY-MM-DD): ...` line directly under its `DoD:` line.

## Snapshot
- [ ] P1-10: Add a real test script in `package.json`.
- [ ] P1-20: Add unit tests for easy-to-regress logic.
- [ ] P1-30: Add component tests for key UI behavior.
- [ ] P1-40: Add smoke E2E coverage with Playwright.
- [ ] P1-50: Extend CI once tests exist.
- [x] P1-60: Make validation expectations visible to contributors.
- [x] P1-70: Refactor the vibe-coding KT template into an execution guideline.

## Details

### P1-10. Project test script
- [ ] Add a real `test` script in `package.json`.
- DoD: The repo has a deterministic `npm run test` command that can run locally and in CI.
- Scope: Prefer `vitest` for unit and component tests.
- Scope: Keep the CI command deterministic, for example `vitest run`.

### P1-20. Unit tests for logic
- [ ] Add unit tests for easy-to-regress logic.
- DoD: Core non-UI logic has focused automated coverage for common regressions.
- Scope: Cover `src/lib/*` helpers.
- Scope: Cover content filtering and sorting utilities.
- Scope: Cover locale-related helper behavior where practical.

### P1-30. Component tests
- [ ] Add component tests for key UI behavior.
- DoD: Important rendering and interaction logic can be verified without relying on full browser E2E tests.
- Scope: Cover small presentational components with non-trivial logic.
- Scope: Cover components with formatting or rendering behavior that is easy to regress.

### P1-40. Smoke E2E coverage
- [ ] Add smoke E2E coverage with Playwright.
- DoD: The main user flows and route health are exercised in a real browser before release.
- Scope: Home page renders.
- Scope: Blog index renders.
- Scope: Blog detail page renders.
- Scope: Locale behavior works for default `vi` and prefixed `ja`.

### P1-50. CI extension
- [ ] Extend CI once tests exist.
- DoD: CI runs the appropriate test layers in addition to the existing lint and build gates.
- Scope: Keep `npm ci`, `npm run lint`, and `npm run build`.
- Scope: Add `npm run test`.
- Scope: Add E2E in the workflow where runtime and cost are acceptable.

### P1-60. Contributor validation expectations
- [x] Make validation expectations visible to contributors.
- DoD: Contributors can see what to run locally and how to treat lockfile changes before opening a PR.
- Scope: Document local checks before opening a PR.
- Scope: Document when lockfile changes are expected.
- Scope: Document when dependency updates should be reviewed separately from source changes.
- Latest (2026-04-18): Expanded `AGENTS.md`, added `docs/runbooks/local-validation.md`, and linked the runbook from `README.md` so contributors can see the current validation flow, dependency rules, known gaps, and merge-readiness checks; no runtime validation was required for this docs-only change.

### P1-70. Vibe-coding KT template refactor
- [x] Refactor the vibe-coding KT template into an execution guideline.
- DoD: `docs/vibe-coding-kt.md` clearly tells a fresh agent to inspect the current repo and update canonical files such as `AGENTS.md`, plans, and runbooks instead of generating a derivative KT summary by default.
- Latest (2026-04-18): Rewrote `docs/vibe-coding-kt.md` to define primary purpose, non-goals, canonical output preference, quick decision rules, and output contract around patching canonical repo docs; removed the mistaken derivative file `docs/vibe-coding-onwardish.md`; no runtime validation was required for this docs-only change.
