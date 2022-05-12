type UndefinedProperties<T> = Exclude<
    {
        [P in keyof T]-?: undefined extends T[P] ? P : never;
    }[keyof T],
    undefined
>;

type RequiredProperties<T> = Exclude<
    {
        [K in keyof T]: T extends Record<K, T[K]> ? K : never;
    }[keyof T],
    undefined
>;

type OptionalProperties<T> = Exclude<keyof T, RequiredProperties<T>>;

type OptionalObjectToUndefined<T> = Partial<T> extends T ? T | undefined : T;

type LooseObjectInner<T> = OptionalObjectToUndefined<
    Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>
>;

export type LooseObject<T> = LooseObjectInner<
    {
        [TKey in OptionalProperties<T>]?: OptionalObjectToUndefined<T[TKey]>;
    } & {
        [TKey in RequiredProperties<T>]: OptionalObjectToUndefined<T[TKey]>;
    }
>;
