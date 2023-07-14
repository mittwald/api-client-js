import { expectAssignable, expectNotAssignable } from "tsd";
import { Response } from "./Response.js";
import assertStatus from "./assertStatus.js";

type Response200 = Response<{ a: string }, 200, "application/json">;
type Response201 = Response<{ b: string }, 201>;

type SomeResponse = Response200 | Response201;
declare const someResponse: SomeResponse;

function ignoredTestAssertStatusAssertsAlsoTheCorrectResponseType() {
  assertStatus(someResponse, 200);
  expectAssignable<Response200>(someResponse);
  // @ts-expect-error Not assignable
  expectAssignable<Response201>(someResponse);
}
