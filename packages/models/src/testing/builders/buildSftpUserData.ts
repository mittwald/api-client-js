import type { SftpUserData } from "../../access/SftpUser/types.js";

export function buildSftpUserData(
  overrides?: Partial<SftpUserData>,
): SftpUserData {
  return {
    authUpdatedAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    description: "test sftp user",
    projectId: "project-id",
    accessLevel: "read",
    id: "sftp-user-id",
    userName: "p-sftp",
    hasPassword: true,
    active: true,
    ...overrides,
  };
}
