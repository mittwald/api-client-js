import { ReadonlyDeep } from "type-fest";
import deepFreeze from "../lib/deepFreeze.js";

export class DataModel<T> {
  public readonly data: ReadonlyDeep<T>;

  public constructor(data: T) {
    this.data = deepFreeze(data);
  }
}
