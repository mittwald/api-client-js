import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, it, vi } from "vitest";

import { buildAIApiKeyData } from "../../testing/builders/buildAIApiKeyData";
import { buildIngressData } from "../../testing/builders/buildIngressData";
import { ReferenceModel } from "../../base";
import { Customer } from "../../customer";
import { installBehaviors, resetBehaviors } from "../../testing/installBehaviors";
import {
  CustomerAIApiKeyDetailed,
  CustomerAIApiKeyListItem,
  CustomerAIApiKey,
} from "./CustomerAIApiKey";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("CustomerAIApiKey", () => {
  it("finds and maps a detailed API key", async () => {
    const find = vi.fn().mockResolvedValue(buildAIApiKeyData({ keyId: "k-1" }));
    installBehaviors({ customerAiApiKey: { find } });

    const result = await CustomerAIApiKey.find("c-1", "k-1");

    expect(find).toHaveBeenCalledWith("c-1", "k-1");
    expect(result).toBeInstanceOf(CustomerAIApiKeyDetailed);
    expect(result?.id).toBe("k-1");
  });

  it("returns undefined when an API key is not found", async () => {
    installBehaviors({ customerAiApiKey: { find: vi.fn().mockResolvedValue(undefined) } });

    await expect(CustomerAIApiKey.find("c-1", "missing")).resolves.toBeUndefined();
  });

  it("throws when getting a missing API key", async () => {
    installBehaviors({ customerAiApiKey: { find: vi.fn().mockResolvedValue(undefined) } });

    await expect(CustomerAIApiKey.get("c-1", "missing")).rejects.toThrow();
  });

  it("exposes related models and formatted token usage", () => {
    const detailed = new CustomerAIApiKeyDetailed(buildAIApiKeyData());
    const withoutProject = new CustomerAIApiKeyDetailed(
      buildAIApiKeyData({ projectId: undefined }),
    );

    expect(detailed.customer.id).toBe("customer-id");
    expect(typeof detailed.tokenUsage.formattedUsed).toBe("string");
    expect(detailed.project?.id).toBe("project-id");
    expect(withoutProject.project).toBeUndefined();
  });

  it("delegates updates and deletion", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    const deleteBehavior = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ customerAiApiKey: { delete: deleteBehavior, update } });
    const detailed = new CustomerAIApiKeyDetailed(buildAIApiKeyData());

    await detailed.updateName("new");
    await detailed.linkProject("p-9", true);
    await detailed.delete();

    expect(update).toHaveBeenCalledWith("customer-id", "key-id", { name: "new" });
    expect(update).toHaveBeenCalledWith("customer-id", "key-id", {
      createWebuiContainer: true,
      projectId: "p-9",
    });
    expect(deleteBehavior).toHaveBeenCalledWith("customer-id", "key-id");
  });

  it("creates an API key for a customer", async () => {
    const create = vi.fn().mockResolvedValue({ id: "new-key" });
    installBehaviors({ customerAiApiKey: { create } });
    const requestData = {
      planId: "plan-1",
      name: "new key",
      models: [],
    };

    const result = await CustomerAIApiKey.create(Customer.ofId("c-1"), requestData);

    expect(create).toHaveBeenCalledWith("c-1", requestData);
    expect(result).toBeInstanceOf(CustomerAIApiKey);
    expect(result).toMatchObject({ customerId: "c-1", id: "new-key" });
  });

  it("returns a detailed instance directly from common lookups", async () => {
    const detailed = new CustomerAIApiKeyDetailed(buildAIApiKeyData());

    await expect(detailed.getCommon()).resolves.toBe(detailed);
    await expect(detailed.findCommon()).resolves.toBe(detailed);
  });

  it("preserves the list item inheritance chain", () => {
    const item = new CustomerAIApiKeyListItem(buildAIApiKeyData());

    expect(item).toBeInstanceOf(CustomerAIApiKeyListItem);
    expect(item).toBeInstanceOf(CustomerAIApiKey);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});

describe("CustomerAIApiKey container-related ingress", () => {
  const containerMeta = {
    containerId: "container-1",
    status: "created" as const,
    ingressId: "ingress-1",
    stackId: "stack-1",
  };

  it("returns no related ingress without container metadata", async () => {
    const detailed = new CustomerAIApiKeyDetailed(
      buildAIApiKeyData({ containerMeta: undefined }),
    );

    await expect(
      detailed.getContainerRelatedIngress(),
    ).resolves.toBeUndefined();
  });

  it("returns the ingress matching the container metadata ingress id", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildIngressData({ id: "ingress-1" })],
      totalCount: 1,
    });
    installBehaviors({ ingress: { list } });
    const detailed = new CustomerAIApiKeyDetailed(
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
    const detailed = new CustomerAIApiKeyDetailed(
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
    const detailed = new CustomerAIApiKeyDetailed(
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

describe("CustomerAIApiKey common lookups", () => {
  it("findCommon on a bare reference delegates to find and returns the detailed variant", async () => {
    const find = vi.fn().mockResolvedValue(buildAIApiKeyData({ keyId: "k-1" }));
    installBehaviors({ customerAiApiKey: { find } });

    const result = await CustomerAIApiKey.ofId("c-1", "k-1").findCommon();

    expect(find).toHaveBeenCalledWith("c-1", "k-1");
    expect(result).toBeInstanceOf(CustomerAIApiKeyDetailed);
    expect(result?.id).toBe("k-1");
  });

  it("getCommon on a bare reference returns the common variant when found", async () => {
    const find = vi.fn().mockResolvedValue(buildAIApiKeyData({ keyId: "k-1" }));
    installBehaviors({ customerAiApiKey: { find } });

    const result = await CustomerAIApiKey.ofId("c-1", "k-1").getCommon();

    expect(result).toBeInstanceOf(CustomerAIApiKeyDetailed);
    expect(result.id).toBe("k-1");
  });

  it("getCommon on a bare reference throws when the key is not found", async () => {
    installBehaviors({
      customerAiApiKey: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      CustomerAIApiKey.ofId("c-1", "missing").getCommon(),
    ).rejects.toThrow();
  });

  it("does not refetch when an already-common model resolves its common variant", async () => {
    const find = vi.fn();
    installBehaviors({ customerAiApiKey: { find } });
    const detailed = new CustomerAIApiKeyDetailed(buildAIApiKeyData());

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});
