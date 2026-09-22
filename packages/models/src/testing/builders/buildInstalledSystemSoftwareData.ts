import type { InstalledSystemSoftwareData } from "../../app/InstalledSystemSoftware/types.js";

export function buildInstalledSystemSoftwareData(
  overrides?: Partial<InstalledSystemSoftwareData>,
): InstalledSystemSoftwareData {
  return {
    systemSoftwareVersion: { current: "v1", desired: "v1" },
    systemSoftwareId: "sys-id",
    updatePolicy: "patchLevel",
    externalVersion: "8.2",
    updateAvailable: false,
    name: "php",
    ...overrides,
  };
}
