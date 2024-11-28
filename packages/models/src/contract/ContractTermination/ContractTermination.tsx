import { DateTime } from "luxon";
import { ContractTerminationData } from "./types.js";
import { User } from "../../user/index.js";

export class ContractTermination {
  data: ContractTerminationData;
  scheduledByUser?: User;
  targetDate?: DateTime;

  public constructor(data: ContractTerminationData) {
    this.data = data;
    if (data.scheduledByUserId) {
      this.scheduledByUser = User.ofId(data.scheduledByUserId);
    }

    this.targetDate = DateTime.fromISO(data.targetDate);
  }
}
