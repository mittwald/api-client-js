import type {
  ApiTokenListItemData,
  ApiTokenData,
} from "../../user/ApiToken/types.js";

export function buildApiTokenData(
  overrides: Partial<ApiTokenData> = {},
): ApiTokenData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    apiTokenId: "apitoken-id",
    description: "test token",
    roles: ["api_read"],
    ...overrides,
  };
}

export function buildApiTokenListItemData(
  overrides: Partial<ApiTokenListItemData> = {},
): ApiTokenListItemData {
  return {
    createdAt: "2024-01-01T00:00:00.000Z",
    apiTokenId: "apitoken-id",
    description: "test token",
    roles: ["api_read"],
    ...overrides,
  };
}
