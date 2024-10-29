import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type CertificateRequestData =
  MittwaldAPIV2.Operations.SslGetCertificateRequest.ResponseData;

export type CertificateRequestListQueryData =
  MittwaldAPIV2.Paths.V2CertificateRequests.Get.Parameters.Query;

export type CertificateRequestListQueryModelData = Omit<
  CertificateRequestListQueryData,
  "projectId"
> & {
  project?: Project;
};

export type CertificateRequestListItemData =
  MittwaldAPIV2.Operations.SslListCertificateRequests.ResponseData[number];
