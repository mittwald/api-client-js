import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { DateTime } from "luxon";

import { buildUserData } from "../../testing/builders/buildUserData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { UserDetailed, UserCommon, User } from "./User.js";
import { AggregateMetaData } from "../../common/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import { File } from "../../file/index.js";

afterEach(resetBehaviors);

test("find/get map found and missing users", async () => {
  const find = vi
    .fn()
    .mockResolvedValueOnce(buildUserData({ userId: "u-1" }))
    .mockResolvedValueOnce(buildUserData({ userId: "u-2" }))
    .mockResolvedValueOnce(undefined)
    .mockResolvedValueOnce(undefined);
  installBehaviors({ user: { find } });
  const found = await User.find("u-1");
  expect(find).toHaveBeenCalledWith("u-1", undefined);
  expect(found).toBeInstanceOf(UserDetailed);
  expect(found?.id).toBe("u-1");
  expect(await User.get("u-2")).toBeInstanceOf(UserDetailed);
  expect(await User.find("missing")).toBeUndefined();
  await expect(User.get("missing")).rejects.toBeInstanceOf(ObjectNotFoundError);
});

test("self and aggregate references expose their ids", () => {
  expect(User.self).toBeInstanceOf(User);
  expect(User.self.id).toBe("self");
  expect(User.findAggregate("u-1")).toEqual(
    expect.objectContaining({ id: "u-1" }),
  );
  expect(User.findAggregate()).toBeUndefined();
});

describe("derived user data", () => {
  test("maps personal information, avatar, and registration date", () => {
    const recent = DateTime.now().minus({ days: 1 }).toISO();
    const user = new UserDetailed(
      buildUserData({
        person: { firstName: "First", lastName: "Last", title: "ms" },
        email: "ada@example.test",
        phoneNumber: "+49123",
        registeredAt: recent,
        avatarRef: "file-1",
      }),
    );
    expect(user.fullName).toBe("First Last");
    expect(user.firstName).toBe("First");
    expect(user.lastName).toBe("Last");
    expect(user.email).toBe("ada@example.test");
    expect(user.phoneNumber).toBe("+49123");
    expect(user.title).toBe("ms");
    expect(user.avatar).toBeInstanceOf(File);
    expect(user.isNew).toBe(true);
    expect(user.registeredAt).toBeInstanceOf(DateTime);
  });

  test("handles absent avatars and old registrations", () => {
    const user = new UserDetailed(
      buildUserData({ registeredAt: "2000-01-01T00:00:00.000Z" }),
    );
    expect(user.avatar).toBeUndefined();
    expect(user.isNew).toBe(false);
  });

  test("findRole reads the matching project membership", async () => {
    const user = new UserDetailed(
      buildUserData({
        projectMemberships: {
          "p-1": {
            memberSince: "2024-01-01T00:00:00.000Z",
            inherited: false,
            role: "owner",
          },
        },
      }),
    );
    expect(await user.findRole(Project.ofId("p-1"))).toBe("owner");
  });

  test("leaves optional contact fields undefined when absent", () => {
    const user = new UserDetailed(buildUserData());
    expect(user.email).toBeUndefined();
    expect(user.phoneNumber).toBeUndefined();
    expect(user.title).toBeUndefined();
  });

  test("findRole yields undefined when the project membership is absent", async () => {
    const user = new UserDetailed(buildUserData());
    expect(await user.findRole(Project.ofId("p-1"))).toBeUndefined();
  });
});

describe("common variant and idempotency", () => {
  test("findCommon resolves a reference into the common variant", async () => {
    const find = vi.fn().mockResolvedValue(buildUserData({ userId: "u-c" }));
    installBehaviors({ user: { find } });
    const common = await User.ofId("u-c").findCommon();
    expect(find).toHaveBeenCalledWith("u-c", undefined);
    expect(common).toBeInstanceOf(UserCommon);
    expect(common?.id).toBe("u-c");
  });

  test("findCommon yields undefined and getCommon throws for missing users", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(undefined)
      .mockResolvedValueOnce(undefined);
    installBehaviors({ user: { find } });
    expect(await User.ofId("missing").findCommon()).toBeUndefined();
    await expect(User.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("getCommon resolves a reference into the common variant", async () => {
    const find = vi.fn().mockResolvedValue(buildUserData({ userId: "u-g" }));
    installBehaviors({ user: { find } });
    const common = await User.ofId("u-g").getCommon();
    expect(common).toBeInstanceOf(UserCommon);
    expect(common.id).toBe("u-g");
  });

  test("findCommon/getCommon return a materialized model without another behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ user: { find } });
    const user = new UserDetailed(buildUserData({ userId: "u-1" }));
    expect(await user.findCommon()).toBe(user);
    expect(await user.getCommon()).toBe(user);
    expect(find).not.toHaveBeenCalled();
  });
});

test("aggregateMetaData nails the cache identity", () => {
  expect(User.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
  expect(User.aggregateMetaData).toEqual(
    expect.objectContaining({ aggregate: "user", domain: "user" }),
  );
  expect(User.findAggregate("u-1")).toEqual({
    aggregate: "user",
    domain: "user",
    id: "u-1",
  });
});

test("preserves the detailed user composition chain", () => {
  const user = new UserDetailed(buildUserData());
  expect(user).toBeInstanceOf(UserCommon);
  expect(user).toBeInstanceOf(User);
  expect(user).toBeInstanceOf(ReferenceModel);
  expect(user.data).toBeDefined();
});
