import type { RedisData } from "../../database/Redis/types.js";

export function buildRedisDatabaseData(
  overrides?: Partial<RedisData>,
): RedisData {
  return {
    configuration: {
      maxMemoryPolicy: "noeviction",
      additionalFlags: [],
      maxMemory: "512Mi",
      persistent: true,
    },
    storageUsageInBytesSetAt: "2024-01-01T00:00:00.000Z",
    statusSetAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    hostname: "redis.example.com",
    description: "test redis",
    storageUsageInBytes: 2048,
    projectId: "project-id",
    name: "redis_abc123",
    status: "ready",
    finalizers: [],
    id: "redis-id",
    version: "7.0",
    port: 6379,
    ...overrides,
  };
}
