import type { Conversation } from "../Conversation/index.js";
import type { ConversationUserData } from "./types.js";
import type { User } from "../../user/index.js";

import { File } from "../../file/File/internal.js";
import { config } from "../../config/index.js";
import { ListQueryModel, ReferenceModel, WithListData, type Ctor, extractId, WithData } from "../../base/index.js";

export class ConversationUser extends WithData<ConversationUserData>()(
  ReferenceModel as Ctor<ReferenceModel>,
) {
  public readonly avatar?: File;
  public readonly clearName?: string;
  public override readonly data: ConversationUserData;
  public readonly isEmployee?: boolean;

  public constructor(data: ConversationUserData) {
    super(data.userId);
    this.data = data;
    this.clearName = data.clearName;
    this.avatar = data.avatarRefId ? File.ofId(data.avatarRefId) : undefined;
    this.isEmployee = data.isEmployee;
  }
}

export class ConversationUserListQuery extends ListQueryModel<null> {
  private readonly conversation: Conversation;

  public constructor(conversation: Conversation) {
    super(null, { dependencies: [conversation.id] });
    this.conversation = conversation;
  }

  public async execute() {
    const response = await config.behaviors.conversation.getMembers(
      this.conversation.id,
    );
    return new ConversationUserList(
      this.conversation,
      response.map((m) => new ConversationUser(m)),
      response.length,
    );
  }

  public async includes(otherUser: ConversationUser | string | User) {
    const { items } = await this.execute();
    return items.some((u) => u.id === extractId(otherUser));
  }}

export class ConversationUserList extends WithListData<ConversationUser>()(
  ConversationUserListQuery,
) {
  public override readonly items: readonly ConversationUser[];
  public override readonly totalCount: number;
  public constructor(
    conversation: Conversation,
    users: ConversationUser[],
    totalCount: number,
  ) {
    super(conversation);
    this.items = Object.freeze(users);
    this.totalCount = totalCount;
  }
}
