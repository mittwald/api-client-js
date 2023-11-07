import { MittwaldAPIV2 } from "@mittwald/api-client";

export interface IngressListQuery {
  projectId?: string;
}

export type IngressData =
  MittwaldAPIV2.Operations.IngressGetSpecific.ResponseData;

export type IngressCompactData =
  MittwaldAPIV2.Operations.IngressListAccessible.ResponseData[number];
