import type { RelocationRequestApiData } from "../types";

export interface RelocationBehaviors {
  create: (data: RelocationRequestApiData) => Promise<void>;
}
