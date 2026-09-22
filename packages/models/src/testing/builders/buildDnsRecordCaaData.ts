import type {
  DnsRecordCaaEntry,
  DnsRecordCaaData,
} from "../../dns/DnsRecordCaa/types";

type DnsRecordCaaComponentData = Extract<
  DnsRecordCaaData,
  { records: unknown }
>;

export function buildDnsRecordCaaComponentData(
  overrides?: Partial<DnsRecordCaaComponentData>,
): DnsRecordCaaComponentData {
  return {
    records: [
      {
        value: "letsencrypt.org",
        tag: "issue",
        flags: 0,
      },
    ],
    settings: { ttl: { seconds: 3600 } },
    ...overrides,
  };
}

export function buildDnsRecordCaaEntry(
  overrides?: Partial<DnsRecordCaaEntry>,
): DnsRecordCaaEntry {
  return {
    value: "letsencrypt.org",
    tag: "issue",
    flags: 0,
    ...overrides,
  };
}
