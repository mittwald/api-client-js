import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { DataModel } from "../../base/DataModel.js";
import { classes } from "polytype";
import { SupportCodeData } from "./types.js";

export class SupportCode extends ReferenceModel {
  public static ofId(id: string): SupportCode {
    return new SupportCode(id);
  }

  public static get = provideReact(async (): Promise<SupportCodeDetailed> => {
    const data = await config.behaviors.supportCode.get();

    return new SupportCodeDetailed(data);
  });

  public getDetailed = provideReact(() =>
    SupportCode.get(),
  ) as AsyncResourceVariant<SupportCodeDetailed, []>;
}

class SupportCodeCommon extends classes(
  DataModel<SupportCodeData>,
  SupportCode,
) {
  public constructor(data: SupportCodeData) {
    super([data], [data.supportCode]);
  }
}

export class SupportCodeDetailed extends classes(
  SupportCodeCommon,
  DataModel<SupportCodeData>,
) {
  public constructor(data: SupportCodeData) {
    super([data], [data]);
  }
}
