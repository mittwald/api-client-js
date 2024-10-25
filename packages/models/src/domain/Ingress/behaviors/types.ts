import {
  IngressListItemData,
  IngressData,
  IngressListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export type CertificateSettings =
  | { type: "acme" }
  | { type: "certificate"; certificateId: string };

export type PathSettings = {
  path: string;
  target:
    | { directory: string }
    | { url: string }
    | { installationId: string }
    | { useDefaultPage: boolean }
    | { container: { id: string; portProtocol: string } };
};

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
}
