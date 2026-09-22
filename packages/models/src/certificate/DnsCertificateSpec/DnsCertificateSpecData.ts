import type { DnsCertificateSpecData } from "./types";

import { DnsCertificateStatus } from "../DnsCertificateStatus";
import { DataModel } from "../../base";

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
