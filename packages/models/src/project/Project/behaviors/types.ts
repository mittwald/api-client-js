import {
  ProjectListItemData,
  ProjectData,
  ProjectListQuery,
} from "../types.js";

export interface ProjectBehaviors {
  find: (id: string) => Promise<ProjectData | undefined>;
  list: (query?: ProjectListQuery) => Promise<ProjectListItemData[]>;

  create: (serverId: string, description: string) => Promise<{ id: string }>;

  leave: (projectId: string) => Promise<void>;
  delete: (projectId: string) => Promise<void>;
  updateDescription: (projectId: string, description: string) => Promise<void>;
}
