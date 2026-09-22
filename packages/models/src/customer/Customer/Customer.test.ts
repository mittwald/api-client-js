import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildContractPartnerData } from "../../testing/builders/buildContractPartnerData.js";
import { customerPermissions } from "../customerPermissions.js";
import { ContractPartner } from "../ContractPartner/index.js";
import {
  buildCustomerListItemData,
  buildCustomerData,
} from "../../testing/builders/buildCustomerData.js";
import { config } from "../../config/config.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  CustomerDetailed,
  CustomerListItem,
  CustomerList,
  Customer,
} from "./Customer.js";

afterEach(resetBehaviors);

describe("Customer delegation", () => {
  test("find returns a detailed customer", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerData());
    installBehaviors({ customer: { find } });

    const result = await Customer.find("customer-id");

    expect(find).toHaveBeenCalledWith("customer-id", undefined);
    expect(result).toBeInstanceOf(CustomerDetailed);
  });

  test("find returns undefined for a missing customer", async () => {
    installBehaviors({
      customer: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Customer.find("missing")).resolves.toBeUndefined();
  });

  test("create delegates and returns a reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "created-id" });
    installBehaviors({ customer: { create } });

    const result = await Customer.create({ name: "Created" });

    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({ name: "Created" }),
    );
    expect(result).toBeInstanceOf(Customer);
    expect(result.id).toBe("created-id");
  });

  test("create maps an owner phone number to the API shape", async () => {
    const create = vi.fn().mockResolvedValue({ id: "created-id" });
    installBehaviors({ customer: { create } });
    const owner = {
      address: buildContractPartnerData().address,
      salutation: "other" as const,
      phoneNumber: "+49 111",
    };

    await Customer.create({ name: "Created", owner });

    expect(create).toHaveBeenCalledWith(
      expect.objectContaining({
        owner: expect.objectContaining({ phoneNumbers: ["+49 111"] }),
      }),
    );
  });

  test("update delegates with the customer id", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customer: { update } });

    await Customer.ofId("customer-id").update({ name: "Updated" });

    expect(update).toHaveBeenCalledWith(
      "customer-id",
      expect.objectContaining({ name: "Updated" }),
    );
  });

  test("renaming preserves the contract partner Leitweg ID", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customer: { update } });
    const customer = new CustomerDetailed(
      buildCustomerData({ owner: buildContractPartnerData() }),
    );

    await customer.updateName("Renamed");

    expect(update).toHaveBeenCalledWith(
      "customer-id",
      expect.objectContaining({
        owner: expect.objectContaining({ leitwegId: "04011000-12345-67" }),
      }),
    );
  });

  test("renaming preserves the purchase order reference", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customer: { update } });
    const customer = new CustomerDetailed(
      buildCustomerData({
        owner: buildContractPartnerData({
          purchaseOrderReference: "PO-12345",
          leitwegId: undefined,
        }),
      }),
    );

    await customer.updateName("Renamed");

    expect(update).toHaveBeenCalledWith(
      "customer-id",
      expect.objectContaining({
        owner: expect.objectContaining({
          purchaseOrderReference: "PO-12345",
        }),
      }),
    );
  });

  test("delete delegates with the customer id", async () => {
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customer: { delete: deleteBehavior } });

    await Customer.ofId("customer-id").delete();

    expect(deleteBehavior).toHaveBeenCalledWith("customer-id");
  });
});

describe("Customer common variant", () => {
  test("findCommon on a reference delegates to find and returns a common variant", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerData());
    installBehaviors({ customer: { find } });

    const result = await Customer.ofId("customer-id").findCommon();

    expect(find).toHaveBeenCalledWith("customer-id", undefined);
    expect(result).toBeInstanceOf(CustomerDetailed);
  });

  test("findCommon resolves undefined when the reference is not found", async () => {
    installBehaviors({
      customer: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      Customer.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon on a reference delegates and returns a common variant", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerData());
    installBehaviors({ customer: { find } });

    const result = await Customer.ofId("customer-id").getCommon();

    expect(result).toBeInstanceOf(CustomerDetailed);
  });

  test("getCommon rejects when the reference is not found", async () => {
    installBehaviors({
      customer: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Customer.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon on an already materialized model returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ customer: { find } });
    const detailed = new CustomerDetailed(buildCustomerData());

    const result = await detailed.findCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already materialized model returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ customer: { find } });
    const detailed = new CustomerDetailed(buildCustomerData());

    const result = await detailed.getCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("leaves avatar, suspension and deletion locks undefined when absent", () => {
    const customer = new CustomerDetailed(buildCustomerData());

    expect(customer.avatar).toBeUndefined();
    expect(customer.suspendedSince).toBeUndefined();
    expect(customer.deletionProhibitedBy).toBeUndefined();
  });
});

describe("Customer aggregate metadata", () => {
  test("carries the customer aggregate identity", () => {
    expect(Customer.aggregateMetaData).toEqual(
      expect.objectContaining({ aggregate: "customer", domain: "customer" }),
    );
  });

  test("findAggregate wires the id into the aggregate metadata", () => {
    expect(Customer.findAggregate("customer-id")).toEqual({
      aggregate: "customer",
      domain: "customer",
      id: "customer-id",
    });
    expect(Customer.findAggregate()).toBeUndefined();
  });
});

describe("Customer data", () => {
  test("exposes derived customer values", () => {
    const owner = buildContractPartnerData();
    const customer = new CustomerDetailed(
      buildCustomerData({
        activeSuspension: { createdAt: "2024-02-01T00:00:00.000Z" },
        levelOfUndeliverableDunningNotice: "first",
        executingUserRoles: ["owner"],
        name: "Named",
        owner,
      }),
    );

    expect(customer.name).toBe("Named");
    expect(customer.contractPartner).toBeInstanceOf(ContractPartner);
    expect(customer.ownRole).toBe("owner");
    expect(customer.undeliverableDunningNotice).toBe(true);
    expect(customer.suspendedSince).toBeInstanceOf(DateTime);
  });

  test("uses fallbacks when optional derived data is absent", () => {
    const customer = new CustomerDetailed(buildCustomerData());

    expect(customer.contractPartner).toBeUndefined();
    expect(customer.ownRole).toBe("notset");
    expect(customer.undeliverableDunningNotice).toBe(false);
  });

  test("checks permissions against the customer's role", () => {
    expect(customerPermissions.deleteCustomer).toEqual(["owner"]);
    const owner = new CustomerDetailed(
      buildCustomerData({ executingUserRoles: ["owner"] }),
    );
    const member = new CustomerDetailed(
      buildCustomerData({ executingUserRoles: ["member"] }),
    );

    expect(owner.hasPermission("deleteCustomer")).toBe(true);
    expect(member.hasPermission("deleteCustomer")).toBe(false);
  });
});

describe("Customer list query", () => {
  test("applies pagination, sorts items, and materializes the list", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildCustomerListItemData({ customerId: "c-2", name: "Zeta" }),
        buildCustomerListItemData({ customerId: "c-1", name: "Alpha" }),
      ],
      totalCount: 2,
    });
    installBehaviors({ customer: { list } });

    const result = await Customer.query().execute();

    expect(result).toBeInstanceOf(CustomerList);
    expect(result.items.every((item) => item instanceof CustomerListItem)).toBe(
      true,
    );
    expect(result.items.map((item) => item.name)).toEqual(["Alpha", "Zeta"]);
    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: config.defaultPaginationLimit }),
    );
  });
});
