import { MittwaldAPIV2 } from "@mittwald/api-client";

export type IngressRedirectTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetUrl;

export type IngressDirectoryTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetDirectory;

export type IngressAppInstallationTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetInstallation;

export type IngressUndefinedTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetUseDefaultPage;

export type IngressTargetData =
  | IngressRedirectTargetData
  | IngressDirectoryTargetData
  | IngressAppInstallationTargetData
  | IngressUndefinedTargetData;
