import { DataModel } from "./DataModel.js";

export type DataType<T> = T extends DataModel<infer TData> ? TData : never;
