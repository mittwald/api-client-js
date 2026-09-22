import type { ProjectMembershipData } from "../../project/ProjectMembership/types";

export function buildProjectMembershipData(
  overrides?: Partial<ProjectMembershipData>,
): ProjectMembershipData {
  return {
    email: "user@example.com",
    projectId: "project-id",
    lastName: "Lovelace",
    id: "membership-id",
    userId: "user-id",
    firstName: "Ada",
    inherited: false,
    role: "owner",
    mfa: false,
    ...overrides,
  };
}
