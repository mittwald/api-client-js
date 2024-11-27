import { AppVersionData } from "../types.js";

export interface AppVersionBehaviors {
  find: (id: string, appId: string) => Promise<AppVersionData | undefined>;
}
