import { DateTime } from "luxon";

export abstract class TerminationBase {
  public readonly scheduledAt: DateTime;
  public readonly targetDate: DateTime;
  public readonly reason?: string;

  protected constructor(
    scheduledAt: DateTime,
    targetDate: DateTime,
    reason?: string,
  ) {
    this.scheduledAt = scheduledAt;
    this.targetDate = targetDate;
    this.reason = reason;
  }

  public abstract cancel(): Promise<void>;
}
