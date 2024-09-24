import {
  ServerListItemData,
  ServerData,
  ServerListQueryData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ServerBehaviors {
  find: (id: string) => Promise<ServerData | undefined>;
  list: (
    query?: ServerListQueryData,
  ) => Promise<QueryResponseData<ServerListItemData>>;
}
