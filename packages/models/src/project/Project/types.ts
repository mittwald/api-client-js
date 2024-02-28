import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ProjectListQuery =
  MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Query;

export type ProjectData =
  MittwaldAPIV2.Operations.ProjectGetProject.ResponseData;

export type ProjectListItemData =
  MittwaldAPIV2.Operations.ProjectListProjects.ResponseData[number];
