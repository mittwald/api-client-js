import { z } from "zod";

import { getRecommendedStorage } from "../../order/Order/lib.js";
import {
  CpuArticleAttribute,
  RamArticleAttribute,
  type ArticleCommon,
} from "../../article/Article/internal.js";
import { Bytes } from "../../common/index.js";

export const hardwareSpecsSchema = z.object({
  ramBytes: z.number().int(),
  vcpu: z.number().int(),
});

export class HardwareSpecs {
  public readonly ram: Bytes;
  public readonly vcpu: number;

  public constructor(vcpu: number, ram: Bytes) {
    this.vcpu = vcpu;
    this.ram = ram;
  }

  public static fromArticle(article: ArticleCommon) {
    const ramAttribute = article.getRequiredAttribute(RamArticleAttribute);
    const cpuAttribute = article.getRequiredAttribute(CpuArticleAttribute);
    return new HardwareSpecs(cpuAttribute.cpuCount, ramAttribute.bytes);
  }

  public static fromJson(json: string): HardwareSpecs {
    const data = hardwareSpecsSchema.parse(JSON.parse(json));
    return new HardwareSpecs(data.vcpu, Bytes.of(data.ramBytes, "bytes"));
  }

  public asJson(): z.infer<typeof hardwareSpecsSchema> {
    return {
      ramBytes: this.ram.in("bytes"),
      vcpu: this.vcpu,
    };
  }

  public asJsonString(): string {
    return JSON.stringify(this.asJson());
  }

  public equals(specs: HardwareSpecs) {
    return this.vcpu === specs.vcpu && this.ram.equals(specs.ram);
  }

  public getRecommendedProjectCount() {
    const recommendation = recommendations.find((r) => {
      return r.cpu === this.vcpu && r.ram === this.ram.gib;
    });
    return recommendation ? recommendation.projects : 0;
  }

  public getRecommendedStorage(): string | undefined {
    const hardwareSpecs = JSON.stringify({
      ram: this.ram.gib,
      vcpu: this.vcpu,
    });

    return getRecommendedStorage(hardwareSpecs);
  }

  public isDifferent(specs: HardwareSpecs) {
    return !this.equals(specs);
  }
}

const recommendations: {
  projects: number;
  cpu: number;
  ram: number;
}[] = [
  {
    projects: 1,
    cpu: 2,
    ram: 2,
  },
  {
    projects: 2,
    cpu: 4,
    ram: 4,
  },
  {
    projects: 3,
    cpu: 8,
    ram: 8,
  },
  {
    projects: 5,
    cpu: 16,
    ram: 16,
  },
];
