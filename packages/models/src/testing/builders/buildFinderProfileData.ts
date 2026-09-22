import type { FinderProfileData } from "../../fyndr/FinderProfile/types";

export function buildFinderProfileData(
  overrides?: Partial<FinderProfileData>,
): FinderProfileData {
  return {
    tariff: {
      reservation: { tariffLimit: 0, available: 0, used: 0 },
      unlocked: { tariffLimit: 0, available: 0, used: 0 },
      nextUnlockRenewalDate: "2024-06-01T00:00:00.000Z",
    },
    approvedOn: "2024-01-01T00:00:00.000Z",
    domain: "example.com",
    customerId: "c-1",
    ...overrides,
  };
}
