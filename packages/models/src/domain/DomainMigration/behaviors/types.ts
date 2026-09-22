import type { DomainMigrationListItemData } from "../types.js";
import type { QueryResponseData } from "../../../base/index.js";

export interface DomainMigrationBehaviors {
  queryByProjectId: (
    projectId: string,
  ) => Promise<QueryResponseData<DomainMigrationListItemData>>;
}
