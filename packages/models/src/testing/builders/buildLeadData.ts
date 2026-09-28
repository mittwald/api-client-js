import type { LeadData } from "../../fyndr/Lead/types.js";

export function buildLeadData(overrides?: Partial<LeadData>): LeadData {
  return {
    mainTechnology: {
      categoryPriority: 1,
      name: "TYPO3",
      version: "12",
    },
    technologies: [{ categoryPriority: 1, name: "TYPO3", version: "12" }],
    company: { salesVolume: 2_000_000, county: "SH" },
    metrics: { desktop: {}, mobile: {} },
    hoster: { server: ["srv"] },
    businessFields: ["IT"],
    screenshot: "base64",
    description: "desc",
    languages: ["de"],
    potential: 0.72,
    leadId: "l-1",
    ...overrides,
  };
}
