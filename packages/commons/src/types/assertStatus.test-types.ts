import { Response } from "./Response.js";
import assertStatus from "./assertStatus.js";

/* Type-level tests, checked by `tsc --noEmit` (the `test:compile` target). */

type Response200 = Response<{ a: string }, 200, "application/json">;
type Response201 = Response<{ b: string }, 201>;

type SomeResponse = Response200 | Response201;
declare const someResponse: SomeResponse;

function ignoredTestAssertStatusAssertsAlsoTheCorrectResponseType() {
  assertStatus(someResponse, 200);
  void (someResponse satisfies Response200);
  // @ts-expect-error Not assignable
  void (someResponse satisfies Response201);
}
