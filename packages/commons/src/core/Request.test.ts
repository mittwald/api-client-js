import Request from "./Request.js";
import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { jest } from "@jest/globals";
import { QueryParameters } from "../types/index.js";

const requestFn =
  jest.fn<(config: AxiosRequestConfig) => Promise<AxiosResponse>>();

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
});

describe("error handling", () => {
  const op = {
    path: "/",
    operationId: "test",
    method: "GET",
  } as const;

  const execute = (): Promise<unknown> =>
    new Request(op).execute(mockedAxios) as Promise<unknown>;

  test("returns an axios error's response instead of throwing", async () => {
    const response = {
      status: 404,
      data: { message: "Not found" },
    } as AxiosResponse;
    requestFn.mockRejectedValue(
      new AxiosError("Not Found", undefined, undefined, undefined, response),
    );

    await expect(execute()).resolves.toBe(response);
  });

  test("rethrows an axios error without a response", async () => {
    const error = new AxiosError("Network Error", AxiosError.ERR_NETWORK);
    requestFn.mockRejectedValue(error);

    await expect(execute()).rejects.toBe(error);
  });

  test("rethrows a non-axios error", async () => {
    const error = new Error("boom");
    requestFn.mockRejectedValue(error);

    await expect(execute()).rejects.toBe(error);
  });
});
