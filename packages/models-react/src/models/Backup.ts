import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const BackupGhost = makeGhost(Models.Backup);
export type BackupGhost = MaybeReactGhost<Models.Backup>;

export const BackupListQueryGhost = makeGhost(Models.BackupListQuery);
export type BackupListQueryGhost = MaybeReactGhost<Models.BackupListQuery>;
