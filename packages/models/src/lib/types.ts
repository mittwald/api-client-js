export type ParamsExceptFirst<T extends (...args: any[]) => unknown> =
  T extends (ignoredFirst: never, ...args: infer P) => unknown ? P : never;

export type FirstParameter<T extends (...args: any[]) => unknown> = T extends (
  first: infer P,
  ...args: any[]
) => unknown
  ? P
  : never;
