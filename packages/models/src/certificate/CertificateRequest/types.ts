import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Ingress } from "../../ingress/Ingress/Ingress";
import type { Project } from "../../project";

export type CertificateRequestData =
  MittwaldAPIV2.Operations.SslGetCertificateRequest.ResponseData;

export type CertificateRequestListQueryData =
  MittwaldAPIV2.Paths.V2CertificateRequests.Get.Parameters.Query;

export type CertificateRequestListQueryModelData = Omit<
  CertificateRequestListQueryData,
  "projectId" | "ingressId"
> & {
  project?: Project | string;
  ingress?: Ingress | string;
};

export type CertificateRequestListItemData =
  MittwaldAPIV2.Operations.SslListCertificateRequests.ResponseData[number];

export type CheckReplaceChanges =
  MittwaldAPIV2.Components.Schemas.SslCheckReplaceChanges;

export type CertificateError =
  MittwaldAPIV2.Components.Schemas.SslCertificateError;

export type CertificateRequestCertificateData =
  MittwaldAPIV2.Components.Schemas.SslCertificateData;

export interface CreateCertificateRequestSuccessResponse {
  id: string;
}
