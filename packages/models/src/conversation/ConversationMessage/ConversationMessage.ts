import { DateTime } from "luxon";

import type {
  ConversationMessageFileData,
  ConversationMessageData,
} from "./types.js";

import { ConversationUser } from "../ConversationUser/index.js";
import { File } from "../../file/File/internal.js";
import { Conversation } from "../Conversation/index.js";
import { DataModel } from "../../base/index.js";
import { config } from "../../config/index.js";

export class ConversationMessage extends DataModel<ConversationMessageData> {
  public readonly content?: string;
  public readonly conversation: Conversation;
  public readonly createdAt: DateTime;
  public readonly createdBy?: ConversationUser;
  public readonly files: File[] = [];
  public readonly id: string;

  public constructor(data: ConversationMessageData) {
    super(data);
    this.id = data.messageId;
    this.conversation = Conversation.ofId(data.conversationId);
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.createdBy = data.createdBy
      ? new ConversationUser(data.createdBy)
      : undefined;
    this.files =
      data.files
        ?.filter(
          (f): f is ConversationMessageFileData => f.status === "uploaded",
        )
        .map(
          (f) => new File(f.id, this.conversation.fileAccessTokenProvider),
        ) ?? [];
    this.content = data.messageContent;
  }

  public static async getUploadRules() {
    return File.getUploadRules("conversation");
  }

  public async update(content: string) {
    await config.behaviors.conversation.updateMessage(
      this.data.conversationId,
      this.id,
      content,
    );
  }
}
