import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type LeadData = MittwaldAPIV2.Operations.LeadfyndrGetLead.ResponseData;

export type LeadListItemData =
  MittwaldAPIV2.Operations.LeadfyndrListLeads.ResponseData["leads"][number];

export type LeadListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdLeads.Get.Parameters.Query;

export type LeadMetricsData = LeadData["metrics"];

export type LeadTechnologyData = LeadData["technologies"][number];

export type LeadCompanyData = LeadData["company"];

export type LeadHosterInformationData = LeadData["hoster"];

export type LeadFilterType = {
  location: { zipCode: string; radius: string; city: string; } | null;
  employeeCount: { max: string | null; min: string; } | null;
  businessFields: string[];
  technologies: string[];
} | null;
