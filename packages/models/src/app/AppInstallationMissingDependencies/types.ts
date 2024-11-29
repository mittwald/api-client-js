import { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppInstallationMissingDependenciesData =
  MittwaldAPIV2.Operations.AppGetMissingDependenciesForAppinstallation.ResponseData;

export type AppInstallationMissingSystemSoftwareDependencyData =
  MittwaldAPIV2.Components.Schemas.AppSystemSoftwareDependency;

export type AppInstallationMissingUserInputData =
  MittwaldAPIV2.Components.Schemas.AppUserInput;
