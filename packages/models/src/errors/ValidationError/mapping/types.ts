export type MappingReturn = string[] | string;

export type ValidationErrorMapping<T> = Record<
  string,
  ((error: T) => MappingReturn | undefined) | MappingReturn
>;
