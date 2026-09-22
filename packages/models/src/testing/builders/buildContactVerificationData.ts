import type { ContactVerificationData } from "../../domain/ContactVerification/types";

export function buildContactVerificationData(
  overrides?: Partial<ContactVerificationData>,
): ContactVerificationData {
  return {
    typeData: { value: "user@example.com", type: "email" },
    status: "pending",
    id: "cv-id",
    ...overrides,
  };
}
