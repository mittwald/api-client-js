import type { FinderProfileRequestData } from "../../fyndr/FinderProfileRequest/types.js";

export function buildFinderProfileRequestData(
  overrides?: Partial<FinderProfileRequestData>,
): FinderProfileRequestData {
  return {
    createdOn: "2024-01-01T00:00:00.000Z",
    requestedBy: { userId: "u-1" },
    domain: "example.com",
    status: "APPROVED",
    customerId: "c-1",
    profileId: "p-1",
    ...overrides,
  };
}
