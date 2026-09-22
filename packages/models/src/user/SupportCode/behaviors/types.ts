import type { AxiosRequestConfig } from "axios";

import type { SupportCodeData } from "../types.js";

export interface SupportCodeBehaviors {
  get: (requestConfig?: AxiosRequestConfig) => Promise<SupportCodeData>;
}
