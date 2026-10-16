import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SftpUserGhost = makeGhost(Models.SftpUser);
export type SftpUserGhost = MaybeReactGhost<Models.SftpUser>;

export const SftpUserListQueryGhost = makeGhost(Models.SftpUserListQuery);
export type SftpUserListQueryGhost = MaybeReactGhost<Models.SftpUserListQuery>;
