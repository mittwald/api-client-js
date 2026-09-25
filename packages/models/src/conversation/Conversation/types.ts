import type { MittwaldAPIV2 } from "@mittwald/api-client";

import type { DomFile } from "../../file/index.js";

export type ConversationData =
  MittwaldAPIV2.Operations.ConversationGetConversation.ResponseData;

export type ConversationListItemData =
  MittwaldAPIV2.Operations.ConversationListConversations.ResponseData[number];

export type ConversationCreateRequestData =
  MittwaldAPIV2.Paths.V2Conversations.Post.Parameters.RequestBody;

export type ConversationAggregateReference =
  MittwaldAPIV2.Components.Schemas.ConversationAggregateReference;

export type ConversationCreateRequest = {
  sharedWith?: ConversationAggregateReference;
  relatedTo?: ConversationAggregateReference;
} & Omit<ConversationCreateRequestData, "sharedWith" | "relatedTo">;

export type ConversationShareableAggregateReference =
  MittwaldAPIV2.Components.Schemas.ConversationShareableAggregateReference;

export type ConversationRelatedAggregateReference =
  MittwaldAPIV2.Components.Schemas.ConversationRelatedAggregateReference;

export type ConversationUpdateRequestData =
  MittwaldAPIV2.Paths.V2ConversationsConversationId.Put.Parameters.RequestBody;

export type ConversationCreateMessageRequestData =
  MittwaldAPIV2.Paths.V2ConversationsConversationIdMessages.Post.Parameters.RequestBody;

export type ConversationCreateMessageRequestModelData = Omit<
  ConversationCreateMessageRequestData,
  "fileIds"
> & {
  files?: ArrayLike<DomFile> | null;
};

export type ConversationListQueryData =
  MittwaldAPIV2.Paths.V2Conversations.Get.Parameters.Query;

export type ConversationStatusRequestData =
  MittwaldAPIV2.Paths.V2ConversationsConversationIdStatus.Put.Parameters.RequestBody["status"];

export type ConversationMessageResponseData =
  MittwaldAPIV2.Operations.ConversationListMessagesByConversation.ResponseData[number];
