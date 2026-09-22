import type { InitMfaResponseData } from "../../auth/Mfa/types";

export function buildMfaInitData(
  overrides?: Partial<InitMfaResponseData>,
): InitMfaResponseData {
  return {
    url: "otpauth://totp/mittwald?secret=THE-SECRET",
    barcode: "base64-barcode-content",
    ...overrides,
  };
}
