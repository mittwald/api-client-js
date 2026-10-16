import { afterEach, describe, expect, test, vi } from "vitest";

import { buildFeedbackListItemData } from "../../testing/builders/buildFeedbackListItemData.js";
import { FeedbackListItem, FeedbackCommon, Feedback } from "./Feedback.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

describe("Feedback", () => {
  test("list delegates and freezes materialized items", async () => {
    const list = vi.fn().mockResolvedValue([buildFeedbackListItemData()]);
    installBehaviors({ feedback: { list } });
    const result = await Feedback.list("u-1", { subject: "nps" });
    expect(list).toHaveBeenCalledWith("u-1", { subject: "nps" });
    expect(Object.isFrozen(result)).toBe(true);
    expect(result[0]).toBeInstanceOf(FeedbackListItem);
  });

  test("isSubmitted reflects whether matching feedback exists", async () => {
    const list = vi
      .fn()
      .mockResolvedValueOnce([buildFeedbackListItemData()])
      .mockResolvedValueOnce([]);
    installBehaviors({ feedback: { list } });
    expect(await Feedback.isSubmitted("u-1", "nps")).toBe(true);
    expect(await Feedback.isSubmitted("u-1", "other")).toBe(false);
    expect(list).toHaveBeenNthCalledWith(1, "u-1", { subject: "nps" });
    expect(list).toHaveBeenNthCalledWith(2, "u-1", { subject: "other" });
  });

  test("create delegates its data", async () => {
    const create = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ feedback: { create } });
    const data = { message: "great", subject: "nps", origin: "web", vote: 10 };
    await Feedback.create(data);
    expect(create).toHaveBeenCalledWith(data);
  });

  test("reference and data instances preserve composition", () => {
    const ref = Feedback.ofId("f-1");
    const item = new FeedbackListItem(buildFeedbackListItemData());
    expect(ref.id).toBe("f-1");
    expect(ref).toBeInstanceOf(ReferenceModel);
    expect(item).toBeInstanceOf(FeedbackCommon);
    expect(item).toBeInstanceOf(Feedback);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});
