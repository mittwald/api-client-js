import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  Article,
  ArticleDetailed,
  ArticleList,
  ArticleListItem,
  ArticleListQuery,
} from "./Article.js";
import { ArticleBehaviors } from "./behaviors/types.js";
import { ArticleData, ArticleListItemData } from "./types.js";

const articleData = (overrides: Partial<ArticleData> = {}): ArticleData =>
  ({
    articleId: "article-1",
    name: "Some article",
    price: 1999,
    ...overrides,
  }) as unknown as ArticleData;

const listItemData = (
  overrides: Partial<ArticleData> = {},
): ArticleListItemData =>
  articleData(overrides) as unknown as ArticleListItemData;

const article = {
  find: jest.fn<ArticleBehaviors["find"]>(),
  list: jest.fn<ArticleBehaviors["list"]>(),
};

beforeEach(() => {
  Object.values(article).forEach((mock) => mock.mockReset());
  config.behaviors.article = article;
});

describe("Article reference", () => {
  test("ofId keeps the id", () => {
    expect(Article.ofId("article-1").id).toBe("article-1");
  });

  test("describes itself with class name and id", () => {
    expect(Article.ofId("article-1").describe()).toBe("Article@article-1");
  });
});

describe("Article.find", () => {
  test("wraps the found data in an ArticleDetailed", async () => {
    article.find.mockResolvedValue(articleData());

    const found = await Article.find("article-1");

    expect(article.find).toHaveBeenCalledWith("article-1");
    expect(found).toBeInstanceOf(ArticleDetailed);
  });

  test("returns undefined when the behavior finds nothing", async () => {
    article.find.mockResolvedValue(undefined);

    await expect(Article.find("missing")).resolves.toBeUndefined();
  });
});

describe("Article.get", () => {
  test("returns the article when it exists", async () => {
    article.find.mockResolvedValue(articleData());

    await expect(Article.get("article-1")).resolves.toBeInstanceOf(
      ArticleDetailed,
    );
  });

  test("throws a named ObjectNotFoundError when it does not exist", async () => {
    article.find.mockResolvedValue(undefined);

    await expect(Article.get("missing")).rejects.toThrow(ObjectNotFoundError);
    await expect(Article.get("missing")).rejects.toThrow(
      "Article@missing not found",
    );
  });
});

describe("ArticleDetailed", () => {
  test("exposes the raw data", () => {
    expect(new ArticleDetailed(articleData()).data.name).toBe("Some article");
  });

  test("turns the price into Money, in EUR", () => {
    const detailed = new ArticleDetailed(articleData());

    expect(detailed.price.getAmount()).toBe(1999);
    expect(detailed.price.getCurrency()).toBe("EUR");
    expect(detailed.price.toUnit()).toBe(19.99);
  });

  test("handles a zero price", () => {
    const detailed = new ArticleDetailed(articleData({ price: 0 }));

    expect(detailed.price.getAmount()).toBe(0);
  });

  /**
   * `ArticleCommon` calls `super([data])`, which passes constructor arguments
   * only to its `DataModel` base and none to its `Article` base — so the
   * `ReferenceModel` id is never set. Article data identifies itself via
   * `articleId` rather than `id`, so this needs an explicit mapping to fix.
   */
  test("does not populate the reference id from the data", () => {
    const detailed = new ArticleDetailed(articleData());

    expect(detailed.id).toBeUndefined();
    expect(detailed.describe()).toBe("ArticleDetailed@undefined");
  });

  test("leaves the list item id unpopulated in the same way", () => {
    expect(new ArticleListItem(listItemData()).id).toBeUndefined();
  });
});

describe("ArticleListQuery", () => {
  test("applies the default pagination limit", async () => {
    article.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Article.query().execute();

    expect(article.list).toHaveBeenCalledWith({
      limit: config.defaultPaginationLimit,
    });
  });

  test("lets an explicit limit win over the default", async () => {
    article.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Article.query({ limit: 5 }).execute();

    expect(article.list).toHaveBeenCalledWith({ limit: 5 });
  });

  test("wraps the response into an ArticleList of ArticleListItems", async () => {
    article.list.mockResolvedValue({ items: [listItemData()], totalCount: 3 });

    const result = await Article.query().execute();

    expect(result).toBeInstanceOf(ArticleList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(ArticleListItem);
    expect(result.items[0].price.getAmount()).toBe(1999);
  });

  test("refine merges the new query on top of the existing one", async () => {
    article.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Article.query({ limit: 5 }).refine({ limit: 10 }).execute();

    expect(article.list).toHaveBeenCalledWith({ limit: 10 });
  });

  test("refine returns a new query rather than mutating the old one", () => {
    const query = Article.query({ limit: 5 });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined).toBeInstanceOf(ArticleListQuery);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  test("getTotalCount asks for a single item and reports the reported total", async () => {
    article.list.mockResolvedValue({ items: [listItemData()], totalCount: 42 });

    await expect(Article.query().getTotalCount()).resolves.toBe(42);
    expect(article.list).toHaveBeenCalledWith({ limit: 1 });
  });

  test("findOneAndOnly returns the single match", async () => {
    article.list.mockResolvedValue({ items: [listItemData()], totalCount: 1 });

    const found = await Article.query().findOneAndOnly();

    expect(found?.data.name).toBe("Some article");
  });

  test("findOneAndOnly returns undefined when the total count is not one", async () => {
    article.list.mockResolvedValue({ items: [listItemData()], totalCount: 2 });

    await expect(Article.query().findOneAndOnly()).resolves.toBeUndefined();
  });
});
