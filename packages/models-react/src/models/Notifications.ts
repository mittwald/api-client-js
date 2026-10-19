import { makeGhost, type MaybeReactGhost } from "@mittwald/react-ghostmaker";
import * as Models from "@mittwald/api-models";

export const NotificationsGhost = makeGhost(Models.Notifications);
export type NotificationsGhost = MaybeReactGhost<Models.Notifications>;
