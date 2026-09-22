import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type DomainMigrationDomainData =
  MittwaldAPIV2.Components.Schemas.DomainmigrationMigration["domains"][number];
export type DomainMigrationDomainState = DomainMigrationDomainData["state"];
