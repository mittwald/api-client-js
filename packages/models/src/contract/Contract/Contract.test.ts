import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildContractArticleData } from "../../testing/builders/buildContractArticleData.js";
import { buildContractItemData } from "../../testing/builders/buildContractItemData.js";
import { buildContractData } from "../../testing/builders/buildContractData.js";
import {
  ContractItemDetailed,
  ContractItemCommon,
} from "../ContractItem/index.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { ReferenceModel } from "../../base/index.js";
import { Customer } from "../../customer/index.js";
import {
  ContractListQuery,
  ContractDetailed,
  ContractListItem,
  ContractCommon,
  ContractList,
  Contract,
} from "./Contract.js";

afterEach(resetBehaviors);

describe("Contract", () => {
  test("creates a reference", () => {
    const contract = Contract.ofId("c-1");

    expect(contract).toBeInstanceOf(Contract);
    expect(contract.id).toBe("c-1");
  });

  test("find delegates and constructs a detailed contract from returned data", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContractData({ contractId: "data-id" }));
    installBehaviors({ contract: { find } });

    const contract = await Contract.find("requested-id");

    expect(find).toHaveBeenCalledWith("requested-id");
    expect(contract).toBeInstanceOf(ContractDetailed);
    expect(contract?.id).toBe("data-id");
  });

  test("find returns undefined for missing data", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ contract: { find } });

    await expect(Contract.find("missing")).resolves.toBeUndefined();
  });

  test.each([
    ["project", "findByProject", "project-1", ["project-1", undefined]],
    ["server", "findByServer", "server-1", ["server-1"]],
  ] as const)("finds a contract by %s", async (_, method, id, expectedArgs) => {
    const behavior = vi.fn().mockResolvedValue(buildContractData());
    installBehaviors({ contract: { [method]: behavior } });

    const contract = await Contract[method](id);

    expect(behavior).toHaveBeenCalledWith(...expectedArgs);
    expect(contract).toBeInstanceOf(ContractDetailed);
  });

  test("terminate and cancelTermination delegate with the contract id", async () => {
    const terminate = vi.fn().mockResolvedValue(undefined);
    const cancelTermination = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ contract: { cancelTermination, terminate } });
    const contract = Contract.ofId("contract-1");
    const data: Parameters<typeof contract.terminate>[0] = {};

    await contract.terminate(data);
    await contract.cancelTermination();

    expect(terminate).toHaveBeenCalledWith("contract-1", data);
    expect(cancelTermination).toHaveBeenCalledWith("contract-1");
  });

  test("constructs data and derived contract values", () => {
    const domainItem = buildContractItemData({
      articles: [buildContractArticleData({ name: "Domain example.com" })],
      totalPrice: { currency: "EUR", value: 250 },
      itemId: "domain-item",
      isBaseItem: false,
    });
    const otherItem = buildContractItemData({
      articles: [buildContractArticleData({ name: "Mailbox" })],
      totalPrice: { currency: "EUR", value: 750 },
      itemId: "mail-item",
      isBaseItem: false,
    });
    const contract = new ContractDetailed(
      buildContractData({ additionalItems: [domainItem, otherItem] }),
    );

    expect(contract.customer).toBeInstanceOf(Customer);
    expect(contract.customer.id).toBe("customer-id");
    expect(contract.additionalItems).toHaveLength(2);
    expect(contract.additionalItems[0]).toBeInstanceOf(ContractItemCommon);
    expect(contract.additionalItemsTotalPrice.getAmount()).toBe(1000);
    expect(contract.domainItemsCount).toBe(1);
    expect(contract.baseItem).toBeInstanceOf(ContractItemDetailed);
    expect(contract.description).toBe(contract.baseItem.description);
    expect(contract.period).toBe(contract.baseItem.contractPeriod);
  });

  test("query executes, paginates, and maps list items", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildContractData()],
      totalCount: 7,
    });
    installBehaviors({ contract: { list } });
    const customer = Customer.ofId("customer-id");
    const query = Contract.query({ customer: customer, limit: 2 });

    const result = await query.execute();
    const refined = query.refine({ page: 3 });
    await refined.execute();

    expect(query).toBeInstanceOf(ContractListQuery);
    expect(list).toHaveBeenCalledWith("customer-id", { limit: 2 });
    expect(result).toBeInstanceOf(ContractList);
    expect(result.items[0]).toBeInstanceOf(ContractListItem);
    expect(result.totalCount).toBe(7);
    expect(refined).toBeInstanceOf(ContractListQuery);
    expect(refined).not.toBe(query);
    expect(list).toHaveBeenLastCalledWith("customer-id", {
      limit: 2,
      page: 3,
    });
  });

  test("getTotalCount requests and returns the total count", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 11, items: [] });
    installBehaviors({ contract: { list } });

    const count = await Contract.query({
      customer: Customer.ofId("customer-id"),
      limit: 2,
    }).getTotalCount();

    expect(count).toBe(11);
    expect(list).toHaveBeenCalledWith("customer-id", { limit: 1 });
  });

  test("list items retain the complete model identity chain", () => {
    const item = new ContractListItem(buildContractData());

    expect(item).toBeInstanceOf(ContractListItem);
    expect(item).toBeInstanceOf(ContractCommon);
    expect(item).toBeInstanceOf(Contract);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });

  test("get rejects with ObjectNotFoundError for missing data", async () => {
    installBehaviors({
      contract: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Contract.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });
  test("getCommon on a reference delegates to the detail behavior and returns the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContractData({ contractId: "data-id" }));
    installBehaviors({ contract: { find } });

    const common = await Contract.ofId("ref-id").getCommon();

    expect(find).toHaveBeenCalledWith("ref-id");
    expect(common).toBeInstanceOf(ContractDetailed);
    expect(common).toBeInstanceOf(ContractCommon);
    expect(common.id).toBe("data-id");
  });

  test("findCommon on a reference delegates to the detail behavior and returns the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContractData({ contractId: "data-id" }));
    installBehaviors({ contract: { find } });

    const common = await Contract.ofId("ref-id").findCommon();

    expect(find).toHaveBeenCalledWith("ref-id");
    expect(common).toBeInstanceOf(ContractDetailed);
    expect(common?.id).toBe("data-id");
  });

  test("getCommon rejects with ObjectNotFoundError when the reference cannot be resolved", async () => {
    installBehaviors({
      contract: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Contract.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon on a reference rejects when the contract cannot be resolved", async () => {
    // findCommon delegates to findDetailed -> Contract.get, which throws
    // ObjectNotFoundError rather than resolving to undefined.
    installBehaviors({
      contract: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Contract.ofId("missing").findCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("getCommon on a materialized contract returns itself without invoking any behavior", async () => {
    const find = vi.fn();
    installBehaviors({ contract: { find } });
    const contract = new ContractDetailed(buildContractData());

    const common = await contract.getCommon();

    expect(common).toBe(contract);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon on a materialized list item returns itself without invoking any behavior", async () => {
    const find = vi.fn();
    installBehaviors({ contract: { find } });
    const item = new ContractListItem(buildContractData());

    const common = await item.findCommon();

    expect(common).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("omits derived optional values when the source omits them", () => {
    const contract = new ContractDetailed(buildContractData());

    expect(contract.termination).toBeUndefined();
    expect(contract.planChange).toBeUndefined();
    expect(contract.nextPossibleDowngradeDate).toBeUndefined();
    expect(contract.nextPossibleUpgradeDate).toBeUndefined();
    expect(contract.nextPossibleTerminationDate).toBeUndefined();
    expect(contract.aggregateReference).toBeUndefined();
    expect(contract.activationDate).toBeUndefined();
    expect(contract.freeTrialUntil).toBeUndefined();
    expect(contract.freeTrialDaysRemaining).toBeUndefined();
    expect(contract.hostingDescription).toBeUndefined();
  });

  test("has no additional items and a zero domain count when none are provided", () => {
    const contract = new ContractDetailed(buildContractData());

    expect(contract.additionalItems).toEqual([]);
    expect(contract.additionalItemsTotalPrice.getAmount()).toBe(0);
    expect(contract.domainItemsCount).toBe(0);
  });
});
