import {
  DnsMxRecord,
  DnsRecordSettings,
  DnsSrvRecord,
  DnsZoneData,
  DnsZoneListItemData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface DnsZoneBehaviors {
  find: (id: string) => Promise<DnsZoneData | undefined>;
  query: (projectId: string) => Promise<QueryResponseData<DnsZoneListItemData>>;

  delete: (zoneId: string) => Promise<void>;
  create: (name: string, parentZoneId: string) => Promise<{ id: string }>;
  setRecordManaged: (zoneId: string, recordSet: "a" | "mx") => Promise<void>;
  setARecord: (
    zoneId: string,
    a: string[],
    aaaa: string[],
    settings: DnsRecordSettings,
  ) => Promise<void>;
  setMxRecord: (
    zoneId: string,
    records: [DnsMxRecord, ...DnsMxRecord[]],
    settings: DnsRecordSettings,
  ) => Promise<void>;
  setTxtRecord: (
    zoneId: string,
    entries: string[],
    settings: DnsRecordSettings,
  ) => Promise<void>;
  setSrvRecord: (
    zoneId: string,
    entries: [DnsSrvRecord, ...DnsSrvRecord[]],
    settings: DnsRecordSettings,
  ) => Promise<void>;
  setCname: (
    zoneId: string,
    fqdn: string,
    settings: DnsRecordSettings,
  ) => Promise<void>;
}
