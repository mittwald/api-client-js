import type { ArticleAttributeData } from "../types";

import { ArticleAttribute } from "../internal";

export class RecommendedProjectsArticleAttribute extends ArticleAttribute {
  public constructor(data: ArticleAttributeData) {
    super(data);
  }
}

export default RecommendedProjectsArticleAttribute;
