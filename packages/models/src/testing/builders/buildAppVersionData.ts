import type { AppVersionData } from "../../app/AppVersion/types";

export function buildAppVersionData(
  overrides?: Partial<AppVersionData>,
): AppVersionData {
  return {
    systemSoftwareDependencies: [],
    docRootUserEditable: false,
    externalVersion: "6.4.0",
    internalVersion: "6.4.0",
    id: "appversion-id",
    recommended: true,
    appId: "app-id",
    docRoot: "/",
    ...overrides,
  };
}
