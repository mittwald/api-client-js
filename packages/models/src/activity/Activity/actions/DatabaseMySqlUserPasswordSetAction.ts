import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DatabaseMySqlUserAction } from "./DatabaseMySqlUserAction.js";

type ActivityDatabaseMysqlUserPasswordSet =
  MittwaldAPIV2.Components.Schemas.ActivitylogDatabaseMysqlUserPasswordSet;

export class DatabaseMySqlUserPasswordSetAction extends DatabaseMySqlUserAction<ActivityDatabaseMysqlUserPasswordSet> {
  constructor(data: ActivityDatabaseMysqlUserPasswordSet) {
    super(data);

    this.type = "edit";
  }
}
