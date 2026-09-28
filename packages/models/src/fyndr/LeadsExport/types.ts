import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type LeadsExportData =
  MittwaldAPIV2.Operations.LeadfyndrGetLeadsExportHistory.ResponseData[number];

export type LeadsExportListItemData =
  MittwaldAPIV2.Operations.LeadfyndrGetLeadsExportHistory.ResponseData[number];

export type LeadsExportListQueryData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExports.Get.Parameters.Query;

export type LeadsExportRequestData =
  MittwaldAPIV2.Paths.V2CustomersCustomerIdUnlockedLeadsExport.Post.Parameters.RequestBody;

export type LeadsExportExporter = LeadsExportData["exportedBy"];

export type LeadsExportExportableField =
  LeadsExportRequestData["fieldKeys"][number];
