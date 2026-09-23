export type HttpPayload = unknown;
export type HttpStatus = number | "default";
export type HttpMediaType = string;

type SafeHttpMethod = "GET" | "HEAD" | "OPTIONS";
type UnsafeHttpMethod = "PUT" | "DELETE" | "POST" | "PATCH";
export type HttpMethod = SafeHttpMethod | UnsafeHttpMethod;

/**
 * `Date` is accepted wherever the API expects a `format: date-time` string; it
 * is serialized to ISO 8601 before the request is sent (see `serializeDates`).
 */
type HeaderValue = string | number | boolean | Date;

export type HttpHeaders = Partial<{
  [TKey: string]: HeaderValue | HeaderValue[];
}>;

export type PathParameters = Record<string, string | number | Date>;

export type QueryParameters = Record<string, unknown>;
