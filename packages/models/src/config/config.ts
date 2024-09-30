import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";
import { CustomerBehaviors } from "../customer/Customer/behaviors/index.js";
import { IngressBehaviors } from "../domain/Ingress/behaviors/index.js";
import { ContractBehaviors } from "../contract/Contract/behaviors/index.js";
import { AppInstallationBehaviors } from "../app/AppInstallation/behaviors/index.js";
import { ContractItemBehaviors } from "../contract/ContractItem/behaviors/index.js";
import { ArticleBehaviors } from "../article/Article/behaviors/index.js";
import { OrderBehaviors } from "../order/Order/behaviors/index.js";

interface Config {
  defaultPaginationLimit: number;
  behaviors: {
    contract: ContractBehaviors;
    contractItem: ContractItemBehaviors;
    order: OrderBehaviors;
    article: ArticleBehaviors;
    project: ProjectBehaviors;
    server: ServerBehaviors;
    customer: CustomerBehaviors;
    ingress: IngressBehaviors;
    appInstallation: AppInstallationBehaviors;
  };
}

export const config: Config = {
  defaultPaginationLimit: 50,
  behaviors: {
    contract: undefined as unknown as ContractBehaviors,
    contractItem: undefined as unknown as ContractItemBehaviors,
    order: undefined as unknown as OrderBehaviors,
    article: undefined as unknown as ArticleBehaviors,
    project: undefined as unknown as ProjectBehaviors,
    server: undefined as unknown as ServerBehaviors,
    customer: undefined as unknown as CustomerBehaviors,
    ingress: undefined as unknown as IngressBehaviors,
    appInstallation: undefined as unknown as AppInstallationBehaviors,
  },
};
