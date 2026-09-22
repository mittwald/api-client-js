import type { MySqlUserData } from "../../database/MySqlUser/types.js";

export function buildMySqlUserData(
  overrides?: Partial<MySqlUserData>,
): MySqlUserData {
  return {
    passwordUpdatedAt: "2024-01-01T00:00:00.000Z",
    statusSetAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    description: "test user",
    databaseId: "mysql-id",
    externalAccess: false,
    accessLevel: "full",
    id: "mysql-user-id",
    disabled: false,
    mainUser: false,
    name: "db_user",
    status: "ready",
    ...overrides,
  };
}
