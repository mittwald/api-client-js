import { ServerCompactData, ServerData, ServerListQuery } from "../types.js";

export interface ServerBehaviors {
  find: (id: string) => Promise<ServerData | undefined>;
  list: (query?: ServerListQuery) => Promise<ServerCompactData[]>;
}
