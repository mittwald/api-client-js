import { JSONSchema as JSONSchemaObject } from "json-schema-to-typescript";

/**
 * Anything that may carry the OpenAPI/JSON Schema `deprecated` annotation:
 * schema objects, parameter objects, header objects and operation objects.
 */
export interface MaybeDeprecated {
  deprecated?: boolean;
}

export const isDeprecated = (doc: MaybeDeprecated | undefined): boolean =>
  doc?.deprecated === true;

/**
 * Copies a `deprecated: true` annotation from an OpenAPI object onto the JSON
 * schema that is generated for it. Used where the annotation lives on the
 * OpenAPI object (e.g. a Parameter Object) rather than on its `schema`, because
 * only the schema is handed to the TypeScript compiler.
 */
export const withDeprecation = <T extends JSONSchemaObject>(
  schema: T,
  source: MaybeDeprecated | undefined,
): T | (T & { deprecated: true }) =>
  isDeprecated(source) && !isDeprecated(schema)
    ? { ...schema, deprecated: true }
    : schema;

const jsDocStart = "/**";
const jsDocEnd = "*/";
const deprecatedTag = "@deprecated";

/**
 * `json-schema-to-typescript` emits an `@deprecated` JSDoc tag for interface
 * members and for standalone interfaces, but drops it for standalone type
 * aliases: its `generateStandaloneType` calls the comment generator without the
 * deprecation flag, so `export type Foo = string` ends up with an empty `/**
 * *\/` block. We add the tag back so every generated declaration carries the
 * deprecation.
 */
export const ensureDeprecatedTypeAliasComment = (
  compiled: string,
  tsTypeName: string,
): string => {
  const declaration = `export type ${tsTypeName} `;
  const declarationIndex = compiled.indexOf(declaration);

  if (declarationIndex < 0) {
    return compiled;
  }

  const before = compiled.slice(0, declarationIndex);
  const trimmedBefore = before.trimEnd();

  if (!trimmedBefore.endsWith(jsDocEnd)) {
    return `${before}/**\n * ${deprecatedTag}\n */\n${compiled.slice(
      declarationIndex,
    )}`;
  }

  const commentStart = trimmedBefore.lastIndexOf(jsDocStart);

  if (
    commentStart < 0 ||
    trimmedBefore.slice(commentStart).includes(deprecatedTag)
  ) {
    return compiled;
  }

  const insertAt = commentStart + jsDocStart.length;
  return `${compiled.slice(0, insertAt)}\n * ${deprecatedTag}${compiled.slice(
    insertAt,
  )}`;
};
