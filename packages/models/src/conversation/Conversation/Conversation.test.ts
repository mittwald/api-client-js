import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

import { AggregateMetaData } from "../../common";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildConversationCategoryData } from "../../testing/builders/buildConversationCategoryData";
import { buildConversationListItemData } from "../../testing/builders/buildConversationListItemData";
import { buildConversationUserData } from "../../testing/builders/buildConversationUserData";
import { buildConversationData } from "../../testing/builders/buildConversationData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { installBehaviors, resetBehaviors } from "../../testing";
import { ConversationCategory } from "../ConversationCategory";
import { ListQueryModel, ReferenceModel } from "../../base";
import { ConversationUser } from "../ConversationUser";
import {
  ConversationListQuery,
  ConversationDetailed,
  ConversationListItem,
  ConversationList,
  Conversation,
} from "./Conversation";

afterEach(resetBehaviors);

describe("Conversation lookup and mutations", () => {
  test("find delegates and materializes a detailed conversation", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildConversationData({ conversationId: "c-1" }));
    installBehaviors({ conversation: { find } });

    const result = await Conversation.find("c-1");

    expect(find).toHaveBeenCalledWith("c-1");
    expect(result).toBeInstanceOf(ConversationDetailed);
    expect(result?.id).toBe("c-1");
  });

  test("find returns undefined when the conversation is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ conversation: { find } });

    await expect(Conversation.find("missing")).resolves.toBeUndefined();
  });

  test("get returns a detailed conversation or throws ObjectNotFoundError", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildConversationData({ conversationId: "c-1" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ conversation: { find } });

    await expect(Conversation.get("c-1")).resolves.toBeInstanceOf(
      ConversationDetailed,
    );
    await expect(Conversation.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("create delegates and returns a conversation reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "conv-1" });
    installBehaviors({ conversation: { create } });
    const data = { visibility: "private" as const, title: "Help" };

    const result = await Conversation.create(data);

    expect(create).toHaveBeenCalledWith(data);
    expect(result).toBeInstanceOf(Conversation);
    expect(result.id).toBe("conv-1");
  });

  test("updateTitle, updateCategory, and close delegate", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const setConversationStatus = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ conversation: { setConversationStatus, update } });
    const conversation = Conversation.ofId("c-1");

    await conversation.updateTitle("New title");
    await conversation.updateCategory("cat-1");
    await conversation.close();

    expect(update).toHaveBeenNthCalledWith(1, "c-1", { title: "New title" });
    expect(update).toHaveBeenNthCalledWith(2, "c-1", { categoryId: "cat-1" });
    expect(setConversationStatus).toHaveBeenCalledWith("c-1", "closed");
  });
});

describe("Conversation data and lists", () => {
  test.each([
    ["closed", false],
    ["open", true],
  ] as const)("derives isOpen from %s status", (status, isOpen) => {
    const conversation = new ConversationDetailed(
      buildConversationData({ title: "Title", status }),
    );

    expect(conversation.title).toBe("Title");
    expect(conversation.isOpen).toBe(isOpen);
    expect(conversation.shortId).toBe("CONV-1");
    expect(conversation.mainUser).toBeInstanceOf(ConversationUser);
    expect(conversation.createdAt.isValid).toBe(true);
    expect(conversation.isPrivat).toBe(true);
  });

  test("query materializes list items and passes the query through", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildConversationListItemData({ conversationId: "c-1" })],
      totalCount: 3,
    });
    installBehaviors({ conversation: { list } });

    const result = await Conversation.query().execute();

    expect(result).toBeInstanceOf(ConversationList);
    expect(result.items[0]).toBeInstanceOf(ConversationListItem);
    expect(result.totalCount).toBe(3);
    expect(list).toHaveBeenCalledWith({});
  });

  test("refine merges into the query passed to the behavior", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ conversation: { list } });

    await Conversation.query({ limit: 5 })
      .refine({ fullTextSearch: "hello" })
      .execute();

    expect(list).toHaveBeenCalledWith({ fullTextSearch: "hello", limit: 5 });
  });

  test("preserves ghostmaker identity", async () => {
    const item = new ConversationListItem(buildConversationListItemData());
    expect(item).toBeInstanceOf(ConversationListItem);
    expect(item).toBeInstanceOf(Conversation);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();

    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ conversation: { list } });
    const result = await Conversation.query().execute();
    expect(result).toBeInstanceOf(ConversationListQuery);
    expect(result).toBeInstanceOf(ListQueryModel);
    expect(result.items).toBeDefined();
  });

  test("lists categories and members through behaviors", async () => {
    const listCategories = vi
      .fn()
      .mockResolvedValue([buildConversationCategoryData()]);
    const getMembers = vi.fn().mockResolvedValue([buildConversationUserData()]);
    installBehaviors({ conversation: { listCategories, getMembers } });

    const categories = await Conversation.listCategories();
    const members = await Conversation.ofId("c-1").listMembers();

    expect(listCategories).toHaveBeenCalledWith();
    expect(categories[0]).toBeInstanceOf(ConversationCategory);
    expect(getMembers).toHaveBeenCalledWith("c-1");
    expect(members[0]).toBeInstanceOf(ConversationUser);
  });
});

describe("Conversation.findCommon / getCommon", () => {
  test("findCommon delegates to the behavior for a bare reference and materializes the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildConversationData({ conversationId: "c-1" }));
    installBehaviors({ conversation: { find } });

    const result = await Conversation.ofId("c-1").findCommon();

    expect(find).toHaveBeenCalledWith("c-1");
    expect(result).toBeInstanceOf(ConversationDetailed);
    expect(result?.id).toBe("c-1");
  });

  test("findCommon returns undefined for a bare reference when the conversation is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ conversation: { find } });

    await expect(
      Conversation.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon delegates for a bare reference and throws ObjectNotFoundError when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(
        buildConversationData({ conversationId: "c-1" }),
      )
      .mockResolvedValueOnce(undefined);
    installBehaviors({ conversation: { find } });

    await expect(
      Conversation.ofId("c-1").getCommon(),
    ).resolves.toBeInstanceOf(ConversationDetailed);
    await expect(
      Conversation.ofId("missing").getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });
});

describe("Conversation common idempotency", () => {
  test("findCommon on an already materialized detailed conversation returns itself without hitting the behavior", async () => {
    const find = vi.fn();
    installBehaviors({ conversation: { find } });
    const detailed = new ConversationDetailed(
      buildConversationData({ conversationId: "c-1" }),
    );

    const result = await detailed.findCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already materialized detailed conversation returns itself without hitting the behavior", async () => {
    const find = vi.fn();
    installBehaviors({ conversation: { find } });
    const detailed = new ConversationDetailed(
      buildConversationData({ conversationId: "c-1" }),
    );

    const result = await detailed.getCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon on a list item returns itself without hitting the behavior", async () => {
    const find = vi.fn();
    installBehaviors({ conversation: { find } });
    const item = new ConversationListItem(
      buildConversationListItemData({ conversationId: "c-1" }),
    );

    const result = await item.findCommon();

    expect(result).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("getDetailed re-fetches through the behavior even on a materialized conversation", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildConversationData({ conversationId: "c-1" }));
    installBehaviors({ conversation: { find } });
    const detailed = new ConversationDetailed(
      buildConversationData({ conversationId: "c-1" }),
    );

    const refreshed = await detailed.getDetailed();

    expect(find).toHaveBeenCalledWith("c-1");
    expect(refreshed).toBeInstanceOf(ConversationDetailed);
    expect(refreshed).not.toBe(detailed);
  });
});

describe("Conversation aggregate metadata and absent optionals", () => {
  test("aggregateMetaData pins the conversation domain and aggregate", () => {
    expect(Conversation.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Conversation.aggregateMetaData.domain).toBe("conversation");
    expect(Conversation.aggregateMetaData.aggregate).toBe("conversation");
  });

  test("derived optional getters are undefined when the source data omits them", () => {
    const conversation = new ConversationDetailed(buildConversationData());

    expect(conversation.createdBy).toBeUndefined();
    expect(conversation.relation).toBeUndefined();
    expect(conversation.lastMessageAt).toBeUndefined();
    expect(conversation.lastMessageBy).toBeUndefined();
    expect(conversation.category).toBeUndefined();
    expect(conversation.sharedWith).toBeUndefined();
    expect(conversation.isPrivat).toBe(true);
  });

  test("derived optional getters materialize when the source data provides them", () => {
    const conversation = new ConversationDetailed(
      buildConversationData({
        lastMessage: {
          createdBy: buildConversationUserData({ userId: "author" }),
          createdAt: "2024-02-02T00:00:00.000Z",
        },
        sharedWith: {
          aggregate: "project",
          domain: "project",
          id: "p-1",
        },
        createdBy: buildConversationUserData({ userId: "creator" }),
        category: buildConversationCategoryData(),
      }),
    );

    expect(conversation.createdBy).toBeInstanceOf(ConversationUser);
    expect(conversation.lastMessageAt?.isValid).toBe(true);
    expect(conversation.lastMessageBy).toBeInstanceOf(ConversationUser);
    expect(conversation.category).toBeInstanceOf(ConversationCategory);
    expect(conversation.sharedWith).toBeDefined();
    expect(conversation.isPrivat).toBe(false);
  });
});
