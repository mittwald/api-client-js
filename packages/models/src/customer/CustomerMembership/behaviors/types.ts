import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base/index.js";
import type {
  CustomerMembershipUpdateRequestData,
  CustomerMembershipListQueryData,
  CustomerMembershipListItemData,
  CustomerMembershipData,
} from "../types.js";

export interface CustomerMembershipBehaviors {
  list: (
    customerId: string,
    query?: CustomerMembershipListQueryData,
  ) => Promise<QueryResponseData<CustomerMembershipListItemData>>;

  find: (
    customerMembershipId: string,
    options?: AxiosRequestConfig,
  ) => Promise<CustomerMembershipData | undefined>;

  findOwn: (
    customerId: string,
    userId: string,
  ) => Promise<CustomerMembershipListItemData | undefined>;

  update: (
    customerMembershipId: string,
    data: CustomerMembershipUpdateRequestData,
  ) => Promise<void>;

  remove: (customerMembershipId: string) => Promise<void>;
}
