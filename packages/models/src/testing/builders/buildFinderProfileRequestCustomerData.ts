import type { CustomerData } from "../../customer/Customer/types.js";

export function buildFinderProfileRequestCustomerData(
  overrides?: Partial<CustomerData>,
): CustomerData {
  return {
    owner: {
      address: {
        countryCode: "DE",
        houseNumber: "1",
        street: "Main",
        city: "Kiel",
        zip: "24103",
      },
      emailAddress: "info@example.com",
      salutation: "mr",
    },
    creationDate: "2024-01-01T00:00:00.000Z",
    customerNumber: "12345",
    customerId: "c-1",
    projectCount: 0,
    memberCount: 1,
    name: "Acme",
    ...overrides,
  };
}
