import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";
import { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { IngressBehaviors } from "../domain/Ingress/behaviors/index.js";
import { AppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import { InvoiceBehaviors } from "../invoice/Invoice/behaviors/index.js";

interface Config {
  defaultPaginationLimit: number;
  behaviors: {
    project: ProjectBehaviors;
    server: ServerBehaviors;
    customer: CustomerBehaviors;
    ingress: IngressBehaviors;
    invoice: InvoiceBehaviors;
    appInstallation: AppInstallationBehaviors;
  };
}

export const config: Config = {
  defaultPaginationLimit: 50,
  behaviors: {
    project: undefined as unknown as ProjectBehaviors,
    server: undefined as unknown as ServerBehaviors,
    customer: undefined as unknown as CustomerBehaviors,
    ingress: undefined as unknown as IngressBehaviors,
    invoice: undefined as unknown as InvoiceBehaviors,
    appInstallation: undefined as unknown as AppInstallationBehaviors,
  },
};
