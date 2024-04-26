import {
  SessionData,
  SessionListItemData,
  SessionTokenData,
} from "../types.js";

export interface SessionBehaviors {
  find: (id: string) => Promise<SessionData | undefined>;

  list: () => Promise<SessionListItemData[]>;

  getToken: () => Promise<SessionTokenData>;

  close: (id: string) => Promise<void>;

  closeAll: () => Promise<void>;
}
