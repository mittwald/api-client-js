import type {
  OrderCreateRequestData,
  OrderData,
  OrderListByCustomerQueryData,
  OrderListItemData,
} from "../types.js";
import { type OrderListQueryData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";

export interface OrderBehaviors {
  find: (id: string) => Promise<OrderData | undefined>;
  list: (
    query?: OrderListQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
  listByCustomer: (
    query: OrderListByCustomerQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
  createOrder: (requestData: OrderCreateRequestData) => Promise<{ id: string }>;
}
