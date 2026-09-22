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

import ObjectNotFoundError from "../../errors/ObjectNotFoundError";
import { buildSessionListItemData, buildSessionData } from "../../testing/builders/buildSessionData";
import { ReferenceModel } from "../../base";
import { installBehaviors, resetBehaviors } from "../../testing/installBehaviors";
import { SessionDetailed, SessionListItem, SessionList, Session } from "./Session";

afterEach(resetBehaviors);

test("find and get map found and missing sessions", async () => {
  const find = vi.fn()
    .mockResolvedValueOnce(buildSessionData({ tokenId: "t-1" }))
    .mockResolvedValueOnce(buildSessionData({ tokenId: "t-2" }))
    .mockResolvedValueOnce(undefined)
    .mockResolvedValueOnce(undefined);
  installBehaviors({ session: { find } });
  const found = await Session.find("t-1");
  expect(find).toHaveBeenCalledWith("t-1");
  expect(found).toBeInstanceOf(SessionDetailed);
  expect(found?.id).toBe("t-1");
  expect(await Session.get("t-2")).toBeInstanceOf(SessionDetailed);
  expect(await Session.find("missing")).toBeUndefined();
  await expect(Session.get("missing")).rejects.toBeInstanceOf(ObjectNotFoundError);
});

test("findDetailed delegates with the reference id", async () => {
  const find = vi.fn().mockResolvedValue(buildSessionData({ tokenId: "t-3" }));
  installBehaviors({ session: { find } });
  await Session.ofId("t-3").findDetailed();
  expect(find).toHaveBeenCalledWith("t-3");
});

describe("derived session data", () => {
  test("maps device and date fields", () => {
    const session = new SessionDetailed(buildSessionData({ device: { browser: "Firefox", model: "Phone", type: "mobile", os: "Linux" } }));
    expect(session.isMobile).toBe(true);
    expect(session.browser).toBe("Firefox");
    expect(session.os).toBe("Linux");
    expect(session.model).toBe("Phone");
    expect(session.createdAt).toBeInstanceOf(DateTime);
    expect(session.lastAccess).toBe(session.createdAt);
    expect(new SessionDetailed(buildSessionData()).isMobile).toBe(false);
  });

  test.each([
    [{ country: "Germany", city: "Espelkamp" }, "Germany, Espelkamp"],
    [{ country: "Germany" }, "Germany"],
    [{ city: "Espelkamp" }, "Espelkamp"],
    [undefined, undefined],
  ])("formats location", (location, expected) => {
    expect(new SessionDetailed(buildSessionData({ location })).location).toBe(expected);
  });
});

test("findCommon/getCommon resolve references and stay idempotent once materialized", async () => {
  const find = vi.fn()
    .mockResolvedValueOnce(buildSessionData({ tokenId: "s-c" }))
    .mockResolvedValueOnce(buildSessionData({ tokenId: "s-g" }));
  installBehaviors({ session: { find } });
  const common = await Session.ofId("s-c").findCommon();
  expect(common).toBeInstanceOf(SessionDetailed);
  expect(common?.id).toBe("s-c");
  expect(await Session.ofId("s-g").getCommon()).toBeInstanceOf(SessionDetailed);

  const materialized = new SessionDetailed(buildSessionData({ tokenId: "s-1" }));
  find.mockClear();
  expect(await materialized.findCommon()).toBe(materialized);
  expect(await materialized.getCommon()).toBe(materialized);
  expect(find).not.toHaveBeenCalled();
});

test("findCommon yields undefined and getCommon throws for missing sessions", async () => {
  installBehaviors({ session: { find: vi.fn().mockResolvedValue(undefined) } });
  expect(await Session.ofId("missing").findCommon()).toBeUndefined();
  await expect(Session.ofId("missing").getCommon()).rejects.toBeInstanceOf(ObjectNotFoundError);
});

test("leaves the optional device model undefined when absent", () => {
  const session = new SessionDetailed(buildSessionData());
  expect(session.model).toBeUndefined();
});

test("token helpers delegate and identify the current session", async () => {
  const getToken = vi.fn().mockResolvedValue({ id: "current" });
  installBehaviors({ session: { getToken } });
  expect(await Session.getToken()).toEqual({ id: "current" });
  expect(await Session.ofId("current").isCurrentSession()).toBe(true);
  expect(await Session.ofId("other").isCurrentSession()).toBe(false);
  expect(getToken).toHaveBeenCalledTimes(3);
});

test("materializes a paginated list and preserves item composition", async () => {
  const list = vi.fn().mockResolvedValue({ items: [buildSessionListItemData()], totalCount: 4 });
  installBehaviors({ session: { list } });
  const result = await Session.query().execute();
  const item = result.items[0];
  expect(result).toBeInstanceOf(SessionList);
  expect(item).toBeInstanceOf(SessionListItem);
  expect(item).toBeInstanceOf(Session);
  expect(item).toBeInstanceOf(ReferenceModel);
  expect(item.data).toBeDefined();
  expect(result.totalCount).toBe(4);
});
