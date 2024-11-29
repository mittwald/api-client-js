import {
  CertificateRequestData,
  CertificateRequestListItemData,
  CertificateRequestListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface CertificateRequestBehaviors {
  find: (
    certificateRequestId: string,
  ) => Promise<CertificateRequestData | undefined>;
  query: (
    query?: CertificateRequestListQueryData,
  ) => Promise<QueryResponseData<CertificateRequestListItemData>>;
  create: (
    projectId: string,
    certificate: string,
    privateKey: string,
  ) => Promise<{ id: string }>;
  delete: (certificateRequestId: string) => Promise<void>;
}
