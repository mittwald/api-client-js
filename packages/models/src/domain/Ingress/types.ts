import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Project } from "../../project/index.js";

export type IngressListQueryData =
  MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Query;

export type IngressListQueryModelData = Omit<
  IngressListQueryData,
  "projectId"
> & {
  project?: Project | string;
};

export type IngressData =
  MittwaldAPIV2.Operations.IngressGetIngress.ResponseData;

export type IngressListItemData =
  MittwaldAPIV2.Operations.IngressListIngresses.ResponseData[number];

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
