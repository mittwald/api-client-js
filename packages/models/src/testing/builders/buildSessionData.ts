import type {
  SessionListItemData,
  SessionData,
} from "../../user/Session/types";

export function buildSessionData(
  overrides: Partial<SessionData> = {},
): SessionData {
  return {
    device: { browser: "Firefox", type: "desktop", os: "Linux" },
    created: "2024-01-01T00:00:00.000Z",
    tokenId: "token-id",
    ...overrides,
  };
}

export function buildSessionListItemData(
  overrides: Partial<SessionListItemData> = {},
): SessionListItemData {
  return {
    device: { browser: "Firefox", type: "desktop", os: "Linux" },
    created: "2024-01-01T00:00:00.000Z",
    tokenId: "token-id",
    ...overrides,
  };
}
