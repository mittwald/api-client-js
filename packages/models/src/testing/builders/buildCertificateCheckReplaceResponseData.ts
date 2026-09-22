import type { CertificateCheckReplaceResponseData } from "../../certificate/CertificateCheckReplaceResponse/types.js";

export function buildCertificateCheckReplaceResponseData(
  overrides?: Partial<CertificateCheckReplaceResponseData>,
): CertificateCheckReplaceResponseData {
  return {
    isReplaceable: true,
    ...overrides,
  };
}
