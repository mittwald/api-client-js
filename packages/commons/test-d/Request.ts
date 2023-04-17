import { Request } from "../dist/types/Request";
import { expectAssignable, expectNotAssignable } from "tsd";

expectAssignable<Request>({});
expectNotAssignable<Request>({ extra: true });
expectNotAssignable<Request>({ data: {} });
expectNotAssignable<Request>({ data: null });
expectNotAssignable<Request>({ pathParameters: {} });
expectNotAssignable<Request>({ headers: {} });

expectAssignable<Request<{ foo: string }>>({ data: { foo: "" } });
expectNotAssignable<Request<{ foo: string }>>({});
expectNotAssignable<Request<{ foo: string }>>({ data: { foo: "", extra: "" } });
expectNotAssignable<Request<{ foo: string }>>({ data: { noFoo: "" } });

expectAssignable<Request<{ foo: string }, { bar: string }>>({
  data: { foo: "" },
  pathParameters: { bar: "" },
});
expectAssignable<Request<null, { bar: string }>>({
  pathParameters: { bar: "" },
});
expectNotAssignable<Request<null, { bar: string }>>({
  pathParameters: { bar: "" },
  headers: {},
});
expectNotAssignable<Request<null, { bar: string }>>({});
expectNotAssignable<Request<null, { bar: string }>>({
  pathParameters: {},
});
expectNotAssignable<Request<null, { bar: string }>>({
  pathParameters: { foo: "", extra: "" },
});

expectAssignable<Request<{ foo: string }, { bar: string }, { baz: string }>>({
  data: {
    foo: "",
  },
  pathParameters: { bar: "" },
  headers: { baz: "" },
});
expectAssignable<Request<null, { bar: string }, { baz: string }>>({
  pathParameters: { bar: "" },
  headers: { baz: "" },
});
expectAssignable<Request<null, null, { baz: string }>>({
  headers: { baz: "" },
});
expectNotAssignable<Request<null, null, { baz: string }>>({});
expectNotAssignable<Request<null, null, { baz: string }>>({
  headers: {
    baz: 42,
  },
});
expectNotAssignable<Request<null, null, { baz: string }>>({
  headers: {
    baz: "",
    extra: true,
  },
});
expectNotAssignable<Request<null, null, { baz: string }>>({
  headers: {},
});
expectNotAssignable<Request<null, null, { baz: string }>>({
  data: {},
  headers: {
    baz: "",
  },
});
expectNotAssignable<Request<null, null, { baz: string }>>({
  pathParameters: {},
  headers: {
    baz: "",
  },
});
