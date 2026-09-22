import type { AxiosRequestConfig } from "axios";

import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { SupportCodeData } from "./types";

import { ReferenceModel, WithData } from "../../base";
import { config } from "../../config";

@GhostMakerModel({
  name: "SupportCode",
})
export class SupportCode extends ReferenceModel {
  public static async get(requestConfig?: AxiosRequestConfig) {
    const data = await config.behaviors.supportCode.get(requestConfig);
    return new SupportCodeDetailed(data);
  }
}

export class SupportCodeCommon extends WithData<SupportCodeData>()(SupportCode) {
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
