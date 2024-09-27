import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Customer } from "../../customer/index.js";

export type ServerListQueryData =
  MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Query;

export type ServerListQueryModelData = Omit<
  ServerListQueryData,
  "customerId"
> & {
  customer?: Customer;
};

export type ServerData = MittwaldAPIV2.Operations.ProjectGetServer.ResponseData;

export type ServerListItemData =
  MittwaldAPIV2.Operations.ProjectListServers.ResponseData[number];

export type OrderCreateRequestData =
  MittwaldAPIV2.Components.Schemas.OrderServerOrder;

export type OrderCreateResponseData =
  MittwaldAPIV2.Operations.OrderCreateOrder.ResponseData<201>;
