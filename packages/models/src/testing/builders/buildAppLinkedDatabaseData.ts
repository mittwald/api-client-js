import type { AppLinkedDatabaseData } from "../../app/AppLinkedDatabase/types";

export function buildAppLinkedDatabaseData(
  overrides?: Partial<AppLinkedDatabaseData>,
): AppLinkedDatabaseData {
  return {
    databaseId: "db-id",
    purpose: "primary",
    kind: "mysql",
    ...overrides,
  };
}
