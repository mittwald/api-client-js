import {
  ProjectListItemData,
  ProjectData,
  ProjectListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ProjectBehaviors {
  find: (id: string) => Promise<ProjectData | undefined>;
  list: (
    query?: ProjectListQueryData,
  ) => Promise<QueryResponseData<ProjectListItemData>>;

  create: (serverId: string, description: string) => Promise<{ id: string }>;

  leave: (projectId: string) => Promise<void>;
  delete: (projectId: string) => Promise<void>;
  updateDescription: (projectId: string, description: string) => Promise<void>;
}
