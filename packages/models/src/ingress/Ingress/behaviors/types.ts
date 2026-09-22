import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base/index.js";
import type { IngressListItem } from "../Ingress.js";
import type {
  IngressListQueryData,
  CertificateSettings,
  IngressListItemData,
  IngressPathSettings,
  IngressData,
} from "../types.js";

export interface IngressBehaviors {
  listCompatibleWithCertificate: (
    certificate:
      | { certificateContent: string; projectId: string; }
      | { certificateId: string },
  ) => Promise<IngressListItem[]>;
  list: (
    query?: IngressListQueryData,
    options?: AxiosRequestConfig,
  ) => Promise<QueryResponseData<IngressListItemData>>;
  create: (
    projectId: string,
    hostname: string,
    paths: IngressPathSettings[],
  ) => Promise<{ id: string }>;
  updateTls: (
    ingressId: string,
    certificate: CertificateSettings,
  ) => Promise<void>;
  updatePaths: (
    ingressId: string,
    paths: IngressPathSettings[],
  ) => Promise<void>;
  find: (ingressId: string) => Promise<IngressData | undefined>;
  verifyOwnership: (ingressId: string) => Promise<boolean>;
  requestAcmeCertificate: (id: string) => Promise<void>;
  delete: (ingressId: string) => Promise<void>;
}
