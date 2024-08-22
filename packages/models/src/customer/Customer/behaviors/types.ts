import {
  CustomerListItemData,
  CustomerData,
  CustomerListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface CustomerBehaviors {
  find: (id: string) => Promise<CustomerData | undefined>;
  list: (
    query?: CustomerListQueryData,
  ) => Promise<QueryResponseData<CustomerListItemData>>;
}
