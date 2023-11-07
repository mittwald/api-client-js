import {
  AppInstallationCompactData,
  AppInstallationData,
  AppInstallationListQuery,
} from "../types.js";

export interface AppInstallationBehaviors {
  find: (id: string) => Promise<AppInstallationData | undefined>;
  list: (
    query?: AppInstallationListQuery,
  ) => Promise<AppInstallationCompactData[]>;
}
