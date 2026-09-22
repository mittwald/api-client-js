import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DatabaseMySqlUserAction } from "./DatabaseMySqlUserAction.js";

type ActivityDatabaseMysqlUserCreated =
  MittwaldAPIV2.Components.Schemas.ActivitylogDatabaseMysqlUserCreated;

export class DatabaseMySqlUserCreatedAction extends DatabaseMySqlUserAction<ActivityDatabaseMysqlUserCreated> {
  constructor(data: ActivityDatabaseMysqlUserCreated) {
    super(data);

    this.type = "create";
  }
}
