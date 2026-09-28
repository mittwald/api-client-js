import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AIModelData =
  MittwaldAPIV2.Operations.AiHostingGetModels.ResponseData[number];

export type AIModelListItemData = AIModelData;

export type AIModelLabel =
  | "legacy stable"
  | "experimental"
  | "preview"
  | "stable"
  | "lts";

export interface AIModelListQueryData {}
