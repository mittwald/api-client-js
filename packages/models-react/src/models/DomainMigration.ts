import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const DomainMigrationGhost = makeGhost(Models.DomainMigration);
export type DomainMigrationGhost = MaybeReactGhost<Models.DomainMigration>;

export const DomainMigrationListQueryGhost = makeGhost(
  Models.DomainMigrationListQuery,
);
export type DomainMigrationListQueryGhost =
  MaybeReactGhost<Models.DomainMigrationListQuery>;
