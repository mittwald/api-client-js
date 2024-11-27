import {
  CustomerMembershipData,
  CustomerMembershipListItemData,
  CustomerMembershipListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface CustomerMembershipBehaviors {
  find: (id: string) => Promise<CustomerMembershipData | undefined>;
  list: (
    customerId: string,
    query?: CustomerMembershipListQueryData,
  ) => Promise<QueryResponseData<CustomerMembershipListItemData>>;
}
