import {
  AppInstallationData,
  AppInstallationListItemData,
  AppInstallationListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface AppInstallationBehaviors {
  find: (id: string) => Promise<AppInstallationData | undefined>;
  list: (
    projectId: string,
    query?: AppInstallationListQueryData,
  ) => Promise<QueryResponseData<AppInstallationListItemData>>;
}
