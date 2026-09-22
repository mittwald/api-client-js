import type { ExtensionListItemData } from "../../marketplace/Extension/types";

export function buildExtensionListItemData(
  overrides?: Partial<ExtensionListItemData>,
): ExtensionListItemData {
  return {
    support: { email: "s@example.com", inherited: false },
    publishedAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    statistics: { amountOfInstances: 3 },
    contributorId: "contributor-id",
    subTitle: { de: "Untertitel" },
    id: "extension-list-item-id",
    logoRefId: "logo-ref-id",
    name: "Test Extension",
    description: "desc",
    context: "project",
    state: "enabled",
    disabled: false,
    published: true,
    blocked: false,
    assets: [],
    scopes: [],
    tags: [],
    ...overrides,
  };
}
