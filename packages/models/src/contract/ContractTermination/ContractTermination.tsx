import { DateTime } from "luxon";

import type { ContractTerminationData } from "./types";

import { DataModel } from "../../base";
import { User } from "../../user";

export class ContractTermination extends DataModel<ContractTerminationData> {
  public readonly cancellationForbidden?: boolean;
  public readonly scheduledByUser?: User;
  public readonly targetDate: DateTime;

  public constructor(data: ContractTerminationData) {
    super(data);
    if (data.scheduledByUserId) {
      this.scheduledByUser = User.ofId(data.scheduledByUserId);
    }

    this.cancellationForbidden = data.cancellationForbidden;
    this.targetDate = DateTime.fromISO(data.targetDate);
  }
}
