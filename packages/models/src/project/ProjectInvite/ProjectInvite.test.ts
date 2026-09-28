import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildProjectInviteData } from "../../testing/builders/buildProjectInviteData.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { AggregateMetaData } from "../../common/index.js";
import { Project } from "../Project/index.js";
import { User } from "../../user/index.js";
import {
  ProjectInviteDetailed,
  ProjectInviteListItem,
  ProjectInviteList,
  ProjectInvite,
} from "./ProjectInvite.js";

afterEach(resetBehaviors);

describe("ProjectInvite references and delegation", () => {
  test("find delegates and materializes a detailed invite", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildProjectInviteData({ id: "i-1" }));
    installBehaviors({ projectInvite: { find } });

    const result = await ProjectInvite.find("i-1");

    expect(find).toHaveBeenCalledWith("i-1");
    expect(result).toBeInstanceOf(ProjectInviteDetailed);
    expect(result?.id).toBe("i-1");
  });

  test("find maps a missing invite to undefined", async () => {
    installBehaviors({
      projectInvite: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(ProjectInvite.find("missing")).resolves.toBeUndefined();
  });

  test("get returns a detailed invite and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildProjectInviteData())
      .mockResolvedValueOnce(undefined);
    installBehaviors({ projectInvite: { find } });

    await expect(ProjectInvite.get("invite-id")).resolves.toBeInstanceOf(
      ProjectInviteDetailed,
    );
    await expect(ProjectInvite.get("missing")).rejects.toThrow();
  });

  test("create delegates and returns an invite reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "i-created" });
    installBehaviors({ projectInvite: { create } });
    const project = Project.ofId("p-1");
    const data = { mailAddress: "new@example.com", role: "owner" as const };

    const result = await ProjectInvite.create(project, data);

    expect(create).toHaveBeenCalledWith("p-1", data);
    expect(result).toBeInstanceOf(ProjectInvite);
    expect(result.id).toBe("i-created");
  });

  test("delete and decline delegate with the invite id", async () => {
    const deleteInvite = vi.fn().mockResolvedValue(undefined);
    const decline = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ projectInvite: { delete: deleteInvite, decline } });
    const invite = ProjectInvite.ofId("i-1");

    await invite.delete();
    await invite.decline();

    expect(deleteInvite).toHaveBeenCalledWith("i-1");
    expect(decline).toHaveBeenCalledWith("i-1");
  });

  test("acceptWithToken resolves the invite before accepting it", async () => {
    const getByToken = vi.fn().mockResolvedValue({ id: "i-1" });
    const accept = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ projectInvite: { getByToken, accept } });

    await ProjectInvite.acceptWithToken("secret-token");

    expect(getByToken).toHaveBeenCalledWith("secret-token");
    expect(accept).toHaveBeenCalledWith("i-1", "secret-token");
  });

  test("listIncoming materializes incoming invite items", async () => {
    installBehaviors({
      projectInvite: {
        listIncoming: vi.fn().mockResolvedValue({
          items: [buildProjectInviteData()],
        }),
      },
    });

    const result = await ProjectInvite.listIncoming();

    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(ProjectInviteListItem);
  });
});

describe("ProjectInvite common resolution and idempotency", () => {
  test("findCommon delegates from a reference and returns the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildProjectInviteData({ id: "i-1" }));
    installBehaviors({ projectInvite: { find } });

    const result = await ProjectInvite.ofId("i-1").findCommon();

    expect(find).toHaveBeenCalledWith("i-1");
    expect(result).toBeInstanceOf(ProjectInviteDetailed);
    expect(result?.id).toBe("i-1");
  });

  test("findCommon maps a missing reference to undefined", async () => {
    installBehaviors({
      projectInvite: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ProjectInvite.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon resolves the common variant and throws when missing", async () => {
    const find = vi
      .fn()
      .mockResolvedValueOnce(buildProjectInviteData({ id: "i-2" }))
      .mockResolvedValueOnce(undefined);
    installBehaviors({ projectInvite: { find } });

    await expect(ProjectInvite.ofId("i-2").getCommon()).resolves.toBeInstanceOf(
      ProjectInviteDetailed,
    );
    await expect(ProjectInvite.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon and getCommon are idempotent on a materialized invite", async () => {
    const find = vi.fn();
    installBehaviors({ projectInvite: { find } });
    const item = new ProjectInviteListItem(
      buildProjectInviteData({ id: "i-1" }),
    );

    expect(await item.findCommon()).toBe(item);
    expect(await item.getCommon()).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("ProjectInvite aggregate metadata", () => {
  test("aggregateMetaData pins the cache identity", () => {
    expect(ProjectInvite.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(ProjectInvite.aggregateMetaData.domain).toBe("membership");
    expect(ProjectInvite.aggregateMetaData.aggregate).toBe("projectinvite");
  });
});

describe("ProjectInvite data", () => {
  test("omits the message when the source data is absent", () => {
    const invite = new ProjectInviteListItem(buildProjectInviteData());

    expect(invite.message).toBeUndefined();
  });

  test("exposes invite values and related references", () => {
    const invite = new ProjectInviteListItem(
      buildProjectInviteData({
        information: { invitedBy: "inviter-id" },
        projectDescription: "Example project",
        mailAddress: "invitee@example.com",
        message: "Welcome",
        projectId: "p-1",
        role: "external",
      }),
    );

    expect(invite.role).toBe("external");
    expect(invite.mailAddress).toBe("invitee@example.com");
    expect(invite.projectDescription).toBe("Example project");
    expect(invite.message).toBe("Welcome");
    expect(invite.invitedBy).toBeInstanceOf(User);
    expect(invite.invitedBy.id).toBe("inviter-id");
    expect(invite.project).toBeInstanceOf(Project);
    expect(invite.project.id).toBe("p-1");
  });
});

describe("ProjectInvite list query", () => {
  test("delegates with project and query and materializes a list", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildProjectInviteData()],
      totalCount: 1,
    });
    installBehaviors({ projectInvite: { list } });
    const project = Project.ofId("p-1");
    const query = { limit: 5 };

    const result = await ProjectInvite.query(project, query).execute();

    expect(list).toHaveBeenCalledWith("p-1", expect.objectContaining(query));
    expect(result).toBeInstanceOf(ProjectInviteList);
    expect(result.items[0]).toBeInstanceOf(ProjectInviteListItem);
    expect(result.totalCount).toBe(result.items.length);
  });
});
