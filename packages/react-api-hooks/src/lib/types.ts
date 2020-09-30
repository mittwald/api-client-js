export type Resolved<T> = T extends Promise<infer TResolved> ? TResolved : T;

export type FunctionType<TArgs extends any[] = any, TResult = any> = (...args: TArgs) => TResult;
