import type { MySqlCharsetListItemData } from "../../database/MySql/types";

export function buildMySqlCharsetListItemData(
  overrides?: Partial<MySqlCharsetListItemData>,
): MySqlCharsetListItemData {
  return {
    collations: ["utf8mb4_general_ci"],
    versionId: "v-id",
    name: "utf8mb4",
    ...overrides,
  };
}
