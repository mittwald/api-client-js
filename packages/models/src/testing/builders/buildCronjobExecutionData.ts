import type {
  CronjobExecutionListItemData,
  CronjobExecutionData,
} from "../../cronjob/CronjobExecution/types.js";

export function buildCronjobExecutionData(
  overrides?: Partial<CronjobExecutionData>,
): CronjobExecutionData {
  return {
    start: "2024-01-01T00:00:00.000Z",
    triggeredBy: { id: "user-id" },
    durationInMilliseconds: 5000,
    logPath: "/logs/exec.log",
    cronjobId: "cronjob-id",
    id: "execution-id",
    status: "Complete",
    successful: true,
    exitCode: 0,
    ...overrides,
  };
}

export function buildCronjobExecutionListItemData(
  overrides?: Partial<CronjobExecutionListItemData>,
): CronjobExecutionListItemData {
  // CronjobExecutionListItemData and CronjobExecutionData share the same schema.
  return buildCronjobExecutionData(overrides as Partial<CronjobExecutionData>);
}
