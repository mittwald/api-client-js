import { AppData, AppListItemData, AppListQueryData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface AppBehaviors {
  find: (id: string) => Promise<AppData | undefined>;
  list: (
    query?: AppListQueryData,
  ) => Promise<QueryResponseData<AppListItemData>>;
}
