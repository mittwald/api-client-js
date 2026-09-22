import type { ExtensionInstanceData } from "../../marketplace/ExtensionInstance/types";

export function buildExtensionInstanceData(
  overrides?: Partial<ExtensionInstanceData>,
): ExtensionInstanceData {
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
    parentCustomerId: "customer-id",
    contributorId: "contributor-id",
    extensionName: "Test Extension",
    contributorName: "Contributor",
    webhookExecutionHalted: false,
    extensionId: "extension-id",
    id: "extension-instance-id",
    pendingInstallation: false,
    pendingRemoval: false,
    consentedScopes: [],
    disabled: false,
    ...overrides,
  };
}
