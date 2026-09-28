import type { TldData } from "../../domain/Tld/types.js";

// TldData === TldListItemData (both resolve to DomainTopLevel).
export function buildTldData(overrides?: Partial<TldData>): TldData {
  return {
    transferAuthCodeRequired: false,
    transferAuthentication: "code",
    irtp: false,
    rgpDays: 30,
    tld: "de",
    ...overrides,
  };
}
