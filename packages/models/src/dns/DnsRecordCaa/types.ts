import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DnsRecordCaaData = MittwaldAPIV2.Components.Schemas.DnsRecordCAA;

export type DnsRecordCaaEntry =
  MittwaldAPIV2.Components.Schemas.DnsRecordCAARecord;

export type CaaRecordListItem = { recordType: "caa" } & DnsRecordCaaEntry;
