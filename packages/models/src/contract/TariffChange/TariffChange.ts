import { DateTime } from "luxon";
import { TariffChangeData } from "./types.js";
import { User } from "../../user/index.js";

export class TariffChange {
  data: TariffChangeData;
  scheduledByUser?: User;
  targetDate: DateTime;

  public constructor(data: TariffChangeData) {
    this.data = data;
    if (data.scheduledByUserId) {
      this.scheduledByUser = User.ofId(data.scheduledByUserId);
    }
    this.targetDate = DateTime.fromISO(data.targetDate);
  }
}
