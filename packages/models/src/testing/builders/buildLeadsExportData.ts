import type { LeadsExportData } from "../../fyndr/LeadsExport/types.js";

export function buildLeadsExportData(
  overrides?: Partial<LeadsExportData>,
): LeadsExportData {
  return {
    exportedAt: "2024-01-01T00:00:00.000Z",
    exportedBy: { userId: "u-1" },
    customerId: "c-1",
    exportId: "e-1",
    leadCount: 5,
    ...overrides,
  };
}
