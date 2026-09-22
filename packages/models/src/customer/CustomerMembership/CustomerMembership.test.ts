import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import {
  buildCustomerMembershipListItemData,
  buildCustomerMembershipData,
} from "../../testing/builders/buildCustomerMembershipData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Customer } from "../Customer/index.js";
import { User } from "../../user/index.js";
import {
  CustomerMembershipListQuery,
  CustomerMembershipDetailed,
  CustomerMembershipListItem,
  CustomerMembershipList,
  CustomerMembership,
} from "./CustomerMembership.js";

afterEach(resetBehaviors);

const item = (
  overrides?: Parameters<typeof buildCustomerMembershipListItemData>[0],
) =>
  new CustomerMembershipListItem(
    buildCustomerMembershipListItemData(overrides),
  );

describe("CustomerMembership delegation", () => {
  test("find returns a detailed membership", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerMembershipData());
    installBehaviors({ customerMembership: { find } });

    const result = await CustomerMembership.find("membership-id");

    expect(find).toHaveBeenCalledWith("membership-id", undefined);
    expect(result).toBeInstanceOf(CustomerMembershipDetailed);
  });

  test("find returns undefined for a missing membership", async () => {
    installBehaviors({
      customerMembership: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(CustomerMembership.find("missing")).resolves.toBeUndefined();
  });

  test("remove delegates with the membership id", async () => {
    const remove = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerMembership: { remove } });

    await CustomerMembership.ofId("membership-id").remove();

    expect(remove).toHaveBeenCalledWith("membership-id");
  });
});

describe("CustomerMembership common variant", () => {
  test("findCommon on a reference delegates to find and returns a detailed membership", async () => {
    const find = vi.fn().mockResolvedValue(buildCustomerMembershipData());
    installBehaviors({ customerMembership: { find } });

    const result = await CustomerMembership.ofId("membership-id").findCommon();

    expect(find).toHaveBeenCalledWith("membership-id", undefined);
    expect(result).toBeInstanceOf(CustomerMembershipDetailed);
  });

  test("findCommon resolves undefined when the reference is not found", async () => {
    installBehaviors({
      customerMembership: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      CustomerMembership.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon rejects when the reference is not found", async () => {
    installBehaviors({
      customerMembership: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      CustomerMembership.ofId("missing").getCommon(),
    ).rejects.toThrow();
  });

  test("findCommon on an already materialized model returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ customerMembership: { find } });
    const listItem = item();

    const result = await listItem.findCommon();

    expect(result).toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already materialized model returns itself without another call", async () => {
    const find = vi.fn();
    installBehaviors({ customerMembership: { find } });
    const listItem = item();

    const result = await listItem.getCommon();

    expect(result).toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });

  test("leaves the avatar undefined when no avatar ref is present", () => {
    expect(item().avatar).toBeUndefined();
  });
});

describe("CustomerMembership list query", () => {
  test("delegates and materializes list data", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildCustomerMembershipListItemData({ id: "m-1" })],
      totalCount: 1,
    });
    installBehaviors({ customerMembership: { list } });
    const query = CustomerMembership.query(Customer.ofId("customer-id"));

    const result = await query.execute();

    expect(result).toBeInstanceOf(CustomerMembershipList);
    expect(result).toBeInstanceOf(CustomerMembershipListQuery);
    expect(result.items[0]).toBeInstanceOf(CustomerMembershipListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith("customer-id", {});
  });
});

describe("CustomerMembership data", () => {
  test("exposes derived values", () => {
    const membership = item({
      expiresAt: "2024-03-01T00:00:00.000Z",
      userId: "user-2",
      role: "owner",
    });

    expect(membership.fullName).toBe("Grace Hopper");
    expect(membership.role).toBe("owner");
    expect(membership.expiresAt).toBeInstanceOf(DateTime);
    expect(membership.user).toBeInstanceOf(User);
    expect(membership.user.id).toBe("user-2");
  });

  test("leaves expiresAt undefined when absent", () => {
    expect(item().expiresAt).toBeUndefined();
  });
});

describe("CustomerMembership guards", () => {
  test("identifies the last active owner", () => {
    const owner = item({ role: "owner", id: "owner" });

    expect(CustomerMembership.memberIsLastOwner([owner], owner)).toBe(true);
    expect(
      CustomerMembership.memberIsLastOwner(
        [owner, item({ role: "owner", id: "other" })],
        owner,
      ),
    ).toBe(false);
    expect(
      CustomerMembership.memberIsLastOwner([item()], item()),
    ).toBeUndefined();
    const expiringOwner = item({
      expiresAt: "2024-03-01T00:00:00.000Z",
      id: "expiring",
      role: "owner",
    });
    expect(
      CustomerMembership.memberIsLastOwner([expiringOwner], expiringOwner),
    ).toBeUndefined();
  });

  test("identifies the own membership", () => {
    const own = item({ id: "own" });

    expect(CustomerMembership.memberIsOwnMember(own, item({ id: "own" }))).toBe(
      true,
    );
    expect(
      CustomerMembership.memberIsOwnMember(own, item({ id: "other" })),
    ).toBe(false);
  });

  test("allows an owner to edit and remove another non-last owner", () => {
    const own = item({ role: "owner", id: "own" });
    const other = item({ role: "owner", id: "other" });
    const list = [own, other];

    expect(CustomerMembership.canEditMember(own, other, list)).toBe(true);
    expect(CustomerMembership.canRemoveMember(own, other, list)).toBe(true);
  });

  test("prevents editing and removal without the required conditions", () => {
    const own = item({ role: "owner", id: "own" });
    const lastOwner = item({ role: "owner", id: "last" });
    const member = item({ role: "member", id: "member" });

    expect(
      CustomerMembership.canEditMember(member, lastOwner, [lastOwner]),
    ).toBe(false);
    expect(CustomerMembership.canRemoveMember(own, own, [own, lastOwner])).toBe(
      false,
    );
    expect(CustomerMembership.canEditMember(own, lastOwner, [lastOwner])).toBe(
      false,
    );
    expect(
      CustomerMembership.canRemoveMember(own, lastOwner, [lastOwner]),
    ).toBe(false);
  });

  test("allows the own member to leave when not the last owner", () => {
    const own = item({ role: "owner", id: "own" });
    const other = item({ role: "owner", id: "other" });

    expect(CustomerMembership.canLeaveCustomer(own, own, [own, other])).toBe(
      true,
    );
    expect(CustomerMembership.canLeaveCustomer(own, other, [own, other])).toBe(
      false,
    );
    expect(CustomerMembership.canLeaveCustomer(own, own, [own])).toBe(false);
  });
});
