import type { ExtensionInstanceListItemData } from "../../marketplace/ExtensionInstance/types.js";

export function buildExtensionInstanceListItemData(
  overrides?: Partial<ExtensionInstanceListItemData>,
): ExtensionInstanceListItemData {
  return {
    chargeability: {
      reasons: { isNonChargeableCustomer: false, isOwnExtension: true },
      isChargeable: false,
    },
    aggregateReference: {
      aggregate: "project",
      domain: "project",
      id: "project-id",
    },
    id: "extension-instance-list-item-id",
    contributorId: "contributor-id",
    extensionName: "Test Extension",
    parentCustomerId: "customer-id",
    contributorName: "Contributor",
    webhookExecutionHalted: false,
    extensionId: "extension-id",
    pendingInstallation: false,
    pendingRemoval: false,
    consentedScopes: [],
    disabled: false,
    ...overrides,
  };
}
