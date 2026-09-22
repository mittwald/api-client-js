import { DateTime } from "luxon";

import type {
  ConversationServiceRequestRelocationPayloadData,
  ConversationServiceRequestData,
} from "./types.js";

import { Conversation } from "../Conversation/index.js";
import { DataModel } from "../../base/index.js";

export class ConversationServiceRequest extends DataModel<ConversationServiceRequestData> {
  public readonly conversation: Conversation;
  public readonly createdAt: DateTime;
  public readonly payload: ConversationServiceRequestData["meta"];
  public readonly type: ConversationServiceRequestData["messageContent"];

  public constructor(data: ConversationServiceRequestData) {
    super(data);
    this.conversation = Conversation.ofId(data.conversationId);
    this.createdAt = DateTime.fromISO(data.createdAt);
    this.type = data.messageContent;
    this.payload = data.meta;
  }

  public isRelocationRequest(): this is {
    payload: ConversationServiceRequestRelocationPayloadData;
  } & ConversationServiceRequest {
    return this.type === "relocation";
  }
}
