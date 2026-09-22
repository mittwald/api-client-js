import { readFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { expect, it } from "vitest";
import * as api from "./index.js";

/**
 * Pins the public surface of the package: every change to it shows up as a diff
 * in `__snapshots__/publicApi.txt` and has to be waved through deliberately
 * instead of slipping in as a side effect.
 *
 * `export *` makes the surface implicit — adding a file to a domain barrel
 * silently publishes everything in it. Since `package.json#exports` only opens
 * `"."`, that barrel _is_ the contract (see docs/adr/0003).
 *
 * The surface has two halves and only one of them exists at runtime:
 * `Object.keys()` on the module sees values (classes, functions, consts) but
 * not the type-only exports, which are roughly half of all exported names. The
 * snapshot is therefore built from the TypeScript checker, which reports both,
 * and marks type-only names with a `type ` prefix — so a name silently turning
 * from a class into a type alias is a visible line change, not an invisible
 * one. `Object.keys()` still runs, as a cross-check that the checker's view of
 * the value half matches what the module actually exports.
 *
 * Not covered: the _shape_ behind each name. A changed method signature, a
 * widened union or a dropped class member keeps the name and passes here — that
 * is `test:compile`'s and the consumers' job, not this test's.
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

it("exportiert zur Laufzeit genau die deklarierten Werte", () => {
  expect(Object.keys(api).sort()).toEqual(declaredExports.values);
});

it("exportiert genau die dokumentierte Fläche", async () => {
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
