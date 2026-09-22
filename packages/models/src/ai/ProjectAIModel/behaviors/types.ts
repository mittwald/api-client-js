import type {
  ProjectAIModelListQueryData,
  ProjectAIModelListItemData,
} from "../types";

export interface ProjectAIModelBehaviors {
  list: (
    projectId: string,
    query?: ProjectAIModelListQueryData,
  ) => Promise<{ items: ProjectAIModelListItemData[]; totalCount: number }>;
}
