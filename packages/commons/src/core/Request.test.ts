import Request from "./Request.js";
import { AxiosInstance } from "axios";
import { jest } from "@jest/globals";
import { OpenAPIOperation, QueryParameters } from "../types/index.js";

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

  const executeRequest = (
    query: QueryParameters,
    opOverwrites?: Partial<OpenAPIOperation>,
  ): string => {
    const request = new Request(
      { ...op, ...opOverwrites },
      { queryParameters: query },
    );
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

  test("Number, boolean, JSON, deepObject", () => {
    const query = executeRequest(
      {
        foo: 1,
        bar: true,
        baz: { some: "value" },
        deep: { object: "value" },
      },
      {
        serialization: { query: { baz: { style: "contentJSON" } } },
      },
    );

    expect(query).toBe(
      "foo=1&bar=true&baz=%7B%22some%22%3A%22value%22%7D&deep%5Bobject%5D=value",
    );
  });
});
