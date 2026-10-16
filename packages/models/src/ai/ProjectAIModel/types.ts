import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ProjectAIModelData =
  MittwaldAPIV2.Operations.AiHostingProjectGetDetailedModels.ResponseData[number];

export type ProjectAIModelListItemData = ProjectAIModelData;

export type ProjectAIModelStatus =
  MittwaldAPIV2.Components.Schemas.AihostingDetailedModelStatus;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ProjectAIModelListQueryData {}
