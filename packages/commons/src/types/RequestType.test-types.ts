import { expectAssignable } from "tsd";
import { RequestType } from "./index.js";

type Data = { foo: string };
type Path = { bar: string };
type Header = { baz: string };
type Query = { whut: string };

function ignoredTestEmptyRequestTypes() {
  expectAssignable<RequestType>({});
  // @ts-expect-error Not assignable
  expectAssignable<RequestType>({ extra: true });
  // @ts-expect-error Not assignable
  expectAssignable<RequestType>({ data: {} });
  // @ts-expect-error Not assignable
  expectAssignable<RequestType>({ data: null });
  // @ts-expect-error Not assignable
  expectAssignable<RequestType>({ pathParameters: {} });
}

function ignoredTestRequestTypesWithDataType() {
  expectAssignable<RequestType<Data>>({ data: { foo: "" } });
  // @ts-expect-error Not assignable
  expectAssignable<RequestType<Data>>({});
  expectAssignable<RequestType<Data>>({
    // @ts-expect-error Not assignable
    data: { foo: "", extra: "" },
  });
  // @ts-expect-error Not assignable
  expectAssignable<RequestType<Data>>({ data: { noFoo: "" } });
}

function ignoredTestRequestTypesWithPathParameters() {
  expectAssignable<RequestType<Data, Path>>({
    data: { foo: "" },
    pathParameters: { bar: "" },
  });
  expectAssignable<RequestType<null, Path>>({
    pathParameters: { bar: "" },
  });
  // @ts-expect-error Not assignable
  expectAssignable<RequestType<null, Path>>({});
  expectAssignable<RequestType<null, Path>>({
    // @ts-expect-error Not assignable
    pathParameters: {},
  });
  expectAssignable<RequestType<null, Path>>({
    // @ts-expect-error Not assignable
    pathParameters: { foo: "", extra: "" },
  });
}

function ignoredTestRequestTypesWithHeader() {
  expectAssignable<RequestType<Data, Path, null, Header>>({
    data: {
      foo: "",
    },
    pathParameters: { bar: "" },
    headers: { baz: "" },
  });
  expectAssignable<RequestType<null, Path, null, Header>>({
    pathParameters: { bar: "" },
    headers: { baz: "" },
  });
  expectAssignable<RequestType<null, null, null, Header>>({
    headers: { baz: "" },
  });

  // @ts-expect-error Not assignable
  expectAssignable<RequestType<null, null, null, Header>>({});
  expectAssignable<RequestType<null, null, null, Header>>({
    headers: {
      // @ts-expect-error Not assignable
      baz: 42,
    },
  });

  expectAssignable<RequestType<null, null, null, Header>>({
    // @ts-expect-error Not assignable
    headers: {},
  });
  expectAssignable<RequestType<null, null, null, Header>>({
    // @ts-expect-error Not assignable
    data: {},
    headers: {
      baz: "",
    },
  });
  expectAssignable<RequestType<null, null, null, Header>>({
    // @ts-expect-error Not assignable
    pathParameters: {},
    headers: {
      baz: "",
    },
  });
}

function ignoredTestRequestTypesWithQuery() {
  expectAssignable<RequestType<Data, Path, Query, Header>>({
    data: {
      foo: "",
    },
    pathParameters: { bar: "" },
    headers: { baz: "" },
    queryParameters: {
      whut: "",
    },
  });
  expectAssignable<RequestType<null, Path, Query, Header>>({
    pathParameters: { bar: "" },
    headers: { baz: "" },
    queryParameters: {
      whut: "",
    },
  });
  expectAssignable<RequestType<null, null, Query, null>>({
    queryParameters: {
      whut: "",
    },
  });

  // @ts-expect-error Not assignable
  expectAssignable<RequestType<null, null, Query, null>>({});
  expectAssignable<RequestType<null, null, Query, null>>({
    queryParameters: {
      // @ts-expect-error Not assignable
      whut: 42,
    },
  });

  expectAssignable<RequestType<null, null, Query, null>>({
    // @ts-expect-error Not assignable
    queryParameters: {},
  });
}

function ignoredTestAdditionalHeadersCanAlwaysBeSet() {
  expectAssignable<RequestType<null>>({
    headers: { extra: true },
  });
  expectAssignable<RequestType<null, null>>({
    headers: { extra: true },
  });
  expectAssignable<RequestType<null, null, null>>({
    headers: { extra: true },
  });
  expectAssignable<RequestType<Data>>({
    data: {
      foo: "",
    },
    headers: { extra: true },
  });
  expectAssignable<RequestType<null, Path>>({
    pathParameters: {
      bar: "",
    },
    headers: { extra: true },
  });
  expectAssignable<RequestType<null, null, null, Header>>({
    headers: { extra: true, baz: "" },
  });
}
