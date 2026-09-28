import type { SshUserData } from "../../access/SshUser/types.js";

export function buildSshUserData(
  overrides?: Partial<SshUserData>,
): SshUserData {
  return {
    authUpdatedAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    description: "test ssh user",
    projectId: "project-id",
    id: "ssh-user-id",
    hasPassword: true,
    userName: "p-ssh",
    active: true,
    ...overrides,
  };
}
