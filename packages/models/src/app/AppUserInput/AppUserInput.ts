import { AppLifecycle, AppUserInputData } from "./types.js";

export class AppUserInput {
  public readonly data: AppUserInputData;
  public readonly lifecycle: AppLifecycle;

  public constructor(data: AppUserInputData) {
    this.data = data;
    this.lifecycle = data.lifecycleConstraint;
  }
}
