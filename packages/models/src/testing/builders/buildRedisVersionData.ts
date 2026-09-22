import type { RedisVersionData } from "../../database/Redis/types";

export function buildRedisVersionData(
  overrides?: Partial<RedisVersionData[number]>,
): RedisVersionData[number] {
  return {
    disabled: false,
    number: "7.0",
    name: "7.0",
    id: "v-id",
    ...overrides,
  };
}
