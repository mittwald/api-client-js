import { readFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { expect, it } from "vitest";
import * as api from "./index.js";

/**
 * Pins the public surface of the package — same contract and same mechanics as
 * `@mittwald/api-models`' own `publicApi.test.ts`; see the comment there.
 *
 * This package's barrel is one `export *` per ghost, so a forgotten line means
 * a model has no React binding a consumer can reach — `package.json#exports`
 * only opens `"."`, so there is no deep-import fallback.
 *
 * Not covered: the shape behind each name.
 */

const entryPath = fileURLToPath(new URL("./index.ts", import.meta.url));

const readCompilerOptions = (): ts.CompilerOptions => {
  const configPath = ts.findConfigFile(dirname(entryPath), ts.sys.fileExists);
  if (!configPath) throw new Error("tsconfig.json not found");
  const { config } = ts.readConfigFile(configPath, (p) =>
    readFileSync(p, "utf8"),
  );
  const parsed = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    dirname(configPath),
  );
  return { ...parsed.options, noEmit: true };
};

const readDeclaredExports = (): { values: string[]; types: string[] } => {
  const program = ts.createProgram([entryPath], readCompilerOptions());
  const checker = program.getTypeChecker();
  const entry = program.getSourceFile(entryPath);
  if (!entry) throw new Error(`${entryPath} is not part of the program`);
  const entrySymbol = checker.getSymbolAtLocation(entry);
  if (!entrySymbol) throw new Error(`${entryPath} has no module symbol`);

  const values: string[] = [];
  const types: string[] = [];
  for (const exported of checker.getExportsOfModule(entrySymbol)) {
    const target =
      exported.flags & ts.SymbolFlags.Alias
        ? checker.getAliasedSymbol(exported)
        : exported;
    const bucket = target.flags & ts.SymbolFlags.Value ? values : types;
    bucket.push(exported.getName());
  }
  return { values: values.sort(), types: types.sort() };
};

const declaredExports = readDeclaredExports();

it("exports exactly the declared values at runtime", () => {
  expect(Object.keys(api).sort()).toEqual(declaredExports.values);
});

it("exports exactly the documented surface", async () => {
  const { values, types } = declaredExports;
  const surface = [
    ...values.map((name) => ({ name, line: name })),
    ...types.map((name) => ({ name, line: `type ${name}` })),
  ]
    .sort((a, b) => a.name.localeCompare(b.name, "en"))
    .map((entry) => entry.line);

  await expect(surface.join("\n")).toMatchFileSnapshot(
    "./__snapshots__/publicApi.txt",
  );
});
