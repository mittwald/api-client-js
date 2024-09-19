import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";
import { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { IngressBehaviors } from "../domain/Ingress/behaviors/index.js";
import { AppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import { ExtensionBehaviors } from "../marketplace/Extension/behaviors/index.js";
import { ExtensionInstanceBehaviors } from "../marketplace/ExtensionInstance/behaviors/index.js";

interface Config {
  defaultPaginationLimit: number;
  behaviors: {
    project: ProjectBehaviors;
    server: ServerBehaviors;
    customer: CustomerBehaviors;
    ingress: IngressBehaviors;
    appInstallation: AppInstallationBehaviors;
    extension: ExtensionBehaviors;
    extensionInstance: ExtensionInstanceBehaviors;
  };
}

export const config: Config = {
  defaultPaginationLimit: 50,
  behaviors: {
    project: undefined as unknown as ProjectBehaviors,
    server: undefined as unknown as ServerBehaviors,
    customer: undefined as unknown as CustomerBehaviors,
    ingress: undefined as unknown as IngressBehaviors,
    appInstallation: undefined as unknown as AppInstallationBehaviors,
    extension: undefined as unknown as ExtensionBehaviors,
    extensionInstance: undefined as unknown as ExtensionInstanceBehaviors,
  },
};
