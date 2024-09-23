import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";
import { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { IngressBehaviors } from "../domain/Ingress/behaviors/index.js";
import { AppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import { AppBehaviors } from "../app/App/behaviors/index.js";
import { AppVersionBehaviors } from "../app/AppVersion/behaviors/index.js";
import { SystemSoftwareBehaviors } from "../app/SystemSoftware/behaviors/index.js";
import { SystemSoftwareVersionBehaviors } from "../app/SystemSoftwareVersion/behaviors/index.js";

interface Config {
  defaultPaginationLimit: number;
  behaviors: {
    project: ProjectBehaviors;
    server: ServerBehaviors;
    customer: CustomerBehaviors;
    ingress: IngressBehaviors;
    app: AppBehaviors;
    appVersion: AppVersionBehaviors;
    appInstallation: AppInstallationBehaviors;
    systemSoftware: SystemSoftwareBehaviors;
    systemSoftwareVersion: SystemSoftwareVersionBehaviors;
  };
}

export const config: Config = {
  defaultPaginationLimit: 50,
  behaviors: {
    project: undefined as unknown as ProjectBehaviors,
    server: undefined as unknown as ServerBehaviors,
    customer: undefined as unknown as CustomerBehaviors,
    ingress: undefined as unknown as IngressBehaviors,
    app: undefined as unknown as AppBehaviors,
    appVersion: undefined as unknown as AppVersionBehaviors,
    appInstallation: undefined as unknown as AppInstallationBehaviors,
    systemSoftware: undefined as unknown as SystemSoftwareBehaviors,
    systemSoftwareVersion:
      undefined as unknown as SystemSoftwareVersionBehaviors,
  },
};
