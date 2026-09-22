import type { RelocationRequestApiData } from "../types.js";

export interface RelocationBehaviors {
  create: (data: RelocationRequestApiData) => Promise<void>;
}
