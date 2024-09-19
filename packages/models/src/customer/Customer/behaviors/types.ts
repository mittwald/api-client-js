import {
  CustomerListItemData,
  CustomerData,
  CustomerListQueryData,
  CustomerUpdateRequestData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface CustomerBehaviors {
  find: (id: string) => Promise<CustomerData | undefined>;
  list: (
    query?: CustomerListQueryData,
  ) => Promise<QueryResponseData<CustomerListItemData>>;
  update: (id: string, data: CustomerUpdateRequestData) => Promise<void>;
}
