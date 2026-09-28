const { existsSync, readFileSync, statSync } = require("node:fs");
const { dirname, join, relative, resolve } = require("node:path");
const { ghostNameLiteral } = require("./ghostDecorator.js");
const { readReExports } = require("./reExports.js");
const { resolveModule } = require("./resolveModule.js");

/**
 * Enforces that every `@GhostMakerModel({ name })` class is reachable through
 * the package's root barrel (`src/index.ts`).
 *
 * `package.json#exports` opens only `"."` (see docs/adr/0003), so the root
 * barrel is the entire public contract: a model that never makes it into a
 * domain barrel is unreachable for consumers, with no deep-import fallback —
 * and nothing else notices, because the package itself imports the model
 * through relative paths and compiles fine. This is the cheapest mistake to
 * make (build the model, forget the `export *`) and the most expensive to
 * discover (in a consumer, after release).
 *
 * A model that is deliberately internal opts out at the class, with a reason:
 *
 *     // eslint-disable-next-line api-models/ghostmaker-model-exported -- internal: <why>
 *
 * @GhostMakerModel({ name: "SomeInternalModel" })
 *
 * Intentionally NOT flagged:
 *
 * - Decorators without a static string `name` (the abstract bases
 *   `ReferenceModel`/`ListQueryModel`, and the scoped-AI factory's
 *   `name: cfg.ghostName`): a class expression built inside a factory has no
 *   exported binding of its own, and the abstract bases are not models.
 */

/** Walks up from `startDir` to the directory holding the package manifest. */
const findPackageRoot = (startDir) => {
  let dir = startDir;
  for (;;) {
    if (existsSync(join(dir, "package.json"))) return dir;
    const parent = dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
};

const mtimeOf = (file) => {
  try {
    return statSync(file).mtimeMs;
  } catch {
    return null;
  }
};

const ALL = true;

/**
 * Walks the re-export graph out of `entry` and returns, per file, which of its
 * names the package publishes: `ALL` for a file reached through an unbroken
 * chain of `export *`, or the set of names pulled out of it by an `export { … }
 * from`.
 *
 * Names have to be carried THROUGH intermediate barrels: several domains expose
 * a hand-ordered `internal.ts` cluster with `export { A, B } from
 * "./internal.js"`, and the classes themselves sit one `export *` further down.
 * A traversal that stops at the named re-export declares those models
 * unexported — the whole `article` and `project` clusters. Pushing the
 * requested names down every `export *` of the barrel over-approximates (a name
 * is attributed to all of the barrel's members, not just the one declaring it),
 * which is harmless: members of one cluster cannot share an exported name
 * anyway, or the barrel itself would be ambiguous.
 *
 * `barrels` collects the mtime of every file that carried a re-export, so the
 * result can be invalidated without re-stating the whole tree.
 */
const readSurface = (entry) => {
  const publicNames = new Map();
  const barrels = new Map();

  const merge = (file, names) => {
    const current = publicNames.get(file);
    if (current === ALL) return false;
    if (names === ALL) {
      publicNames.set(file, ALL);
      return true;
    }
    if (!current) {
      publicNames.set(file, new Set(names));
      return true;
    }
    let grew = false;
    for (const name of names) {
      if (!current.has(name)) {
        current.add(name);
        grew = true;
      }
    }
    return grew;
  };

  merge(entry, ALL);
  const queue = [entry];

  while (queue.length > 0) {
    const file = queue.pop();
    const inherited = publicNames.get(file);
    let src;
    try {
      src = readFileSync(file, "utf8");
    } catch {
      continue;
    }
    if (!src.includes("from")) continue;

    let sawReExport = false;
    for (const { spec, names } of readReExports(src)) {
      if (!spec.startsWith(".")) continue;
      const target = resolveModule(resolve(dirname(file), spec));
      if (!target) continue;
      sawReExport = true;

      const carried = names === "*" ? inherited : new Set(names);

      if (merge(target, carried)) queue.push(target);
    }
    if (sawReExport) barrels.set(file, mtimeOf(file));
  }

  return { publicNames, barrels };
};

const surfaceCache = new Map();

const getSurface = (packageRoot) => {
  const cached = surfaceCache.get(packageRoot);
  if (cached) {
    let stale = false;
    for (const [file, mtime] of cached.barrels) {
      if (mtimeOf(file) !== mtime) {
        stale = true;
        break;
      }
    }
    if (!stale) return cached;
  }
  const surface = readSurface(join(packageRoot, "src", "index.ts"));
  surfaceCache.set(packageRoot, surface);
  return surface;
};

/** @type {import("eslint").Rule.RuleModule} */
const rule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "A @GhostMakerModel class must be reachable through the root barrel.",
    },
    schema: [],
    messages: {
      notExportedFromModule:
        'Model "{{name}}" is not exported from its own module, so the barrel cannot re-export it. Write `export class {{name}}`.',
      notInBarrel:
        'Model "{{name}}" is not reachable through the root barrel (src/index.ts). Add `export * from "./{{basename}}.js"` to {{barrel}} — package.json#exports only opens ".", so an unexported model has no deep-import fallback. If it is deliberately internal, disable this rule on the class with a reason.',
    },
  },

  create(context) {
    const filename = context.filename ?? context.getFilename();
    const packageRoot = findPackageRoot(dirname(filename));
    if (!packageRoot) return {};

    const check = (node) => {
      if (!ghostNameLiteral(node)) return;

      if (node.type !== "ClassDeclaration" || !node.id) return;
      if (node.parent?.type !== "ExportNamedDeclaration") {
        context.report({
          node: node.id,
          messageId: "notExportedFromModule",
          data: { name: node.id.name },
        });
        return;
      }

      const published = getSurface(packageRoot).publicNames.get(filename);
      if (published === ALL || published?.has(node.id.name)) return;

      const basename = filename
        .replace(/\.tsx?$/, "")
        .split("/")
        .pop();
      context.report({
        node: node.id,
        messageId: "notInBarrel",
        data: {
          name: node.id.name,
          basename,
          barrel: relative(packageRoot, join(dirname(filename), "index.ts")),
        },
      });
    };

    return {
      ClassDeclaration: check,
      ClassExpression: check,
    };
  },
};

module.exports = rule;
