import type { MailRateLimitData } from "../../mail/MailRateLimit/types";

export function buildMailRateLimitData(
  overrides?: Partial<MailRateLimitData>,
): MailRateLimitData {
  return { id: "ratelimit-id", rateLimit: 1000, ...overrides };
}
