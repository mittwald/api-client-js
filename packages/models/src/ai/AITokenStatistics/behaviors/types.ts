import type { AxiosRequestConfig } from "axios";

import type {
  AIBillingPeriodsData,
  AITokenUsageRange,
  AITokenUsageData,
} from "../types.js";

export interface AITokenStatisticsBehaviors {
  getUsage: (
    customerId: string,
    planId: string,
    range: AITokenUsageRange,
    options?: AxiosRequestConfig,
  ) => Promise<AITokenUsageData>;
  getBillingPeriods: (
    customerId: string,
    planId: string,
    options?: AxiosRequestConfig,
  ) => Promise<AIBillingPeriodsData>;
}
