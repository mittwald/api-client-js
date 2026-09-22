import type { AppData } from "../../app/App/types";

export function buildAppData(overrides?: Partial<AppData>): AppData {
  return {
    name: "WordPress",
    id: "app-id",
    tags: [],
    ...overrides,
  };
}
