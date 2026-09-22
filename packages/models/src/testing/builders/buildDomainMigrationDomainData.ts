import type { DomainMigrationDomainData } from "../../domain/DomainMigrationDomain/types.js";

import { buildDomainMigrationDnsRecordData } from "./buildDomainMigrationDnsRecordData.js";

export function buildDomainMigrationDomainData(
  overrides?: Partial<DomainMigrationDomainData>,
): DomainMigrationDomainData {
  return {
    coabData: {
      dnsRecords: [buildDomainMigrationDnsRecordData()],
    },
    domain: "example.com",
    domainId: "domain-1",
    state: "pending",
    ...overrides,
  };
}
