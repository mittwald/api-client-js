import { tsName } from "../../tsName.js";
import camelcase from "camelcase";

export class Name {
  public readonly raw: string;
  public readonly tsType: string;
  public readonly tsVar: string;
  public readonly parent?: Name;

  public constructor(raw: string, parent?: Name) {
    this.raw = raw;
    this.tsType = tsName(raw);
    this.tsVar = camelcase(this.tsType);
    this.parent = parent;
  }

  public get tsTypeWithNs(): string {
    if (this.parent) {
      return `${this.parent.tsTypeWithNs}.${this.tsType}`;
    }
    return this.tsType;
  }
}
