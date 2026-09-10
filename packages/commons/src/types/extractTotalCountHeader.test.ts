import { AxiosHeaders, type AxiosResponseHeaders } from "axios";
import ApiClientError from "../core/ApiClientError.js";
import { extractTotalCountHeader } from "./extractTotalCountHeader.js";
import { Response } from "./Response.js";

const makeResponse = (
  headers: AxiosResponseHeaders | Record<string, string>,
  status = 200,
): Response =>
  ({
    status,
    statusText: "",
    data: {},
    headers,
    config: { headers: new AxiosHeaders() },
    request: { some: "request" },
    mediaType: "application/json",
  }) as unknown as Response;

const withTotalCount = (value: string): AxiosResponseHeaders =>
  new AxiosHeaders({ "x-pagination-totalcount": value });

test("returns the total count as a number", () => {
  expect(extractTotalCountHeader(makeResponse(withTotalCount("42")))).toBe(42);
});

test("reads the header case-insensitively", () => {
  const headers = new AxiosHeaders({ "X-Pagination-TotalCount": "7" });

  expect(extractTotalCountHeader(makeResponse(headers))).toBe(7);
});

test("returns zero for an empty result set", () => {
  expect(extractTotalCountHeader(makeResponse(withTotalCount("0")))).toBe(0);
});

test("rejects a non-200 response before looking at the headers", () => {
  expect(() =>
    extractTotalCountHeader(makeResponse(withTotalCount("42"), 404)),
  ).toThrow("Unexpected response status (expected 200, got: 404)");
});

test("rejects plain-object headers that axios did not normalize", () => {
  expect(() =>
    extractTotalCountHeader(makeResponse({ "x-pagination-totalcount": "42" })),
  ).toThrow("Expected headers to be of type AxiosHeaders");
});

test("rejects a missing header", () => {
  expect(() =>
    extractTotalCountHeader(makeResponse(new AxiosHeaders())),
  ).toThrow("value is not of type string (is undefined instead)");
});

test("rejects a non-numeric header value", () => {
  expect(() =>
    extractTotalCountHeader(makeResponse(withTotalCount("not-a-number"))),
  ).toThrow("value is not a valid number");
});

test("throws an ApiClientError, not a plain Error", () => {
  expect(() =>
    extractTotalCountHeader(makeResponse(withTotalCount("not-a-number"))),
  ).toThrow(ApiClientError);
});
