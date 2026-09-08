import Request from "./Request.js";
import { AxiosInstance } from "axios";
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
