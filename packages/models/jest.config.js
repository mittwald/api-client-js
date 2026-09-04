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
    // Type-only modules and behavior bindings carry no logic of their own.
    "!src/**/types.ts",
    "!src/**/behaviors/api.ts",
  ],
};
