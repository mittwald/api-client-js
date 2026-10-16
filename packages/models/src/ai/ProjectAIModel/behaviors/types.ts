import type {
  ProjectAIModelListQueryData,
  ProjectAIModelListItemData,
} from "../types.js";

export interface ProjectAIModelBehaviors {
  list: (
    projectId: string,
    query?: ProjectAIModelListQueryData,
  ) => Promise<{ items: ProjectAIModelListItemData[]; totalCount: number }>;
}
