import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project/index.js";

export type RegistryData = MittwaldAPIV2.Components.Schemas.ContainerRegistry;

export type RegistryListItemData =
  MittwaldAPIV2.Operations.ContainerListRegistries.ResponseData[number];

export type RegistryListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdRegistries.Get.Parameters.Query;

export type RegistryListQueryModelData = {
  project: Project | string;
} & RegistryListQueryData;

export type RegistryCreateRequestData =
  MittwaldAPIV2.Components.Schemas.ContainerCreateRegistry;

export type RegistryUpdateRequestData =
  MittwaldAPIV2.Components.Schemas.ContainerUpdateRegistry;

export type RegistryUpdateCredentialsRequestData =
  MittwaldAPIV2.Components.Schemas.ContainerSetRegistryCredentials;

export type RegistryLoginType = "anonymous" | "password";

export interface KnownRegistryMeta {
  helpLink: string;
  scope: string;
}
