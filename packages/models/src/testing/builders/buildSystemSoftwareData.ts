import type {
  SystemSoftwareListItemData,
  SystemSoftwareData,
} from "../../app/SystemSoftware/types.js";

export function buildSystemSoftwareData(
  overrides: Partial<SystemSoftwareData> = {},
): SystemSoftwareData {
  return {
    id: "systemsoftware-id",
    tags: ["php"],
    name: "php",
    ...overrides,
  };
}

export function buildSystemSoftwareListItemData(
  overrides: Partial<SystemSoftwareListItemData> = {},
): SystemSoftwareListItemData {
  return {
    id: "systemsoftware-id",
    tags: ["php"],
    name: "php",
    ...overrides,
  };
}
