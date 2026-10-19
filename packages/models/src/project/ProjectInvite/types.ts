import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ProjectInviteData =
  MittwaldAPIV2.Operations.ProjectGetProjectInvite.ResponseData;

export type ProjectInviteListItemData =
  MittwaldAPIV2.Operations.ProjectListProjectInvites.ResponseData[number];

export type ProjectInviteListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Get.Parameters.Query;

export type ProjectInviteCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdInvites.Post.Parameters.RequestBody;
