import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";

import type {
  AIBillingPeriodsData,
  AITokenUsageRange,
  AITokenUsageData,
} from "./types.js";

import { ReferenceModel } from "../../base/index.js";
import { config } from "../../config/index.js";

/**
 * Token statistics of a single AI-hosting plan. The billing periods and the
 * usage numbers come from two separate endpoints: the periods tell you which
 * timeframes exist, the usage route only answers for a timeframe you pass in.
 */
@GhostMakerModel({
  name: "AITokenStatistics",
})
export class AITokenStatistics extends ReferenceModel {
  public readonly customerId: string;

  public constructor(planId: string, customerId: string) {
    super(planId);
    this.customerId = customerId;
  }

  public static ofPlan(customerId: string, planId: string) {
    return new AITokenStatistics(planId, customerId);
  }

  public async getBillingPeriods(
    options?: AxiosRequestConfig,
  ): Promise<AIBillingPeriodsData> {
    return config.behaviors.aiTokenStatistics.getBillingPeriods(
      this.customerId,
      this.id,
      options,
    );
  }

  public async getUsage(
    range: AITokenUsageRange,
    options?: AxiosRequestConfig,
  ): Promise<AITokenUsageData> {
    return config.behaviors.aiTokenStatistics.getUsage(
      this.customerId,
      this.id,
      range,
      options,
    );
  }
}
