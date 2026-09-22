import type { MailAddressArchiveData } from "./types";

import { DataModel } from "../../base";
import { Bytes } from "../../common";

export class MailAddressArchive extends DataModel<MailAddressArchiveData> {
  public readonly active: boolean;
  public readonly quota: Bytes;
  public readonly usagePercentage: number;
  public readonly usedBytes: Bytes;

  public constructor(data: MailAddressArchiveData) {
    super(data);
    this.active = data.active;
    this.quota = Bytes.of(data.quota, "bytes");
    this.usedBytes = Bytes.of(data.usedBytes, "bytes");
    this.usagePercentage = this.data.usedBytes / this.data.quota;
  }
}
