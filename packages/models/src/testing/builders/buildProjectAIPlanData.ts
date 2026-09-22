import type { ProjectAIPlanData } from "../../ai/ProjectAIPlan/types";

export function buildProjectAIPlanData(
  overrides?: Partial<ProjectAIPlanData>,
): ProjectAIPlanData {
  return {
    keys: {
      planLimit: 1000,
      available: 100,
      used: 0,
    },
    nextTokenReset: "2024-01-01T00:00:00.000Z",
    modelTermsApprovalRequired: false,
    projectId: "project-id",
    planId: "plan-id",
    ...overrides,
  };
}
