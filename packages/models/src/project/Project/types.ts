import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Server } from "../../server/index.js";
import { Customer } from "../../customer/index.js";

export type ProjectListQueryData =
  MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Query;

export type ProjectListQueryModelData = Omit<
  ProjectListQueryData,
  "serverId" | "customerId"
> & {
  server?: Server;
  customer?: Customer;
};

export type ProjectData =
  MittwaldAPIV2.Operations.ProjectGetProject.ResponseData;

export type ProjectListItemData =
  MittwaldAPIV2.Operations.ProjectListProjects.ResponseData[number];
