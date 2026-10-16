import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base/index.js";
import type {
  ProjectAIPlanListQueryData,
  ProjectAIPlanListItemData,
  ProjectAIPlanData,
} from "../types.js";

export interface ProjectAIPlanBehavior {
  list: (
    projectId: string,
    query?: ProjectAIPlanListQueryData,
    options?: AxiosRequestConfig,
  ) => Promise<QueryResponseData<ProjectAIPlanListItemData>>;
  find: (
    projectId: string,
    planId: string,
    options?: AxiosRequestConfig,
  ) => Promise<ProjectAIPlanData | undefined>;
}
