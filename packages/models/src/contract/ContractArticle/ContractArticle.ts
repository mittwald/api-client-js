import type { ContractArticleData } from "./types";

import { StorageArticle, Article } from "../../article";
import { DataModel } from "../../base";
import { Money } from "../../common";

export class ContractArticle extends DataModel<ContractArticleData> {
  public readonly amount: number;
  public readonly article: Article;
  public readonly articleTemplateId: string;
  public readonly description?: string;
  public readonly displayName: string;
  public readonly id: string;
  public readonly name: string;
  public readonly totalPrice: Money;
  public readonly unitPrice: Money;

  public constructor(data: ContractArticleData) {
    super(data);

    this.id = data.id;
    this.article = Article.ofId(data.id);
    this.articleTemplateId = data.articleTemplateId;
    this.unitPrice = Money({ amount: data.unitPrice.value, currency: "EUR" });
    this.totalPrice = this.unitPrice.multiply(data.amount);
    this.amount = data.amount;
    this.name = data.name;
    this.description = data.description;
    this.displayName = `${data.name} (${data.description})`;
  }

  public async getTotalBytes() {
    const article = await Article.get(this.article.id);
    if (article instanceof StorageArticle) {
      return article.bytes.multiply(this.amount);
    }
  }
}
