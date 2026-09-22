import type { ProjectData } from "../../project/Project/types";

export function buildProjectData(
  overrides?: Partial<ProjectData>,
): ProjectData {
  return {
    directories: {
      Logs: "/home/p-1/logs",
      Web: "/home/p-1/html",
      Home: "/home/p-1",
    },
    backupStorageUsageInBytesSetAt: "2024-01-01T00:00:00.000Z",
    webStorageUsageInBytesSetAt: "2024-01-01T00:00:00.000Z",
    statusSetAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    backupStorageUsageInBytes: 0,
    clusterDomain: "example.com",
    description: "test project",
    customerId: "customer-id",
    serverGroupId: "group-id",
    webStorageUsageInBytes: 0,
    clusterID: "cluster-1",
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
