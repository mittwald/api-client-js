import type { ArticleAttributeData } from "./types";

import { DataModel } from "../../base/index";

export class ArticleAttribute extends DataModel<ArticleAttributeData> {
  public readonly key: string;
  public readonly unit?: string;
  public readonly value?: string;
  public readonly valueWithUnit: string;

  public constructor(data: ArticleAttributeData) {
    super(data);
    this.key = data.key;
    this.unit = data.unit;
    this.value = data.value;
    this.valueWithUnit =
      (data.unit === undefined ? data.value : `${data.value}${data.unit}`) ??
      "";
  }
}
