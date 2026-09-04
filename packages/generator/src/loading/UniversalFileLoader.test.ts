import { jest } from "@jest/globals";
import jetpack from "fs-jetpack";
import nock from "nock";
import { UniversalFileLoader } from "./UniversalFileLoader.js";

const readAsync = jest.spyOn(jetpack, "readAsync");

beforeEach(() => {
  readAsync.mockReset();
});

afterEach(() => {
  nock.cleanAll();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("source", () => {
  test("is kept as given", () => {
    expect(new UniversalFileLoader("spec.json").source).toBe("spec.json");
  });
});

describe("loading from a file", () => {
  test("returns the file content", async () => {
    readAsync.mockResolvedValue("{}" as never);

    await expect(new UniversalFileLoader("spec.json").load()).resolves.toBe(
      "{}",
    );
    expect(readAsync).toHaveBeenCalledWith("spec.json");
  });

  test("rejects when the file does not exist", async () => {
    readAsync.mockResolvedValue(undefined as never);

    await expect(
      new UniversalFileLoader("missing.json").load(),
    ).rejects.toThrow("File not found: missing.json");
  });

  test("treats a relative path as a file, not a URL", async () => {
    readAsync.mockResolvedValue("{}" as never);

    await new UniversalFileLoader("./spec/openapi.json").load();

    expect(readAsync).toHaveBeenCalledWith("./spec/openapi.json");
  });
});

describe("loading from a URL", () => {
  test("fetches http sources", async () => {
    nock("http://example.com").get("/openapi.json").reply(200, "{}");

    await expect(
      new UniversalFileLoader("http://example.com/openapi.json").load(),
    ).resolves.toBe("{}");
    expect(readAsync).not.toHaveBeenCalled();
  });

  test("fetches https sources", async () => {
    nock("https://example.com").get("/openapi.json").reply(200, "{}");

    await expect(
      new UniversalFileLoader("https://example.com/openapi.json").load(),
    ).resolves.toBe("{}");
  });

  test("rejects a non-200 response", async () => {
    nock("https://example.com").get("/openapi.json").reply(404, "nope");

    await expect(
      new UniversalFileLoader("https://example.com/openapi.json").load(),
    ).rejects.toThrow();
  });
});
