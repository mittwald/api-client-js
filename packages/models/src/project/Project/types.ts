import { MittwaldAPIV2 } from "@mittwald/api-client";
import { Simplify } from "type-fest";

export type ProjectListQuery =
  MittwaldAPIV2.Paths.V2Projects.Get.Parameters.Query;

export type ProjectData =
  Simplify<MittwaldAPIV2.Operations.ProjectGetProject.ResponseData>;

export type ProjectCompactData = Simplify<
  MittwaldAPIV2.Operations.ProjectListProjects.ResponseData[number]
>;
