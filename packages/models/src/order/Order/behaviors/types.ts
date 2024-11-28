import type {
  OrderCreateRequestData,
  OrderData,
  OrderListByCustomerQueryData,
  OrderListItemData,
  OrderPreviewRequestData,
} from "../types.js";
import { type OrderListQueryData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";
import { OrderPreviewData } from "../../OrderPreview/index.js";

export interface OrderBehaviors {
  find: (id: string) => Promise<OrderData | undefined>;
  list: (
    query?: OrderListQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
  listByCustomer: (
    query: OrderListByCustomerQueryData,
  ) => Promise<QueryResponseData<OrderListItemData>>;
  create: (requestData: OrderCreateRequestData) => Promise<{ id: string }>;
  preview: (requestData: OrderPreviewRequestData) => Promise<OrderPreviewData>;
}
