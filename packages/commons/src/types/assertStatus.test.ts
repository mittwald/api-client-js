import { AxiosHeaders } from "axios";
import ApiClientError from "../core/ApiClientError.js";
import assertStatus from "./assertStatus.js";
import assertOneOfStatus from "./assertOneOfStatus.js";
import { Response } from "./Response.js";

const makeResponse = (status: number): Response =>
  ({
    status,
    statusText: "",
    data: {},
    headers: new AxiosHeaders(),
    config: { headers: new AxiosHeaders() },
    request: { some: "request" },
    mediaType: "application/json",
  }) as unknown as Response;

describe("assertStatus", () => {
  test("passes for a matching status", () => {
    expect(() => assertStatus(makeResponse(200), 200)).not.toThrow();
  });

  test("throws an ApiClientError for a mismatching status", () => {
    expect(() => assertStatus(makeResponse(404), 200)).toThrow(ApiClientError);
  });

  test("names both the expected and the received status", () => {
    expect(() => assertStatus(makeResponse(404), 200)).toThrow(
      "Unexpected response status (expected 200, got: 404)",
    );
  });
});

describe("assertOneOfStatus", () => {
  test("passes when the status is one of the expected ones", () => {
    expect(() =>
      assertOneOfStatus(makeResponse(204), [200, 204]),
    ).not.toThrow();
  });

  test("throws when the status is not among the expected ones", () => {
    expect(() => assertOneOfStatus(makeResponse(500), [200, 204])).toThrow(
      "Unexpected response status (expected 200,204, got: 500)",
    );
  });

  test("throws for an empty list of expected statuses", () => {
    expect(() => assertOneOfStatus(makeResponse(200), [])).toThrow(
      ApiClientError,
    );
  });

  test("attaches the response to the error but drops the request", () => {
    let error: ApiClientError | undefined;

    try {
      assertOneOfStatus(makeResponse(500), [200]);
    } catch (e) {
      error = e as ApiClientError;
    }

    expect(error?.response?.status).toBe(500);
    expect(error?.request).toBeUndefined();
  });
});
