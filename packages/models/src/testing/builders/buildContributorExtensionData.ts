import type { ContributorExtensionData } from "../../marketplace/ContributorExtension/types";

export function buildContributorExtensionData(
  overrides?: Partial<ContributorExtensionData>,
): ContributorExtensionData {
  return {
    statistics: { amountOfInstances: 5 },
    contributorId: "contributor-id",
    id: "contributor-extension-id",
    subTitle: { de: "Untertitel" },
    verificationRequested: false,
    name: "Own Extension",
    context: "project",
    functional: true,
    published: false,
    verified: false,
    secrets: [],
    assets: [],
    scopes: [],
    ...overrides,
  };
}
