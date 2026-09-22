import type { QueryResponseData } from "../../../base";
import type {
  ContactVerificationListQueryData,
  ContactVerificationListItemData,
  ContactVerificationData,
} from "../types";

export interface ContactVerificationBehaviors {
  query: (
    query?: ContactVerificationListQueryData,
  ) => Promise<QueryResponseData<ContactVerificationListItemData>>;
  find: (
    contactVerificationId: string,
  ) => Promise<ContactVerificationData | undefined>;
  resendVerificationEmail: (contactVerificationId: string) => Promise<void>;
}
