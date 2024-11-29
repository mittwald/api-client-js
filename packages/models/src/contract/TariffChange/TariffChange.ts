import { DateTime } from "luxon";
import { TariffChangeData } from "./types.js";
import { User } from "../../user/index.js";
import { DataModel } from "../../base/index.js";

export class TariffChange extends DataModel<TariffChangeData> {
  scheduledByUser?: User;
  targetDate: DateTime;

  public constructor(data: TariffChangeData) {
    super(data);
    if (data.scheduledByUserId) {
      this.scheduledByUser = User.ofId(data.scheduledByUserId);
    }
    this.targetDate = DateTime.fromISO(data.targetDate);
  }
}
