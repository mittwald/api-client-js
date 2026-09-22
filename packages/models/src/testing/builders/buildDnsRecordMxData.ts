import type {
  DnsRecordMxManagedData,
  DnsRecordMxCustomData,
  DnsRecordMxUnsetData,
  DnsRecordMxEntry,
} from "../../dns/DnsRecordMx/types";

export function buildDnsRecordMxCustomData(
  overrides?: Partial<DnsRecordMxCustomData>,
): DnsRecordMxCustomData {
  return {
    records: [{ fqdn: "mx.example.com", priority: 10 }],
    settings: { ttl: { seconds: 900 } },
    ...overrides,
  };
}

export function buildDnsRecordMxManagedData(
  overrides?: Partial<DnsRecordMxManagedData>,
): DnsRecordMxManagedData {
  return {
    managed: true,
    ...overrides,
  };
}

export function buildDnsRecordMxUnsetData(): DnsRecordMxUnsetData {
  return {};
}

export function buildDnsRecordMxEntry(
  overrides?: Partial<DnsRecordMxEntry>,
): DnsRecordMxEntry {
  return {
    fqdn: "mx.example.com",
    priority: 10,
    ...overrides,
  };
}
