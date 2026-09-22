const { existsSync, readFileSync, statSync } = require("node:fs");
const { dirname, join, relative, resolve } = require("node:path");

/**
 * Enforces the internal-module pattern in packages that use `internal.ts`
 * barrels: an import of a cluster member (a module re-exported by some
 * `internal.ts`) must go THROUGH that `internal.ts`, never via a deep
 * sibling/member path. Keeping a single hand-ordered barrel as the only entry
 * point is what makes the cluster robust against import reordering — a stray
 * deep import can otherwise trigger "Class extends value undefined" /
 * undefined-at-load crashes.
 *
 * See docs/implementation-patterns.md › "internal.ts — the internal-module
 * pattern".
 */

const SOURCE_EXTS = [".ts", ".tsx"];
const JS_EXT_RE = /\.(js|jsx|mjs|cjs)$/;

// This package emits NodeNext ESM, so a relative specifier carries the emitted
// `.js` extension while the file on disk is the `.ts` source.
const resolveModule = (base) => {
  const candidates = [base];
  if (JS_EXT_RE.test(base)) candidates.push(base.replace(JS_EXT_RE, ""));

  for (const candidate of candidates) {
    for (const ext of SOURCE_EXTS) {
      if (existsSync(candidate + ext)) return candidate + ext;
    }
  }
  for (const candidate of candidates) {
    for (const ext of SOURCE_EXTS) {
      const indexed = join(candidate, "index" + ext);
      if (existsSync(indexed)) return indexed;
    }
  }
  return null;
};

// Cache each internal.ts's member set, keyed by file path + mtime.
const clusterCache = new Map();

const exportFromRe = /\bexport\s+(?:\*|\{[^}]*\})\s+from\s+"([^"]+)"/g;

const readCluster = (internalFile) => {
  const mtimeMs = statSync(internalFile).mtimeMs;
  const cached = clusterCache.get(internalFile);
  if (cached && cached.mtimeMs === mtimeMs) return cached.cluster;

  const dir = dirname(internalFile);
  const src = readFileSync(internalFile, "utf8");
  const members = new Set();
  for (const match of src.matchAll(exportFromRe)) {
    const spec = match[1];
    if (!spec.startsWith(".")) continue;
    const resolved = resolveModule(resolve(dir, spec));
    if (resolved) members.add(resolved);
  }
  const cluster = { internalFile, members };
  clusterCache.set(internalFile, { mtimeMs, cluster });
  return cluster;
};

// Walk up from `startDir` collecting every ancestor `internal.ts`.
const findInternalFiles = (startDir) => {
  const found = [];
  let dir = startDir;
  for (;;) {
    for (const ext of SOURCE_EXTS) {
      const candidate = join(dir, "internal" + ext);
      if (existsSync(candidate)) found.push(candidate);
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return found;
};

const toImportPath = (fromFile, targetInternal, originalSpec) => {
  let rel = relative(dirname(fromFile), targetInternal).replace(/\\/g, "/");
  const emittedExt = JS_EXT_RE.exec(originalSpec);
  rel = rel.replace(/\.(ts|tsx)$/, emittedExt ? emittedExt[0] : "");
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel;
};

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description:
        "Import cluster members through their internal.ts barrel, not via a deep sibling/member path.",
    },
    schema: [],
    messages: {
      useInternal:
        'Import "{{name}}" through the cluster barrel "{{internal}}" instead of the deep path "{{spec}}" (internal-module pattern — keeps load order robust).',
    },
  },

  create(context) {
    const filename = context.filename ?? context.getFilename();

    const check = (node) => {
      const spec = node.source.value;
      if (typeof spec !== "string" || !spec.startsWith(".")) return;

      const target = resolveModule(resolve(dirname(filename), spec));
      if (!target) return;

      for (const internalFile of findInternalFiles(dirname(target))) {
        // The barrel itself is allowed to reference its members directly.
        if (internalFile === filename) continue;
        const { members } = readCluster(internalFile);
        if (!members.has(target)) continue;
        // Already importing via this internal.ts? (target would be the barrel)
        if (target === internalFile) return;

        const hasDefault = (node.specifiers ?? []).some(
          (specifier) => specifier.type === "ImportDefaultSpecifier",
        );
        context.report({
          node,
          messageId: "useInternal",
          data: {
            name: spec.split("/").pop() ?? spec,
            internal: "./internal",
            spec,
          },
          // Only auto-fix a pure named import (safe path swap). A default
          // import must become a named one by hand (internal.ts re-exports by
          // name via `export *`, which does not forward default exports).
          fix:
            hasDefault || !node.source.range
              ? undefined
              : (fixer) =>
                  fixer.replaceTextRange(
                    node.source.range,
                    `"${toImportPath(filename, internalFile, spec)}"`,
                  ),
        });
        return;
      }
    };

    return {
      ImportDeclaration: check,
    };
  },
};

module.exports = rule;
