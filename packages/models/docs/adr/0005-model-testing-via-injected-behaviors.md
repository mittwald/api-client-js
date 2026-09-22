---
status: accepted
---

# Unit-test models by injecting fake behaviors into the registry

Models reach the API only through their `behaviors` — an injectable per-domain
interface installed into the `config.behaviors` registry at startup by
`initApiModels`. We test model _logic_ (construction from data, derived getters,
guards, correct delegation) by installing fake behaviors into that same registry
and treating the `api.ts` mapping layer as the boundary rather than re-testing
it. Tests run under vitest in the default `node` environment — the agnostic core
needs no DOM.

A small package-internal test helper is the seam: `installBehaviors(partial)`
writes partial fakes onto the registry's Proxy target and `resetBehaviors()`
clears it back to its fail-fast state, called from a per-test-file `afterEach`
so the module-singleton `config` cannot leak between tests. Fakes are hybrid:
inline `vi.fn` stubs returning fixture data by default, and a stateful in-memory
fake only where a flow spans several behavior calls (read-after-write,
list-after-mutation). Fixture data comes from lazily-added, typed builder
functions per `*Data` type (`buildXData(overrides?)`), since the `*Data` types
are compile-time-only OpenAPI derivations with no runtime examples to import.

## Considered options

- **Fake the `MittwaldAPIV2Client` and wire real behaviors via `initApiModels`
  (rejected).** Highest fidelity, but forces reconstructing the client for every
  method a model touches and tests the api-mapping layer we deliberately treat
  as the boundary.
- **Direct `config.behaviors.<domain> = fake` assignment (rejected).** No
  helper, but repetitive, easy to forget the reset, and reaches raw into the
  internal `config`.
- **Inject via a helper against the Proxy registry (chosen).** Targets the seam
  directly, gives isolation, and needs no api-client fake.
- **Pure in-memory fakes for all ~60 domains, or generating fixtures from the
  OpenAPI spec (rejected for now).** Overkill for transform-level assertions and
  heavy to build and maintain; kept as a later option if broad coverage is
  pursued.

## Consequences

- **The `behaviors` seam is the single injection point** for tests — reinforcing
  ADR-0001's registry design and CONTEXT.md's "models never call api-client
  directly".
- **Scope for the pre-publish milestone** is the shared foundation (base
  classes, the registry/init fail-fast contract, `extractId` / `required` /
  `assertObjectFound`, aggregate references) plus one model per structural
  pattern (reference + delegation, data + derived getters, list +
  query/pagination, ghostmaker `instanceof` identity, `DownloadableFile`). Broad
  per-domain coverage is deliberately left as follow-on work.
- **The test helper is written publish-ready under `testing/`** but its
  `@mittwald/api-models/testing` export is deferred to the packaging step
  (P0-4); until then it is imported only via relative paths from tests.
- **The ghostmaker identity path is a regression net** for the planned polytype
  → mixin migration (ADR-0004).
- **Known friction:** `assertObjectFound` constructs `ObjectNotFoundError`,
  which imports `getModelName` from the react-coupled `react-ghostmaker` main
  entry (the P0-2 residual). Its error path may need a targeted mock under the
  node test environment; the found path tests freely.
