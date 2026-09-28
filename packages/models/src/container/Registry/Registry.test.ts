import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildRegistryData } from "../../testing/builders/buildRegistryData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { AggregateMetaData } from "../../common/index.js";
import { Project } from "../../project/index.js";
import {
  RegistryListQuery,
  RegistryDetailed,
  RegistryListItem,
  RegistryList,
  Registry,
} from "./Registry.js";

afterEach(resetBehaviors);

describe("Registry", () => {
  test("find delegates to the behavior and returns a detailed registry", async () => {
    const find = vi.fn().mockResolvedValue(buildRegistryData({ id: "r-1" }));
    installBehaviors({ registry: { find } });

    const result = await Registry.find("r-1");

    expect(find).toHaveBeenCalledWith("r-1");
    expect(result).toBeInstanceOf(RegistryDetailed);
    expect(result?.id).toBe("r-1");
  });

  test("find returns undefined when the registry is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registry: { find } });

    await expect(Registry.find("missing")).resolves.toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("findCommon delegates to find and returns a detailed registry for a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(buildRegistryData({ id: "r-c" }));
    installBehaviors({ registry: { find } });

    const result = await Registry.ofId("r-c").findCommon();

    expect(find).toHaveBeenCalledWith("r-c");
    expect(result).toBeInstanceOf(RegistryDetailed);
    expect(result?.id).toBe("r-c");
  });

  test("findCommon maps a missing registry to undefined for a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registry: { find } });

    await expect(
      Registry.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
    expect(find).toHaveBeenCalledWith("missing");
  });

  test("getCommon rejects with ObjectNotFoundError for a missing bare reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registry: { find } });

    await expect(Registry.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("get returns a detailed registry", async () => {
    const find = vi.fn().mockResolvedValue(buildRegistryData({ id: "r-2" }));
    installBehaviors({ registry: { find } });

    const result = await Registry.get("r-2");

    expect(result).toBeInstanceOf(RegistryDetailed);
    expect(result.id).toBe("r-2");
  });

  test("get rejects with ObjectNotFoundError when the registry is missing", async () => {
    installBehaviors({
      registry: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(Registry.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findDetailed and getDetailed delegate with the reference id", async () => {
    const find = vi.fn().mockResolvedValue(buildRegistryData({ id: "r-3" }));
    installBehaviors({ registry: { find } });
    const registry = Registry.ofId("r-3");

    await expect(registry.findDetailed()).resolves.toBeInstanceOf(
      RegistryDetailed,
    );
    await expect(registry.getDetailed()).resolves.toBeInstanceOf(
      RegistryDetailed,
    );
    expect(find).toHaveBeenNthCalledWith(1, "r-3");
    expect(find).toHaveBeenNthCalledWith(2, "r-3");
  });

  test("findCommon and getCommon reuse an already detailed instance", async () => {
    const find = vi.fn().mockResolvedValue(buildRegistryData());
    installBehaviors({ registry: { find } });
    const detailed = await Registry.get("registry-id");
    find.mockClear();

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("aggregateMetaData identifies the registry aggregate", () => {
    expect(Registry.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Registry.aggregateMetaData.domain).toBe("container");
    expect(Registry.aggregateMetaData.aggregate).toBe("registry");
  });

  test("create sends password credentials and returns the response reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "r-created" });
    installBehaviors({ registry: { create } });
    const project = Project.ofId("p-1");

    const result = await Registry.create(
      project,
      {
        credentials: { password: "secret", username: "alice" },
        description: "private registry",
        uri: "private.example.com",
      },
      "password",
    );

    expect(create).toHaveBeenCalledWith("p-1", {
      credentials: { password: "secret", username: "alice" },
      description: "private registry",
      uri: "private.example.com",
    });
    expect(result).toBeInstanceOf(Registry);
    expect(result.id).toBe("r-created");
  });

  test("create omits credentials for anonymous login", async () => {
    const create = vi.fn().mockResolvedValue({ id: "r-created" });
    installBehaviors({ registry: { create } });

    await Registry.create(
      Project.ofId("p-1"),
      {
        credentials: { username: "ignored", password: "ignored" },
        description: "public registry",
        uri: "public.example.com",
      },
      "anonymous",
    );

    expect(create).toHaveBeenCalledWith("p-1", {
      description: "public registry",
      uri: "public.example.com",
      credentials: undefined,
    });
  });

  test("update delegates uri and description", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registry: { update } });

    await Registry.ofId("r-1").update({
      uri: "new.example.com",
      description: "updated",
    });

    expect(update).toHaveBeenCalledWith("r-1", {
      uri: "new.example.com",
      description: "updated",
    });
  });

  test("updateCredentials sends password credentials", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registry: { update } });

    await Registry.ofId("r-1").updateCredentials(
      { password: "secret", username: "alice" },
      "password",
    );

    expect(update).toHaveBeenCalledWith("r-1", {
      credentials: { password: "secret", username: "alice" },
    });
  });

  test("updateCredentials clears credentials for anonymous login", async () => {
    const update = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registry: { update } });

    await Registry.ofId("r-1").updateCredentials(
      { username: "ignored", password: "ignored" },
      "anonymous",
    );

    expect(update).toHaveBeenCalledWith("r-1", { credentials: null });
  });

  test("delete delegates to the behavior", async () => {
    const deleteRegistry = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registry: { delete: deleteRegistry } });

    await Registry.ofId("r-1").delete();

    expect(deleteRegistry).toHaveBeenCalledWith("r-1");
  });

  test("query executes with the project and materializes list items", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildRegistryData({ id: "r-1" })],
      totalCount: 7,
    });
    installBehaviors({ registry: { list } });
    const query = Registry.query({
      project: Project.ofId("p-1"),
      limit: 5,
    });

    const result = await query.execute();

    expect(query).toBeInstanceOf(RegistryListQuery);
    expect(list).toHaveBeenCalledWith("p-1", { limit: 5 });
    expect(result).toBeInstanceOf(RegistryList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(RegistryListItem);
    expect(result.totalCount).toBe(7);
  });

  test("refine merges query values", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ registry: { list } });

    await Registry.query({ project: Project.ofId("p-1"), limit: 10 })
      .refine({ page: 2 })
      .execute();

    expect(list).toHaveBeenCalledWith("p-1", { limit: 10, page: 2 });
  });

  test("getTotalCount refines the query with limit one", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 12, items: [] });
    installBehaviors({ registry: { list } });

    await expect(
      Registry.query({
        project: Project.ofId("p-1"),
        page: 3,
      }).getTotalCount(),
    ).resolves.toBe(12);
    expect(list).toHaveBeenCalledWith("p-1", { limit: 1, page: 3 });
  });

  test("exposes derived properties for detailed and list item data", async () => {
    const passwordData = buildRegistryData({
      credentials: { username: "alice", valid: false },
      description: "description",
      uri: "registry.test",
      projectId: "p-data",
    });
    const find = vi.fn().mockResolvedValue(passwordData);
    const list = vi.fn().mockResolvedValue({
      items: [
        passwordData,
        buildRegistryData({ credentials: undefined, id: "anonymous" }),
      ],
      totalCount: 2,
    });
    installBehaviors({ registry: { find, list } });

    const detailed = await Registry.get(passwordData.id);
    const result = await Registry.query({
      project: Project.ofId("p-1"),
    }).execute();
    const passwordItem = result.items[0];
    const anonymousItem = result.items[1];

    for (const registry of [detailed, passwordItem]) {
      expect(registry.description).toBe("description");
      expect(registry.uri).toBe("registry.test");
      expect(registry.username).toBe("alice");
      expect(registry.loginType).toBe("password");
      expect(registry.validCredentials).toBe(false);
      expect(registry.project.id).toBe("p-data");
    }
    expect(anonymousItem.loginType).toBe("anonymous");
    expect(anonymousItem.username).toBeUndefined();
    expect(anonymousItem.validCredentials).toBeUndefined();
  });

  test("ofId creates a Registry instance", () => {
    expect(Registry.ofId("r-1")).toBeInstanceOf(Registry);
  });
});
