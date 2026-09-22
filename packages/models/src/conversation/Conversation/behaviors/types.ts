import type { AxiosRequestConfig } from "axios";

import type { ConversationCategoryListItemData } from "../../ConversationCategory/types";
import type { FileDownloadTokenData, FileUploadTokenData } from "../../../file";
import type { ConversationMemberData } from "../../ConversationUser/types";
import type { QueryResponseData } from "../../../base";
import type {
  ConversationCreateMessageRequestData,
  ConversationMessageResponseData,
  ConversationCreateRequestData,
  ConversationStatusRequestData,
  ConversationUpdateRequestData,
  ConversationListQueryData,
  ConversationListItemData,
  ConversationData,
} from "../types";

export interface ConversationBehaviors {
  getFileDownloadToken: (
    fileId: string,
    conversationId: string,
    requestConfig?: AxiosRequestConfig,
  ) => Promise<FileDownloadTokenData>;
  setConversationStatus: (
    conversationId: string,
    status: ConversationStatusRequestData,
  ) => Promise<void>;
  createMessage: (
    conversationId: string,
    data: ConversationCreateMessageRequestData,
  ) => Promise<void>;
  updateMessage: (
    conversationId: string,
    messageId: string,
    content: string,
  ) => Promise<void>;
  list: (
    query?: ConversationListQueryData,
  ) => Promise<QueryResponseData<ConversationListItemData>>;
  listMessages: (
    conversationId: string,
  ) => Promise<ConversationMessageResponseData[]>;
  createFileUploadToken: (
    conversationId: string,
  ) => Promise<FileUploadTokenData>;
  update: (id: string, data: ConversationUpdateRequestData) => Promise<void>;
  getMembers: (conversationId: string) => Promise<ConversationMemberData[]>;
  create: (data: ConversationCreateRequestData) => Promise<{ id: string }>;
  find: (conversationId: string) => Promise<ConversationData | undefined>;
  listCategories: () => Promise<ConversationCategoryListItemData[]>;
}
