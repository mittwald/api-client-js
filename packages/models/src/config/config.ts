import { ProjectBehaviors } from "../project/Project/behaviors/index.js";
import { ServerBehaviors } from "../server/Server/behaviors/index.js";

interface Config {
  behaviors: {
    project: ProjectBehaviors;
    server: ServerBehaviors;
  };
}

export const config: Config = {
  behaviors: {
    project: undefined as unknown as ProjectBehaviors,
    server: undefined as unknown as ServerBehaviors,
  },
};
