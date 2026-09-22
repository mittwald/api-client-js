import type { CustomerRole } from "./CustomerMembership/index.js";

export type CustomerPermission =
  | "accessContributorEditing"
  | "accessContractPartner"
  | "accessInvoiceSettings"
  | "editContractPartner"
  | "editInvoiceSettings"
  | "accessConversations"
  | "accessExtensionDev"
  | "accessContributor"
  | "accessExtension"
  | "editContributor"
  | "accessAiHosting"
  | "deleteCustomer"
  | "accessInvoices"
  | "accessHosting"
  | "accessInvites"
  | "editCustomer"
  | "accessOrders"
  | "editHosting"
  | "editMember";

export const customerPermissions: Record<CustomerPermission, CustomerRole[]> = {
  accessContractPartner: ["owner", "member", "accountant"],
  accessExtension: ["owner", "member", "accountant"],
  accessInvoiceSettings: ["owner", "accountant"],
  editContractPartner: ["owner", "accountant"],
  editInvoiceSettings: ["owner", "accountant"],
  accessConversations: ["owner", "accountant"],
  accessContributor: ["owner", "accountant"],
  accessInvoices: ["owner", "accountant"],
  accessExtensionDev: ["owner", "member"],
  accessAiHosting: ["owner", "member"],
  accessContributorEditing: ["owner"],
  accessHosting: ["owner", "member"],
  accessOrders: ["owner", "member"],
  editHosting: ["owner", "member"],
  editContributor: ["owner"],
  deleteCustomer: ["owner"],
  accessInvites: ["owner"],
  editCustomer: ["owner"],
  editMember: ["owner"],
};
