import is from "@sindresorhus/is";
import cloneDeep from "clone-deep";

/**
 * Name of the TypeScript type binary schemas are mapped to. Exported by
 * `@mittwald/api-client-commons` and imported by the generated type modules.
 */
export const binaryTsType = "BinaryData";

/**
 * Detects the two ways a binary payload can be expressed in an OpenAPI
 * document:
 *
 * - `{ type: "string", format: "binary" }` (OpenAPI 3.0)
 * - `{ type: "string", contentMediaType: "application/octet-stream" }` or `{
 *   type: "string", contentEncoding: "binary" }` (OpenAPI 3.1)
 *
 * `format: "byte"` and `contentEncoding: "base64"` are _not_ binary in this
 * sense; those are plain (base64 encoded) strings.
 */
const isBinarySchema = (something: Record<string, unknown>): boolean => {
  if (something.type !== "string") {
    return false;
  }

  return (
    something.format === "binary" ||
    something.contentEncoding === "binary" ||
    something.contentMediaType === "application/octet-stream"
  );
};

/**
 * Replaces binary string schemas with a custom TypeScript type, so that file
 * uploads are typed as something usable instead of `string`.
 *
 * See
 * https://github.com/bcherny/json-schema-to-typescript#custom-schema-properties
 */
export const binarySchemasToCustomTypes = (
  something: unknown,
  clone = true,
): unknown => {
  if (clone) {
    something = cloneDeep(something);
  }

  if (!is.nonEmptyObject(something)) {
    return something;
  }

  if (is.array(something)) {
    return something.map((item) => binarySchemasToCustomTypes(item, false));
  }

  if (isBinarySchema(something)) {
    const {
      format: ignoredFormat,
      contentEncoding: ignoredContentEncoding,
      contentMediaType: ignoredContentMediaType,
      ...rest
    } = something;

    return {
      ...rest,
      type: "string",
      tsType: binaryTsType,
    };
  }

  return Object.fromEntries(
    Object.entries(something).map(([key, value]) => [
      key,
      binarySchemasToCustomTypes(value, false),
    ]),
  );
};
