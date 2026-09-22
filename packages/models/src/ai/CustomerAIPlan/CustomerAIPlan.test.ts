import { afterEach, describe, expect, it, vi } from "vitest";

import { ContractDetailed } from "../../contract";
import { AggregateMetaData } from "../../common";
import { ReferenceModel } from "../../base";
import { Customer } from "../../customer";
import {
  CustomerAIPlanDetailed,
  CustomerAIPlanListItem,
  CustomerAIPlanCommon,
  CustomerAIPlanList,
  CustomerAIPlan,
} from "./CustomerAIPlan";
import {
  buildCustomerAIPlanData,
  buildContractData,
  installBehaviors,
  resetBehaviors,
} from "../../testing";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  ...(await importOriginal<typeof import("@mittwald/react-ghostmaker")>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("CustomerAIPlan", () => {
  it("finds a plan by customer and plan id", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerAIPlanData());
    installBehaviors({ customerAiPlan: { find } });

    const result = await CustomerAIPlan.find("c-1", "plan-1");

    expect(find).toHaveBeenCalledWith("c-1", "plan-1", undefined, undefined);
    expect(result).toBeInstanceOf(CustomerAIPlanDetailed);
  });

  it("returns undefined when the plan is not found", async () => {
    installBehaviors({
      customerAiPlan: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(CustomerAIPlan.find("c-1", "plan-1")).resolves.toBeUndefined();
  });

  it("throws when getting a missing plan", async () => {
    installBehaviors({
      customerAiPlan: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(CustomerAIPlan.get("c-1", "plan-1")).rejects.toThrow();
  });

  it("exposes dates, usage values, and the customer", () => {
    const detailed = new CustomerAIPlanDetailed(buildCustomerAIPlanData());

    expect(detailed.nextTokenResetDate.isValid).toBe(true);
    expect(typeof detailed.tokens.formattedUsed).toBe("string");
    expect(typeof detailed.tokens.formattedPlanLimit).toBe("string");
    expect(typeof detailed.topUsages[0]?.formattedTokenUsed).toBe("string");
    expect(detailed.customer.id).toBe("customer-id");
    expect(typeof detailed.modelTermsApprovalRequired).toBe("boolean");
  });

  it("reports whether the plan has capacity", () => {
    const withPlan = new CustomerAIPlanDetailed(buildCustomerAIPlanData());
    const withoutPlan = new CustomerAIPlanDetailed(
      buildCustomerAIPlanData({
        rateLimit: { allowedRequestsPerUnit: 0, unit: "minute" },
      }),
    );

    expect(withPlan.hasPlan()).toBe(true);
    expect(withoutPlan.hasPlan()).toBe(false);
  });

  it("delegates accepting model terms for a plan reference", async () => {
    const acceptModelTerms = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerAiPlan: { acceptModelTerms } });

    await CustomerAIPlan.ofId("c-1", "plan-1").acceptModelTerms();

    expect(acceptModelTerms).toHaveBeenCalledWith("c-1");
  });

  it("delegates accepting model terms for a bare customer id", async () => {
    const acceptModelTerms = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerAiPlan: { acceptModelTerms } });

    await CustomerAIPlan.acceptModelTermsForCustomer("c-1");

    expect(acceptModelTerms).toHaveBeenCalledWith("c-1");
  });

  it("delegates updating the plan name", async () => {
    const updateName = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerAiPlan: { updateName } });

    await CustomerAIPlan.ofId("c-1", "plan-1").updateName("new name");

    expect(updateName).toHaveBeenCalledWith("c-1", "plan-1", "new name");
  });

  it("returns undefined when no contract is found", async () => {
    const findContract = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerAiPlan: { findContract } });
    const plan = CustomerAIPlan.ofId("c-1", "plan-1");

    await expect(plan.findContract()).resolves.toBeUndefined();
    expect(findContract).toHaveBeenCalledWith("c-1", "plan-1", undefined);
  });

  it("returns a detailed contract when one is found", async () => {
    const findContract = vi
      .fn()
      .mockResolvedValue(buildContractData({ contractId: "contract-9" }));
    installBehaviors({ customerAiPlan: { findContract } });

    const contract = await CustomerAIPlan.ofId("c-1", "plan-1").findContract();

    expect(findContract).toHaveBeenCalledWith("c-1", "plan-1", undefined);
    expect(contract).toBeInstanceOf(ContractDetailed);
    expect(contract?.id).toBe("contract-9");
  });

  it("gets the contract when one is found", async () => {
    const findContract = vi
      .fn()
      .mockResolvedValue(buildContractData({ contractId: "contract-9" }));
    installBehaviors({ customerAiPlan: { findContract } });

    const contract = await CustomerAIPlan.ofId("c-1", "plan-1").getContract();

    expect(contract).toBeInstanceOf(ContractDetailed);
    expect(contract.id).toBe("contract-9");
  });

  it("throws when getting a missing contract", async () => {
    installBehaviors({
      customerAiPlan: { findContract: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      CustomerAIPlan.ofId("c-1", "plan-1").getContract(),
    ).rejects.toThrow();
  });

  it("preserves the detailed model inheritance chain", () => {
    const detailed = new CustomerAIPlanDetailed(buildCustomerAIPlanData());

    expect(detailed).toBeInstanceOf(CustomerAIPlanDetailed);
    expect(detailed).toBeInstanceOf(CustomerAIPlanCommon);
    expect(detailed).toBeInstanceOf(CustomerAIPlan);
    expect(detailed).toBeInstanceOf(ReferenceModel);
    expect(detailed.data).toBeDefined();
  });

  it("defaults top usages to an empty array when the source omits them", () => {
    const detailed = new CustomerAIPlanDetailed(
      buildCustomerAIPlanData({ topUsages: undefined }),
    );

    expect(detailed.topUsages).toEqual([]);
  });

  it("wires aggregate metadata for cache invalidation", () => {
    expect(CustomerAIPlan.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(CustomerAIPlan.aggregateMetaData.domain).toBe("llmlocksmith");
    expect(CustomerAIPlan.aggregateMetaData.aggregate).toBe("locksmithPlan");
  });
});

describe("CustomerAIPlan common lookups and metadata", () => {
  it("findCommon on a bare reference delegates to find and returns the detailed variant", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerAIPlanData());
    installBehaviors({ customerAiPlan: { find } });

    const result = await CustomerAIPlan.ofId(
      "customer-id",
      "plan-1",
    ).findCommon();

    expect(find).toHaveBeenCalledWith(
      "customer-id",
      "plan-1",
      undefined,
      undefined,
    );
    expect(result).toBeInstanceOf(CustomerAIPlanDetailed);
    expect(result).toBeInstanceOf(CustomerAIPlanCommon);
  });

  it("getCommon on a bare reference returns the common variant when found", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerAIPlanData());
    installBehaviors({ customerAiPlan: { find } });

    const result = await CustomerAIPlan.ofId(
      "customer-id",
      "plan-1",
    ).getCommon();

    expect(result).toBeInstanceOf(CustomerAIPlanCommon);
    expect(result.customer.id).toBe("customer-id");
  });

  it("getCommon on a bare reference throws when the plan is not found", async () => {
    installBehaviors({
      customerAiPlan: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      CustomerAIPlan.ofId("customer-id", "missing").getCommon(),
    ).rejects.toThrow();
  });

  it("does not refetch when an already-common model resolves its common variant", async () => {
    const find = vi.fn();
    installBehaviors({ customerAiPlan: { find } });
    const detailed = new CustomerAIPlanDetailed(buildCustomerAIPlanData());

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("CustomerAIPlan.query", () => {
  it("lists plans for a customer id", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildCustomerAIPlanData({ planId: "plan-1" }),
        buildCustomerAIPlanData({ planId: "plan-2" }),
      ],
      totalCount: 2,
    });
    installBehaviors({ customerAiPlan: { list } });

    const result = await CustomerAIPlan.query("customer-id").execute();

    expect(list).toHaveBeenCalledWith("customer-id", {}, undefined);
    expect(result).toBeInstanceOf(CustomerAIPlanList);
    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toBeInstanceOf(CustomerAIPlanListItem);
    expect(result.totalCount).toBe(2);
  });

  it("lists plans for a Customer instance by extracting its id", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ customerAiPlan: { list } });

    await CustomerAIPlan.query(Customer.ofId("customer-id")).execute();

    expect(list).toHaveBeenCalledWith("customer-id", {}, undefined);
  });

  it("returns the total count without requiring callers to inspect the list", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildCustomerAIPlanData()],
      totalCount: 1,
    });
    installBehaviors({ customerAiPlan: { list } });

    await expect(
      CustomerAIPlan.query("customer-id").getTotalCount(),
    ).resolves.toBe(1);
  });
});
