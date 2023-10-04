import { ProjectBehaviors } from "./types.js";
import { ProjectData } from "../types.js";

export const inMemProjectBehaviors = (
  store: Map<string, ProjectData>,
): ProjectBehaviors => ({
  find: async (id) => store.get(id),

  list: async () => {
    throw new Error("Not implemented");
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
