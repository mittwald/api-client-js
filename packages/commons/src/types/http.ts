export type HttpPayload = unknown;
export type HttpStatus = number;
export type HttpMediaType = string;

type SafeHttpMethod = "GET" | "HEAD" | "OPTIONS";
type UnsafeHttpMethod = "PUT" | "DELETE" | "POST" | "PATCH";
export type HttpMethod = SafeHttpMethod | UnsafeHttpMethod;

export type HttpHeaders = Partial<{
  [TKey: string]: string;
}>;

export type PathParameters = Record<string, string | number>;
