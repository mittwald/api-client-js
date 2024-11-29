import {
  ProjectMembershipData,
  ProjectMembershipListItemData,
  ProjectMembershipListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ProjectMembershipBehaviors {
  find: (id: string) => Promise<ProjectMembershipData | undefined>;

  list: (
    projectId: string,
    query?: ProjectMembershipListQueryData,
  ) => Promise<QueryResponseData<ProjectMembershipListItemData>>;
}
