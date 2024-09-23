import {
  AppInstallationListItemData,
  AppInstallationData,
  AppInstallationListQuery,
  AppInstallationCreateRequestData,
  AppInstallationUpdateRequestData,
  AppLinkDatabaseRequestData,
  AppAction,
  AppInstallationStatus,
  AppInstallationCopyRequestData,
  AppInstallationMissingDependencies,
} from "../types.js";

export interface AppInstallationBehaviors {
  find: (id: string) => Promise<AppInstallationData | undefined>;

  list: (
    projectId: string,
    query?: AppInstallationListQuery,
  ) => Promise<AppInstallationListItemData[]>;

  create: (
    projectId: string,
    data: AppInstallationCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (id: string, data: AppInstallationUpdateRequestData) => Promise<void>;

  delete: (id: string) => Promise<void>;

  linkDatabase: (id: string, data: AppLinkDatabaseRequestData) => Promise<void>;
  unlinkDatabase: (id: string, databaseId: string) => Promise<void>;

  executeAction: (id: string, action: AppAction) => Promise<void>;

  retrieveStatus: (id: string) => Promise<AppInstallationStatus>;

  copy: (id: string, data: AppInstallationCopyRequestData) => Promise<void>;

  getMissingDependencies: (
    id: string,
    targetAppVersionId: string,
  ) => Promise<AppInstallationMissingDependencies>;
}
