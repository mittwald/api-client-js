/**
 * Reads the re-exports (`export * from`, `export { … } from`, each also as
 * `export type`) out of a module's source text. Both the cluster rule and the
 * public-surface rule walk barrels through this one parser, so they agree on
 * what counts as a re-export.
 *
 * Comments are stripped first: a commented-out re-export must not count — that
 * is exactly the edit these rules have to catch.
 */

const stripComments = (src) =>
  src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/[^\n]*/g, "$1");

const reExportRe =
  /\bexport\s+(?:type\s+)?(\*|\{[^}]*\})\s+from\s+["']([^"']+)["']/g;

const exportedNames = (clause) =>
  clause
    .slice(1, -1)
    .split(",")
    .map((name) =>
      name
        .trim()
        .replace(/^type\s+/, "")
        .split(/\s+as\s+/)[0]
        .trim(),
    )
    .filter(Boolean);

/**
 * @param {string} src
 * @returns {{ spec: string; names: "*" | string[] }[]} Per re-export its
 *   specifier and either `"*"` or the names it pulls out of the target.
 */
const readReExports = (src) =>
  [...stripComments(src).matchAll(reExportRe)].map(([, clause, spec]) => ({
    spec,
    names: clause === "*" ? "*" : exportedNames(clause),
  }));

module.exports = { readReExports };
