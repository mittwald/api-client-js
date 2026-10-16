import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppLinkedDatabaseData =
  MittwaldAPIV2.Components.Schemas.AppLinkedDatabase;

export type AppLinkedDatabasePurpose = AppLinkedDatabaseData["purpose"];
