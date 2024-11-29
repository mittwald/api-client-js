import {
  AppVersionData,
  AppVersionListItemData,
  AppVersionListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface AppVersionBehaviors {
  find: (id: string, appId: string) => Promise<AppVersionData | undefined>;

  list: (
    appId: string,
    query?: AppVersionListQueryData,
  ) => Promise<QueryResponseData<AppVersionListItemData>>;

  listUpdateCandidates: (
    appId: string,
    baseAppVersionId: string,
  ) => Promise<AppVersionListItemData[]>;
}
