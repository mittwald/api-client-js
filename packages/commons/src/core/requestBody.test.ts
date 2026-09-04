import Request from "./Request.js";
import { AxiosInstance } from "axios";
import { jest } from "@jest/globals";
import { OpenAPIOperation } from "../types/index.js";

const requestFn = jest.fn();

const mockedAxios = {
  request: requestFn,
} as unknown as AxiosInstance;

beforeEach(() => {
  jest.resetAllMocks();
});

const buildOperation = (requestContentType?: string): OpenAPIOperation =>
  ({
    path: "/upload",
    operationId: "test-upload",
    method: "POST",
    requestContentType,
  }) as OpenAPIOperation;

const buildConfig = (
  requestContentType: string | undefined,
  data: unknown,
  headers?: Record<string, string>,
): { data: unknown; headers?: Record<string, string> } => {
  const request = new Request(buildOperation(requestContentType), {
    data,
    headers,
  } as never);

  return request.requestConfig as {
    data: unknown;
    headers?: Record<string, string>;
  };
};

const formDataEntries = (data: unknown): Array<[string, unknown]> => {
  expect(data).toBeInstanceOf(FormData);
  return Array.from((data as FormData).entries());
};

describe("JSON request bodies", () => {
  test("data is handed to axios untouched", () => {
    const data = { foo: "bar" };
    const config = buildConfig(undefined, data);

    expect(config.data).toBe(data);
    expect(config.headers).toBeUndefined();
  });

  test("an explicit application/json content type changes nothing", () => {
    const data = { foo: "bar" };
    const config = buildConfig("application/json", data);

    expect(config.data).toBe(data);
    expect(config.headers).toBeUndefined();
  });
});

describe("multipart/form-data request bodies", () => {
  test("blobs are appended as binary parts, not stringified", async () => {
    const blob = new Blob(["hello"], { type: "text/plain" });
    const config = buildConfig("multipart/form-data", { emailEml: blob });

    const entries = formDataEntries(config.data);
    expect(entries).toHaveLength(1);

    const [[key, value]] = entries;
    expect(key).toBe("emailEml");
    expect(value).toBeInstanceOf(Blob);
    await expect((value as Blob).text()).resolves.toBe("hello");
    expect((value as Blob).type).toBe("text/plain");
  });

  test("files keep their file name", async () => {
    const file = new File(["hello"], "mail.eml", { type: "message/rfc822" });
    const config = buildConfig("multipart/form-data", { emailEml: file });

    const [[, value]] = formDataEntries(config.data);
    expect(value).toBeInstanceOf(File);
    expect((value as File).name).toBe("mail.eml");
    await expect((value as File).text()).resolves.toBe("hello");
  });

  test("primitive fields are stringified", () => {
    const config = buildConfig("multipart/form-data", {
      description: "some text",
      count: 42,
      flag: true,
    });

    expect(formDataEntries(config.data)).toEqual([
      ["description", "some text"],
      ["count", "42"],
      ["flag", "true"],
    ]);
  });

  test("nullish fields are omitted", () => {
    const config = buildConfig("multipart/form-data", {
      kept: "yes",
      missing: undefined,
      empty: null,
    });

    expect(formDataEntries(config.data)).toEqual([["kept", "yes"]]);
  });

  test("array fields are appended once per item", () => {
    const config = buildConfig("multipart/form-data", { tags: ["a", "b"] });

    expect(formDataEntries(config.data)).toEqual([
      ["tags", "a"],
      ["tags", "b"],
    ]);
  });

  test("other objects are JSON encoded", () => {
    const config = buildConfig("multipart/form-data", {
      meta: { some: "value" },
    });

    expect(formDataEntries(config.data)).toEqual([
      ["meta", JSON.stringify({ some: "value" })],
    ]);
  });

  test("no content type header is set, so that axios can add the boundary", () => {
    const config = buildConfig("multipart/form-data", { foo: "bar" });

    expect(config.headers).toBeUndefined();
  });

  test("an already built FormData is passed through", () => {
    const formData = new FormData();
    formData.append("emailEml", new Blob(["hello"]));

    const config = buildConfig("multipart/form-data", formData);

    expect(config.data).toBe(formData);
  });

  test("non plain object payloads are passed through", () => {
    const blob = new Blob(["hello"]);
    expect(buildConfig("multipart/form-data", blob).data).toBe(blob);

    const searchParams = new URLSearchParams({ foo: "bar" });
    expect(buildConfig("multipart/form-data", searchParams).data).toBe(
      searchParams,
    );
  });
});

describe("other request body media types", () => {
  test("the content type is passed on to axios", () => {
    const data = { grant_type: "authorization_code" };
    const config = buildConfig("application/x-www-form-urlencoded", data);

    expect(config.data).toBe(data);
    expect(config.headers).toEqual({
      "Content-Type": "application/x-www-form-urlencoded",
    });
  });

  test("an explicitly set content type header wins", () => {
    const config = buildConfig(
      "application/x-www-form-urlencoded",
      { foo: "bar" },
      { "content-type": "text/plain" },
    );

    expect(config.headers).toEqual({ "content-type": "text/plain" });
  });

  test("other headers are kept", () => {
    const config = buildConfig(
      "application/x-www-form-urlencoded",
      { foo: "bar" },
      { "x-access-token": "token" },
    );

    expect(config.headers).toEqual({
      "x-access-token": "token",
      "Content-Type": "application/x-www-form-urlencoded",
    });
  });
});

describe("requests without data", () => {
  test("no data and no headers stay undefined", () => {
    const request = new Request(buildOperation("multipart/form-data"));

    expect(request.requestConfig.data).toBeUndefined();
    expect(request.requestConfig.headers).toBeUndefined();
  });
});

test("the axios instance receives the built config", () => {
  const request = new Request(buildOperation("multipart/form-data"), {
    data: { foo: "bar" },
  } as never);

  request.execute(mockedAxios);

  const [config] = requestFn.mock.calls[0] as [{ data: unknown }];
  expect(config.data).toBeInstanceOf(FormData);
});
