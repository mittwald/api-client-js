/**
 * Local ESLint plugin for `@mittwald/api-models`.
 *
 * All three rules guard invariants the TypeScript compiler cannot see: the
 * hand-ordered `internal.ts` barrels (load order), the ghost name of a model
 * (runtime identity) and the reach of a model through the root barrel (the
 * public contract). The first two may not be disabled — see
 * docs/implementation-patterns.md.
 */

module.exports = {
  rules: {
    "no-deep-cluster-imports": require("./no-deep-cluster-imports.js"),
    "ghostmaker-name-matches-class": require("./ghostmaker-name-matches-class.js"),
    "ghostmaker-model-exported": require("./ghostmaker-model-exported.js"),
  },
};
