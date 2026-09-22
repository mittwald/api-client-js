import type { ActivityListQueryData, ActivityListItemData } from "../types.js";
import type { QueryResponseData } from "../../../base/index.js";

export interface ActivityBehaviors {
  list: (
    projectId: string,
    query?: ActivityListQueryData,
  ) => Promise<QueryResponseData<ActivityListItemData>>;
}
