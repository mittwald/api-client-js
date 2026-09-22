import type { ContractPartnerData } from "../../customer/ContractPartner/types";

export function buildContractPartnerData(
  overrides?: Partial<ContractPartnerData>,
): ContractPartnerData {
  return {
    address: {
      street: "Teststr.",
      countryCode: "DE",
      houseNumber: "1",
      city: "Kiel",
      zip: "24103",
    },
    phoneNumbers: ["+49 431 123456"],
    emailAddress: "ada@example.com",
    leitwegId: "04011000-12345-67",
    lastName: "Lovelace",
    company: "Test GmbH",
    salutation: "other",
    firstName: "Ada",
    ...overrides,
  };
}
