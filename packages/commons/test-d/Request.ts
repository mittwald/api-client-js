import { RequestType } from "../dist/esm/types/RequestType";
import { expectAssignable, expectNotAssignable } from "tsd";

expectAssignable<RequestType>({});
expectNotAssignable<RequestType>({ extra: true });
expectNotAssignable<RequestType>({ data: {} });
expectNotAssignable<RequestType>({ data: null });
expectNotAssignable<RequestType>({ pathParameters: {} });
expectAssignable<RequestType>({ headers: {} });
expectAssignable<RequestType>({ headers: { extra: true } });

expectAssignable<RequestType<{ foo: string }>>({ data: { foo: "" } });
expectAssignable<RequestType<{ foo: string }>>({
  data: { foo: "" },
  headers: { extra: true },
});
expectNotAssignable<RequestType<{ foo: string }>>({});
expectNotAssignable<RequestType<{ foo: string }>>({
  data: { foo: "", extra: "" },
});
expectNotAssignable<RequestType<{ foo: string }>>({ data: { noFoo: "" } });

expectAssignable<RequestType<{ foo: string }, { bar: string }>>({
  data: { foo: "" },
  pathParameters: { bar: "" },
});
expectAssignable<RequestType<null, { bar: string }>>({
  pathParameters: { bar: "" },
});
expectAssignable<RequestType<null, { bar: string }>>({
  pathParameters: { bar: "" },
  headers: { extra: true },
});
expectNotAssignable<RequestType<null, { bar: string }>>({});
expectNotAssignable<RequestType<null, { bar: string }>>({
  pathParameters: {},
});
expectNotAssignable<RequestType<null, { bar: string }>>({
  pathParameters: { foo: "", extra: "" },
});

expectAssignable<
  RequestType<{ foo: string }, { bar: string }, { baz: string }>
>({
  data: {
    foo: "",
  },
  pathParameters: { bar: "" },
  headers: { baz: "" },
});
expectAssignable<RequestType<null, { bar: string }, { baz: string }>>({
  pathParameters: { bar: "" },
  headers: { baz: "" },
});
expectAssignable<RequestType<null, null, { baz: string }>>({
  headers: { baz: "" },
});
expectAssignable<RequestType<null, null, { baz: string }>>({
  headers: { baz: "", extra: true },
});
expectNotAssignable<RequestType<null, null, { baz: string }>>({});
expectNotAssignable<RequestType<null, null, { baz: string }>>({
  headers: {
    baz: 42,
  },
});
expectNotAssignable<RequestType<null, null, { baz: string }>>({
  headers: {},
});
expectNotAssignable<RequestType<null, null, { baz: string }>>({
  data: {},
  headers: {
    baz: "",
  },
});
expectNotAssignable<RequestType<null, null, { baz: string }>>({
  pathParameters: {},
  headers: {
    baz: "",
  },
});
