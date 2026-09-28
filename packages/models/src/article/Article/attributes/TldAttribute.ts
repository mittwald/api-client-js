import invariant from "tiny-invariant";

import type { ArticleAttributeData } from "../types.js";

import { ArticleAttribute } from "../internal.js";

export class TldAttribute extends ArticleAttribute {
  public readonly tld: string;

  public constructor(data: ArticleAttributeData) {
    super(data);
    invariant(!!this.value, "TLD article attribute must have a value");
    this.tld = this.value;
  }
}
export default TldAttribute;
