import type { CaaRecordListItem, DnsRecordCaaData } from "../DnsRecordCaa/index.js";
import type { SrvRecordListItem, DnsRecordSrvData } from "../DnsRecordSrv/index.js";
import type { TxtRecordListItem, DnsRecordTxtData } from "../DnsRecordTxt/index.js";
import type { MxRecordListItem, DnsRecordMxData } from "../DnsRecordMx/index.js";
import type {
  DnsRecordCombinedAData,
  ARecordListItem,
} from "../DnsRecordCombinedA/index.js";
import type {
  CnameRecordListItem,
  DnsRecordCnameData,
} from "../DnsRecordCname/index.js";

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
