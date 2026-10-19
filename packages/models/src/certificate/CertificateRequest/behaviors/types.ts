import type { QueryResponseData } from "../../../base/index.js";
import type {
  CreateCertificateRequestSuccessResponse,
  CertificateRequestListQueryData,
  CertificateRequestListItemData,
  CertificateRequestData,
} from "../types.js";

export interface CertificateRequestBehaviors {
  create: (
    projectId: string,
    certificate: string,
    privateKey: string,
    certificateAuthority?: string,
  ) => Promise<CreateCertificateRequestSuccessResponse>;
  createDnsCertificate: (
    commonName: string,
    projectId: string,
  ) => Promise<CreateCertificateRequestSuccessResponse>;
  query: (
    query?: CertificateRequestListQueryData,
  ) => Promise<QueryResponseData<CertificateRequestListItemData>>;
  find: (
    certificateRequestId: string,
  ) => Promise<CertificateRequestData | undefined>;
  delete: (certificateRequestId: string) => Promise<void>;
}
