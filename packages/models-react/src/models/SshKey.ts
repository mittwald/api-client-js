import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const SshKeyGhost = makeGhost(Models.SshKey);
export type SshKeyGhost = MaybeReactGhost<Models.SshKey>;

export const SshKeyListQueryGhost = makeGhost(Models.SshKeyListQuery);
export type SshKeyListQueryGhost = MaybeReactGhost<Models.SshKeyListQuery>;
