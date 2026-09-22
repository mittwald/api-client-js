import type { DnsRecordSettingsData } from "../../dns/DnsRecordSettings/types";

export function buildDnsRecordSettingsData(
  overrides: Partial<DnsRecordSettingsData> = {},
): DnsRecordSettingsData {
  return { ttl: { seconds: 3600 }, ...overrides };
}
