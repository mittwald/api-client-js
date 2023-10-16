import deepFreeze, { ReadonlyDeep } from "../lib/deepFreeze.js";

export type DataMode = "Id" | "Default" | "Compact";

type DataType<TMode extends DataMode, TDefault, TCompact> = TMode extends "Id"
  ? null
  : TMode extends "Default"
  ? TDefault
  : TCompact;

export default abstract class BaseModel<
  TDefault,
  TCompact,
  TMode extends DataMode,
> {
  public readonly id: string;
  public readonly mode: TMode;
  public readonly data: ReadonlyDeep<DataType<TMode, TDefault, TCompact>>;

  public constructor(
    id: string,
    mode: TMode,
    apiData: DataType<TMode, TDefault, TCompact>,
  ) {
    this.id = id;
    this.mode = mode;
    this.data = deepFreeze(apiData);
  }

  public toString(): string {
    return `${this.constructor.name}@${this.id}`;
  }

  protected modeIs<TCheckMode extends DataMode>(
    checkMode: TCheckMode,
  ): this is BaseModel<TDefault, TCompact, TCheckMode> {
    return this.mode === (checkMode as DataMode);
  }
}
