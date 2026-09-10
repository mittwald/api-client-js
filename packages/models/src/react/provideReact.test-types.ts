import { expectTypeOf } from "expect-type";
import { provideReact } from "./provideReact.js";

/* Type-level tests, checked by `tsc --noEmit` (the `test:compile` target). */

const reactProvided = provideReact(
  async (ignoredP1: string, ignoredP2?: boolean) => Promise.resolve("foo"),
);

function ignoredTestReturnTypesOfProvideReact() {
  const usedValue = reactProvided.use("foo");
  const asAsyncResource = reactProvided.asResource("foo");
  expectTypeOf(usedValue).toEqualTypeOf<string>();
  expectTypeOf(asAsyncResource.use()).toEqualTypeOf<string>();
}

function ignoredTestParameterTypesOfProvideReact() {
  reactProvided.use("foo", true);
  reactProvided.asResource("foo", true);
  reactProvided.use("foo");
  reactProvided.asResource("foo");

  // @ts-expect-error Not assignable
  reactProvided.asResource(42);
  // @ts-expect-error Not assignable
  reactProvided.asResource("foo", 42);
  // @ts-expect-error Not assignable
  reactProvided.asResource("foo", true, 42);
}
