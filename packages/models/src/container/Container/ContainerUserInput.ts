import type { Schema } from "jsonschema";

import type { ContainerUserInputData } from "./types";

import { DataModel } from "../../base";

export class ContainerUserInput extends DataModel<ContainerUserInputData> {
  public readonly dataSource?: string;
  public readonly defaultValue?: string;
  public readonly label?: Record<"de" | "en", string>;
  public readonly name: string;
  public readonly required: boolean;
  public readonly schema: Schema;
  public readonly step: string;
  public readonly validationSchema: string;

  public get format(): string | undefined {
    return this.schema.format;
  }

  public constructor(data: ContainerUserInputData, schema: Schema) {
    super(data);
    this.name = data.name;
    this.required = data.required;
    this.defaultValue = data.defaultValue;
    this.dataSource = data.dataSource;
    this.validationSchema = data.validationSchema ?? "{}";
    this.schema = schema;
    this.label = data.label;
    this.step = data.positionMeta?.step ?? "common";
  }
}
