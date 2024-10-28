import { CertificateData, CertificateListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface CertificateBehaviors {
  find: (certificateId: string) => Promise<CertificateData | undefined>;
  query: (
    projectId: string,
  ) => Promise<QueryResponseData<CertificateListItemData>>;
  replace: (
    certificateId: string,
    certificate: string,
    privateKey: string,
  ) => Promise<void>;
  delete: (certificateId: string) => Promise<void>;
}
