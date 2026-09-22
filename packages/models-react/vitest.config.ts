import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    // The package ships no unit tests yet; without this the target fails.
    passWithNoTests: true,
  },
});
