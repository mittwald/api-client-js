import type { QueryResponseData } from "../../../base/index.js";
import type {
  UnlockedLeadListQueryData,
  UnlockedLeadListItemData,
  UnlockedLeadData,
} from "../types.js";

export interface UnlockedLeadBehaviors {
  list: (
    customerId: string,
    query?: UnlockedLeadListQueryData,
  ) => Promise<QueryResponseData<UnlockedLeadListItemData>>;
  find: (
    customerId: string,
    leadId: string,
  ) => Promise<UnlockedLeadData | undefined>;
  removeReservation: (customerId: string, leadId: string) => Promise<void>;
  reserve: (customerId: string, leadId: string) => Promise<void>;
}
