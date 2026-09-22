import type { CustomerAIPlanData } from "../../ai/CustomerAIPlan/types";

export function buildCustomerAIPlanData(
  overrides?: Partial<CustomerAIPlanData>,
): CustomerAIPlanData {
  return {
    topUsages: [
      {
        projectId: "project-id",
        tokenUsed: 300_000,
        keyId: "key-a",
        name: "key-a",
      },
    ],
    tokens: { available: 1_500_000, planLimit: 2_000_000, used: 500_000 },
    rateLimit: { allowedRequestsPerUnit: 300, unit: "minute" },
    keys: { planLimit: 10, available: 5, used: 5 },
    nextTokenReset: "2024-02-01T00:00:00.000Z",
    modelTermsApprovalRequired: false,
    customerId: "customer-id",
    description: "plan-name",
    planId: "plan-id",
    ...overrides,
  };
}
