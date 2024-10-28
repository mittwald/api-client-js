import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type CertificateData =
  MittwaldAPIV2.Operations.SslGetCertificate.ResponseData;

export type CertificateListQueryData =
  MittwaldAPIV2.Paths.V2Certificates.Get.Parameters.Query;

export type CertificateListQueryModelData = Omit<
  CertificateListQueryData,
  "projectID"
> & {
  project?: Project;
};

export type CertificateListItemData =
  MittwaldAPIV2.Operations.SslListCertificates.ResponseData[number];
