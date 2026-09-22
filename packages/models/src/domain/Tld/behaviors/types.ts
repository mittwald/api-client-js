import type { QueryResponseData } from "../../../base/index.js";
import type {
  TldPriceListQueryData,
  TldPriceListItemData,
  TldContactSchemas,
  TldListQueryData,
  TldListItemData,
} from "../types.js";

export interface TldBehaviors {
  queryPrices: (
    query?: TldPriceListQueryData,
  ) => Promise<QueryResponseData<TldPriceListItemData>>;
  query: (
    query?: TldListQueryData,
  ) => Promise<QueryResponseData<TldListItemData>>;
  getContactSchemas: (tld: string) => Promise<TldContactSchemas>;
}
