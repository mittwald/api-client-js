import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { ContractItem, ContractItemDetailed } from "./ContractItem.js";
import { ContractItemBehaviors } from "./behaviors/types.js";
import { ContractItemData } from "./types.js";

const contractItemData = (
  overrides: Partial<ContractItemData> = {},
): ContractItemData =>
  ({
    itemId: "item-1",
    contractId: "contract-1",
    description: "Some item",
    ...overrides,
  }) as unknown as ContractItemData;

const contractItem = {
  find: jest.fn<ContractItemBehaviors["find"]>(),
};

beforeEach(() => {
  contractItem.find.mockReset();
  config.behaviors.contractItem = contractItem;
});

describe("ContractItem reference", () => {
  test("ofId keeps both the contract id and the item id", () => {
    const item = ContractItem.ofId("contract-1", "item-1");

    expect(item.contractId).toBe("contract-1");
    expect(item.id).toBe("item-1");
  });

  test("describes itself with the item id, not the contract id", () => {
    expect(ContractItem.ofId("contract-1", "item-1").describe()).toBe(
      "ContractItem@item-1",
    );
  });
});

describe("ContractItem.find", () => {
  test("passes both ids to the behavior", async () => {
    contractItem.find.mockResolvedValue(contractItemData());

    const found = await ContractItem.find("contract-1", "item-1");

    expect(contractItem.find).toHaveBeenCalledWith("contract-1", "item-1");
    expect(found).toBeInstanceOf(ContractItemDetailed);
  });

  test("returns undefined when the behavior finds nothing", async () => {
    contractItem.find.mockResolvedValue(undefined);

    await expect(
      ContractItem.find("contract-1", "missing"),
    ).resolves.toBeUndefined();
  });
});

describe("ContractItem.get", () => {
  test("returns the item when it exists", async () => {
    contractItem.find.mockResolvedValue(contractItemData());

    await expect(
      ContractItem.get("contract-1", "item-1"),
    ).resolves.toBeInstanceOf(ContractItemDetailed);
  });

  test("throws an ObjectNotFoundError naming the item id", async () => {
    contractItem.find.mockResolvedValue(undefined);

    await expect(ContractItem.get("contract-1", "missing")).rejects.toThrow(
      ObjectNotFoundError,
    );
    await expect(ContractItem.get("contract-1", "missing")).rejects.toThrow(
      "ContractItem@missing not found",
    );
  });
});

describe("ContractItemDetailed", () => {
  test("takes its id from the itemId field and keeps the contract id", () => {
    const detailed = new ContractItemDetailed("contract-1", contractItemData());

    expect(detailed.id).toBe("item-1");
    expect(detailed.contractId).toBe("contract-1");
  });

  test("exposes the raw data, frozen", () => {
    const detailed = new ContractItemDetailed("contract-1", contractItemData());

    expect(detailed.data.description).toBe("Some item");
    expect(Object.isFrozen(detailed.data)).toBe(true);
  });

  test("uses the contract id it was constructed with, not the one in the data", () => {
    const detailed = new ContractItemDetailed(
      "contract-override",
      contractItemData(),
    );

    expect(detailed.contractId).toBe("contract-override");
  });
});
