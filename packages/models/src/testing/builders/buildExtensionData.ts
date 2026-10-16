import type { ExtensionData } from "../../marketplace/Extension/types.js";

export function buildExtensionData(
  overrides?: Partial<ExtensionData>,
): ExtensionData {
  return {
    support: { email: "s@example.com", inherited: false },
    publishedAt: "2024-01-01T00:00:00.000Z",
    createdAt: "2024-01-01T00:00:00.000Z",
    statistics: { amountOfInstances: 3 },
    contributorId: "contributor-id",
    subTitle: { de: "Untertitel" },
    logoRefId: "logo-ref-id",
    name: "Test Extension",
    description: "desc",
    context: "project",
    id: "extension-id",
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
