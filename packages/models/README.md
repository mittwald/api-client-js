# @mittwald/api-models

Framework-agnostic domain-model layer over `@mittwald/api-client`. Wraps the
mittwald domain in models with behavior; React bindings live in the sibling
package `@mittwald/api-models-react`.

## Overview

Two layers:

- **`@mittwald/api-models`** — the agnostic core.
- **`@mittwald/api-models-react`** — thin React bindings (Ghosts). The
  dependency runs **one-way**, react → core.

### Building blocks

- **Base classes** (`base/`): `BaseModel` → `ReferenceModel` (identity via
  `id`), plus `DataModel<T>` / `ListDataModel` / `ListQueryModel`. Concrete
  models are composed from these via `polytype` multiple inheritance today; the
  decision is to move to plain mixin functions
  ([ADR-0004](docs/adr/0004-mixin-functions-instead-of-polytype.md)).
- **Naming convention** per entity `X`: `X` (reference) · `XCommon` ·
  `XDetailed` · `XListItem` · `XListQuery` · `XList`. Data types in `types.ts`
  come from `MittwaldAPIV2.*`.
- **Behaviors**: per model an interface (`behaviors/types.ts`) plus an API
  implementation (`behaviors/api.ts`). Models never call `api-client` directly,
  only through their behaviors.
- **Registry**: all behaviors hang off a central `config.behaviors`, populated
  by `initApiModels` (see below).
- **Taxonomy**: ~35 domain-oriented top-level groups. The public contract is the
  root barrel, not the folder structure
  ([ADR-0003](docs/adr/0003-public-api-root-barrel.md)).

Term definitions: see [CONTEXT.md](CONTEXT.md).

## Initialization

The consumer passes its dependencies in once at startup:

```ts
import { initApiModels } from "@mittwald/api-models";

initApiModels({
  apiClient /*, defaultPaginationLimit?, usageMetricsUrl?, … */,
});
```

Details and rationale: [ADR-0001](docs/adr/0001-initialization.md).

## Migration from 4.x

This package was reimplemented from the ground up. Code written against the
earlier generation will not compile against it — treat the move as a rewrite,
not an upgrade.

What changed:

- **React bindings moved out.** The `./react` subpath is gone. Ghosts now live
  in the sibling package `@mittwald/api-models-react`, which depends on this one
  ([ADR-0002](docs/adr/0002-agnostic-core-two-packages.md)).
- **Initialization is mandatory.** Models no longer wire themselves up through a
  side-effect import; the consumer calls `initApiModels({ apiClient, … })` once
  at startup. Accessing a behavior before that fails with a clear error instead
  of `undefined` at runtime ([ADR-0001](docs/adr/0001-initialization.md)).
- **`polytype` is gone.** Models are composed from plain mixin functions
  ([ADR-0004](docs/adr/0004-mixin-functions-instead-of-polytype.md)).
- **The root entry point is the contract.** `package.json#exports` exposes only
  `"."`; deep imports into package internals no longer resolve. The behaviors,
  the `config` object and the internal `base` helpers are not part of the public
  surface ([ADR-0003](docs/adr/0003-public-api-root-barrel.md)).
- **Model methods return data instead of touching the DOM.** Downloads hand back
  a `Blob`/`ArrayBuffer` plus a filename; performing the download is the
  consumer's job.

The version number does not reflect this break: the package is released in
lockstep with `@mittwald/api-client`, so the rewrite ships as an ordinary minor.

## Conventions & invariants

- **The core stays agnostic.** No `react`, no DOM (`document`/`window`), no
  mittwald policy in the core; such parts live in `models-react` or in the
  consumer ([ADR-0002](docs/adr/0002-agnostic-core-two-packages.md)).
- **Immutability.** Model instances and their `data` are to be treated as
  **immutable**. `data` is protected by a deep freeze in dev/test (not in
  production, for performance). The instance itself is **not** frozen.
- **Folder naming**: behavior implementations live under `behaviors/` (plural).
- **No deep imports** into package internals; everything goes through the root.

## Documentation

- [CONTEXT.md](CONTEXT.md) — glossary / ubiquitous language
- [docs/implementation-patterns.md](docs/implementation-patterns.md) — recurring
  code idioms (helpers, conventions)
- [docs/adr/](docs/adr/) — architecture decision records (ADRs)
- [docs/api-drift.md](docs/api-drift.md) — known deviations from the generated
  OpenAPI spec
