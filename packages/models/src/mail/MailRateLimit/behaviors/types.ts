import type { QueryResponseData } from "../../../base";
import type {
  MailRateLimitListItemData,
  MailRateLimitQueryData,
  MailRateLimitData,
} from "../types";

export interface MailRateLimitBehaviors {
  query: (
    query?: MailRateLimitQueryData,
  ) => Promise<QueryResponseData<MailRateLimitListItemData>>;
  find: (rateLimitId: string) => Promise<MailRateLimitData | undefined>;
}
