---
status: accepted
---

# `models` stays strictly agnostic; shipped as two packages

The value of the `models`/`models-react` split stands or falls on the core being
**free of React, the DOM, and mittwald policy** — that is the only way it is
SSR-safe. We therefore decide: everything React/DOM/policy-specific lives in
`@mittwald/api-models-react` or in the consumer, never in the core. It ships as
**two separate packages** (`@mittwald/api-models`, `@mittwald/api-models-react`)
versioned in lockstep; the dependency runs one-way, react → core.

## Consequences

- Model methods with DOM side effects (file downloads via `document`/`window` in
  `RecoveryCodes`, `Container`, `CronjobExecution`, `DnsZone`,
  `ExtensionInstance`) **return data instead** (`Blob`/`ArrayBuffer`/string +
  filename); the actual download is performed by a browser helper outside the
  core.
- UI in the core (`fyndr/util/LeadUI.tsx` with `react`/`@tabler`) moves out.
- The `@mittwald.de` heuristic `isEmployee` is not hardcoded in the package:
  primarily `data.isEmployee`, with a fallback injected via `initApiModels` when
  needed.
- An ESLint guard in `packages/models/.eslintrc.yml` (`no-restricted-imports`
  for `react`/`react-dom`/`@tabler/*`/`@mittwald/flow-react-components`,
  `no-restricted-globals` for `document`/`window`) prevents regressions.
- Agnostic consumers (Node/CLI) get a react-free dependency tree. The core loads
  `@mittwald/react-ghostmaker` (for the `@GhostMakerModel` decorator and
  `getModelName`) only through its React-free entry
  `@mittwald/react-ghostmaker/model`, where `react`/`@tanstack/react-query` are
  optional peers. The ESLint guard forbids the ghostmaker main entry in the
  core, since that one loads React.
