import type { RegisterRequestData } from "../../auth/Registration/types.js";

export function buildRegisterRequestData(
  overrides?: Partial<RegisterRequestData>,
): RegisterRequestData {
  return {
    person: {
      lastName: "Lovelace",
      firstName: "Ada",
    },
    password: "correct-horse-battery-staple",
    email: "user@example.com",
    ...overrides,
  };
}
