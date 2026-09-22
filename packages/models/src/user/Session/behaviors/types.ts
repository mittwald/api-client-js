import type { QueryResponseData } from "../../../base";
import type {
  SessionListItemData,
  SessionTokenData,
  SessionData,
} from "../types";

export interface SessionBehaviors {
  find: (tokenId: string) => Promise<SessionData | undefined>;

  list: () => Promise<QueryResponseData<SessionListItemData>>;

  getToken: () => Promise<SessionTokenData>;

  close: (tokenId: string) => Promise<void>;

  closeAll: () => Promise<void>;
}
