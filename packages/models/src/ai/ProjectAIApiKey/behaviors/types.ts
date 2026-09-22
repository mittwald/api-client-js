import type { AxiosRequestConfig } from "axios";

import type { QueryResponseData } from "../../../base";
import type { AIApiKeyData } from "../../types";
import type {
  ProjectAIApiKeyUpdateRequestData,
  ProjectAIApiKeyRequestData,
} from "../types";

export interface ProjectAIApiKeyLinkContainerData {
  containerId: string;
  ingressId: string;
  stackId: string;
}

export interface ProjectAIApiKeyBehaviors {
  update: (
    projectId: string,
    apiKeyId: string,
    data: Partial<ProjectAIApiKeyUpdateRequestData>,
  ) => Promise<void>;
  linkContainer: (
    projectId: string,
    apiKeyId: string,
    data: ProjectAIApiKeyLinkContainerData,
  ) => Promise<void>;
  create: (
    projectId: string,
    data: ProjectAIApiKeyRequestData,
  ) => Promise<{ id: string } | undefined>;
  list: (
    projectId: string,
    options?: AxiosRequestConfig,
  ) => Promise<QueryResponseData<AIApiKeyData>>;
  find: (
    projectId: string,
    licenceId: string,
  ) => Promise<AIApiKeyData | undefined>;
  delete: (projectId: string, apiKeyId: string) => Promise<void>;
}
