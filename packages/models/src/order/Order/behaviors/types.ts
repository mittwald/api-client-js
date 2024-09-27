import { OrderData, OrderListQueryData, OrderListItemData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface OrderBehaviors {
  find: (orderId: string) => Promise<OrderData | undefined>;
  list: (
    query: OrderListQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
  listByCustomer: (
    customerId: string,
    query?: OrderListQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
}
