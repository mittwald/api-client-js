import { DateTime } from "luxon";

import type {
  DnsCertificateStatusData,
  ProjectCertificateStatus,
} from "./types.js";

import { DataModel } from "../../base/index.js";

export class DnsCertificateStatus extends DataModel<DnsCertificateStatusData> {
  public readonly message?: string;
  public readonly status?: ProjectCertificateStatus;
  public readonly updatedAt?: DateTime;

  public constructor(data: DnsCertificateStatusData) {
    super(data);
    this.status = data.status;
    this.message = data.message;
    if (data.updatedAt) {
      this.updatedAt = DateTime.fromISO(data.updatedAt);
    }
  }
}
