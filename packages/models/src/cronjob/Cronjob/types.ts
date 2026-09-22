import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project";

export type CronjobData =
  MittwaldAPIV2.Operations.CronjobGetCronjob.ResponseData;

export type CronjobListItemData =
  MittwaldAPIV2.Operations.CronjobListCronjobs.ResponseData[number];

export type CronjobListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdCronjobs.Get.Parameters.Query;

export type CronjobListQueryModelData = {
  project: Project | string;
} & CronjobListQueryData;

export type CronjobCreateRequestData =
  MittwaldAPIV2.Components.Schemas.CronjobCronjobRequest;

export type CronjobUpdateRequestData =
  MittwaldAPIV2.Paths.V2CronjobsCronjobId.Patch.Parameters.RequestBody;

export type CronjobUrlDestination =
  MittwaldAPIV2.Components.Schemas.CronjobCronjobUrl;

export type CronjobCommandDestination =
  MittwaldAPIV2.Components.Schemas.CronjobCronjobCommand;

export type CronjobAppInstallationTarget =
  MittwaldAPIV2.Components.Schemas.CronjobAppInstallationTarget;

export type CronjobContainerTarget =
  MittwaldAPIV2.Components.Schemas.CronjobServiceTarget;

export type CronjobContainerTargetResponse =
  MittwaldAPIV2.Components.Schemas.CronjobServiceTargetResponse;

export interface CronjobInterpreter {
  extensions: string[];
  path: string;
  name: string;
}

/* interpreters available in every appInstallation */
export const defaultCronInterpreters: CronjobInterpreter[] = [
  {
    path: "/usr/bin/bash",
    extensions: [".sh"],
    name: "Bash",
  },
];

/* interpreters that have to be available within the appInstallation to be listed */
export const additionalCronInterpreters: CronjobInterpreter[] = [
  {
    extensions: [".php", ".phtml"],
    path: "/usr/bin/php",
    name: "PHP",
  },
  {
    path: "/usr/local/bin/python",
    extensions: [".py"],
    name: "Python",
  },
];

export type CronjobLogData =
  | MittwaldAPIV2.Operations.ProjectFileSystemGetFileContent.ResponseData
  | { message: string };
