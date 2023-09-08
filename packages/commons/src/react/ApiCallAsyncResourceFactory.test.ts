import { beforeEach, expect, jest } from "@jest/globals";
import { ApiCallAsyncResourceFactory } from "./ApiCallAsyncResourceFactory.js";
import { refresh } from "@mittwald/react-use-promise";
import {
  OpenAPIOperation,
  RequestFunction,
  RequestObject,
} from "../types/index.js";

beforeEach(() => {
  refresh();
  jest.resetAllMocks();
});

type GetStuffOperation = OpenAPIOperation<{ data: { foo: string } }>;

const requestMock = jest.fn<RequestFunction<GetStuffOperation>>();

const getStuff = new ApiCallAsyncResourceFactory(
  {
    operationId: "getStuff",
    path: "/stuff",
    method: "GET",
  },
  requestMock,
);

const testRequest1: RequestObject<GetStuffOperation> = {
  data: {
    foo: "bar",
  },
};

const testRequest2: RequestObject<GetStuffOperation> = {
  data: {
    foo: "baz",
  },
};

test("Resource loader executes request", async () => {
  await getStuff.getApiResource(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);
  const firstRequestParams = requestMock.mock.calls[0][0];
  expect(firstRequestParams).toMatchObject(testRequest1);
});

test("Resource is cached under URL", async () => {
  await getStuff.getApiResource(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);
  await getStuff.getApiResource(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);

  refresh({
    tag: "@mittwald/api-client/stuff",
  });
  await getStuff.getApiResource(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(2);
});

test("Resources are different when request object changes", async () => {
  await getStuff.getApiResource(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);
  await getStuff.getApiResource(testRequest2).load();
  expect(requestMock).toHaveBeenCalledTimes(2);
});
