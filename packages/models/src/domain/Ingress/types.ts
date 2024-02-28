import { MittwaldAPIV2 } from "@mittwald/api-client";

export interface IngressListQuery {
  projectId?: string;
}

export type IngressData =
  MittwaldAPIV2.Operations.IngressGetIngress.ResponseData;

export type IngressListItemData =
  MittwaldAPIV2.Operations.IngressListIngresses.ResponseData[number];
