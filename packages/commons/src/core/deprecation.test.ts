import { expect, jest } from "@jest/globals";
import { AxiosHeaders } from "axios";
import {
  DeprecationEvent,
  DeprecationHandler,
  deprecationWarningCode,
  emitDeprecationWarning,
  formatDeprecationMessage,
  oncePerOperation,
  parseDeprecationHeaders,
} from "./deprecation.js";

const event = (
  overrides: Partial<DeprecationEvent> = {},
): DeprecationEvent => ({
  operationId: "user-get-own",
  method: "GET",
  path: "/v2/user",
  source: "spec",
  ...overrides,
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("formatDeprecationMessage", () => {
  test("names the operation, method and path", () => {
    expect(formatDeprecationMessage(event())).toBe(
      'API operation "user-get-own" (GET /v2/user) is deprecated.',
    );
  });

  test("mentions the sunset date when known", () => {
    expect(
      formatDeprecationMessage(
        event({ sunset: new Date("2027-01-01T00:00:00Z") }),
      ),
    ).toBe(
      'API operation "user-get-own" (GET /v2/user) is deprecated and will be removed after 2027-01-01T00:00:00.000Z.',
    );
  });
});

describe("emitDeprecationWarning", () => {
  test("uses process.emitWarning with a DeprecationWarning in Node", () => {
    const emitWarning = jest
      .spyOn(process, "emitWarning")
      .mockImplementation(() => undefined);

    emitDeprecationWarning(event());

    expect(emitWarning).toHaveBeenCalledWith(
      formatDeprecationMessage(event()),
      expect.objectContaining({
        type: "DeprecationWarning",
        code: deprecationWarningCode,
      }),
    );
  });

  test("falls back to console.warn without process.emitWarning", () => {
    const warn = jest
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);
    const { emitWarning } = process;

    try {
      // Simulates a browser, which has no process.emitWarning.
      process.emitWarning = undefined as unknown as typeof emitWarning;
      emitDeprecationWarning(event());
    } finally {
      process.emitWarning = emitWarning;
    }

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(
      `[${deprecationWarningCode}] ${formatDeprecationMessage(event())}`,
    );
  });
});

describe("oncePerOperation", () => {
  test("forwards only the first event of each operation", () => {
    const handler = jest.fn<DeprecationHandler>();
    const once = oncePerOperation(handler);

    once(event());
    once(event({ source: "response-header" }));
    once(event({ operationId: "other", path: "/v2/other" }));
    once(event({ operationId: "other", path: "/v2/other" }));

    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler).toHaveBeenNthCalledWith(1, event());
    expect(handler).toHaveBeenNthCalledWith(
      2,
      event({ operationId: "other", path: "/v2/other" }),
    );
  });

  test("keeps a separate memory per wrapped handler", () => {
    const first = jest.fn<DeprecationHandler>();
    const second = jest.fn<DeprecationHandler>();

    oncePerOperation(first)(event());
    oncePerOperation(second)(event());

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
  });
});

describe("parseDeprecationHeaders", () => {
  test("reports nothing without Deprecation or Sunset header", () => {
    expect(parseDeprecationHeaders(new AxiosHeaders())).toBeUndefined();
    expect(parseDeprecationHeaders(undefined)).toBeUndefined();
  });

  test("reads an RFC 9745 structured date", () => {
    expect(
      parseDeprecationHeaders(new AxiosHeaders({ Deprecation: "@1688169599" })),
    ).toEqual({ deprecation: new Date(1688169599 * 1000) });
  });

  test("accepts legacy values without a date", () => {
    expect(
      parseDeprecationHeaders(new AxiosHeaders({ Deprecation: "true" })),
    ).toEqual({});
  });

  test("accepts a legacy HTTP-date", () => {
    expect(
      parseDeprecationHeaders(
        new AxiosHeaders({ Deprecation: "Sun, 11 Nov 2018 23:59:59 GMT" }),
      ),
    ).toEqual({ deprecation: new Date("2018-11-11T23:59:59Z") });
  });

  test("reads an RFC 8594 Sunset date", () => {
    expect(
      parseDeprecationHeaders(
        new AxiosHeaders({
          Deprecation: "@1688169599",
          Sunset: "Fri, 01 Jan 2027 00:00:00 GMT",
        }),
      ),
    ).toEqual({
      deprecation: new Date(1688169599 * 1000),
      sunset: new Date("2027-01-01T00:00:00Z"),
    });
  });

  test("treats a Sunset header alone as a deprecation signal", () => {
    expect(
      parseDeprecationHeaders(
        new AxiosHeaders({ Sunset: "Fri, 01 Jan 2027 00:00:00 GMT" }),
      ),
    ).toEqual({ sunset: new Date("2027-01-01T00:00:00Z") });
  });

  test("drops unparseable dates but keeps the signal", () => {
    expect(
      parseDeprecationHeaders(
        new AxiosHeaders({ Deprecation: "soon", Sunset: "later" }),
      ),
    ).toEqual({});
  });

  test("reads plain header objects case-insensitively", () => {
    expect(parseDeprecationHeaders({ deprecation: "@0" })).toEqual({
      deprecation: new Date(0),
    });
  });
});
