import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  ArticleData,
  ArticleListItemData,
  ArticleListQueryModelData,
} from "./types.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { provideReact } from "../../react/provideReact.js";
import { ListQueryModel } from "../../base/ListQueryModel.js";
import { ListDataModel } from "../../base/ListDataModel.js";
import { Money } from "../../base/Money.js";

export class Article extends ReferenceModel {
  public static ofId(id: string): Article {
    return new Article(id);
  }

  public static find = provideReact(
    async (id: string): Promise<ArticleDetailed | undefined> => {
      const data = await config.behaviors.article.find(id);

      if (data !== undefined) {
        return new ArticleDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<ArticleDetailed> => {
      const article = await this.find(id);
      assertObjectFound(article, this, id);
      return article;
    },
  );

  public static query(query: ArticleListQueryModelData = {}) {
    return new ArticleListQuery(query);
  }
}

class ArticleCommon extends classes(
  DataModel<ArticleListItemData | ArticleData>,
  Article,
) {
  public readonly price: Money;
  public constructor(data: ArticleListItemData | ArticleData) {
    super([data]);
    this.price = Money({ amount: data.price, currency: "EUR" });
  }
}

export class ArticleDetailed extends classes(
  ArticleCommon,
  DataModel<ArticleData>,
) {
  public constructor(data: ArticleData) {
    super([data], [data]);
  }
}

export class ArticleListItem extends classes(
  ArticleCommon,
  DataModel<ArticleListItemData>,
) {
  public constructor(data: ArticleListItemData) {
    super([data]);
  }
}

export class ArticleListQuery extends ListQueryModel<ArticleListQueryModelData> {
  public constructor(query: ArticleListQueryModelData = {}) {
    super(query);
  }

  public refine(query: ArticleListQueryModelData) {
    return new ArticleListQuery({
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { ...query } = this.query;
    const { items, totalCount } = await config.behaviors.article.list({
      limit: config.defaultPaginationLimit,
      ...query,
    });

    return new ArticleList(
      this.query,
      items.map((d) => new ArticleListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine({ limit: 1 }).execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class ArticleList extends classes(
  ArticleListQuery,
  ListDataModel<ArticleListItem>,
) {
  public constructor(
    query: ArticleListQueryModelData,
    articles: ArticleListItem[],
    totalCount: number,
  ) {
    super([query], [articles, totalCount]);
  }
}
