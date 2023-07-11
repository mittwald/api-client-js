import { Response } from "../dist/esm/types/Response";
import {
  expectAssignable,
  expectError,
  expectNotAssignable,
  expectType,
} from "tsd";
import { InternalAxiosRequestConfig } from "axios";

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

type SomeResponse = Response200 | Response200Text | Response201 | Response400;
declare const someResponse: SomeResponse;

expectType<200 | 201 | 400>(someResponse.status);

if (someResponse.status === 200) {
  expectError(someResponse.data.a);
  expectError(someResponse.data.b);
  if (someResponse.mediaType === "text/plain") {
    expectError(someResponse.data.a);
    expectType<string>(someResponse.data.text);
  } else {
    expectError(someResponse.data.text);
    expectType<string>(someResponse.data.a);
  }
} else if (someResponse.status === 201) {
  expectType<string>(someResponse.data.b);
  expectError(someResponse.data.a);
}
