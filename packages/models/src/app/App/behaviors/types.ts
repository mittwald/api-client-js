import type { AppListQueryData, AppListItemData, AppData } from "../types.js";

export interface AppBehaviors {
  list: (
    query?: AppListQueryData,
  ) => Promise<{ items: AppListItemData[]; totalCount: number }>;
  find: (appId: string) => Promise<AppData | undefined>;
}
