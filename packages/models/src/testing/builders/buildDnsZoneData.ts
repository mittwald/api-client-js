import type { DnsZoneData } from "../../dns/DnsZone/types";

export function buildDnsZoneData(
  overrides: {
    recordSet?: Partial<DnsZoneData["recordSet"]>;
  } & Omit<Partial<DnsZoneData>, "recordSet"> = {},
): DnsZoneData {
  const recordSet: DnsZoneData["recordSet"] = {
    combinedARecords: {},
    cname: {},
    srv: {},
    txt: {},
    caa: {},
    mx: {},
    ...overrides.recordSet,
  };

  return {
    domain: "example.com",
    id: "zone-id",
    ...overrides,
    recordSet,
  };
}
