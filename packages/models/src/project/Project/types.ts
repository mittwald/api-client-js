import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Customer } from "../../customer/index.js";
import type { Server } from "../../server/index.js";

export type ProjectListQueryData =
  MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Query;

export type ProjectListQueryModelData = {
  customer?: Customer | string;
  server?: Server | string;
} & Omit<
  ProjectListQueryData,
  "customerId" | "serverId"
>;

export type ProjectData =
  MittwaldAPIV2.Operations.ProjectGetProject.ResponseData;

export type ProjectListItemData =
  MittwaldAPIV2.Operations.ProjectListProjects.ResponseData[number];

export type ProjectFeature =
  MittwaldAPIV2.Components.Schemas.ProjectProjectFeature;

export type ProjectDisableReason =
  MittwaldAPIV2.Components.Schemas.ProjectDisableReason;

export type ProjectStatus =
  MittwaldAPIV2.Components.Schemas.ProjectProjectStatus;

export type FileSystemDirectoriesData =
  MittwaldAPIV2.Operations.ProjectFileSystemGetDirectories.ResponseData;

export type FileSystemDirectory =
  MittwaldAPIV2.Components.Schemas.ProjectFilesystemDirectoryListing;
