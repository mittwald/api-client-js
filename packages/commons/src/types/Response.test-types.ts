import { expectAssignable, expectNotAssignable, expectType } from "tsd";
import { InternalAxiosRequestConfig } from "axios";
import { Response } from "./Response.js";

type Response200 = Response<{ a: string }, 200, "application/json">;
type Response200Text = Response<{ text: string }, 200, "text/plain">;

const additionalAxiosResponseData = {
  statusText: "",
  headers: {},
  config: {} as InternalAxiosRequestConfig,
  mediaType: "application/json",
} as const;

expectAssignable<Response200>({
  data: { a: "" },
  status: 200,
  ...additionalAxiosResponseData,
});
expectNotAssignable<Response200>({
  data: { a: "", extra: "!" },
  status: 200,
  ...additionalAxiosResponseData,
});

type Response201 = Response<{ b: string }, 201>;
expectAssignable<Response201>({
  data: {
    b: "",
  },
  status: 201,
  ...additionalAxiosResponseData,
});

type Response400 = Response<null, 400>;
expectAssignable<Response400>({
  data: null,
  status: 400,
  ...additionalAxiosResponseData,
});
expectNotAssignable<Response400>({
  data: null,
  status: 42,
  ...additionalAxiosResponseData,
});
expectNotAssignable<Response400>({
  data: null,
  status: 42,
  extra: "!",
  ...additionalAxiosResponseData,
});
expectNotAssignable<Response400>({
  data: { extraContent: "" },
  status: 400,
  ...additionalAxiosResponseData,
});

function ignoredTestRequestTypesWithDataPathParameters() {
  type SomeResponse = Response200 | Response200Text | Response201 | Response400;
  const someResponse = {} as SomeResponse;

  expectType<200 | 201 | 400>(someResponse.status);

  if (someResponse.status === 200) {
    // @ts-expect-error > a is not in data
    someResponse.data.a;
    // @ts-expect-error > b is not in data
    someResponse.data.b;

    if (someResponse.mediaType === "text/plain") {
      // @ts-expect-error > a is not in data
      someResponse.data.a;
      expectType<string>(someResponse.data.text);
    } else {
      // @ts-expect-error > text is not in data
      someResponse.data.text;
      expectType<string>(someResponse.data.a);
    }
  } else if (someResponse.status === 201) {
    expectType<string>(someResponse.data.b);
    // @ts-expect-error > a is not in data
    someResponse.data.a;
  }
}
