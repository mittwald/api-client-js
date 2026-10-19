import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type UnlockedLeadData =
  MittwaldAPIV2.Operations.LeadfyndrGetUnlockedLead.ResponseData;

export type UnlockedLeadListItemData =
  MittwaldAPIV2.Operations.LeadfyndrListUnlockedLeads.ResponseData["leads"][number];

export type UnlockedLeadListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeads.Get.Parameters.Query;

export type UnlockedLeadMetricsData = UnlockedLeadData["metrics"];

export type UnlockedLeadCompanyData = UnlockedLeadData["company"];

export type UnlockedLeadSocialMediaData =
  UnlockedLeadData["socialMedia"][number];

export type UnlockedLeadHosterInformationData = UnlockedLeadData["hoster"];

export type UnlockedLeadContactData = UnlockedLeadData["contact"];
