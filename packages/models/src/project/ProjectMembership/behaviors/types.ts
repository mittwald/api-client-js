import { ProjectMembershipData } from "../types.js";

export interface ProjectMembershipBehaviors {
  find: (id: string) => Promise<ProjectMembershipData | undefined>;
}
