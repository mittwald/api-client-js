import { DnsZoneData, DnsZoneListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface DnsZoneBehaviors {
  find: (id: string) => Promise<DnsZoneData | undefined>;
  query: (projectId: string) => Promise<QueryResponseData<DnsZoneListItemData>>;
}
