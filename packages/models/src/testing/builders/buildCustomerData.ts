import type {
  CustomerListItemData,
  CustomerData,
} from "../../customer/Customer/types";

const defaults = {
  creationDate: "2024-01-01T00:00:00.000Z",
  customerId: "customer-id",
  customerNumber: "12345",
  name: "Test Customer",
  projectCount: 0,
  memberCount: 1,
};

export function buildCustomerData(
  overrides?: Partial<CustomerData>,
): CustomerData {
  return { ...defaults, ...overrides };
}

export function buildCustomerListItemData(
  overrides?: Partial<CustomerListItemData>,
): CustomerListItemData {
  return { ...defaults, ...overrides };
}
