import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const BackupScheduleGhost = makeGhost(Models.BackupSchedule);
export type BackupScheduleGhost = MaybeReactGhost<Models.BackupSchedule>;

export const BackupScheduleListQueryGhost = makeGhost(
  Models.BackupScheduleListQuery,
);
export type BackupScheduleListQueryGhost =
  MaybeReactGhost<Models.BackupScheduleListQuery>;
