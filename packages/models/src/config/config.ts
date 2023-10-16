import { ServerBehaviors } from "../server/index.js";
import { ProjectBehaviors } from "../project/Project/behaviors/index.js";

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
