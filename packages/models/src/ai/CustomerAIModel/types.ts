import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type CustomerAIModelData =
  MittwaldAPIV2.Operations.AiHostingCustomerGetDetailedModels.ResponseData[number];

export type CustomerAIModelListItemData = CustomerAIModelData;

export type CustomerAIModelStatus =
  MittwaldAPIV2.Components.Schemas.AihostingDetailedModelStatus;

export interface CustomerAIModelListQueryData {}
