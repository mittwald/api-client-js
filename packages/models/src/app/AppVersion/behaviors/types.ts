import type {
  AppVersionListQueryData,
  AppVersionListItemData,
  AppVersionData,
} from "../types";

export interface AppVersionBehaviors {
  list: (
    appId: string,
    query?: AppVersionListQueryData,
  ) => Promise<{ items: AppVersionListItemData[]; totalCount: number }>;

  listUpdateCandidates: (
    appId: string,
    baseAppVersionId: string,
  ) => Promise<AppVersionListItemData[]>;

  find: (
    appVersionId: string,
    appId: string,
  ) => Promise<AppVersionData | undefined>;
}
