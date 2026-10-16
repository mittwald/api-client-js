import { OmitIndexSignature, PartialOnUndefinedDeep } from "type-fest";

/**
 * Deliberately not type-fest's `HasRequiredKeys`: from type-fest 4.39 on, it
 * distributes over unions and reports `false` for primitives such as `string`.
 * That turned required path parameters into optional ones (see
 * `RequestFunction.test-types.ts`). These are the semantics of type-fest 4.30,
 * kept here so that consumers get the same types whatever type-fest version
 * their lockfile resolves.
 */
type RequiredKeysOf<T> = Exclude<
  {
    [TKey in keyof T]: T extends Record<TKey, T[TKey]> ? TKey : never;
  }[keyof T],
  undefined
>;

type HasRequiredKeys<T> = RequiredKeysOf<T> extends never ? false : true;

type PartialOnNoRequiredKeysDeep<T> = PartialOnUndefinedDeep<
  OmitIndexSignature<{
    [TKey in keyof T]: HasRequiredKeys<
      PartialOnNoRequiredKeysDeep<T[TKey]>
    > extends true
      ? T[TKey]
      : T[TKey] | undefined;
  }>
>;

export type NullableOnNoRequiredKeysDeep<T> =
  HasRequiredKeys<PartialOnNoRequiredKeysDeep<T>> extends true
    ? PartialOnNoRequiredKeysDeep<T>
    : PartialOnNoRequiredKeysDeep<T> | null;
