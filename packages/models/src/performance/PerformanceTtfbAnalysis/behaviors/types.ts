import type { AxiosRequestConfig } from "axios";

import type {
  SchedulePerformanceTtfbAnalysisData,
  PerformanceTtfbAnalysisData,
} from "../types";

export interface PerformanceTtfbAnalysisBehaviors {
  find: (
    projectId: string,
    ttfbAnalysisId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<PerformanceTtfbAnalysisData | undefined>;
  trigger: (
    projectId: string,
    url: string,
  ) => Promise<SchedulePerformanceTtfbAnalysisData>;
}
