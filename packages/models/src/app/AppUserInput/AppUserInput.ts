import { AppLifecycle, AppUserInputData } from "./types.js";
import { DataModel } from "../../base/index.js";

export class AppUserInput extends DataModel<AppUserInputData> {
  public readonly lifecycle: AppLifecycle;

  public constructor(data: AppUserInputData) {
    super(data);
    this.lifecycle = data.lifecycleConstraint;
  }
}
