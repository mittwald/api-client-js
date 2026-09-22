/**
 * Local ESLint plugin for `@mittwald/api-models`.
 *
 * Both rules guard invariants the TypeScript compiler cannot see: the
 * hand-ordered `internal.ts` barrels (load order) and the ghost name of a model
 * (runtime identity). Neither may be disabled — see
 * docs/implementation-patterns.md.
 */

module.exports = {
  rules: {
    "no-deep-cluster-imports": require("./no-deep-cluster-imports.js"),
    "ghostmaker-name-matches-class": require("./ghostmaker-name-matches-class.js"),
  },
};
