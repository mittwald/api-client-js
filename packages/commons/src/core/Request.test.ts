import Request from "./Request.js";
import { AxiosError, AxiosInstance } from "axios";
import { jest } from "@jest/globals";
import { QueryParameters } from "../types/index.js";

const requestFn = jest.fn();

const mockedAxios = {
  request: requestFn,
} as unknown as AxiosInstance;

beforeEach(() => {
  jest.resetAllMocks();
});

describe("query parameters", () => {
  const op = {
    path: "/",
    operationId: "test",
    method: "GET",
  } as const;

  const executeRequest = (query: QueryParameters): string => {
    const request = new Request(op, { queryParameters: query });
    request.execute(mockedAxios);
    const requestConfig = requestFn.mock.calls[0][0] as {
      params: URLSearchParams;
    };
    return requestConfig.params.toString();
  };

  test("Empty query", () => {
    const query = executeRequest({});

    expect(query).toBe("");
  });

  test("Simple parameter", () => {
    const query = executeRequest({
      foo: "bar",
    });

    expect(query).toBe("foo=bar");
  });

  test("Two parameters", () => {
    const query = executeRequest({
      foo: "bar",
      bam: "baz",
    });

    expect(query).toBe("foo=bar&bam=baz");
  });

  test("Array parameters", () => {
    const query = executeRequest({
      foo: ["bar", "bam"],
    });

    expect(query).toBe("foo=bar&foo=bam");
  });

  test("Number, boolean, JSON", () => {
    const query = executeRequest({
      foo: 1,
      bar: true,
      baz: { some: "value" },
    });

    expect(query).toBe("foo=1&bar=true&baz=%7B%22some%22%3A%22value%22%7D");
  });

  test("Date parameter", () => {
    const query = executeRequest({
      since: new Date("2024-10-12T09:08:07.006Z"),
    });

    expect(query).toBe("since=2024-10-12T09%3A08%3A07.006Z");
  });

  test("Array of Dates", () => {
    const query = executeRequest({
      at: [new Date("2024-10-12T09:08:07.006Z")],
    });

    expect(query).toBe("at=2024-10-12T09%3A08%3A07.006Z");
  });
});

describe("dates in requests", () => {
  const date = new Date("2024-10-12T09:08:07.006Z");
  const iso = "2024-10-12T09:08:07.006Z";

  const op = {
    path: "/things/{at}",
    operationId: "test",
    method: "POST",
  } as const;

  const executeRequest = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    requestObject: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any => {
    const request = new Request(op, requestObject);
    request.execute(mockedAxios);
    return requestFn.mock.calls[0][0];
  };

  test("Dates in the request body are serialized to ISO 8601", () => {
    const config = executeRequest({
      at: "now",
      data: {
        terminationTargetDate: date,
        nested: { at: date, list: [{ at: date }] },
        untouched: "10/12/2024",
        nothing: null,
      },
    });

    expect(config.data).toEqual({
      terminationTargetDate: iso,
      nested: { at: iso, list: [{ at: iso }] },
      untouched: "10/12/2024",
      nothing: null,
    });
  });

  test("Dates in path parameters are serialized to ISO 8601", () => {
    const config = executeRequest({ at: date, data: {} });

    expect(config.url).toBe(`things/${encodeURIComponent(iso)}`);
  });

  test("Dates in headers are serialized to ISO 8601", () => {
    const config = executeRequest({
      at: "now",
      data: {},
      headers: { "x-since": date },
    });

    expect(config.headers).toEqual({ "x-since": iso });
  });

  test("The request object passed in is not mutated", () => {
    const requestObject = { at: "now", data: { at: date } };
    executeRequest(requestObject);

    expect(requestObject.data.at).toBe(date);
  });

  test("Non-plain payloads are passed through by reference", () => {
    const data = new URLSearchParams({ a: "b" });
    const config = executeRequest({ at: "now", data });

    expect(config.data).toBe(data);
  });
});

describe("axios config", () => {
  test("resolves path parameters into the url", () => {
    const request = new Request(
      { path: "/v2/projects/{projectId}", operationId: "get", method: "GET" },
      { projectId: "abc" },
    );

    expect(request.requestConfig.url).toBe("v2/projects/abc");
  });

  test("passes the method through", () => {
    const request = new Request({
      path: "/v2/projects",
      operationId: "create",
      method: "POST",
    });

    expect(request.requestConfig.method).toBe("POST");
  });

  test("always accepts every status so error responses are returned", () => {
    const request = new Request({
      path: "/",
      operationId: "test",
      method: "GET",
    });

    const { validateStatus } = request.requestConfig as {
      validateStatus: (status: number) => boolean;
    };
    expect(validateStatus(500)).toBe(true);
  });

  test("forwards the request body as data", () => {
    const request = new Request(
      { path: "/v2/projects", operationId: "create", method: "POST" },
      { data: { description: "test" } },
    );

    expect(request.requestConfig.data).toEqual({ description: "test" });
  });

  test("leaves data undefined when the request object has no body", () => {
    const request = new Request(
      { path: "/v2/projects", operationId: "get", method: "GET" },
      { queryParameters: { limit: 1 } },
    );

    expect(request.requestConfig.data).toBeUndefined();
  });

  test("stringifies header values", () => {
    const request = new Request(
      { path: "/", operationId: "test", method: "GET" },
      { headers: { "x-limit": 5, "x-flag": true, "x-name": "foo" } },
    );

    expect(request.requestConfig.headers).toEqual({
      "x-limit": "5",
      "x-flag": "true",
      "x-name": "foo",
    });
  });

  test("leaves headers undefined when none are given", () => {
    const request = new Request({
      path: "/",
      operationId: "test",
      method: "GET",
    });

    expect(request.requestConfig.headers).toBeUndefined();
  });
});

describe("query parameter edge cases", () => {
  const op = { path: "/", operationId: "test", method: "GET" } as const;

  const paramsOf = (queryParameters: unknown): URLSearchParams | undefined =>
    new Request(op, { queryParameters } as never).requestConfig.params;

  test("omits undefined values", () => {
    expect(paramsOf({ foo: "bar", skipped: undefined })?.toString()).toBe(
      "foo=bar",
    );
  });

  test("keeps null values as the string 'null'", () => {
    expect(paramsOf({ foo: null })?.toString()).toBe("foo=null");
  });

  test("is undefined when no query parameters are given", () => {
    expect(new Request(op).requestConfig.params).toBeUndefined();
  });

  test("passes an URLSearchParams instance through unchanged", () => {
    const searchParams = new URLSearchParams({ foo: "bar" });

    expect(paramsOf(searchParams)).toBe(searchParams);
  });

  test("parses a query string", () => {
    expect(paramsOf("foo=bar&baz=1")?.toString()).toBe("foo=bar&baz=1");
  });

  test("rejects a query parameter type it cannot serialize", () => {
    expect(() => paramsOf(42)).toThrow(
      "Unexpected query parameter type (number)",
    );
  });
});

describe("execute", () => {
  const op = { path: "/", operationId: "test", method: "GET" } as const;

  test("resolves with the axios response", async () => {
    const response = { status: 200, data: { ok: true } };
    requestFn.mockResolvedValue(response as never);

    await expect(new Request(op).execute(mockedAxios)).resolves.toBe(response);
  });

  /**
   * `execute` intends to fall back to `error.response` for HTTP errors, but
   * `AxiosError.from()` builds a fresh error without the response (see
   * axios/lib/core/AxiosError.js), so the fallback never triggers. In practice
   * this is masked by `validateStatus: () => true`, which stops axios from
   * throwing on HTTP errors at all.
   */
  test("rethrows an axios error that carries a response instead of returning it", async () => {
    const response = { status: 404, data: { message: "nope" } };
    const httpError = Object.assign(new AxiosError("Not Found"), { response });
    requestFn.mockRejectedValue(httpError as never);

    await expect(new Request(op).execute(mockedAxios)).rejects.toBe(httpError);
  });

  test("rethrows an axios error without a response, such as a network error", async () => {
    const networkError = new AxiosError("Network Error", "ERR_NETWORK");
    requestFn.mockRejectedValue(networkError as never);

    await expect(new Request(op).execute(mockedAxios)).rejects.toBe(
      networkError,
    );
  });

  test("rethrows a non-axios error unchanged", async () => {
    const failure = new TypeError("boom");
    requestFn.mockRejectedValue(failure as never);

    await expect(new Request(op).execute(mockedAxios)).rejects.toBe(failure);
  });
});
