import is from "@sindresorhus/is";
import cloneDeep from "clone-deep";

/**
 * The TypeScript type emitted for `string` schemas with `format: date-time` in
 * request position.
 *
 * The parentheses are required: `json-schema-to-typescript` appends `[]` to the
 * `tsType` of array items without wrapping it, so an unparenthesized union
 * would compile to `string | Date[]` instead of `(string | Date)[]`.
 */
export const dateTimeInputTsType = "(string | Date)";

/**
 * Only `date-time` is widened, _not_ `date`.
 *
 * The wire format of `format: date` is `YYYY-MM-DD`, while a `Date` can only be
 * serialized generically (i.e. without knowing the schema) to a full ISO 8601
 * timestamp. Accepting a `Date` there would therefore produce a value the API
 * rejects.
 */
const isDateTimeStringSchema = (schema: Record<string, unknown>): boolean =>
  schema.format === "date-time" &&
  schema.type === "string" &&
  schema.enum === undefined &&
  schema.const === undefined &&
  schema.tsType === undefined;

/**
 * Recursively widens every `{ type: "string", format: "date-time" }` sub-schema
 * to `string | Date`, so that callers may pass a JS `Date` instead of a
 * hand-formatted ISO 8601 string.
 *
 * This must only be applied to schemas in _request_ position: widening a
 * response type would be a breaking change for consumers.
 */
export const widenDateTimeInputs = (
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
    return something.map((item) => widenDateTimeInputs(item, false));
  }

  if (isDateTimeStringSchema(something)) {
    return { ...something, tsType: dateTimeInputTsType };
  }

  return Object.fromEntries(
    Object.entries(something).map(([key, value]) => [
      key,
      widenDateTimeInputs(value, false),
    ]),
  );
};

/**
 * Returns `true` if the given schema contains a `date-time` string _itself_,
 * i.e. without following `$ref`s.
 */
export const containsDateTimeInput = (something: unknown): boolean => {
  if (!is.nonEmptyObject(something)) {
    return false;
  }

  if (is.array(something)) {
    return something.some((item) => containsDateTimeInput(item));
  }

  if (isDateTimeStringSchema(something)) {
    return true;
  }

  return Object.entries(something).some(
    ([key, value]) => key !== "$ref" && containsDateTimeInput(value),
  );
};
