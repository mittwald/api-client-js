import { classes } from "polytype";
import type {
  ConversationAggregateReference,
  ConversationCreateRequest,
  ConversationData,
  ConversationListItemData,
  ConversationRelatedAggregateReference,
  ConversationShareableAggregateReference,
} from "./types.js";
import {
  AggregateMetaData,
  DataModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { ConversationCategory } from "../ConversationCategory/index.js";
import { ConversationUser } from "../ConversationUser/index.js";
import { DateTime } from "luxon";
import { ConversationCategoryReferenceType } from "../ConversationCategory/types.js";
import { Customer } from "../../customer/index.js";
import { Project } from "../../project/index.js";
import { Server } from "../../server/index.js";
import { User } from "../../user/User/index.js";
import { ConversationRelation } from "../ConversationRelation/index.js";
import { ConversationStatus } from "../ConversationStatus/index.js";

export class Conversation extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "conversation",
    "conversation",
  );

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

  public static async create(
    data: ConversationCreateRequest,
  ): Promise<Conversation> {
    const response = await config.behaviors.conversation.create({
      ...data,
      relatedTo: data.relatedTo as ConversationRelatedAggregateReference,
      sharedWith: data.sharedWith as ConversationShareableAggregateReference,
    });

    return Conversation.ofId(response.id);
  }

  public async updateCategory(categoryId: string): Promise<void> {
    await config.behaviors.conversation.update(this.id, { categoryId });
  }

  public async updateRelation(
    relatedTo: ConversationAggregateReference,
  ): Promise<void> {
    await config.behaviors.conversation.update(this.id, {
      relatedTo: relatedTo as ConversationRelatedAggregateReference,
    });
  }

  public async updateTitle(title: string): Promise<void> {
    await config.behaviors.conversation.update(this.id, { title });
  }

  public static listCategories = provideReact(
    async (): Promise<Readonly<Array<ConversationCategory>>> => {
      const response = await config.behaviors.conversation.listCategories();
      return response.map((c) => new ConversationCategory(c));
    },
  );
}

class ConversationCommon extends classes(
  DataModel<ConversationData | ConversationListItemData>,
  Conversation,
) {
  public readonly title: string;
  public readonly mainUser: ConversationUser;
  public readonly createdAt: DateTime;
  public readonly createdBy?: ConversationUser;
  public readonly relation?: ConversationRelation;
  public readonly lastMessageAt?: DateTime;
  public readonly lastMessageBy?: ConversationUser;
  public readonly mstudioPath: string;
  public readonly publicConversation: Conversation;
  public readonly categoryReferenceType: ConversationCategoryReferenceType;
  public readonly category?: ConversationCategory;
  public readonly status: ConversationStatus;
  public readonly sharedWithCustomer?: Customer;
  public readonly sharedWithProject?: Project;
  public readonly sharedWithServer?: Server;
  public readonly sharedWithUser?: User;

  public constructor(data: ConversationData | ConversationListItemData) {
    super([data], [data.conversationId]);
    this.title = data.title;
    this.mainUser = new ConversationUser(this, data.mainUser);
    this.relation = data.relatedTo
      ? new ConversationRelation(data.relatedTo)
      : undefined;
    this.createdAt = DateTime.fromISO(data.createdAt);
    if (data.createdBy) {
      this.createdBy = new ConversationUser(this, data.createdBy);
    }
    if (data.lastMessage) {
      this.lastMessageAt = DateTime.fromISO(data.lastMessage.createdAt);
    }
    if (data.lastMessage?.createdBy) {
      this.lastMessageBy = new ConversationUser(
        this,
        data.lastMessage.createdBy,
      );
    }
    this.mstudioPath = `/app/support/conversations/${this.id}`;
    this.publicConversation = Conversation.ofId(data.conversationId);
    this.categoryReferenceType = [
      data.category?.referenceType[0] ?? "unspecified",
    ];
    this.category = data.category
      ? new ConversationCategory(data.category)
      : undefined;
    this.status = new ConversationStatus(data.status);
    this.sharedWithCustomer =
      this.data.sharedWith?.aggregate === Customer.aggregateMetaData.aggregate
        ? Customer.ofId(this.data.sharedWith.id)
        : undefined;
    this.sharedWithProject =
      this.data.sharedWith?.aggregate === Project.aggregateMetaData.aggregate
        ? Project.ofId(this.data.sharedWith.id)
        : undefined;
    this.sharedWithServer =
      this.data.sharedWith?.aggregate === Server.aggregateMetaData.aggregate
        ? Server.ofId(this.data.sharedWith.id)
        : undefined;
    this.sharedWithUser =
      this.data.sharedWith?.aggregate === User.aggregateMetaData.aggregate
        ? User.ofId(this.data.sharedWith.id)
        : undefined;
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
