import {
  ApiTokenCreateRequestBody,
  ApiTokenData,
  ApiTokenListItemData,
  ApiTokenUpdateRequestBody,
} from "../types.js";

export interface ApiTokenBehaviors {
  find: (id: string) => Promise<ApiTokenData | undefined>;

  list: () => Promise<ApiTokenListItemData[]>;

  create: (data: ApiTokenCreateRequestBody) => Promise<{ id: string }>;

  update: (id: string, data: ApiTokenUpdateRequestBody) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
