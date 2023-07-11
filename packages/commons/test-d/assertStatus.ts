import { expectAssignable, expectNotAssignable } from "tsd";
import { Response } from "../dist/esm/types/Response.js";
import assertStatus from "../dist/esm/types/assertStatus.js";

type Response200 = Response<{ a: string }, 200, "application/json">;
type Response201 = Response<{ b: string }, 201>;

type SomeResponse = Response200 | Response201;
declare const someResponse: SomeResponse;

export function testAssertStatusAssertsAlsoTheCorrectResponseType() {
  assertStatus(someResponse, 200);
  expectAssignable<Response200>(someResponse);
  expectNotAssignable<Response201>(someResponse);
}
