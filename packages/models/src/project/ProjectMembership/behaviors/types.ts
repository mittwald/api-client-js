import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base";
import type {
  ProjectMembershipUpdateRequestData,
  ProjectMembershipListQueryData,
  ProjectMembershipListItemData,
  ProjectMembershipData,
} from "../types";

export interface ProjectMembershipBehaviors {
  list: (
    projectId: string,
    query?: ProjectMembershipListQueryData,
  ) => Promise<QueryResponseData<ProjectMembershipListItemData>>;

  find: (
    projectMembershipId: string,
    options?: AxiosRequestConfig,
  ) => Promise<ProjectMembershipData | undefined>;

  update: (
    projectMembershipId: string,
    data: ProjectMembershipUpdateRequestData,
  ) => Promise<void>;

  findOwn: (projectId: string) => Promise<ProjectMembershipData | undefined>;

  remove: (projectMembershipId: string) => Promise<void>;
}
