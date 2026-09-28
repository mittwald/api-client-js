---
status: accepted
---

# The public API is the curated root barrel; subpaths are gated

Today the root `index.ts` re-exports everything via `export *` — including the
internal machinery (the `config` object, `base` helpers, behaviors) — and via
the wildcard aliases any internal path is importable. For a versioned package
this means: no encapsulation, a huge surface, and every internal rename is a
breaking change. We decide: the **public contract is the curated root entry
point**; internal machinery is not exported, and deep subpath imports are
**gated** via `package.json#exports`.

## Consequences

- Public: model classes, their data/query types, the base classes
  (`ReferenceModel`, `DataModel`, `ListDataModel`, `ListQueryModel`,
  `BaseModel`), `initApiModels`, the curated base helpers consumers rely on
  (`registerDefaultOnBeforeRequestHandler`, `extractId`), a curated `common`
  (`Money`, `Bytes`, `LocalizedText`), and `errors`. Internal: the `config`
  object, the remaining `base` helpers (`validateResponse`, `assertObjectFound`,
  `required`, `lazyGetter` …), and the behavior implementations.
- Because consumers effectively use only the root (778 root vs. 4 subpath
  imports), the internal folder **taxonomy** can be reorganized later without
  breaking consumers. The four existing deep-import leaks (article templates,
  `container/lib/shellwords`, conversation types) are resolved.
- The raw `MittwaldAPIV2.*` type re-exports remain part of the surface; whether
  to wrap them behind package-owned types is a known open question.
