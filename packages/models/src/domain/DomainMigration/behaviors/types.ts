import type { DomainMigrationListItemData } from "../types";
import type { QueryResponseData } from "../../../base";

export interface DomainMigrationBehaviors {
  queryByProjectId: (
    projectId: string,
  ) => Promise<QueryResponseData<DomainMigrationListItemData>>;
}
