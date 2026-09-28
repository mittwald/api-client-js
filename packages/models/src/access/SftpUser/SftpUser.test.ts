import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

import { buildSftpUserData } from "../../testing/builders/buildSftpUserData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  SftpUserDetailed,
  SftpUserListItem,
  SftpUserList,
  SftpUser,
} from "./SftpUser.js";

afterEach(resetBehaviors);

describe("SftpUser reference and delegation", () => {
  test("find delegates and returns a detailed user", async () => {
    const find = vi.fn().mockResolvedValue(buildSftpUserData({ id: "sftp-1" }));
    installBehaviors({ sftpUser: { find } });

    const result = await SftpUser.find("sftp-1");

    expect(find).toHaveBeenCalledWith("sftp-1");
    expect(result).toBeInstanceOf(SftpUserDetailed);
    expect(result?.id).toBe("sftp-1");
  });

  test("find returns undefined for a missing user", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sftpUser: { find } });

    expect(await SftpUser.find("missing")).toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("get returns a detailed user", async () => {
    const find = vi.fn().mockResolvedValue(buildSftpUserData({ id: "sftp-2" }));
    installBehaviors({ sftpUser: { find } });

    const result = await SftpUser.get("sftp-2");

    expect(find).toHaveBeenCalledWith("sftp-2");
    expect(result).toBeInstanceOf(SftpUserDetailed);
  });

  test("findDetailed delegates with the reference id", async () => {
    const find = vi.fn().mockResolvedValue(buildSftpUserData({ id: "sftp-3" }));
    installBehaviors({ sftpUser: { find } });

    const result = await SftpUser.ofId("sftp-3").findDetailed();

    expect(find).toHaveBeenCalledWith("sftp-3");
    expect(result).toBeInstanceOf(SftpUserDetailed);
  });

  test("create delegates with the project id and returns a reference", async () => {
    const project = Project.ofId("project-id");
    const data = {
      directories: ["/"] as [string, ...string[]],
      authentication: { password: "secret" },
      accessLevel: "read" as const,
      description: "new user",
    };
    const create = vi.fn().mockResolvedValue({ id: "sftp-new" });
    installBehaviors({ sftpUser: { create } });

    const result = await SftpUser.create(project, data);

    expect(create).toHaveBeenCalledWith("project-id", data);
    expect(result).toBeInstanceOf(SftpUser);
    expect(result.id).toBe("sftp-new");
  });

  test("update and delete delegate with the reference id", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sftpUser: { delete: deleteBehavior, update } });
    const user = SftpUser.ofId("sftp-4");
    const data = { description: "updated" };

    await user.update(data);
    await user.delete();

    expect(update).toHaveBeenCalledWith("sftp-4", data);
    expect(deleteBehavior).toHaveBeenCalledWith("sftp-4");
  });
});

describe("SftpUser data", () => {
  test("derives access, key, directory, expiry, type, and project properties", () => {
    const expiresAt = "2025-01-01T00:00:00.000Z";
    const user = new SftpUserDetailed(
      buildSftpUserData({
        publicKeys: [{ key: "ssh-ed25519 AAA", comment: "laptop" }],
        accessLevel: "full",
        expiresAt,
      }),
    );

    expect(user.hasFullAccess).toBe(true);
    expect(user.hasPublicKeys).toBe(true);
    expect(user.publicKeys).toHaveLength(1);
    expect(user.directories).toEqual(["/"]);
    expect(user.hasFullDirectoryAccess).toBe(true);
    expect(user.expiresAt).toBeInstanceOf(DateTime);
    expect(user.expiresAt?.toMillis()).toBe(
      DateTime.fromISO(expiresAt).toMillis(),
    );
    expect(user.type).toBe("SFTP");
    expect(user.project).toBeInstanceOf(Project);
    expect(user.project.id).toBe("project-id");
  });

  test("derives defaults and restricted access", () => {
    const user = new SftpUserListItem(
      buildSftpUserData({
        directories: ["/public"],
        publicKeys: undefined,
        expiresAt: undefined,
        accessLevel: "read",
      }),
    );

    expect(user.hasFullAccess).toBe(false);
    expect(user.hasPublicKeys).toBeFalsy();
    expect(user.publicKeys).toEqual([]);
    expect(user.hasFullDirectoryAccess).toBe(false);
    expect(user.expiresAt).toBeUndefined();
  });

  test("deleteSshKey updates the user without the matching key", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sftpUser: { update } });
    const removed = { key: "ssh-ed25519 OLD", comment: "old" };
    const retained = { key: "ssh-ed25519 NEW", comment: "new" };
    const user = new SftpUserDetailed(
      buildSftpUserData({
        publicKeys: [removed, retained],
        id: "sftp-5",
      }),
    );

    await user.deleteSshKey(removed);

    expect(update).toHaveBeenCalledWith("sftp-5", { publicKeys: [retained] });
  });
});

describe("SftpUser list query", () => {
  test("executes, materializes items, and preserves total count", async () => {
    const project = Project.ofId("project-id");
    const query = { limit: 2, skip: 1 };
    const list = vi.fn().mockResolvedValue({
      items: [buildSftpUserData({ id: "sftp-6" })],
      totalCount: 8,
    });
    installBehaviors({ sftpUser: { list } });

    const result = await SftpUser.query({
      project: project,
      ...query,
    }).execute();

    expect(list).toHaveBeenCalledWith("project-id", query);
    expect(result).toBeInstanceOf(SftpUserList);
    expect(result.items[0]).toBeInstanceOf(SftpUserListItem);
    expect(result.totalCount).toBe(8);
  });

  test("refine merges queries and getTotalCount returns the total", async () => {
    const project = Project.ofId("project-id");
    const list = vi.fn().mockResolvedValue({ totalCount: 12, items: [] });
    installBehaviors({ sftpUser: { list } });
    const refined = SftpUser.query({
      project: project,
      limit: 5,
    }).refine({ skip: 10 });

    expect(await refined.getTotalCount()).toBe(12);
    // getTotalCount forces limit: 1 (only the count is needed), preserving skip
    expect(list).toHaveBeenCalledWith("project-id", { limit: 1, skip: 10 });
  });
});

describe("SftpUser common variant", () => {
  test("findCommon on a reference delegates and returns the detailed variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildSftpUserData({ id: "sftp-c1" }));
    installBehaviors({ sftpUser: { find } });

    const result = await SftpUser.ofId("sftp-c1").findCommon();

    expect(find).toHaveBeenCalledWith("sftp-c1");
    expect(result).toBeInstanceOf(SftpUserDetailed);
    expect(result?.id).toBe("sftp-c1");
  });

  test("findCommon on a reference returns undefined when not found", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sftpUser: { find } });

    expect(await SftpUser.ofId("missing").findCommon()).toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("getCommon on a reference delegates and returns the detailed variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildSftpUserData({ id: "sftp-c2" }));
    installBehaviors({ sftpUser: { find } });

    const result = await SftpUser.ofId("sftp-c2").getCommon();

    expect(find).toHaveBeenCalledWith("sftp-c2");
    expect(result).toBeInstanceOf(SftpUserDetailed);
  });

  test("getCommon on a reference throws when not found", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ sftpUser: { find } });

    await expect(SftpUser.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon on an already-materialized model returns it without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ sftpUser: { find } });
    const detailed = new SftpUserDetailed(buildSftpUserData({ id: "sftp-c3" }));

    const result = await detailed.findCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already-materialized model returns it without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ sftpUser: { find } });
    const listItem = new SftpUserListItem(buildSftpUserData({ id: "sftp-c4" }));

    const result = await listItem.getCommon();

    expect(result).toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });
});
