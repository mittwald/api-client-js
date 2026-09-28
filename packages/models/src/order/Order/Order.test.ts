import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildOrderItemData } from "../../testing/builders/buildOrderItemData.js";
import { buildOrderData } from "../../testing/builders/buildOrderData.js";
import { AggregateMetaData } from "../../common/index.js";
import { Customer } from "../../customer/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  OrderListQuery,
  OrderDetailed,
  OrderListItem,
  OrderList,
  Order,
} from "./Order.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("Order reference", () => {
  test("find delegates and materializes a detailed order", async () => {
    const find = vi.fn().mockResolvedValue(buildOrderData({ orderId: "o-1" }));
    installBehaviors({ order: { find } });

    const result = await Order.find("o-1");

    expect(find).toHaveBeenCalledWith("o-1");
    expect(result).toBeInstanceOf(OrderDetailed);
    expect(result?.id).toBe("o-1");
  });

  test("find returns undefined when the behavior finds nothing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ order: { find } });

    await expect(Order.find("missing")).resolves.toBeUndefined();
  });

  test("get returns a detailed order when found", async () => {
    const find = vi.fn().mockResolvedValue(buildOrderData({ orderId: "o-2" }));
    installBehaviors({ order: { find } });

    await expect(Order.get("o-2")).resolves.toBeInstanceOf(OrderDetailed);
  });

  test("get throws when the order is missing", async () => {
    installBehaviors({ order: { find: vi.fn().mockResolvedValue(undefined) } });

    await expect(Order.get("missing")).rejects.toThrow();
  });

  test("reference detail methods delegate with their id", async () => {
    const find = vi.fn().mockResolvedValue(buildOrderData({ orderId: "o-3" }));
    installBehaviors({ order: { find } });
    const reference = Order.ofId("o-3");

    await expect(reference.findDetailed()).resolves.toBeInstanceOf(
      OrderDetailed,
    );
    await expect(reference.getDetailed()).resolves.toBeInstanceOf(
      OrderDetailed,
    );
    expect(find).toHaveBeenNthCalledWith(1, "o-3");
    expect(find).toHaveBeenNthCalledWith(2, "o-3");
  });

  test("changePlan delegates the unchanged request data", async () => {
    const createTariffChange = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ order: { createTariffChange } });
    const data = {
      tariffChangeData: {
        contractId: "contract-id",
        requestsPerMinute: 10,
        monthlyTokens: 1000,
      },
      tariffChangeType: "aiHosting" as const,
    };

    await Order.changePlan(data);

    expect(createTariffChange).toHaveBeenCalledWith(data);
  });
  test("aggregate metadata pins the order domain and aggregate", () => {
    expect(Order.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Order.aggregateMetaData.domain).toBe("order");
    expect(Order.aggregateMetaData.aggregate).toBe("order");
  });
});

describe("Order common variant", () => {
  test("findCommon on a reference delegates and materializes the detailed order", async () => {
    const find = vi.fn().mockResolvedValue(buildOrderData({ orderId: "o-c1" }));
    installBehaviors({ order: { find } });

    const result = await Order.ofId("o-c1").findCommon();

    expect(find).toHaveBeenCalledWith("o-c1");
    expect(result).toBeInstanceOf(OrderDetailed);
    expect(result?.id).toBe("o-c1");
  });

  test("findCommon on a reference returns undefined when nothing is found", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ order: { find } });

    await expect(Order.ofId("missing").findCommon()).resolves.toBeUndefined();
  });

  test("getCommon on a reference delegates and materializes the detailed order", async () => {
    const find = vi.fn().mockResolvedValue(buildOrderData({ orderId: "o-c2" }));
    installBehaviors({ order: { find } });

    await expect(Order.ofId("o-c2").getCommon()).resolves.toBeInstanceOf(
      OrderDetailed,
    );
    expect(find).toHaveBeenCalledWith("o-c2");
  });

  test("getCommon on a reference throws when the order is missing", async () => {
    installBehaviors({ order: { find: vi.fn().mockResolvedValue(undefined) } });

    await expect(Order.ofId("missing").getCommon()).rejects.toThrow();
  });

  test("findCommon on an already-materialized order is idempotent and skips the behavior", async () => {
    const find = vi.fn();
    installBehaviors({ order: { find } });
    const order = new OrderDetailed(buildOrderData({ orderId: "o-c3" }));

    const result = await order.findCommon();

    expect(result).toBe(order);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already-materialized order is idempotent and skips the behavior", async () => {
    const find = vi.fn();
    installBehaviors({ order: { find } });
    const order = new OrderDetailed(buildOrderData({ orderId: "o-c4" }));

    const result = await order.getCommon();

    expect(result).toBe(order);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("Order data", () => {
  test("exposes derived values", () => {
    const order = new OrderDetailed(
      buildOrderData({
        summary: { nonRecurring: 200, recurring: 800, summary: 1000 },
        items: [buildOrderItemData({ orderItemId: "i-1" })],
        orderDate: "2026-01-02T00:00:00.000Z",
        dueDate: "2026-01-10T00:00:00.000Z",
        orderNumber: "ORD-2",
        status: "CONFIRMED",
        customerId: "c-1",
      }),
    );

    expect(order.orderNumber).toBe("ORD-2");
    expect(order.status).toBe("CONFIRMED");
    expect(order.customer).toBeInstanceOf(Customer);
    expect(order.customer.id).toBe("c-1");
    expect(order.summary?.getAmount()).toBe(1000);
    expect(order.summaryRecurring?.getAmount()).toBe(800);
    expect(order.summaryNonRecurring?.getAmount()).toBe(200);
    expect(order.orderDate).toBeInstanceOf(Date);
    expect(order.dueDate).toBeInstanceOf(Date);
    expect(order.items?.[0]?.id).toBe("i-1");
  });

  test("leaves absent dates undefined", () => {
    const order = new OrderDetailed(
      buildOrderData({ orderDate: undefined, dueDate: undefined }),
    );

    expect(order.orderDate).toBeUndefined();
    expect(order.dueDate).toBeUndefined();
  });

  test("finds an order item attribute by key", () => {
    const order = new OrderDetailed(
      buildOrderData({
        items: [
          buildOrderItemData({
            attributeConfiguration: [{ value: "bar", key: "foo" }],
          }),
        ],
      }),
    );

    expect(order.getOrderItemAttribute("foo")?.value).toBe("bar");
    expect(order.getOrderItemAttribute("missing")).toBeUndefined();
  });
  test("leaves summary values undefined when no summary is present", () => {
    const order = new OrderDetailed(buildOrderData({ summary: undefined }));

    expect(order.summary).toBeUndefined();
    expect(order.summaryRecurring).toBeUndefined();
    expect(order.summaryNonRecurring).toBeUndefined();
  });

  test("leaves items undefined and yields no attribute when items are absent", () => {
    const order = new OrderDetailed(buildOrderData({ items: undefined }));

    expect(order.items).toBeUndefined();
    expect(order.getOrderItemAttribute("foo")).toBeUndefined();
  });
});

describe("Order list query", () => {
  test("delegates and materializes list items and count", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildOrderData({ orderId: "o-1" })],
      totalCount: 1,
    });
    installBehaviors({ order: { list } });

    const result = await Order.query().execute();

    expect(result).toBeInstanceOf(OrderList);
    expect(result.items[0]).toBeInstanceOf(OrderListItem);
    expect(result.totalCount).toBe(1);
  });

  test("maps model query references to behavior ids", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ order: { list } });

    await Order.query({ customer: "c-1", project: "p-1", limit: 5 }).execute();

    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({
        customerId: "c-1",
        projectId: "p-1",
        limit: 5,
      }),
    );
    expect(list.mock.calls[0]?.[0]).not.toHaveProperty("customer");
    expect(list.mock.calls[0]?.[0]).not.toHaveProperty("project");
  });

  test("refine merges query data into a new query", () => {
    const original = Order.query({ customer: "c-1", limit: 10 });
    const refined = original.refine({ limit: 5 });

    expect(refined).toBeInstanceOf(OrderListQuery);
    expect(refined).not.toBe(original);
  });

  test("getTotalCount requests one item and returns the count", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 7, items: [] });
    installBehaviors({ order: { list } });

    await expect(Order.query().getTotalCount()).resolves.toBe(7);
    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 1 }));
  });

  test("executeOptional returns an empty list when listing rejects", async () => {
    installBehaviors({
      order: { list: vi.fn().mockRejectedValue(new Error("failed")) },
    });

    const result = await Order.query().executeOptional();

    expect(result).toBeInstanceOf(OrderList);
    expect(result.items).toHaveLength(0);
    expect(result.totalCount).toBe(0);
  });
});
