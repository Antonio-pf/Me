<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
	- [PRINCIPLE_1_NAME] -> I. Experience-First Delivery
	- [PRINCIPLE_2_NAME] -> II. Type-Safe and Reusable Implementation
	- [PRINCIPLE_3_NAME] -> III. Verification Before Merge (NON-NEGOTIABLE)
	- [PRINCIPLE_4_NAME] -> IV. Performance and Accessibility Budgets
	- [PRINCIPLE_5_NAME] -> V. Observable and Recoverable Releases
- Added sections:
	- Engineering Constraints
	- Delivery Workflow
- Removed sections:
	- None
- Templates requiring updates:
	- .specify/templates/plan-template.md ✅ updated
	- .specify/templates/spec-template.md ✅ updated
	- .specify/templates/tasks-template.md ✅ updated
	- .specify/templates/commands/*.md ⚠ pending (directory not present)
- Deferred TODOs:
	- None
-->

# Me Portfolio Constitution

## Core Principles

### I. Experience-First Delivery
Every change MUST map to a clear user outcome and define acceptance scenarios before
implementation. UI updates MUST preserve mobile and desktop usability, and written
copy MUST stay clear and consistent with portfolio tone. Rationale: a portfolio is
evaluated by end-user perception first, so quality is measured by usable outcomes,
not code volume.

### II. Type-Safe and Reusable Implementation
All application code MUST pass TypeScript checks and favor composition through shared
components over duplicate one-off implementations. New abstractions MUST be justified
by concrete reuse in at least two call sites or by strong isolation value. Rationale:
strict typing and reusable primitives reduce regressions and long-term maintenance
cost.

### III. Verification Before Merge (NON-NEGOTIABLE)
Every delivery MUST include verification evidence before merge: lint pass, build pass,
and feature-level validation (automated tests when feasible, otherwise documented
manual checks). Defects found during verification MUST be resolved or explicitly
tracked before release. Rationale: consistent verification prevents regressions in
presentation, behavior, and deployment.

### IV. Performance and Accessibility Budgets
Features MUST keep page performance and accessibility within acceptable bounds:
avoid unnecessary client-side JavaScript, preserve semantic HTML, support keyboard
navigation, and maintain sufficient color contrast. New animations MUST be purposeful
and avoid degrading responsiveness. Rationale: performance and accessibility directly
affect reach, credibility, and conversion.

### V. Observable and Recoverable Releases
User-critical interactions MUST have measurable telemetry or logging signals, and
failures MUST provide actionable diagnostics without exposing sensitive data. Changes
that can impact user flows SHOULD include a rollback path or a low-risk toggle plan.
Rationale: observable behavior shortens incident resolution and keeps releases safe.

## Engineering Constraints

Primary stack is Next.js + React + TypeScript + Tailwind. New dependencies MUST be
added only when built-in platform capabilities or existing project libraries cannot
reasonably satisfy requirements. Server/client boundaries MUST be explicit, and
security-sensitive values MUST remain outside client bundles.

## Delivery Workflow

Work MUST progress through specification, planning, and task decomposition before
implementation for non-trivial changes. Pull requests MUST document: user scenario,
verification evidence, performance/accessibility impact, and risk/rollback notes.
Reviews MUST block merge if any core principle is violated.

## Governance

This constitution overrides conflicting local conventions. Amendments require a
documented rationale, explicit impact analysis on templates/processes, and approval
from project maintainers. Versioning policy follows semantic increments: MAJOR for
breaking governance changes, MINOR for added principles or substantive expansions,
PATCH for clarifications. Compliance is reviewed at plan approval and again at merge.

**Version**: 1.0.0 | **Ratified**: 2026-04-07 | **Last Amended**: 2026-04-07
