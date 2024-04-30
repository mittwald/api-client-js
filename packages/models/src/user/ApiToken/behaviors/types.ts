import {
  ApiTokenCreateData,
  ApiTokenData,
  ApiTokenListItemData,
  ApiTokenUpdateData,
} from "../types.js";

export interface ApiTokenBehaviors {
  find: (id: string) => Promise<ApiTokenData | undefined>;

  list: () => Promise<ApiTokenListItemData[]>;

  create: (data: ApiTokenCreateData) => Promise<{ id: string }>;

  update: (id: string, data: ApiTokenUpdateData) => Promise<void>;

  delete: (id: string) => Promise<void>;
}
