---
status: accepted
---

# Compose models with plain mixin functions instead of polytype

Model composition currently rests on `polytype`'s `classes(...)` multiple
inheritance (272 composite classes). `polytype` is niche and forces a
`@lazyGetter` workaround for its "this in base constructors" limitation. We
evaluated `ts-mixer` (more widespread) but it **regresses native `instanceof`**
(requires `hasMixin`), which the core relies on heavily. We decide to compose
with the **plain TypeScript mixin-function pattern** — zero dependency: a linear
single-inheritance *identity* chain (`BaseModel → ReferenceModel → …`) plus
generic *capability* mixin functions (`WithData<T>()`, `WithListData<T>()`) for
the parts that only bolt on data. Validated by a throwaway PoC (plain
mixin-function composition across a 5-level `instanceof` chain); the PoC folder
has since been removed, its conclusions captured in this ADR.

## Considered options

- **polytype (status quo)** — preserves `instanceof`, but is niche and imposes the
  `@lazyGetter` constructor workaround.
- **ts-mixer** — more widespread, and its `settings.initFunction` is cleaner than
  `@lazyGetter`, but native `instanceof` returns `false` for mixed classes
  (`hasMixin` required). The core uses `instanceof` pervasively (hundreds of
  sites) — rejected.
- **Plain mixin functions (chosen)** — native `instanceof` across the whole
  chain, zero dependency, the standard documented TS pattern.

## Consequences

- **Native `instanceof` is preserved.** It is only needed on the linear identity
  chain; the PoC confirmed it across a 5-level chain (`ServerArticle` →
  `HostingArticle` → `ArticleCommon` → `Article` → `ReferenceModel`), including an
  `abstract` intermediate class.
- **The ghostmaker/polytype coupling dissolves.** `@mittwald/react-ghostmaker`'s
  **main entry** resolves identity via the default prototype-chain walk — the PoC
  resolved a `ServerArticle` four levels below the `@GhostMakerModel` decorator.
  The `@mittwald/react-ghostmaker/polytype` import is dropped.
- **`@lazyGetter` can be removed** — normal constructors and getters work on a
  normal prototype chain.
- **Standalone generic bases and generic mixins are separate primitives.**
  `class DataModel<T> extends WithData<T>()(BaseModel)` does not compile
  (TS2562 — a base-class expression cannot reference the class's own type
  parameter). `DataModel<T>` / `ListDataModel<T>` stay plain generic classes; the
  mixin is used only for the *combining* case.
- **Ergonomic cost:** the capability mixin is a typed marker (`declare readonly
  data: T`), so each concrete class still declares and assigns its own field and
  threads arguments through `super()`; the `Ctor` helper type uses
  `...args: any[]`. Mild, local, explicit.
- **Migration scope:** 272 `classes(...)` composites + 82 standalone
  `extends DataModel<…>` sites. No `classes(...)` uses 3+ bases, so an identity
  chain plus one capability mixin is structurally sufficient.
