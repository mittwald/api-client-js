import { DateTime } from "luxon";

import type { ConversationStatusUpdateData } from "./types.js";

import { ConversationUser } from "../ConversationUser/index.js";
import { Conversation } from "../Conversation/index.js";
import { DataModel } from "../../base/index.js";

export class ConversationStatusUpdate extends DataModel<ConversationStatusUpdateData> {
  public readonly content: string;
  public readonly conversation: Conversation;
  public readonly createdAt: DateTime;
  public readonly user?: ConversationUser;

  public constructor(data: ConversationStatusUpdateData) {
    super(data);
    this.conversation = Conversation.ofId(data.conversationId);
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.user = data.meta?.user
      ? new ConversationUser(data.meta.user)
      : undefined;
    this.content = data.messageContent;
  }
}
