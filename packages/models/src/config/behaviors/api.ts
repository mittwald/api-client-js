import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { config } from "../config.js";
import { apiProjectBehaviors } from "../../project/Project/behaviors/index.js";
import { apiServerBehaviors } from "../../server/Server/behaviors/index.js";

export const setupApiBehaviors = (client: MittwaldAPIV2Client): void => {
  config.behaviors.project = apiProjectBehaviors(client);
  config.behaviors.server = apiServerBehaviors(client);
};
