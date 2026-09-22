import type { DnsCertificateSpecData } from "../../certificate/DnsCertificateSpec/types";

export function buildDnsCertificateSpecData(
  overrides?: Partial<DnsCertificateSpecData>,
): DnsCertificateSpecData {
  return {
    cnameTarget: "cname.example.com",
    ...overrides,
  };
}
