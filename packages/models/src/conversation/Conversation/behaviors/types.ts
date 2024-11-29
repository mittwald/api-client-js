import {
  ConversationCreateMessageRequestData,
  ConversationCreateRequestData,
  ConversationData,
  ConversationUpdateRequestData,
} from "../types.js";
import { ConversationCategoryListItemData } from "../../ConversationCategory/types.js";
import { ConversationMemberData } from "../../ConversationUser/types.js";
import {
  FileDownloadTokenData,
  FileUploadTokenData,
} from "../../../file/index.js";

export interface ConversationBehaviors {
  find: (id: string) => Promise<ConversationData | undefined>;
  create: (data: ConversationCreateRequestData) => Promise<{ id: string }>;
  update: (id: string, data: ConversationUpdateRequestData) => Promise<void>;
  createMessage: (
    id: string,
    data: ConversationCreateMessageRequestData,
  ) => Promise<void>;
  updateMessage: (
    id: string,
    messageId: string,
    content: string,
  ) => Promise<void>;
  listCategories: () => Promise<ConversationCategoryListItemData[]>;
  getMembers: (conversationId: string) => Promise<ConversationMemberData[]>;
  createFileUploadToken: (
    conversationId: string,
  ) => Promise<FileUploadTokenData>;
  getFileDownloadToken: (
    fileId: string,
    conversationId: string,
  ) => Promise<FileDownloadTokenData>;
}
