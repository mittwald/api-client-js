import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { DateTime } from "luxon";

import type { SupportCodeData } from "./types.js";

import { ReferenceModel, WithData } from "../../base/index.js";
import { config } from "../../config/index.js";

@GhostMakerModel({
  name: "SupportCode",
})
export class SupportCode extends ReferenceModel {
  public static async get(requestConfig?: AxiosRequestConfig) {
    const data = await config.behaviors.supportCode.get(requestConfig);
    return new SupportCodeDetailed(data);
  }
}

export class SupportCodeCommon extends WithData<SupportCodeData>()(
  SupportCode,
) {
  public override readonly data: SupportCodeData;
  public readonly expiresAt: DateTime;
  public readonly supportCode: string;

  public constructor(data: SupportCodeData) {
    super("static");
    this.data = data;
    this.supportCode = data.supportCode;
    this.expiresAt = DateTime.fromISO(data.expiresAt);
  }
}

export class SupportCodeDetailed extends SupportCodeCommon {
  public constructor(data: SupportCodeData) {
    super(data);
  }
}
