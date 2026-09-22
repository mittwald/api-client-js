import type { MfaStatusData } from "../../auth/Mfa/types";

export function buildMfaStatusData(
  overrides?: Partial<MfaStatusData>,
): MfaStatusData {
  return {
    initialized: true,
    confirmed: true,
    ...overrides,
  };
}
