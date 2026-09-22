import type { AppLinkedDatabaseData } from "./types";

import { MySql } from "../../database/MySql/MySql";
import { Redis } from "../../database/Redis/Redis";
import { DataModel } from "../../base";

export class AppLinkedDatabase extends DataModel<AppLinkedDatabaseData> {
  public readonly database: MySql | Redis;
  public readonly id: string;
  public readonly isPrimary: boolean;

  public constructor(data: AppLinkedDatabaseData) {
    super(data);
    this.database =
      data.kind === "redis"
        ? Redis.ofId(data.databaseId)
        : MySql.ofId(data.databaseId);
    this.isPrimary = data.purpose === "primary";
    this.id = data.databaseId;
  }
}
