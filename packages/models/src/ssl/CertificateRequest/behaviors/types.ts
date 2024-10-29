import {
  CertificateRequestData,
  CertificateRequestListItemData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface CertificateRequestBehaviors {
  find: (
    certificateRequestId: string,
  ) => Promise<CertificateRequestData | undefined>;
  query: (
    projectId: string,
  ) => Promise<QueryResponseData<CertificateRequestListItemData>>;
  create: (
    projectId: string,
    certificate: string,
    privateKey: string,
  ) => Promise<{ id: string }>;
  delete: (certificateRequestId: string) => Promise<void>;
}
