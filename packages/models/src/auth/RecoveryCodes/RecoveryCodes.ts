import { DataModel } from "../../base/index.js";
import { RecoveryCodesData } from "./types.js";

export class RecoveryCodes extends DataModel<RecoveryCodesData> {
  public readonly codes: string[];

  public constructor(data: RecoveryCodesData) {
    super(data);
    this.codes = data.codes;
  }
}
