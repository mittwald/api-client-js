import { MailAddressData, MailAddressListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface MailAddressBehaviors {
  find: (id: string) => Promise<MailAddressData | undefined>;
  query: (
    projectId: string,
  ) => Promise<QueryResponseData<MailAddressListItemData>>;
}
