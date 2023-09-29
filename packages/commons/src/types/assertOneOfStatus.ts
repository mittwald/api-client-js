import ApiClientError from "../core/ApiClientError.js";
import { Response } from "./Response.js";

export default function assertOneOfStatus<
  T extends Response,
  S extends T["status"],
>(response: T, expectedStatus: S[]): asserts response is T & { status: S } {
  if (!expectedStatus.includes(response.status as S)) {
    throw ApiClientError.fromResponse(
      `Unexpected response status (expected ${expectedStatus}, got: ${response.status})`,
      response,
    );
  }
}
