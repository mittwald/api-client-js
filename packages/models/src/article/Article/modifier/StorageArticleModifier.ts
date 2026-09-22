import type { Bytes } from "../../../common";

import { ArticleModifier , StorageArticle } from "../internal";

export class StorageArticleModifier extends ArticleModifier {
  public async getBytes() {
    const article = await this.article.getCommon();
    return article.asType(StorageArticle).bytes;
  }

  public getMaxBytes(storageModifierBytes: Bytes) {
    return storageModifierBytes.multiply(this.maxCount);
  }
}

export default StorageArticleModifier;
