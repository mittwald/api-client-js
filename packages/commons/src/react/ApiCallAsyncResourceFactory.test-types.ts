import {
  OpenAPIOperation,
  RequestFunction,
  RequestType,
  Response,
} from "../types/index.js";
import { ApiCallAsyncResourceFactory } from "./ApiCallAsyncResourceFactory.js";

type GetStuffRequest = RequestType<{ requestString: string }>;
type GetStuffResponse =
  | Response<{ responseData: number }, 200>
  | Response<{ error: string }, 500>;

type GetStuffOperation = OpenAPIOperation<GetStuffRequest, GetStuffResponse>;

const getStuff = new ApiCallAsyncResourceFactory(
  {
    operationId: "getStuff",
    path: "/stuff",
    method: "GET",
  },
  {} as RequestFunction<GetStuffOperation>,
);

function ignoredCheckRequestType() {
  getStuff.getApiResource({
    data: {
      // @ts-expect-error Not matching request type
      foo: "",
    },
  });

  getStuff.getApiResource({
    data: {
      requestString: "",
    },
  });
}

function ignoredCheckResponseType() {
  const stuff = getStuff
    .getApiResource({
      data: {
        requestString: "",
      },
    })
    .watch();

  // @ts-expect-error Accessing unknown prop
  stuff.foo;

  (function (ignored: string): void {
    // @ts-expect-error is a number
  })(stuff.responseData);

  (function (ignored: number): void {
    // is number
  })(stuff.responseData);
}
