import type { MfaStatusData } from "../../auth/Mfa/types.js";

export function buildMfaStatusData(
  overrides?: Partial<MfaStatusData>,
): MfaStatusData {
  return {
    initialized: true,
    confirmed: true,
    ...overrides,
  };
}
