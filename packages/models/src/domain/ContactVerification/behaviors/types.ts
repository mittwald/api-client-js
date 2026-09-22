import type { QueryResponseData } from "../../../base/index.js";
import type {
  ContactVerificationListQueryData,
  ContactVerificationListItemData,
  ContactVerificationData,
} from "../types.js";

export interface ContactVerificationBehaviors {
  query: (
    query?: ContactVerificationListQueryData,
  ) => Promise<QueryResponseData<ContactVerificationListItemData>>;
  find: (
    contactVerificationId: string,
  ) => Promise<ContactVerificationData | undefined>;
  resendVerificationEmail: (contactVerificationId: string) => Promise<void>;
}
