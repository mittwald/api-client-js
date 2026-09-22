import type { LeadListQueryData, LeadListItemData, LeadData } from "../types";
import type { QueryResponseData } from "../../../base";

export interface LeadBehaviors {
  list: (
    customerId: string,
    query?: LeadListQueryData,
  ) => Promise<QueryResponseData<LeadListItemData>>;
  find: (customerId: string, leadId: string) => Promise<LeadData | undefined>;
  unlock: (customerId: string, leadId: string) => Promise<void>;
}
