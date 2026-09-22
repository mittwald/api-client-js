import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { DatabaseMySqlUserAction } from "./DatabaseMySqlUserAction";

type ActivityDatabaseMysqlUserDeleted =
  MittwaldAPIV2.Components.Schemas.ActivitylogDatabaseMysqlUserDeleted;

export class DatabaseMySqlUserDeletedAction extends DatabaseMySqlUserAction<ActivityDatabaseMysqlUserDeleted> {
  constructor(data: ActivityDatabaseMysqlUserDeleted) {
    super(data);

    this.type = "delete";
  }
}
