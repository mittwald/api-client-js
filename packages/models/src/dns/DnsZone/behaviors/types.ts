import type {
  DnsZoneListItemData,
  DnsSrvRecord,
  DnsZoneData,
} from "../types.js";
import type { DnsRecordSettingsData } from "../../DnsRecordSettings/index.js";
import type { DnsRecordCaaEntry } from "../../DnsRecordCaa/index.js";
import type { DnsRecordMxEntry } from "../../DnsRecordMx/index.js";
import type { QueryResponseData } from "../../../base/index.js";

export interface DnsZoneBehaviors {
  setARecord: (
    dnsZoneId: string,
    a: string[],
    aaaa: string[],
    settings: DnsRecordSettingsData,
  ) => Promise<void>;
  setMxRecord: (
    dnsZoneId: string,
    records: DnsRecordMxEntry[],
    settings: DnsRecordSettingsData,
  ) => Promise<void>;

  setCaaRecord: (
    dnsZoneId: string,
    items: DnsRecordCaaEntry[],
    settings: DnsRecordSettingsData,
  ) => Promise<void>;
  setSrvRecord: (
    dnsZoneId: string,
    entries: DnsSrvRecord[],
    settings: DnsRecordSettingsData,
  ) => Promise<void>;
  setTxtRecord: (
    dnsZoneId: string,
    entries: string[],
    settings: DnsRecordSettingsData,
  ) => Promise<void>;
  setCname: (
    dnsZoneId: string,
    fqdn?: string,
    settings?: DnsRecordSettingsData,
  ) => Promise<void>;
  query: (projectId: string) => Promise<QueryResponseData<DnsZoneListItemData>>;
  setRecordManaged: (dnsZoneId: string, recordSet: "mx" | "a") => Promise<void>;
  create: (name: string, parentZoneId: string) => Promise<{ id: string }>;
  find: (dnsZoneId: string) => Promise<DnsZoneData | undefined>;
  getZoneFile: (zoneId: string) => Promise<string>;
  removeCname: (zoneId: string) => Promise<void>;
  delete: (zoneId: string) => Promise<void>;
}
