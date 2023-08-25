import {
  OpenAPIOperation,
  RequestFunction,
  RequestType,
} from "../types/index.js";

function ignoredTestEmptyRequestTypes() {
  const f = {} as RequestFunction<OpenAPIOperation>;
  void f();
  void f({
    headers: {},
  });
  void f({
    headers: { extra: true },
  });
}

function ignoredTestOptionalHeadersRequestTypes() {
  const f = {} as RequestFunction<
    OpenAPIOperation<RequestType<null, null, { optionalHeader?: boolean }>>
  >;
  void f();
  void f({
    headers: {},
  });
  void f({
    headers: { extra: true },
  });
}

function ignoredTestPathParametersAreInRootOfRequestConfig() {
  const f = {} as RequestFunction<
    OpenAPIOperation<RequestType<null, { foo: string }, null>>
  >;
  void f({
    foo: "",
  });
}
