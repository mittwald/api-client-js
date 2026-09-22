import type { DnsRecordSrvData } from "../../dns/DnsRecordSrv/types";

export function buildDnsRecordSrvComponentData(
  overrides: Partial<DnsRecordSrvData> = {},
): Extract<DnsRecordSrvData, { records: unknown }> {
  return {
    records: [
      { fqdn: "srv.example.com", priority: 10, port: 443, weight: 5 },
    ],
    settings: { ttl: { seconds: 3600 } },
    ...overrides,
  } as Extract<DnsRecordSrvData, { records: unknown }>;
}
