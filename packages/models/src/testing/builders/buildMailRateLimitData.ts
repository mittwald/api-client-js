import type { MailRateLimitData } from "../../mail/MailRateLimit/types.js";

export function buildMailRateLimitData(
  overrides?: Partial<MailRateLimitData>,
): MailRateLimitData {
  return { id: "ratelimit-id", rateLimit: 1000, ...overrides };
}
