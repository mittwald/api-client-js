import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DnsRecordSrvData = MittwaldAPIV2.Components.Schemas.DnsRecordSRV;

export type DnsRecordSrvEntry =
  MittwaldAPIV2.Components.Schemas.DnsRecordSRVRecord;

export type SrvRecordListItem = { recordType: "srv" } & DnsRecordSrvEntry;
