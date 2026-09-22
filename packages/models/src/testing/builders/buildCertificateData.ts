import type { CertificateData } from "../../certificate/Certificate/types";

export function buildCertificateData(
  overrides?: Partial<CertificateData>,
): CertificateData {
  return {
    dnsNames: ["example.com", "www.example.com"],
    certificateRequestId: "certreq-id",
    commonName: "example.com",
    projectId: "project-id",
    certificateType: 2,
    isExpired: false,
    id: "cert-id",
    ...overrides,
  };
}
