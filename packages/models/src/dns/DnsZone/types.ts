import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type DnsZoneListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdDnsZones.Get.Parameters.Query;

export type DnsZoneListQueryModelData = Omit<
  DnsZoneListQueryData,
  "projectId"
> & {
  project?: Project;
};

export type DnsZoneData = MittwaldAPIV2.Operations.DnsGetDnsZone.ResponseData;

export type DnsZoneListItemData =
  MittwaldAPIV2.Operations.DnsListDnsZones.ResponseData[number];

export type DnsRecordSettings =
  MittwaldAPIV2.Components.Schemas.DnsRecordSettings;

export type DnsMxRecord = MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord;
export type DnsSrvRecord = MittwaldAPIV2.Components.Schemas.DnsRecordSRVRecord;
