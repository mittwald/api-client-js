import { TldListItemData, TldListQueryData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface TldBehaviors {
  query: (
    query?: TldListQueryData,
  ) => Promise<QueryResponseData<TldListItemData>>;
}
