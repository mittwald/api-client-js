import {
  IngressListItemData,
  IngressData,
  IngressListQueryData,
  PathSettings,
  CertificateSettings,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";
import { Ingress } from "../Ingress.js";

export interface IngressBehaviors {
  find: (id: string) => Promise<IngressData | undefined>;
  list: (
    query?: IngressListQueryData,
  ) => Promise<QueryResponseData<IngressListItemData>>;
  create: (
    projectId: string,
    hostname: string,
    paths: PathSettings[],
  ) => Promise<{ id: string }>;
  delete: (id: string) => Promise<void>;
  requestAcmeCertificate: (id: string) => Promise<void>;
  updateTls: (
    ingressId: string,
    certificate: CertificateSettings,
  ) => Promise<void>;
  updatePaths: (ingressId: string, paths: PathSettings[]) => Promise<void>;
  verifyOwnership: (ingressId: string) => Promise<void>;
  listCompatibleWithCertificate: (
    projectId: string,
    certificate: string,
  ) => Promise<Ingress[]>;
}
