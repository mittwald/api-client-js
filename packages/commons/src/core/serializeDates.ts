const isPlainObject = (value: object): boolean => {
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
};

/**
 * Recursively replaces every `Date` in a request payload with its ISO 8601
 * representation, so that callers may pass a JS `Date` wherever the API expects
 * a `format: date-time` string.
 *
 * The conversion is deliberately schema-agnostic – the runtime has no access to
 * the OpenAPI schema of the operation being called. Everything that is not a
 * `Date`, a plain object or an array is returned as-is (and by reference), so
 * payloads like `FormData`, `Blob`, `ArrayBuffer` or streams are never touched
 * or cloned.
 *
 * The input is never mutated.
 */
export const serializeDates = <T>(value: T): T => {
  if (value instanceof Date) {
    return value.toISOString() as unknown as T;
  }

  if (Array.isArray(value)) {
    return value.map(serializeDates) as unknown as T;
  }

  if (typeof value === "object" && value !== null && isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, serializeDates(entry)]),
    ) as unknown as T;
  }

  return value;
};

export default serializeDates;
