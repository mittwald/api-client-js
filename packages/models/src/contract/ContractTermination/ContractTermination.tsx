import { DateTime } from "luxon";
import { ContractTerminationData } from "./types.js";
import { User } from "../../user/index.js";
import { DataModel } from "../../base/index.js";

export class ContractTermination extends DataModel<ContractTerminationData> {
  scheduledByUser?: User;
  targetDate?: DateTime;

  public constructor(data: ContractTerminationData) {
    super(data);
    if (data.scheduledByUserId) {
      this.scheduledByUser = User.ofId(data.scheduledByUserId);
    }

    this.targetDate = DateTime.fromISO(data.targetDate);
  }
}
