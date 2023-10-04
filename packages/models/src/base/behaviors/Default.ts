import { BaseModelBehaviors } from "./types.js";
import deepFreeze from "../../lib/deepFreeze.js";

export const defaultBaseModelBehavior = (): BaseModelBehaviors => ({
  deepFreeze,
});
