import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type IngressListQueryData =
  MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Query;

export type IngressListModelQueryData = Omit<
  IngressListQueryData,
  "projectId"
> & {
  project?: Project | string;
};

export type IngressData =
  MittwaldAPIV2.Operations.IngressGetIngress.ResponseData;

export type IngressListItemData =
  MittwaldAPIV2.Operations.IngressListIngresses.ResponseData[number];
