import axios from "axios";
import { expect, jest } from "@jest/globals";
import ApiClientBase from "./ApiClientBase.js";
import nock from "nock";

let apiHistory: {
  method: string;
  path: string;
  body: string;
  headers: string[];
}[] = [];

class TestClient extends ApiClientBase {
  public testRequestWillSucceed = this.requestFunctionFactory({
    path: "/200",
    method: "GET",
    operationId: "test",
  });

  public testRequestWillFail = this.requestFunctionFactory({
    path: "/500",
    method: "GET",
    operationId: "fail",
  });

  public testNetworkError = this.requestFunctionFactory({
    path: "/networkErrorUrl",
    method: "GET",
    operationId: "networkError",
  });
}

axios.defaults.baseURL = "http://www.example.com";
const testClient = new TestClient(axios);
let testApi: nock.Scope;

beforeEach(() => {
  jest.resetAllMocks();
  apiHistory = [];

  testApi = nock("http://www.example.com")
    .get("/200")
    .reply(200, { success: 1 })
    .get("/networkErrorUrl")
    .replyWithError(
      Object.assign(new Error("Network Error"), { code: "ERR_NETWORK" }),
    )
    .get("/500")
    .reply(500, { fail: 1 });

  testApi.on("request", (req, interceptor, body) => {
    apiHistory.push({
      method: req.method,
      path: req.path,
      body: body,
      headers: req.headers,
    });
  });
});
test("onBeforeRequest is called before actual request", async () => {
  const onBeforeRequest = jest.fn(() => {
    expect(apiHistory).toHaveLength(0);
  });

  await testClient.testRequestWillSucceed(undefined, {
    onBeforeRequest,
  });
  expect(apiHistory).toHaveLength(1);
});

test("onBeforeRequest configured in default options is called before actual request", async () => {
  const onBeforeRequest = jest.fn(() => {
    expect(apiHistory).toHaveLength(0);
  });

  testClient.defaultRequestOptions.onBeforeRequest = onBeforeRequest;
  await testClient.testRequestWillSucceed();

  expect(onBeforeRequest).toHaveBeenCalledTimes(1);
  expect(apiHistory).toHaveLength(1);
});

test("test client will work with axiosInstance", async () => {
  const axiosInstance = axios.create({
    headers: {
      TEST_FROM_INSTANCE: 1,
    },
  });
  const testClient = new TestClient(axiosInstance);
  await testClient.testRequestWillSucceed();

  expect(apiHistory).toHaveLength(1);
  expect(apiHistory.at(0)).toHaveProperty("headers.test_from_instance", "1");
});

test("test client will work with config", async () => {
  const testClient = new TestClient({
    headers: {
      TEST_FROM_CONFIG: 1,
    },
  });
  await testClient.testRequestWillSucceed();

  expect(apiHistory).toHaveLength(1);
  expect(apiHistory.at(0)).toHaveProperty("headers.test_from_config", "1");
});

test("test client will work with axios default", async () => {
  axios.defaults.headers = {
    TEST_FROM_DEFAULT: 1,
  } as never;
  const testClient = new TestClient(axios);
  await testClient.testRequestWillSucceed();

  expect(apiHistory).toHaveLength(1);
  expect(apiHistory.at(0)).toHaveProperty("headers.test_from_default", "1");
});

test("test can receive data", async () => {
  const response = testClient.testRequestWillSucceed();
  await expect(response).resolves.toHaveProperty("data.success", 1);
});

test("test request will be resolved even when status check fails", async () => {
  const success = jest.fn();
  const fail = jest.fn();

  axios.interceptors.response.use(
    (response) => {
      success(response.config.url);
      return response;
    },
    (error) => {
      fail(error.config.url);
      throw error;
    },
  );

  const response = testClient.testRequestWillFail();

  // check resolves
  await expect(response).resolves.toHaveProperty("data.fail", 1);

  // check interceptor call
  expect(success).toBeCalledTimes(0);
  expect(fail).toBeCalledWith("500");
});

test("test will resolved on network error", async () => {
  const success = jest.fn();
  const fail = jest.fn();

  axios.interceptors.response.use(
    (response) => {
      success(response.config.url);
      return response;
    },
    (error) => {
      fail(error.config.url);
      throw error;
    },
  );

  const response = testClient.testNetworkError();

  // check rejects
  await expect(response).rejects.toThrowError("Network Error");

  // check interceptor call
  expect(success).toBeCalledTimes(0);
  expect(fail).toBeCalledWith("networkErrorUrl");
});
