import type { ActivityActionData } from "../types";

import { ActivityAction } from "../ActivityAction";

type ActivityDatabaseVersionSet = Extract<
  ActivityActionData,
  { name: `database.${string}-version-set` }
>;

export class DatabaseVersionSetAction extends ActivityAction<ActivityDatabaseVersionSet> {
  public readonly parameters;

  constructor(data: ActivityDatabaseVersionSet) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.description.name;
    this.type = "update";
    this.titleOptions = { version: data.changes.after?.version };
  }
}
