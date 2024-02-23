import { ProjectBehaviors } from "./types.js";
import { ProjectData } from "../types.js";

export const inMemProjectBehaviors = (
  store: Map<string, ProjectData>,
): ProjectBehaviors => ({
  find: async (id) => store.get(id),

  list: async () => {
    return Array.from(store.values()).map((detailedProject) => ({
      ...detailedProject,
      customerMeta: {
        id: detailedProject.customerId,
      },
    }));
  },

  create: async () => {
    throw new Error("Not implemented");
  },

  leave: async () => {
    throw new Error("Not implemented");
  },

  delete: async () => {
    throw new Error("Not implemented");
  },

  updateDescription: async () => {
    throw new Error("Not implemented");
  },
});
