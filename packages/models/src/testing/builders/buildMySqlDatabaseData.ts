import type { MySqlData } from "../../database/MySql/types";

export function buildMySqlDatabaseData(
  overrides?: Partial<MySqlData>,
): MySqlData {
  return {
    characterSettings: {
      collation: "utf8mb4_general_ci",
      characterSet: "utf8mb4",
    },
    storageUsageInBytesSetAt: "2024-01-01T00:00:00.000Z",
    statusSetAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    externalHostname: "ext.example.com",
    description: "test database",
    hostname: "int.example.com",
    storageUsageInBytes: 1024,
    projectId: "project-id",
    name: "db_user_abc123",
    isShared: false,
    status: "ready",
    finalizers: [],
    id: "mysql-id",
    version: "8.0",
    isReady: true,
    ...overrides,
  };
}
