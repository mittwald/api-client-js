import type {
  SystemSoftwareVersionListItemData,
  SystemSoftwareVersionData,
} from "../../app/SystemSoftwareVersion/types";

export function buildSystemSoftwareVersionData(
  overrides: Partial<SystemSoftwareVersionData> = {},
): SystemSoftwareVersionData {
  return {
    id: "systemsoftwareversion-id",
    internalVersion: "8.3.0",
    externalVersion: "8.3",
    ...overrides,
  };
}

export function buildSystemSoftwareVersionListItemData(
  overrides: Partial<SystemSoftwareVersionListItemData> = {},
): SystemSoftwareVersionListItemData {
  return {
    id: "systemsoftwareversion-id",
    internalVersion: "8.3.0",
    externalVersion: "8.3",
    ...overrides,
  };
}
