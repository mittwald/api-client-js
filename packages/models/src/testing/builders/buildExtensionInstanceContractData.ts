import type { ExtensionInstanceContractData } from "../../marketplace/ExtensionInstance/types.js";

export function buildExtensionInstanceContractData(
  overrides?: Partial<ExtensionInstanceContractData>,
): ExtensionInstanceContractData {
  return {
    interactionRequired: false,
    variantName: "Variant 1",
    variantKey: "variant-1",
    currentPrice: 1000,
    status: "active",
    ...overrides,
  };
}
