import { z } from "zod";

import type { ArticleCommon } from "../../article/Article/internal";

import { hardwareSpecsSchema, HardwareSpecs } from "../internal";
import { getRecommendedStorage } from "../../order/Order/lib";
import {
  MachineTypeArticleAttribute,
  ArticleTagName,
} from "../../article/Article/internal";
import { Bytes } from "../../common";

export const machineTypeSpecsSchema = z.object({
  hardwareSpecs: hardwareSpecsSchema,
  isDedicated: z.boolean(),
  machineType: z.string(),
});

export class MachineTypeSpecs {
  public readonly hardwareSpecs: HardwareSpecs;
  public readonly isDedicated: boolean;
  public readonly machineType: string;

  public constructor(
    machineType: string,
    hardwareSpecs: HardwareSpecs,
    isDedicated: boolean,
  ) {
    this.machineType = machineType;
    this.hardwareSpecs = hardwareSpecs;
    this.isDedicated = isDedicated;
  }

  public static fromArticle(article: ArticleCommon) {
    const machineTypeAttribute = article.getRequiredAttribute(
      MachineTypeArticleAttribute,
    );

    const isDedicated = article.hasTag(ArticleTagName.dedicated);

    return new MachineTypeSpecs(
      machineTypeAttribute.machineType,
      HardwareSpecs.fromArticle(article),
      isDedicated,
    );
  }

  public static fromJson(json: string): MachineTypeSpecs {
    const parsedJson = JSON.parse(json);

    const { hardwareSpecs, machineType, isDedicated } =
      machineTypeSpecsSchema.parse(parsedJson);

    return new MachineTypeSpecs(
      machineType,
      new HardwareSpecs(
        hardwareSpecs.vcpu,
        Bytes.of(hardwareSpecs.ramBytes, "GiB"),
      ),
      isDedicated,
    );
  }

  public asJson(): z.infer<typeof machineTypeSpecsSchema> {
    return {
      hardwareSpecs: this.hardwareSpecs.asJson(),
      machineType: this.machineType,
      isDedicated: this.isDedicated,
    };
  }

  public asJsonString() {
    return JSON.stringify(this.asJson());
  }

  public equals(specs: MachineTypeSpecs) {
    return this.machineType === specs.machineType;
  }

  public getRecommendedStorage(): string | undefined {
    return getRecommendedStorage(this.machineType);
  }
}
