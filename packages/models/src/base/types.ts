import { ReadonlyDeep } from "../lib/deepFreeze.js";
import BaseModel from "./BaseModel.js";

export type CompactListResponse<T> = T extends BaseModel<
  unknown,
  unknown,
  "Compact"
>
  ? Promise<ReadonlyDeep<Array<T>>>
  : never;
