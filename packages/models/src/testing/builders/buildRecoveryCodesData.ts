import type { RecoveryCodesData } from "../../auth/RecoveryCodes/types";

export function buildRecoveryCodesData(
  overrides?: Partial<RecoveryCodesData>,
): RecoveryCodesData {
  return {
    codes: ["code-1", "code-2", "code-3"],
    ...overrides,
  };
}
