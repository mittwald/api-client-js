import { MittwaldAPIV2 } from "@mittwald/api-client";
import { DomFile } from "../../file/index.js";

export type ConversationData =
  MittwaldAPIV2.Operations.ConversationGetConversation.ResponseData;

export type ConversationListItemData =
  MittwaldAPIV2.Operations.ConversationListConversations.ResponseData[number];

export type ConversationCreateRequestData =
  MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.RequestBody;

export type ConversationAggregateReference =
  MittwaldAPIV2.Components.Schemas.ConversationAggregateReference;

export type ConversationCreateRequest = Omit<
  ConversationCreateRequestData,
  "relatedTo" | "sharedWith"
> & {
  relatedTo?: ConversationAggregateReference;
  sharedWith?: ConversationAggregateReference;
};

export type ConversationShareableAggregateReference =
  MittwaldAPIV2.Components.Schemas.ConversationShareableAggregateReference;

export type ConversationRelatedAggregateReference =
  MittwaldAPIV2.Components.Schemas.ConversationRelatedAggregateReference;

export type ConversationUpdateRequestData =
  MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.RequestBody;

export type ConversationDepartment =
  MittwaldAPIV2.Components.Schemas.ConversationDepartment;

export type ConversationCreateMessageRequestData =
  MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.RequestBody;

export type ConversationCreateMessageRequestModelData = Omit<
  ConversationCreateMessageRequestData,
  "fileIds"
> & {
  files?: DomFile[] | FileList | null;
};
