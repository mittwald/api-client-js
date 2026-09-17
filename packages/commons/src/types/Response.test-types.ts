import { expectTypeOf } from "expect-type";
import { InternalAxiosRequestConfig } from "axios";
import { Response } from "./Response.js";

/*
 * Type-level tests, checked by `tsc --noEmit` (the `test:compile` target).
 * `satisfies` asserts assignability with the excess-property checks a real
 * call site gets; `expectTypeOf` asserts exact type identity, which
 * `satisfies` cannot express.
 */

type Response200 = Response<{ a: string }, 200, "application/json">;
type Response200Text = Response<{ text: string }, 200, "text/plain">;

const additionalAxiosResponseData = {
  statusText: "",
  headers: {},
  config: {} as InternalAxiosRequestConfig,
  mediaType: "application/json",
} as const;

void ({
  data: { a: "" },
  status: 200,
  ...additionalAxiosResponseData,
} satisfies Response200);
void ({
  data: {
    a: "",
    // @ts-expect-error Not assignable, `extra` is not part of the response data
    extra: "!",
  },
  status: 200,
  ...additionalAxiosResponseData,
} satisfies Response200);

type Response201 = Response<{ b: string }, 201>;
void ({
  data: {
    b: "",
  },
  status: 201,
  ...additionalAxiosResponseData,
} satisfies Response201);

type Response400 = Response<null, 400>;
void ({
  data: null,
  status: 400,
  ...additionalAxiosResponseData,
} satisfies Response400);
void ({
  data: null,
  // @ts-expect-error Not assignable, 42 is not the response status
  status: 42,
  ...additionalAxiosResponseData,
} satisfies Response400);
void ({
  data: null,
  status: 400,
  // @ts-expect-error Not assignable, `extra` is not part of the response
  extra: "!",
  ...additionalAxiosResponseData,
} satisfies Response400);
void ({
  // @ts-expect-error Not assignable, the response carries no data
  data: { extraContent: "" },
  status: 400,
  ...additionalAxiosResponseData,
} satisfies Response400);

function ignoredTestRequestTypesWithDataPathParameters() {
  type SomeResponse = Response200 | Response200Text | Response201 | Response400;
  const someResponse = {} as SomeResponse;

  expectTypeOf(someResponse.status).toEqualTypeOf<200 | 201 | 400>();

  if (someResponse.status === 200) {
    // @ts-expect-error > a is not in data
    someResponse.data.a;
    // @ts-expect-error > b is not in data
    someResponse.data.b;

    if (someResponse.mediaType === "text/plain") {
      // @ts-expect-error > a is not in data
      someResponse.data.a;
      expectTypeOf(someResponse.data.text).toEqualTypeOf<string>();
    } else {
      // @ts-expect-error > text is not in data
      someResponse.data.text;
      expectTypeOf(someResponse.data.a).toEqualTypeOf<string>();
    }
  } else if (someResponse.status === 201) {
    expectTypeOf(someResponse.data.b).toEqualTypeOf<string>();
    // @ts-expect-error > a is not in data
    someResponse.data.a;
  }
}
