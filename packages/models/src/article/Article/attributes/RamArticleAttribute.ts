import type { ArticleAttributeData } from "../types";

import { ArticleAttribute } from "../internal";
import { Bytes } from "../../../common";

export class RamArticleAttribute extends ArticleAttribute {
  public readonly bytes: Bytes;

  public constructor(data: ArticleAttributeData) {
    super(data);
    this.bytes = Bytes.parse(this.valueWithUnit);
  }
}

export default RamArticleAttribute;
