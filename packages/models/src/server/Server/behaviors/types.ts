import {
  ServerListItemData,
  ServerData,
  ServerListQueryData,
  OrderCreateRequestData,
  OrderCreateResponseData,
} from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface ServerBehaviors {
  createOrder: (
    orderRequest: OrderCreateRequestData,
  ) => Promise<OrderCreateResponseData>;
  find: (id: string) => Promise<ServerData | undefined>;
  list: (
    query?: ServerListQueryData,
  ) => Promise<QueryResponseData<ServerListItemData>>;
}
