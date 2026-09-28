import { DateTime } from "luxon";

import type { ContractItemCommon } from "../ContractItem/index.js";
import type { PlanChangeData } from "./types.js";

import { ContractArticle } from "../ContractArticle/index.js";
import { type Money, ZeroMoney } from "../../common/index.js";
import { User } from "../../user/User/User.js";
import { DataModel } from "../../base/index.js";

export class PlanChange extends DataModel<PlanChangeData> {
  public readonly articles: ContractArticle[];
  public readonly contractItem: ContractItemCommon;
  public readonly isForced?: boolean;
  public readonly scheduledByUser?: User;
  public readonly targetDate: DateTime;
  public readonly totalPrice: Money;

  public constructor(contractItem: ContractItemCommon, data: PlanChangeData) {
    super(data);
    this.contractItem = contractItem;
    if (data.scheduledByUserId) {
      this.scheduledByUser = User.ofId(data.scheduledByUserId);
    }
    this.targetDate = DateTime.fromISO(data.targetDate);
    this.isForced = data.isForced;
    this.articles = data.newArticles.map(
      (article) => new ContractArticle(article),
    );

    this.totalPrice = this.articles.reduce((acc, article) => {
      return acc.add(article.totalPrice);
    }, ZeroMoney);
  }
}
