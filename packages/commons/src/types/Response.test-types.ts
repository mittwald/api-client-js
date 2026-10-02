import { InternalAxiosRequestConfig } from "axios";
import { Response } from "./Response.js";

/*
 * Type-level tests, checked by `tsc --noEmit` (the `test:compile` target).
 *
 * `satisfies` asserts assignability the way a real call site sees it, i.e.
 * including the excess-property checks that only apply to object literals
 * passed into a typed position. `ExpectExact<Equals<...>>` asserts exact type
 * identity, which `satisfies` cannot express -- it would also accept a type
 * that is merely assignable. Expected rejections are marked
 * with `@ts-expect-error`.
 */

/**
 * Resolves to `true` only if both types are identical, not merely mutually
 * assignable. The two deferred signatures are only related to each other when
 * `TActual` and `TExpected` resolve identically, which is the one way plain
 * TypeScript can express exactness.
 */
type Equals<TActual, TExpected> =
  (<T>() => T extends TActual ? 1 : 2) extends <T>() => T extends TExpected
    ? 1
    : 2
    ? true
    : false;

/** Fails to compile unless the `Equals<...>` handed to it resolved to `true`. */
type ExpectExact<TIgnoredMatch extends true> = void;

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

  type ignoredStatusIsExactlyTheDeclaredOnes = ExpectExact<
    Equals<typeof someResponse.status, 200 | 201 | 400>
  >;

  if (someResponse.status === 200) {
    // @ts-expect-error > a is not in data
    someResponse.data.a;
    // @ts-expect-error > b is not in data
    someResponse.data.b;

    if (someResponse.mediaType === "text/plain") {
      // @ts-expect-error > a is not in data
      someResponse.data.a;
      type ignoredTextIsString = ExpectExact<
        Equals<typeof someResponse.data.text, string>
      >;
    } else {
      // @ts-expect-error > text is not in data
      someResponse.data.text;
      type ignoredAIsString = ExpectExact<
        Equals<typeof someResponse.data.a, string>
      >;
    }
  } else if (someResponse.status === 201) {
    type ignoredBIsString = ExpectExact<
      Equals<typeof someResponse.data.b, string>
    >;
    // @ts-expect-error > a is not in data
    someResponse.data.a;
  }
}
