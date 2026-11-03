import { HttpMethod } from "../types/index.js";

export interface DeprecationEvent {
  operationId: string;
  method: HttpMethod;
  path: string;
  /**
   * Where the deprecation was detected: the operation is marked as deprecated
   * in the OpenAPI spec, or the response carried a `Deprecation` (RFC 9745) or
   * `Sunset` (RFC 8594) header.
   */
  source: "spec" | "response-header";
  /** Date from the `Deprecation` response header, if sent. */
  deprecation?: Date;
  /** Date from the `Sunset` response header, if sent. */
  sunset?: Date;
}

/**
 * Called each time a deprecated operation is used. Errors thrown (or promises
 * rejected) by the handler are swallowed and never affect the request.
 */
export type DeprecationHandler = (
  event: DeprecationEvent,
) => void | Promise<void>;

export const deprecationWarningCode = "MITTWALD_API_DEPRECATED_OPERATION";

export const formatDeprecationMessage = (event: DeprecationEvent): string => {
  const operation = `API operation "${event.operationId}" (${event.method} ${event.path})`;
  return event.sunset
    ? `${operation} is deprecated and will be removed after ${event.sunset.toISOString()}.`
    : `${operation} is deprecated.`;
};

/**
 * Emits a Node `DeprecationWarning` via `process.emitWarning` (so
 * `--no-deprecation` and `--throw-deprecation` apply), or a `console.warn` in
 * environments without it, e.g. browsers.
 */
export const emitDeprecationWarning = (event: DeprecationEvent): void => {
  const message = formatDeprecationMessage(event);
  const nodeProcess = globalThis.process;

  if (typeof nodeProcess?.emitWarning === "function") {
    nodeProcess.emitWarning(message, {
      type: "DeprecationWarning",
      code: deprecationWarningCode,
      detail:
        "Pass an `onDeprecation` handler in the client options to handle or silence this warning.",
    });
  } else {
    console.warn(`[${deprecationWarningCode}] ${message}`);
  }
};

const operationKey = (event: DeprecationEvent): string =>
  `${event.method} ${event.path} ${event.operationId}`;

/** Wraps a handler so that it only sees the first event of each operation. */
export const oncePerOperation = (
  handler: DeprecationHandler,
): DeprecationHandler => {
  const seen = new Set<string>();

  return (event) => {
    const key = operationKey(event);
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    return handler(event);
  };
};

/** Warns once per operation, shared by all clients in the process. */
export const defaultDeprecationHandler: DeprecationHandler = oncePerOperation(
  emitDeprecationWarning,
);

type HeadersLike =
  { get(name: string): unknown } | Record<string, unknown> | undefined | null;

const getHeader = (headers: HeadersLike, name: string): string | undefined => {
  if (!headers) {
    return undefined;
  }

  const value =
    typeof headers.get === "function"
      ? (headers as { get(name: string): unknown }).get(name)
      : Object.entries(headers).find(
          ([key]) => key.toLowerCase() === name.toLowerCase(),
        )?.[1];

  if (value === undefined || value === null || value === false) {
    return undefined;
  }
  return String(value).trim();
};

const toDate = (value: number): Date | undefined =>
  Number.isNaN(value) ? undefined : new Date(value);

/** RFC 9745 structured field date (`@1688169599`) or a legacy HTTP-date. */
const parseDeprecationDate = (value: string): Date | undefined => {
  const structured = /^@(-?\d+)$/.exec(value);
  if (structured) {
    return toDate(Number(structured[1]) * 1000);
  }
  // Older drafts used `true` or an HTTP-date; numbers alone are no date here.
  return /[a-z]/i.test(value) ? toDate(Date.parse(value)) : undefined;
};

export interface DeprecationHeaderInfo {
  deprecation?: Date;
  sunset?: Date;
}

/**
 * Reads the `Deprecation` (RFC 9745) and `Sunset` (RFC 8594) response headers.
 * Returns `undefined` if neither is present. Either header alone signals a
 * deprecation; unparseable dates are left out.
 */
export const parseDeprecationHeaders = (
  headers: HeadersLike,
): DeprecationHeaderInfo | undefined => {
  const deprecationHeader = getHeader(headers, "deprecation");
  const sunsetHeader = getHeader(headers, "sunset");

  if (deprecationHeader === undefined && sunsetHeader === undefined) {
    return undefined;
  }

  const info: DeprecationHeaderInfo = {};
  const deprecation =
    deprecationHeader !== undefined
      ? parseDeprecationDate(deprecationHeader)
      : undefined;
  const sunset =
    sunsetHeader !== undefined ? toDate(Date.parse(sunsetHeader)) : undefined;

  if (deprecation) {
    info.deprecation = deprecation;
  }
  if (sunset) {
    info.sunset = sunset;
  }
  return info;
};

/** Calls the handler, isolating the request from anything it throws. */
export const notifyDeprecation = (
  handler: DeprecationHandler,
  event: DeprecationEvent,
): void => {
  try {
    const result = handler(event);
    if (result && typeof result.catch === "function") {
      result.catch(() => undefined);
    }
  } catch {
    // A broken deprecation handler must never fail the API call.
  }
};
