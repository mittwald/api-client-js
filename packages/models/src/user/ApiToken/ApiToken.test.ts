import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";

import { afterEach , describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function"
      ? (type as { name?: string }).name
      : undefined,
}));

import { DateTime } from "luxon";

import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { buildApiTokenListItemData, buildApiTokenData } from "../../testing/builders/buildApiTokenData.js";
import { ReferenceModel } from "../../base/index.js";
import { installBehaviors, resetBehaviors } from "../../testing/installBehaviors.js";
import { ApiTokenDetailed, ApiTokenListItem, ApiTokenList, ApiToken } from "./ApiToken.js";

afterEach(resetBehaviors);

describe("ApiToken references", () => {
  test("find delegates and returns detailed data", async () => {
    const find = vi.fn().mockResolvedValue(buildApiTokenData({ apiTokenId: "a-1" }));
    installBehaviors({ apiToken: { find } });
    const result = await ApiToken.find("a-1");
    expect(find).toHaveBeenCalledWith("a-1");
    expect(result).toBeInstanceOf(ApiTokenDetailed);
    expect(result?.id).toBe("a-1");
  });

  test("find returns undefined when missing", async () => {
    installBehaviors({ apiToken: { find: vi.fn().mockResolvedValue(undefined) } });
    expect(await ApiToken.find("missing")).toBeUndefined();
  });

  test("get returns a detailed token and throws when missing", async () => {
    const find = vi.fn().mockResolvedValueOnce(buildApiTokenData()).mockResolvedValueOnce(undefined);
    installBehaviors({ apiToken: { find } });
    expect(await ApiToken.get("apitoken-id")).toBeInstanceOf(ApiTokenDetailed);
    await expect(ApiToken.get("missing")).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("findDetailed delegates with the reference id", async () => {
    const find = vi.fn().mockResolvedValue(buildApiTokenData({ apiTokenId: "a-2" }));
    installBehaviors({ apiToken: { find } });
    await ApiToken.ofId("a-2").findDetailed();
    expect(find).toHaveBeenCalledWith("a-2");
  });
});

test("maps data and expiration getters", async () => {
  const find = vi.fn()
    .mockResolvedValueOnce(buildApiTokenData({ expiresAt: "2000-01-01T00:00:00.000Z", description: "past" }))
    .mockResolvedValueOnce(buildApiTokenData({ expiresAt: "2999-01-01T00:00:00.000Z" }));
  installBehaviors({ apiToken: { find } });
  const past = await ApiToken.get("apitoken-id");
  const future = await ApiToken.get("apitoken-id");
  expect(past.description).toBe("past");
  expect(past.expiresAt).toBeInstanceOf(DateTime);
  expect(past.expired).toBe(true);
  expect(future.expired).toBe(false);
});

test("findCommon/getCommon resolve references and stay idempotent once materialized", async () => {
  const find = vi.fn()
    .mockResolvedValueOnce(buildApiTokenData({ apiTokenId: "a-c" }))
    .mockResolvedValueOnce(buildApiTokenData({ apiTokenId: "a-g" }));
  installBehaviors({ apiToken: { find } });
  const common = await ApiToken.ofId("a-c").findCommon();
  expect(common).toBeInstanceOf(ApiTokenDetailed);
  expect(common?.id).toBe("a-c");
  expect(await ApiToken.ofId("a-g").getCommon()).toBeInstanceOf(ApiTokenDetailed);

  const materialized = new ApiTokenDetailed(buildApiTokenData({ apiTokenId: "a-1" }));
  find.mockClear();
  expect(await materialized.findCommon()).toBe(materialized);
  expect(await materialized.getCommon()).toBe(materialized);
  expect(find).not.toHaveBeenCalled();
});

test("findCommon yields undefined and getCommon throws for missing tokens", async () => {
  installBehaviors({ apiToken: { find: vi.fn().mockResolvedValue(undefined) } });
  expect(await ApiToken.ofId("missing").findCommon()).toBeUndefined();
  await expect(ApiToken.ofId("missing").getCommon()).rejects.toBeInstanceOf(ObjectNotFoundError);
});

test("treats a token without expiration as non-expiring", () => {
  const token = new ApiTokenDetailed(buildApiTokenData());
  expect(token.expiresAt).toBeUndefined();
  expect(token.expired).toBe(false);
});

test("materializes list items and total count", async () => {
  const list = vi.fn().mockResolvedValue({ items: [buildApiTokenListItemData()], totalCount: 7 });
  installBehaviors({ apiToken: { list } });
  const result = await ApiToken.query().execute();
  expect(result).toBeInstanceOf(ApiTokenList);
  expect(result.items[0]).toBeInstanceOf(ApiTokenListItem);
  expect(result.totalCount).toBe(7);
  expect(await ApiToken.query().getTotalCount()).toBe(7);
});

test("preserves the list item composition chain", () => {
  const item = new ApiTokenListItem(buildApiTokenListItemData());
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
});
