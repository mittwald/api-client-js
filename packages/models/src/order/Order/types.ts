import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Customer } from "../../customer/index.js";

export type OrderData = MittwaldAPIV2.Operations.OrderGetOrder.ResponseData;

export type OrderListItemData =
  MittwaldAPIV2.Operations.OrderListOrders.ResponseData[number];

export type OrderListQueryData =
  MittwaldAPIV2.Paths.V2Orders.Get.Parameters.Query;

export type OrderListByCustomerQueryData = OrderListQueryData & {
  customerId: string;
};

export type OrderListModelQueryData = OrderListQueryData & {
  customer?: Customer | string;
};

export type OrderStatus = MittwaldAPIV2.Components.Schemas.OrderOrderStatus;

export type OrderCreateRequestData =
  MittwaldAPIV2.Operations.OrderCreateOrder.RequestData;
