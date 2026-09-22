import type { ActivityListQueryData, ActivityListItemData } from "../types";
import type { QueryResponseData } from "../../../base";

export interface ActivityBehaviors {
  list: (
    projectId: string,
    query?: ActivityListQueryData,
  ) => Promise<QueryResponseData<ActivityListItemData>>;
}
