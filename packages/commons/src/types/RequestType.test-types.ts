import { RequestType } from "./index.js";

/*
 * Type-level tests. They are checked by `tsc --noEmit` (the `test:compile`
 * target), not by a test runner. Assignability is asserted with `satisfies`
 * rather than a type-level `extends`, so that excess-property and weak-type
 * checks apply -- those are what a real call site passing an object literal
 * gets, and they are what most of the assertions below are about. Expected
 * rejections are marked with `@ts-expect-error`.
 */

type Data = { foo: string };
type Path = { bar: string };
type Header = { baz: string };
type Query = { whut: string };

function ignoredTestEmptyRequestTypes() {
  void ({} satisfies RequestType);
  // @ts-expect-error Not assignable
  void ({ extra: true } satisfies RequestType);
  // @ts-expect-error Not assignable
  void ({ data: {} } satisfies RequestType);
  // @ts-expect-error Not assignable
  void ({ data: null } satisfies RequestType);
  // @ts-expect-error Not assignable
  void ({ pathParameters: {} } satisfies RequestType);
}

function ignoredTestRequestTypesWithDataType() {
  void ({ data: { foo: "" } } satisfies RequestType<Data>);
  // @ts-expect-error Not assignable
  void ({} satisfies RequestType<Data>);
  void ({
    // @ts-expect-error Not assignable
    data: { foo: "", extra: "" },
  } satisfies RequestType<Data>);
  // @ts-expect-error Not assignable
  void ({ data: { noFoo: "" } } satisfies RequestType<Data>);
}

function ignoredTestRequestTypesWithPathParameters() {
  void ({
    data: { foo: "" },
    pathParameters: { bar: "" },
  } satisfies RequestType<Data, Path>);
  void ({
    pathParameters: { bar: "" },
  } satisfies RequestType<null, Path>);
  // @ts-expect-error Not assignable
  void ({} satisfies RequestType<null, Path>);
  void ({
    // @ts-expect-error Not assignable
    pathParameters: {},
  } satisfies RequestType<null, Path>);
  void ({
    // @ts-expect-error Not assignable
    pathParameters: { foo: "", extra: "" },
  } satisfies RequestType<null, Path>);
}

function ignoredTestRequestTypesWithHeader() {
  void ({
    data: {
      foo: "",
    },
    pathParameters: { bar: "" },
    headers: { baz: "" },
  } satisfies RequestType<Data, Path, null, Header>);
  void ({
    pathParameters: { bar: "" },
    headers: { baz: "" },
  } satisfies RequestType<null, Path, null, Header>);
  void ({
    headers: { baz: "" },
  } satisfies RequestType<null, null, null, Header>);

  // @ts-expect-error Not assignable
  void ({} satisfies RequestType<null, null, null, Header>);
  void ({
    headers: {
      // @ts-expect-error Not assignable
      baz: 42,
    },
  } satisfies RequestType<null, null, null, Header>);

  void ({
    // @ts-expect-error Not assignable
    headers: {},
  } satisfies RequestType<null, null, null, Header>);
  void ({
    // @ts-expect-error Not assignable
    data: {},
    headers: {
      baz: "",
    },
  } satisfies RequestType<null, null, null, Header>);
  void ({
    // @ts-expect-error Not assignable
    pathParameters: {},
    headers: {
      baz: "",
    },
  } satisfies RequestType<null, null, null, Header>);
}

function ignoredTestRequestTypesWithQuery() {
  void ({
    data: {
      foo: "",
    },
    pathParameters: { bar: "" },
    headers: { baz: "" },
    queryParameters: {
      whut: "",
    },
  } satisfies RequestType<Data, Path, Query, Header>);
  void ({
    pathParameters: { bar: "" },
    headers: { baz: "" },
    queryParameters: {
      whut: "",
    },
  } satisfies RequestType<null, Path, Query, Header>);
  void ({
    queryParameters: {
      whut: "",
    },
  } satisfies RequestType<null, null, Query, null>);

  // @ts-expect-error Not assignable
  void ({} satisfies RequestType<null, null, Query, null>);
  void ({
    queryParameters: {
      // @ts-expect-error Not assignable
      whut: 42,
    },
  } satisfies RequestType<null, null, Query, null>);

  void ({
    // @ts-expect-error Not assignable
    queryParameters: {},
  } satisfies RequestType<null, null, Query, null>);
}

function ignoredTestAdditionalHeadersCanAlwaysBeSet() {
  void ({
    headers: { extra: true },
  } satisfies RequestType<null>);
  void ({
    headers: { extra: true },
  } satisfies RequestType<null, null>);
  void ({
    headers: { extra: true },
  } satisfies RequestType<null, null, null>);
  void ({
    data: {
      foo: "",
    },
    headers: { extra: true },
  } satisfies RequestType<Data>);
  void ({
    pathParameters: {
      bar: "",
    },
    headers: { extra: true },
  } satisfies RequestType<null, Path>);
  void ({
    headers: { extra: true, baz: "" },
  } satisfies RequestType<null, null, null, Header>);
}
