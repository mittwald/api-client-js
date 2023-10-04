import { MittwaldAPIV2Client } from "@mittwald/api-client";
import Project, { apiProjectBehaviors } from "../project/Project/index.js";
import Server, { apiServerBehaviors } from "../server/index.js";

export const setupApiBehaviors = (client: MittwaldAPIV2Client): void => {
  Project.behaviors = apiProjectBehaviors(client);
  Server.behaviors = apiServerBehaviors(client);
};
