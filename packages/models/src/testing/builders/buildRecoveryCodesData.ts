import type { RecoveryCodesData } from "../../auth/RecoveryCodes/types.js";

export function buildRecoveryCodesData(
  overrides?: Partial<RecoveryCodesData>,
): RecoveryCodesData {
  return {
    codes: ["code-1", "code-2", "code-3"],
    ...overrides,
  };
}
