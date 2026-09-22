import { DateTime } from "luxon";

import type {
  DnsCertificateStatusData,
  ProjectCertificateStatus,
} from "./types";

import { DataModel } from "../../base";

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
