import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildTldData } from "../../testing/builders/buildTldData.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { TldDetailed, TldListItem, TldCommon, TldList, Tld } from "./Tld.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (t: unknown) =>
    typeof t === "function" ? (t as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

describe("Tld", () => {
  test("findCommon delegates to a detailed variant for a reference", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildTldData({ tld: "de" })],
      totalCount: 1,
    });
    installBehaviors({ tld: { query } });

    const common = await Tld.ofTld("de").findCommon();

    expect(common).toBeInstanceOf(TldCommon);
    expect(query).toHaveBeenCalled();
  });

  test("getCommon throws for a missing reference", async () => {
    installBehaviors({
      tld: {
        query: vi.fn().mockResolvedValue({ totalCount: 0, items: [] }),
      },
    });

    await expect(Tld.ofTld("de").getCommon()).rejects.toThrow();
  });

  test("getCommon/findCommon are idempotent on materialized models", async () => {
    const query = vi.fn();
    installBehaviors({ tld: { query } });
    const detailed = new TldDetailed(buildTldData());
    const item = new TldListItem(buildTldData());

    expect(await detailed.getCommon()).toBe(detailed);
    expect(await detailed.findCommon()).toBe(detailed);
    expect(await item.getCommon()).toBe(item);
    expect(await item.findCommon()).toBe(item);
    expect(query).not.toHaveBeenCalled();
  });

  test("find queries and returns the matching detailed TLD", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildTldData({ tld: "de" })],
      totalCount: 1,
    });
    installBehaviors({ tld: { query } });

    const tld = await Tld.find("de");

    expect(query).toHaveBeenCalledWith({});
    expect(tld).toBeInstanceOf(TldDetailed);
    expect(tld?.id).toBe("de");
    expect(await Tld.find("com")).toBeUndefined();
  });

  test("get throws when the TLD is missing", async () => {
    const query = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ tld: { query } });

    await expect(Tld.get("missing")).rejects.toThrow();
  });

  test("getContactSchemas delegates with the TLD id", async () => {
    const schemas = { jsonSchemaOwnerC: {} };
    const getContactSchemas = vi.fn().mockResolvedValue(schemas);
    installBehaviors({ tld: { getContactSchemas } });

    const result = await Tld.ofTld("de").getContactSchemas();

    expect(getContactSchemas).toHaveBeenCalledWith("de");
    expect(result).toBe(schemas);
  });

  test("query materializes pagination data and supports membership checks", async () => {
    const query = vi.fn().mockResolvedValue({
      items: [buildTldData({ tld: "de" }), buildTldData({ tld: "com" })],
      totalCount: 2,
    });
    installBehaviors({ tld: { query } });

    const list = await Tld.query().execute();

    expect(query).toHaveBeenCalledWith({});
    expect(list).toBeInstanceOf(TldList);
    expect(list.items).toHaveLength(2);
    expect(list.items[0]).toBeInstanceOf(TldListItem);
    expect(list.totalCount).toBe(2);
    expect(list.includesTld("de")).toBe(true);
    expect(list.includesTld("xyz")).toBe(false);
  });

  test("exposes derived TLD properties", () => {
    const tld = new TldListItem(
      buildTldData({
        transferAuthentication: "email",
        rgpDays: 42,
        tld: "com",
        irtp: true,
      }),
    );

    expect(tld.tld).toBe("com");
    expect(tld.irtp).toBe(true);
    expect(tld.rgpDays).toBe(42);
    expect(tld.transferAuthentication).toBe("email");
  });

  test("preserves the ghostmaker identity chain", () => {
    const tld = new TldListItem(buildTldData());

    expect(tld).toBeInstanceOf(TldListItem);
    expect(tld).toBeInstanceOf(TldCommon);
    expect(tld).toBeInstanceOf(Tld);
    expect(tld).toBeInstanceOf(ReferenceModel);
    // ADR-0004: data is a capability mixin, not a nominal base — assert the
    // observable payload instead of `instanceof DataModel`.
    expect(tld.data).toBeDefined();
  });
});
