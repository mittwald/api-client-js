import {
  AppVersionData,
  AppVersionListItemData,
  AppVersionListQuery,
} from "../types.js";

export interface AppVersionBehaviors {
  find: (id: string, appId: string) => Promise<AppVersionData | undefined>;

  list: (
    appId: string,
    query?: AppVersionListQuery,
  ) => Promise<AppVersionListItemData[]>;

  listUpdateCandidates: (
    appId: string,
    baseAppVersionId: string,
  ) => Promise<AppVersionListItemData[]>;
}
