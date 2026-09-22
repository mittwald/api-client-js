import type { SystemSoftwareData } from "../../SystemSoftware";
import type { QueryResponseData } from "../../../base";
import type {
  AppInstallationStagingCreateRequestData,
  AppInstallationStagingDetachRequestData,
  AppInstallationCreateRequestData,
  AppInstallationUpdateRequestData,
  AppInstallationCopyRequestData,
  AppInstallationListQueryData,
  InstalledSystemSoftwareQuery,
  AppInstallationListItemData,
  AppInstallationData,
} from "../types";

export interface AppInstallationBehaviors {
  getInstalledSystemSoftware: (
    appInstallationId: string,
    query?: InstalledSystemSoftwareQuery,
  ) => Promise<SystemSoftwareData[]>;

  list: (
    projectId: string,
    query?: AppInstallationListQueryData,
  ) => Promise<QueryResponseData<AppInstallationListItemData>>;

  createStaging: (
    appInstallationId: string,
    data: AppInstallationStagingCreateRequestData,
  ) => Promise<{ id: string }>;

  listForUser: (
    query?: AppInstallationListQueryData,
  ) => Promise<QueryResponseData<AppInstallationListItemData>>;

  detachStaging: (
    appInstallationId: string,
    data: AppInstallationStagingDetachRequestData,
  ) => Promise<void>;

  create: (
    projectId: string,
    data: AppInstallationCreateRequestData,
  ) => Promise<{ id: string }>;

  update: (
    appInstallationId: string,
    data: AppInstallationUpdateRequestData,
  ) => Promise<void>;

  copy: (
    appInstallationId: string,
    data: AppInstallationCopyRequestData,
  ) => Promise<void>;

  unlinkDatabase: (
    appInstallationId: string,
    databaseId: string,
  ) => Promise<void>;

  find: (appInstallationId: string) => Promise<AppInstallationData | undefined>;

  goLive: (appInstallationId: string) => Promise<void>;

  delete: (appInstallationId: string) => Promise<void>;
}
