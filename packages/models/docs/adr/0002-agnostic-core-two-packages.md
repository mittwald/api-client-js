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
- An ESLint guard (`no-restricted-imports` for `react`/`@tabler`/`@/…`/
  `shared/…`, `no-restricted-globals` for `document`/`window`) on
  `src/packages/models` prevents regressions.
- Agnostic consumers (Node/CLI) get a react-free dependency tree.
  `@mittwald/react-ghostmaker` (a core dep for the `@GhostMakerModel` decorator)
  must declare `react`/`react-query` as _optional_ peers, or be split react-free
  upstream.
