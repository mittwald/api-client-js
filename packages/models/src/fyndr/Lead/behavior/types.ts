import type {
  LeadListQueryData,
  LeadListItemData,
  LeadData,
} from "../types.js";
import type { QueryResponseData } from "../../../base/index.js";

export interface LeadBehaviors {
  list: (
    customerId: string,
    query?: LeadListQueryData,
  ) => Promise<QueryResponseData<LeadListItemData>>;
  find: (customerId: string, leadId: string) => Promise<LeadData | undefined>;
  unlock: (customerId: string, leadId: string) => Promise<void>;
}
