import type { ProjectListItemData } from "../../project/Project/types";

export function buildProjectListItemData(
  overrides?: Partial<ProjectListItemData>,
): ProjectListItemData {
  return {
    backupStorageUsageInBytesSetAt: "2024-01-01T00:00:00.000Z",
    webStorageUsageInBytesSetAt: "2024-01-01T00:00:00.000Z",
    statusSetAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    customerMeta: { id: "customer-id" },
    backupStorageUsageInBytes: 0,
    description: "test project",
    customerId: "customer-id",
    serverGroupId: "group-id",
    webStorageUsageInBytes: 0,
    deletionRequested: false,
    serverId: "server-id",
    supportedFeatures: [],
    readiness: "ready",
    shortId: "abc123",
    id: "project-id",
    status: "ready",
    enabled: true,
    isReady: true,
    ...overrides,
  };
}
