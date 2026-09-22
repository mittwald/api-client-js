import type { CronjobListItemData, CronjobData } from "../../cronjob/Cronjob/types";

export function buildCronjobData(
  overrides?: Partial<CronjobData>,
): CronjobData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    failedExecutionAlertThreshold: 1,
    description: "test cronjob",
    interval: "*/5 * * * *",
    projectId: "project-id",
    shortId: "abc123",
    id: "cronjob-id",
    appId: "app-id",
    timeout: 3600,
    active: true,
    ...overrides,
  };
}

export function buildCronjobListItemData(
  overrides?: Partial<CronjobListItemData>,
): CronjobListItemData {
  // CronjobListItemData and CronjobData share the same CronjobCronjob schema.
  return buildCronjobData(overrides as Partial<CronjobData>);
}
