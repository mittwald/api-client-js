// Hand-ordered internal-module barrel — do not reorder or alphabetize.
// See docs/implementation-patterns.md › "internal.ts — the internal-module pattern".
//
// `File` runs `new File("inmem")` in a static initializer at load time, which
// calls `FileMeta.ofFile()` / `FileContent.ofFile()`. Those two must therefore
// be fully evaluated *before* `File`, so they are exported first. Cluster
// members import each other via this barrel (never via a direct sibling path)
// so this order — not import-statement order — decides evaluation.
export * from "./FileMeta";
export * from "./FileContent";
export * from "./File";
