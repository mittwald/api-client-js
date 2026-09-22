import type {
  CustomerInviteListItemData,
  CustomerInviteData,
} from "../../customer/CustomerInvite/types.js";

const defaults = {
  information: { invitedBy: "user-inviter" },
  mailAddress: "invitee@example.com",
  customerName: "Test Customer",
  customerId: "customer-id",
  role: "member" as const,
  message: "Join us",
  id: "invite-id",
};

export function buildCustomerInviteData(
  overrides?: Partial<CustomerInviteData>,
): CustomerInviteData {
  return { ...defaults, ...overrides };
}

export function buildCustomerInviteListItemData(
  overrides?: Partial<CustomerInviteListItemData>,
): CustomerInviteListItemData {
  return { ...defaults, ...overrides };
}
