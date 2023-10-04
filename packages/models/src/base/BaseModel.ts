import deepFreeze, { ReadonlyDeep } from "../lib/deepFreeze.js";

export type DataMode = "Default" | "Compact";

type DataType<
  TMode extends DataMode,
  TDefault,
  TCompact,
> = TMode extends "Default" ? TDefault : TCompact;

export default abstract class BaseModel<
  TDefault = unknown,
  TCompact = TDefault,
  TMode extends DataMode = "Default",
> {
  public readonly id: string;
  public readonly data: ReadonlyDeep<DataType<TMode, TDefault, TCompact>>;

  public constructor(id: string, apiData: DataType<TMode, TDefault, TCompact>) {
    this.id = id;
    this.data = deepFreeze(apiData);
  }

  public toString(): string {
    return `${this.constructor.name}@${this.id}`;
  }
}
