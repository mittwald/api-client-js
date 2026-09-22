import type { QueryResponseData } from "../../../base";
import type {
  ApiTokenCreateRequestData,
  ApiTokenUpdateRequestData,
  ApiTokenListItemData,
  ApiTokenData,
} from "../types";

export interface ApiTokenBehaviors {
  update: (
    apiTokenId: string,
    data: ApiTokenUpdateRequestData,
  ) => Promise<void>;

  find: (apiTokenId: string) => Promise<ApiTokenData | undefined>;

  list: () => Promise<QueryResponseData<ApiTokenListItemData>>;

  create: (data: ApiTokenCreateRequestData) => Promise<string>;

  delete: (apiTokenId: string) => Promise<void>;
}
