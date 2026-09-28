import type { AppInstallationData } from "../../app/AppInstallation/types.js";

export function buildAppInstallationData(
  overrides?: Partial<AppInstallationData>,
): AppInstallationData {
  return {
    appVersion: { desired: "appversion-id" },
    createdAt: "2024-01-01T00:00:00.000Z",
    projectDescription: "my project",
    appExternalVersion: "6.4.0",
    updatePolicy: "patchLevel",
    id: "appinstallation-id",
    projectId: "project-id",
    description: "my site",
    updateAvailable: false,
    installationPath: "/",
    appName: "WordPress",
    linkedDatabases: [],
    systemSoftware: [],
    shortId: "abc123",
    appId: "app-id",
    disabled: false,
    phase: "ready",
    userInputs: [],
    ...overrides,
  };
}
