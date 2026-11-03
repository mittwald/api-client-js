import axios from "axios";
import { expect, jest } from "@jest/globals";
import nock from "nock";
import ApiClientBase, { ApiClientOptions } from "./ApiClientBase.js";
import { DeprecationEvent, DeprecationHandler } from "./deprecation.js";

const baseURL = "http://deprecation.example.com";

class TestClient extends ApiClientBase {
  public active = this.requestFunctionFactory({
    path: "/active",
    method: "GET",
    operationId: "active",
  });

  public deprecated = this.requestFunctionFactory({
    path: "/deprecated",
    method: "POST",
    operationId: "deprecated-op",
    deprecated: true,
  });

  public deprecatedUnreachable = this.requestFunctionFactory({
    path: "/unreachable",
    method: "GET",
    operationId: "deprecated-unreachable",
    deprecated: true,
  });
}

const createClient = (options?: ApiClientOptions) =>
  new TestClient(axios.create({ baseURL }), options);

const specEvent: DeprecationEvent = {
  operationId: "deprecated-op",
  method: "POST",
  path: "/deprecated",
  source: "spec",
};

let emitWarning: jest.SpiedFunction<typeof process.emitWarning>;

beforeEach(() => {
  emitWarning = jest
    .spyOn(process, "emitWarning")
    .mockImplementation(() => undefined);
});

afterEach(() => {
  jest.restoreAllMocks();
  nock.cleanAll();
});

describe("onDeprecation", () => {
  test("is called for operations deprecated in the spec", async () => {
    nock(baseURL).post("/deprecated").reply(200, {});
    const onDeprecation = jest.fn<DeprecationHandler>();

    await createClient({ onDeprecation }).deprecated();

    expect(onDeprecation).toHaveBeenCalledWith(specEvent);
  });

  test("is called before the caller sees the response", async () => {
    nock(baseURL).post("/deprecated").reply(200, {});
    const onDeprecation = jest.fn<DeprecationHandler>();

    const response = createClient({ onDeprecation }).deprecated();
    await response;

    expect(onDeprecation).toHaveBeenCalledTimes(1);
  });

  test("is not called for active operations without deprecation headers", async () => {
    nock(baseURL).get("/active").reply(200, {});
    const onDeprecation = jest.fn<DeprecationHandler>();

    await createClient({ onDeprecation }).active();

    expect(onDeprecation).not.toHaveBeenCalled();
  });

  test("is called on every call so custom hooks see each occurrence", async () => {
    nock(baseURL).post("/deprecated").times(2).reply(200, {});
    const onDeprecation = jest.fn<DeprecationHandler>();
    const client = createClient({ onDeprecation });

    await client.deprecated();
    await client.deprecated();

    expect(onDeprecation).toHaveBeenCalledTimes(2);
  });

  test("is called for active operations that answer with a Deprecation header", async () => {
    nock(baseURL).get("/active").reply(200, {}, { Deprecation: "@1688169599" });
    const onDeprecation = jest.fn<DeprecationHandler>();

    await createClient({ onDeprecation }).active();

    expect(onDeprecation).toHaveBeenCalledWith({
      operationId: "active",
      method: "GET",
      path: "/active",
      source: "response-header",
      deprecation: new Date(1688169599 * 1000),
    });
  });

  test("receives the Sunset date for spec-deprecated operations", async () => {
    nock(baseURL)
      .post("/deprecated")
      .reply(200, {}, { Sunset: "Fri, 01 Jan 2027 00:00:00 GMT" });
    const onDeprecation = jest.fn<DeprecationHandler>();

    await createClient({ onDeprecation }).deprecated();

    expect(onDeprecation).toHaveBeenCalledWith({
      ...specEvent,
      sunset: new Date("2027-01-01T00:00:00Z"),
    });
  });

  test("is called for spec-deprecated operations whose request fails", async () => {
    nock(baseURL)
      .get("/unreachable")
      .replyWithError(
        Object.assign(new Error("Network Error"), { code: "ERR_NETWORK" }),
      );
    const onDeprecation = jest.fn<DeprecationHandler>();

    await expect(
      createClient({ onDeprecation }).deprecatedUnreachable(),
    ).rejects.toThrow("Network Error");

    expect(onDeprecation).toHaveBeenCalledWith(
      expect.objectContaining({ operationId: "deprecated-unreachable" }),
    );
  });

  test("can opt out of warnings with a no-op hook", async () => {
    nock(baseURL).post("/deprecated").reply(200, {});
    const warn = jest
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);

    await createClient({ onDeprecation: () => {} }).deprecated();

    expect(emitWarning).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
  });

  test("a throwing hook does not break the request", async () => {
    nock(baseURL).post("/deprecated").reply(200, { ok: 1 });
    const onDeprecation = jest.fn<DeprecationHandler>(() => {
      throw new Error("hook failed");
    });

    await expect(
      createClient({ onDeprecation }).deprecated(),
    ).resolves.toHaveProperty("data.ok", 1);
    expect(onDeprecation).toHaveBeenCalledTimes(1);
  });

  test("a rejecting async hook does not cause an unhandled rejection", async () => {
    nock(baseURL).post("/deprecated").reply(200, { ok: 1 });
    const unhandled = jest.fn<DeprecationHandler>();
    process.on("unhandledRejection", unhandled);

    try {
      await createClient({
        onDeprecation: () => Promise.reject(new Error("hook failed")),
      }).deprecated();
      await new Promise((resolve) => setImmediate(resolve));
    } finally {
      process.off("unhandledRejection", unhandled);
    }

    expect(unhandled).not.toHaveBeenCalled();
  });
});

describe("default deprecation handling", () => {
  /**
   * The default handler dedupes process-wide, so each test uses its own
   * operation to stay independent of test order.
   */
  class DefaultTestClient extends ApiClientBase {
    public op = (operationId: string) =>
      this.requestFunctionFactory({
        path: "/deprecated",
        method: "POST",
        operationId,
        deprecated: true,
      });
  }

  const createDefaultClient = () =>
    new DefaultTestClient(axios.create({ baseURL }));

  test("emits a Node DeprecationWarning", async () => {
    nock(baseURL).post("/deprecated").reply(200, {});

    await createDefaultClient().op("default-warns")();

    expect(emitWarning).toHaveBeenCalledTimes(1);
    expect(emitWarning).toHaveBeenCalledWith(
      expect.stringContaining('"default-warns" (POST /deprecated)'),
      expect.objectContaining({ type: "DeprecationWarning" }),
    );
  });

  test("warns only once per operation, across calls and clients", async () => {
    nock(baseURL).post("/deprecated").times(3).reply(200, {});
    const client = createDefaultClient();
    const request = client.op("default-dedupe");

    await request();
    await request();
    await createDefaultClient().op("default-dedupe")();

    expect(emitWarning).toHaveBeenCalledTimes(1);
  });

  test("warns separately for different operations", async () => {
    nock(baseURL).post("/deprecated").times(2).reply(200, {});
    const client = createDefaultClient();

    await client.op("default-first")();
    await client.op("default-second")();

    expect(emitWarning).toHaveBeenCalledTimes(2);
  });
});
