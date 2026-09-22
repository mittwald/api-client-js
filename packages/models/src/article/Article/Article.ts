import type { Constructor } from "type-fest";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import invariant from "tiny-invariant";

import type {
  ArticleListQueryModelData,
  ArticleListItemData,
  ArticleData,
} from "./types.js";

import { articleAttributeFactory } from "./attributes/articleAttributeFactory.js";
import { articleTemplateFactory } from "./templates/articleTemplateFactory.js";
import { articleModifierFactory } from "./modifier/articleModifierFactory.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ArticleTemplate } from "./ArticleTemplate.js";
import { articleFactory } from "./internal.js";
import { config } from "../../config/index.js";
import { Money } from "../../common/index.js";
import {
  type ArticleAttribute,
  type ArticleModifier,
  type ArticleTagName,
  ArticleTag,
} from "./internal.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "Article",
})
export class Article extends ReferenceModel {
  public static async find(id: string) {
    const data = await config.behaviors.article.find(id);

    if (data) {
      return articleFactory(new ArticleDetailed(data));
    }
  }

  public static async get(id: string) {
    const article = await Article.find(id);
    assertObjectFound(article, Article, id);
    return article;
  }

  public static ofId(id: string) {
    return new Article(id);
  }

  public static query(query: ArticleListQueryModelData = {}) {
    return new ArticleListQuery(query);
  }

  public async findCommon(): Promise<ArticleCommon | undefined> {
    return this instanceof ArticleCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<ArticleDetailed | undefined> {
    return Article.get(this.id);
  }

  public async getCommon(): Promise<ArticleCommon> {
    return this instanceof ArticleCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<ArticleDetailed> {
    return await Article.get(this.id);
  }
}

export class ArticleCommon extends WithData<
  ArticleListItemData | ArticleData
>()(Article) {
  public readonly attributes: ArticleAttribute[];
  public readonly contractDurationInMonth: number;
  public override readonly data: ArticleListItemData | ArticleData;
  public readonly description?: string;
  public readonly forcedInvoicingPeriodInMonth?: number;
  public readonly hasIndependentContractPeriod?: boolean;
  public readonly hideOnInvoice?: boolean;
  public readonly modifiers: ArticleModifier[];
  public readonly name: string;
  public readonly orderable: (ArticleListItemData | ArticleData)["orderable"];
  public readonly price: Money;
  public readonly tags: ArticleTag[];
  public readonly template: ArticleTemplate;

  public constructor(data: ArticleListItemData | ArticleData) {
    super(data.articleId);
    this.data = data;
    this.modifiers =
      data.modifierArticles?.map((m) => articleModifierFactory(m)) ?? [];
    this.attributes =
      data.attributes?.map((attr) => articleAttributeFactory(attr)) ?? [];
    this.tags = data.tags?.map((t) => new ArticleTag(t)) ?? [];
    this.price = Money({ amount: data.price, currency: "EUR" });
    this.description = data.description;
    this.orderable = data.orderable;
    this.name = data.name;
    this.template = articleTemplateFactory(new ArticleTemplate(data.template));
    this.contractDurationInMonth = data.contractDurationInMonth;
    this.forcedInvoicingPeriodInMonth = data.forcedInvoicingPeriodInMonth;
    this.hideOnInvoice = data.hideOnInvoice;
    this.hasIndependentContractPeriod = data.hasIndependentContractPeriod;
  }

  public getAttribute<T extends ArticleAttribute>(
    type: Constructor<T>,
  ): T | undefined {
    return this.attributes.find((attr) => attr instanceof type) as
      | T
      | undefined;
  }

  public getModifier<T extends ArticleModifier>(
    type: Constructor<T>,
  ): T | undefined {
    return this.modifiers.find((attr) => attr instanceof type) as T | undefined;
  }

  public getRequiredAttribute<T extends ArticleAttribute>(
    type: Constructor<T>,
  ): T {
    const attribute = this.getAttribute(type);
    invariant(!!attribute, `Required attribute not found: ${type.name}`);
    return attribute;
  }

  public getRequiredModifier<T extends ArticleModifier>(
    type: Constructor<T>,
  ): T {
    const modifier = this.getModifier(type);
    invariant(!!modifier, `Required modifier not found: ${type.name}`);
    return modifier;
  }

  public getTag(name: ArticleTagName | string) {
    return this.tags.find((tag) => tag.name === name);
  }

  public hasTag(name: ArticleTagName | string) {
    return !!this.getTag(name);
  }
}

export class ArticleDetailed extends ArticleCommon {
  public override readonly data: ArticleData;
  public constructor(data: ArticleData) {
    super(data);
    this.data = data;
  }
}

export class ArticleListItem extends ArticleCommon {
  public override readonly data: ArticleListItemData;
  public constructor(data: ArticleListItemData) {
    super(data);
    this.data = data;
  }
}

export class ArticleListQuery extends ListQueryModel<ArticleListQueryModelData> {
  public constructor(query: ArticleListQueryModelData = {}) {
    super(query);
  }

  public async execute() {
    const { customer, ...query } = this.query;

    const { totalCount, items } = await config.behaviors.article.list({
      limit: config.defaultPaginationLimit,
      ...query,
      customerId: extractId(customer),
    });

    return new ArticleList(
      this.query,
      items.map((d) => articleFactory(new ArticleListItem(d))),
      totalCount,
    );
  }

  public readonly find = async (predicate: (item: ArticleListItem) => boolean) => {
    const { items } = await this.execute();
    return items.find(predicate);
  };

  public async getLowestPrice() {
    const { totalCount, items } = await this.execute();

    if (totalCount === 0) return undefined;

    return [...items].sort(
      (a, b) => a.price.getAmount() - b.price.getAmount(),
    )[0];
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: ArticleListQueryModelData) {
    return new ArticleListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class ArticleList extends WithListData<ArticleListItem>()(
  ArticleListQuery,
) {
  public override readonly items: readonly ArticleListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ArticleListQueryModelData,
    articles: ArticleListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(articles);
    this.totalCount = totalCount;
  }
}
