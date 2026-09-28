import type { ArticleAttributeData } from "../types.js";

import { ArticleAttribute } from "../internal.js";
import { Bytes } from "../../../common/index.js";

export class RamArticleAttribute extends ArticleAttribute {
  public readonly bytes: Bytes;

  public constructor(data: ArticleAttributeData) {
    super(data);
    this.bytes = Bytes.parse(this.valueWithUnit);
  }
}

export default RamArticleAttribute;
