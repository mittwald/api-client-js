import { MittwaldAPIV2 } from "@mittwald/api-client";

export type OrderListQueryData =
  MittwaldAPIV2.Paths.V2Orders.Get.Parameters.Query;

export type OrderData = MittwaldAPIV2.Operations.OrderGetOrder.ResponseData;

export type OrderListItemData =
  MittwaldAPIV2.Operations.OrderListOrders.ResponseData[number];
