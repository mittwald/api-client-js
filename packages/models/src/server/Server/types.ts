import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Customer } from "../../customer";

export type ServerListQueryData =
  MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Query;

export type ServerListQueryModelData = Omit<
  ServerListQueryData,
  "customerId"
> & {
  customer?: Customer | string;
};

export type ServerData = MittwaldAPIV2.Operations.ProjectGetServer.ResponseData;

export type ServerListItemData =
  MittwaldAPIV2.Operations.ProjectListServers.ResponseData[number];

export type ServerDisableReason =
  MittwaldAPIV2.Components.Schemas.ProjectServerDisableReason;

export type ServerStatus = MittwaldAPIV2.Components.Schemas.ProjectServerStatus;
