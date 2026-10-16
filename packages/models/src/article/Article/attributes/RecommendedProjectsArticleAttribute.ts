import type { ArticleAttributeData } from "../types.js";

import { ArticleAttribute } from "../internal.js";

export class RecommendedProjectsArticleAttribute extends ArticleAttribute {
  public constructor(data: ArticleAttributeData) {
    super(data);
  }
}

export default RecommendedProjectsArticleAttribute;
