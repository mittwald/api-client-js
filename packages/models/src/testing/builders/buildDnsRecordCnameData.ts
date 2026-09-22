import type { DnsRecordCnameData } from "../../dns/DnsRecordCname/types";

type DnsRecordCnameComponentData = Extract<
  DnsRecordCnameData,
  { fqdn: unknown }
>;

export function buildDnsRecordCnameComponentData(
  overrides?: Partial<DnsRecordCnameComponentData>,
): DnsRecordCnameComponentData {
  return {
    settings: { ttl: { seconds: 300 } },
    fqdn: "target.example.com",
    ...overrides,
  };
}
