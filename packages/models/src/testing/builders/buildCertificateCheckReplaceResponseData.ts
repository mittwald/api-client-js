import type { CertificateCheckReplaceResponseData } from "../../certificate/CertificateCheckReplaceResponse/types";

export function buildCertificateCheckReplaceResponseData(
  overrides?: Partial<CertificateCheckReplaceResponseData>,
): CertificateCheckReplaceResponseData {
  return {
    isReplaceable: true,
    ...overrides,
  };
}
