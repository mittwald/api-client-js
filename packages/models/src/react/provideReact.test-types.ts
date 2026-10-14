import type { IsEqual } from "type-fest";
import { provideReact } from "./provideReact.js";

/*
 * Type-level tests, checked by `tsc --noEmit` (the `test:compile` target).
 * `true satisfies IsEqual<...>` asserts exact type identity; a plain
 * assignability check would also accept a wider or narrower type. Expected
 * rejections are marked with `@ts-expect-error`.
 */

const reactProvided = provideReact(
  async (ignoredP1: string, ignoredP2?: boolean) => Promise.resolve("foo"),
);

function ignoredTestReturnTypesOfProvideReact() {
  const ignoredUsedValue = reactProvided.use("foo");
  const ignoredResourceValue = reactProvided.asResource("foo").use();
  void (true satisfies IsEqual<typeof ignoredUsedValue, string>);
  void (true satisfies IsEqual<typeof ignoredResourceValue, string>);
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
