import { tsTypeName } from "../../tsTypeName.js";
import camelcase from "camelcase";

export class Name {
  public readonly raw: string;
  public readonly tsType: string;
  public readonly tsVar: string;
  public readonly parent?: Name;

  public constructor(
    raw: string,
    parent?: Name,
    tsType: string = tsTypeName(raw),
  ) {
    this.raw = raw;
    this.tsType = tsType;
    this.tsVar = camelcase(this.tsType);
    this.parent = parent;
  }

  /**
   * The same name with `suffix` appended to its TypeScript type name, while the
   * raw name (e.g. the URL of a path) stays untouched.
   */
  public withTsTypeSuffix(suffix: string): Name {
    return new Name(this.raw, this.parent, `${this.tsType}${suffix}`);
  }

  public get tsTypeWithNamespace(): string {
    if (this.parent) {
      return `${this.parent.tsTypeWithNamespace}.${this.tsType}`;
    }
    return this.tsType;
  }
}
