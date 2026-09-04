import { AxiosError, AxiosHeaders } from "axios";
import ApiClientError from "./ApiClientError.js";
import { AnyResponse } from "../types/Response.js";

const makeResponse = (status = 500): AnyResponse => {
  const config = {
    url: "v2/projects",
    method: "GET",
    headers: new AxiosHeaders(),
  };

  return {
    status,
    statusText: "Internal Server Error",
    data: { message: "boom" },
    headers: new AxiosHeaders(),
    config,
    request: { some: "request" },
    mediaType: "application/json",
  } as unknown as AnyResponse;
};

describe("constructor", () => {
  test("is recognizable as ApiClientError and as AxiosError", () => {
    const error = new ApiClientError("nope");

    expect(error).toBeInstanceOf(ApiClientError);
    expect(error).toBeInstanceOf(AxiosError);
    expect(error).toBeInstanceOf(Error);
  });

  test("uses its own name instead of the inherited one", () => {
    expect(new ApiClientError("nope").name).toBe("ApiClientError");
  });

  test("keeps message and code", () => {
    const error = new ApiClientError("nope", "ERR_NOPE");

    expect(error.message).toBe("nope");
    expect(error.code).toBe("ERR_NOPE");
  });
});

describe("fromResponse", () => {
  test("carries over config, request and response of the failed call", () => {
    const response = makeResponse();

    const error = ApiClientError.fromResponse("unexpected status", response);

    expect(error.message).toBe("unexpected status");
    expect(error.config).toBe(response.config);
    expect(error.request).toBe(response.request);
    expect(error.response).toBe(response);
  });

  test("exposes the response status via the response", () => {
    const error = ApiClientError.fromResponse(
      "unexpected status",
      makeResponse(404),
    );

    expect(error.response?.status).toBe(404);
  });

  test("produces an instance that is catchable as ApiClientError", () => {
    expect(() => {
      throw ApiClientError.fromResponse("unexpected status", makeResponse());
    }).toThrow(ApiClientError);
  });
});
