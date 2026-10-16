import { ApiClientError } from "../core/index.js";
import assertStatus from "./assertStatus.js";
import type { AxiosHeaders } from "axios";
import { Response } from "./Response.js";

const headerName = "x-pagination-totalcount";
const baseError = `Header '${headerName}' is not valid`;

/**
 * Duck-typed instead of `instanceof AxiosHeaders`: with two axios copies in a
 * consumer's dependency tree (e.g. their own axios instance passed to
 * `ApiClientBase`), the headers come from the other copy's class and
 * `instanceof` fails.
 */
const hasHeaderGetter = (
  headers: unknown,
): headers is Pick<AxiosHeaders, "get"> =>
  typeof headers === "object" &&
  headers !== null &&
  typeof (headers as { get?: unknown }).get === "function";

export const extractTotalCountHeader = (response: Response): number => {
  assertStatus(response, 200);

  const headers = response.headers;

  if (!hasHeaderGetter(headers)) {
    throw ApiClientError.fromResponse(
      `${baseError}: Expected headers to be of type AxiosHeaders`,
      response,
    );
  }

  const headerContent = headers.get(headerName);

  if (typeof headerContent !== "string") {
    throw ApiClientError.fromResponse(
      `${baseError}: value is not of type string (is ${typeof headerContent} instead)`,
      response,
    );
  }

  const asNumber = Number.parseInt(headerContent);

  if (isNaN(asNumber)) {
    throw ApiClientError.fromResponse(
      `${baseError}: value is not a valid number`,
      response,
    );
  }

  return asNumber;
};
