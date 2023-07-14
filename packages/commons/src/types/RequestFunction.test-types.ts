import { OpenAPIOperation, RequestFunction } from "../types/index.js";

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
