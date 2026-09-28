import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const LeadsExportGhost = makeGhost(Models.LeadsExport);
export type LeadsExportGhost = MaybeReactGhost<Models.LeadsExport>;

export const LeadsExportListQueryGhost = makeGhost(Models.LeadsExportListQuery);
export type LeadsExportListQueryGhost =
  MaybeReactGhost<Models.LeadsExportListQuery>;
