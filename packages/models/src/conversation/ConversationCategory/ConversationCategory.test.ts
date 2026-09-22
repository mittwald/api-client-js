import { afterEach, describe, expect, test } from "vitest";

import { buildConversationCategoryData } from "../../testing/builders/buildConversationCategoryData";
import { ConversationCategory } from "./ConversationCategory";
import { resetBehaviors } from "../../testing";
import { DataModel } from "../../base";

afterEach(resetBehaviors);

describe("ConversationCategory", () => {
  test("maps category data", () => {
    const category = new ConversationCategory(
      buildConversationCategoryData({
        referenceType: ["extensionInstance"],
        categoryId: "cat-1",
        name: "Apps",
      }),
    );

    expect(category.id).toBe("cat-1");
    expect(category.name).toBe("Apps");
    expect(category.referenceType).toEqual(["extensionInstance"]);
    expect(category).toBeInstanceOf(DataModel);
  });

  test("exposes stable category identifiers", () => {
    expect(ConversationCategory.appCategoryId).toEqual(expect.any(String));
    expect(ConversationCategory.appCategoryId).not.toHaveLength(0);
    expect(ConversationCategory.generalCategoryId).not.toHaveLength(0);
  });
});
