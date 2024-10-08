import {
  DnsZoneData,
  DnsZoneListItemData,
  DnsZoneListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ZoneBehaviors {
  find: (id: string) => Promise<DnsZoneData | undefined>;
  query: (
    projectId: string,
    query?: DnsZoneListQueryData,
  ) => Promise<QueryResponseData<DnsZoneListItemData>>;
}
