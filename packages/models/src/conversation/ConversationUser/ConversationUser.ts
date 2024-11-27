import {
  DataModel,
  ReferenceModel,
  ListDataModel,
  ListQueryModel,
} from "@mittwald/api-models";
import { classes } from "polytype";
import { ConversationUserData } from "./types.js";
import { Conversation } from "../Conversation/index.js";
import { User } from "../../user/User/index.js";
import { provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { extractId } from "../../base/extractId.js";

export class ConversationUser extends classes(
  DataModel<ConversationUserData>,
  ReferenceModel,
) {
  public readonly conversation: Conversation;
  public readonly id: string;
  public readonly clearName?: string;
  public readonly user: User;

  public constructor(conversation: Conversation, data: ConversationUserData) {
    super([data], [data.userId]);
    this.conversation = conversation;
    this.id = data.userId;
    this.clearName = data.clearName;
    this.user = User.ofId(data.userId);
  }
}

export class ConversationUserListQuery extends ListQueryModel<null> {
  private readonly conversation: Conversation;

  public constructor(conversation: Conversation) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    super(null, { dependencies: [conversation.id] });
    this.conversation = conversation;
  }

  public execute = provideReact(async (): Promise<ConversationUserList> => {
    const response = await config.behaviors.conversation.getMembers(
      this.conversation.id,
    );
    return new ConversationUserList(
      this.conversation,
      response.map((m) => new ConversationUser(this.conversation, m)),
      response.length,
    );
  }, [this.queryId]);

  public readonly includes = provideReact(
    async (otherUser: User | ConversationUser | string) => {
      const { items } = await this.execute();
      return items.some((u) => u.user.id === extractId(otherUser));
    },
    [this.queryId],
  );

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.execute();
    return totalCount;
  }, [this.queryId]);
}

export class ConversationUserList extends classes(
  ConversationUserListQuery,
  ListDataModel<ConversationUser>,
) {
  constructor(
    conversation: Conversation,
    users: ConversationUser[],
    totalCount: number,
  ) {
    super([conversation], [users, totalCount]);
  }
}
