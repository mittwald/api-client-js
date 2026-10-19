import type { IngressPathData } from "../../ingress/IngressPath/types.js";

export function buildIngressPathData(
  overrides?: Partial<IngressPathData>,
): IngressPathData {
  return {
    target: { useDefaultPage: true },
    path: "/",
    ...overrides,
  };
}
