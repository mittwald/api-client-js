import { JSONSchema } from "json-schema-to-typescript";
import {
  ensureDeprecatedTypeAliasComment,
  isDeprecated,
  withDeprecation,
} from "./deprecation.js";

test("isDeprecated only reports an explicit true", () => {
  expect(isDeprecated({ deprecated: true })).toBe(true);
  expect(isDeprecated({ deprecated: false })).toBe(false);
  expect(isDeprecated({})).toBe(false);
  expect(isDeprecated(undefined)).toBe(false);
});

test("withDeprecation copies the annotation onto the schema", () => {
  const schema: JSONSchema = { type: "string" };

  expect(withDeprecation(schema, { deprecated: true })).toEqual({
    type: "string",
    deprecated: true,
  });
});

test("withDeprecation leaves the schema untouched when not deprecated", () => {
  const schema: JSONSchema = { type: "string" };

  expect(withDeprecation(schema, { deprecated: false })).toBe(schema);
  expect(withDeprecation(schema, undefined)).toBe(schema);
});

test("withDeprecation keeps an annotation that is already on the schema", () => {
  const schema: JSONSchema = { type: "string", deprecated: true };

  expect(withDeprecation(schema, { deprecated: true })).toBe(schema);
});

test("ensureDeprecatedTypeAliasComment adds the tag to an empty comment block", () => {
  const compiled = "/**\n */\nexport type LegacySort = string;\n";

  expect(ensureDeprecatedTypeAliasComment(compiled, "LegacySort")).toBe(
    "/**\n * @deprecated\n */\nexport type LegacySort = string;\n",
  );
});

test("ensureDeprecatedTypeAliasComment keeps an existing description", () => {
  const compiled = "/**\n * Old thing\n */\nexport type LegacySort = string;\n";

  expect(ensureDeprecatedTypeAliasComment(compiled, "LegacySort")).toBe(
    "/**\n * @deprecated\n * Old thing\n */\nexport type LegacySort = string;\n",
  );
});

test("ensureDeprecatedTypeAliasComment adds a comment block when there is none", () => {
  const compiled = "export type LegacySort = string;\n";

  expect(ensureDeprecatedTypeAliasComment(compiled, "LegacySort")).toBe(
    "/**\n * @deprecated\n */\nexport type LegacySort = string;\n",
  );
});

test("ensureDeprecatedTypeAliasComment is idempotent", () => {
  const compiled =
    "/**\n * @deprecated\n */\nexport type LegacySort = string;\n";

  expect(ensureDeprecatedTypeAliasComment(compiled, "LegacySort")).toBe(
    compiled,
  );
});

test("ensureDeprecatedTypeAliasComment ignores output without a matching alias", () => {
  const compiled = "export interface LegacySort {\n  a?: string;\n}\n";

  expect(ensureDeprecatedTypeAliasComment(compiled, "LegacySort")).toBe(
    compiled,
  );
});
