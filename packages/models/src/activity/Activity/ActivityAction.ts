import type { ActivityActionData, ActivityType } from "./types";

import { DataModel } from "../../base";

type ChangesOf<T> = T extends { changes: infer C } ? C : undefined;

export abstract class ActivityAction<
  T extends ActivityActionData = ActivityActionData,
> extends DataModel<T> {
  public readonly changes?: ChangesOf<T>;
  public displayName?: string;
  /** Used when neither the aggregate nor `displayName` resolves. */
  public displayNameFallbackKey?: string;
  /** `key.*` overrides for `changes` fields whose raw name is ambiguous. */
  public fieldLabels: Record<string, string> = {};
  public hasWideChanges = false;

  /** Hidden when neither side carries a value. */
  public hideWhenEmptyFields: readonly string[] = [];

  public readonly name: T["name"];

  /** Without the `activity.` prefix and without the `.short` suffix. */
  public titleKey: string;

  /** Beyond `{{displayName}}`; wrap in `translatable()` for a key to resolve. */
  public titleOptions: Record<string, unknown> = {};

  public type: ActivityType;

  public valuesAreCopyable = false;

  protected constructor(data: T) {
    super(data);

    this.name = data.name;

    this.changes =
      "changes" in data ? (data.changes as ChangesOf<T>) : undefined;

    this.type = "info";
    this.titleKey = data.name;
  }
}
