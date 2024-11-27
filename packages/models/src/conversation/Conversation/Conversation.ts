import { classes } from "polytype";
import type { ConversationData, ConversationListItemData } from "./types.js";
import { DataModel, ReferenceModel } from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Conversation extends ReferenceModel {
  public static ofId(id: string): Conversation {
    return new Conversation(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ConversationDetailed | undefined> => {
      const data = await config.behaviors.conversation.find(id);
      if (data) {
        return new ConversationDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ConversationDetailed> => {
      const conversation = await this.find(id);
      assertObjectFound(conversation, this, id);
      return conversation;
    },
  );

  public findDetailed = provideReact((): Promise<
    ConversationDetailed | undefined
  > => {
    return Conversation.find(this.id);
  }, [this.id]) as AsyncResourceVariant<ConversationDetailed | undefined, []>;

  public getDetailed = provideReact((): Promise<ConversationDetailed> => {
    return Conversation.get(this.id);
  }, [this.id]) as AsyncResourceVariant<ConversationDetailed, []>;
}

class ConversationCommon extends classes(
  DataModel<ConversationData | ConversationListItemData>,
  Conversation,
) {
  public constructor(data: ConversationData | ConversationListItemData) {
    super([data], [data.conversationId]);
  }
}

export class ConversationDetailed extends classes(
  ConversationCommon,
  DataModel<ConversationData>,
) {
  public constructor(data: ConversationData) {
    super([data], [data]);
  }
}

export class ConversationListItem extends classes(
  ConversationCommon,
  DataModel<ConversationListItemData>,
) {
  public constructor(data: ConversationListItemData) {
    super([data], [data]);
  }
}
