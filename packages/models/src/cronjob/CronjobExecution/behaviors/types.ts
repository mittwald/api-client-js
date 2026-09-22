import type { AxiosRequestConfig } from "axios";

import type { CronjobLogData } from "../../Cronjob/types";
import type { QueryResponseData } from "../../../base";
import type {
  CronjobExecutionListQueryData,
  CronjobExecutionAnalysisData,
  CronjobExecutionListItemData,
  CronjobExecutionData,
} from "../types";

export interface CronjobExecutionBehaviors {
  getExecutionAnalysis: (
    executionId: string,
    cronjobId: string,
    language?: "de" | "en",
    requestConfig?: AxiosRequestConfig,
  ) => Promise<CronjobExecutionAnalysisData | undefined>;

  list: (
    cronjobId: string,
    query?: CronjobExecutionListQueryData,
  ) => Promise<QueryResponseData<CronjobExecutionListItemData>>;

  find: (
    executionId: string,
    cronjobId: string,
  ) => Promise<CronjobExecutionData | undefined>;

  findLog: (
    projectId: string,
    logPath: string,
  ) => Promise<CronjobLogData | undefined>;
}
