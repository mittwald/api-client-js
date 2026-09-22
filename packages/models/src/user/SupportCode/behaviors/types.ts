import type { AxiosRequestConfig } from "axios";

import type { SupportCodeData } from "../types";

export interface SupportCodeBehaviors {
  get: (requestConfig?: AxiosRequestConfig) => Promise<SupportCodeData>;
}
