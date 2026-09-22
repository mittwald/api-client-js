import { AIHostingArticleTemplate } from "../templates/AIHostingArticleTemplate";
import { ArticleCommon, Article } from "../internal";

export class AIHostingArticle extends ArticleCommon {
  public static async getArticleWithLowestPrice() {
    const articles = await this.getOrderableArticles().execute();

    if (articles.items.length === 0) return undefined;

    return Array.from(articles.items).sort((a, b) =>
      a.price.lessThan(b.price) ? -1 : a.price.greaterThan(b.price) ? 1 : 0,
    )[0];
  }

  public static getOrderableArticles() {
    return Article.query({
      templateNames: [AIHostingArticleTemplate.templateName],
      orderable: ["deprecated", "full"],
    });
  }

  public getMonthlyTokens(): number {
    const tokenLimit =
      this.attributes.find((a) => a.key === "monthlyTokens")?.value ?? "0";
    return parseInt(tokenLimit, 10);
  }

  public getRequestsPerMinute(): number {
    const rpmLimit =
      this.attributes.find((a) => a.key === "requestsPerMinute")?.value ?? "0";
    return parseInt(rpmLimit, 10);
  }
}
