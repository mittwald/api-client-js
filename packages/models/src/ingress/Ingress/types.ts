import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { AppInstallation } from "../../app/AppInstallation/AppInstallation.js";
import type { Certificate } from "../../certificate/Certificate/Certificate.js";
import type { Container } from "../../container/Container/Container.js";
import type { IngressTargetData } from "../IngressTarget/index.js";
import type { Project } from "../../project/index.js";

export type IngressListQueryData =
  MittwaldAPIV2.Paths.V2Ingresses.Get.Parameters.Query;

export type IngressListQueryModelData = {
  appInstallation?: AppInstallation | string;
  certificate?: Certificate | string;
  container?: Container | string;
  project?: Project | string;
} & Omit<
  IngressListQueryData,
  "appInstallationId" | "certificateId" | "containerId" | "projectId"
>;

export type IngressData =
  MittwaldAPIV2.Operations.IngressGetIngress.ResponseData;

export type IngressListItemData =
  MittwaldAPIV2.Operations.IngressListIngresses.ResponseData[number];

export type CertificateSettings =
  | { certificateId: string; type: "certificate"; }
  | { acme: boolean; type: "acme"; };

export interface IngressPathSettings {
  target: IngressTargetData;
  path: string;
}

export type DnsValidationError =
  MittwaldAPIV2.Components.Schemas.IngressIngress["dnsValidationErrors"][number];
