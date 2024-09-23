import { provideReact } from "./provideReact.js";
import { expectType } from "tsd";

const reactProvided = provideReact(
  async (ignoredP1: string, ignoredP2?: boolean) => Promise.resolve("foo"),
);

function ignoredTestReturnTypesOfProvideReact() {
  const usedValue = reactProvided.use("foo");
  const asAsyncResource = reactProvided.asResource("foo");
  expectType<string>(usedValue);
  expectType<string>(asAsyncResource.use());
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
