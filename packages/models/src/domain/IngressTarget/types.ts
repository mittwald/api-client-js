import { MittwaldAPIV2 } from "@mittwald/api-client";

export type IngressRedirectTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetUrl;

export type IngressAppInstallationTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetInstallation;

export type IngressContainerTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetContainer;

export type IngressUndefinedTargetData =
  MittwaldAPIV2.Components.Schemas.IngressTargetUseDefaultPage;

export type IngressTargetData =
  | IngressRedirectTargetData
  | IngressAppInstallationTargetData
  | IngressUndefinedTargetData
  | IngressContainerTargetData;
