import { DnsZoneData, DnsZoneListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface DnsZoneBehaviors {
  find: (id: string) => Promise<DnsZoneData | undefined>;
  query: (projectId: string) => Promise<QueryResponseData<DnsZoneListItemData>>;

  delete: (zoneId: string) => Promise<void>;
  create: (name: string, parentZoneId: string) => Promise<{ id: string }>;
  setRecordManaged: (zoneId: string, recordSet: "a" | "mx") => Promise<void>;
}
