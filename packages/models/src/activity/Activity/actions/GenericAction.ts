import type { ActivityGenericActionData } from "../types.js";

import { ActivityAction } from "../ActivityAction.js";

/**
 * Fallback for names the registry does not know. Renders without a display name
 * and without a title translation, so it is a stopgap, not a target.
 */
export class GenericAction extends ActivityAction<ActivityGenericActionData> {
  constructor(data: ActivityGenericActionData) {
    super(data);
  }
}
