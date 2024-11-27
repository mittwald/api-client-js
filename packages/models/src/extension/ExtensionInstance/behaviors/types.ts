import { ExtensionInstanceData } from "../types.js";

export interface ExtensionInstanceBehaviors {
  find: (id: string) => Promise<ExtensionInstanceData | undefined>;
}
