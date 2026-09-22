import { type DateTime, Interval } from "luxon";

import { required } from "../../base/lib/required";

export class ServicePeriod {
  public readonly end: DateTime;
  public readonly interval: Interval;
  public readonly possibleEndDates: DateTime[];
  public readonly possibleStartDates: DateTime[];
  public readonly start: DateTime;

  public constructor(start: DateTime, end: DateTime) {
    this.start = start;
    this.end = end;
    this.interval = Interval.fromDateTimes(this.start, this.end);

    this.possibleStartDates = this.interval
      .splitBy({ months: 1 })
      .map((i) => required(i.start));

    this.possibleEndDates = this.interval
      .splitBy({ months: 1 })
      .map((i) => required(i.end));
  }
}
