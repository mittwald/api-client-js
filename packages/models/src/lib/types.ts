export type ParamsExceptFirst<T extends (...args: any) => any> = T extends (
  ignoredFirst: any,
  ...args: infer P
) => any
  ? P
  : never;

export type FirstParameter<T extends (...args: any) => any> = T extends (
  first: infer P,
  ...args: any[]
) => any
  ? P
  : never;
