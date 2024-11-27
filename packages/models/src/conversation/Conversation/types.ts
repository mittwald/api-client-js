import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ConversationData =
  MittwaldAPIV2.Operations.ConversationGetConversation.ResponseData;

export type ConversationListItemData =
  MittwaldAPIV2.Operations.ConversationListConversations.ResponseData[number];
