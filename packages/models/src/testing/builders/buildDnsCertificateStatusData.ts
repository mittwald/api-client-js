import type { DnsCertificateStatusData } from "../../certificate/DnsCertificateStatus/types.js";

export function buildDnsCertificateStatusData(
  overrides?: Partial<DnsCertificateStatusData>,
): DnsCertificateStatusData {
  return {
    updatedAt: "2024-05-01T12:00:00.000Z",
    message: "all good",
    status: "ready",
    ...overrides,
  };
}
