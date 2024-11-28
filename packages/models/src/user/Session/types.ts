import { MittwaldAPIV2 } from "@mittwald/api-client";

export type SessionData = MittwaldAPIV2.Operations.UserGetSession.ResponseData;

export type SessionListItemData =
  MittwaldAPIV2.Operations.UserListSessions.ResponseData[number];

export type SessionTokenData =
  MittwaldAPIV2.Operations.UserCheckToken.ResponseData;
