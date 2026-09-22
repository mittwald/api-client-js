import type { ProjectInviteData } from "../../project/ProjectInvite/types";

export function buildProjectInviteData(
  overrides?: Partial<ProjectInviteData>,
): ProjectInviteData {
  return {
    information: { invitedBy: "user-id" },
    projectDescription: "test project",
    mailAddress: "user@example.com",
    projectId: "project-id",
    id: "invite-id",
    role: "owner",
    ...overrides,
  };
}
