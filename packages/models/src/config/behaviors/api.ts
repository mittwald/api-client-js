import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { apiServerBehaviors } from "../../server/index.js";
import { config } from "../config.js";
import { apiProjectBehaviors } from "../../project/Project/behaviors/index.js";

export const setupApiBehaviors = (client: MittwaldAPIV2Client): void => {
  config.behaviors.project = apiProjectBehaviors(client);
  config.behaviors.server = apiServerBehaviors(client);
};
