import { AppData, AppListItemData } from "../types.js";

export interface AppBehaviors {
  find: (id: string) => Promise<AppData | undefined>;

  list: () => Promise<AppListItemData[]>;
}
