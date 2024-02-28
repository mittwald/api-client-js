import {
  AppInstallationListItemData,
  AppInstallationData,
  AppInstallationListQuery,
} from "../types.js";

export interface AppInstallationBehaviors {
  find: (id: string) => Promise<AppInstallationData | undefined>;
  list: (
    projectId: string,
    query?: AppInstallationListQuery,
  ) => Promise<AppInstallationListItemData[]>;
}
