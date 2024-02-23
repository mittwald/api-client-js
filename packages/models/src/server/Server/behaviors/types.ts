import { ServerListItemData, ServerData, ServerListQuery } from "../types.js";

export interface ServerBehaviors {
  find: (id: string) => Promise<ServerData | undefined>;
  list: (query?: ServerListQuery) => Promise<ServerListItemData[]>;
}
