import {
  ConversationCreateRequestData,
  ConversationData,
  ConversationUpdateRequestData,
} from "../types.js";
import { ConversationCategoryListItemData } from "../../ConversationCategory/types.js";
import { ConversationMemberData } from "../../ConversationUser/types.js";

export interface ConversationBehaviors {
  find: (id: string) => Promise<ConversationData | undefined>;
  create: (data: ConversationCreateRequestData) => Promise<{ id: string }>;
  update: (id: string, data: ConversationUpdateRequestData) => Promise<void>;
  updateMessage: (
    id: string,
    messageId: string,
    content: string,
  ) => Promise<void>;
  listCategories: () => Promise<ConversationCategoryListItemData[]>;
  getMembers: (conversationId: string) => Promise<ConversationMemberData[]>;
}
