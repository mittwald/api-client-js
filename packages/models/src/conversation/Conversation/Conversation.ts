import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { ConversationUserListQuery as ConversationUserListQueryType } from "../ConversationUser/index.js";
import type { ConversationCategoryReferenceType } from "../ConversationCategory/index.js";
import type { FileAccessTokenProvider, DomFile } from "../../file/index.js";
import type {
  ConversationCreateMessageRequestModelData,
  ConversationShareableAggregateReference,
  ConversationRelatedAggregateReference,
  ConversationAggregateReference,
  ConversationCreateRequest,
  ConversationListQueryData,
  ConversationListItemData,
  ConversationData,
} from "./types.js";

import { ConversationMessageFileAttachmentAccessTokenProvider } from "../ConversationMessage/ConversationMessageFileAttachmentAccessTokenProvider.js";
import { ConversationServiceRequest } from "../ConversationServiceRequest/index.js";
import { ConversationStatusUpdate } from "../ConversationStatusUpdate/index.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ConversationCategory } from "../ConversationCategory/index.js";
import { ConversationMessage } from "../ConversationMessage/index.js";
import { FileUploadError } from "../../errors/index.js";
import { config } from "../../config/index.js";
import { File } from "../../file/index.js";
import { User } from "../../user/index.js";
import {
  ConversationUserListQuery,
  ConversationUser,
} from "../ConversationUser/index.js";
import {
  tryResolveAggregateReference,
  type AggregateReference,
  AggregateMetaData,
} from "../../common/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Conversation",
})
export class Conversation extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "conversation",
    "conversation",
  );
  public readonly fileAccessTokenProvider: FileAccessTokenProvider;

  public readonly users: ConversationUserListQueryType;

  public constructor(id: string) {
    super(id);
    this.fileAccessTokenProvider =
      new ConversationMessageFileAttachmentAccessTokenProvider(this);
    this.users = new ConversationUserListQuery(this);
  }

  public static async create(data: ConversationCreateRequest) {
    const response = await config.behaviors.conversation.create({
      ...data,
      sharedWith: data.sharedWith as ConversationShareableAggregateReference,
      relatedTo: data.relatedTo as ConversationRelatedAggregateReference,
    });

    return Conversation.ofId(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.conversation.find(id);
    if (data) {
      return new ConversationDetailed(data);
    }
  }

  public static async get(id: string) {
    const conversation = await Conversation.find(id);
    assertObjectFound(conversation, Conversation, id);
    return conversation;
  }

  public static async listCategories() {
    const response = await config.behaviors.conversation.listCategories();
    return response.map((c) => new ConversationCategory(c));
  }

  public static async listRelatedCategories(
    relationType: ConversationCategoryReferenceType[number],
  ) {
    const categories = await Conversation.listCategories();
    return categories.filter((c) =>
      c.data.referenceType.find((t) => t === relationType),
    );
  }

  public static ofId(id: string) {
    return new Conversation(id);
  }

  public static query(query: ConversationListQueryData = {}) {
    return new ConversationListQuery(query);
  }

  public async close() {
    await config.behaviors.conversation.setConversationStatus(
      this.id,
      "closed",
    );
  }

  public async createMessage(
    data: ConversationCreateMessageRequestModelData,
    onProgress?: (file: DomFile, percent: number) => void,
  ) {
    const { files, ...restData } = data;

    const uploadedFiles = files
      ? await this.uploadFiles(files, onProgress)
      : [];

    await config.behaviors.conversation.createMessage(this.id, {
      ...restData,
      fileIds: uploadedFiles.map((f) => f.id),
    });
  }

  public async findCommon(): Promise<ConversationCommon | undefined> {
    return this instanceof ConversationCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<ConversationDetailed | undefined> {
    return Conversation.find(this.id);
  }

  public async getCommon(): Promise<ConversationCommon> {
    return this instanceof ConversationCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<ConversationDetailed> {
    return Conversation.get(this.id);
  }

  public async listMembers() {
    const data = await config.behaviors.conversation.getMembers(this.id);
    return data.map((d) => new ConversationUser(d));
  }

  public async listMessages() {
    const data = await config.behaviors.conversation.listMessages(this.id);
    return data.map((d) =>
      d.type === "STATUS_UPDATE"
        ? new ConversationStatusUpdate(d)
        : d.type === "SERVICE_REQUEST"
          ? new ConversationServiceRequest(d)
          : new ConversationMessage(d),
    );
  }

  public async updateCategory(categoryId: string) {
    await config.behaviors.conversation.update(this.id, { categoryId });
  }

  public async updateRelation(relatedTo: ConversationAggregateReference) {
    await config.behaviors.conversation.update(this.id, {
      relatedTo: relatedTo as ConversationRelatedAggregateReference,
    });
  }

  public async updateTitle(title: string) {
    await config.behaviors.conversation.update(this.id, { title });
  }

  public async uploadFiles(
    files: ArrayLike<DomFile> | null,
    onProgress?: (file: DomFile, percent: number) => void,
  ) {
    const entries = Array.from(files ?? []);
    const results = await Promise.allSettled(
      entries.map((f) =>
        File.upload(f, this.fileAccessTokenProvider, undefined, (percent) =>
          onProgress?.(f, percent),
        ),
      ),
    );

    const failures = results.flatMap((result, index) =>
      result.status === "rejected"
        ? [{ file: entries[index], error: result.reason }]
        : [],
    );

    if (failures.length > 0) {
      throw new FileUploadError(failures);
    }

    return results.map((result) => {
      if (result.status === "fulfilled") {
        return result.value;
      }

      throw result.reason;
    });
  }
}

export class ConversationCommon extends WithData<
  ConversationListItemData | ConversationData
>()(Conversation) {
  public readonly category?: ConversationCategory;
  public readonly createdAt: DateTime;
  public readonly createdBy?: ConversationUser;
  public override readonly data: ConversationListItemData | ConversationData;
  public readonly isOpen: boolean;
  public readonly isPrivat: boolean;
  public readonly lastMessageAt?: DateTime;
  public readonly lastMessageBy?: ConversationUser;
  public readonly mainUser: ConversationUser;
  public readonly relation?: AggregateReference;
  public readonly sharedWith?: AggregateReference;
  public readonly shortId: string;
  public readonly title: string;

  public constructor(data: ConversationListItemData | ConversationData) {
    super(data.conversationId);
    this.data = data;
    this.title = data.title;
    this.mainUser = new ConversationUser(data.mainUser);
    this.relation = data.relatedTo
      ? tryResolveAggregateReference({
          ...data.relatedTo,
          parent: data.relations?.[0],
        })
      : undefined;
    this.createdAt = DateTime.fromISO(data.createdAt);
    if (data.createdBy) {
      this.createdBy = new ConversationUser(data.createdBy);
    }
    if (data.lastMessage) {
      this.lastMessageAt = DateTime.fromISO(data.lastMessage.createdAt);
    }
    if (data.lastMessage?.createdBy) {
      this.lastMessageBy = new ConversationUser(data.lastMessage.createdBy);
    }
    this.category = data.category
      ? new ConversationCategory(data.category)
      : undefined;
    this.isOpen = data.status !== "closed";
    this.sharedWith = data.sharedWith
      ? tryResolveAggregateReference(data.sharedWith)
      : undefined;
    this.shortId = data.shortId;
    this.isPrivat =
      !data.sharedWith ||
      data.sharedWith.aggregate === User.aggregateMetaData.aggregate;
  }
}

export class ConversationDetailed extends ConversationCommon {
  public override readonly data: ConversationData;
  public constructor(data: ConversationData) {
    super(data);
    this.data = data;
  }
}

export class ConversationListItem extends ConversationCommon {
  public override readonly data: ConversationListItemData;
  public constructor(data: ConversationListItemData) {
    super(data);
    this.data = data;
  }
}

export class ConversationListQuery extends ListQueryModel<ConversationListQueryData> {
  public constructor(query: ConversationListQueryData = {}) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.conversation.list(
      this.query,
    );
    return new ConversationList(
      this.query,
      items.map((d) => new ConversationListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ConversationListQueryData) {
    return new ConversationListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ConversationList extends WithListData<ConversationListItem>()(
  ConversationListQuery,
) {
  public override readonly items: readonly ConversationListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ConversationListQueryData,
    conversations: ConversationListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(conversations);
    this.totalCount = totalCount;
  }
}
