import type { PlanChangeData } from "../../contract/PlanChange/types.js";

import { buildContractArticleData } from "./buildContractArticleData.js";

export function buildPlanChangeData(
  overrides?: Partial<PlanChangeData>,
): PlanChangeData {
  return {
    scheduledAtDate: "2024-01-01T00:00:00.000Z",
    newArticles: [buildContractArticleData()],
    targetDate: "2024-06-01T00:00:00.000Z",
    ...overrides,
  };
}
