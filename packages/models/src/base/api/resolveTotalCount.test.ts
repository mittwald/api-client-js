import { type AxiosResponse, AxiosHeaders } from "axios";
import { describe, expect, test } from "vitest";

import { resolveTotalCount } from "./resolveTotalCount";

const responseWith = (
  data: unknown[],
  headers?: Record<string, string>,
): AxiosResponse<readonly unknown[]> =>
  (({
    headers: headers ? new AxiosHeaders(headers) : {},
    config: {} as never,
    statusText: "OK",
    status: 200,
    data
  }) as AxiosResponse<readonly unknown[]>);

describe("resolveTotalCount", () => {
  test("uses the x-pagination-totalcount header when present", () => {
    const response = responseWith([1, 2], { "x-pagination-totalcount": "57" });
    expect(resolveTotalCount(response)).toBe(57);
  });

  test("falls back to the page length when the header is absent", () => {
    const response = responseWith([1, 2, 3], {});
    expect(resolveTotalCount(response)).toBe(3);
  });

  test("falls back to the page length when headers are not AxiosHeaders", () => {
    const response = responseWith([1, 2, 3, 4]);
    expect(resolveTotalCount(response)).toBe(4);
  });

  test("falls back to the page length for a non-numeric header", () => {
    const response = responseWith([1], { "x-pagination-totalcount": "n/a" });
    expect(resolveTotalCount(response)).toBe(1);
  });

  test("uses an explicit fallbackCount for a nested-list response", () => {
    const response = {
      data: { leads: [1, 2, 3] },
      config: {} as never,
      statusText: "OK",
      status: 200,
      headers: {},
    } as AxiosResponse<{ leads: number[] }>;
    expect(resolveTotalCount(response, response.data.leads.length)).toBe(3);
  });

  test("prefers the header even when a fallbackCount is given", () => {
    const response = responseWith([1, 2], { "x-pagination-totalcount": "99" });
    expect(resolveTotalCount(response, 2)).toBe(99);
  });
});
