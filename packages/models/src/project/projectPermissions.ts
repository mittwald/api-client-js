import type { ProjectRole } from "./ProjectMembership";

export type ProjectPermission =
  | "accessConversations"
  | "accessPerformance"
  | "accessFileSystem"
  | "accessMonitoring"
  | "accessActivities"
  | "accessDashboard"
  | "accessExtension"
  | "accessContainer"
  | "accessAiHosting"
  | "accessDatabase"
  | "accessCustomer"
  | "accessCronjob"
  | "accessSftpSsh"
  | "deleteHosting"
  | "accessInvites"
  | "accessDomain"
  | "accessMember"
  | "accessBackup"
  | "bookHosting"
  | "editProject"
  | "editDomain"
  | "accessMail"
  | "editMember"
  | "accessPlan"
  | "accessApp"
  | "book";

export const projectPermissions: Record<
  ProjectPermission,
  ("inheritedOwner" | ProjectRole)[]
> = {
  accessExtension: ["owner", "emailadmin", "external"],
  accessDomain: ["owner", "emailadmin", "external"],
  accessMail: ["owner", "emailadmin", "external"],
  accessConversations: ["owner", "external"],
  accessPerformance: ["owner", "external"],
  accessFileSystem: ["owner", "external"],
  accessMonitoring: ["owner", "external"],
  accessActivities: ["owner", "external"],
  accessDashboard: ["owner", "external"],
  accessContainer: ["owner", "external"],
  accessAiHosting: ["owner", "external"],
  accessDatabase: ["owner", "external"],
  accessCronjob: ["owner", "external"],
  accessSftpSsh: ["owner", "external"],
  accessMember: ["owner", "external"],
  accessBackup: ["owner", "external"],
  accessCustomer: ["inheritedOwner"],
  editDomain: ["owner", "external"],
  deleteHosting: ["inheritedOwner"],
  accessApp: ["owner", "external"],
  bookHosting: ["inheritedOwner"],
  accessPlan: ["inheritedOwner"],
  accessInvites: ["owner"],
  editProject: ["owner"],
  editMember: ["owner"],
  book: ["owner"],
};
