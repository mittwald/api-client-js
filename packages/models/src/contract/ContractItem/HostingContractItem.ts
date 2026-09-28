import type { ContractItemDetailed } from "./ContractItem.js";

import { StorageArticleTemplate } from "../../article/Article/templates/StorageArticleTemplate.js";
import { HostingArticle } from "../../article/Article/internal.js";
import { type Money, ZeroMoney } from "../../common/index.js";
import { ReferenceModel } from "../../base/index.js";

export class HostingContractItem extends ReferenceModel {
  public readonly contractItem: ContractItemDetailed;
  public readonly storagePrice: Money;

  protected constructor(contractItem: ContractItemDetailed) {
    super(contractItem.id);
    this.contractItem = contractItem;
    this.storagePrice = this.contractItem
      .findArticlesOfTemplate(StorageArticleTemplate)
      .reduce((acc, a) => acc.add(a.totalPrice), ZeroMoney);
  }

  public static fromContractItem(contractItem: ContractItemDetailed) {
    return new HostingContractItem(contractItem);
  }

  public async getHostingArticle() {
    const article = await this.contractItem.baseArticle!.article.getDetailed();
    return article.asType(HostingArticle);
  }

  public async getStorage() {
    const article = await this.getHostingArticle();

    const storageModifierBytes = await article.storageModifier.getBytes();

    const additionalStorageArticlesCount = this.contractItem
      .findArticlesOfTemplate(StorageArticleTemplate)
      .reduce((acc, a) => acc + a.amount, 0);

    return storageModifierBytes
      .multiply(additionalStorageArticlesCount)
      .add(article.baseStorageAttribute.bytes);
  }
}
