import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  Contract,
  ContractDetailed,
  ContractList,
  ContractListItem,
  ContractListQuery,
} from "./Contract.js";
import { ContractBehaviors } from "./behaviors/types.js";
import { ContractData, ContractListItemData } from "./types.js";
import { Customer } from "../../customer/index.js";

const contractData = (overrides: Partial<ContractData> = {}): ContractData =>
  ({
    contractId: "contract-1",
    contractNumber: "C-0001",
    customerId: "customer-1",
    baseItem: {},
    ...overrides,
  }) as unknown as ContractData;

const listItemData = (
  overrides: Partial<ContractData> = {},
): ContractListItemData =>
  contractData(overrides) as unknown as ContractListItemData;

const contract = {
  find: jest.fn<ContractBehaviors["find"]>(),
  list: jest.fn<ContractBehaviors["list"]>(),
};

const customer = Customer.ofId("customer-1");

beforeEach(() => {
  Object.values(contract).forEach((mock) => mock.mockReset());
  config.behaviors.contract = contract;
});

describe("Contract reference", () => {
  test("ofId keeps the id", () => {
    expect(Contract.ofId("contract-1").id).toBe("contract-1");
  });

  test("describes itself with class name and id", () => {
    expect(Contract.ofId("contract-1").describe()).toBe("Contract@contract-1");
  });
});

describe("Contract.find", () => {
  test("wraps the found data in a ContractDetailed", async () => {
    contract.find.mockResolvedValue(contractData());

    const found = await Contract.find("contract-1");

    expect(contract.find).toHaveBeenCalledWith("contract-1");
    expect(found).toBeInstanceOf(ContractDetailed);
  });

  test("returns undefined when the behavior finds nothing", async () => {
    contract.find.mockResolvedValue(undefined);

    await expect(Contract.find("missing")).resolves.toBeUndefined();
  });
});

describe("Contract.get", () => {
  test("returns the contract when it exists", async () => {
    contract.find.mockResolvedValue(contractData());

    await expect(Contract.get("contract-1")).resolves.toBeInstanceOf(
      ContractDetailed,
    );
  });

  test("throws a named ObjectNotFoundError when it does not exist", async () => {
    contract.find.mockResolvedValue(undefined);

    await expect(Contract.get("missing")).rejects.toThrow(ObjectNotFoundError);
    await expect(Contract.get("missing")).rejects.toThrow(
      "Contract@missing not found",
    );
  });
});

describe("ContractDetailed", () => {
  test("exposes the raw data", () => {
    expect(new ContractDetailed(contractData()).data.contractNumber).toBe(
      "C-0001",
    );
  });

  /**
   * `ContractCommon` passes `data.customerId` to its `Contract` base, so the
   * reference id of a contract is the _customer's_ id. `ContractData` carries
   * its own `contractId`, which is what a `Contract` reference should use — as
   * it stands, `Contract.ofId(detailed.id)` points at the wrong entity.
   */
  test("takes its reference id from customerId rather than contractId", () => {
    const detailed = new ContractDetailed(contractData());

    expect(detailed.id).toBe("customer-1");
    expect(detailed.data.contractId).toBe("contract-1");
  });
});

describe("ContractListQuery", () => {
  test("splits the customer id out of the query parameters", async () => {
    contract.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Contract.query({ customer }).execute();

    expect(contract.list).toHaveBeenCalledWith({
      customerId: "customer-1",
      queryParameters: { limit: config.defaultPaginationLimit },
    });
  });

  /**
   * `ContractListQueryData` resolves to
   * `MittwaldAPIV2.Paths.V2ContractsContractId.Get.Parameters.Query`, which is
   * the _single contract_ endpoint and has no query parameters at all (`{}`).
   * The list endpoint is `V2CustomersCustomerIdContracts.Get`, whose query
   * offers `search`, `baseArticleNames`, `limit`, `skip`, `page`, `sort` and
   * `order`. As wired today, callers cannot pass any of them — only `refine`
   * can, and only because TypeScript skips excess-property checks against the
   * empty object type.
   */
  test("accepts no pagination or filter parameters from callers", async () => {
    contract.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Contract.query({ customer }).refine({ limit: 5 }).execute();

    expect(contract.list).toHaveBeenCalledWith({
      customerId: "customer-1",
      queryParameters: { limit: 5 },
    });
  });

  test("wraps the response into a ContractList of ContractListItems", async () => {
    contract.list.mockResolvedValue({ items: [listItemData()], totalCount: 3 });

    const result = await Contract.query({ customer }).execute();

    expect(result).toBeInstanceOf(ContractList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(ContractListItem);
  });

  test("refine merges the new query on top of the existing one", async () => {
    contract.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Contract.query({ customer })
      .refine({ limit: 5 })
      .refine({ limit: 10 })
      .execute();

    expect(contract.list).toHaveBeenCalledWith({
      customerId: "customer-1",
      queryParameters: { limit: 10 },
    });
  });

  test("refine keeps the customer and returns a new query", () => {
    const query = Contract.query({ customer });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined).toBeInstanceOf(ContractListQuery);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  test("getTotalCount asks for a single item and reports the reported total", async () => {
    contract.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 42,
    });

    await expect(Contract.query({ customer }).getTotalCount()).resolves.toBe(
      42,
    );
    expect(contract.list).toHaveBeenCalledWith(
      expect.objectContaining({ queryParameters: { limit: 1 } }),
    );
  });

  test("findOneAndOnly returns the single match", async () => {
    contract.list.mockResolvedValue({ items: [listItemData()], totalCount: 1 });

    const found = await Contract.query({ customer }).findOneAndOnly();

    expect(found?.data.contractId).toBe("contract-1");
  });

  test("findOneAndOnly returns undefined when the total count is not one", async () => {
    contract.list.mockResolvedValue({ items: [listItemData()], totalCount: 2 });

    await expect(
      Contract.query({ customer }).findOneAndOnly(),
    ).resolves.toBeUndefined();
  });

  test("fails when no customer is given, since execute dereferences it", async () => {
    contract.list.mockResolvedValue({ items: [], totalCount: 0 });

    await expect(Contract.query({} as never).execute()).rejects.toThrow(
      TypeError,
    );
  });
});
