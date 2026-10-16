import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const MailSettingsGhost = makeGhost(Models.MailSettings);
export type MailSettingsGhost = MaybeReactGhost<Models.MailSettings>;
