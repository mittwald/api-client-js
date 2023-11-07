import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { config } from "../config.js";
import { apiProjectBehaviors } from "../../project/Project/behaviors/index.js";
import { apiServerBehaviors } from "../../server/Server/behaviors/index.js";
import { apiCustomerBehaviors } from "../../customer/Customer/behaviors/index.js";
import { apiIngressBehaviors } from "../../domain/Ingress/behaviors/index.js";
import { apiAppInstallationBehaviors } from "../../app/AppInstallation/behaviors/index.js";

export const setupApiBehaviors = (client: MittwaldAPIV2Client): void => {
  config.behaviors.project = apiProjectBehaviors(client);
  config.behaviors.server = apiServerBehaviors(client);
  config.behaviors.customer = apiCustomerBehaviors(client);
  config.behaviors.ingress = apiIngressBehaviors(client);
  config.behaviors.appInstallation = apiAppInstallationBehaviors(client);
};
