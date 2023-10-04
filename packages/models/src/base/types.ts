import BaseModel from "./BaseModel.js";
import { ReadonlyDeep } from "./behaviors/index.js";

export type CompactListResponse<T> = T extends BaseModel<
  unknown,
  unknown,
  "Compact"
>
  ? Promise<ReadonlyDeep<Array<T>>>
  : never;
