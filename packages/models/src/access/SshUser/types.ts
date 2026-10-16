import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { Project } from "../../project/index.js";

export type SshUserData =
  MittwaldAPIV2.Operations.SshUserGetSshUser.ResponseData;

export type SshUserListItemData =
  MittwaldAPIV2.Operations.SshUserListSshUsers.ResponseData[number];

export type SshUserListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Get.Parameters.Query;

export type SshUserListQueryModelData = {
  project: Project | string;
} & SshUserListQueryData;

export type SshUserCreateRequestData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdSshUsers.Post.Parameters.RequestBody;

export type SshUserUpdateRequestData =
  MittwaldAPIV2.Paths.V2SshUsersSshUserId.Patch.Parameters.RequestBody;

export type SshUserSshKey = MittwaldAPIV2.Components.Schemas.SshuserPublicKey;
