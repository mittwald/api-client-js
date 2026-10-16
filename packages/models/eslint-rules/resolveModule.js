const { existsSync } = require("node:fs");
const { join } = require("node:path");

const SOURCE_EXTS = [".ts", ".tsx"];
const JS_EXT_RE = /\.(js|jsx|mjs|cjs)$/;

/**
 * Resolves a relative import/export specifier to the source file on disk.
 *
 * This package emits NodeNext ESM, so every relative specifier carries the
 * EMITTED `.js` extension while the file on disk is the `.ts` source. Stripping
 * that extension before trying `.ts`/`.tsx` is load-bearing: a resolver that
 * naively appends looks for `Foo.js.ts`, never finds anything, and turns the
 * calling rule into a silent no-op that looks green.
 *
 * @param {string} base Absolute path of the specifier, extension included.
 * @returns {string | null} Absolute path of the source file, or null.
 */
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

module.exports = {
  JS_EXT_RE,
  SOURCE_EXTS,
  resolveModule,
};
