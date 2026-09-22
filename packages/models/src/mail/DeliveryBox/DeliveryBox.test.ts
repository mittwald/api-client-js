import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildDeliveryBoxData } from "../../testing/builders/buildDeliveryBoxData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { config } from "../../config/config";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import { Project } from "../../project";
import {
  DeliveryBoxListQuery,
  DeliveryBoxDetailed,
  DeliveryBoxListItem,
  DeliveryBoxCommon,
  DeliveryBoxList,
  DeliveryBox,
} from "./DeliveryBox";

afterEach(resetBehaviors);

describe("DeliveryBox", () => {
  test("find delegates and returns detailed data", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildDeliveryBoxData({ id: "db-1" }));
    installBehaviors({ deliveryBox: { find } });

    const result = await DeliveryBox.find("db-1");

    expect(find).toHaveBeenCalledWith("db-1");
    expect(result).toBeInstanceOf(DeliveryBoxDetailed);
    expect(result?.id).toBe("db-1");
  });

  test("find returns undefined when no delivery box exists", async () => {
    installBehaviors({
      deliveryBox: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await DeliveryBox.find("missing")).toBeUndefined();
  });

  test("references find their detailed data by id", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildDeliveryBoxData({ id: "db-1" }));
    installBehaviors({ deliveryBox: { find } });
    const reference = DeliveryBox.ofId("db-1");

    expect(reference).toBeInstanceOf(DeliveryBox);
    await reference.findDetailed();
    expect(find).toHaveBeenCalledWith("db-1");
  });

  test("create delegates and returns a reference", async () => {
    const create = vi.fn().mockResolvedValue({ id: "db-new" });
    installBehaviors({ deliveryBox: { create } });
    const project = Project.ofId("p-1");

    const result = await DeliveryBox.create(project, "Description", "secret");

    expect(create).toHaveBeenCalledWith("p-1", "Description", "secret");
    expect(result).toBeInstanceOf(DeliveryBox);
    expect(result.id).toBe("db-new");
  });

  test("mutation methods delegate with the reference id", async () => {
    const updateDescription = vi.fn();
    const updatePassword = vi.fn();
    const deleteBehavior = vi.fn();
    installBehaviors({
      deliveryBox: {
        delete: deleteBehavior,
        updateDescription,
        updatePassword,
      },
    });
    const deliveryBox = DeliveryBox.ofId("db-1");

    await deliveryBox.updateDescription("New");
    await deliveryBox.updatePassword("password");
    await deliveryBox.delete();

    expect(updateDescription).toHaveBeenCalledWith("db-1", "New");
    expect(updatePassword).toHaveBeenCalledWith("db-1", "password");
    expect(deleteBehavior).toHaveBeenCalledWith("db-1");
  });

  test("query applies default pagination and maps list items", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildDeliveryBoxData()],
      totalCount: 4,
    });
    installBehaviors({ deliveryBox: { query } });
    const project = Project.ofId("p-1");

    const listQuery = DeliveryBox.query({ project: project });
    expect(listQuery).toBeInstanceOf(DeliveryBoxListQuery);
    const result = await listQuery.execute();

    expect(query).toHaveBeenCalledWith(
      "p-1",
      expect.objectContaining({ limit: config.defaultPaginationLimit }),
    );
    expect(result).toBeInstanceOf(DeliveryBoxList);
    expect(result.items[0]).toBeInstanceOf(DeliveryBoxListItem);
    expect(result.totalCount).toBe(4);
  });

  test("exposes common delivery box data", async () => {
    installBehaviors({
      deliveryBox: {
        find: vi.fn().mockResolvedValue(
          buildDeliveryBoxData({
            sendingEnabled: false,
            description: "Box",
            projectId: "p-1",
            name: "p-name",
          }),
        ),
      },
    });

    const result = await DeliveryBox.find("deliverybox-id");

    expect(result?.sendingDisabled).toBe(true);
    expect(result?.name).toBe("p-name");
    expect(result?.description).toBe("Box");
    expect(result?.project).toBeInstanceOf(Project);
    expect(result?.project.id).toBe("p-1");
  });

  test("list items retain ghostmaker class identity", () => {
    const item = new DeliveryBoxListItem(buildDeliveryBoxData());

    expect(item).toBeInstanceOf(DeliveryBoxListItem);
    expect(item).toBeInstanceOf(DeliveryBoxCommon);
    expect(item).toBeInstanceOf(DeliveryBox);
  });

  test("findCommon and getCommon delegate for a plain reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildDeliveryBoxData({ id: "db-1" }));
    installBehaviors({ deliveryBox: { find } });
    const reference = DeliveryBox.ofId("db-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      DeliveryBoxCommon,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      DeliveryBoxCommon,
    );
    expect(find).toHaveBeenNthCalledWith(1, "db-1");
    expect(find).toHaveBeenNthCalledWith(2, "db-1");
  });

  test("findCommon returns undefined and getCommon throws when the delivery box is missing", async () => {
    installBehaviors({
      deliveryBox: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      DeliveryBox.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
    await expect(DeliveryBox.ofId("missing").getCommon()).rejects.toThrow(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon reuse an already materialized model without refetching", async () => {
    const find = vi.fn().mockResolvedValue(buildDeliveryBoxData());
    installBehaviors({ deliveryBox: { find } });
    const detailed = await DeliveryBox.get("deliverybox-id");
    find.mockClear();

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("list items are already common and return themselves from findCommon and getCommon", async () => {
    const item = new DeliveryBoxListItem(buildDeliveryBoxData());

    await expect(item.findCommon()).resolves.toBe(item);
    await expect(item.getCommon()).resolves.toBe(item);
  });
});
