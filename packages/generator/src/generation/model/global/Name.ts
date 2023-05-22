import { tsTypeName } from "../../tsTypeName.js";
import camelcase from "camelcase";

export class Name {
  public readonly raw: string;
  public readonly tsType: string;
  public readonly tsVar: string;
  public readonly parent?: Name;

  public constructor(raw: string, parent?: Name) {
    this.raw = raw;
    this.tsType = tsTypeName(raw);
    this.tsVar = camelcase(this.tsType);
    this.parent = parent;
  }

  public get tsTypeWithNamespace(): string {
    if (this.parent) {
      return `${this.parent.tsTypeWithNamespace}.${this.tsType}`;
    }
    return this.tsType;
  }
}
