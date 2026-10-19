import { afterEach, describe, expect, it, vi } from "vitest";

import { buildAIModelData } from "../../testing/builders/buildAIModelData.js";
import { ListQueryModel, ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  AIModelListQuery,
  AIModelListItem,
  AIModelList,
  AIModel,
} from "./AIModel.js";

afterEach(resetBehaviors);

describe("AIModel", () => {
  it("delegates list queries and maps the result", async () => {
    const data = buildAIModelData({ displayName: "GPT One", name: "gpt-1" });
    const list = vi.fn().mockResolvedValue({ items: [data], totalCount: 1 });
    installBehaviors({ aiModel: { list } });

    const result = await AIModel.query().execute();

    expect(list).toHaveBeenCalledWith({});
    expect(result).toBeInstanceOf(AIModelList);
    expect(result.items[0]).toBeInstanceOf(AIModelListItem);
    expect(result.items[0]).toMatchObject({
      displayName: "GPT One",
      name: "gpt-1",
    });
    expect(result.totalCount).toBe(1);
  });

  it("exposes model data through derived getters", () => {
    const item = new AIModelListItem(buildAIModelData());

    expect(item.documentationLink).toBe("https://docs.example.com/model");
    expect(item.termsOfServiceLink).toBe("https://tos.example.com/model");
    expect(item.tokenFactor).toBe(1);
    expect(item.label).toBe("stable");
  });

  it("preserves the model inheritance chains", () => {
    const item = new AIModelListItem(buildAIModelData());
    const list = new AIModelList({}, [item], 1);

    expect(item).toBeInstanceOf(AIModelListItem);
    expect(item).toBeInstanceOf(AIModel);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
    expect(list).toBeInstanceOf(AIModelListQuery);
    expect(list).toBeInstanceOf(ListQueryModel);
    expect(list.items).toBeDefined();
  });
});
