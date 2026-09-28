import type { DataModel } from "./DataModel.js";

export type DataType<T> = T extends DataModel<infer TData> ? TData : never;

export interface QueryResponseData<T> {
  items: readonly T[];
  totalCount: number;
}
