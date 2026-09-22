import type { UserData } from "../../user/User/types";

export function buildUserData(
  overrides: Partial<UserData> = {},
): UserData {
  return {
    person: { lastName: "Lovelace", firstName: "Ada" },
    userId: "user-id",
    ...overrides,
  };
}
