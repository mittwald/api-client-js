import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DnsRecordCnameData =
  MittwaldAPIV2.Components.Schemas.DnsRecordCNAME;

export interface CnameRecordListItem {
  recordType: "cname";
  fqdn: string;
}
