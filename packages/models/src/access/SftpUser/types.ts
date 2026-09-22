import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project";

export type SftpUserData =
  MittwaldAPIV2.Operations.SftpUserGetSftpUser.ResponseData;

export type SftpUserListItemData =
  MittwaldAPIV2.Operations.SftpUserListSftpUsers.ResponseData[number];

export type SftpUserListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Get.Parameters.Query;

export type SftpUserListQueryModelData = {
  project: Project | string;
} & SftpUserListQueryData;

export type SftpUserCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdSftpUsers.Post.Parameters.RequestBody;

export type SftpUserUpdateRequestData =
  MittwaldAPIV2.Paths.V2SftpUsersSftpUserId.Patch.Parameters.RequestBody;

export type SftpUserAccessLevel =
  MittwaldAPIV2.Components.Schemas.SshuserAccessLevel;
