import { OpenAPIOperation, RequestType, Response } from "../types/index.js";
import { getAsyncResourceFactory } from "./getAsyncResourceFactory.js";
import { AxiosInstance } from "axios";

type GetStuffRequest = RequestType<{ requestString: string }>;
type GetStuffResponse = Response<{ responseNumber: number }, 200>;

type GetStuffOperation = OpenAPIOperation<GetStuffRequest, GetStuffResponse>;

const getStuff = getAsyncResourceFactory<GetStuffOperation>(
  {} as AxiosInstance,
  {
    operationId: "getStuff",
    path: "/stuff",
    method: "GET",
  },
);

function ignoredCheckRequestType() {
  getStuff({
    data: {
      // @ts-expect-error Not matching request type
      foo: "",
    },
  });

  getStuff({
    data: {
      requestString: "",
    },
  });
}

function ignoredCheckResponseType() {
  const stuff = getStuff({
    data: {
      requestString: "",
    },
  }).watch();

  // @ts-expect-error error
  if (stuff.status === 42) {
    // must be 200
  }

  // @ts-expect-error Accessing unknown prop
  stuff.data.foo;

  (function (ignored: string): void {
    // @ts-expect-error is a number
  })(stuff.data.responseNumber);

  (function (ignored: number): void {
    // is number
  })(stuff.data.responseNumber);
}
