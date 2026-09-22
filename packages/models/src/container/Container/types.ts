import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { ContainerStack } from "./ContainerStack.js";
import type { Project } from "../../project/index.js";

export type ContainerData =
  MittwaldAPIV2.Components.Schemas.ContainerServiceResponse;

export type ContainerStackData =
  MittwaldAPIV2.Components.Schemas.ContainerStackResponse;

export type ContainerStackCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdStacks.Post.Parameters.RequestBody;

export type ContainerAddTemplateComponentData =
  MittwaldAPIV2.Components.Schemas.ContainerAddTemplateComponent;

// Same generated shape as ContainerCreateStack["templateConfig"]["userInputs"] -
// both API operations accept an identical { name; value }[] payload.
export type ContainerTemplateUserInputValues =
  ContainerAddTemplateComponentData["templateConfig"]["userInputs"];

export type ContainerListItemData =
  MittwaldAPIV2.Operations.ContainerListServices.ResponseData[number];

export type ContainerStackListItemData = ContainerStackData;

export type ContainerListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Parameters.Query;

export type ContainerAccessibleListQueryData =
  MittwaldAPIV2.Paths.V2Services.Get.Parameters.Query;

export type ContainerListQueryModelData = {
  stack?: ContainerStack | string;
  project?: Project | string;
} & Omit<ContainerListQueryData, "stackId">;

export type ContainerStackListQueryData =
  MittwaldAPIV2.Paths.V2Stacks.Get.Parameters.Query;

export type ContainerStackListQueryModelData = {
  project?: Project | string;
} & ContainerStackListQueryData;

export type ContainerStackPatchRequestData =
  MittwaldAPIV2.Paths.V2StacksStackId.Patch.Parameters.RequestBody;

export type ContainerStackDeclareRequestData =
  MittwaldAPIV2.Paths.V2StacksStackId.Put.Parameters.RequestBody;

export type ContainerStackUpdateScheduleData = NonNullable<
  ContainerStackPatchRequestData["updateSchedule"]
>;

export type ContainerStackUpdateSchedulePatchRequestData = {
  updateSchedule?: ContainerStackUpdateScheduleData | null;
} & Omit<ContainerStackPatchRequestData, "updateSchedule">;

export type ContainerPatchServiceData =
  MittwaldAPIV2.Components.Schemas.ContainerServiceRequest;

export type ContainerPatchVolumeData =
  MittwaldAPIV2.Components.Schemas.ContainerVolumeRequest;

export type ContainerDeclareServiceData =
  MittwaldAPIV2.Components.Schemas.ContainerServiceDeclareRequest;

export type ContainerTemplateApiData =
  MittwaldAPIV2.Components.Schemas.ContainerTemplate;

export type ContainerTemplateListQueryData =
  MittwaldAPIV2.Paths.V2ContainerTemplates.Get.Parameters.Query;

export type ContainerTemplateListItemData =
  MittwaldAPIV2.Operations.ContainerListTemplates.ResponseData[number];

export const containerTemplateCategories = [
  "productivity",
  "development",
  "ai",
  "security",
  "monitoring",
  "communication",
  "media",
] as const;

export type ContainerTemplateCategory =
  (typeof containerTemplateCategories)[number];

export type ContainerTemplateDomainData = ContainerTemplateApiData["domains"];
export type ContainerTemplateLicenseData = ContainerTemplateApiData["license"];
export type ContainerTemplateType = ContainerTemplateApiData["type"];

export type ContainerTemplateTechnicalDetailData = NonNullable<
  ContainerTemplateApiData["help"]
>["technicalDetails"];

export type ContainerTemplateAlertStatus =
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "unavailable";

export type ContainerStatus =
  MittwaldAPIV2.Components.Schemas.ContainerServiceStatus;

export type ContainerLogData =
  MittwaldAPIV2.Operations.ContainerGetServiceLogs.ResponseData[number];

export interface ContainerLogChunk {
  contentRange?: string;
  content: string;
  status: number;
}

export interface ContainerUpdateData {
  description?: string;
  image?: string;
}

export interface ContainerResourceLimitsData {
  cpuLimit?: string;
  ramLimit?: string;
}

export type ContainerVolumeRelationData = string;

export type ContainerPortData = string;

export interface ContainerEnvVariableData {
  value: string;
  key: string;
}

export type ImageMetaEnvData =
  MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfigEnv;

export type ImageMetaPortData =
  MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfigExposedPort;

export type ImageMetaVolumeData =
  MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfigVolume;

export type ContainerStateData =
  MittwaldAPIV2.Components.Schemas.ContainerServiceState;

export type ContainerEnvVariableListData = Record<string, string>;

export type ImageMetaData =
  MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfig;

export interface ContainerVolumeRelationFormValues {
  type: "directory" | "volume";
  containerPath: string;
  projectPath: string;
  volume: string;
}

export interface ContainerImageFormValues {
  imageReference: string;
}

export type ContainerTemplateUserInputsData =
  ContainerTemplateApiData["userInputs"];

export type ContainerUserInputData =
  NonNullable<ContainerTemplateUserInputsData>[number];

export const containerPortRegExp =
  /^([0-9]+(-[0-9]+)?(:[0-9]+(-[0-9]+)?)?)?(\/(tcp|udp))?$/;
export const containerFilePathRegex = /^\/[a-z,A-Z/\-_.0-9]+/;
export const containerServiceNameRegex = /^[a-zA-Z0-9][a-zA-Z0-9_.-]+$/;
export const containerEnvKeyRegex = /^[a-zA-Z_][a-zA-Z0-9_.]*$/;
export const containerMaxPort = 65535;
export const containerServiceNameMaxLength = 63;
export const containerMaxTextLength = 800;
