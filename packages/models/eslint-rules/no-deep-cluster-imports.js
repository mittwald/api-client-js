const { readFileSync, existsSync, statSync } = require("node:fs");
const { dirname, join, relative, resolve } = require("node:path");
const { JS_EXT_RE, SOURCE_EXTS, resolveModule } = require("./resolveModule.js");
const { readReExports } = require("./reExports.js");

/**
 * Enforces the internal-module pattern in packages that use `internal.ts`
 * barrels: an import or re-export (`export … from`) of a cluster member (a
 * module re-exported by some `internal.ts`) must go THROUGH that `internal.ts`,
 * never via a deep sibling/member path. Keeping a single hand-ordered barrel as
 * the only entry point is what makes the cluster robust against import
 * reordering — a stray deep import can otherwise trigger "Class extends value
 * undefined" / undefined-at-load crashes.
 *
 * See docs/implementation-patterns.md › "internal.ts — the internal-module
 * pattern".
 */

// Cache each internal.ts's member set, keyed by file path + mtime.
const clusterCache = new Map();

const readCluster = (internalFile) => {
  const mtimeMs = statSync(internalFile).mtimeMs;
  const cached = clusterCache.get(internalFile);
  if (cached && cached.mtimeMs === mtimeMs) return cached.cluster;

  const dir = dirname(internalFile);
  const src = readFileSync(internalFile, "utf8");
  const members = new Set();
  for (const { spec } of readReExports(src)) {
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

/**
 * Whether swapping the specifier for the barrel keeps the statement's meaning,
 * so it can be auto-fixed. Not for a `default` import or re-export: internal.ts
 * forwards its members by name via `export *`, which drops default exports, so
 * those have to become named by hand. Not for `export * from` either: pointed
 * at the barrel it would re-export the whole cluster instead of the one
 * module.
 */
const isPathSwapSafe = (node) => {
  if (node.type === "ExportAllDeclaration") return false;
  return !(node.specifiers ?? []).some(
    (specifier) =>
      specifier.type === "ImportDefaultSpecifier" ||
      (specifier.type === "ImportSpecifier" &&
        specifier.imported?.name === "default") ||
      (specifier.type === "ExportSpecifier" &&
        specifier.local?.name === "default"),
  );
};

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description:
        "Import and re-export cluster members through their internal.ts barrel, not via a deep sibling/member path.",
    },
    schema: [],
    messages: {
      useInternal:
        '{{kind}} "{{name}}" through the cluster barrel "{{internal}}" instead of the deep path "{{spec}}" (internal-module pattern — keeps load order robust).',
    },
  },

  create(context) {
    const filename = context.filename ?? context.getFilename();

    const check = (node) => {
      if (!node.source) return;
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

        const internal = toImportPath(filename, internalFile, spec);
        context.report({
          node,
          messageId: "useInternal",
          data: {
            kind: node.type === "ImportDeclaration" ? "Import" : "Re-export",
            name: spec.split("/").pop() ?? spec,
            internal,
            spec,
          },
          fix:
            isPathSwapSafe(node) && node.source.range
              ? (fixer) =>
                  fixer.replaceTextRange(node.source.range, `"${internal}"`)
              : undefined,
        });
        return;
      }
    };

    return {
      ImportDeclaration: check,
      ExportNamedDeclaration: check,
      ExportAllDeclaration: check,
    };
  },
};

module.exports = rule;
