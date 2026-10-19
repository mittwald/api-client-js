import { afterEach, describe, expect, test, vi } from "vitest";

import { buildNotificationListItemData } from "../../testing/builders/buildNotificationListItemData.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { ProjectInvite, Project } from "../../project/index.js";
import { CustomerInvite } from "../../customer/index.js";
import { config } from "../../config/config.js";
import {
  NotificationListItem,
  NotificationList,
  Notifications,
} from "./Notifications.js";

afterEach(resetBehaviors);

describe("Notifications query (list + pagination)", () => {
  test("applies the default pagination limit", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildNotificationListItemData({ id: "n-1" })],
      totalCount: 1,
    });
    installBehaviors({ notification: { list } });

    const result = await Notifications.query().execute();

    expect(result).toBeInstanceOf(NotificationList);
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toBeInstanceOf(NotificationListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: config.defaultPaginationLimit }),
    );
  });

  test("uses an explicit pagination limit instead of the default", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ notification: { list } });

    await Notifications.query({ limit: 5 }).execute();

    expect(5).not.toBe(config.defaultPaginationLimit);
    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 5 }));
  });

  test("materializes behavior items and total count", async () => {
    const items = [
      buildNotificationListItemData({ id: "n-1" }),
      buildNotificationListItemData({ id: "n-2" }),
    ];
    const list = vi.fn().mockResolvedValue({ totalCount: 7, items });
    installBehaviors({ notification: { list } });

    const result = await Notifications.query({ limit: 2 }).execute();

    expect(result.items).toHaveLength(2);
    expect(result.items).toEqual([
      expect.objectContaining({ id: "n-1" }),
      expect.objectContaining({ id: "n-2" }),
    ]);
    expect(
      result.items.every((item) => item instanceof NotificationListItem),
    ).toBe(true);
    expect(result.totalCount).toBe(7);
  });

  test("refine merges query params", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ notification: { list } });

    await Notifications.query({ limit: 3 }).refine({ limit: 9 }).execute();

    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 9 }));
  });

  test("getTotalCount requests a single item and returns the count", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 42, items: [] });
    installBehaviors({ notification: { list } });

    const count = await Notifications.query().getTotalCount();

    expect(count).toBe(42);
    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 1 }));
  });
});

describe("Notifications mutations (delegation)", () => {
  test("markAsRead delegates with the notification id", async () => {
    const markAsRead = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ notification: { markAsRead } });

    await Notifications.ofId("n-9").markAsRead();

    expect(markAsRead).toHaveBeenCalledWith("n-9");
  });

  test("markAllAsRead delegates to the behavior", async () => {
    const markAllAsRead = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ notification: { markAllAsRead } });

    await Notifications.markAllAsRead();

    expect(markAllAsRead).toHaveBeenCalledTimes(1);
  });

  test("markAllAsRead delegates the query to the behavior", async () => {
    const markAllAsRead = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ notification: { markAllAsRead } });

    await Notifications.markAllAsRead({
      referenceAggregate: "appinstallation",
      severities: ["info", "success"],
      referenceDomain: "app",
      referenceId: "a-1",
    });

    expect(markAllAsRead).toHaveBeenCalledWith({
      referenceAggregate: "appinstallation",
      severities: ["info", "success"],
      referenceDomain: "app",
      referenceId: "a-1",
    });
  });
});

describe("NotificationListItem (data + derived getters)", () => {
  test("derives observable fields from the notification data", () => {
    const item = new NotificationListItem(
      buildNotificationListItemData({
        createdAt: "2024-03-04T05:06:07.000Z",
        type: "invoice.created",
        severity: "warning",
        read: false,
        id: "n-1",
      }),
    );

    expect(item.id).toBe("n-1");
    expect(item.type).toBe("invoice.created");
    expect(item.severity).toBe("warning");
    expect(item.unread).toBe(true);
    expect(item.createdAt.year).toBe(2024);
    expect(item.createdAt.month).toBe(3);
    expect(item.createdAt.day).toBe(4);
  });

  test("marks a read notification as not unread", () => {
    const item = new NotificationListItem(
      buildNotificationListItemData({ read: true }),
    );

    expect(item.unread).toBe(false);
  });

  test("resolves the aggregate reference to a model", () => {
    const item = new NotificationListItem(
      buildNotificationListItemData({
        reference: { aggregate: "project", domain: "project", id: "p-1" },
      }),
    );

    expect(item.reference).toBeInstanceOf(Project);
    expect(item.reference?.id).toBe("p-1");
    expect(item.isInvite).toBe(false);
  });

  test("keeps an unknown aggregate reference unresolved", () => {
    const item = new NotificationListItem(
      buildNotificationListItemData({
        reference: {
          aggregate: "nope",
          domain: "nope",
          id: "x",
        },
      }),
    );

    expect(item.reference).toBeUndefined();
    expect(item.isInvite).toBe(false);
  });

  test("flags project invite references as invites", () => {
    const item = new NotificationListItem(
      buildNotificationListItemData({
        reference: {
          aggregate: "projectinvite",
          domain: "membership",
          id: "pi-1",
        },
      }),
    );

    expect(item.reference).toBeInstanceOf(ProjectInvite);
    expect(item.isInvite).toBe(true);
  });

  test("flags customer invite references as invites", () => {
    const item = new NotificationListItem(
      buildNotificationListItemData({
        reference: {
          aggregate: "customerinvite",
          domain: "membership",
          id: "ci-1",
        },
      }),
    );

    expect(item.reference).toBeInstanceOf(CustomerInvite);
    expect(item.isInvite).toBe(true);
  });
});
