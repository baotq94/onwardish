# Ship Plan P2

Could-have work for later hardening, cleanup, or modernization.

## Tracking Convention
- Mark `[x]` for milestones that are done.
- When a milestone is completed with code changes and relevant tests passing, add one `Latest (YYYY-MM-DD): ...` line directly under its `DoD:` line.

## Snapshot
- [ ] P2-10: Evaluate whether App Router migration is worth doing.
- [ ] P2-20: Add an automated dependency update flow.
- [ ] P2-30: Add richer E2E coverage for secondary flows.
- [ ] P2-40: Add release and deployment hygiene improvements.
- [ ] P2-50: Add non-functional quality checks if needed.
- [ ] P2-60: Evaluate Claude parity and shared MCP only if cross-tool use becomes real.
- [ ] P2-70: Evaluate Codex automation and hooks after baseline validation is stable.

## Details

### P2-10. App Router evaluation
- [ ] Evaluate whether App Router migration is worth doing.
- DoD: The team has an explicit go or no-go decision for App Router migration based on concrete product or maintenance value.
- Scope: Do not migrate just because Pages Router looks old style.
- Scope: Migrate only if it unlocks clear product or maintenance benefits.

### P2-20. Automated dependency updates
- [ ] Add an automated dependency update flow.
- DoD: Dependency refreshes can be proposed automatically and reviewed in a controlled way.
- Scope: Evaluate Dependabot or Renovate.
- Scope: Keep review focused on `package.json` and `package-lock.json` changes.

### P2-30. Richer secondary-flow E2E
- [ ] Add richer E2E coverage for secondary flows.
- DoD: Important secondary routes and generated outputs have browser or integration coverage where it adds confidence.
- Scope: Cover feed or sitemap generation checks where practical.
- Scope: Cover tag pages.
- Scope: Cover comment embed behavior if practical to test.

### P2-40. Release and deployment hygiene
- [ ] Add release and deployment hygiene improvements.
- DoD: The release path has explicit post-merge and pre-release checks beyond the baseline CI gate.
- Scope: Add preview environment checks.
- Scope: Add a deployment checklist.
- Scope: Add post-merge smoke validation.

### P2-50. Non-functional quality checks
- [ ] Add non-functional quality checks if needed.
- DoD: The repo has explicit guardrails for performance, accessibility, or bundle health when those checks become worth the maintenance cost.
- Scope: Evaluate bundle size tracking.
- Scope: Evaluate performance budgets.
- Scope: Evaluate accessibility checks for key pages.

### P2-60. Claude parity and shared MCP
- [ ] Evaluate Claude parity and shared MCP only if cross-tool use becomes real.
- DoD: If the team starts using Claude Code on this repo, it has an intentional project-scoped setup rather than a half-maintained parallel instruction layer.
- Scope: Mirror only the useful parts of the current Codex structure, such as skills or agents.
- Scope: Add `.mcp.json` only when a team-shared tool integration is worth maintaining.
- Scope: Keep personal preferences and private tools out of shared repo config.

### P2-70. Codex automation and hooks
- [ ] Evaluate Codex automation and hooks after baseline validation is stable.
- DoD: Any added Codex automation or hooks enforce a real deterministic workflow and do not paper over missing lint, test, or CI foundations.
- Scope: Revisit non-interactive Codex automation only after lint, build, and CI are reliable.
- Scope: Add hooks only where a scriptable enforcement point exists.
- Scope: Prefer deterministic scripts and CI over prompt-only enforcement.
