import { ExtensionData } from "../types.js";

export interface ExtensionBehaviors {
  find: (id: string) => Promise<ExtensionData | undefined>;
}
