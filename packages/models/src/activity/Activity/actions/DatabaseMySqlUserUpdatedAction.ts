import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DatabaseMySqlUserAction } from "./DatabaseMySqlUserAction.js";
import { translatable } from "../types.js";

type ActivityDatabaseMysqlUserUpdated =
  MittwaldAPIV2.Components.Schemas.ActivitylogDatabaseMysqlUserUpdated;

type UserChanges = ActivityDatabaseMysqlUserUpdated["changes"];

/** A plain rename reads better as its own sentence, so it gets its own title. */
const isDescriptionOnlyChange = (changes: UserChanges): boolean => {
  const before = changes.before;
  const after = changes.after;

  if (!before || !after) {
    return false;
  }

  const fields = new Set([...Object.keys(before), ...Object.keys(after)]);

  const changedFields = [...fields].filter(
    (field) =>
      JSON.stringify(before[field as keyof typeof before]) !==
      JSON.stringify(after[field as keyof typeof after]),
  );

  return changedFields.length === 1 && changedFields[0] === "description";
};

export class DatabaseMySqlUserUpdatedAction extends DatabaseMySqlUserAction<ActivityDatabaseMysqlUserUpdated> {
  constructor(data: ActivityDatabaseMysqlUserUpdated) {
    super(data);

    this.type = "edit";

    if (isDescriptionOnlyChange(data.changes)) {
      this.titleKey = `${data.name}.renamed`;
      this.titleOptions = {
        ...this.titleOptions,
        oldDescription:
          data.changes.before?.description || translatable("mainUser"),
        description: data.changes.after?.description,
      };
    }
  }
}
