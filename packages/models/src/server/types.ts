import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ServerListQuery =
  MittwaldAPIV2.Paths.V2Servers.Get.Parameters.Query;

export type ServerData = MittwaldAPIV2.Operations.ProjectGetServer.ResponseData;

export type ServerCompactData =
  MittwaldAPIV2.Operations.ProjectListServers.ResponseData[number];
