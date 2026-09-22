import type { UnlockedLeadData } from "../../fyndr/UnlockedLead/types.js";

export function buildUnlockedLeadData(
  overrides?: Partial<UnlockedLeadData>,
): UnlockedLeadData {
  return {
    company: {
      phoneNumbers: ["+4943112345"],
      websiteType: ["Corporate"],
      coreProduct: ["Software"],
      salesVolume: 2_000_000,
      companyType: ["GmbH"],
      targetGroup: ["B2B"],
      city: "Kiel",
      county: "SH",
      name: "Acme",
    },
    contact: {
      address: {
        countryCode: "DE",
        houseNumber: "1",
        street: "Main",
        city: "Kiel",
        zip: "24103",
      },
    },
    hoster: {
      mailServer: ["mail.example.com"],
      nameServer: ["ns.example.com"],
      server: ["srv"],
    },
    mainTechnology: {
      categoryPriority: 1,
      name: "TYPO3",
      version: "12",
    },
    technologies: [{ categoryPriority: 1, name: "TYPO3", version: "12" }],
    socialMedia: [{ url: "https://linkedin.com", network: "LinkedIn" }],
    metrics: { basic: { desktop: {}, mobile: {} } },
    unlockedAt: "2024-02-01T00:00:00.000Z",
    actualUrl: "https://example.com",
    businessFields: ["IT"],
    domain: "example.com",
    screenshot: "base64",
    description: "desc",
    languages: ["de"],
    potential: 0.72,
    leadId: "l-1",
    ...overrides,
  };
}
