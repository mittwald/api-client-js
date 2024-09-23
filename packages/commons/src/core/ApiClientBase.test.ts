import { Axios } from "axios";
import { beforeEach, jest } from "@jest/globals";
import ApiClientBase from "./ApiClientBase.js";

const requestFn = jest.fn();

const mockedAxios = Object.assign(Object.create(Axios.prototype), {
  request: requestFn,
});

class TestClient extends ApiClientBase {
  public testRequest = this.requestFunctionFactory({
    path: "/test",
    method: "GET",
    operationId: "test",
  });
}
const testClient = new TestClient(mockedAxios);

beforeEach(() => {
  jest.resetAllMocks();
});

test("onBeforeRequest is called before actual request", async () => {
  const onBeforeRequest = jest.fn(() => {
    expect(requestFn).not.toHaveBeenCalled();
  });

  await testClient.testRequest(undefined, {
    onBeforeRequest,
  });

  expect(onBeforeRequest).toHaveBeenCalledTimes(1);
  expect(requestFn).toHaveBeenCalledTimes(1);
});

test("onBeforeRequest configured in default options is called before actual request", async () => {
  const onBeforeRequest = jest.fn(() => {
    expect(requestFn).not.toHaveBeenCalled();
  });

  testClient.defaultRequestOptions.onBeforeRequest = onBeforeRequest;
  await testClient.testRequest(undefined);

  expect(onBeforeRequest).toHaveBeenCalledTimes(1);
  expect(requestFn).toHaveBeenCalledTimes(1);
});
