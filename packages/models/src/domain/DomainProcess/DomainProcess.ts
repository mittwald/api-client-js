import { DateTime } from "luxon";

import type { DomainProcessData, ProcessState, ProcessType } from "./types";

import { DataModel } from "../../base";

export class DomainProcess extends DataModel<DomainProcessData> {
  public readonly error?: string;
  public readonly lastUpdate: DateTime;
  public readonly processType: ProcessType;
  public readonly state: ProcessState;
  public readonly status?: string;
  public readonly statusCode?: string;
  public readonly transactionId: string;
  public constructor(data: DomainProcessData) {
    super(data);
    this.error = data.error;
    this.lastUpdate = DateTime.fromISO(data.lastUpdate);
    this.processType = data.processType;
    this.state = data.state;
    this.status = data.status;
    this.statusCode = data.statusCode;
    this.transactionId = data.transactionId;
  }
}
