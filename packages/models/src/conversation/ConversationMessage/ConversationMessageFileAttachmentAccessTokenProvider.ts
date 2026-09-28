import type { AxiosRequestConfig } from "axios";

import type { FileAccessTokenProvider } from "../../file/index.js";
import type { Conversation } from "../Conversation/index.js";

import { config } from "../../config/index.js";

export class ConversationMessageFileAttachmentAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly conversation: Conversation;

  public constructor(message: Conversation) {
    this.conversation = message;
  }

  public createUploadToken() {
    return config.behaviors.conversation.createFileUploadToken(
      this.conversation.id,
    );
  }

  public getDownloadToken(fileId: string, requestConfig?: AxiosRequestConfig) {
    return config.behaviors.conversation.getFileDownloadToken(
      fileId,
      this.conversation.id,
      requestConfig,
    );
  }
}
