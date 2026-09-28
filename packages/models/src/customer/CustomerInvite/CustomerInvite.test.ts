import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import {
  buildCustomerInviteListItemData,
  buildCustomerInviteData,
} from "../../testing/builders/buildCustomerInviteData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Customer } from "../Customer/index.js";
import {
  CustomerInviteListQuery,
  CustomerInviteDetailed,
  CustomerInviteListItem,
  CustomerInviteList,
  CustomerInvite,
} from "./CustomerInvite.js";

afterEach(resetBehaviors);

describe("CustomerInvite delegation", () => {
  test("find returns a detailed invite", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerInviteData());
    installBehaviors({ customerInvite: { find } });

    const result = await CustomerInvite.find("invite-id");

    expect(find).toHaveBeenCalledWith("invite-id");
    expect(result).toBeInstanceOf(CustomerInviteDetailed);
  });

  test("find returns undefined for a missing invite", async () => {
    installBehaviors({
      customerInvite: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(CustomerInvite.find("missing")).resolves.toBeUndefined();
  });

  test("get rejects for a missing invite", async () => {
    installBehaviors({
      customerInvite: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(CustomerInvite.get("missing")).rejects.toThrow();
  });

  test("create delegates with the customer id", async () => {
    const create = vi.fn().mockResolvedValue({ id: "created-id" });
    installBehaviors({ customerInvite: { create } });
    const data = {
      mailAddress: "invitee@example.com",
      role: "member" as const,
      message: "Join us",
    };

    const result = await CustomerInvite.create(
      Customer.ofId("customer-id"),
      data,
    );

    expect(create).toHaveBeenCalledWith("customer-id", data);
    expect(result).toBeInstanceOf(CustomerInvite);
    expect(result.id).toBe("created-id");
  });

  test("delete delegates with the invite id", async () => {
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerInvite: { delete: deleteBehavior } });

    await CustomerInvite.ofId("invite-id").delete();

    expect(deleteBehavior).toHaveBeenCalledWith("invite-id");
  });

  test("acceptWithToken resolves and accepts the invite", async () => {
    const getByToken = vi.fn().mockResolvedValue({ id: "invite-id" });
    const accept = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerInvite: { getByToken, accept } });

    await CustomerInvite.acceptWithToken("token");

    expect(getByToken).toHaveBeenCalledWith("token");
    expect(accept).toHaveBeenCalledWith("invite-id", "token");
  });
});

describe("CustomerInvite common variant", () => {
  test("findCommon on a reference delegates to find and returns a detailed invite", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerInviteData());
    installBehaviors({ customerInvite: { find } });

    const result = await CustomerInvite.ofId("invite-id").findCommon();

    expect(find).toHaveBeenCalledWith("invite-id");
    expect(result).toBeInstanceOf(CustomerInviteDetailed);
  });

  test("findCommon resolves undefined when the reference is not found", async () => {
    installBehaviors({
      customerInvite: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      CustomerInvite.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon rejects when the reference is not found", async () => {
    installBehaviors({
      customerInvite: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(CustomerInvite.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon on an already materialized model returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ customerInvite: { find } });
    const detailed = new CustomerInviteDetailed(buildCustomerInviteData());

    const result = await detailed.findCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already materialized model returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ customerInvite: { find } });
    const detailed = new CustomerInviteDetailed(buildCustomerInviteData());

    const result = await detailed.getCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("CustomerInvite aggregate metadata", () => {
  test("carries the customer-invite aggregate identity", () => {
    expect(CustomerInvite.aggregateMetaData).toEqual(
      expect.objectContaining({
        aggregate: "customerinvite",
        domain: "membership",
      }),
    );
  });
});

describe("CustomerInvite data", () => {
  test("leaves the message undefined when absent", () => {
    const invite = new CustomerInviteDetailed(
      buildCustomerInviteData({ message: undefined }),
    );

    expect(invite.message).toBeUndefined();
  });
});

describe("CustomerInvite lists", () => {
  test("listIncoming materializes list items", async () => {
    installBehaviors({
      customerInvite: {
        listIncoming: vi.fn().mockResolvedValue({
          items: [buildCustomerInviteListItemData()],
        }),
      },
    });

    const result = await CustomerInvite.listIncoming();

    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(CustomerInviteListItem);
  });

  test("query delegates and materializes a list", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildCustomerInviteListItemData({ id: "i-1" })],
      totalCount: 1,
    });
    installBehaviors({ customerInvite: { list } });
    const customer = Customer.ofId("customer-id");
    const query = CustomerInvite.query(customer);

    const result = await query.execute();

    expect(result).toBeInstanceOf(CustomerInviteList);
    expect(result).toBeInstanceOf(CustomerInviteListQuery);
    expect(result.items[0]).toBeInstanceOf(CustomerInviteListItem);
    expect(list).toHaveBeenCalledWith("customer-id", {});
    expect(result.totalCount).toBe(1);
  });
});
