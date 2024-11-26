import {
  AppInstallationMissingDependenciesData,
  AppInstallationMissingSystemSoftwareDependencyData,
  AppInstallationMissingUserInputData,
} from "./types.js";

export class AppInstallationMissingDependencies {
  public readonly data: AppInstallationMissingDependenciesData;
  public readonly missingSystemSoftwareDependencies: AppInstallationMissingSystemSoftwareDependency[];
  public readonly missingUserInputs: AppInstallationMissingUserInput[];

  public constructor(data: AppInstallationMissingDependenciesData) {
    this.data = data;
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

export class AppInstallationMissingSystemSoftwareDependency {
  public readonly data: AppInstallationMissingSystemSoftwareDependencyData;

  public constructor(data: AppInstallationMissingSystemSoftwareDependencyData) {
    this.data = data;
  }
}

export class AppInstallationMissingUserInput {
  public readonly data: AppInstallationMissingUserInputData;

  public constructor(data: AppInstallationMissingUserInputData) {
    this.data = data;
  }
}
