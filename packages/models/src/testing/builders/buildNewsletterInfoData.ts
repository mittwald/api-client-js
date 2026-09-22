import type { NewsletterInfoData } from "../../newsletter/Newsletter/types";

export function buildNewsletterInfoData(
  overrides?: Partial<NewsletterInfoData>,
): NewsletterInfoData {
  return {
    email: "user@example.com",
    registered: false,
    active: false,
    ...overrides,
  };
}
