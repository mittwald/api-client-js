import { provideReact } from "./provideReact.js";

/*
 * Type-level tests, checked by `tsc --noEmit` (the `test:compile` target).
 * `ExpectExact<Equals<...>>` asserts exact type identity; a plain assignability
 * check would also accept a wider or narrower type. Expected rejections are
 * marked with `@ts-expect-error`.
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

const reactProvided = provideReact(
  async (ignoredP1: string, ignoredP2?: boolean) => Promise.resolve("foo"),
);

function ignoredTestReturnTypesOfProvideReact() {
  const usedValue = reactProvided.use("foo");
  const resourceValue = reactProvided.asResource("foo").use();
  type ignoredUsedValueIsString = ExpectExact<Equals<typeof usedValue, string>>;
  type ignoredResourceValueIsString = ExpectExact<
    Equals<typeof resourceValue, string>
  >;
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
