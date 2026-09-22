import { type AxiosResponse, AxiosHeaders } from "axios";

const HEADER_NAME = "x-pagination-totalcount";

/**
 * The single source of truth for a list response's total count.
 *
 * Returns the `x-pagination-totalcount` header when the API sends it, otherwise
 * `fallbackCount` — which defaults to the number of items on the returned page
 * (`response.data.length`). Unlike `extractTotalCountHeader` (which throws when
 * the header is absent), this never throws: a route that starts sending the
 * header is picked up automatically, with the page-length fallback until then.
 *
 * Pass `fallbackCount` explicitly when the page items are not `response.data`
 * itself but nested inside it (e.g. `response.data.leads.length`). Total counts
 * are derived here, in the behavior layer; models must not compute them.
 */
export const resolveTotalCount = (
  response: AxiosResponse<unknown>,
  fallbackCount: number = Array.isArray(response.data)
    ? response.data.length
    : 0,
): number => {
  const header =
    response.headers instanceof AxiosHeaders
      ? response.headers.get(HEADER_NAME)
      : undefined;

  if (typeof header === "string") {
    const parsed = Number(header);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return fallbackCount;
};
