import type {
  CustomerMembershipListItemData,
  CustomerMembershipData,
} from "../../customer/CustomerMembership/types.js";

const defaults = {
  email: "member@example.com",
  customerId: "customer-id",
  role: "member" as const,
  id: "membership-id",
  firstName: "Grace",
  lastName: "Hopper",
  userId: "user-id",
  mfa: false,
};

export function buildCustomerMembershipData(
  overrides?: Partial<CustomerMembershipData>,
): CustomerMembershipData {
  return { ...defaults, ...overrides };
}

export function buildCustomerMembershipListItemData(
  overrides?: Partial<CustomerMembershipListItemData>,
): CustomerMembershipListItemData {
  return { ...defaults, ...overrides };
}
