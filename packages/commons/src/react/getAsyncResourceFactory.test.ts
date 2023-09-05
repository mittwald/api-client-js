import { beforeEach, expect, jest } from "@jest/globals";
import { getAsyncResourceFactory } from "./getAsyncResourceFactory.js";
import { AxiosInstance } from "axios";
import { refresh } from "@mittwald/react-use-promise";
import { OpenAPIOperation, RequestObject } from "../types/index.js";

beforeEach(() => {
  refresh();
  jest.resetAllMocks();
});

const requestMock = jest.fn();

type GetStuffOperation = OpenAPIOperation<{ data: { foo: string } }>;

const axios = { request: requestMock } as unknown as AxiosInstance;

const getStuff = getAsyncResourceFactory<GetStuffOperation>(axios, {
  operationId: "getStuff",
  path: "/stuff",
  method: "GET",
});

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
  await getStuff(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);
  const firstRequestParams = requestMock.mock.calls[0][0];
  expect(firstRequestParams).toMatchObject({
    method: "GET",
    url: "stuff",
  });
});

test("Resource is cached under URL", async () => {
  await getStuff(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);
  await getStuff(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);

  refresh({
    tag: "@mittwald/api-client/stuff",
  });
  await getStuff(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(2);
});

test("Resources are different when request object changes", async () => {
  await getStuff(testRequest1).load();
  expect(requestMock).toHaveBeenCalledTimes(1);
  await getStuff(testRequest2).load();
  expect(requestMock).toHaveBeenCalledTimes(2);
});
