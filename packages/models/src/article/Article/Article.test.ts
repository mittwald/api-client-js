import type * as ReactGhostmaker from "@mittwald/react-ghostmaker";
vi.mock("@mittwald/react-ghostmaker", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { afterEach, describe, expect, test, vi } from "vitest";

import { ObjectNotFoundError } from "../../errors/ObjectNotFoundError.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import {
  buildArticleAttributeData,
  buildArticleListItemData,
  buildArticleModifierData,
  buildArticleTemplateData,
  buildArticleTagData,
  buildArticleData,
} from "../../testing/builders/buildArticleData.js";
import { config } from "../../config/config.js";
import { ReferenceModel } from "../../base/index.js";
import {
  StorageArticleModifier,
  CpuArticleAttribute,
  AIHostingArticle,
  ArticleAttribute,
  ArticleListQuery,
  ArticleDetailed,
  ArticleListItem,
  ArticleModifier,
  ArticleCommon,
  ArticleList,
  Article,
} from "./internal.js";

afterEach(resetBehaviors);

describe("Article reference", () => {
  test("find delegates to the article behavior and materializes an article", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildArticleData({ articleId: "a-1" }));
    installBehaviors({ article: { find } });

    const result = await Article.find("a-1");

    expect(find).toHaveBeenCalledWith("a-1");
    expect(result).toBeInstanceOf(ArticleCommon);
    expect(result?.id).toBe("a-1");
  });

  test("find returns undefined for a missing article", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ article: { find } });

    expect(await Article.find("missing")).toBeUndefined();
  });

  test("get returns a found article", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildArticleData({ articleId: "a-2" }));
    installBehaviors({ article: { find } });

    const result = await Article.get("a-2");

    expect(result.id).toBe("a-2");
  });

  test("get throws ObjectNotFoundError for a missing article", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ article: { find } });

    await expect(Article.get("missing")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("ofId creates a reference without calling a behavior", () => {
    const find = vi.fn();
    installBehaviors({ article: { find } });

    const article = Article.ofId("a-3");

    expect(article).toBeInstanceOf(Article);
    expect(article).toBeInstanceOf(ReferenceModel);
    expect(article.id).toBe("a-3");
    expect(find).not.toHaveBeenCalled();
  });
});

describe("Article data", () => {
  test("maps common values, tags, and price", () => {
    const article = new ArticleDetailed(
      buildArticleData({
        tags: [buildArticleTagData({ name: "featured" })],
        description: "A useful article",
        name: "Useful",
        price: 1234,
      }),
    );

    expect(article.price.getAmount()).toBe(1234);
    expect(article.name).toBe("Useful");
    expect(article.description).toBe("A useful article");
    expect(article.tags[0]?.name).toBe("featured");
    expect(article.getTag("featured")).toBe(article.tags[0]);
    expect(article.hasTag("featured")).toBe(true);
    expect(article.hasTag("missing")).toBe(false);
  });

  test("finds optional and required attributes by class", () => {
    const article = new ArticleDetailed(
      buildArticleData({
        attributes: [buildArticleAttributeData({ key: "cpu", value: "2" })],
      }),
    );

    expect(article.getAttribute(CpuArticleAttribute)).toBeInstanceOf(
      CpuArticleAttribute,
    );
    expect(article.getRequiredAttribute(CpuArticleAttribute)).toBeInstanceOf(
      CpuArticleAttribute,
    );
    expect(article.getAttribute(ArticleAttribute)).toBeInstanceOf(
      ArticleAttribute,
    );
    expect(() =>
      article.getRequiredAttribute(class Missing extends ArticleAttribute {}),
    ).toThrow("Required attribute not found");
  });

  test("finds optional and required modifiers by class", () => {
    const article = new ArticleDetailed(
      buildArticleData({
        modifierArticles: [
          buildArticleModifierData({ articleId: "additional-storage" }),
        ],
      }),
    );

    expect(article.getModifier(StorageArticleModifier)).toBeInstanceOf(
      StorageArticleModifier,
    );
    expect(article.getRequiredModifier(StorageArticleModifier)).toBeInstanceOf(
      StorageArticleModifier,
    );
    expect(() =>
      article.getRequiredModifier(class Missing extends ArticleModifier {}),
    ).toThrow("Required modifier not found");
  });

  test("combines an attribute value and unit", () => {
    expect(
      new ArticleAttribute(
        buildArticleAttributeData({ unit: "GiB", value: "4" }),
      ).valueWithUnit,
    ).toBe("4GiB");
    expect(
      new ArticleAttribute(buildArticleAttributeData({ value: "4" }))
        .valueWithUnit,
    ).toBe("4");
  });

  test.each([
    ["cpu", "cpu"],
    ["vcpu", "vcpu"],
  ] as const)("derives CPU data for %s", (key, type) => {
    const attribute = new CpuArticleAttribute(
      buildArticleAttributeData({ value: "2", key }),
    );

    expect(attribute.cpuCount).toBe(2);
    expect(attribute.type).toBe(type);
  });

  test("derives AI Hosting limits from attributes", async () => {
    const find = vi.fn().mockResolvedValue(
      buildArticleData({
        attributes: [
          buildArticleAttributeData({ key: "monthlyTokens", value: "1000" }),
          buildArticleAttributeData({
            key: "requestsPerMinute",
            value: "60",
          }),
        ],
        template: buildArticleTemplateData({ name: "AI-Hosting" }),
      }),
    );
    installBehaviors({ article: { find } });

    const article = await Article.find("ai");

    expect(article).toBeInstanceOf(AIHostingArticle);
    expect((article as AIHostingArticle).getMonthlyTokens()).toBe(1000);
    expect((article as AIHostingArticle).getRequestsPerMinute()).toBe(60);
  });

  test("materializes modifier limits and article references", () => {
    const article = new ArticleDetailed(
      buildArticleData({
        modifierArticles: [
          buildArticleModifierData({
            articleId: "modifier-a",
            maxArticleCount: 3,
          }),
        ],
      }),
    );

    expect(article.modifiers[0]?.maxCount).toBe(3);
    expect(article.modifiers[0]?.article).toBeInstanceOf(Article);
    expect(article.modifiers[0]?.article.id).toBe("modifier-a");
  });
});

describe("Article list query", () => {
  test("applies the default pagination limit", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildArticleListItemData()],
      totalCount: 1,
    });
    installBehaviors({ article: { list } });

    const result = await Article.query().execute();

    expect(result).toBeInstanceOf(ArticleList);
    expect(result.items[0]).toBeInstanceOf(ArticleListItem);
    expect(result.totalCount).toBe(1);
    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({ limit: config.defaultPaginationLimit }),
    );
  });

  test("uses an explicit pagination limit", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ article: { list } });

    await Article.query({ limit: 5 }).execute();

    expect(list).toHaveBeenCalledWith(expect.objectContaining({ limit: 5 }));
  });

  test("materializes items and total count", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildArticleListItemData({ articleId: "a-1" }),
        buildArticleListItemData({ articleId: "a-2" }),
      ],
      totalCount: 7,
    });
    installBehaviors({ article: { list } });

    const result = await Article.query().execute();

    expect(result.items.map(({ id }) => id)).toEqual(["a-1", "a-2"]);
    expect(result.items.every((item) => item instanceof ArticleListItem)).toBe(
      true,
    );
    expect(result.totalCount).toBe(7);
  });

  test("returns the lowest-priced item", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildArticleListItemData({ articleId: "high", price: 2000 }),
        buildArticleListItemData({ articleId: "low", price: 500 }),
      ],
      totalCount: 2,
    });
    installBehaviors({ article: { list } });

    const result = await Article.query().getLowestPrice();

    expect(result?.id).toBe("low");
    expect(result?.price.getAmount()).toBe(500);
  });

  test("returns no lowest-priced item for an empty result", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ article: { list } });

    expect(await Article.query().getLowestPrice()).toBeUndefined();
  });

  test("gets the total count", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 42, items: [] });
    installBehaviors({ article: { list } });

    expect(await Article.query().getTotalCount()).toBe(42);
  });

  test("refine merges query parameters into a new query", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ article: { list } });
    const original = Article.query({ limit: 10 });

    const refined = original.refine({ templateNames: ["unknown"] });
    await refined.execute();

    expect(refined).toBeInstanceOf(ArticleListQuery);
    expect(refined).not.toBe(original);
    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({ templateNames: ["unknown"], limit: 10 }),
    );
  });

  test("find returns the item matching a predicate", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildArticleListItemData({ articleId: "a-1" }),
        buildArticleListItemData({ articleId: "a-2" }),
      ],
      totalCount: 2,
    });
    installBehaviors({ article: { list } });

    const result = await Article.query().find(({ id }) => id === "a-2");

    expect(result?.id).toBe("a-2");
  });
});

describe("Article common variant", () => {
  test("getCommon on a reference delegates to the behavior and materializes the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildArticleData({ articleId: "a-1" }));
    installBehaviors({ article: { find } });

    const result = await Article.ofId("a-1").getCommon();

    expect(find).toHaveBeenCalledWith("a-1");
    expect(result).toBeInstanceOf(ArticleCommon);
    expect(result.id).toBe("a-1");
  });

  test("getCommon on a reference throws ObjectNotFoundError when not found", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ article: { find } });

    await expect(Article.ofId("missing").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon on a reference delegates and returns the common variant when found", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildArticleData({ articleId: "a-2" }));
    installBehaviors({ article: { find } });

    const result = await Article.ofId("a-2").findCommon();

    expect(find).toHaveBeenCalledWith("a-2");
    expect(result).toBeInstanceOf(ArticleCommon);
    expect(result?.id).toBe("a-2");
  });

  test("findCommon on a reference throws ObjectNotFoundError when not found (delegates via get)", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ article: { find } });

    await expect(Article.ofId("missing").findCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });
});

describe("Article variant idempotency", () => {
  test("getCommon on an already-materialized common model returns itself without calling a behavior", async () => {
    const find = vi.fn();
    installBehaviors({ article: { find } });
    const detailed = new ArticleDetailed(
      buildArticleData({ articleId: "a-3" }),
    );

    const result = await detailed.getCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("findCommon on an already-materialized common model returns itself without calling a behavior", async () => {
    const find = vi.fn();
    installBehaviors({ article: { find } });
    const detailed = new ArticleDetailed(
      buildArticleData({ articleId: "a-3" }),
    );

    const result = await detailed.findCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on a list item returns the list item itself without calling a behavior", async () => {
    const find = vi.fn();
    installBehaviors({ article: { find } });
    const listItem = new ArticleListItem(
      buildArticleListItemData({ articleId: "a-4" }),
    );

    expect(await listItem.getCommon()).toBe(listItem);
    expect(find).not.toHaveBeenCalled();
  });
});

describe("Article absent optional data", () => {
  test("defaults derived collections to empty arrays when source data is absent", () => {
    const article = new ArticleDetailed(
      buildArticleData({
        modifierArticles: undefined,
        attributes: undefined,
        tags: undefined,
      }),
    );

    expect(article.attributes).toEqual([]);
    expect(article.modifiers).toEqual([]);
    expect(article.tags).toEqual([]);
  });

  test("leaves optional scalar fields undefined when absent", () => {
    const article = new ArticleDetailed(
      buildArticleData({
        forcedInvoicingPeriodInMonth: undefined,
        hasIndependentContractPeriod: undefined,
        hideOnInvoice: undefined,
        description: undefined,
      }),
    );

    expect(article.description).toBeUndefined();
    expect(article.forcedInvoicingPeriodInMonth).toBeUndefined();
    expect(article.hideOnInvoice).toBeUndefined();
    expect(article.hasIndependentContractPeriod).toBeUndefined();
  });

  test("returns undefined for an attribute type that is not present", () => {
    const article = new ArticleDetailed(buildArticleData({ attributes: [] }));

    expect(article.getAttribute(CpuArticleAttribute)).toBeUndefined();
  });

  test("returns undefined for a modifier type that is not present", () => {
    const article = new ArticleDetailed(
      buildArticleData({ modifierArticles: [] }),
    );

    expect(article.getModifier(StorageArticleModifier)).toBeUndefined();
  });

  test("returns undefined for a tag that is not present", () => {
    const article = new ArticleDetailed(buildArticleData({ tags: [] }));

    expect(article.getTag("missing")).toBeUndefined();
  });
});
