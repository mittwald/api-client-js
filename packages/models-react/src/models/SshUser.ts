import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SshUserGhost = makeGhost(Models.SshUser);
export type SshUserGhost = MaybeReactGhost<Models.SshUser>;

export const SshUserListQueryGhost = makeGhost(Models.SshUserListQuery);
export type SshUserListQueryGhost = MaybeReactGhost<Models.SshUserListQuery>;
