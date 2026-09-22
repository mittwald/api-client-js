import type { LicenseData } from "../../app/License/types.js";

export function buildLicenseData(
  overrides?: Partial<LicenseData>,
): LicenseData {
  return {
    reference: {
      aggregate: "project",
      domain: "project",
      id: "project-id",
    },
    keyReference: { key: "secret-key" },
    description: "my license",
    kind: "typo3-elts",
    id: "license-id",
    meta: {},
    ...overrides,
  };
}
