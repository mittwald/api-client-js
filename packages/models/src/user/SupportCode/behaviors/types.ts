import { SupportCodeData } from "../types.js";

export interface SupportCodeBehaviors {
  get: () => Promise<SupportCodeData>;
}
