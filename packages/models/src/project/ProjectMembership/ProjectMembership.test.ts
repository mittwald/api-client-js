import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildProjectMembershipData } from "../../testing/builders/buildProjectMembershipData";
import { installBehaviors, resetBehaviors } from "../../testing";
import { Project } from "../Project";
import { File } from "../../file";
import { User } from "../../user";
import {
  ProjectMembershipDetailed,
  ProjectMembershipListItem,
  ProjectMembershipList,
  ProjectMembership,
} from "./ProjectMembership";

afterEach(resetBehaviors);

describe("ProjectMembership references and delegation", () => {
  test("find delegates and materializes a detailed membership", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildProjectMembershipData({ id: "m-1" }));
    installBehaviors({ projectMembership: { find } });

    const result = await ProjectMembership.find("m-1");

    expect(find).toHaveBeenCalledWith("m-1", undefined);
    expect(result).toBeInstanceOf(ProjectMembershipDetailed);
    expect(result?.id).toBe("m-1");
  });

  test("find maps a missing membership to undefined", async () => {
    installBehaviors({
      projectMembership: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(ProjectMembership.find("missing")).resolves.toBeUndefined();
  });

  test("get returns a detailed membership and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildProjectMembershipData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ projectMembership: { find } });

    await expect(
      ProjectMembership.get("membership-id"),
    ).resolves.toBeInstanceOf(ProjectMembershipDetailed);
    await expect(ProjectMembership.get("missing")).rejects.toThrow();
  });

  test("findOwn and getOwn delegate with the project id", async () => {
    const findOwn = vi
      .fn()
      .mockResolvedValue(buildProjectMembershipData({ projectId: "p-1" }));
    installBehaviors({ projectMembership: { findOwn } });
    const project = Project.ofId("p-1");

    const found = await ProjectMembership.findOwn(project);
    const gotten = await ProjectMembership.getOwn(project);

    expect(findOwn).toHaveBeenNthCalledWith(1, "p-1");
    expect(findOwn).toHaveBeenNthCalledWith(2, "p-1");
    expect(found).toBeInstanceOf(ProjectMembershipDetailed);
    expect(gotten).toBeInstanceOf(ProjectMembershipDetailed);
  });

  test("getOwn throws when the membership is missing", async () => {
    installBehaviors({
      projectMembership: { findOwn: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ProjectMembership.getOwn(Project.ofId("p-1")),
    ).rejects.toThrow();
  });

  test("remove delegates with the membership id", async () => {
    const remove = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ projectMembership: { remove } });

    await ProjectMembership.ofId("m-1").remove();

    expect(remove).toHaveBeenCalledWith("m-1");
  });
});

describe("ProjectMembership common resolution and idempotency", () => {
  test("findCommon delegates from a reference and returns the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildProjectMembershipData({ id: "m-1" }));
    installBehaviors({ projectMembership: { find } });

    const result = await ProjectMembership.ofId("m-1").findCommon();

    expect(find).toHaveBeenCalledWith("m-1", undefined);
    expect(result).toBeInstanceOf(ProjectMembershipDetailed);
    expect(result?.id).toBe("m-1");
  });

  test("findCommon maps a missing reference to undefined", async () => {
    installBehaviors({
      projectMembership: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ProjectMembership.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon resolves the common variant and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildProjectMembershipData({ id: "m-2" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ projectMembership: { find } });

    await expect(
      ProjectMembership.ofId("m-2").getCommon(),
    ).resolves.toBeInstanceOf(ProjectMembershipDetailed);
    await expect(
      ProjectMembership.ofId("missing").getCommon(),
    ).rejects.toThrow();
  });

  test("findCommon and getCommon are idempotent on a materialized membership", async () => {
    const find = vi.fn();
    installBehaviors({ projectMembership: { find } });
    const item = new ProjectMembershipListItem(
      buildProjectMembershipData({ id: "m-1" }),
    );

    expect(await item.findCommon()).toBe(item);
    expect(await item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("ProjectMembership data and updates", () => {
  test("omits the expiration date when the source data is absent", () => {
    const membership = new ProjectMembershipListItem(
      buildProjectMembershipData(),
    );

    expect(membership.expiresAt).toBeUndefined();
  });

  test("exposes values, dates, and related references", () => {
    const membership = new ProjectMembershipListItem(
      buildProjectMembershipData({
        expiresAt: "2025-01-01T00:00:00.000Z",
        avatarRef: "avatar-id",
        firstName: "Grace",
        lastName: "Hopper",
        role: "emailadmin",
        projectId: "p-1",
        inherited: true,
        userId: "u-1",
      }),
    );

    expect(membership.user).toBeInstanceOf(User);
    expect(membership.user.id).toBe("u-1");
    expect(membership.role).toBe("emailadmin");
    expect(membership.inherited).toBe(true);
    expect(membership.fullName).toBe("Grace Hopper");
    expect(membership.expiresAt).toBeInstanceOf(DateTime);
    expect(membership.expiresAt?.isValid).toBe(true);
    expect(membership.avatar).toBeInstanceOf(File);
    expect(membership.avatar?.id).toBe("avatar-id");
    expect(membership.project).toBeInstanceOf(Project);
    expect(membership.project.id).toBe("p-1");
    expect(
      new ProjectMembershipListItem(buildProjectMembershipData()).avatar,
    ).toBeUndefined();
  });

  test("updateRole delegates with the new role", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ projectMembership: { update } });
    const membership = new ProjectMembershipListItem(
      buildProjectMembershipData({ role: "owner" }),
    );

    await membership.updateRole("external");

    expect(update).toHaveBeenCalledWith(
      "membership-id",
      expect.objectContaining({ role: "external" }),
    );
  });

  test("updateExpirationDate delegates with the date and current role", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ projectMembership: { update } });
    const membership = new ProjectMembershipListItem(
      buildProjectMembershipData({ role: "emailadmin" }),
    );
    const expiresAt = "2025-06-01T00:00:00.000Z";

    await membership.updateExpirationDate(expiresAt);

    expect(update).toHaveBeenCalledWith(
      "membership-id",
      expect.objectContaining({ role: "emailadmin", expiresAt }),
    );
  });
});

describe("ProjectMembership list query", () => {
  test("delegates with the project id and materializes the result", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildProjectMembershipData()],
      totalCount: 1,
    });
    installBehaviors({ projectMembership: { list } });
    const project = Project.ofId("p-1");

    const result = await ProjectMembership.query(project).execute();

    expect(result).toBeInstanceOf(ProjectMembershipList);
    expect(result.items[0]).toBeInstanceOf(ProjectMembershipListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith("p-1", expect.any(Object));
  });

  test("getTotalCount requests one item and returns the total", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 17, items: [] });
    installBehaviors({ projectMembership: { list } });

    const result = await ProjectMembership.query(
      Project.ofId("p-1"),
    ).getTotalCount();

    expect(result).toBe(17);
    expect(list).toHaveBeenCalledWith(
      "p-1",
      expect.objectContaining({ limit: 1 }),
    );
  });
});
