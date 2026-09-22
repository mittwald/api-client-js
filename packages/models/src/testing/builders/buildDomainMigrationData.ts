import type { DomainMigrationListItemData } from "../../domain/DomainMigration/types";

import { buildDomainMigrationDomainData } from "./buildDomainMigrationDomainData";

export function buildDomainMigrationData(
  overrides?: Partial<DomainMigrationListItemData>,
): DomainMigrationListItemData {
  return {
    domains: [buildDomainMigrationDomainData()],
    pAccount: "p-account-1",
    projectId: "project-1",
    id: "migration-1",
    ...overrides,
  };
}
