export type HttpPayload = unknown;
export type HttpStatus = number | "default";
export type HttpMediaType = string;

type SafeHttpMethod = "GET" | "HEAD" | "OPTIONS";
type UnsafeHttpMethod = "PUT" | "DELETE" | "POST" | "PATCH";
export type HttpMethod = SafeHttpMethod | UnsafeHttpMethod;

type HeaderValue = string | number | boolean;

export type HttpHeaders = {
  [TKey: string]: HeaderValue | HeaderValue[];
};

export type PathParameters = Record<string, string | number>;
