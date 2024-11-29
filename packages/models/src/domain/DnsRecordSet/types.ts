import { MittwaldAPIV2 } from "@mittwald/api-client";

export type CNameRecordData = MittwaldAPIV2.Components.Schemas.DnsRecordCNAME;
export type CombinedARecordData =
  MittwaldAPIV2.Components.Schemas.DnsRecordCombinedA;
export type MXRecordData = MittwaldAPIV2.Components.Schemas.DnsRecordMX;
export type SRVRecordData = MittwaldAPIV2.Components.Schemas.DnsRecordSRV;
export type TXTRecordData = MittwaldAPIV2.Components.Schemas.DnsRecordTXT;

export type RecordSettings = MittwaldAPIV2.Components.Schemas.DnsRecordSettings;

export type DnsRecordSetData = {
  cname: CNameRecordData;
  combinedARecords: CombinedARecordData;
  mx: MXRecordData;
  srv: SRVRecordData;
  txt: TXTRecordData;
};
