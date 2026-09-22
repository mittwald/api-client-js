import type { ContributorExtensionListItemData } from "../../marketplace/ContributorExtension/types";

export function buildContributorExtensionListItemData(
  overrides?: Partial<ContributorExtensionListItemData>,
): ContributorExtensionListItemData {
  return {
    id: "contributor-extension-list-item-id",
    statistics: { amountOfInstances: 5 },
    contributorId: "contributor-id",
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
