import type { UserData } from "../../user/User/types";

export function buildNewsletterSubscriberUserData(
  overrides?: Partial<UserData>,
): UserData {
  return {
    person: {
      lastName: "Lovelace",
      firstName: "Ada",
    },
    userId: "self",
    ...overrides,
  };
}
