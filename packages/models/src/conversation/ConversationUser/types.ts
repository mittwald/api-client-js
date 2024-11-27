import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ConversationUserData =
  MittwaldAPIV2.Components.Schemas.ConversationUser;

export type ConversationMemberData =
  MittwaldAPIV2.Operations.ConversationGetConversationMembers.ResponseData[number];
