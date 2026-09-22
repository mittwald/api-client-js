import { afterEach, describe, expect, test } from "vitest";

import { buildContractArticleData } from "../../testing/builders/buildContractArticleData";
import { ContractArticle } from "./ContractArticle";
import { resetBehaviors } from "../../testing";
import { Article } from "../../article";

afterEach(resetBehaviors);

describe("ContractArticle", () => {
  test("constructs article data and derived prices", () => {
    const data = buildContractArticleData({
      unitPrice: { currency: "EUR", value: 1000 },
      articleTemplateId: "template-1",
      description: "Description",
      name: "Article name",
      id: "article-1",
      amount: 3,
    });

    const article = new ContractArticle(data);

    expect(article.id).toBe(data.id);
    expect(article.articleTemplateId).toBe(data.articleTemplateId);
    expect(article.amount).toBe(data.amount);
    expect(article.name).toBe(data.name);
    expect(article.description).toBe(data.description);
    expect(article.article).toBeInstanceOf(Article);
    expect(article.article.id).toBe(data.id);
    expect(article.unitPrice.getAmount()).toBe(1000);
    expect(article.totalPrice.getAmount()).toBe(3000);
    expect(article.displayName).toBe("Article name (Description)");
  });
});
