import {
  ApiTokenCreateRequestData,
  ApiTokenData,
  ApiTokenListItemData,
  ApiTokenUpdateRequestData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ApiTokenBehaviors {
  find: (id: string) => Promise<ApiTokenData | undefined>;

  list: () => Promise<QueryResponseData<ApiTokenListItemData>>;

  create: (data: ApiTokenCreateRequestData) => Promise<{ id: string }>;

  update: (id: string, data: ApiTokenUpdateRequestData) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
