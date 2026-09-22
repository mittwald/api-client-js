import type { MittwaldAPIV2 } from "@mittwald/api-client";

import { ActivityAction } from "../ActivityAction";

type ActivityAppInstallationMainDatabaseChanged =
  MittwaldAPIV2.Components.Schemas.ActivitylogAppInstallationMainDatabaseChanged;

const getMainDatabaseChangeType = (
  changes: ActivityAppInstallationMainDatabaseChanged["changes"],
): "changed" | "linked" => (changes.before.name ? "changed" : "linked");

export class AppMainDatabaseChangedAction extends ActivityAction<ActivityAppInstallationMainDatabaseChanged> {
  public readonly parameters;

  constructor(data: ActivityAppInstallationMainDatabaseChanged) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.appInstallation.name;
    this.type = "edit";
    this.fieldLabels = { name: "databaseName" };
    this.titleOptions = { database: data.parameters.database.name };
    this.titleKey = `${data.name}.${getMainDatabaseChangeType(data.changes)}`;
  }
}
