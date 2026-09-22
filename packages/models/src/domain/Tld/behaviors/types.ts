import type { QueryResponseData } from "../../../base";
import type {
  TldPriceListQueryData,
  TldPriceListItemData,
  TldContactSchemas,
  TldListQueryData,
  TldListItemData,
} from "../types";

export interface TldBehaviors {
  queryPrices: (
    query?: TldPriceListQueryData,
  ) => Promise<QueryResponseData<TldPriceListItemData>>;
  query: (
    query?: TldListQueryData,
  ) => Promise<QueryResponseData<TldListItemData>>;
  getContactSchemas: (tld: string) => Promise<TldContactSchemas>;
}
