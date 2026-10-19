import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DnsRecordTxtData = MittwaldAPIV2.Components.Schemas.DnsRecordTXT;

export interface TxtRecordListItem {
  recordType: "txt";
  entry: string;
}
