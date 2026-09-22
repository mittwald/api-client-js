import { DateTime } from "luxon";

import type { ContractItemCommon } from "../ContractItem";
import type { PlanChangeData } from "./types";

import { ContractArticle } from "../ContractArticle";
import { type Money,ZeroMoney } from "../../common";
import { User } from "../../user/User/User";
import { DataModel } from "../../base";

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
