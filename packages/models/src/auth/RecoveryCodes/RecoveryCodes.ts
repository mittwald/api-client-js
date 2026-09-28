import type { DownloadableFile } from "../../common/index.js";
import type { RecoveryCodesData } from "./types.js";

import { DataModel } from "../../base/index.js";

export class RecoveryCodes extends DataModel<RecoveryCodesData> {
  public readonly codes: string;

  public constructor(data: RecoveryCodesData) {
    super(data);
    this.codes = data.codes.join("\n");
  }

  public getDownload(): DownloadableFile {
    return { filename: "mittwald-recovery-codes.txt", content: this.codes };
  }
}
