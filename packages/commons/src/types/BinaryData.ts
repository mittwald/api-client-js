/**
 * Type of a binary value in a request body, i.e. a schema declared as `type:
 * string, format: binary` (OpenAPI 3.0) or `contentMediaType:
 * application/octet-stream` (OpenAPI 3.1).
 *
 * `Blob` is the smallest common denominator that works in every supported
 * runtime: in browsers a `File` picked from an `<input type="file">` or a drop
 * zone is a `Blob`, and Node.js exposes both `Blob` and `File` as globals since
 * v18 / v20 respectively.
 *
 * Node.js values that are _not_ `Blob`s (`Buffer`, `Uint8Array`,
 * `ReadableStream`) are intentionally not part of this type: the multipart
 * serialization used by the API client can only attach `Blob`s without silently
 * mangling the payload. Wrap them explicitly, e.g. `new Blob([buffer])`.
 */
export type BinaryData = Blob;
