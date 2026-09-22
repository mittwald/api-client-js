import type { CaaRecordListItem, DnsRecordCaaData } from "../DnsRecordCaa";
import type { SrvRecordListItem, DnsRecordSrvData } from "../DnsRecordSrv";
import type { TxtRecordListItem, DnsRecordTxtData } from "../DnsRecordTxt";
import type { MxRecordListItem, DnsRecordMxData } from "../DnsRecordMx";
import type {
  DnsRecordCombinedAData,
  ARecordListItem,
} from "../DnsRecordCombinedA";
import type {
  CnameRecordListItem,
  DnsRecordCnameData,
} from "../DnsRecordCname";

export interface DnsRecordSetData {
  combinedARecords: DnsRecordCombinedAData;
  cname: DnsRecordCnameData;
  srv: DnsRecordSrvData;
  txt: DnsRecordTxtData;
  caa: DnsRecordCaaData;
  mx: DnsRecordMxData;
}

export type RecordListItem =
  | CnameRecordListItem
  | TxtRecordListItem
  | SrvRecordListItem
  | CaaRecordListItem
  | MxRecordListItem
  | ARecordListItem;
