import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

import { buildProjectData } from "../../testing/builders/buildProjectData.js";
import { buildSshUserData } from "../../testing/builders/buildSshUserData.js";
import { buildUserData } from "../../testing/builders/buildUserData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  SshUserDetailed,
  SshUserListItem,
  SshUserList,
  SshUser,
} from "./SshUser.js";

afterEach(resetBehaviors);

describe("SshUser reference and delegation", () => {
  test("find delegates and returns a detailed user", async () => {
    const find = vi.fn().mockResolvedValue(buildSshUserData({ id: "ssh-1" }));
    installBehaviors({ sshUser: { find } });
    const result = await SshUser.find("ssh-1");
    expect(find).toHaveBeenCalledWith("ssh-1");
    expect(result).toBeInstanceOf(SshUserDetailed);
    expect(result?.id).toBe("ssh-1");
  });

  test("find returns undefined for a missing user", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sshUser: { find } });
    expect(await SshUser.find("missing")).toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("get and findDetailed return detailed users", async () => {
    const find = vi.fn().mockResolvedValue(buildSshUserData({ id: "ssh-2" }));
    installBehaviors({ sshUser: { find } });
    expect(await SshUser.get("ssh-2")).toBeInstanceOf(SshUserDetailed);
    expect(await SshUser.ofId("ssh-2").findDetailed()).toBeInstanceOf(
      SshUserDetailed,
    );
    expect(find).toHaveBeenNthCalledWith(1, "ssh-2");
    expect(find).toHaveBeenNthCalledWith(2, "ssh-2");
  });

  test("create delegates and returns a reference", async () => {
    const project = Project.ofId("project-id");
    const data = {
      authentication: { password: "secret" },
      description: "new user",
    };
    const create = vi.fn().mockResolvedValue({ id: "ssh-new" });
    installBehaviors({ sshUser: { create } });
    const result = await SshUser.create(project, data);
    expect(create).toHaveBeenCalledWith("project-id", data);
    expect(result).toBeInstanceOf(SshUser);
    expect(result.id).toBe("ssh-new");
  });

  test("update and delete delegate with the reference id", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sshUser: { delete: deleteBehavior, update } });
    const user = SshUser.ofId("ssh-3");
    const data = { description: "updated" };
    await user.update(data);
    await user.delete();
    expect(update).toHaveBeenCalledWith("ssh-3", data);
    expect(deleteBehavior).toHaveBeenCalledWith("ssh-3");
  });
});

describe("SshUser data", () => {
  test("derives key, expiry, default, type, and project properties", () => {
    const expiresAt = "2025-01-01T00:00:00.000Z";
    const user = new SshUserDetailed(
      buildSshUserData({
        publicKeys: [{ key: "ssh-ed25519 AAA", comment: "laptop" }],
        id: "default",
        expiresAt,
      }),
    );
    expect(user.hasPublicKeys).toBe(true);
    expect(user.publicKeys).toHaveLength(1);
    expect(user.expiresAt).toBeInstanceOf(DateTime);
    expect(user.expiresAt?.toMillis()).toBe(
      DateTime.fromISO(expiresAt).toMillis(),
    );
    expect(user.isDefault).toBe(true);
    expect(user.type).toBe("SSH");
    expect(user.project).toBeInstanceOf(Project);
    expect(user.project.id).toBe("project-id");
  });

  test("derives absent optional values", () => {
    const user = new SshUserListItem(
      buildSshUserData({ publicKeys: undefined, expiresAt: undefined }),
    );
    expect(user.hasPublicKeys).toBeFalsy();
    expect(user.publicKeys).toEqual([]);
    expect(user.expiresAt).toBeUndefined();
    expect(user.isDefault).toBeUndefined();
  });

  test("deleteSshKey updates the user without the matching key", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sshUser: { update } });
    const removed = { key: "ssh-ed25519 OLD", comment: "old" };
    const retained = { key: "ssh-ed25519 NEW", comment: "new" };
    const user = new SshUserDetailed(
      buildSshUserData({ publicKeys: [removed, retained], id: "ssh-4" }),
    );
    await user.deleteSshKey(removed);
    expect(update).toHaveBeenCalledWith("ssh-4", { publicKeys: [retained] });
  });
});

describe("SshUser list query", () => {
  test("executes, materializes items, and derives total count", async () => {
    const project = Project.ofId("project-id");
    const query = { limit: 2, skip: 1 };
    const list = vi.fn().mockResolvedValue({
      items: [
        buildSshUserData({ id: "ssh-5" }),
        buildSshUserData({ id: "ssh-6" }),
      ],
      totalCount: 2,
    });
    installBehaviors({ sshUser: { list } });
    const result = await SshUser.query({
      project: project,
      ...query,
    }).execute();
    expect(list).toHaveBeenCalledWith("project-id", query);
    expect(result).toBeInstanceOf(SshUserList);
    expect(result.items.every((item) => item instanceof SshUserListItem)).toBe(
      true,
    );
    expect(result.totalCount).toBe(2);
  });

  test("refine merges queries", async () => {
    const list = vi.fn().mockResolvedValue({ items: [] });
    installBehaviors({ sshUser: { list } });
    await SshUser.query({
      project: Project.ofId("project-id"),
      limit: 5,
    })
      .refine({ skip: 10 })
      .execute();
    expect(list).toHaveBeenCalledWith("project-id", { limit: 5, skip: 10 });
  });
});

describe("SshUser default user", () => {
  test("getDefault builds a common user from the project and the current user", async () => {
    const projectFind = vi.fn().mockResolvedValue(
      buildProjectData({
        createdAt: "2024-02-02T00:00:00.000Z",
        id: "project-7",
      }),
    );
    const userFind = vi
      .fn()
      .mockResolvedValue(buildUserData({ email: "ada@example.com" }));
    installBehaviors({
      project: { find: projectFind },
      user: { find: userFind },
    });

    const result = await SshUser.getDefault("project-7");

    expect(projectFind).toHaveBeenCalledWith("project-7", undefined);
    expect(userFind).toHaveBeenCalledWith("self", undefined);
    expect(result).toBeInstanceOf(SshUser);
    expect(result.userName).toBe("ada@example.com");
    expect(result.project.id).toBe("project-7");
    expect(result.id).toBe("default");
    expect(result.isDefault).toBe(true);
    expect(result.description).toBe("mStudio Benutzer");
    expect(result.active).toBe(true);
    expect(result.hasPassword).toBe(false);
    expect(result.data.createdAt).toBe("2024-02-02T00:00:00.000Z");
  });

  test("getDefault accepts a project reference", async () => {
    const projectFind = vi
      .fn()
      .mockResolvedValue(buildProjectData({ id: "project-8" }));
    installBehaviors({
      user: {
        find: vi
          .fn()
          .mockResolvedValue(buildUserData({ email: "grace@example.com" })),
      },
      project: { find: projectFind },
    });

    const result = await SshUser.getDefault(Project.ofId("project-8"));

    expect(projectFind).toHaveBeenCalledWith("project-8", undefined);
    expect(result.project.id).toBe("project-8");
  });
});

describe("SshUser common variant", () => {
  test("findCommon on a reference delegates and returns the detailed variant", async () => {
    const find = vi.fn().mockResolvedValue(buildSshUserData({ id: "ssh-c1" }));
    installBehaviors({ sshUser: { find } });

    const result = await SshUser.ofId("ssh-c1").findCommon();

    expect(find).toHaveBeenCalledWith("ssh-c1");
    expect(result).toBeInstanceOf(SshUserDetailed);
    expect(result?.id).toBe("ssh-c1");
  });

  test("findCommon on a reference returns undefined when not found", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sshUser: { find } });

    expect(await SshUser.ofId("missing").findCommon()).toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("getCommon on a reference delegates and returns the detailed variant", async () => {
    const find = vi.fn().mockResolvedValue(buildSshUserData({ id: "ssh-c2" }));
    installBehaviors({ sshUser: { find } });

    const result = await SshUser.ofId("ssh-c2").getCommon();

    expect(find).toHaveBeenCalledWith("ssh-c2");
    expect(result).toBeInstanceOf(SshUserDetailed);
  });

  test("getCommon on a reference throws when not found", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sshUser: { find } });

    await expect(SshUser.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon on an already-materialized model returns it without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ sshUser: { find } });
    const detailed = new SshUserDetailed(buildSshUserData({ id: "ssh-c3" }));

    const result = await detailed.findCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already-materialized model returns it without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ sshUser: { find } });
    const listItem = new SshUserListItem(buildSshUserData({ id: "ssh-c4" }));

    const result = await listItem.getCommon();

    expect(result).toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });
});
