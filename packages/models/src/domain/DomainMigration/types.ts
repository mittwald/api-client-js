import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DomainMigrationData =
  MittwaldAPIV2.Components.Schemas.DomainmigrationMigration;

export type DomainMigrationListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdDomainMigrations.Get.Parameters.Query;
export type DomainMigrationListItemData =
  MittwaldAPIV2.Operations.DomainMigrationListMigrationsByProjectId.ResponseData[number];
