import {
  SessionData,
  SessionListItemData,
  SessionTokenData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface SessionBehaviors {
  find: (id: string) => Promise<SessionData | undefined>;

  list: () => Promise<QueryResponseData<SessionListItemData>>;

  getToken: () => Promise<SessionTokenData>;

  close: (id: string) => Promise<void>;

  closeAll: () => Promise<void>;
}
