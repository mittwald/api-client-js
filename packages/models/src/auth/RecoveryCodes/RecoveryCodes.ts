import type { DownloadableFile } from "../../common";
import type { RecoveryCodesData } from "./types";

import { DataModel } from "../../base";

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
