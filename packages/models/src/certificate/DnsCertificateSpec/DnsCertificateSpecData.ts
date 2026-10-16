import type { DnsCertificateSpecData } from "./types.js";

import { DnsCertificateStatus } from "../DnsCertificateStatus/index.js";
import { DataModel } from "../../base/index.js";

export class DnsCertificateSpec extends DataModel<DnsCertificateSpecData> {
  public readonly cnameTarget?: string;
  public readonly status?: DnsCertificateStatus;

  public constructor(data: DnsCertificateSpecData) {
    super(data);
    this.cnameTarget = data.cnameTarget;
    if (data.status) {
      this.status = new DnsCertificateStatus(data.status);
    }
  }
}
