import type { ArticleModifierData } from "./types";

import { DataModel } from "../../base/index";
import { Article } from "./internal";

export class ArticleModifier extends DataModel<ArticleModifierData> {
  public readonly article: Article;
  public readonly maxCount: number;

  public constructor(data: ArticleModifierData) {
    super(data);
    const { maxArticleCount, articleId } = data;
    this.article = Article.ofId(articleId);
    this.maxCount = maxArticleCount;
  }
}

export default ArticleModifier;
