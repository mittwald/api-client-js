import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach, describe, expect, test, vi } from "vitest";
vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildMailRateLimitData } from "../../testing/builders/buildMailRateLimitData";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";
import {
  MailRateLimitListQuery,
  MailRateLimitDetailed,
  MailRateLimitListItem,
  MailRateLimitCommon,
  MailRateLimitList,
  MailRateLimit,
} from "./MailRateLimit";

afterEach(resetBehaviors);

describe("MailRateLimit", () => {
  test("find delegates and returns detailed data", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(
        buildMailRateLimitData({ rateLimit: 2000, id: "rl-1" }),
      );
    installBehaviors({ mailRateLimit: { find } });

    const result = await MailRateLimit.find("rl-1");

    expect(find).toHaveBeenCalledWith("rl-1");
    expect(result).toBeInstanceOf(MailRateLimitDetailed);
    expect(result?.id).toBe("rl-1");
    expect(result?.rateLimit).toBe(2000);
  });

  test("find returns undefined when no rate limit exists", async () => {
    installBehaviors({
      mailRateLimit: { find: vi.fn().mockResolvedValue(undefined) },
    });

    expect(await MailRateLimit.find("missing")).toBeUndefined();
  });

  test("references find their detailed data by id", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildMailRateLimitData({ id: "rl-1" }));
    installBehaviors({ mailRateLimit: { find } });
    const reference = MailRateLimit.ofId("rl-1");

    expect(reference).toBeInstanceOf(MailRateLimit);
    await reference.findDetailed();
    expect(find).toHaveBeenCalledWith("rl-1");
  });

  test("exposes the warning threshold", () => {
    expect(MailRateLimit.warningThreshold).toBe(5000);
  });

  test("query delegates and maps list data", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildMailRateLimitData({ rateLimit: 3000 })],
      totalCount: 5,
    });
    installBehaviors({ mailRateLimit: { query } });

    const listQuery = MailRateLimit.query();
    expect(listQuery).toBeInstanceOf(MailRateLimitListQuery);
    const result = await listQuery.execute();

    expect(query).toHaveBeenCalledWith();
    expect(result).toBeInstanceOf(MailRateLimitList);
    expect(result.items[0]).toBeInstanceOf(MailRateLimitListItem);
    expect(result.items[0]?.rateLimit).toBe(3000);
    expect(result.totalCount).toBe(5);
  });

  test("list items retain ghostmaker class identity", () => {
    const item = new MailRateLimitListItem(buildMailRateLimitData());

    expect(item).toBeInstanceOf(MailRateLimitListItem);
    expect(item).toBeInstanceOf(MailRateLimitCommon);
    expect(item).toBeInstanceOf(MailRateLimit);
  });

  test("findCommon and getCommon delegate for a plain reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildMailRateLimitData({ id: "rl-1" }));
    installBehaviors({ mailRateLimit: { find } });
    const reference = MailRateLimit.ofId("rl-1");

    await expect(reference.findCommon()).resolves.toBeInstanceOf(
      MailRateLimitCommon,
    );
    await expect(reference.getCommon()).resolves.toBeInstanceOf(
      MailRateLimitCommon,
    );
    expect(find).toHaveBeenNthCalledWith(1, "rl-1");
    expect(find).toHaveBeenNthCalledWith(2, "rl-1");
  });

  test("findCommon returns undefined and getCommon throws when the rate limit is missing", async () => {
    installBehaviors({
      mailRateLimit: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      MailRateLimit.ofId("missing").findCommon(),
    ).resolves.toBeUndefined();
    await expect(MailRateLimit.ofId("missing").getCommon()).rejects.toThrow(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon reuse an already materialized model without refetching", async () => {
    const find = vi.fn().mockResolvedValue(buildMailRateLimitData());
    installBehaviors({ mailRateLimit: { find } });
    const detailed = await MailRateLimit.get("ratelimit-id");
    find.mockClear();

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("list items are already common and return themselves from findCommon and getCommon", async () => {
    const item = new MailRateLimitListItem(buildMailRateLimitData());

    await expect(item.findCommon()).resolves.toBe(item);
    await expect(item.getCommon()).resolves.toBe(item);
  });
});
