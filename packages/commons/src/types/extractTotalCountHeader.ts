import { ApiClientError } from "../core/index.js";
import assertStatus from "./assertStatus.js";
import { AxiosHeaders } from "axios";
import { Response } from "./Response.js";

const headerName = "x-pagination-totalcount";
const baseError = `Header '${headerName}' is not valid`;

export const extractTotalCountHeader = (response: Response): number => {
  assertStatus(response, 200);

  if (!(response.headers instanceof AxiosHeaders)) {
    throw ApiClientError.fromResponse(
      `${baseError}: Expected headers to be of type AxiosHeaders`,
      response,
    );
  }

  const headerContent = response.headers.get(headerName);

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
