import type { CertificateRequestData } from "../../certificate/CertificateRequest/types";

export function buildCertificateRequestData(
  overrides?: Partial<CertificateRequestData>,
): CertificateRequestData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    commonName: "example.com",
    dnsNames: ["example.com"],
    projectId: "project-id",
    certificateData: {},
    certificateType: 2,
    isCompleted: false,
    id: "certreq-id",
    ...overrides,
  };
}
