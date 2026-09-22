import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildContractArticleData } from "../../testing/builders/buildContractArticleData";
import { buildContractItemData } from "../../testing/builders/buildContractItemData";
import { buildPlanChangeData } from "../../testing/builders/buildPlanChangeData";
import { buildContractData } from "../../testing/builders/buildContractData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { installBehaviors, resetBehaviors } from "../../testing";
import { ContractArticle } from "../ContractArticle";
import { ContractDetailed } from "../Contract";
import { ReferenceModel } from "../../base";
import { PlanChange } from "../PlanChange";
import {
  ContractItemDetailed,
  ContractItemCommon,
  ContractItem,
} from "./ContractItem";

afterEach(resetBehaviors);

function buildContract() {
  return new ContractDetailed(buildContractData());
}

describe("ContractItem", () => {
  test("creates a reference associated with its contract", () => {
    const contract = buildContract();
    const item = ContractItem.ofId(contract, "item-1");

    expect(item).toBeInstanceOf(ContractItem);
    expect(item.id).toBe("item-1");
    expect(item.contract).toBe(contract);
  });

  test("find delegates and constructs a detailed item", async () => {
    const contract = buildContract();
    const find = vi
      .fn()
      .mockResolvedValue(buildContractItemData({ itemId: "data-id" }));
    installBehaviors({ contractItem: { find } });

    const item = await ContractItem.find(contract, "requested-id");

    expect(find).toHaveBeenCalledWith(contract.id, "requested-id");
    expect(item).toBeInstanceOf(ContractItemDetailed);
    expect(item?.id).toBe("data-id");
  });

  test("find returns undefined for missing data", async () => {
    const contract = buildContract();
    installBehaviors({
      contractItem: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ContractItem.find(contract, "missing"),
    ).resolves.toBeUndefined();
  });

  test("mutations delegate with contract and item ids", async () => {
    const terminate = vi.fn().mockResolvedValue(undefined);
    const cancelTermination = vi.fn().mockResolvedValue(undefined);
    const cancelTariffChange = vi.fn().mockResolvedValue(undefined);
    installBehaviors({
      contractItem: { cancelTariffChange, cancelTermination, terminate },
    });
    const item = ContractItem.ofId(buildContract(), "item-1");
    const data: Parameters<typeof item.terminate>[0] = {};

    await item.terminate(data);
    await item.cancelTermination();
    await item.cancelPlanChange();

    expect(terminate).toHaveBeenCalledWith("contract-id", "item-1", data);
    expect(cancelTermination).toHaveBeenCalledWith("contract-id", "item-1");
    expect(cancelTariffChange).toHaveBeenCalledWith("contract-id", "item-1");
  });

  test("constructs data and derived item values", () => {
    const contract = buildContract();
    const data = buildContractItemData({
      articles: [
        buildContractArticleData({
          articleTemplateId: "matching",
          name: "First",
        }),
        buildContractArticleData({
          articleTemplateId: "other",
          name: "Second",
        }),
      ],
      totalPrice: { currency: "EUR", value: 250 },
      tariffChange: buildPlanChangeData(),
      description: "Detailed item",
      contractPeriod: 24,
      isActivated: false,
      isBaseItem: false,
      itemId: "item-2",
    });

    const item = new ContractItemDetailed(contract, data);

    expect(item.totalPrice.getAmount()).toBe(250);
    expect(item.totalYearlyPrice.getAmount()).toBe(3000);
    expect(item.articles).toHaveLength(2);
    expect(item.articles[0]).toBeInstanceOf(ContractArticle);
    expect(item.baseArticle).toBeInstanceOf(ContractArticle);
    expect(item.baseArticle?.name).toBe("First");
    expect(item.articleName).toBe("First");
    expect(item.isActivated).toBe(data.isActivated);
    expect(item.isBaseItem).toBe(data.isBaseItem);
    expect(item.description).toBe(data.description);
    expect(item.itemId).toBe(data.itemId);
    expect(item.contractPeriod).toBe(data.contractPeriod);
    expect(item.planChange).toBeInstanceOf(PlanChange);
    expect(item.findArticlesOfTemplate({ templateId: "matching" })).toEqual([
      item.articles[0],
    ]);
  });

  test("has no plan change when tariffChange is absent", () => {
    const item = new ContractItemDetailed(
      buildContract(),
      buildContractItemData(),
    );

    expect(item.planChange).toBeUndefined();
  });

  test("detailed items retain the complete model identity chain", () => {
    const item = new ContractItemDetailed(
      buildContract(),
      buildContractItemData(),
    );

    expect(item).toBeInstanceOf(ContractItemDetailed);
    expect(item).toBeInstanceOf(ContractItemCommon);
    expect(item).toBeInstanceOf(ContractItem);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });

  test("get rejects with ObjectNotFoundError for missing data", async () => {
    installBehaviors({
      contractItem: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ContractItem.get(buildContract(), "missing"),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });
});
