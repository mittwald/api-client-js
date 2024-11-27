import { DateTime } from "luxon";
import { DataModel } from "@mittwald/api-models";
import { config } from "../../config/config.js";
import { Conversation } from "../Conversation/index.js";
import { ConversationMessageData } from "./types.js";
import { ConversationUser } from "../ConversationUser/index.js";

export class ConversationMessage extends DataModel<ConversationMessageData> {
  public readonly id: string;
  public readonly conversation: Conversation;
  public readonly createdAt: DateTime;
  public readonly createdBy?: ConversationUser;

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
  }

  public async update(content: string): Promise<void> {
    await config.behaviors.conversation.updateMessage(
      this.data.conversationId,
      this.id,
      content,
    );
  }
}
