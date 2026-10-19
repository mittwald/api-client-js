import type { DomainMigrationListItemData } from "../../domain/DomainMigration/types.js";

import { buildDomainMigrationDomainData } from "./buildDomainMigrationDomainData.js";

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
