import type { TlsCertificateData } from "../../certificate/Tls/types";

export function buildTlsCertificateData(
  overrides?: Partial<TlsCertificateData>,
): TlsCertificateData {
  return {
    certificateId: "certificate-id",
    ...overrides,
  };
}
