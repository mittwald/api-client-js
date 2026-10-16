import type { DnsRecordTxtData } from "../../dns/DnsRecordTxt/types.js";

export function buildDnsRecordTxtComponentData(
  overrides: Partial<DnsRecordTxtData> = {},
): Extract<DnsRecordTxtData, { entries: unknown }> {
  return {
    settings: { ttl: { seconds: 3600 } },
    entries: ["v=spf1 ~all"],
    ...overrides,
  } as Extract<DnsRecordTxtData, { entries: unknown }>;
}
