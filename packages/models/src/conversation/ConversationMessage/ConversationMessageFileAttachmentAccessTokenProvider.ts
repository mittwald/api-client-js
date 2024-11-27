import { FileAccessTokenProvider } from "../../file/FileAccessToken/FileAccessTokenProvider.js";
import { Conversation } from "../Conversation/index.js";
import {
  FileDownloadTokenData,
  FileUploadTokenData,
} from "../../file/FileAccessToken/types.js";
import { config } from "../../config/config.js";

export class ConversationMessageFileAttachmentAccessTokenProvider
  implements FileAccessTokenProvider
{
  public readonly conversation: Conversation;

  public constructor(message: Conversation) {
    this.conversation = message;
  }

  public createUploadToken(): Promise<FileUploadTokenData> {
    return config.behaviors.conversation.createFileUploadToken(
      this.conversation.id,
    );
  }

  public getDownloadToken(fileId: string): Promise<FileDownloadTokenData> {
    return config.behaviors.conversation.getFileDownloadToken(
      fileId,
      this.conversation.id,
    );
  }
}
