import type { CertificateContactData } from "../../certificate/CertificateContact/types";

export function buildCertificateContactData(
  overrides?: Partial<CertificateContactData>,
): CertificateContactData {
  return {
    organizationalUnit: "Engineering",
    state: "North Rhine-Westphalia",
    company: "mittwald",
    city: "Espelkamp",
    country: "DE",
    ...overrides,
  };
}
