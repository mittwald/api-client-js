import type { TlsCertificateData } from "../../certificate/Tls/types.js";

export function buildTlsCertificateData(
  overrides?: Partial<TlsCertificateData>,
): TlsCertificateData {
  return {
    certificateId: "certificate-id",
    ...overrides,
  };
}
