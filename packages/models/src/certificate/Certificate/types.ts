import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Ingress } from "../../ingress/Ingress/Ingress";
import type { Project } from "../../project";

export type CertificateData =
  MittwaldAPIV2.Operations.SslGetCertificate.ResponseData;

export type CertificateListQueryData =
  MittwaldAPIV2.Paths.V2Certificates.Get.Parameters.Query;

export type CertificateListQueryModelData = Omit<
  CertificateListQueryData,
  "projectId" | "ingressId"
> & {
  project?: Project | string;
  ingress?: Ingress | string;
};

export type CertificateListItemData =
  MittwaldAPIV2.Operations.SslListCertificates.ResponseData[number];

export type CertificateType =
  MittwaldAPIV2.Components.Schemas.SslCertificateType;

export enum CertificateTypes {
  DNS = 3,
  EXTERNAL = 2,
  INTERNAL = 1,
  UNSPECIFIED = 0,
}
