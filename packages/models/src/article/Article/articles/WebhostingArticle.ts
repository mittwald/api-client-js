import { WebhostingArticleTemplate } from "../templates/WebhostingArticleTemplate";
import { HostingArticle, Article } from "../internal";

export class WebhostingArticle extends HostingArticle {
  public static async getArticleWithLowestPrice() {
    const articles = await this.getOrderableArticles().execute();

    if (articles.items.length === 0) return undefined;

    return Array.from(articles.items).sort((a, b) =>
      a.price.lessThan(b.price) ? -1 : a.price.greaterThan(b.price) ? 1 : 0,
    )[0];
  }

  public static getOrderableArticles() {
    return Article.query({
      templateNames: [WebhostingArticleTemplate.templateName],
      orderable: ["deprecated", "full"],
    });
  }

  protected getModifierBytes(): number[] {
    return [40, 60, 80, 100];
  }
}
