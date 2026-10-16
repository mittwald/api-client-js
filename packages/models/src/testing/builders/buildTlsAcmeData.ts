import type { TlsAcmeData } from "../../certificate/Tls/types.js";

export function buildTlsAcmeData(
  overrides?: Partial<TlsAcmeData>,
): TlsAcmeData {
  return {
    requestDeadline: "2999-01-01T00:00:00.000Z",
    isCreated: false,
    acme: true,
    ...overrides,
  };
}
