import type { IngressData } from "../../ingress/Ingress/types.js";

// IngressData === IngressListItemData (both resolve to IngressIngress).
export function buildIngressData(
  overrides?: Partial<IngressData>,
): IngressData {
  return {
    paths: [{ target: { useDefaultPage: true }, path: "/" }],
    ownership: { txtRecord: "txt-verify", verified: true },
    ips: { v4: ["1.2.3.4"], v6: ["::1"] },
    tls: { isCreated: true, acme: true },
    hostname: "example.com",
    projectId: "project-id",
    dnsValidationErrors: [],
    id: "ingress-id",
    isDefault: false,
    isEnabled: true,
    ...overrides,
  };
}
