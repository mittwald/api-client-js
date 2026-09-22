import { afterEach, describe, expect, test, vi } from "vitest";

import { buildConversationMessageData } from "../../testing/builders/buildConversationMessageData.js";
import { buildConversationUserData } from "../../testing/builders/buildConversationUserData.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { ConversationMessage } from "./ConversationMessage.js";
import { ConversationUser } from "../ConversationUser/index.js";
import { File } from "../../file/File/internal.js";
import { DataModel } from "../../base/index.js";

afterEach(resetBehaviors);

describe("ConversationMessage", () => {
  test("maps message data and its creator", () => {
    const message = new ConversationMessage(
      buildConversationMessageData({
        createdBy: buildConversationUserData(),
        conversationId: "c-1",
        messageContent: "Hi",
        messageId: "m-1",
      }),
    );

    expect(message.id).toBe("m-1");
    expect(message.content).toBe("Hi");
    expect(message.createdAt.isValid).toBe(true);
    expect(message.conversation.id).toBe("c-1");
    expect(message.createdBy).toBeInstanceOf(ConversationUser);
    expect(message).toBeInstanceOf(DataModel);
  });

  test("leaves an absent creator undefined", () => {
    expect(
      new ConversationMessage(
        buildConversationMessageData({ createdBy: undefined }),
      ).createdBy,
    ).toBeUndefined();
  });

  test("maps only uploaded files and defaults to an empty list", () => {
    const message = new ConversationMessage(
      buildConversationMessageData({
        files: [
          { status: "uploaded", id: "f-1", name: "a", type: "x" },
          { status: "requested", id: "f-2" },
        ],
      }),
    );

    expect(message.files).toHaveLength(1);
    expect(message.files[0]).toBeInstanceOf(File);
    expect(
      new ConversationMessage(
        buildConversationMessageData({ files: undefined }),
      ).files,
    ).toEqual([]);
  });

  test("update delegates with conversation and message identifiers", async () => {
    const updateMessage = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ conversation: { updateMessage } });
    const message = new ConversationMessage(
      buildConversationMessageData({ conversationId: "c-1", messageId: "m-1" }),
    );

    await message.update("Updated");

    expect(updateMessage).toHaveBeenCalledWith("c-1", "m-1", "Updated");
  });
});
