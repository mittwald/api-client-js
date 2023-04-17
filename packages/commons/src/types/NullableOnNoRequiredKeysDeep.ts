import { HasRequiredKeys, PartialOnUndefinedDeep } from "type-fest";

type PartialOnNoRequiredKeysDeep<T> = PartialOnUndefinedDeep<{
  [TKey in keyof T]: HasRequiredKeys<
    PartialOnNoRequiredKeysDeep<T[TKey]>
  > extends true
    ? T[TKey]
    : T[TKey] | undefined;
}>;

export type NullableOnNoRequiredKeysDeep<T> = HasRequiredKeys<
  PartialOnNoRequiredKeysDeep<T>
> extends true
  ? PartialOnNoRequiredKeysDeep<T>
  : PartialOnNoRequiredKeysDeep<T> | null;
