export default {
  roots: ["src"],
  preset: "ts-jest/presets/default-esm",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        diagnostics: {
          /**
           * Ts-jest downgrades `module: "NodeNext"` to `"ESNext"` in ESM mode,
           * which changes how a default import of a CommonJS dependency is
           * typed. `OpenApiSpec.ts` relies on the NodeNext interop shape
           * (`OpenAPISchemaValidator.default`) and is correct under the real
           * build; only ts-jest's view of it is wrong. `test:compile` still
           * type-checks the file with the project's own tsconfig.
           */
          exclude: ["**/openapi/OpenApiSpec.ts"],
        },
      },
    ],
  },
  // Report on every source file, not just the ones a test happens to import,
  // so untested modules show up as gaps instead of being left out.
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.test.{ts,tsx}",
    "!src/**/*.test-types.ts",
    "!src/**/__fixtures__/**",
    "!src/**/index.ts",
  ],
};
