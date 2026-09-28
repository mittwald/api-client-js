import type { DomainMigrationDnsRecordData } from "../../domain/DomainMigrationDnsRecord/types.js";

export function buildDomainMigrationDnsRecordData(
  overrides?: Partial<DomainMigrationDnsRecordData>,
): DomainMigrationDnsRecordData {
  return {
    value: "1.2.3.4",
    type: "A",
    ttl: 3600,
    ...overrides,
  };
}
