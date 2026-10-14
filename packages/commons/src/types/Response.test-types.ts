import { InternalAxiosRequestConfig } from "axios";
import type { IsEqual } from "type-fest";
import { Response } from "./Response.js";

/*
 * Type-level tests, checked by `tsc --noEmit` (the `test:compile` target).
 *
 * `satisfies` asserts assignability the way a real call site sees it, i.e.
 * including the excess-property checks that only apply to object literals
 * passed into a typed position. `true satisfies IsEqual<...>` asserts exact
 * type identity, which `satisfies` alone cannot express -- it would also accept
 * a type that is merely assignable. Expected rejections are marked with
 * `@ts-expect-error`.
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

  void (true satisfies IsEqual<typeof someResponse.status, 200 | 201 | 400>);

  if (someResponse.status === 200) {
    // @ts-expect-error > a is not in data
    someResponse.data.a;
    // @ts-expect-error > b is not in data
    someResponse.data.b;

    if (someResponse.mediaType === "text/plain") {
      // @ts-expect-error > a is not in data
      someResponse.data.a;
      void (true satisfies IsEqual<typeof someResponse.data.text, string>);
    } else {
      // @ts-expect-error > text is not in data
      someResponse.data.text;
      void (true satisfies IsEqual<typeof someResponse.data.a, string>);
    }
  } else if (someResponse.status === 201) {
    void (true satisfies IsEqual<typeof someResponse.data.b, string>);
    // @ts-expect-error > a is not in data
    someResponse.data.a;
  }
}
