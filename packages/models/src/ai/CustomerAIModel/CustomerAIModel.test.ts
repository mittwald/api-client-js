import { afterEach, describe, expect, it, vi } from "vitest";

import { buildCustomerAIDetailedModelData } from "../../testing/builders/buildCustomerAIDetailedModelData.js";
import { ReferenceModel } from "../../base/index.js";
import { installBehaviors, resetBehaviors } from "../../testing/installBehaviors.js";
import { CustomerAIModelListItem, CustomerAIModelList, CustomerAIModel } from "./CustomerAIModel.js";

afterEach(resetBehaviors);

describe("CustomerAIModel", () => {
  it("delegates list queries and maps the result", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildCustomerAIDetailedModelData()],
      totalCount: 1,
    });
    installBehaviors({ customerAIModel: { list } });

    const result = await CustomerAIModel.query("customer-1").execute();

    expect(list).toHaveBeenCalledWith("customer-1", {});
    expect(result).toBeInstanceOf(CustomerAIModelList);
    expect(result.items[0]).toBeInstanceOf(CustomerAIModelListItem);
    expect(result.totalCount).toBe(1);
  });

  it("exposes detailed model data through derived getters", () => {
    const withoutRemoval = new CustomerAIModelListItem(
      buildCustomerAIDetailedModelData({ replacesModelName: "gpt-old" }),
    );
    const withRemoval = new CustomerAIModelListItem(
      buildCustomerAIDetailedModelData({ removalAt: "2025-01-01T00:00:00.000Z" }),
    );

    expect(withoutRemoval.activeAt.isValid).toBe(true);
    expect(withoutRemoval.removalAt).toBeUndefined();
    expect(withRemoval.removalAt?.isValid).toBe(true);
    expect(withoutRemoval.status).toBe("active");
    expect(withoutRemoval.replacesModelName).toBe("gpt-old");
    expect(withoutRemoval.documentationLink).toBe("https://docs.example.com/detailed");
  });

  it("preserves the model inheritance chain", () => {
    const item = new CustomerAIModelListItem(buildCustomerAIDetailedModelData());

    expect(item).toBeInstanceOf(CustomerAIModelListItem);
    expect(item).toBeInstanceOf(CustomerAIModel);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});
