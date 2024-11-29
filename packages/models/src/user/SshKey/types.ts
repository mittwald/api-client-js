import { MittwaldAPIV2 } from "@mittwald/api-client";

export type SshKeyData =
  MittwaldAPIV2.Operations.UserGetSshKey.ResponseData["sshKey"];

export type SshKeyListItemData = NonNullable<
  MittwaldAPIV2.Operations.UserListSshKeys.ResponseData["sshKeys"]
>[number];

export type SshKeyCreateData =
  MittwaldAPIV2.Paths.V2UsersSelfSshKeys.Post.Parameters.RequestBody;

export type SshKeyUpdateData =
  MittwaldAPIV2.Paths.V2UsersSelfSshKeysSshKeyId.Put.Parameters.RequestBody;
