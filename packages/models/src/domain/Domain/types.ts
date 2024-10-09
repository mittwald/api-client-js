import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type DomainListQueryData =
  MittwaldAPIV2.Paths.V2Domains.Get.Parameters.Query;

export type DomainListQueryModelData = Omit<
  DomainListQueryData,
  "projectId"
> & {
  project?: Project;
};

export type DomainData = MittwaldAPIV2.Operations.DomainGetDomain.ResponseData;

export type DomainListItemData =
  MittwaldAPIV2.Operations.DomainListDomains.ResponseData[number];
