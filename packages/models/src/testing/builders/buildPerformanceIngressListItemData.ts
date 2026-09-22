import type { IngressListItemData } from "../../ingress/Ingress/types";

export function buildPerformanceIngressListItemData(
  overrides?: Partial<IngressListItemData>,
): IngressListItemData {
  return {
    paths: [{ target: { useDefaultPage: true }, path: "/" }],
    tls: { isCreated: true, acme: true },
    ips: { v4: ["1.2.3.4"], v6: [] },
    ownership: { verified: true },
    dnsValidationErrors: [],
    hostname: "example.com",
    projectId: "project-1",
    id: "ingress-1",
    isDefault: true,
    isEnabled: true,
    ...overrides,
  };
}
