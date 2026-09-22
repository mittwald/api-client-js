import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { DnsRecordCaaEntry } from "../DnsRecordCaa/index.js";
import type { DnsRecordSrvEntry } from "../DnsRecordSrv/index.js";
import type { DnsRecordMxEntry } from "../DnsRecordMx/index.js";
import type { Project } from "../../project/index.js";

export type DnsZoneListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Parameters.Query & {
    domain?: string;
  };

export type DnsZoneListQueryModelData = {
  project: Project | string;
} & DnsZoneListQueryData;

export type DnsZoneData = MittwaldAPIV2.Operations.DnsGetDnsZone.ResponseData;

export type DnsZoneListItemData =
  MittwaldAPIV2.Operations.DnsListDnsZones.ResponseData[number];

export type DnsSrvRecord = MittwaldAPIV2.Components.Schemas.DnsRecordSRVRecord;

export interface DnsUpdateMxRecordsRequest {
  data: DnsRecordMxEntry[];
  managed: boolean;
}

export interface DnsUpdateMultipleRecordsRequest {
  mx: DnsUpdateMxRecordsRequest;
  cname: string | undefined;
  srv: DnsRecordSrvEntry[];
  caa: DnsRecordCaaEntry[];
  aaaa: string[];
  txt: string[];
  a: string[];
}
