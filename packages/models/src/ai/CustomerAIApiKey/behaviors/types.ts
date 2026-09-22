import type { QueryResponseData } from "../../../base/index.js";
import type { AIApiKeyData } from "../../types.js";
import type {
  CustomerAIApiKeyUpdateRequestData,
  CustomerAIApiKeyListQueryData,
  CustomerAIApiKeyRequestData,
} from "../types.js";

export interface CustomerAIApiKeyBehaviors {
  update: (
    customerId: string,
    apiKeyId: string,
    data: Partial<CustomerAIApiKeyUpdateRequestData>,
  ) => Promise<void>;
  list: (
    customerId: string,
    query: CustomerAIApiKeyListQueryData,
  ) => Promise<QueryResponseData<AIApiKeyData>>;
  create: (
    customerId: string,
    data: CustomerAIApiKeyRequestData,
  ) => Promise<{ id: string } | undefined>;
  find: ( 
    customerId: string,
    licenceId: string,
  ) => Promise<AIApiKeyData | undefined>;
  delete: (customerId: string, apiKeyId: string) => Promise<void>;
}
