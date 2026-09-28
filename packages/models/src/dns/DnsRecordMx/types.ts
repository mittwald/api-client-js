import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DnsRecordMxManagedData =
  MittwaldAPIV2.Components.Schemas.DnsRecordMXManaged;
export type DnsRecordMxCustomData =
  MittwaldAPIV2.Components.Schemas.DnsRecordMXCustom;
export type DnsRecordMxUnsetData =
  MittwaldAPIV2.Components.Schemas.DnsRecordUnset;

export type DnsRecordMxData =
  | DnsRecordMxManagedData
  | DnsRecordMxCustomData
  | DnsRecordMxUnsetData;

export type DnsRecordMxEntry =
  MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord;

export type MxRecordCustomListItem = {
  recordType: "mx";
  type: "custom";
} & DnsRecordMxEntry;

export type MxRecordManagedListItem = {
  recordType: "mx";
  type: "managed";
} & DnsRecordMxEntry;

export type MxRecordListItem = MxRecordManagedListItem | MxRecordCustomListItem;
