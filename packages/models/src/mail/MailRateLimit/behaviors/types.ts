import type { QueryResponseData } from "../../../base/index.js";
import type {
  MailRateLimitListItemData,
  MailRateLimitQueryData,
  MailRateLimitData,
} from "../types.js";

export interface MailRateLimitBehaviors {
  query: (
    query?: MailRateLimitQueryData,
  ) => Promise<QueryResponseData<MailRateLimitListItemData>>;
  find: (rateLimitId: string) => Promise<MailRateLimitData | undefined>;
}
