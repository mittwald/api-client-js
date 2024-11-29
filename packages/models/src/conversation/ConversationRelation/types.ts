import { ConversationData } from "../Conversation/index.js";

export type ConversationRelationData = NonNullable<
  ConversationData["relatedTo"]
>;
