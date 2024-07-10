import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";
import { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { IngressBehaviors } from "../domain/Ingress/behaviors/index.js";
import { AppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import { SshKeyBehaviors } from "../user/SshKey/behaviors/index.js";

interface Config {
  behaviors: {
    project: ProjectBehaviors;
    server: ServerBehaviors;
    customer: CustomerBehaviors;
    ingress: IngressBehaviors;
    appInstallation: AppInstallationBehaviors;
    sshKey: SshKeyBehaviors;
  };
}

export const config: Config = {
  behaviors: {
    project: undefined as unknown as ProjectBehaviors,
    server: undefined as unknown as ServerBehaviors,
    customer: undefined as unknown as CustomerBehaviors,
    ingress: undefined as unknown as IngressBehaviors,
    appInstallation: undefined as unknown as AppInstallationBehaviors,
    sshKey: undefined as unknown as SshKeyBehaviors,
  },
};
