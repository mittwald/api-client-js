import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * Under eslintrc these came from the default extension (`.js`) plus the
 * `overrides[].files` patterns contributed by
 * `plugin:@typescript-eslint/recommended`. Flat config collects no extensions
 * implicitly, so the set has to be spelled out.
 *
 * Note this is deliberately *not* passed as the `files` of a config that
 * `extends` the shared configs: that would overwrite their own `files` and
 * spill the TypeScript-only compatibility layer onto plain JavaScript.
 */
const lintedFiles = ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"];

export default tseslint.config(
  {
    ignores: ["**/dist/"],
  },
  {
    linterOptions: {
      // eslintrc never reported these; flat config defaults to "warn". Kept off
      // so the migration stays behaviour-neutral -- the generated clients carry
      // a blanket `/* eslint-disable */` that would otherwise warn on every run.
      reportUnusedDisableDirectives: "off",
    },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    files: lintedFiles,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "[iI]gnored",
          argsIgnorePattern: "[iI]gnored",
          caughtErrorsIgnorePattern: "[iI]gnored",
        },
      ],
      "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    },
  },
  {
    // tsd-style type tests contain deliberate bare member expressions, usually
    // paired with @ts-expect-error.
    files: ["**/*.test-types.ts", "**/*.test-types.tsx"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
);
