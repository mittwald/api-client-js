import type { SessionTokenData } from "../../auth/SessionToken/types.js";

export function buildSessionTokenData(
  overrides?: Partial<SessionTokenData>,
): SessionTokenData {
  return {
    expires: "2099-01-01T00:00:00.000Z",
    refreshToken: "refresh-token",
    token: "session-token",
    ...overrides,
  };
}
