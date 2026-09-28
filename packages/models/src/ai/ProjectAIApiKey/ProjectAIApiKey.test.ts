import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, it, vi } from "vitest";

import { buildAIApiKeyData } from "../../testing/builders/buildAIApiKeyData.js";
import { buildIngressData } from "../../testing/builders/buildIngressData.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Project } from "../../project/index.js";
import {
  AI_HOSTING_DEFAULT_RATE_LIMIT,
  AI_HOSTING_DOCUMENTATION_LINK,
  ProjectAIApiKeyDetailed,
  ProjectAIApiKeyListItem,
  ProjectAIApiKey,
} from "./ProjectAIApiKey.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("ProjectAIApiKey", () => {
  it("exports the AI hosting defaults", () => {
    expect(AI_HOSTING_DEFAULT_RATE_LIMIT).toBe(300);
    expect(AI_HOSTING_DOCUMENTATION_LINK.startsWith("https://")).toBe(true);
  });

  it("finds and maps a detailed API key", async () => {
    const find = vi.fn().mockResolvedValue(buildAIApiKeyData({ keyId: "k-1" }));
    installBehaviors({ projectAiApiKey: { find } });

    const result = await ProjectAIApiKey.find("p-1", "k-1");

    expect(find).toHaveBeenCalledWith("p-1", "k-1");
    expect(result).toBeInstanceOf(ProjectAIApiKeyDetailed);
    expect(result?.id).toBe("k-1");
  });

  it("returns undefined when an API key is not found", async () => {
    installBehaviors({
      projectAiApiKey: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ProjectAIApiKey.find("p-1", "missing"),
    ).resolves.toBeUndefined();
  });

  it("throws when getting a missing API key", async () => {
    installBehaviors({
      projectAiApiKey: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(ProjectAIApiKey.get("p-1", "missing")).rejects.toThrow();
  });

  it("exposes related models and formatted token usage", () => {
    const detailed = new ProjectAIApiKeyDetailed(buildAIApiKeyData());
    const withoutCustomer = new ProjectAIApiKeyDetailed(
      buildAIApiKeyData({ profileId: undefined }),
    );

    expect(detailed.project.id).toBe("project-id");
    expect(detailed.customer?.id).toBe("customer-id");
    expect(withoutCustomer.customer).toBeUndefined();
    expect(typeof detailed.tokenUsage.formattedUsed).toBe("string");
  });

  it("delegates updates, deletion, and container linking", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    const linkContainer = vi.fn().mockResolvedValue(undefined);
    installBehaviors({
      projectAiApiKey: { delete: deleteBehavior, linkContainer, update },
    });
    const detailed = new ProjectAIApiKeyDetailed(buildAIApiKeyData());
    const linkData = {
      containerId: "container-1",
      ingressId: "ingress-1",
      stackId: "stack-1",
    };

    await detailed.updateName("new");
    await detailed.addContainer();
    await detailed.linkContainer(linkData);
    await detailed.delete();

    expect(update).toHaveBeenCalledWith("project-id", "key-id", {
      name: "new",
    });
    expect(update).toHaveBeenCalledWith("project-id", "key-id", {
      createWebuiContainer: true,
    });
    expect(linkContainer).toHaveBeenCalledWith(
      "project-id",
      "key-id",
      linkData,
    );
    expect(deleteBehavior).toHaveBeenCalledWith("project-id", "key-id");
  });

  it("creates an API key for a project", async () => {
    const create = vi.fn().mockResolvedValue({ id: "nk" });
    installBehaviors({ projectAiApiKey: { create } });
    const requestData = {
      planId: "plan-1",
      name: "new key",
      models: [],
    };

    const result = await ProjectAIApiKey.create(
      Project.ofId("p-1"),
      requestData,
    );

    expect(create).toHaveBeenCalledWith("p-1", requestData);
    expect(result).toBeInstanceOf(ProjectAIApiKey);
    expect(result).toMatchObject({ projectId: "p-1", id: "nk" });
  });

  it("returns no related ingress without container metadata", async () => {
    const detailed = new ProjectAIApiKeyDetailed(
      buildAIApiKeyData({ containerMeta: undefined }),
    );

    await expect(
      detailed.getContainerRelatedIngress(),
    ).resolves.toBeUndefined();
  });

  it("preserves the list item inheritance chain", () => {
    const item = new ProjectAIApiKeyListItem(buildAIApiKeyData());

    expect(item).toBeInstanceOf(ProjectAIApiKeyListItem);
    expect(item).toBeInstanceOf(ProjectAIApiKey);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});

describe("ProjectAIApiKey container-related ingress", () => {
  const containerMeta = {
    containerId: "container-1",
    status: "created" as const,
    ingressId: "ingress-1",
    stackId: "stack-1",
  };

  it("returns the ingress matching the container metadata ingress id", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildIngressData({ id: "ingress-1" })],
      totalCount: 1,
    });
    installBehaviors({ ingress: { list } });
    const detailed = new ProjectAIApiKeyDetailed(
      buildAIApiKeyData({ containerMeta }),
    );

    const result = await detailed.getContainerRelatedIngress();

    expect(list).toHaveBeenCalledWith({ projectId: "project-id" }, undefined);
    expect(result?.id).toBe("ingress-1");
  });

  it("falls back to the ingress targeting the container", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildIngressData({
          paths: [
            {
              target: {
                container: { portProtocol: "8080/TCP", id: "container-1" },
              },
              path: "/",
            },
          ],
          id: "ingress-2",
        }),
      ],
      totalCount: 1,
    });
    installBehaviors({ ingress: { list } });
    const detailed = new ProjectAIApiKeyDetailed(
      buildAIApiKeyData({
        containerMeta: { ...containerMeta, ingressId: "missing" },
      }),
    );

    const result = await detailed.getContainerRelatedIngress();

    expect(result?.id).toBe("ingress-2");
  });

  it("returns undefined when no ingress matches", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildIngressData({ id: "other" })],
      totalCount: 1,
    });
    installBehaviors({ ingress: { list } });
    const detailed = new ProjectAIApiKeyDetailed(
      buildAIApiKeyData({
        containerMeta: {
          ...containerMeta,
          containerId: "missing",
          ingressId: "missing",
        },
      }),
    );

    await expect(
      detailed.getContainerRelatedIngress(),
    ).resolves.toBeUndefined();
  });
});

describe("ProjectAIApiKey common lookups", () => {
  it("findCommon on a bare reference delegates to find and returns the detailed variant", async () => {
    const find = vi.fn().mockResolvedValue(buildAIApiKeyData({ keyId: "k-1" }));
    installBehaviors({ projectAiApiKey: { find } });

    const result = await ProjectAIApiKey.ofId("p-1", "k-1").findCommon();

    expect(find).toHaveBeenCalledWith("p-1", "k-1");
    expect(result).toBeInstanceOf(ProjectAIApiKeyDetailed);
    expect(result?.id).toBe("k-1");
  });

  it("getCommon on a bare reference returns the common variant when found", async () => {
    const find = vi.fn().mockResolvedValue(buildAIApiKeyData({ keyId: "k-1" }));
    installBehaviors({ projectAiApiKey: { find } });

    const result = await ProjectAIApiKey.ofId("p-1", "k-1").getCommon();

    expect(result).toBeInstanceOf(ProjectAIApiKeyDetailed);
    expect(result.id).toBe("k-1");
  });

  it("getCommon on a bare reference throws when the key is not found", async () => {
    installBehaviors({
      projectAiApiKey: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ProjectAIApiKey.ofId("p-1", "missing").getCommon(),
    ).rejects.toThrow();
  });

  it("does not refetch when an already-common model resolves its common variant", async () => {
    const find = vi.fn();
    installBehaviors({ projectAiApiKey: { find } });
    const detailed = new ProjectAIApiKeyDetailed(buildAIApiKeyData());

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});
