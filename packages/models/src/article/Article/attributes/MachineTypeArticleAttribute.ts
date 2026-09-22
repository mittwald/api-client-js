import invariant from "tiny-invariant";

import type { ArticleAttributeData } from "../types";

import { ArticleAttribute } from "../internal";

export class MachineTypeArticleAttribute extends ArticleAttribute {
  public readonly machineType: string;

  public constructor(data: ArticleAttributeData) {
    super(data);
    invariant(
      data.value !== undefined,
      "MachineTypeArticleAttribute requires a value",
    );
    this.machineType = data.value;
  }
}

export default MachineTypeArticleAttribute;
