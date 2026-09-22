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
