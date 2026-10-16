import invariant from "tiny-invariant";

import type { ArticleAttributeData } from "../types.js";

import { ArticleAttribute } from "../internal.js";

export class CpuArticleAttribute extends ArticleAttribute {
  public readonly cpuCount: number;
  public readonly type: "vcpu" | "cpu";

  public constructor(data: ArticleAttributeData) {
    super(data);
    this.cpuCount = this.constructCpu();
    this.type = data.key === "cpu" ? "cpu" : "vcpu";
  }

  private constructCpu(): number {
    const cpuValue = parseInt(this.value ?? "");
    invariant(
      !isNaN(cpuValue) && String(cpuValue) === this.value,
      "CPU value must be a valid number",
    );
    return cpuValue;
  }
}

export default CpuArticleAttribute;
