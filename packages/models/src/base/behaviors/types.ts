import DeepFreeze from "../../lib/deepFreeze.js";

export { ReadonlyDeep } from "../../lib/deepFreeze.js";

export interface BaseModelBehaviors {
  deepFreeze: typeof DeepFreeze;
}
