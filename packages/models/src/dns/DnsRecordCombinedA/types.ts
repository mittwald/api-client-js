import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DnsRecordCombinedACustomData =
  MittwaldAPIV2.Components.Schemas.DnsCombinedACustom;
export type DnsRecordCombinedAManagedData =
  MittwaldAPIV2.Components.Schemas.DnsCombinedAManaged;
export type DnsRecordCombinedAUnsetData =
  MittwaldAPIV2.Components.Schemas.DnsRecordUnset;

export type DnsRecordCombinedAData =
  | DnsRecordCombinedAManagedData
  | DnsRecordCombinedACustomData
  | DnsRecordCombinedAUnsetData;

export interface ARecordManagedListItem {
  recordType: "a";
  type: "managed";
}

export interface ARecordCustomListItem {
  recordType: "a";
  isIpV6: boolean;
  type: "custom";
  ip: string;
}

export type ARecordListItem = ARecordManagedListItem | ARecordCustomListItem;
