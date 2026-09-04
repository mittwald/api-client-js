import * as path from "path";
import * as url from "url";
import { relativePath } from "./relativePath.js";

const meta = { url: url.pathToFileURL("/tmp/project/src/lib/thing.ts").href };

test("resolves a path relative to the importing module's directory", () => {
  expect(relativePath(meta as ImportMeta, "template.txt")).toBe(
    path.join("/tmp/project/src/lib", "template.txt"),
  );
});

test("joins multiple segments", () => {
  expect(relativePath(meta as ImportMeta, "templates", "type.ts")).toBe(
    path.join("/tmp/project/src/lib", "templates", "type.ts"),
  );
});

test("returns the module directory, trailing separator included, when no segments are given", () => {
  expect(relativePath(meta as ImportMeta)).toBe(
    `${path.sep}tmp${path.sep}project${path.sep}src${path.sep}lib${path.sep}`,
  );
});

test("normalizes parent-directory segments", () => {
  expect(relativePath(meta as ImportMeta, "..", "other.ts")).toBe(
    path.join("/tmp/project/src", "other.ts"),
  );
});
