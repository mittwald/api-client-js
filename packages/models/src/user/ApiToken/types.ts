import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ApiTokenData =
  MittwaldAPIV2.Operations.UserGetApiToken.ResponseData;

export type ApiTokenListItemData =
  MittwaldAPIV2.Operations.UserListApiTokens.ResponseData[number];

export type ApiTokenCreateRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfApiTokens.Post.Parameters.RequestBody;

export type ApiTokenUpdateRequestData =
  MittwaldAPIV2.Paths.V2UsersSelfApiTokensApiTokenId.Put.Parameters.RequestBody;
