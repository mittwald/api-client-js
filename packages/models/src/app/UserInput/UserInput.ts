import type { UserInputData, AppLifecycle } from "./types.js";

import { DataModel } from "../../base/index.js";

export class UserInput extends DataModel<UserInputData> {
  public readonly dataSource?: string;
  public readonly dataType: string;
  public readonly defaultValue?: string;
  public readonly format?: string;
  public readonly lifecycle?: AppLifecycle;
  public readonly name: string;
  public readonly passwordValidationSchema?: string;
  public readonly required: boolean;
  public readonly step: string;
  public readonly validationSchema: string;

  public constructor(data: UserInputData) {
    super(data);
    this.lifecycle = data.lifecycleConstraint;
    this.step = data.positionMeta?.step ?? "common";
    this.name = data.name;
    this.dataType = data.dataType;
    this.format = data.format;
    this.validationSchema = data.validationSchema;
    this.passwordValidationSchema =
      data.additionalValidationSchema &&
      data.additionalValidationSchema?.kind === "password-rule"
        ? data.additionalValidationSchema?.schema
        : undefined;
    this.dataSource = data.dataSource;
    this.required = data.required;
    this.defaultValue = data.defaultValue;
  }
}
