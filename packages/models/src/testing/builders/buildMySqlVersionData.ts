import type { MySqlVersionData } from "../../database/MySql/types";

export function buildMySqlVersionData(
  overrides?: Partial<MySqlVersionData[number]>,
): MySqlVersionData[number] {
  return {
    disabled: false,
    number: "8.0",
    name: "8.0",
    id: "v-id",
    ...overrides,
  };
}
