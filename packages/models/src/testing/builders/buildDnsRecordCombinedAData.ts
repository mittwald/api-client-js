import type {
  DnsRecordCombinedAManagedData,
  DnsRecordCombinedACustomData,
  DnsRecordCombinedAUnsetData,
} from "../../dns/DnsRecordCombinedA/types.js";

export function buildDnsRecordCombinedACustomData(
  overrides?: Partial<DnsRecordCombinedACustomData>,
): DnsRecordCombinedACustomData {
  return {
    settings: { ttl: { seconds: 600 } },
    aaaa: ["2001:db8::1"],
    a: ["1.2.3.4"],
    ...overrides,
  };
}

export function buildDnsRecordCombinedAManagedData(
  overrides?: Partial<DnsRecordCombinedAManagedData>,
): DnsRecordCombinedAManagedData {
  return {
    managedBy: { ingressId: "ingress-1" },
    ...overrides,
  };
}

export function buildDnsRecordCombinedAUnsetData(): DnsRecordCombinedAUnsetData {
  return {};
}
