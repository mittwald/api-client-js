import {
  AppInstallationMissingDependenciesData,
  AppInstallationMissingSystemSoftwareDependencyData,
  AppInstallationMissingUserInputData,
} from "./types.js";
import { DataModel } from "../../base/index.js";

export class AppInstallationMissingDependencies extends DataModel<AppInstallationMissingDependenciesData> {
  public readonly missingSystemSoftwareDependencies: AppInstallationMissingSystemSoftwareDependency[];
  public readonly missingUserInputs: AppInstallationMissingUserInput[];

  public constructor(data: AppInstallationMissingDependenciesData) {
    super(data);
    this.missingSystemSoftwareDependencies =
      data.missingSystemSoftwareDependencies
        ? data.missingSystemSoftwareDependencies.map(
            (d) => new AppInstallationMissingSystemSoftwareDependency(d),
          )
        : [];
    this.missingUserInputs = data.missingUserInputs
      ? data.missingUserInputs.map(
          (d) => new AppInstallationMissingUserInput(d),
        )
      : [];
  }
}

export class AppInstallationMissingSystemSoftwareDependency extends DataModel<AppInstallationMissingSystemSoftwareDependencyData> {
  public constructor(data: AppInstallationMissingSystemSoftwareDependencyData) {
    super(data);
  }
}

export class AppInstallationMissingUserInput extends DataModel<AppInstallationMissingUserInputData> {
  public constructor(data: AppInstallationMissingUserInputData) {
    super(data);
  }
}
