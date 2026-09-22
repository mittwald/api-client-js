import type { SupportCodeData } from "../../user/SupportCode/types";

export function buildSupportCodeData(
  overrides: Partial<SupportCodeData> = {},
): SupportCodeData {
  return {
    expiresAt: "2024-01-01T00:00:00.000Z",
    supportCode: "SUP-123",
    ...overrides,
  };
}
