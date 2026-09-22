import invariant from "tiny-invariant";

import type { Bytes } from "../../../common";

import { StorageArticleAttribute, ArticleCommon } from "../internal";

export class StorageArticle extends ArticleCommon {
  public get bytes(): Bytes {
    const storageAttribute = this.getAttribute(StorageArticleAttribute);
    invariant(!!storageAttribute, "Storage attribute not found in article");
    return storageAttribute.bytes;
  }

  public static refine(article: ArticleCommon) {
    if (article.id.endsWith("-Storage")) {
      return new StorageArticle(article.data);
    }
  }
}

export default StorageArticle;
