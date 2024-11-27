import { DateTime } from "luxon";
import { DataModel } from "@mittwald/api-models";
import { config } from "../../config/config.js";
import { Conversation } from "../Conversation/index.js";
import {
  ConversationMessageData,
  ConversationMessageFileData,
} from "./types.js";
import { ConversationUser } from "../ConversationUser/index.js";
import { File } from "../../file/File/index.js";
import { provideReact } from "../../lib/provideReact.js";

export class ConversationMessage extends DataModel<ConversationMessageData> {
  public readonly id: string;
  public readonly conversation: Conversation;
  public readonly createdAt: DateTime;
  public readonly createdBy?: ConversationUser;
  public readonly files: File[] = [];

  public constructor(
    conversation: Conversation,
    data: ConversationMessageData,
  ) {
    super(data);
    this.id = data.messageId;
    this.conversation = conversation;
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.createdBy = data.createdBy
      ? new ConversationUser(conversation, data.createdBy)
      : undefined;
    this.files =
      data.files
        ?.filter(
          (f): f is ConversationMessageFileData => f.status === "uploaded",
        )
        .map(
          (f) => new File(f.id, this.conversation.fileAccessTokenProvider),
        ) ?? [];
  }

  public async update(content: string): Promise<void> {
    await config.behaviors.conversation.updateMessage(
      this.data.conversationId,
      this.id,
      content,
    );
  }

  public static getUploadRules = provideReact(async () => {
    return File.getUploadRules("conversation");
  });
}
