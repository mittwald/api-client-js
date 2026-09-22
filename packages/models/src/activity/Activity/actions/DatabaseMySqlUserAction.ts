import type { ActivityActionData } from "../types";

import { ActivityAction } from "../ActivityAction";
import { translatable } from "../types";

/**
 * Every `database.mysql-user-*` action names the user through
 * `parameters.description` – absent for the main user – and the database
 * through `parameters.databaseDescription`.
 */
type DatabaseMySqlUserActionData = Extract<
  ActivityActionData,
  { name: `database.mysql-user-${string}` }
>;

export abstract class DatabaseMySqlUserAction<
  T extends DatabaseMySqlUserActionData = DatabaseMySqlUserActionData,
> extends ActivityAction<T> {
  public readonly parameters: T["parameters"];

  protected constructor(data: T) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.description.name;

    this.displayNameFallbackKey = "mainUser";
    this.titleOptions = {
      user: this.displayName || translatable("mainUser"),
      database: data.parameters.databaseDescription.name,
    };
    this.fieldLabels = { name: "userName" };
    this.hideWhenEmptyFields = ["description"];
  }
}
