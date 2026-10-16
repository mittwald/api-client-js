import { afterEach, describe, expect, test, vi } from "vitest";

import { buildConversationUserData } from "../../testing/builders/buildConversationUserData.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { Conversation } from "../Conversation/index.js";
import { ReferenceModel } from "../../base/index.js";
import { File } from "../../file/index.js";
import {
  ConversationUserListQuery,
  ConversationUserList,
  ConversationUser,
} from "./ConversationUser.js";

afterEach(resetBehaviors);

describe("ConversationUser", () => {
  test("maps user data and avatar", () => {
    const user = new ConversationUser(
      buildConversationUserData({
        avatarRefId: "f-1",
        clearName: "Jane",
        isEmployee: true,
        userId: "u-1",
      }),
    );

    expect(user.id).toBe("u-1");
    expect(user.clearName).toBe("Jane");
    expect(user.isEmployee).toBe(true);
    expect(user.avatar).toBeInstanceOf(File);
    expect(user.data).toBeDefined();
    expect(user).toBeInstanceOf(ReferenceModel);
  });

  test("leaves an absent avatar undefined", () => {
    expect(
      new ConversationUser(
        buildConversationUserData({ avatarRefId: undefined }),
      ).avatar,
    ).toBeUndefined();
  });

  test("executes the conversation user list query", async () => {
    const getMembers = vi
      .fn()
      .mockResolvedValue([buildConversationUserData({ userId: "u-1" })]);
    installBehaviors({ conversation: { getMembers } });
    const query = Conversation.ofId("c-1").users;

    const result = await query.execute();

    expect(query).toBeInstanceOf(ConversationUserListQuery);
    expect(result).toBeInstanceOf(ConversationUserList);
    expect(result.items).toBeDefined();
    expect(result.items[0]).toBeInstanceOf(ConversationUser);
    expect(result.totalCount).toBe(1);
    expect(getMembers).toHaveBeenCalledWith("c-1");
  });

  test("includes reports whether a user is present", async () => {
    const getMembers = vi
      .fn()
      .mockResolvedValue([buildConversationUserData({ userId: "u-1" })]);
    installBehaviors({ conversation: { getMembers } });
    const query = Conversation.ofId("c-1").users;

    await expect(query.includes("u-1")).resolves.toBe(true);
    await expect(query.includes("u-2")).resolves.toBe(false);
  });
});
