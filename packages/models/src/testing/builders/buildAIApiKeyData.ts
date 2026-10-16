import type { AIApiKeyData } from "../../ai/types.js";

export function buildAIApiKeyData(
  overrides?: Partial<AIApiKeyData>,
): AIApiKeyData {
  return {
    rateLimit: { allowedRequestsPerUnit: 300, unit: "minute" },
    tokenUsage: { planLimit: 2_000_000, used: 500_000 },
    profileId: "customer-id",
    projectId: "project-id",
    key: "secret-key",
    planId: "plan-id",
    isBlocked: false,
    keyId: "key-id",
    name: "my key",
    models: [],
    ...overrides,
  };
}
