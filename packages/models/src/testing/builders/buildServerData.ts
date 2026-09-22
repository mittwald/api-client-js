import type { ServerListItemData } from "../../server/Server/types.js";

export function buildServerListItemData(
  overrides?: Partial<ServerListItemData>,
): ServerListItemData {
  return {
    machineType: {
      name: "test-machine",
      memory: "4Gi",
      cpu: "2",
    },
    createdAt: "2024-01-01T00:00:00.000Z",
    clusterName: "test-cluster",
    description: "test server",
    customerId: "customer-id",
    groupId: "group-id",
    readiness: "ready",
    shortId: "abc123",
    id: "server-id",
    status: "ready",
    storage: "20Gi",
    isReady: true,
    ...overrides,
  };
}
