import { AppInstallationData } from "../types.js";

export interface AppInstallationBehaviors {
  find: (id: string) => Promise<AppInstallationData | undefined>;
}
