import type { CertificateCheckReplaceResponseData } from "../../CertificateCheckReplaceResponse/index.js";
import type { QueryResponseData } from "../../../base/index.js";
import type {
  CertificateListQueryData,
  CertificateListItemData,
  CertificateData,
} from "../types.js";

export interface CertificateBehaviors {
  checkReplace: (
    certificateId: string,
    certificate: string,
    privateKey: string,
    certificateAuthority?: string,
  ) => Promise<CertificateCheckReplaceResponseData>;
  replace: (
    certificateId: string,
    certificate: string,
    privateKey: string,
    certificateAuthority?: string,
  ) => Promise<void>;
  query: (
    query?: CertificateListQueryData,
  ) => Promise<QueryResponseData<CertificateListItemData>>;
  find: (certificateId: string) => Promise<CertificateData | undefined>;
  delete: (certificateId: string) => Promise<void>;
}
