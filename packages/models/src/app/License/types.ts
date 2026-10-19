import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type LicenseData =
  MittwaldAPIV2.Operations.LicenseGetLicense.ResponseData;

export type LicenseListItemData =
  MittwaldAPIV2.Operations.LicenseListLicensesForProject.ResponseData[number];

export type LicenseListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdLicenses.Get.Parameters.Query;

export type LicenseMeta = MittwaldAPIV2.Components.Schemas.LicenseMeta;
