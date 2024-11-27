import { AppData } from "../types.js";

export interface AppBehaviors {
  find: (id: string) => Promise<AppData | undefined>;
}
