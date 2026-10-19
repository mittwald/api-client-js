import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AIModelData =
  MittwaldAPIV2.Operations.AiHostingGetModels.ResponseData[number];

export type AIModelListItemData = AIModelData;

export type AIModelLabel =
  "legacy stable" | "experimental" | "preview" | "stable" | "lts";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AIModelListQueryData {}
