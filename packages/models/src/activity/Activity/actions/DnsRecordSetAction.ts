import type { ActivityActionData, ActivityType } from "../types";

import { DnsRecordAction } from "./DnsRecordAction";

/**
 * Created, changed or deleted – the API tells them apart only by which side of
 * `changes` carries values.
 */
type DnsRecordChangeType = "created" | "changed" | "deleted";

export type DnsRecordSetActionData = Extract<
  ActivityActionData,
  { name: `dns.${string}-record-set` }
>;

const activityTypeByRecordChangeType: Record<
  DnsRecordChangeType,
  ActivityType
> = {
  created: "create",
  deleted: "delete",
  changed: "edit",
};

const isEmptyRecordValue = (value: unknown): boolean =>
  value === undefined ||
  value === null ||
  value === "" ||
  (Array.isArray(value) && value.length === 0);

const hasRecordValues = (side: unknown): boolean =>
  typeof side === "object" &&
  side !== null &&
  Object.values(side).some((value) => !isEmptyRecordValue(value));

export const getDnsRecordChangeType = (
  changes: DnsRecordSetActionData["changes"],
): DnsRecordChangeType => {
  const hasBefore = hasRecordValues(changes.before);
  const hasAfter = hasRecordValues(changes.after);

  if (hasBefore && !hasAfter) {
    return "deleted";
  }

  if (!hasBefore && hasAfter) {
    return "created";
  }

  return "changed";
};

export abstract class DnsRecordSetAction<
  T extends DnsRecordSetActionData = DnsRecordSetActionData,
> extends DnsRecordAction<T> {
  public readonly recordChangeType: DnsRecordChangeType;

  public constructor(data: T) {
    super(data);

    this.recordChangeType = getDnsRecordChangeType(data.changes);
    this.type = activityTypeByRecordChangeType[this.recordChangeType];
    this.titleKey = `${data.name}.${this.recordChangeType}`;
  }
}
