import invariant from "tiny-invariant";

import type { ArticleAttributeData } from "../types";

import { ArticleAttribute } from "../internal";
import { Bytes } from "../../../common";

export class StorageArticleAttribute extends ArticleAttribute {
  public readonly bytes: Bytes;

  public constructor(data: ArticleAttributeData) {
    super(data);
    invariant(!!this.unit, "Storage article attribute must have a unit");
    this.bytes = Bytes.parse(this.valueWithUnit);
  }
}

export default StorageArticleAttribute;
