---
name: git-delivery
description: Use when the user wants to prepare the current worktree for git delivery, including proposing a branch name, splitting changes into logical commits, and pushing to a remote. Do not use for code changes that are not about git workflow.
---

Use this when preparing the current changes for branch creation, commit planning, and push.

- Inspect the current worktree before proposing any git workflow.
- Propose a branch name using `type/short-task-name` with lowercase hyphenated words.
- Use `feat/`, `fix/`, or `chore/` based on the dominant intent of the changes.
- Split changes into the smallest logical commits; do not mix unrelated changes in the same commit.
- Use Conventional Commit subjects in imperative mood and keep the subject under 72 characters.
- If unrelated local changes are present, call them out and avoid including them unless the user explicitly wants that.
- If the user says "push it to remote" or equivalent, treat that as approval to handle the full git delivery flow: branch creation, staging, commits, and push.
- Default post-delivery behavior is to return the original worktree to a clean `main` state with no uncommitted changes, unless the user explicitly asks to keep a different branch checked out or retain local changes.
- If the starting worktree is dirty and delivery requires syncing or splitting work, preserve the local state safely first (for example with a stash or temporary worktree), and only remove that safety copy after the new remote branches are pushed and verified.
- Keep the workflow concise: propose the branch and commit split briefly, then execute unless the user asked for a dry run only.
