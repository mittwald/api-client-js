import {
  CertificateData,
  CertificateListItemData,
  CertificateListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";
import { CheckReplaceResponse } from "../../CertificateRequest/types.js";

export interface CertificateBehaviors {
  find: (certificateId: string) => Promise<CertificateData | undefined>;
  query: (
    query?: CertificateListQueryData,
  ) => Promise<QueryResponseData<CertificateListItemData>>;
  checkReplace: (
    certificateId: string,
    certificate: string,
    privateKey: string,
  ) => Promise<CheckReplaceResponse>;
  replace: (
    certificateId: string,
    certificate: string,
    privateKey: string,
  ) => Promise<void>;
  delete: (certificateId: string) => Promise<void>;
}
