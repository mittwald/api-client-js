import {
  AppInstallationCopyRequestData,
  AppInstallationCreateRequestData,
  AppInstallationData,
  AppInstallationLinkDatabaseRequestData,
  AppInstallationListItemData,
  AppInstallationListQueryData,
  AppInstallationStatus,
  AppInstallationUpdateRequestData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";
import { AppInstallationMissingDependenciesData } from "../../AppInstallationMissingDependencies/index.js";

export interface AppInstallationBehaviors {
  find: (id: string) => Promise<AppInstallationData | undefined>;

  list: (
    projectId: string,
    query?: AppInstallationListQueryData,
  ) => Promise<QueryResponseData<AppInstallationListItemData>>;

  create: (
    projectId: string,
    data: AppInstallationCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (id: string, data: AppInstallationUpdateRequestData) => Promise<void>;

  delete: (id: string) => Promise<void>;

  linkDatabase: (
    id: string,
    data: AppInstallationLinkDatabaseRequestData,
  ) => Promise<void>;
  unlinkDatabase: (id: string, databaseId: string) => Promise<void>;

  retrieveStatus: (id: string) => Promise<AppInstallationStatus>;

  copy: (id: string, data: AppInstallationCopyRequestData) => Promise<void>;

  listMissingDependencies: (
    id: string,
    targetAppVersionId: string,
  ) => Promise<AppInstallationMissingDependenciesData>;
}
